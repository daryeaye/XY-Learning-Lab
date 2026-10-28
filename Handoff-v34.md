# Handoff V34 — YY Buddy pose registration

**DEPLOYED AND VERIFIED ON CLOUDFLARE.** Main **172 / 379c92c5-07fe-4dad-963c-6f956b1cc9c0**, deployment **`5de88a58-7661-447b-beaa-4fd89bf0e2c3`**, is active at **100%** from **`2026-10-28T01:22:51.869217Z`** (October 27, 2026, 09:22:51 PM EDT). Private artwork **5 / 818df882-1a64-44e5-9c63-20e42c462de5**, deployment **`3a172e35-9b53-4c1c-a03d-700d1bbdc326`**, is active at **100%** from **`2026-10-28T01:22:26.199195Z`** (October 27, 2026, 09:22:26 PM EDT), with the complete **693-image** managed collection. Active source, configuration, bindings and complete asset readback match the tested approved packages. Final live verification completed **`2026-10-28T01:31:37.199243+00:00`**. The user approved this concrete V34 release; the sole publisher staged, activated and verified it before preparing the six documentation records. No GitHub commit ID is fabricated in this document.

Start with this V34 handoff, then [Handoff-v33.md](Handoff-v33.md), [Handoff-v29.md](Handoff-v29.md), the retained earlier handoffs and [docs/RELEASE-CHECKLIST.md](docs/RELEASE-CHECKLIST.md). V34 is the current verified release. Older current-state wording is retained historical context, and every earlier handoff/log byte remains intact. Next handoff: **V35**; freshly capture actual Cloudflare and GitHub before further work.

## Captured production baseline and prepared result

Fresh service capture at **2026-10-28T00:15:36.404Z** established:

| Item | Captured current production |
| --- | --- |
| Main service | `xy-learning-lab` |
| Main version | **171 / 66f7e61c-0ca9-4c06-abb7-ae355acc0662** |
| Main deployment | `cd75d12e-346c-4882-98e3-794e90d50234`, 100%, activated `2026-10-28T00:04:34.880096Z` |
| Main module | **7,699,428 bytes**, SHA-256 `c36b1561724e6be3ca7978dd3e2d10495b87373ac35548f55bc9892abf391fed` |
| Private artwork service | `xy-yy-art-v24` |
| Artwork version | **4 / fe8ab164-4c8c-44e8-86a0-15782c44e7c2** |
| Artwork deployment | `1ac5c1fe-2c99-4d8d-b1e7-00207067aa8c`, 100%; complete 453-image collection |
| GitHub main | `f80e24ba09b635bd0193831e20fb9f191750a5b2`, freshly captured before local preparation |

Prepared main module: **7,810,889 bytes**, SHA-256 **`f56b56453363437a23e59cb25b647c84e8ba43e6a8d59f036fad6c2e80928283`**. Official local Wrangler dry-run passed this exact module; gzip size **2,655,801 bytes**. The existing 233-byte `_headers` remains SHA-256 `6a3077bed172e1fd2632fb114f786e51cb3e640c692d3ad673952bf8ab6dc387`.

## Verified V34 activation

Main **172 / 379c92c5-07fe-4dad-963c-6f956b1cc9c0**, deployment **`5de88a58-7661-447b-beaa-4fd89bf0e2c3`**, is active at **100%** from **`2026-10-28T01:22:51.869217Z`** (October 27, 2026, 09:22:51 PM EDT). Private artwork **5 / 818df882-1a64-44e5-9c63-20e42c462de5**, deployment **`3a172e35-9b53-4c1c-a03d-700d1bbdc326`**, is active at **100%** from **`2026-10-28T01:22:26.199195Z`** (October 27, 2026, 09:22:26 PM EDT), with the complete **693-image** managed collection. Active source, configuration, bindings and complete asset readback match the tested approved packages.

Both domains (xylearninglab.t-pbl.com, student.xylearninglab.t-pbl.com) passed **1,456 complete published-body matches** and **42 protocol checks**. The actual published-code replay passed **11 signed-in scenarios / 189 acceptance assertions**, with fictional APIs and no unhandled exceptions, missing resources or local database errors. Browser: **157.0.8103.15**; this does not establish actual Safari/WebKit or every production account. Verification completed `2026-10-28T01:31:37.199243+00:00`. The table above records the captured pre-release baseline; the V34 receipts in this section supersede it as current state.

Recheck actual main/art active and latest state, safe settings, bindings, complete managed assets and GitHub immediately before any approved external write. A captured log, local freeze or user approval is not an atomic publisher lock. Use one publisher and stop/reconcile if another update changes the baseline.

## What caused the apparent size change

The live native buddy renderer already uses a fixed 3:4 container and identically sized absolute normal/happy/sad body layers. Pose selection changes opacity; it does not apply a different body scale or height. A fresh rendering probe of actual component output and current CSS confirmed that behavior. At student width 118 CSS pixels the canvas height is about 157.33 CSS pixels; all source images are 1728 × 2304.

The visible drawings inside those equal canvases differed in head contour, collar/torso position, waist, garment width and floor. Whole-image alpha bounds alone hid some internal proportion differences. Extremely faint nonzero-alpha debris also reached canvas edges in many originals, so `alpha > 0` bounds were unsuitable alignment guides. The audit used supported figure contours and visible garment landmarks, with alpha ≥128 screening, followed by enlarged and animated review.

This release corrects image registration. It does not add pose-dependent CSS scaling, change the native renderer or compensate by stretching the display container. Visible collar/fork guides are not certified hidden bone joints; projected raised arms and bent legs remain pose-specific.

## Artwork correction and preserved style

The active inventory is **30 outfits × 3 skin tones × 3 poses = 270 bodies**, plus **30 separate headwear overlays**. Basic has 12 outfits/108 bodies; Deluxe, Premium and Champion each have 6 outfits/54 bodies. This task does not introduce King/80, new tiers, new outfit identities or a surprise/cry animation.

Each outfit's existing **white normal** is its unchanged registration reference. The other poses and tones map continuously to that outfit's reference crown/head contour, visible collar, semantic garment waist when reliable, central garment band and supported floor. This is not a claim that every different outfit's original normal drawing has identical hidden anatomy. All **30 white-normal PNGs remain byte-identical** and retain their original public WebP URLs.

The transform remaps the complete original raster, using nearest-neighbor samples. It does not paste heads, limbs or clothing pieces onto a different body, generate new character art, repaint skin or introduce a new color palette. Existing full canvases and source files remain untouched. All 270 output palettes were checked against their source RGBA palettes. Pixel counts/locations can change through registration; palette preservation must not be confused with every full image remaining byte-identical.

One affine fit handles the upper head after vertical mapping. Row-by-row head fitting was rejected because it could kink a pixel-art outline. Torso fitting is delayed until the reviewed core band, avoiding an unnecessarily narrow raised shoulder/chest. Horizontal scale relaxation finishes above the visible bare-leg fork; below that point the legs and feet receive **one constant horizontal translation**, avoiding a changing horizontal shear or wedge through the toes.

The final local geometry set is `registered-v4`, with manifest SHA-256 **`2dc0e2bd025654a4e687af135c170e0b478a80c7c3e3c048a082cb38f53c07da`**. Earlier local prototypes/v1/v2/v3 remain diagnostic history, not deployment inputs.

### Surface-guide exceptions and manual review

**24 reviewed pose-visible-gap exceptions** omit a misleading fork anchor. In these images the transparent gap immediately below a shirt hem is a pose-dependent surface cue, not a hip joint. Mapping a short source hem-to-gap band onto a much larger normal-reference band stretched a dark hem/upper-leg outline several times thicker. The exception retains collar, rigid logo, semantic hem/waist and floor registration while avoiding that artificial strip. The final set has 21 affected Basic variants and 3 Deluxe 01 sad variants; it is not an instruction to omit fork guides generally.

All exceptions were reviewed in the final v4 comparisons. Do not reintroduce the anchor merely to force every diagnostic fork number to match. The bare-leg constant-translation rule still applies at the actual mapped fork.

Cream blouses and open coats require garment-aware measurements. Six Premium 04 yellow/brown source guides were corrected because a generic warm-skin detector read through cream fabric to the tie. Their corrected source collar/waist/core guides were reviewed in all nine pose/tone combinations. The final nine Premium 04 images have crown 395, upper-head width 1127, supported floor 2185 and visible fork 1883 in the independent screen. Champion 05's open coat still hides intrinsic torso width; its reviewed garment silhouette must not be described as an exact unseen skeleton.

## Outfit graphics, skin colors and headwear

All **108 Basic canonical logo RGBA rectangles** remain exact, translated without resizing or redrawing. This protects the V29 requirements for identical petals, stars, clouds, dinosaurs and other shirt graphics across poses/tones. Rechecking only approximate colors or the logo name would be insufficient. Keep all 12 source decals and their exact rectangle/placement records for future edits.

White/yellow/brown artwork retains its existing source palette. Stored skin option **Black** still maps to brown artwork; no persisted skin value is renamed. Original outfit, logo, skin and accessory colors are not recolored by V34. Existing cross-state costume-color differences outside the corrected geometry are not silently claimed fixed.

All **30 headwear images and public URLs remain unchanged**. Their full 1728 × 2304 canvas registration stays separate from the body. Native headwear motion remains normal **0**, happy **−1 CSS pixel**, sad **+1 CSS pixel**. Do not bake those offsets into overlays or apply them twice.

Native correct/incorrect reaction sequences, durations and sounds remain unchanged: the existing student four-cycle and teacher two-cycle timing is retained. The current ordinary reaction target is happy/sad around normal. V34 does not implement earlier proposed surprise/happy or sad/cry sequences. Keep saved outfit/headwear IDs, independent mixed-tier selection and ownership, prices, unlock thresholds, points, receipts, deduplication, monthly limits and the 047 bare-head configuration.

## Encoded assets and delivery boundary

The local set contains **270 PNG outputs**. Only **240 changed bodies** need new lossless WebPs, at immutable paths `/api/yy-art/static/v34/<tier>/<tone>/<slot>__<state>.webp`; the 30 unchanged white normals keep old paths. New encoded sizes total **161,837,064 bytes (154.340 MiB)**:

| Collection | New body files |
| --- | ---: |
| Basic | 96 |
| Deluxe | 48 |
| Premium | 48 |
| Champion | 48 |
| Total | **240** |

New tone counts are white 60, yellow 90 and brown 90. Every encoded file decodes to 1728 × 2304 with **zero alpha differences and zero RGB differences at every pixel with alpha >0** compared with its final PNG. Final v4 encoding reused 216 already verified encodings whose source PNG and encoded SHA-256 remained identical, and freshly encoded the 24 changed v4 variants. Original PNGs and WebPs were not overwritten.

The complete deployed private managed collection is **693 images = all 453 existing assets + 240 new assets**, totaling **451,708,250 bytes**. The retained 453 files total 289,871,186 bytes. Their local files/hashes remain in place; preparation did not duplicate that collection or replace it with a partial diagnostic folder. All 693 referenced local file sizes/hashes were verified. Historical asset paths remain available, including stale-client dependencies. No existing artwork is deleted.

Local final art manifest SHA-256: **`34b6e86419c20f0c8e40a82a3a6ff4b75391a0720e1db7228229f89ef49fe530`**. Its source-path/provenance records and other private evidence are local only and must not be uploaded to GitHub.

The deployed main release changes exactly 240 native body URL values while retaining 30 white-normal and 30 headwear URL values. Five connected native/integration/lazy modules share the canonical app/React owner **`/api/v34/static/20261028a/native/index-studentv34.js`**. Six delivered bodies include those five immutable modules and the stable revalidating bootstrap. Preserve the complete import/back-import graph, including the Project 2 integration outside `native/`, Gradebook and PDF lazy imports. Retain all prior immutable source bodies and bootstrap conditional-response behavior.

The V34 finite artwork wrapper allows only the declared 240 paths, uses the existing private `YY_ART` service binding and forwards a new GET without student cookies or authorization. It preserves conditional, HEAD/range and bounded retry/failure behavior. All unrelated requests fall through to V33. Existing seven main bindings, settings, schedules, exposure, opaque managed assets and private artwork service settings were retained in the verified activation.

## Application, curriculum and data preservation

The verified main module restores the exact captured V33 module when its narrow export/wrapper addition is reversed. Original V33 backend/data handlers, the synchronous bank-data decoder and initializer, input-category guard, PCL work, combined factoring fields, teacher previews, date settings, final-answer checking and scoring remain unchanged. Frontend source edits are limited to the intended body URLs and consistent module aliases; native renderer, maker, reaction and point handlers remain unchanged.

Keep Unit 1's 104 types/520 questions and Unit 2's 136 types/1,325 questions, default revision `c0dcd61e5cb3fd7f7021c69c05dfe48331f4962656c14ffab2aa5d413b0afb8a` and all ten previous Unit 2 bank/checker owners. V34 does not regenerate questions, rewrite examples, change answer format, regrade responses or alter saved snapshots. The V33 encoded bank representation is retained exactly; do not remove its decoder or claim V34 changed the bank content.

No production student test write, database migration, account/class/roster edit, grade/pass/history change, point/ownership write, assignment/project change, worksheet regeneration, message/report mutation or application media rewrite belongs to this release. Keep exact saved worksheet packs, Playground work, project dates, daily counts and all student recovery data. No student data, fixtures or database exports are included in the GitHub proposal.

## Completed local verification and limits

The local results below apply to the final frozen package. The final row and activation section separately record actual published verification; the same affected signed-in workflows were replayed using downloaded published bodies and fictional APIs:

| Check | Local result |
| --- | --- |
| Registered review-player checks | **379 passed** |
| All-body source hash, palette and canvas checks | **270 passed**, no outstanding numerical flags; 24 reviewed surface-guide exceptions documented |
| Basic logo preservation | **108 exact canonical RGBA rectangles passed** |
| New WebP decoded roundtrip | **240 passed**, zero alpha/visible-RGB differences |
| Retained/new managed file hashes | **693 passed** |
| Prepared AST/import graph checks | **836 passed** |
| Actual assembled Worker fetch/protocol/preservation checks | **2,730 passed** |
| Full signed-in local workflows | **11 scenarios / 189 distinct acceptance assertions passed** |
| Official Wrangler dry-run | **Passed exact 7,810,889-byte module / hash `f56b5645…28283`**, gzip 2,655,801 bytes |
| V34 staged/active/live checks | **Passed** exact source/configuration readback; 1,456 body matches, 42 protocol checks, 11 signed-in scenarios/189 assertions |

The signed-in suite uses the real visible application root/import graph with fictional authenticated APIs and SQLite data, not production student records. It covers Maker collections and all three tones; 12 native correct/incorrect Champion 03/04 reaction bursts across three tones with real 500 ms timing, student four-cycle behavior and 0/−1/+1 headwear offsets; actual teacher positive/negative two-cycle point controls; populated Grades and the real Gradebook lazy view; real worksheet PDF/save/reopen; new, direct and reloaded teacher/student Playground routes; Boards navigation/scoring and retained full-app boundaries. One canonical app/React owner is retained. There were no HTTP, JavaScript or local database errors or missing fixture resources in final acceptance.

One Introduction assertion initially matched hidden exact text despite a correct visible interface. The test was changed to inspect the visible heading/video and its six checks were rerun, clearing the eleventh scenario. No application code changed for that selector repair. This is distinct from silently ignoring a failed UI case.

Browser coverage: **Chromium 157.0.8103.15**, with recorded desktop/mobile viewport checks. This is not an actual Safari/WebKit test, every production account or a measurement of account-wide CPU savings. Isolated native rendering/player checks supplement the signed-in flows; they do not replace them. Matching visible landmarks and review frames does not prove hidden skeletal joint lengths.

Private evidence includes final registered manifests, palette/logo reports, lossless verification, module graph/Worker checks, `FINAL-LOCAL-ACCEPTANCE.json`, screenshots and dry-run output under the local YY-motion task folder. Keep these, source images, generated art, fixtures, bundles and credentials out of GitHub.

## Approval, publication and record completion

The human approved the concrete V34 release. The sole publisher freshly rechecked the baseline, staged the exact tested main/art packages, verified source/configuration/assets, activated the matching versions and completed the live checks recorded above. Existing seven main bindings, artwork settings, complete historical managed assets and student data were preserved. No production student test writes or schema changes occurred.

Both domains (xylearninglab.t-pbl.com, student.xylearninglab.t-pbl.com) passed **1,456 complete published-body matches** and **42 protocol checks**. The actual published-code replay passed **11 signed-in scenarios / 189 acceptance assertions**, with fictional APIs and no unhandled exceptions, missing resources or local database errors. Browser: **157.0.8103.15**; this does not establish actual Safari/WebKit or every production account.

GitHub scope is exactly six factual documentation paths: new `Handoff-v34.md`, plus reversible top inserts in `AGENTS.md`, `README.md`, `CHANGELOG.md`, `RELEASES.md` and `docs/PENDING-UPDATES.md`. The five original captured byte sequences remain intact beneath those inserts. No older handoff, bank JSON, artwork, application bundle, private capture, fixture or student record belongs in this documentation commit. GitHub's actual commit history provides the commit identifier; none is invented before publication.

Current user rules still require concrete explicit approval for future GitHub/Cloudflare external writes. Prior historical standing-authorization text does not override them. Read this completed V34 handoff first for the next task, capture actual current main/art/GitHub, and use one publisher; a log or approval is not an atomic deployment lock.

## Recovery and future maintenance

Prefer a compatible forward repair. The healthy captured baseline is main 171/art 4; it remains a reference, not permission for an automatic rollback. Once V34 immutable URLs are published, preserve them and all older URLs for cached clients. Retain the complete 693-asset superset and original source objects rather than deleting new paths or replacing private artwork with a partial directory. Any recovery must keep V33 decoder/input/PCL work and all newer structured work, ownership and histories. Never restore known-bad 161 or clear student storage to conceal a rendering issue.

Future outfit work should compare normal/happy/sad on the same full canvas at the actual rendered size and an enlarged pixel view, using garment-aware boundaries rather than total alpha bounds or raised-arm width. Protect canonical logo rectangles, inspect short hem-to-gap bands and keep headwear offsets in the native code. Freshly capture actual main/art/GitHub, read the newest handoff and current user rules, follow the release checklist and obtain concrete external-write approval before any later release.
