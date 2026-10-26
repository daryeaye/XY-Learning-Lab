# Handoff V29 — YY Buddy artwork consistency

## Current verified release

Main Worker **5ad1f2dd-19c3-49dc-ad6d-56e858f38043** (**166**), deployment **62db5c10-1ccb-4b7b-a40a-3eadfa6a40a4**, is active at **100%**, recorded **2026-10-26T04:05:54.853Z** (**October 26, 2026 at 12:05:54 AM EDT**). Main module: **10,725,163 bytes**, SHA-256 **4bf00e1a5440546ba83b9b6735c3d3802ac4cb3b1dfe7d8d3112c792b7c6004c**. Private artwork Worker **xy-yy-art-v24** is **fe8ab164-4c8c-44e8-86a0-15782c44e7c2** (**4**), deployment **1ac5c1fe-2c99-4d8d-b1e7-00207067aa8c**, **100%**, compiled module **1,462 bytes**, SHA-256 **02aa9a77da884c652f5119c3e8b2fe037ac1e95ada1394e66930b476ad87e1c9**. Its complete managed collection contains **453 images: 300 new plus all 153 retained images**.

Started from verified V28 main **2ccb85d3-12f7-469e-844b-09c55ff79dd7** (165) and artwork **3d6c8e1f-d394-49fa-9fee-a37c079b514a** (3). Their original modules/settings/assets were captured before editing and retained as the healthy pre-release rollback pair. Freshly verify GitHub and both active/latest services before future changes.

Prepared modules: **1,116 checks**. Actual assembled Worker: **3,536 checks**, no misses or external fixture requests. Pre-activation browser: **123 checks**; published-code browser: **123 checks**, all recorded tests passing. Public verification matched **1,362 complete bodies** across both app domains and **16 protocol checks**. Every new encoded image passes zero alpha/visible-RGB differences from its source PNG. Independent source, retained-file and release-code reviews pass.

Read [V28](Handoff-v28.md), V27/V26/V25, the earlier artwork mapping in V24 and the mandatory [release checklist](docs/RELEASE-CHECKLIST.md). Retain every prior handoff. The next handoff after a successfully recorded V29 is **V30**.

## Requested change and reviewed artwork

The owner reviewed the local 270-body redraw collection, requested consistent head/height registration, then identified inconsistent Basic shirt logos and colors between normal/happy/sad. A five-petal happy flower versus the six-petal normal flower, different dinosaurs/cloud faces/stars, and a drifting teal shirt were concrete failures. This final pass uses a single canonical logo per outfit rather than independently asking AI to redraw each pose's emblem.

The local candidate includes **270 full body PNGs**: Basic 12 outfits and Deluxe/Premium/Champion six each, times three poses and three skin tones. It also includes **30 full headwear overlays**. All retain transparent **1728 × 2304** canvases. These files are local production inputs; generated artwork and private captures are not repository documentation assets.

The final consistency pass processes **108 Basic sprites**. **96** have changed RGB pixels, while the **12 normal-white canonical source sprites remain byte-identical**. The other **162 body sprites and 30 headwear overlays are byte-identical to the preceding reviewed local redraw release**. This does not mean those local redraw files are identical to the earlier live V28 artwork; publication must identify the actual changed live assets separately.

## Exact logo identity and controlled fabric correction

For each of the 12 Basic outfits, a transparent decal is extracted from the outfit's normal-white source, including the logo's face, outline and internal colors. Exactly the same decal pixels are translated, without scaling or warping, to the corresponding chest position in all nine state/skin variants. The Basic 02 flower has the same six petals and expression in each case; the same rule applies to the star, heart, sun, moon, leaf, lightning bolt, cloud, dinosaur, controller, note and strawberry. The source-normal sun has nine rays; the actual source design is retained consistently rather than replaced by a guessed ray count.

Built-in image generation supplies **plain fabric texture only**. It is not used as a replacement body. Narrow old-logo masks receive clean generated texture fitted to the surrounding target shirt with an RGB offset/gradient plane. Pixels outside the reviewed garment/old-logo/new-logo masks are restored exactly. No generated head, limb or body anatomy is used, and no complete outfit/body part is pasted onto a different figure.

Cloth-only monotone RGB quantile LUTs use the same outfit's normal-white shirt as the color reference, including Basic 11's teal correction. Existing folds and pose-specific shading remain. This is palette normalization, not a claim that every shaded cloth pixel or final histogram is identical. The canonical logo RGB pixels themselves are exact.

The mask review explicitly covers disconnected sun rays, the dinosaur's dark-green border, the cloud's dark-pink border, the lightning bolt's dark-orange border and strawberry greenery. Independent review caught an orange-cloth hue mask touching a brown neck. A warm-neck exclusion guard fixes that case. Two additional single boundary pixels were restored exactly from their original inputs after independent skin/outline-edge review; neither touches a canonical logo. Alpha-only checks would not have caught a wrong skin recolor, so skin/visual checks remain mandatory.

The local per-image manifest records original/output hashes, separate garment/erase/new-logo/allowed masks, canonical decal/hash, exact placement anchor, placed canonical RGB hash, color LUT, texture-fit parameters and before/after alpha-derived geometry. Production inputs are **candidate-v4** under the local artwork work folder. Earlier candidates are diagnostic, not release sources.

## Local evidence and limitations

Preparation reports **108/108 exact canonical placements**, **zero alpha changes**, **zero RGB changes outside the allowed masks**, and **108/108 unchanged measured geometry**. The canonical source box and source hash allow the independent verifier to establish that the decals came from the chosen normal-white source, rather than trusting only a new decal file. All 192 retained non-Basic/headwear files have source/output hashes.

The final independent review passes **all 108 Basic inputs with zero failures**. It confirms all 12 canonical decals match their original normal-white source RGB, all 108 placements match the canonical pixels, all alpha/bounds/protected masks/head/feet/skin guards pass, and all **192 retained files** match the prior local redraw hashes. A separate complete **300-file v3→v4 comparison** confirms exactly two changed files, each with exactly one RGB pixel restored from its original source and unchanged alpha. The verifier also reviewed all 108 enlarged chest images without another visual blocker. Local verification timestamps are **2026-10-26T03:46:11.658Z through 03:46:47.363Z** (October 25, **11:46 PM EDT**).

All 300 delivery WebP images pass lossless alpha and visible-RGB comparison against the final source PNGs; the exact public bodies subsequently match their encoded hashes. Source checks and encoded/runtime mapping checks are separate gates and both pass.

Local previews: the **90-white-sprite overview** covers all 30 outfits in normal/happy/sad; the **108-Basic chest overview** covers every Basic pose and tone. They are local evidence, not files to commit into this documentation repository. The root visual review found the revised logos and outfit colors consistent; the actual published-code browser pass is recorded below.

The previous local release's pose-specific anatomy, head shapes, limbs and full-canvas headwear registration remain. This pass does not claim a new pixel-identical head silhouette, identical joint grid or certified full-head/limb ratios. It preserves the prior sprite geometry rather than stretching heads or transplanting body parts. Cloth folds and sleeve poses remain different where the underlying pose differs.

## Image-generation provenance

Seven built-in imagegen requests were launched. Five successful clean-cloth donor images were saved (Basic 01–05); only Basic 02's clean cream fabric is needed by the final pipeline and is palette/gradient-fitted to the other shirts. The other donors remain local experiments.

The concurrent 05/06/07 batch returned one output-stage safety rejection in category `other`; 05's successful result was recovered. The exact rejected slot among 06/07 was not surfaced by the aggregate result, and no other result was returned before execution ended. No rejected request was retried and no CLI fallback was used. The final pipeline continues with the already available clean texture. Exact prompts, recovered raw files and the factual batch record are retained locally, without base64 payloads or secrets in GitHub.

## Persisted IDs, headwear and animations

This artwork work must not rename persisted outfit/headwear IDs, change configured prices/points/ownership, spend changes, migrate saved looks or require repurchasing. Preserve Basic/Deluxe IDs, the V24 Premium **40-1-3 through 40-16-18** triplets, Champion **60-1-3 through 60-16-18**, and headwear **40-A–F / 60-A–F**. Preserve independent mixed-tier selection/authorization and unavailable King behavior. Legacy persisted **Black / skin option 2** continues to select the brown artwork; do not rename that stored representation.

Champion outfit 5 remains **60-13-15**, with the prior **047 bare-head** correction retained. Old immutable artwork URLs, including all nine `-bare.webp` URLs and the full 153-image artwork baseline, remain reachable. New artwork must use new immutable paths and an additive complete manifest, never overwrite or drop historical paths.

Keep answer reactions at four normal/happy or normal/sad cycles, teacher positive/negative actions at two cycles, and separate headwear at **0 px normal, −1 CSS px happy, +1 CSS px sad**. Do not bake those CSS motion offsets into asset canvases. This pass does not add the earlier contemplated tier-80 surprise/cry animation.

New art is exposed through the finite **/api/yy-art/static/v29/** allowlist, mapped from the existing 300 body/headwear selections without changing saved IDs. Main/integration/lazy modules share the single **/api/v29/static/20261026a/native/index-studentv29.js** app/React owner; Project 2's back-import and Gradebook/PDF dependencies resolve to that same entry. The stable bootstrap revalidates. Old immutable code/art paths and the original complete managed ASSETS collection remain. Both-domain HEAD, conditional caching, byte-range/416, unknown-path and stale-bootstrap checks pass.

## Delivery, data preservation and required verification

The main/art Workers form one deployment dependency. Preserve all current bindings, complete managed assets, headers, routing, domains, cron, exposure settings, private YY_ART boundary and immutable source objects. Do not deploy a partial diagnostic artwork folder. Preserve the five connected canonical app/integration/lazy modules; if changing app script URLs, recursively resolve the complete graph and prove one app/React owner, including Project 2's back-import, Gradebook and PDF lazy paths.

No database migration, production test mutation or R2 object write was performed. All student work, grades, attempts, YY balances, receipts, look ownership/history and teacher settings remain. Preserve V28's banks/word-problem presentation/Boards Up behavior, V26 tables/release gates and all prior privacy and historical-bank contracts. Retain V23's polling reductions. Archive/purge and held Grades/dashboard/PDF optimization proposals remain held.

Official dry-run, inactive-stage module/configuration readback, fresh-head checks, activation and final readback match the tested package. Prepared modules: **1,116 checks**. Actual assembled Worker: **3,536 checks**, no misses or external fixture requests. Pre-activation browser: **123 checks**; published-code browser: **123 checks**, all recorded tests passing. Public verification matched **1,362 complete bodies** across both app domains and **16 protocol checks**. Every new encoded image passes zero alpha/visible-RGB differences from its source PNG. Independent source, retained-file and release-code reviews pass.

Browser reports record engine/version **157.0.8103.15** in Chrome/Chromium, with populated fictional SQLite/API fixtures and no production data mutation. The post-activation run uses the actual published public code. Student four-cycle reaction checks use the native reaction event; teacher two-cycle checks use actual positive/negative controls with the local backend. These do not claim every assignment answer-check workflow was exercised. In the local fictional worksheet fixture, default dates fail the fixture backend's validation, so only the fixture's API dates are normalized to exercise native PDF generation; deployed code is unchanged and production account behavior was not audited for this condition. The local fixture does not include source-sans-3.ttf, so its404 uses font fallback; no claim of production font failure is made. Actual Safari/WebKit, every production account and measured whole-account performance remain unverified.

Healthy pre-V29 recovery is main **2ccb85d3-12f7-469e-844b-09c55ff79dd7** (V28/165) plus artwork **3d6c8e1f-d394-49fa-9fee-a37c079b514a** (3). Never restore known-bad main **161** as healthy. Preserve all additive artwork paths and user data on rollback, then verify both active/latest services, exact public bodies and populated signed-in affected routes again.

The GitHub publication should contain this factual handoff and the approved documentation updates only. Keep prior handoffs and references. Do not add app bundles, generated PNG/WebP files, credentials, private configuration captures, fixtures or student records to this documentation release.
