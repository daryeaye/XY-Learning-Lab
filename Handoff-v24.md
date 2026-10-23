# XY Learning Lab Handoff v24 — Premium and Champion YY artwork

**DEPLOYED AND VERIFIED.** Main Worker **158c3b9c-3642-43a2-b9b0-a7494ec60573** (number **160**), deployment **723a85ba-cc1b-4ac5-af9e-3d0e0cc21c4a**, **100% traffic**. Activation **2026-10-23T18:05:31.539048Z** (October 23, 2026, 02:05 PM EDT). Both-domain HTTP verification **2026-10-23T18:05:47.019072+00:00**: **671 checks, zero failures**.

Main module **9,718,853 bytes**, SHA-256 **3efde19b5157c6503558c63bf9df56886f956fc2965d5072d96978fea0307ee2**. The original 233-byte _headers module remains SHA-256 **6a3077bed172e1fd2632fb114f786e51cb3e640c692d3ad673952bf8ab6dc387**.

Read this first, then [V23](Handoff-v23.md) for retained CPU/polling contracts and [V22](Handoff-v22.md), [V21](Handoff-v21.md), [V20](Handoff-v20.md), [V19](Handoff-v19.md), [V18](Handoff-v18.md) and the retained earlier handoffs. This is incremental; all historical handoffs remain. The next update is **V25**. Latest human instructions take precedence.

## Requested result

Premium and Champion now each offer **six outfits and six headwear choices** in the existing YY Maker panels. Basic's twelve outfits/twelve headwear choices and Deluxe's six/six remain. King stays unavailable. Outfit sprites cover **normal, happy and sad in all three skin tones**: 54 sprites per new tier, 108 total. The twelve supplied full-canvas headwear overlays are reused. The existing twelve outfit thumbnails and six Premium headwear thumbnails are used; six new Champion headwear thumbnails were generated from their supplied overlays and normalized to transparent **260 × 260** selection icons.

Source: the owner's [four artwork folders](https://drive.google.com/drive/folders/1KJPtcclMvdv6bC8MUCZ8e3jTRBg6_8Gm). Both supplied READMEs were read. All 138 supplied images were downloaded and grouped; with six new thumbnails, the final asset collection has **144 images**. Full sprites/overlays retain their **1728 × 2304** canvas and registration. Delivery uses lossless WebP: all alpha and visible RGB values match each source image. No full sprite or overlay was cropped, stretched or independently repositioned. The PNG sources and generation results stay private locally. The six new normalized PNG thumbnails are also available as a local ZIP.

The final image payload is **87,056,324 bytes**, versus **196,996,838 bytes** in the corresponding PNG inputs, including the normalized new thumbnails. These are file-size measurements, not a measured whole-account CPU reduction.

## Exact item mapping — keep these IDs stable

The slot order follows the README, not alphabetical filename order. Asset prefixes 40/60 identify collections; actual unlock thresholds and redeem prices still come from each teacher's settings.

| Panel item | Persisted shirtRange | Source filename stem |
| --- | --- | --- |
| Premium outfit 1 | 40-1-3 | 011-art-student-c |
| Premium outfit 2 | 40-4-6 | 027-farmer-a |
| Premium outfit 3 | 40-7-9 | 049-soccer-player |
| Premium outfit 4 | 40-10-12 | 045-school-captain |
| Premium outfit 5 | 40-13-15 | 038-mother-b |
| Premium outfit 6 | 40-16-18 | 031-girl-a |
| Champion outfit 1 | 60-1-3 | 023-construction-worker-a |
| Champion outfit 2 | 60-4-6 | 035-lifeguard-a |
| Champion outfit 3 | 60-7-9 | 040-nurse-a |
| Champion outfit 4 | 60-10-12 | 042-police-officer-a |
| Champion outfit 5 | 60-13-15 | 047-scientist-a |
| Champion outfit 6 | 60-16-18 | 015-b-teacher-b |

Each triplet is normal/happy/sad in that order. For example, 40-7, 40-8 and 40-9 are the three states of Premium outfit 3. Source filenames append __normal__, __happy__ or __sad__, then the tone.

| Skin option | Existing bodyFolder / filename prefix | Supplied source tone |
| --- | --- | --- |
| 1 | Yellow / Y | yellow |
| 2 | Black / B | brown |
| 3 | White / no prefix | white |

**Do not rename the persisted Black folder or skin option 2**: it deliberately maps to the supplied brown artwork. No student configuration migration is needed.

Headwear slots 1–6 correspond to A–F. Premium values are **40-A through 40-F**, Champion values **60-A through 60-F**. Their full overlay filenames use the same IDs. Icon filenames double the final letter: 40-AA.webp through 40-FF.webp and 60-AA.webp through 60-FF.webp.

The public artwork prefix is **/api/yy-art/static/v24/**, followed by Premium/ or Champion/. Bodies are in Yellow/, Black/ and White/; headwear in Headwear/; icons in Icon/. Examples:

- Premium/Black/B40-7.webp — normal brown-tone soccer outfit.
- Champion/Headwear/60-D.webp — Champion headwear slot 4.
- Champion/Icon/60-DD.webp — that headwear's selection thumbnail.

## Ownership, saving and animations

The backend catalog marks the first three reward tiers available; the fourth remains unavailable. Existing catalog version 3 and all teacher settings remain. Normalization accepts the new encoded ranges/headwear while preserving exact canonical output for old Basic/Deluxe configurations. A look may mix collections independently: for example, a Premium outfit with Champion headwear.

Wear authorization checks **each selected piece's actual tier and slot**. Tier mode retains persisted unlocks and historical peak recovery under configured thresholds. Redeem mode requires ownership of every selected reward item. Purchases now permit tiers 1–3, using existing configured prices, atomic deductions, receipts and duplicate-purchase protection. No client-supplied price becomes authoritative. King purchases remain rejected. Applying a changed look still consumes one remaining change; applying the saved look does not consume another. Initial Basic creation, monthly allowance refresh, spending, rewards and announcements retain their prior behavior. The teacher's isolated Student view includes the new artwork but retains memory-only practice/ownership changes.

The user's animation reminder matches the existing implementation, which is retained byte-for-byte in the student/teacher reaction components:

- Answer correct: normal/happy **four cycles**; answer wrong: normal/sad **four cycles**. Each frame lasts 500 ms; return to normal after 4 seconds.
- Teacher positive/negative YY actions: corresponding normal/happy or normal/sad **two cycles**, returning to normal after 2 seconds.
- Full-canvas headwear stays registered at the same origin. CSS applies **0 px normal, −1 CSS px happy, +1 CSS px sad**. Do not bake these offsets into PNGs or scale/shift separate layers to imitate the movement.

Live-public-asset browser checks with fictional accounts verified both reaction sequences and actual computed ±1 px transforms on the new mixed-tier look. Existing sounds and point-action logic remain unchanged.

## Static delivery and infrastructure — new dependency

The main app retains its complete original managed ASSETS namespace, six original bindings, safe settings, hourly cron, custom domains and disabled workers.dev/preview URLs. It adds only the service binding **YY_ART → xy-yy-art-v24, production**. No production D1/R2 data was added, deleted, overwritten, migrated or reset by this release/testing.

The new artwork Worker **xy-yy-art-v24** is deployed at **11829bac-e0f3-4a26-8b2c-8a12dbdc5e32** (number **2**), deployment **95e4216f-834b-4496-befa-b090c40056f7**, **100%**; activated **2026-10-23T17:58:54.722665Z**. It has its own managed static-asset collection containing all 144 files, an ASSETS binding only, and no public workers.dev, preview or custom-domain target. Keep this service and the complete manifest: deleting it or deploying a partial test folder would break saved new looks. The main app exposes only the finite known artwork paths, with immutable caching, content types, ETags/304, HEAD and single-byte-range support. Cookies and authorization headers are not forwarded to the artwork service. Unknown paths are rejected.

Managed static assets may route a found file directly and ignore a byte-range request. The final main wrapper handles this full-image fallback correctly, returning 206 for valid ranges and 416 for invalid ranges. Normal image requests keep the streaming path. Artwork service code matches its official dry run; its source-map source content matches, while source-map path metadata differs between dry-run and upload.

Native code aliases use **/api/yy-outfits/static/v24/**: the main native file, three lazy dependencies and Project 2 integration, plus the existing bootstrap override. These six finite bodies derive from hash-verified V23 code or embed the tiny bootstrap. V23's polling helper and all earlier URLs remain. Keep the V23/V22 derivation wrappers and the **five immutable V21 R2 source objects** they depend on. No R2 management permission or object upload was needed.

Large automatic multipart asset batches returned 401 from the managed credential integration. An upload-only 25,940-byte probe succeeded with the same configured account token. The full manifest then completed in 29 smaller upload batches, at most 3,500,000 raw file bytes per batch; the official complete-package deploy found no missing assets. Exact gateway thresholds were not established. Automatic review blocked a one-image diagnostic deployment because it could replace the artwork service; that partial package was never deployed. The safer upload-only diagnostic and complete 144-image deployment completed without a token replacement or extra permission.

## Verification and preservation

- **1381 backend checks / 23 fictional authenticated route calls**: old canonical configurations, new round trips, malformed IDs, independent mixed-tier authorization, custom thresholds, earned-tier/history retention, zero-change limits, unowned items, valid purchases, duplicate purchases, insufficient points, King rejection, archived accounts and temporary-password guards. SQLite fixtures only.
- **919 assembled static/preservation checks / 608 local requests**: all 144 complete image hashes, six code bodies, HEAD/304/method guards, range and full-image fallback, private-header isolation, unknown paths, cold source-integrity failure/retry and complete inverse recovery of V23. **948 existing native functions remain exact**; four YY functions and demo availability change, while the lazy loader changes module aliases only. Student/teacher animation components remain exact.
- **36 browser checks** using the actual published asset bodies with fictional API data: Basic's 12/12 choices, Deluxe/Premium/Champion six/six panels, King placeholders, reachable full outfit rows, locked/redeem behavior, mixed look application, saved headwear selection, all 108 new body images, and four-/two-cycle reactions with ±1 px headwear movement. The browser checks include the three live lazy-module imports; a separate import report also passes. The pre-existing source-sans-3.ttf fallback request is recorded separately; no new asset failure or uncaught browser error was found. These are not production student submissions/purchases or a claim covering every device/network race.
- **22 focused artwork-worker method/range checks**; official main/artwork dry runs; complete staged and active main module/header/configuration readbacks; artwork code/source-map-content/binding/exposure readback.
- **671 final live HTTP checks, zero failures**, across both app domains: all 144 new image bodies hashed completely, twelve new code body comparisons, new image metadata on both hosts, unchanged HEAD metadata for all 217 Basic/Deluxe paths, anonymous private-route denials and range/304/not-found behavior.

The final main Worker and headers match the tested package exactly. An initial V24 app version 159 exposed the new panels; final version 160 adds only robust image-range delivery. The native bodies and backend are identical between those two versions. All eight Unit 2 source revisions, current 140b8ef3… pin, Unit 1, exact checkers, highest-completed grades, saved work, reward receipts, privacy/audience guards, Boards Up and editor changes remain. V23's fixed 10-second Comic/assessment checks, shared 60-second notifications, recovery changes, YY read reductions and immutable bank serialization cache remain. Held Grades/dashboard/PDF optimizations and deferred Archive Class/export/purge are still held.

## Continue and publish

Use **V25** next. Freshly capture both the active/latest main Worker and the artwork service, their complete modules/configuration and GitHub before editing; recheck before uploads/activation. Use one publisher. Prefer a forward repair preserving all saved configurations, old artwork paths, historical banks and immutable source objects. A code rollback does not restore later user data. The main app and the named artwork service form the complete current deployment; the main version alone does not pin a future change to that service.

GitHub publication is documentation/reference only: this new handoff plus factual inserts in AGENTS.md, README.md, CHANGELOG.md, RELEASES.md and docs/PENDING-UPDATES.md. All previous content remains. No bundles, captured code, fixture databases, screenshots, credentials, generated images or student records are published to the repository. Private source/asset manifests, generation results, tests, screenshots and exact release captures remain in the task workspace. The resulting documentation commit is recorded privately after publication.
