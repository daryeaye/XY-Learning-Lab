# Handoff V36 — Prompt 7, assignment-wide scaffolding

**DEPLOYED AND VERIFIED.** Main **174 / 748ae030-fa2d-4753-a7ae-fb50ba5bb7bd**, deployment **`d818fb1d-eb0d-472c-a7c1-63169d1145b7`**, is active at **100%** from **2026-10-28T15:23:01.00728Z** (October 28, 2026, 11:23:01 AM EDT). Worker **8,210,924 bytes**, SHA256 **`eb4b3ea6616f871afcaac86e7f06f1f7440ec073ab1be00aa3174253c6b3d4ce`**. Private artwork remains **5 / 818df882-1a64-44e5-9c63-20e42c462de5**, deployment `3a172e35-9b53-4c1c-a03d-700d1bbdc326`, with the complete **693-image** collection. It was not redeployed. All seven bindings, complete managed assets, settings, runtime, schedules and exposure remain.

Read V36 first, then [V35](Handoff-v35.md), [V34](Handoff-v34.md), [V33](Handoff-v33.md), retained older handoffs, [UI preferences](docs/UI-PREFERENCES.md) and the [release checklist](docs/RELEASE-CHECKLIST.md). Older current-state entries are historical. **Next handoff: V37.** Freshly capture actual main/art/GitHub before further work and follow the user's current authorization. This release completes the already requested PDF updates and handoff maintenance; no unrelated task is authorized by this record.

## Source and captured baseline

The owner supplied the [ChatGPT Drive folder](https://drive.google.com/drive/folders/1KJPtcclMvdv6bC8MUCZ8e3jTRBg6_8Gm). Its direct listing contained **[Prompt (7).pdf](https://drive.google.com/file/d/1I6SVh0bktX-3_CZoXdYX1-qBKmhiWJGf/view?usp=drivesdk)**,377,050bytes, SHA256 `c3688355493233fdbad542e5bd2078b93e5369591dc16613b1bbfefaa5858296`. All **six pages** were read visually and as extracted text. Pages1–5 contain the actionable directions below. Page6 contains an empty red ellipse/arrow and no additional instruction. The unrelated activation spreadsheet in the folder was not opened. Keep the PDF, captures and private test evidence out of GitHub.

The exact starting main was **173 / 2f396a21-227c-4211-8555-8f9bf1c5f3c7**, deployment `8e1c25f5-1582-4735-8cb0-af21570bb960`,8,008,276bytes, SHA256 `463f3365c8f227d1c92e8a0080bdf0b68a07c1aaa2a041ff39c8ebd219b926a7`; art5 unchanged. Fresh capture completed **2026-10-28T15:04:45.361367+00:00**. GitHub began at `3040f82632173485786efeda9f78492850f7359e`; retain that separately completed Coloring work. Active/latest/configuration were rechecked before staging and activation. The new code uses V36 immutable paths and preserves V35 and every earlier public body/source.

## Page1 — Daily Challenge labels and description

Restore **“Students can earn an extra YY point by completing a daily challenge after their regular assignment.”** to the right of the Daily Challenge heading, separated by a gap and in smaller text. This expressly supersedes V35's removal. The shared single/differentiated control has that heading row; the defaults disclosure puts the same description beside its collapsed summary title, without duplicating it inside.

The labels are **Mild Level (⭐⭐⭐):**, **Hot Level (⭐⭐⭐⭐):**, **Spicy Level (⭐⭐⭐⭐⭐):**. Each has its number input followed by **Problems** on the next line. The three levels sit side by side where width permits, while phone layouts stack complete labels. Defaults retain their three-row disclosure layout. Native editable counts, bounds1–100, defaults4/2/1, saved explicit settings and differentiated child propagation remain.

## Page2 — outline icons and inline publication status

Save uses an outlined floppy disk, Close Assignment an outlined trash can, and Copy Link an outlined chain link. These are small inline SVGs in the existing button style, with hover titles and accessible names. Draft/publish/republish visibility, saved state, link targets and the generated link beneath the row remain from V35.

**Assignment published.** now sits to the right of Copy Link in the action row. Draft/close/copy feedback uses that same status location instead of a separate paragraph. At narrow widths the status may wrap beneath the complete one-row buttons; their text remains visible. Desktop alignment and complete320/390px controls pass. Close still invokes the existing CLOSED operation and retains all records/work/grades; the icon is not permanent deletion.

## Page3 — PCL work before multiple choice

For Unit2 PCL questions, work appears immediately after the question and the A/B/C/D choices follow the **Like terms** box. The native shared student renderer recognizes the frozen PCL context. Existing Lesson2-6 work-before-choice behavior remains. Answer values, choice identities/shuffling, native correctness and frozen problems are unchanged. Both PCL and factoring choices were checked below the entire work panel.

## Page4 — one assignment-wide Add Scaffolding checkbox

Remove **Add Scaffolding** checkboxes from every Unit1/Unit2 problem card. The single assignment-wide checkbox sits beside **Add More Types** in Lessons **1-7,1-8,2-4,2-5,2-6**, including the existing customize/Add More Types panel. Hover/focus still shows the retained actual-student preview images. Type inclusion checkboxes and See Solution remain separate and unchanged.

The global control updates the existing per-type settings map for **all currently eligible types in the bank**, so adding another eligible type in the same assignment does not escape the chosen setting. Eligibility rules remain unchanged. Newly eligible choices keep the established default on. Historical mixed maps remain intact until an explicit toggle; the global checkbox can show an indeterminate state for them. Modal **Cancel** discards its draft change; **Save** commits it. In differentiated assignments, saving the global choice propagates to all three child levels and their registered publish payloads, rather than only the difficulty/level whose customize panel was opened.

No new persistence schema is needed. Publishing/editing this metadata does **not** rewrite already-started question snapshots or existing work. Five actual native backend cases verify frozen snapshots/context remain identical after the assignment setting changes. Each of the five requested lesson pages has exactly one global control and no per-card scaffolding controls in the browser checks.

## Page5 — factoring spaces and missing-work warnings

Intermediate **Expression after division** fields accept spaces from both the physical keyboard and the native on-screen abc **Space** key. MathLive stores a real mathematical spacing command and save/reopen preserves it. The final combined outside factor and parenthesized expression stay compact: physical and virtual Space do not insert a gap there. Old saved content is not normalized or erased. The final-answer inputs and input-category guard remain unchanged.

The insertion policy is attached only to the factoring work fields. Other keyboard buttons/layouts/templates and ordinary/rich work entry retain their existing behavior. The shared keyboard's `format` parameter selects a named function template; an ordinary mathematical space must be inserted as a math value without treating `latex` as a template name. The local test caught that mistake in the first virtual-space implementation; the corrected physical/virtual behavior passed before staging and again with published files.

**Why the warning did not appear:** Check Answer was disabled when structured work was incomplete, so the click handler's warning could never run. It is now clickable while work is incomplete, subject to the existing busy/locked navigation guards. The handler shows **“You have to fill in all boxes.”** and returns before save/check evaluation or attempt consumption. The native server check, challenge check and teacher-preview missing-scaffolding paths use the same message while retaining their existing completeness gates and pre-mutation rejection order. Missing final-answer handling and native checking/scoring otherwise remain.

Browser checks trigger the exact warning in representative **1-7,1-8,2-4,2-5,2-6** questions, assert that no check API is called and that check counts remain unchanged. Backend checks assert400 and unchanged response/attempt rows. These are representative lesson flows, not a claim that every variant/account/Safari version was exercised. Retained all18-type PCL and canonical-answer suites also pass.

## Verification and publication evidence

| Final package checks | Result |
| --- | --- |
| Static/body/protocol/import graph |272 passed;25 modules, one app/React owner |
| Unrelated native functions, YY URLs/registry and exact padded previews |976 passed; all240 repaired body URL values retained |
| New warnings and preservation of five frozen sets after global metadata edit |35 backend checks passed |
| Retained eight-layer/legacy work and Lesson2-6 metadata |32 backend checks passed |
| Retained input-format/PCL/canonical answers |1,973 passed, including1,590 canonical strings |
| Retained project dates/combined-work backend |73 passed |
| Prompt7 native UI |66 passed before activation and66 after full published download |
| Retained V35 corrected UI |100 before and100 published |
| Retained Prompt5 UI |45 before and45 published |
| Retained Prompt6 UI |26 before and26 published |
| Native keyboard/Enter/layer persistence |29 before and29 published |
| Complete signed-in application |135 before and135 published |
| Supplemental published mixed historical-settings UI |5 passed; indeterminate state and Cancel/save preserve the original map |
| Both-domain public delivery |142 full body/hash matches and16 protocol checks |

Official Wrangler dry-run, staged content and active content match the module size/hash at the top exactly. Both domains are `xylearninglab.t-pbl.com` and `student.xylearninglab.t-pbl.com`. The public check includes every new V36 body, retained V33/V34/V35 bodies, representative repaired YY assets, stable-bootstrap old-ETag refresh, HEAD/range/conditional handling and denied unauthenticated APIs.

One immediate post-activation GET for `project-model.mjs` returned405. Explicit subsequent GETs on both domains returned200; the repeated complete hash suite passed. No application/configuration change was needed for that response, and its exact cause is not established. Final replay started after the complete download/hash verification. The local replay server now fails if any required published V36 artifact is absent, instead of silently using a generated fallback body.

The **401 main published UI assertions** (plus5 supplemental historical-mixed-settings checks) use actual downloaded production Worker/public bytes with fictional authenticated APIs/SQLite. Full signed-in flows include populated Grades and real Gradebook/PDF lazy loading, pass/grade history, exact worksheet generation/save/reopen and1/2-column PDF, Student View, direct/reloaded teacher/student Playground and actual Boards controls/navigation/scoring. One canonical owner is **`/api/v36/static/20261028a/native/index-studentv36.js`**. No unhandled/React errors occurred.

Browser: **Chromium154.0.8037.57**, desktop and320/390px phone widths. This is not actual Safari/WebKit or every production account. The retained local `source-sans-3.ttf` fixture fallback remains; no production font repair or account-wide CPU reduction is claimed. V35's preview images remain byte-identical, including their24CSSpx margins/DPR2/lossless encoding.

## Preservation, docs and recovery

No production student data, work, attempts, grades, YY points/ownership, comics/media, account/class records or histories were edited/deleted for this release. No schema migration, bank/reference-JSON edit, production student test write, R2 write or artwork upload occurred. All Unit1/Unit2 banks and revisions/checkers, snapshots, exact worksheet packs, V35 eight-layer creation/12-layer legacy-read bounds, PCL grid/toolbars, compact date fonts, V34 pose registration, all693 art paths, 047 bare head, skin mappings, four-student/two-teacher reaction cycles and0/−1/+1px headwear movement remain.

GitHub changes only this handoff, five factual top inserts in AGENTS/README/CHANGELOG/RELEASES/PENDING, and additive UI preference/release-checklist notes. Earlier documentation bytes, all prior handoffs and the separate Coloring work remain. Do not publish source bundles, PDFs, screenshots, private captures, fixtures/databases, credentials or student records.

Prefer a forward repair based on this actual current release. Preserve all new/old immutable paths and source objects, complete693-image artwork, existing mixed per-type maps, frozen work and saved spacing commands. Do not restore known-bad161, clear student storage, truncate old work or rebase snapshots to mask a display issue. Recheck actual main/art/GitHub and applicable user authorization before future external writes; use one publisher, stop/reconcile on a mismatch, and remember a captured handoff is not an atomic publication lock.
