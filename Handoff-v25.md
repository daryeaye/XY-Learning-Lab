# XY Learning Lab Handoff v25 — 047 artwork correction and signed-in startup repair

**DEPLOYED AND VERIFIED.** Main Worker **dbd1d4dd-ee59-42e3-8ca9-d06b68a6ff83** (number **162**), deployment **49647653-4453-4667-999a-7e508464e931**, **100% traffic**. Activated **2026-10-24T00:50:59.430472Z**, October 23, 2026, **08:50:59 PM EDT**. Final repair verification: **2026-10-24T00:52:53.142800Z**. Fresh read-only version/settings/module verification for this handoff: **2026-10-24T00:55:44.919262Z**; both services remain active/latest at the versions below.

Main module: **9,730,983 bytes**, SHA-256 **4f11edcfabaf4704fa1de5ff0ed696e0a11593fd163eae0a9fd9d39cc8590322**. The unchanged 233-byte `_headers` module remains SHA-256 **6a3077bed172e1fd2632fb114f786e51cb3e640c692d3ad673952bf8ab6dc387**.

Read this first, then [the mandatory release checklist](docs/RELEASE-CHECKLIST.md), [V24](Handoff-v24.md) for the complete YY catalog and animation contracts, and V23/V22/V21/V20/V19/V18 and the retained earlier handoffs for unchanged behavior. This is incremental. The next handoff is **V26**. Handoff numbers do not rename runtime asset namespaces.

## Incident and confirmed cause

The owner reported a phone Safari page that blinked after sign-in and became blank. HTTP 200 responses, available sign-in pages and no Worker crashes did not establish that the signed-in application was healthy. The initial phone-size browser check used Chromium, not Safari/WebKit.

The preceding 047 artwork update introduced a new native entry and new lazy-module aliases, but omitted Project 2's import back to the native entry. That integration file is outside the native directory. The resulting graph was:

```text
index-studentv24-047.js
  -> /api/yy-outfits/static/v24/project-two-integration.js
       -> /api/yy-outfits/static/v24/native/index-studentv24.js
```

Two copies of the application and React were evaluated in the same page. With fictional authenticated APIs, opening `/playground/teacher/new?unit=2` and signing in reproduced **React error 321 and an empty application root**. This is a verified application dependency error, not a confirmed Safari-specific engine defect. Actual Safari/WebKit was not available for the repair tests.

**Why the earlier checks missed it:** isolated YY component tests and asset/hash checks passed. Even complete teacher/student HOME login fixtures with empty project lists passed while loading both app entries. The checks did not cover the affected authenticated project route or assert a single app instance. Reporting large assertion totals did not compensate for that missing scenario. This was an implementation and verification mistake; there is no comparative evidence establishing a particular model or reasoning-effort selection as its cause.

**Known bad release:** main Worker **42c9ced2-c616-4597-b299-896623db93f2** (161), deployment **acca1c6d-8d53-41a2-97c5-117ea32ea961**. It retained the corrected images but had the duplicate-module bug. **Do not restore version 161 as a healthy baseline.** Preserve its history for diagnosis. Prefer a forward repair from the freshly verified current version.

## Repair and runtime dependencies

All five connected app/project/lazy bodies now use one consistent immutable namespace, **`/api/startup-fix/static/v24a/`**:

- `native/index-studentv24a.js` — canonical application/React entry.
- `native/GradebookReview-studentv24a.js`.
- `native/index.es-studentv24a.js`.
- `native/jspdf.es.min-studentv24a.js`.
- `project-two-integration.js` — imports that same canonical entry.

The existing bootstrap **`/assets/index-studentv14cc5e9397ba56.js`** imports the canonical entry and remains revalidated with `Cache-Control: no-cache`. Every relative lazy import and the Project 2 back-import uses the same entry. Existing immutable URLs remain available. Older pinned helper/CSS/model URLs are legitimate dependencies; do not rewrite or delete them merely because their version differs.

The new finite static wrapper derives bodies from hash-verified prior V24/047 sources. The prior Worker is recoverable byte for byte by removing only the appended startup wrapper and reversing its default-export change. The native lazy loader changes URL aliases; **958 other existing native functions are unchanged**. Backend/data handlers and the 047 URL helper are unchanged. Retain the V24/047 and V23/V22 delivery helpers and the five immutable V21 R2 source objects required by that chain.

The main app keeps its complete managed ASSETS namespace, seven bindings including **YY_ART**, compatibility/runtime settings, observability, schedules, domains and disabled workers.dev/preview exposure. No schema, account, student, class, assignment, grade, point, message, ownership or saved-work mutation was performed for this repair or its tests. The owner explicitly approved the production repair after an initial automatic approval-review block; the initially rejected command did not execute. Staged and active module/configuration readbacks match the tested package.

## 047 doctor/scientist outfit — preserve the correction

The owner's 047 request removed the built-in forehead goggles and strap from all **nine** variants of Champion outfit 5, source stem **047-scientist-a**. The persisted outfit remains **`60-13-15`**. Skin/state IDs and all ownership/prices/points/change allowances remain unchanged.

Corrected full sprites retain the **1728 × 2304** transparent canvas and use the existing artwork prefix **`/api/yy-art/static/v24/`**:

| Skin option | Folder / prefix | Corrected filenames, normal / happy / sad |
| --- | --- | --- |
| 1 | Champion/Yellow / Y | Y60-13-bare.webp / Y60-14-bare.webp / Y60-15-bare.webp |
| 2 | Champion/Black / B | B60-13-bare.webp / B60-14-bare.webp / B60-15-bare.webp |
| 3 | Champion/White / none | 60-13-bare.webp / 60-14-bare.webp / 60-15-bare.webp |

**Black remains the persisted folder for the supplied brown tone.** Do not migrate or rename it. The renderer chooses the `-bare.webp` filenames only for `shirtRange === "60-13-15"`. No student needs to reselect or repurchase the outfit. Keep the old immutable image URLs and all other artwork; the nine corrected files were added separately so cached immutable bodies were not overwritten. Generated forehead edits were composited onto live-downloaded originals, retaining pixels outside the correction region and checking lossless alpha/visible-color encoding.

Artwork service **xy-yy-art-v24** is now **3d6c8e1f-d394-49fa-9fee-a37c079b514a** (number **3**), deployment **42010797-dd25-4fc3-b7bb-d494c150545d**, **100%**, activated **2026-10-23T19:27:28.956862Z**. Its complete managed collection has **153 images: all 144 V24 originals plus nine corrected sprites**. The startup repair did not redeploy this service. It remains private through the **YY_ART** service binding, with ASSETS only and no public target. Never deploy a partial asset directory to this Worker. Preserve V24's small-upload/full-manifest procedure if artwork uploads are needed again.

Student correct/wrong answers retain **four** normal/happy or normal/sad cycles; teacher positive/negative actions retain **two**. Separate selected headwear retains **0 px normal, −1 CSS px happy, +1 CSS px sad**. The startup fix and goggles removal do not change those components or offsets. No images or app bundles were added to GitHub or Google Drive.

## Verification and its limits

- Before/after authenticated regression: the original direct teacher Playground login produced React 321 and a blank root; the repaired flow renders its setup. Teacher and student home logins also pass. These use actual published public asset bodies with fictional intercepted authentication/data APIs, not real account sign-ins or production student test writes.
- Recursive static/dynamic dependency analysis finds **one** canonical app entry across the five current modules, instead of two. Independent review verifies all six output bodies, pinned source hashes, unchanged headers and complete prior-Worker recovery.
- **971 assembled checks / 644 local requests** cover derived bodies, image delivery and preservation. **36 YY browser checks** pass again against hash-verified live code/artwork, including all 108 tier body variants, mixed looks, fictional ownership/purchase state, lazy imports and the four-/two-cycle reactions.
- **48 independent final live checks**, zero failures, across both domains: twelve complete code-body GET hashes/lengths/ETags, eighteen corrected-image GET hashes and eighteen image HEAD checks.
- Official dry-run, staged and active modules, original bindings/settings/assets/schedules/exposure, and unchanged artwork-service code/configuration were read back and verified. The previously known source-sans-3.ttf fallback is separate from this incident.

These results establish the tested flows. They do not establish an actual iPhone Safari engine test, a test of every populated production account, or whole-account CPU improvement. Future releases must cover representative populated project records as well as direct/retained routes; those are explicit requirements in the checklist, not additional tests claimed for this repair.

## Required prevention and next work

**Read and follow [docs/RELEASE-CHECKLIST.md](docs/RELEASE-CHECKLIST.md) before any change to frontend entries, imports, shared runtime modules or delivered JavaScript URLs, including an artwork fix that changes those URLs.** The mandatory gates are linked from AGENTS.md so this incident is not buried in a historical handoff. Use one publisher; verify both services and current GitHub before changes; preserve data and all earlier handoffs.

Do not infer a healthy signed-in app from HTTP 200, a login screen, an empty dashboard, isolated component tests or no Worker crashes. Verify the complete visible application, the affected direct/retained routes, one shared app instance and actual lazy views. Record browser engine and test-data scope truthfully. No model choice or reasoning-effort setting exempts these checks.

The historical V24 features, Basic/Deluxe/other tier art, current Unit 2 140b8ef3… pin and all eight source revisions, Unit 1, exact checkers, highest-completed grades, saved work, reward receipts, privacy/audience rules, Boards Up/editor behavior and V23 polling/CPU changes remain. Archive Class/export/permanent purge and the held Grades/dashboard/PDF optimization proposals remain deferred. This GitHub update is documentation only; it does not change the deployed application or student records.
