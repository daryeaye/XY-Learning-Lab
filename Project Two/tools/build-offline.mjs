import { readFile, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

// Run with Node. The resulting single HTML file opens directly via file://.
// --check-only reports missing assets and validates JavaScript without writing.
const root = fileURLToPath(new URL('../', import.meta.url));
const checkOnly = process.argv.includes('--check-only');
const unknown = process.argv.slice(2).filter(arg => arg !== '--check-only');
if (unknown.length) throw new Error(`Unknown arguments: ${unknown.join(', ')}`);

const moduleOrder = [
  'data.js', 'math-engine.js', 'equipment-views.js', 'buddy-sprites.js',
  'scene.js', 'progression.js', 'app.js',
];
const mimeTypes = new Map([
  ['.png', 'image/png'], ['.jpg', 'image/jpeg'], ['.jpeg', 'image/jpeg'],
  ['.svg', 'image/svg+xml'], ['.ttf', 'font/ttf'], ['.woff', 'font/woff'],
  ['.woff2', 'font/woff2'], ['.webp', 'image/webp'], ['.gif', 'image/gif'],
]);
const resolveLocal = name => {
  const absolute = path.resolve(root, name);
  const relative = path.relative(root, absolute);
  if (relative.startsWith('..') || path.isAbsolute(relative)) {
    throw new Error(`Asset must stay inside the project: ${name}`);
  }
  return absolute;
};
const normalizeAsset = name => name.replaceAll('\\', '/').replace(/^\.\//, '');
const sources = new Map(await Promise.all(moduleOrder.map(async name => [
  name, (await readFile(resolveLocal(name), 'utf8')).replace(/^\uFEFF/, ''),
])));
let css = await readFile(resolveLocal('styles.css'), 'utf8');
let html = await readFile(resolveLocal('index.html'), 'utf8');

const atlasFiles = [...sources.get('equipment-views.js').matchAll(
  /["']file["']\s*:\s*["']([^"']+)["']/g,
)].map(match => normalizeAsset(match[1]));
if (new Set(atlasFiles).size !== 14) {
  throw new Error(`Expected 14 unique equipment atlas sheets; found ${new Set(atlasFiles).size}.`);
}
const buddyFiles = [...sources.get('buddy-sprites.js').matchAll(
  /["']file["']\s*:\s*["']([^"']+)["']/g,
)].map(match => normalizeAsset(match[1]));
if (new Set(buddyFiles).size !== 10) throw new Error('Expected ten original buddy PNGs.');
const assets = new Set([
  ...atlasFiles,
  ...buddyFiles,
  'assets/park-empty.png',
  'assets/court-reference.jpg',
  'assets/cover-playground.jpg',
  'assets/office-normal-pixel.png',
  'assets/office-happy-pixel.png',
  'assets/office-surprised-pixel.png',
]);
const cssUrlPattern = /url\(\s*(["']?)([^"')]+)\1\s*\)/g;
for (const match of css.matchAll(cssUrlPattern)) {
  const url = match[2].trim();
  if (/^(?:data:|#)/i.test(url)) continue;
  if (/^(?:[a-z]+:|\/\/)/i.test(url)) {
    throw new Error(`Offline CSS cannot load a remote URL: ${url}`);
  }
  const normalized = normalizeAsset(url);
  if (!normalized.startsWith('assets/')) {
    throw new Error(`Unexpected CSS dependency outside assets/: ${url}`);
  }
  assets.add(normalized);
}

const assetMap = Object.create(null);
const missing = [];
let sourceAssetBytes = 0;
for (const name of [...assets].sort()) {
  let info;
  try { info = await stat(resolveLocal(name)); }
  catch (error) {
    if (error.code === 'ENOENT') { missing.push(name); continue; }
    throw error;
  }
  if (!info.isFile()) throw new Error(`Asset is not a file: ${name}`);
  const mime = mimeTypes.get(path.extname(name).toLowerCase());
  if (!mime) throw new Error(`Unknown asset type: ${name}`);
  sourceAssetBytes += info.size;
  if (!checkOnly) {
    assetMap[name] = `data:${mime};base64,${(await readFile(resolveLocal(name))).toString('base64')}`;
  }
}

// These modules use named imports/exports only. Separate IIFEs preserve each
// module's lexical scope; dependency order is checked before any output writes.
const available = new Set();
const chunks = ['"use strict";', 'const __modules = Object.create(null);'];
for (const name of moduleOrder) {
  let source = sources.get(name);
  source = source.replace(
    /^\s*import\s*\{([^}]+)\}\s*from\s*["']([^"']+)["'];?\s*$/gm,
    (_statement, bindings, dependency) => {
      const dep = path.posix.normalize(path.posix.join(path.posix.dirname(name), dependency));
      if (!available.has(dep)) throw new Error(`${name} imports unavailable or out-of-order module ${dep}.`);
      const destructured = bindings.trim().replace(/\s+as\s+/g, ': ');
      return `const {${destructured}} = __modules[${JSON.stringify(dep)}];`;
    },
  );
  const exports = [];
  source = source.replace(
    /\bexport\s+(?=(?:async\s+)?function\s|(?:const|let|var|class)\s)/g,
    '',
  );
  for (const match of sources.get(name).matchAll(
    /\bexport\s+(?:async\s+)?(?:function|const|let|var|class)\s+([A-Za-z_$][\w$]*)/g,
  )) exports.push(match[1]);
  // Reject unsupported syntax rather than silently ship a partially bundled app.
  if (/^\s*(?:import|export)\b/m.test(source) || /\bimport\s*\(/.test(source) || /\bimport\.meta\b/.test(source)) {
    throw new Error(`Unsupported module syntax remains in ${name}.`);
  }
  chunks.push(`\n// ${name}\n__modules[${JSON.stringify(name)}] = (() => {\n${source}\nreturn Object.freeze({${exports.join(', ')}});\n})();`);
  available.add(name);
}
const moduleBundle = chunks.join('\n');
new vm.Script(`(() => {\n${moduleBundle}\n})();`, { filename: 'Playground-Final.inline.js' });

if (checkOnly) {
  console.log(JSON.stringify({
    mode: 'check-only', modules: moduleOrder.length, atlasSheets: new Set(atlasFiles).size,
    assetCount: assets.size, presentAssets: assets.size - missing.length,
    sourceAssetBytes, missing, syntax: 'passed', outputWritten: false,
  }, null, 2));
  if (missing.length) process.exitCode = 1;
} else {
  if (missing.length) throw new Error(`Missing required assets:\n${missing.join('\n')}`);
  const cssImages = new Map();
  css = css.replace(cssUrlPattern, (full, _quote, rawUrl) => {
    const url = rawUrl.trim();
    if (/^(?:data:|#)/i.test(url)) return full;
    const name = normalizeAsset(url);
    // CSS backgrounds share the already embedded asset map. Repeating a large
    // image's data URL in each rule inflated the portable file unnecessarily.
    // @font-face src does not accept custom properties, so keep fonts inline.
    if (mimeTypes.get(path.extname(name)).startsWith('image/')) {
      if (!cssImages.has(name)) cssImages.set(name, `--playground-image-${cssImages.size}`);
      return `var(${cssImages.get(name)})`;
    }
    return `url("${assetMap[name]}")`;
  });
  const cssSetup = [...cssImages].map(([name,variable]) =>
    `document.documentElement.style.setProperty(${JSON.stringify(variable)}, 'url("' + globalThis.PLAYGROUND_ASSETS[${JSON.stringify(name)}] + '")');`,
  ).join('\n');
  const script = `(() => {\n"use strict";\nglobalThis.PLAYGROUND_ASSETS = ${JSON.stringify(assetMap)};\n${cssSetup}\n${moduleBundle}\n})();`;
  new vm.Script(script, { filename: 'Playground-Final.inline.js' });
  const stylesheet = /<link\b[^>]*\bhref=["']\.\/styles\.css["'][^>]*>/gi;
  const appScript = /<script\b[^>]*\btype=["']module["'][^>]*\bsrc=["']\.\/app\.js["'][^>]*>\s*<\/script>/gi;
  if ([...html.matchAll(stylesheet)].length !== 1 || [...html.matchAll(appScript)].length !== 1) {
    throw new Error('Expected exactly one styles.css link and one app.js module script in index.html.');
  }
  html = html.replace(stylesheet, () => `<style>\n${css.replace(/<\/style/gi, '<\\/style')}\n</style>`);
  html = html.replace(appScript, () => `<script>\n${script.replace(/<\/script/gi, '<\\/script')}\n</script>`);
  const output = resolveLocal('Playground-Final.html');
  await writeFile(output, html, 'utf8');
  console.log(JSON.stringify({
    mode: 'build', output, modules: moduleOrder.length,
    atlasSheets: new Set(atlasFiles).size, assetCount: assets.size,
    sourceAssetBytes, outputBytes: Buffer.byteLength(html, 'utf8'),
    syntax: 'passed', externalRuntimeDependencies: 0,
  }, null, 2));
}
