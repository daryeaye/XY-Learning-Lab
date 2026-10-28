# Handoff V37 — Lesson 2-6 bank, scaffolding and protected replacements

**DEPLOYED AND VERIFIED.** Main **175 / c9ba8a30-1188-4ac8-adc4-4db2a6b8d8af**, deployment **`d11a71bf-b3fb-43e3-a53a-7b1352503967`**, is active at **100%**. Activation/readback: **2026-10-28T17:47:49.216487+00:00**; final record: **2026-10-28T17:55:07.413078+00:00**. Worker **8,586,828 bytes**, SHA256 **`7d3621244c54b9829a719a08ca1c176f3d261a1ce3901b84bf63ec4ba833494c`**. Private artwork remains **5 / 818df882-1a64-44e5-9c63-20e42c462de5**, deployment `3a172e35-9b53-4c1c-a03d-700d1bbdc326`, with the complete **693-image** collection. All seven bindings, managed assets, settings/runtime, schedules and exposure remain. Artwork was not redeployed.

Read V37 first, then [V36](Handoff-v36.md), [V35](Handoff-v35.md), the retained curriculum/handoff records, [UI preferences](docs/UI-PREFERENCES.md) and [release checks](docs/RELEASE-CHECKLIST.md). Earlier current-state entries are historical. **Next handoff: V38.** This release includes an expressly authorized, narrowly scoped student-data migration. That exception does not authorize future bulk edits or deletion.

## Source, authorization and exact baseline

The owner's [ChatGPT folder](https://drive.google.com/drive/folders/1KJPtcclMvdv6bC8MUCZ8e3jTRBg6_8Gm) contained a shortcut named Prompt. Direct shortcut media access returned403; Drive discovery located the native **[Prompt presentation](https://docs.google.com/presentation/d/1OFU_HFfBLDc4zrn3gn0rwyl1sW5XpEomouj3EVPkWQY)**. All **seven slides** were read visually and as native text; the third new-question example is an image. Slide7 is an empty red ellipse/arrow. Its revision **`HLWBa5eoMdO7qg`** was rechecked unchanged immediately before activation. The local PDF export was336,472bytes, SHA256 `f808ba410cb282bb101c2d7a4f9818fa39df2e89781dc1a7d8838356a697c058`. No Drive content was changed; the unrelated activation spreadsheet was not opened. Keep exports/screenshots/private data out of GitHub.

The initial read was read-only. The subsequent owner reply **“Sure go”** authorized execution. The policy stated before implementation was: an unfinished current question whose type changes gets a replacement to solve; completed/past affected questions receive credit. Preserve current unchanged Types218/219 at two stars and162/229 at four stars.

Exact baseline: main **174 / 748ae030-fa2d-4753-a7ae-fb50ba5bb7bd**, deployment `d818fb1d-eb0d-472c-a7c1-63169d1145b7`,8,210,924bytes, SHA256 `eb4b3ea6616f871afcaac86e7f06f1f7440ec073ab1be00aa3174253c6b3d4ce`; art5 unchanged. GitHub started at **`9898777741d393b18e9dc147874087c23f43e145`**, the completed V36 record. Fresh main/art heads and configuration were checked before upload, activation and maintenance DML; GitHub was fetched. No stale checkout was redeployed. A freshness read is not a publication lock.

## Slides1–3 — current Lesson2-6 curriculum

New current Unit2 source: **`93dcc51a8d5f31f9dcfdd0b263cb648fe7b00874cdcf651e4c36af32a7464bd8`**, schema **`2.6.0-lesson26-rebalance`**, **139 types / 1,355 questions**. Unit1 stays104 types /520 questions. All **eleven previous Unit2 revisions** remain exact and routable: **twelve including current**. Existing1,325 question objects are unchanged; only five old type difficulty fields change in the new source. Older pins retain their old fields and content.

| Type | New difficulty | Prior difficulty |
| --- | --- | --- |
|220,221 |3 stars |2 stars |
|226,227,228 |2 stars |4 stars |
|243,244,245 |4 stars |new append-only IDs |

Lesson2-6 now has **4/5/6/4/1** available types at one/two/three/four/five stars. IDs144/213 remain retired. Other lessons, prior five-star content/checkers and variant reservations remain. The root Unit2 reference JSON is updated, with input categories derived across all variants. It is a reference, not the deployed app source.

The three new types have **ten flat A–J variants each**, using the native cyclic A→B→…→J→A examples. Original question coefficient magnitudes are at most100; a combined coefficient may exceed100 (the first example combines to−108x). Native selection reserves separate graded/example variants and rejects exhausted capacity instead of recycling them.

- **243:** Factor completely−36x+18y−72x+36. First answer **18(−6x+y+2)**.
- **244:** Factor completely16a−24a+30b−12. First answer **2(−4a+15b−6)**.
- **245:** A community theater has total profit36x−24y+12 dollars over6months; simplify average monthly profit. First answer **6x−4y+2 dollars per month**.

243/244 use the default factoring organizer and short answers below the complete work panel, with no MC choices. Their ladder retains every repeated signed term through **all division layers**; only then does a distinct step combine like terms before the final factor result. The complete positive or negative integer GCF is required outside primitive combined integer terms. Expanded equivalents, partial factoring and uncombined inner terms do not satisfy the task. Intermediate student work is presence-checked, not mathematically graded.

245 uses the existing word organizer by default, with a native average-division ladder in its solution. This is the implementation choice for the image-only word problem; the prompt explicitly specified the factoring organizer for the first two. Its solution lists the total profit and month count; the final expression must be simplified. New two-star226/227 are word tasks (side length/perimeter), so use the word organizer rather than displaying a reverse factoring expression that reveals the answer;228 retains factoring layers. Old four-star226/227 pins remain unchanged/ineligible as before.

Lesson2-6 review now resets to its lesson's default types on re-entry, removing added PCL types from that review. This resets the review selection rather than rewriting saved assignments. Actual builder state and explicitly saved older assignments remain protected.

## Slides4–6 — global scaffolding preview and type status

The global **Add Scaffolding** checkbox remains beside **Add More Types**, default checked for eligible types. No per-card scaffolding checkbox was restored. Existing type-inclusion checkboxes and See Solution retain their own functions.

Each eligible card shows plain **Scaffolded** when enabled or **Scaffolding available** when disabled, in the same compact row after See Solution. It has no action and clicking it cannot toggle type inclusion. Its hover hint points to the global checkbox next to Add More Types.

Before mode-specific preview help, the tooltip says: **“Check this box to use the shown organizer instead of the regular work area for eligible question types.”** It prefers space to the right/left of its anchor, otherwise above/below; it never overlaps the checkbox. Preview modes use a responsive grid and vertical scrolling in limited height while keeping the original padded image bytes and aspect ratios. Desktop,768px and320/390px viewports pass in all five eligible lessons1-7,1-8,2-4,2-5,2-6. Global mixed-map, modal Cancel/Save and differentiated-child propagation remain.

The existing overlap came from placing a tall preview above the control and then clamping it to the viewport top, which could put it back over the checkbox. Placement now explicitly selects an available region outside the anchor. No claim is made about every browser/device.

## Authorized production replacement — xye4 Lesson2-6 only

The target is one existing published differentiated group: **three assignments (Ready/Heat-Up/Full Speed), three classes, 50 student sets /51 attempts**. No other teacher, assignment, lesson or class records were migrated. All original work/history was archived before replacement. **No records were deleted.**

Two-star slots move to226–228; four-star slots move to243–245. One/three/five-star slots remain byte-for-byte unchanged. Current unchanged two-star218/219 and four-star162/229 positions are preserved. Replacement slots retain their original order, difficulty slot and frozen weight. Assignment counts, modes, audiences, dates, teacher timestamps, attempt IDs/numbers/status/current positions and original submit/start times are preserved. Ready's shared cache and assignment settings switch atomically so its replacement questions/numbers stay shared; existing current-question exceptions remain as directed.

Verified migration totals:

| Result | Count |
| --- | --- |
|Changed frozen slots, including the existing retry snapshot |182 |
|Completed/past replacement responses granted credit |41 |
|Untouched/current-unfinished replacements left to solve |141 |
|Current unchanged two-star questions preserved |6 |
|Existing best grades lowered |0 |
|Grade increases required by native recalculation |0 |
|Deleted records / migration YY-point awards |0 /0 |

The captured group had9 submitted attempts/grades,42 active attempts,165 response rows and one retry-specific question snapshot. Updating creates response rows for the future replacements (306 total at readback); it does not fabricate student answers. Administrative credit uses a clear notice that the teacher updated the question and kept earlier work. Original responses, checks, versions, snapshots and grades remain in the private archive. All nine recorded best grades remain unchanged in this migration. No new grade-history row was needed. Native weighted/late/retry formulas were used and grades can only increase; manual overrides are preserved.

An explicit additive D1 table, **`xy_v37_lesson26_archive`**, plus a scope index stores immutable maintenance receipts/originals. **51 applied maintenance receipts** cover the group settings/cache and50 sets. Each original-state guard and archive INSERT fires a maintenance trigger in **one SQLite statement/transaction**. Full set/attempt/response/grade comparisons and counts must still match; a racing save aborts the entire statement. Receipt IDs make retries idempotent. There is no deletion or application-startup/GET schema initialization. The two temporary maintenance triggers were removed after verification; the archive table/index and receipts remain.

A replaced snapshot item carries a question token. The native view returns it and the student client sends it with save/check/navigation/report. A stale open page is rejected before cleaning or response mutation, and its submitted work is deduplicated into the same archive. The message tells the student to refresh. Draft recovery keys include the changed question identity, preventing old local work from becoming an answer to a different problem. Unchanged questions keep their existing identities/recovery behavior. **Students with a page open during the update should refresh once.**

Mixed snapshots deliberately keep unaffected old pins. Retry generation groups missed questions by each item's owner revision, retains previous graded/example exclusions and restores the original missed-question order. It does not rebase unrelated questions to the newest bank.

## Bank ownership and old-editor safeguard

Teacher `/bank` reads can request an explicit recorded revision. Opening an older assignment loads that bank, so its old226 four-star grouping is displayed correctly. The native save path preserves the owned existing assignment's pin and writes the selected bank's actual revision. This fixes a save-path issue caught during testing: validation used the old bank, but an unconditional latest-revision assignment could overwrite its pin afterward. Ordinary editing must never serve as an implicit curriculum migration.

Student difficulty display uses the frozen slot difficulty, not the current catalog's possibly changed star field. Native strict feedback includes new243/244. New IDs are added to preview/video lookup without replacing old same-ID objects. No other checker behavior, permissive Unit1 rule, Unit2 exact parser, maximum-layer bounds, keyboard layout or reward behavior was changed.

## Verification and release evidence

| Check | Result |
| --- | --- |
|All old/new public bodies, HTTP protocols, one-owner module graph and unrelated native code |1,300 passed;25 modules, one canonical app/React owner |
|Bank, retained11 revisions, current canonical answers, input categories, new formats/pairs |4,036 passed;30 new variants |
|Independent SymPy mathematics/ladder/GCF/average checks |351 passed |
|Fictional atomic migration, stale clients, retries, manual grades, Ready, race rollback and rewards |101 passed |
|Private captured target-state replay |467 passed locally; no external test writes |
|Retained eight-layer/legacy-work / project dates / input-format-PCL backend |35 /73 /2,006 passed |
|Retained missing-scaffolding backend |35 passed |
|New V37 signed-in UI |157 before and157 published |
|Retained V36/V35/Prompt5/Prompt6/keyboard UI |66/100/45/26/29 before and published |
|Mixed historical-map UI |5 before and5 published |
|Complete populated signed-in app, Grades/PDF, worksheets, Student View, Playground and Boards |135 before and135 published |
|Both-domain exact public body hashes / protocols |250 /16 passed |

Official Wrangler **4.151.1**, no-bundle dry-run, staged source and active source match the size/hash at the top exactly. Complete strict inherited bindings/assets/configuration readback passes. The new namespace is `/api/v37/static/20261028a/`; the canonical owner is **`/api/v37/static/20261028a/native/index-studentv37.js`**. All older immutable paths remain intact, and an old bootstrap ETag receives the new revalidating bootstrap.

Both domains: `xylearninglab.t-pbl.com` and `student.xylearninglab.t-pbl.com`. All published files were downloaded and hash-verified **before** replay. The replay server requires every V37 artifact and cannot silently fall back for a missing current published file. **563 browser assertions** pass with actual downloaded public/Worker bytes and fictional authenticated APIs/SQLite, with no unhandled/React errors. These are test fixtures, not production student interactions.

Browser: **Chromium154.0.8037.57**. Desktop/tablet and320/390px layouts are tested; actual Safari/WebKit is not available. A retained local font-fixture fallback for `source-sans-3.ttf` remains; no production font change or account-wide CPU reduction is claimed. Running too many browser suites simultaneously caused two local navigation timeouts; rerunning with two suites at a time passed without application changes. The first V37 solution render also exposed a duplicated local combine step during build preparation; it was removed and all final single-step/render checks passed before upload.

## Preservation, docs and forward recovery

Retain every earlier handoff and separate Coloring work. GitHub contains this handoff, factual root/log entries, additive UI/release-prevention notes and the current reference bank only. No app bundle, PDF, screenshot, private capture/student work, fixture DB, credential or archive payload is published.

All seven bindings and managed ASSETS, historical bank/checker revisions, all693 artwork paths, 047 bare-head images, YY skin mappings, outfit limits, four student/two teacher reaction cycles and0/−1/+1px headwear movement remain. No R2/artwork/Drive writes, point/reward receipt mutations, class/account deletion or unrelated curriculum change occurred.

**Recover forward from main175 or its actual newer successor.** New snapshots now depend on V37 bank identities, mixed-pin retries and the question-token guard. Do not roll back to an older client/server that cannot read them, clear student storage, erase archive receipts, restore known-bad161 or run a generic pool rebase. If maintenance must be corrected, compare its archived original state with current activity, preserve newer work/grades and use another guarded, scoped operation. The archive is preservation evidence, not permission to overwrite ongoing student work. Future deployments must freshly capture main/art/GitHub, preserve all current paths/pins/data, use one publisher and stop/reconcile on a mismatch.
