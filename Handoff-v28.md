# Handoff V28 — word-problem solutions and Boards Up redesign

## Current verified release

Main Worker **2ccb85d3-12f7-469e-844b-09c55ff79dd7** (**165**) is active at **100%**, deployment **035c1d00-aaa7-4f4a-b2b4-e2e9b8f6d40e**, activated **2026-10-26T02:24:18.179292Z** (October 25, 2026, **10:24:18 PM EDT**). Worker: **10,628,446 bytes**, SHA-256 **ec246f5217743e1b3f2a69caf0d3fe28a2a76b601cd7846d11160370c5533be6**. Original 233-byte `_headers` remains SHA-256 **6a3077bed172e1fd2632fb114f786e51cb3e640c692d3ad673952bf8ab6dc387**.

Private artwork service **xy-yy-art-v24** remains **3d6c8e1f-d394-49fa-9fee-a37c079b514a** (3), deployment **42010797-dd25-4fc3-b7bb-d494c150545d**, 100%, all **153 images**. It was not redeployed.

Before further changes, read this file, [V27](Handoff-v27.md), [V26](Handoff-v26.md), [V25](Handoff-v25.md), the mandatory [release checklist](docs/RELEASE-CHECKLIST.md), and retained preservation instructions. Freshly verify GitHub and both active/latest services. **Next handoff: V29.**

## Word-problem solution format

The requested format is implemented for **93 applicable types / 675 variants**, plus **25 Unit 1 subparts**:

1. Normal-weight **Solution:** title.
2. Bold **Question:**, followed by the actual question being answered.
3. Bold **Variables:** only when variables are present.
4. Bold **Numbers:**, with quantities, units and meaning, such as “$300 budget” and “$8.50 per puzzle set.”
5. Bold **Operations:**, with meaningful calculations and necessary reasoning.
6. A contextual final answer statement, with only the answer fragment bold.

Keep clear blank-line-sized separation between sections. Use centered dots for multiplication in prose and mathematics. Do not add generic helper headings, duplicate top answer banners, “Build the Expression”/PCL headings or other filler to the new presentation. Intermediate work and givens remain normal weight. Multipart solutions retain their parts without repeating the Solution title. Preserve useful tables/diagrams and the existing number-line reasoning where required.

These are the standing expectations for future word-problem solution authoring. The native renderer recognizes additive `solution.word_problem` content; original methods remain for older frontends and frozen records. Text is escaped through React and math uses the existing trusted-disabled renderer.

The illustrated cases were checked explicitly: Type 196 notebook+pencil gives x+y; Type 202 retains V27's one-bag story and gives x+6; Type 209 divides the group's money first, then subtracts Zoe's book from her share, x/3−12.5; Unit 1 Type 028 gives a maximum of 30 whole packs, not 31. Other number variants retain their own values.

Choice explanations identify the correct scenario or equation rather than a fixed source letter. Native student delivery shuffles choice positions; the revised explanations remain correct after that shuffle. No answer IDs, shuffle implementation or grading criteria changed.

## Bank sources and preservation

**Unit 1:** 104 types / 520 questions. Updated 51 contextual types / 255 variants and 25 subparts. All prompts, answers, response rules, original methods, multipart order and **90 original diagram/table blocks** remain. New compact reference: **939,150 bytes**, SHA-256 **c247d75a783080191aeb9a56531c99142482bf391ccf79b40f6b989614e5e42d**, Git blob **774e3aab5fd31ffc315f66c790d859dcefc93138**.

Unit 1 has no pre-existing revision-pin router. The exact original source is retained as `xyV28Unit1Original`; a guarded structural patch derives `xyV28Unit1Source` and sets the current default. Existing unembedded type/problem references can display the improved solution, while their prompts, answers, work and grades remain unchanged. Embedded assessment problem clones remain frozen. Do not claim every old embedded solution was rewritten. The repository reference previously had 96 types; it now matches the actual already-live 104-type catalog, retaining the previously deployed 097–104 rather than reverting them.

**Unit 2:** 136 types / 1,325 questions. Updated 42 contextual types / 420 variants: 163–178, 195–212, 226–227, 229–234. Pure symbolic/conceptual exercises remain unchanged. New additive default revision **c5bb948fe1fe3c73bd4f864397a9f84b4d78ec887b7527912eec2aabd29086d5**, compact reference **4,152,141 bytes**, Git blob **5e6e73a778f5b2be671ed54f87bca36ec608cd8a**.

All **nine** earlier Unit 2 revisions and their checker owners remain, including V27 **87232bd05914f44f49532c4ef9b37709b29aae2a86f1a5dea21071ffe273771e** and the pre-V27 three-bag Type 202 revision. Future default previews/selections use the new solution presentation. Pinned assignments, paired examples, retries and assessment snapshots retain their own revision/content. Original question/answer/response/verification projections are unchanged; no speculative grading change, historical regrade or production student test write occurred.

Both root curriculum reference JSON files now match the tested sources. Preserve all earlier banks and original source objects during future delivery changes.

## Boards Up behavior

- Extra-credit reward text now uses the same white pill, font, size, weight, border and padding as the upper question reward message.
- The separate Rewards card is removed. The scoreboard combines each configured threshold and reward: “Reach N pts to get:” followed by the bold reward name. Values/names remain configured, not hardcoded to the mockup.
- The score is substantially larger. Scoring, navigation and answer buttons share consistent gaps and rounded rectangular corners. Normal desktop controls now fit without the prior internal clipping; short/narrow layouts remain scrollable and reachable, including long configured reward names.
- Quick **+N and −N** both display and apply the current question's point value. This PDF explicitly supersedes V27's raw −1 quick deduction. Custom + remains entered quantity × current value; custom − remains the raw entered amount. Negative totals remain supported.
- Custom dialogs contain only the requested numeric/equation row, Cancel/Apply and an error after invalid submission. Visible headings, helper sentences and calculation previews were removed. Accessible labels, validation (whole numbers 1–100,000), focus trap/return, Enter once, Escape cancel and game-shortcut suppression remain.
- Positive awards emit one rising star per point for ordinary awards, with varied horizontal starting positions and prompt sequential emission. Consecutive normal awards use a numeric pending queue; they do not discard stars when the active pool is full. A 300-point rapid-control burst produced exactly 300 completed stars, with at most 240 active nodes.
- Decorative output for a single unusually large custom award is capped at 120 stars, with at most 240 active nodes; the **full numeric score** is always applied. Pending normal stars drain as active animations finish. Effects are noninteractive and clear on leaving the game.
- Any deduction flashes only the blue outer game background red for one second, blue for 250 ms, red for one second, then blue. Another deduction restarts that feedback sequence. Reduced-motion preference suppresses decorative stars/flashes while keeping score updates and accessible announcements.
- Timer, prizes, answer reveal/key, navigation, extra-credit enablement/sample hiding, persistence, restart behavior and stable V26 hover/press plus visible focus remain.

No storage schema, session format or database migration was added.

## Delivery and no-blank-screen safeguards

Started from fresh V27 **faca87cd-eccd-424e-a2fc-bc931bcd1f4a**, exact SHA-256 **a75c3f8e541215f504a457961435b2ac7ee5ceb7fbeca0b0316c377142dd6e24**. All 2,035 freshly captured public files, complete artwork and safe configuration were verified. Reversing the guarded Unit 1 insertion, Unit 2 default-router change and release-export change, then removing the finite V28 footer, recovers that entire original Worker byte for byte.

The connected immutable alias set uses **/api/v28/static/20261025a/**: `native/index-studentv28.js` is the single app/React owner; `project-two-integration.js` outside native/ plus `native/GradebookReview-studentv28.js`, `native/index.es-studentv28.js` and `native/jspdf.es.min-studentv28.js` all resolve to the same owner. CSS and Boards/model aliases are consistent. Unchanged V26 student iframe and older helper/CSS paths remain valid.

The stable bootstrap remains `no-cache`, imports the new canonical entry and returns the new body for the previous bootstrap ETag. New bodies derive from guarded V27 registry/source hashes or finite compressed content, then verify final size/SHA. Keep all old immutable URLs, derivation helpers and V21 source objects. Never restore the duplicate-React back-import problem.

The complete original managed ASSETS namespace was kept, not replaced by a finite capture. Staged/active readback matched all seven bindings, private YY_ART, D1/R2, asset routing/headers, compatibility 2026-09-01, observability, hourly cron, both custom domains and disabled workers.dev/previews. Art heads/configuration/modules remain exact.

Retain V26 `xy_v26_assignment_passes`, `xy_v26_grade_overrides`, their index/records and all ownership/audience/accommodation/live-and-snapshot/release gates. No startup/GET schema writes; grades, attempts, responses, YY points/ownership/history/reactions and 047 bare-head art remain.

## Verification and limits

Official Wrangler 4.148.0 dry run, inactive upload, exact staged readback, fresh GitHub/both-service checks and active readback passed. Staged generic content observably matched candidate bytes with V27 still active and stable heads. This is not a version-pinned content endpoint or an atomic publisher lease.

- Actual assembled Worker delivery, ETag/MIME/HEAD/graph and complete inverse checks: **74**, one app/React owner, no missing dependencies.
- Unit 1: **20,249** preservation/checker/format checks, including 160 native shuffled-choice cases; exact arithmetic audit covers 992 math runs / 631 relations.
- Unit 2: **50,751** checks covering all 420 revised variants, math and future selection/snapshot/example/assessment routes; all nine previous revisions remain exact.
- Independent final curriculum semantic/preservation review: **29,259** checks, with actual native checking of every final answer fragment and separate polynomial/contextual recomputation.
- Full app before activation: **874** checks. Published-body replay: **930** checks, including all **93 word-type first-variant solution previews**, multipart rendering, typography/section spacing, retained old solutions, 12 student tab/viewport states, ordinary and direct teacher/student sign-in, populated Grades/IP/Assignment Pass refresh, native Gradebook lazy view, valid Worksheet PDF, optional PDF helpers and direct/retained/reloaded teacher/student Playground. Longer fraction/polynomial geometry solutions 175–177 also fit at desktop and phone widths.
- Boards actual assembled and published replay: **132** checks each, including scoring, concise dialogs, prize configuration, timer/answer/reload behavior, animation queue/flash timings/reduced motion, large inputs and responsive reachability. Zero unhandled/React errors.
- **56 full public bodies / 28 paths** matched tested bytes/MIME across **xylearninglab.t-pbl.com** and **student.xylearninglab.t-pbl.com**. Wrapper ETag/cache checks and both stale-bootstrap requests passed. Older managed ASSETS retain opaque native ETags; complete bodies matched.

Coverage is **Chromium 156.0.8078.47**, exact published public bodies plus freshly captured retained assets, with populated **fictional intercepted APIs** and outbound browser requests blocked. No real student records were changed for tests. Actual Safari/WebKit, every production account and whole-account performance are not established. Known source-sans font fallback remains. The isolated Boards fixture does not contain its intro-video URL; this is a local fixture limit, not evidence of a new live video failure.

A temporary account-usage failure interrupted automatic approval review of one browser-check command. It did not execute. Normal review resumed after access became available; all required gates subsequently passed through the normal workflow.

## Recovery and repository scope

Healthy pre-V28 rollback is **V27 faca87cd-eccd-424e-a2fc-bc931bcd1f4a**. Preserve all additive data, original sources and current artwork. **Version 161 (42c9ced2-c616-4597-b299-896623db93f2) is known bad and must never be restored as healthy.** After recovery verify active/latest code/configuration, the shared app graph and populated signed-in routes.

This GitHub update contains the two tested curriculum reference JSONs and factual logs only. No app bundles, captured private/configuration data, credentials, source PDF, screenshots, fixture databases or dependencies are committed. Continue the standing highest-handoff/fresh-capture/verification/post-deployment-log workflow under the human's existing authorization.
