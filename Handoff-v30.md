# Handoff V30 — PDF interface changes and reusable worksheets

## Current verified release

Main **167 / 338cf714-638d-4ff2-993c-a9d8d9d09e37**, deployment **c32e5884-2069-4471-b8ce-821807a46171**, is active at **100%** from **2026-10-26T19:36:58.025331Z** (**October 26, 2026, 3:36:58 PM EDT**). Main module: **9,787,542 bytes**, SHA-256 **ec0191a8ed67cb2ce2425fc7ad1d443a9d852fcd70c37302b87596b6d4ff5b43**. Private artwork remains **4 / fe8ab164-4c8c-44e8-86a0-15782c44e7c2**, deployment **1ac5c1fe-2c99-4d8d-b1e7-00207067aa8c**, unchanged at100%, with the complete **453-image** collection.

Read V29, V28/V27/V26/V25 and the mandatory [release checklist](docs/RELEASE-CHECKLIST.md), then retain all earlier handoffs and their storage/privacy/UI contracts. The next handoff is **V31**. This update implements the eight-page October 26 **Prompt (1).pdf**; the last page is an annotation without another text requirement. The PDF, captures, app bundles, fixture databases and credentials remain outside GitHub.

Started from freshly captured V29 main166 **5ad1f2dd-19c3-49dc-ad6d-56e858f38043**, deployment **62db5c10-1ccb-4b7b-a40a-3eadfa6a40a4**, and unchanged art4. Fresh reads reconfirmed both active/latest heads, complete modules, settings, schedules and exposure. Keep this healthy main166/art4 pair for pre-V30 recovery; **never restore known-bad161**.

## Student View class selection

The yellow banner now says **View as a student in**, followed by an owned-class selector. New demonstrations default to **All classes**. Selecting one class scopes ordinary and differentiated work, Comic-Con, assessments, Playground entries, category counts, class schedules and YY policies/rewards using the existing teacher-only preview APIs.

Switching class returns to the dashboard and recreates the fake in-memory practice API. The previous class's open assignment, attempts, challenges and delayed component state do not carry into the new class. The selected class is retained in demonstration URLs through **demoClass**; switching removes stale **demoRoute**. Wrong-class detail/check reads are guarded before forwarding. Real student routes/adapters and data are unchanged.

## Boards Up layout

The score, question/extra-credit award banners and all configured threshold/reward labels keep their complete text on one line, shrinking measured font size when needed. The score111 remains111 without a split or ellipsis. The timer has a large bordered tile on the left; Start/Pause share the upper row on the right, with icon-only Reset, +30s and −30s below. Controls keep their accessible names and existing hover/press behavior.

The model, question values, scoring, bonus values, negative/custom-point rules, star pool/queue, deduction flash, prizes, timer arithmetic, previous/next navigation, keyboard shortcuts, answer keys, saved session/configuration and restart behavior are preserved. Actual native game checks include111, a permitted160-character reward, widths1366/1280/620/390, the requested timer arrangement, countdown/pause/reset/adjustments, scoring, answer reveal and previous/next/key controls. These width/text tests do not certify every possible content/viewport combination.

## Assignment Pass and explicit grade edits

Assignment Pass uses two columns: class and student checkboxes on the left, with **Select All** first; assignment checkboxes appear on the right after at least one student is chosen. Apply/Close remain below. A successful acknowledged application closes the dialog automatically; failed requests preserve selection and show the error. The old existing-pass list is removed. The explanation keeps existing work/grades and adds **You may cancel the pass by changing their grade later.**

The backend accepts plural **assignmentIds** while retaining legacy **assignmentId** compatibility. It validates the full selection and commits all eligible student/assignment flags atomically. Ordinary current/late lesson-only ownership, roster, audience, accommodations and live/snapshot gates remain. Differentiated groups are presented once and expanded only to eligible children. Existing900-student support remains, with a900-ID list bound and10,000 concrete-flag cap; oversized selections fail before mutation.

The grade dialog has separate student and assignment heading rows, **Current Grade** without /100, a numeric input and an explicit **Enter** button. Blurring the input does not save. The resulting-grade history is newest first, e.g. **100 – 10/26 8:58 AM**, with no old-to-new pair, year, seconds, reason or actor UUID displayed. Backend history/actor records and all original attempts/work remain.

An explicit grade edit cancels valid passes for that student/ordinary assignment. For a differentiated group it cancels valid owned sibling flags while applying the numeric override/history only to the edited assignment. Expired valid flags can be canceled; unrelated students/assignments and stale invalid conversion/audience/accommodation flags remain. Grade override, history append and pass cancellation use one atomic batch. Even an explicit same-score edit can cancel an exemption. Manual-state/release/privacy gates and the existing grade aggregation are preserved.

## Reusable teacher worksheets

Worksheet mode has one Description heading, a two-row editor, **one/two problem columns between Description and Difficulty**, five compact difficulty controls at normal teacher width, narrow gear buttons, and an **Answer Key** button next to Generate Worksheet. The key is a numbered answer-only table, including multipart answers through the existing renderer.

Generating creates a teacher-owned saved worksheet visible in the Overall/grade/unit assignment dropdowns. Clicking its title or edit action reopens the editor with the **exact generated question instances, complete question presentation, revision-pinned snapshot and answers**. Reloading also retains the saved editor context. A metadata/layout save preserves the pack. Changed question selection requires explicit **Regenerate Worksheet**; inspecting an existing answer key or PDF with a pending selection does not silently randomize questions. Regeneration increments the displayed worksheet version. One/two-column selection changes the actual preview/PDF layout, not only a label.

These are print artifacts, separate from student-delivered assignments: no synthetic class assignment, student feed, Gradebook entry or YY reward is created. Generate delegates to the actual native /worksheet and /worksheet-key selectors/checkers on the server and stores their returned pack; it does not trust client-supplied SVG/questions/answers. Metadata save cannot replace the pack. Teacher ownership, active session, role, method, origin, size/type/count/lesson bounds and concurrent-update predicates are enforced. Removal is soft and retains the stored pack.

New routes are **/api/worksheets/list**, **detail**, **generate**, **save** and **delete**. Detail/list reads do not initialize schema. Settings preserve the print description/columns/counts/types; internal native selection dates are generated for print validation and do not schedule student work. Grade7 Units1/2 and1–200 questions use the existing banks.

## Explicit additive migration and preservation

The actual production schema was read successfully before implementation and reconfirmed before migration. Unlike the historical V26 limitation, this session's configured credential could read schema and apply the necessary DDL. At **2026-10-26T19:36:47.047661+00:00**, the explicit migration added only **xy_v30_worksheets** and **xy_v30_worksheets_owner**. Migration SHA-256: **9cc0ad8c09828c6fc210802d41696693537147274e937f1a2f5d7921eb1a69ec**. All earlier table/index definitions match before/after. No student-table DML, production test worksheet, grade/pass application, R2 object write or artwork upload was performed.

The table stores teacher ownership, grade/unit/lesson, title/settings, exact generated JSON, timestamps, revision and a soft-deletion flag. Startup/new worksheet GETs do not run DDL. Keep the table and all saved records during rollback; V29 can temporarily hide the feature but must not delete its data.

Preserve all students, attempts, responses, grades/history, assignment/classes/schedules, exemptions/overrides, messages, YY points/receipts/items/ownership/looks and teacher settings. Keep the current Unit2 default **c5bb948fe1fe3c73bd4f864397a9f84b4d78ec887b7527912eec2aabd29086d5**, all nine earlier revisions/checkers and frozen work. Catalogs remain Unit1 **104 types/520 questions**, Unit2 **136/1325**. No bank/reference JSON changes are part of V30.

Art service4 was not redeployed or replaced. All453 paths, persisted IDs/prices/ownership, legacy Black→brown, the047 bare head, four student/two teacher reaction cycles and0/−1/+1 CSS-pixel headwear motion remain. Retain V23 polling and all earlier privacy/release contracts. Archive/purge and the held Grades/dashboard/PDF optimization proposals remain held; the requested worksheet reconstruction is the explicit new scope here.

## Module graph and packaging

Nine finite V30 assets use **/api/v30/static/20261026a/** plus the revalidating stable bootstrap. The main, outside-native Project2 integration, GradebookReview and both PDF lazy modules share **/api/v30/static/20261026a/native/index-studentv30.js** as the single app/React owner. The complete16-module import graph passes; older pinned helper/CSS namespaces remain valid. All prior immutable code/art URLs, complete managed ASSETS, private YY_ART, seven bindings, headers, runtime, domains, cron and exposure remain. Keep the five original immutable V21 source objects used by the existing derivation chain.

Before transport formatting, all unrelated Worker bytes can be recovered exactly from captured166 by reversing the two intended grade/pass function replacements, export and additive V30 footer. Public native edits are exact guarded transformations with one explicit graph-wide alias map; old source bodies remain intact.

The initial ~11MB multipart upload returned a connection-layer401 (**authentication failed for integration**), while token verification said active/unexpired. A1.89MB HTTP-gzip transfer reached Cloudflare's parser but was rejected as an unsupported multipart body (10021); it created no version. The successful standard request used the same credential and code with **leading source indentation only** removed outside all literals/templates. No proxy, TLS or token bypass was used. This supports a size-related connection problem; the exact gateway limit was not established, and the401 alone did not prove token expiration or missing Worker permission.

Prepared source: **11,010,188 bytes**, SHA **c4dc18792c7d3c805e1570e63979aefd56addfd70f17ed62b479591dccabcff5**. Packaged source removes **1,222,646 indentation bytes**, preserving every newline and literal/template. Normalized executable AST hashes match exactly (**279a76fb0204665f5b4a559bee0c0097f100174d5fa5d3eb3bdf6a8703be8994**); the retained indentation map restores the prepared source byte-for-byte. Repeated all release tests on the final smaller package. The official dry-run matches the uploaded/staged/active module and _headers exactly. Never reformat bank strings, templates, serialized asset edits or question content to reduce transport size.

The content/v2 API's version_id query is not treated as a documented historical pin. Content readbacks are bracketed by stable latest/active-head checks and matched against exact tested bytes. Script API etags are not substituted for module SHA-256.

## Verification and actual limits

| Check | Result and scope |
| --- | --- |
| Assembled Worker/static graph |296 checks; all nine new bodies, five retained V29 immutable app bodies, HEAD/304/ranges/416, stale bootstrap and one canonical owner |
| Worksheet backend |131 checks against the actual schema in fictional SQLite; both banks, exact packs/native keys/reopen/layout save/regeneration, ownership/auth/origin/bounds, no student-table changes, soft deletion |
| Pass/grade backend |172 checks on the final assembled Worker; plural/legacy/grouped selections, eligibility/races/caps, atomic rollback, pass cancellation and retained native work/history |
| Focused UI helpers |53 demo checks,48 grade/pass component checks,26 Boards preservation checks and80 Boards component/layout checks; supplemental coverage |
| Full final package browser |135 checks before activation; ordinary teacher/student sign-in, populated Grades, pass/grade controls, real Gradebook lazy route, actual worksheet PDF and1/2-column layout, saved/reopened keys, class-filter tabs/reload, direct/retained/reloaded teacher/student Playground, native Boards game |
| Actual published-code browser |135 checks, same workflows, serving freshly downloaded public bodies with fictional local APIs and the exact active Worker |
| Both public domains |128 complete body/hash matches across64 paths, plus16 protocol/auth checks; includes four current Basic sprites/headwear and all nine retained047 bare sprites |

Full-browser engine is **Chromium 154.0.8037.57**. Local HTTP requests stay in the fictional fixture; no real student's session/data is used. No unhandled browser/React errors or unexpected fixture HTTP failures. The already documented missing local **source-sans-3.ttf** uses fallback; this is not a claim of a production font failure. Actual Safari/WebKit, every account/content combination and whole-account performance were not tested. Phone-size Chromium is not Safari. Timers use the controllable browser clock for arithmetic checks; runtime-URL checks are recorded before that clock replaces performance timing APIs.

The combined test caught legacy grid placement and Chromium details-content styles overlapping worksheet controls. The final worksheet-only section/flex/grid layout fixes this and keeps ordinary builders unchanged. Use the full integrated layout and literal screen order (title, description, columns, difficulty, actions) for future checks, not only isolated components or DOM order.

## User-facing opaque-ID audit

See [UI-ID-AUDIT-v30.md](docs/UI-ID-AUDIT-v30.md). The directly displayed grade-history teacher UUID is removed from presentation; stored history is retained. Other confirmed conditional fallbacks are reported, without blanket removal of useful curriculum IDs, invite/recovery codes, URLs or storage keys.

## Future release/recovery

Freshly capture main167/art4 and GitHub before changes. Keep one publisher and apply the release checklist, with populated signed-in routes and public-body replay. For a necessary rollback, use healthy main166/art4, preserve the additive worksheet schema/records and all old/new immutable paths, then repeat affected signed-in and both-service checks. Current published documentation and all old handoffs remain the reference; next **V31**.
