# Handoff V27 — Boards Up controls, curriculum and student tab colors

## Current verified release

Main Worker **faca87cd-eccd-424e-a2fc-bc931bcd1f4a** (**164**) is active at **100%**, deployment **e562d561-b227-4c67-bdd6-22bc784ca1c8**, activated **2026-10-25T02:39:02.97454Z** (October 24, 2026, **10:39:02 PM EDT**). `worker.mjs`: **9,978,567 bytes**, SHA-256 **a75c3f8e541215f504a457961435b2ac7ee5ceb7fbeca0b0316c377142dd6e24**. Original `_headers`: 233 bytes, SHA-256 **6a3077bed172e1fd2632fb114f786e51cb3e640c692d3ad673952bf8ab6dc387**.

Artwork service **xy-yy-art-v24** remains **3d6c8e1f-d394-49fa-9fee-a37c079b514a** (3), deployment **42010797-dd25-4fc3-b7bb-d494c150545d**, 100%, with all **153 images**. It was not redeployed.

Read this file, [Handoff-v26.md](Handoff-v26.md), [Handoff-v25.md](Handoff-v25.md), [docs/RELEASE-CHECKLIST.md](docs/RELEASE-CHECKLIST.md) and their retained preservation instructions before further edits. Freshly capture GitHub and both active/latest services. **Next handoff: V28.**

## Requested behavior now live

- **Type 202, all ten variants:** one bag containing x blue stickers plus the variant's red stickers, with additional red stickers in a pocket. The illustrated variant answers **x+6**; others retain their respective values, giving x+9 through x+33. Questions, expected terms, worked modeling/simplification and verification metadata agree. Type IDs, two-star difficulty and response requirements remain.
- **Lesson 2-5 solutions:** a blank-line-sized 1.25em gap before “Write the numbers” and “Write the terms,” plus separation between modeling and simplification. This is scoped to the actual Lesson 2-5 types (195–212 and 241), including retained saved solutions; stored solution objects are not rewritten.
- **Future solution writing:** identify the question, given quantities, terms/model and simplification as distinct sections. Leave one blank-line-sized gap between sections and put each given quantity on its own row.
- **Boards Up setup:** choosing No for extra credit immediately hides both sample label and sample. Yes restores them; reopening a saved No draft keeps them hidden.
- **Boards Up scoring:** two rows, two columns: blue +1 / red −1, then blue +? / red −?. The human explicitly confirmed **+1 adds the question's point value; +? adds entered quantity × that value; −1 and −? deduct raw 1 or the entered amount**. No fixed multiplier of 2. Existing negative-score behavior remains.
- **Custom score dialogs:** centered blue positive or red negative dialog, white focused numeric input, live calculation, Apply/Cancel, Enter once, Escape cancel, focus trap/return. Values must be whole numbers from 1 to 100,000. Empty, negative, fractional, exponential, nonfinite and oversized input cannot change the score. Game shortcuts are suppressed while editing the dialog.
- **Reward text:** question and extra-credit banners repeat the appropriate star count and expose numeric accessible labels. Question progress remains separate. The extra-credit click/B award now matches the displayed current question value; the both-questions condition remains. Timer, answer reveal, prizes, navigation, storage and V26 stable hover/press/focus behavior remain.
- **All six student categories:** selected tab and connected panel use a darker matching blue, red, purple, aqua, green or gray outline. Existing fills, 3px outline, tab shape, selected junction, counts, cards and behavior remain.

## Reported equivalent answer: evidence and limits

A narrow read-only check compared the reported Type 132-09 response with its saved response. The exact stored math/text serialization of **12+a** passes the current native checker using the report's original bank revision, as does a+12. The saved record currently has full credit, and the report confirms that **teacher-granted correction was already applied**. That corrected state does not prove that an earlier Check accepted the answer.

The responses table retains latest state rather than each earlier checked representation, so the earlier rejection cannot be reconstructed conclusively. No speculative checker change, historical regrade, student response rewrite or report resolution was made. A regression test now covers the exact observed serialization; wrong coefficients, constants, variables, signs and genuinely unsimplified answers remain rejected. Private identity, raw report data and screenshots are not in this repository.

## Curriculum delivery and frozen work

New default Unit 2 source revision: **87232bd05914f44f49532c4ef9b37709b29aae2a86f1a5dea21071ffe273771e**, **136 types / 1,325 questions**, compact UTF-8 JSON **3,789,925 bytes**. The matching [reference JSON](grade7_unit2_algebraic_expressions.json) is updated. Its Git blob is **9a483d33caca89f6a5b1de099e121598716341c0**.

The new revision is additive. All **eight** previous Unit 2 source revisions and their checker owners remain, including prior default **140b8ef301aec5a604e4552866a05177d967a25997e7c8de8b8d29a49a06708d**. Future unpinned bank previews/new selections use the new version; existing pinned assignments, saved snapshots, completed work, retries and assessment snapshots retain their original questions. Unit 1 and all unrelated types remain unchanged. No database migration or production student test write was performed.

## Serving and preservation contract

Started from freshly captured V26 **0486baff-9a80-498f-84ab-efcce0a38bd2**, SHA-256 **5643f6101dd03abcaf403f415fceb6dfb257a42f390f27eb253feeedf5fbace9**. Reversing the two guarded Worker replacements and removing the finite V27 footer recovers the entire exact V26 source. Earlier helpers, handlers and asset registries remain.

New connected aliases use **/api/v27/static/20261025a/**:
`native/index-studentv27.js` is the single app/React owner; `project-two-integration.js` outside native/ and `native/GradebookReview-studentv27.js`, `native/index.es-studentv27.js`, `native/jspdf.es.min-studentv27.js` all resolve to that same owner. New CSS, Boards and its model have finite aliases. Unchanged Project 2 CSS and V26 student iframe remain at their existing valid URLs.

Stable `/assets/index-studentv14cc5e9397ba56.js` is revalidated with `no-cache`; stale V26 bootstrap ETags receive the new body. New immutable bodies reconstruct from guarded exact V26 sources or compressed finite content, verify final size/SHA, and cache only successful results. Preserve **all** old immutable URLs, source/derivation objects and wrappers. Do not remove the V25 integration back-import fix or recreate two React instances.

The original complete managed **ASSETS** namespace was retained, not replaced with the finite local capture. Staged/active readback matched all seven bindings including private **YY_ART**, asset routing/headers, D1/R2, compatibility date 2026-09-01, runtime, observability, hourly cron, both custom domains and disabled workers.dev/previews. Art modules, configuration, active/latest heads and 153-image delivery remain.

Retain V26 additive **xy_v26_assignment_passes**, **xy_v26_grade_overrides**, their index/records and all live/snapshot ownership/audience/accommodation/release gates. No startup/GET schema writes; native identity semantics, assignments, grades, YY history/ownership/reactions and 047 bare-head/tone mapping remain.

## Validation and coverage

Official Wrangler 4.148.0 dry run, inactive upload, staged exact module/configuration readback, fresh GitHub/both-service checks before activation, and active exact readback passed. The generic content endpoint observably returned candidate bytes with stable staged heads; it is not an undocumented version-pinned guarantee or atomic publisher lease.

- **19,638** curriculum/preservation assertions and **13,969** actual solution-render structural checks passed, plus exact report-format regression.
- **73** assembled Worker static/hash/MIME/HEAD/ETag/graph/inverse checks and **123** independent runtime delivery checks passed; independent alias preservation audit passed **36** checks.
- **207 published-code checks** (151 workflow/supplemental checks plus 56 loaded-body/hash assertions) passed after activation; the full workflows also passed before activation: ordinary and signed-out direct project sign-in, nonempty roots, Grades/IP edit/Assignment Pass refresh, actual lazy Gradebook, native Worksheet Generator and valid PDF download, optional PDF helpers (including a separately imported purifier, outside the actual PDF path), direct/retained/reloaded teacher/student Playground and raw-answer review. All six category junctions were checked at desktop and narrow widths. Type 199/202 new and retained solution previews showed correct distinct math and both requested gaps.
- Published Boards Up replay passed **86** checks for setup/sample persistence, actual game routes, 1/3/5-point values, bonus, all four score controls, invalid inputs, Enter/Escape/Tab/focus, shortcuts, negative totals, prizes, timer, answer/navigation/reload and desktop/mobile layouts.
- **56 full public bodies / 28 paths** across **xylearninglab.t-pbl.com** and **student.xylearninglab.t-pbl.com** matched tested bytes and MIME. Wrapper ETags/cache and both stale-bootstrap requests passed. Older managed ASSETS have opaque native ETags; their complete bodies matched, and the verifier records those tags without assuming SHA-256-shaped ETags.

Browser scope: **Chromium 156.0.8078.47**, exact published bodies plus freshly captured retained assets and **fictional intercepted APIs**, with browser outbound requests blocked. Zero unhandled/React errors in the complete replays. Safari/WebKit, every real account path and whole-account performance are not established. The actual live landing page loaded; the fresh browser was signed out, so no additional real-account signed-in claim is made. The user's original open tab was untouched. The known source-sans font fallback remains; the Boards fixture's uncaptured intro-video URL is a local fixture limit, not evidence of a new live video failure.

## Recovery

Healthy pre-V27 rollback is V26 **0486baff-9a80-498f-84ab-efcce0a38bd2**. Preserve all additive data and current artwork during recovery. **Version 161, 42c9ced2-c616-4597-b299-896623db93f2, is known bad and must not be restored as healthy.** Verify exact active/latest code/configuration, shared app graph and representative populated signed-in routes after any recovery.

This GitHub publication contains factual documentation and the revised curriculum reference only. It excludes complete app bundles, captured configuration/data, private reports/screenshots/PDFs, credentials, fixtures and dependencies. Continue the standing read-current-handoff, fresh-capture, safe-validation and post-deployment-log workflow under the human's existing authorization.
