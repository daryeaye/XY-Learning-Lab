# Design Your Playground! — local redesign

This self-contained student web app adapts the supplied Playground slides and the verified Google Form answer keys. It runs locally with Node.js; there is no publishing step, account connection, backend, tracking, or external dependency.

## Open the three versions

Run `npm start` (or `node server.mjs`) from this folder, then open:

- Original slide layout: <http://127.0.0.1:8766/?view=original>
- Text on the artwork: <http://127.0.0.1:8766/?view=immersive>
- Text beside the artwork: <http://127.0.0.1:8766/?view=split>

All versions share the same 14 pages, mathematics, progress, and student design. The small links above the slide switch versions. The stage keeps one fixed aspect ratio and fits the available window, with Previous, numbered pages, and Next underneath.

On Windows, `Start Playground.cmd` runs the same local server. Keep its terminal open while using the app.

## Content and interaction

The original slide wording is retained. Explicitly requested adaptations replace Google/copy-and-paste directions with the image tray and playground drag/tap controls. Original slide 10 becomes app pages 10–11; original slides 12–13 become app page 13. The original title, description, standards, and exact copyright remain. No character name or extra lesson story has been added.

Pages 3–8 and 11 grade only the two long perimeter/area answers. The smaller boxes are scratch work. Students must press **Check my answer** and get both results correct before proceeding; numbered navigation follows the same rule. Changing a checked answer locks later pages again while preserving the work. Recognized units, spaces, reordered terms, and algebraically equivalent expressions are accepted. A larger incorrect coefficient containing the expected text is rejected.

Page 10 offers 20 unnamed equipment pictures and requires a selection and name. Page 13 has the six interview items plus the student's custom item: place three different interview items and the custom item in the four plots. Click/tap a tray item to place or remove it. Drag placed items between plots, or focus one and use arrow keys; Delete removes it. An occupied destination swaps the two items. The final page carries the actual arrangement and lists four sets of dimensions. Its equipment-total and remaining-grass answers depend on the chosen equipment.

The hand icon reveals a hint on hover or keyboard focus; moving away hides it. Touch users can toggle it. Large units remain outside answer fields. Progress is retained in this browser without a visible save label or button.

## Files

- `app.js`: rendering, student inputs, checks, hints, drag/tap/keyboard controls.
- `data.js`: source wording, dimensions, equipment catalog, plot positions.
- `math-engine.js`: safe algebra parser and dynamic final-area calculations.
- `progression.js`: prerequisites shared by every visual version.
- `index.html`, `styles.css`: fixed slide shell and the three visual styles.
- `lesson-source.json`: source transcription and answer-key provenance.
- `assets/`: provided artwork and generated local artwork.
- `ARTWORK-v2.md`: artwork provenance, generation prompts, and placement notes.
- `CHANGELOG.md`, `VALIDATION.md`: redesign notes and completed checks.
- `tests/`: portable math and progression tests; run `npm test` or `node --test tests/*.mjs`.
- `references/Playground.pdf`, `references/Playground.pptx`: unchanged original source exports for review.
- `docs/`: unchanged source audit, supplied-character notes, and the earlier read-only live-site study.
- `MANIFEST.sha256`: checksums for the prepared package.

The source Drive files, Google Site/Form, live XY Learning Lab, and Cloudflare were not changed. The repository replacement is restricted to `Project Two/`; handoff documents and every other repository path must remain unchanged.

©TruePBL. All rights reserved.
