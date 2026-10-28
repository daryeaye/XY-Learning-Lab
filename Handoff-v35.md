# Handoff V35 — scaffold layout and assignment controls

**DEPLOYED AND VERIFIED.** Main **173 / 2f396a21-227c-4211-8555-8f9bf1c5f3c7**, deployment **`8e1c25f5-1582-4735-8cb0-af21570bb960`**, is active at **100%** from **2026-10-28T01:41:37.06192Z** (October 27, 2026, 09:41:37 PM EDT). Worker **8,008,276 bytes**, SHA-256 **`463f3365c8f227d1c92e8a0080bdf0b68a07c1aaa2a041ff39c8ebd219b926a7`**. Private artwork remains **5 / 818df882-1a64-44e5-9c63-20e42c462de5**, deployment `3a172e35-9b53-4c1c-a03d-700d1bbdc326`, with the complete **693-image** collection; it was not redeployed. All seven bindings, managed assets, settings, schedules and exposure are retained.

Read V35 first, then [Handoff-v34.md](Handoff-v34.md), [Handoff-v33.md](Handoff-v33.md), retained earlier handoffs, [UI preferences](docs/UI-PREFERENCES.md) and the [release checklist](docs/RELEASE-CHECKLIST.md). Earlier current-state wording is historical. **Next handoff: V36.** Capture actual main/art/GitHub again before future work. This release implements the owner's seven-picture correction request under the existing live-update authorization; it does not broaden authorization for unrelated changes.

## Baseline and concurrent-update reconciliation

Preparation began on main171/art4. Immediately before upload, the active/latest guard detected the separately approved V34 YY repair at main172/art5 and stopped before uploading any stale package. Fresh captures then established main **172 / 379c92c5-07fe-4dad-963c-6f956b1cc9c0**, deployment `5de88a58-7661-447b-beaa-4fd89bf0e2c3`, module **7,810,889 bytes**, SHA256 `f56b56453363437a23e59cb25b647c84e8ba43e6a8d59f036fad6c2e80928283`; art **5 / 818df882-1a64-44e5-9c63-20e42c462de5**. GitHub was freshly fetched at `bdd1ae9`, containing Handoff V34, before preparing these records.

The final package is based on that exact main172 source, keeps its complete YY artwork registry/proxy, native pose URLs and repaired five-module graph, and applies the scoped changes below. It uses **new V35 immutable URLs**, leaving V34 and all earlier bodies intact. No stale V34 candidate was deployed or used to overwrite the newer repair. This is why the new handoff is V35.

## Keyboard clipping: cause and prevention

The narrow editable factoring panel was capped at 300px, while its action row used `width:max-content` with a maximum based on the viewport rather than the panel. Its Add/Math keyboard row could remain wider than its parent, whose horizontal overflow cropped the keyboard label. The previous narrow-panel verification measured the outer panel without asserting the individual child-button boundaries and label scroll widths. That was a layout and verification mistake.

The action row now uses the actual panel width, compact buttons and wrapping as needed. Every label remains complete and on one line. The native math/abc keyboard component is unchanged and still opens manually for the selected field. Acceptance checks measure every real button's left/right bounds and `scrollWidth/clientWidth`, then open and close the native keyboard at **1366,620,390 and320px** viewports. A static solution image or a correct outer width alone cannot establish this behavior.

## Student flow and eight-layer limit

All **17 Lesson2-6 types** show the work container immediately after the question and before A/B/C/D. New generated questions carry presentation metadata; the student formatter also derives it for older frozen Lesson2-6 snapshots that lack that flag. Existing assignments without Step-by-Step Help receive the same ordering for their ordinary work editor. Other lessons retain their order.

New editable factoring work stops at **8 layers**. At the limit, Add another layer is disabled and the panel displays “You have reached the limit of 8 layers.” The model and native save/check, challenge and teacher-preview paths enforce the cap before cleaning/mutation. Rejected attempts do not consume answer checks or alter saved responses.

**Preserve old data:** the read/normalization bound remains12 so any already stored9–12-layer work stays readable and editable, and may be reduced. It cannot grow further. Do not truncate old student work to meet the new creation cap. Final-answer checkers and intermediate-work presence rules otherwise remain unchanged.

## Four padded native previews and PCL layout

The two word-work previews, factoring preview and PCL preview are fresh screenshots of actual student components filled with fictional canonical work. Their DOM canvas has **24 CSS px padding on all four sides**, captured at **DPR2** and encoded as lossless WebP. Images were visually reviewed; encoded pixels exactly match the PNGs. Factoring demonstration images hide interactive Add/Keyboard controls, while the real student controls stay visible. No screenshot of a production student account was taken.

PCL now says **“Circle: Identify each term with its sign.”** Undo/Redo sit in the same formatting row as B/I/U, Functions and the keyboard for Parentheses and Like terms. Visible “Circle term1/2/3…” headings are removed; accessible input labels remain. The term inputs use a single-line-height viewport. Older multi-line saved rich content remains intact and scrollable rather than being erased.

The grid uses **repeat(termCount,minmax(0,1fr))** within the fixed panel width at every screen size. It never expands the panel or switches to two columns on phones. Actual **2,3,5 and6-term** examples were checked at desktop,390 and320px: every box is in one row, with bounded equal widths, no horizontal grid overflow, and input height no more than36px. Both formatting rows remain aligned within the panel.

## Daily Challenge settings

Remove the extra-YY-point helper sentence from the Daily Challenge settings area. The three difficulty labels show **⭐⭐⭐**, **⭐⭐⭐⭐**, **⭐⭐⭐⭐⭐** in the shared control used by single, differentiated and default settings. Existing Mild/Hot/Spicy names, number inputs and configurable counts remain.

The differentiated publisher previously did not propagate the shared selected `challengeCounts` into each child level's settings. That explains a real save/publish mismatch behind the reported feeling that the controls were not taking effect. The final publisher copies the selected counts to all three children. Actual tests edit defaults and group counts, publish and inspect all three saved child configurations. No existing live assignment settings are rewritten by deploying this code.

## Published assignment editing and compact footer

Once publishing succeeds, **← Assignment types** disappears, including on a fresh reopened PUBLISHED/CLOSED assignment editor. Drafts retain the navigation. The publication latch also keeps the established no-warning return-home behavior for published work; failed publishes do not set it. Worksheets and the separate legacy Assessment footer keep their existing paths.

The digital single/differentiated footer is one compact row: **💾, Publish/Republish, 🗑️, 🔗**. Icons have hover titles and accessible names. Before first publication, only Save Draft and Publish show; no copy, trash or student link. After publication, the main button says **Republish** and fits its text; the save icon says **Save Changes** and retains PUBLISHED or CLOSED state rather than demoting the assignment to a draft. The generated link stays below the row. Duplicate copy controls and the Google Classroom share sentence are removed.

The trash icon invokes the **existing Close Assignment** operation, retaining assignment records and all work/grades; it does not introduce permanent deletion. Copy uses the existing single/group student link. Tests cover all four complete controls in one row at1366,390 and320px, publish/save/reopen navigation, link visibility and group close retaining all three rows.

## Project date inputs

Both **Project1** and **Project2** use smaller text inside Due date/Late deadline inputs while keeping titles and label fonts unchanged and the existing three-row schedule layout. At desktop, labels remain20px and input text is17px. Additional narrow-screen fitting keeps the date/time control inside the available width. Project2's tested input is260px wide with no internal horizontal overflow. Native draft save/reopen and the New York local-time handling remain. No production due dates were changed by this release.

## Verification and published evidence

The final tested/dry-run/staged/active module is the exact size/hash at the top. Official Wrangler no-bundle dry-run matches it byte-for-byte. Strict inherited bindings retain complete ASSETS and YY_ART. Freshness guards check both services before upload and activation; active source, resources, settings, schedules and exposure were read back after activation.

| Final assembled checks | Result |
| --- | --- |
| Static/body/protocol/import graph |230 passed,24 modules, one canonical app/React owner |
| Unrelated native functions and repaired YY preservation |973 passed; all240 repaired body URL values retained; complete V34 registry exact |
| Eight-layer backend and17 legacy Lesson2-6 question flows |32 passed |
| Retained Prompt6 backend/input/PCL |1,973 passed, including1,590 canonical answer strings |
| Retained project dates/combined-work backend |73 passed |
| New correction UI |100 passed before activation and100 with actual published bodies |
| Retained Prompt5 UI |45 passed before and45 published |
| Retained Prompt6 UI |26 passed before and26 published |
| Keyboard/Enter/layer persistence |29 passed before and29 published |
| Full signed-in application |135 passed before and135 published |
| Public delivery on both domains |98 complete body matches and16 protocol checks |

Both domains are `xylearninglab.t-pbl.com` and `student.xylearninglab.t-pbl.com`. Public verification includes every new V35 body, retained V33/V34 bodies, stable-bootstrap old-ETag refresh behavior, range/HEAD/conditional responses and representative repaired YY bodies. All240 V34 repaired public bodies were additionally downloaded and hash-checked during reconciliation. The entire private693-image collection was **inherited unchanged**, rather than re-uploaded or claimed re-tested file-by-file by this task.

Published replay uses downloaded production Worker/public bytes with fictional authenticated APIs and SQLite fixtures. It covers teacher/student ordinary sign-in, populated Grades and real Gradebook lazy view, pass/grade history, exact saved worksheets and native1/2-column PDF, Student View, direct/reloaded teacher/student Playground and actual Boards game/navigation/scoring. No unhandled/React errors occurred. All participating native imports/back-imports share **`/api/v35/static/20261028a/native/index-studentv35.js`**.

Browser: **Chromium154.0.8037.57**, with recorded desktop/phone widths. This is not actual Safari/WebKit or every production account. The retained local `source-sans-3.ttf` fixture fallback remains documented; no production font repair or account-wide CPU reduction is claimed. An extra preservation test initially compared lazy-import URL spellings byte-for-byte and the browser test initially expected the old Gradebook filename; the checks were updated to use the explicit alias map/new filename and rerun successfully. These were test expectations, not ignored application failures.

## Data, documentation and recovery

No production student records, responses, attempts, grades, points, ownership, settings, comics, media or histories were edited/deleted for this update. No schema migration, R2 upload, artwork upload or bank/reference-JSON edit occurred. All Unit1/Unit2 banks, revisions/checkers, frozen snapshots, worksheet packs, V34 artwork/registration, 047 bare head, skin mappings and native student4/teacher2 reaction cycles with headwear0/−1/+1px remain.

GitHub changes are documentation only: this handoff, fresh top inserts in AGENTS/README/CHANGELOG/RELEASES/PENDING, and the shared UI preferences/release checklist. Earlier handoffs and existing log bytes remain. Keep source bundles, screenshots, PDFs, captures, fixture databases, generated artwork, credentials and student data out of GitHub.

Prefer a compatible forward repair based on this current release. Retain every new and historical immutable URL/source and the complete693-image artwork superset for cached clients. Keep both new8-layer creation enforcement and legacy12-layer read compatibility. Do not restore known-bad161, discard V34 YY registration, truncate work, clear student storage or reset saved snapshots. Freshly recheck current main/art/GitHub and applicable user authorization before any future external write; one captured log is not an atomic publication lock.
