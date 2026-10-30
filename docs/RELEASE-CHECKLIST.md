# Release checks for frontend module and startup changes

These checks are required when changing an app entry, import, shared runtime module or delivered JavaScript URL. They also apply to an artwork task if cache invalidation changes an app script URL. Read the current handoff and AGENTS.md first. For context, [Handoff v25](../Handoff-v25.md) records the duplicate-app incident that motivated these requirements.

## 1. Capture the actual baseline and dependency graph

- Freshly capture active/latest versions, complete modules, settings, bindings, managed asset configuration, schedules and exposure for the main Worker and required artwork service. Fetch current GitHub. Reconcile changes before editing or publishing; use one publisher.
- Start at the real HTML/bootstrap and recursively resolve static imports, re-exports and dynamic imports. Include modules outside the native directory, especially Project 2 integration, plus Gradebook/PDF lazy modules and their back-imports.
- Identify the modules that own application startup and React. Record the canonical entry for each document/rendering tree. Older pinned helpers, model files and CSS remain valid; the gate is shared-runtime consistency, not a blanket ban on older version strings.

## 2. Produce one consistent module set

- Prefer the application's build/dependency machinery where available. For the existing finite derived-body mechanism, construct one explicit alias map from the complete dependency graph. Apply it to every participating module, including Project 2's import back to the main app.
- After edits, traverse the resulting static and dynamic graph again. Every participating module must resolve its app/React back-import to the same canonical URL. Reject two independently bundled app/React owners in the same rendering tree, even if both return valid JavaScript or have similar contents.
- Check all output bodies against their recorded hashes and source guards. Verify relative imports, absolute imports and lazy dependencies. Keep every prior required immutable source object and old public URL.
- Use new URLs for changed immutable bodies. Revalidate the stable bootstrap. Verify an old bootstrap ETag receives the new body after the entry changes; a stale cached entry must not silently mix old/new app runtimes. Never overwrite an immutable URL merely to fix cache symptoms.

## 3. Test the complete signed-in application

Use the normal visible app root and real entry/bootstrap graph. Fictional authenticated APIs and local fixtures are appropriate; do not create or modify production student data for smoke tests.

- Load both teacher and student entry pages, sign in through the ordinary UI with intercepted fictional authentication, then continue beyond the login/home screen.
- Cover the changed feature and shared integration boundaries. For a shared app-entry change, include Project 2 teacher setup at `/playground/teacher/new?unit=2`, a retained/direct project URL, student project display and the relevant Gradebook/PDF lazy views. Exercise navigation and refresh, not only a direct component render.
- Include representative populated project/assignment records. Empty teacher/student HOME fixtures passed during the V25 incident despite two app entries; an empty-dashboard result is insufficient.
- Assert one unique canonical app-entry URL/runtime instance in the document, a nonempty application root with the expected page content, and no unhandled browser exceptions or React errors. Network retries or revalidation of the same URL are not themselves duplicate runtimes. Check for the blink-then-empty-root failure after asynchronous authentication/data resolves. A hidden app root with isolated test components is supplemental coverage only.
- Run the same affected workflows against the actual published public code bodies after activation. Compare their bytes/hashes with the tested package; API data may remain intercepted fictional fixtures. State that scope in the handoff.

## 4. State browser coverage accurately

- Record browser engine, version and viewport/user-agent separately. An iPhone viewport or Safari user-agent in Chromium is not a Safari/WebKit test.
- If actual Safari/WebKit is available, run the relevant phone sign-in, affected route and reload flow there. If it is unavailable, record the limitation and do not claim Safari verification or a Safari-only cause.
- Separate HTTP/server availability, Worker error telemetry, JavaScript loading and authenticated UI health. HTTP 200, a working login page or no Worker crashes cannot by itself clear a blank-page report. A user's failure remains actionable even when anonymous checks pass.

## 5. Preserve data and verify publication

- Confirm the intended code difference and complete preservation of unrelated backend/data handlers. Keep all student work, grades, points, ownership, histories, bank revisions and media. Do not clear browser storage as an unexplained repair step.
- Preserve existing bindings, managed assets and settings unless an authorized change explicitly requires otherwise. Keep the complete currently deployed artwork package and all old paths (V29/V30:453 images, including153 retained); never replace that service with a partial diagnostic directory.
- Match official dry-run and staged modules with the tested package. Recheck active/latest before activation, respecting current user authorization and any approval-review outcome. Read back active code/configuration and verify affected public assets and workflows on both app domains.
- For YY/shared entry changes, confirm saved outfit/headwear IDs, independent tier ownership, the 047 bare-head URLs, transparent canvas registration, four student/two teacher reaction cycles and −1/+1 CSS-pixel headwear movement remain correct.
- Log the exact version, deployment, hashes, timestamps, scenarios, test data and browser-engine limits. Mark failures and unrun cases explicitly. Update the newest handoff and starting instructions with the current baseline; retain all previous handoffs. GitHub remains documentation/reference only, without bundles, credentials, captures, fixture databases, generated artwork or student records.

## 6. Storage changes and authentication boundaries

For a release that adds persistent state, verify the actual production schema before publishing, including nullability/constraints used by new writes. Review and execute an explicit additive migration before activating code that needs it; keep runtime startup and GETs free of schema initialization. Preserve old work/grades and retain new records on rollback. Use fictional tests for apply/revoke/manual edits rather than altering production student records.

For new interception/authentication helpers, test denied/archived/temporary-password and expired-session cases for unintended writes, preserve account-versus-roster identity, and apply the same current ownership/audience/live-and-snapshot mode checks to every manual-state read/write path. Preserve existing release gates. Record the migration and real-schema evidence separately from fictional fixtures. [Handoff v26](../Handoff-v26.md) documents the validated pattern and limits.

## Evidence and model choice

An assertion total, a confident answer, a model label or a high reasoning-effort setting is not a substitute for these scenario checks. Use independent review when it can improve coverage, but show the dependency and workflow evidence. Do not attribute an incident to a model ranking without comparative evidence; record the demonstrated implementation error and verification gap.

## Reusable worksheets and integrated layout (V30)

- Preserve exact saved question presentation, snapshot/bank revision and answers across detail reads, metadata/layout saves, reloads, PDF and answer-key actions. Only an explicit generation/regeneration may select another pack. Exercise both banks and actual one/two-column PDF layout using fictional fixtures.
- Test the complete visible worksheet builder, including screen positions of title, one Description heading, the two-row editor, columns above Difficulty and compact nonoverlapping controls. Existing shared grid-row rules and Chromium details-content styles can defeat an isolated grid patch. Keep styling scoped to worksheet mode.
- Verify additive teacher-owned artifact storage against the real schema. Keep worksheets separate from student-delivered assignments/grades/YY, enforce owner/session/method/origin/bounds, and retain records on removal/rollback. Never initialize this schema at startup or from a GET.

## Upload authentication and source formatting (V30)

- Inspect the actual error body before blaming token expiry or permissions. V30 saw a large-request credential-connection401 with an active token, while a smaller standard upload with the same credential succeeded. The exact connection size limit is unproven. Keep the normal configured proxy/CA/credential path.
- HTTP-gzip multipart was rejected by Cloudflare and must not be assumed supported. If reducing source formatting, protect all literals/templates/newlines, prove identical executable AST and exact reversibility, and rerun assembled/backend/full-browser checks on the final package. Do not alter bank strings or serialized public-asset edits. Match official dry-run, staged and active bytes/configuration afterward.


## Compact controls, project dates and structured work (V32)

- Apply the standing [UI preferences](UI-PREFERENCES.md) to future new/changed UI. Verify actual label/input centers, rows and widths after the full cascade; keep tooltips inside the viewport and complete button/title/subtitle text on one line.
- Date controls must persist and reopen in both project builders, validate on the server and preserve omitted older-client settings. Convert explicit local dates with the actual time zone/DST rules. November 4,2026, 2 PM New York is19:00UTC. Never infer an unspecified late cutoff, penalty or authority to alter student records.
- Teacher preview must retain the native frozen scaffolding metadata and use the same presence gates and assignment-restricted YY component as the student. Keep synthetic practice state ephemeral and teacher preview checks free of production response/grade writes.
- Current factoring work adds optional `combined:{factor,expression}` to the existing bounded object. Retained old work must remain readable; new current checks require both fields before using an attempt. Test Save/Exit/reopen/review, physical and virtual typing, manual keyboard opening and correct field targeting. Do not mathematically grade intermediate work or change frozen sample-solution JSON for this row.
- A cyclic module importing the app-owned React runtime must initialize injected factories lazily after that runtime exists. Keep the one-owner import graph and populated signed-in/reload checks.
- If source-only transport packaging removes non-license comments/horizontal whitespace, preserve every literal/template, license notice and newline; prove identical executable AST and exact source restoration, then rerun the assembled/backend/full signed-in suites on the final package and again on actual published bodies. Record the actual upload error and credential verification; do not assume a connection-layer401 proves token expiration. Keep the normal proxy/TLS/credential path.
- Preserve new combined fields, project dates, saved packs, schemas, all historical assets and student work during recovery. An older strict client may require a compatible forward repair to edit newer structured work; never erase fields to force a rollback.


## Prompt 6: input categories and PCL work

- Derive type-level input formats from every variant. Keep every canonical valid answer enterable, including exact fractions/decimals and deliberately authored uppercase variables. Do not change the native evaluator to implement input restrictions or regrade old responses.
- Exercise physical typing, original virtual keys, paste, same-value delayed MathLive events, warning persistence/clearing and unchanged existing answers. Keep all keyboard buttons visible/enabled and preserve complete saved work.
- Read named reports through bounded SELECTs only. Separate the report-time payload, latest response state, granted credit and actual reproduction. Latest per-question data does not reconstruct each earlier check; state uncertainty rather than blaming a student or inventing a cause.
- Operations fields may contain valid operation symbols alone. Other work fields still require meaningful content. Verify missing-work gates consume no attempt and intermediate mathematics is not graded.
- PCL presets must match all authored variants' Circle term counts, optional Parentheses step and rich Enter/save/reopen/review behavior. Preserve old/new schemas and source-owned contexts.
- Match exact reconstructed bank data when changing its storage representation. Do not treat a data-encoding initializer as the same executable AST; verify decoding hashes, all historical bodies/revisions and native signed-in workflows. Keep the decoder with the initializer and use ordinary upload authentication/TLS.
- Save and reopen daily counts in both assignment settings and global defaults, enforce bounds on the server, use source-assignment counts in student setup/start/preview and preserve already-started snapshots and existing explicit choices.


## Narrow panels, preview padding and publication state (V35)

- Assert actual button left/right bounds and full label scroll widths against their own parent at desktop and320/390px. A viewport-based max-width or correct outer panel size can still crop children. Exercise native keyboard opening and saved/reopened fields after the full cascade.
- For variable-count term grids, test actual2/3/5/6-term content: one row, equal bounded columns, single-line-height inputs and complete aligned toolbars. Preserve old rich/multiline work while changing its viewport height.
- Capture the real native component with padding on every side, inspect final images at full resolution, and verify lossless encoded pixels. Hide preview-only interactive controls with the actual final CSS cascade; keep real student controls.
- Verify Lesson2-6 flow on older frozen snapshots without new metadata as well as fresh assignments. Enforce8 new layers before cleaning/mutation; retain existing9–12 without growth or truncation.
- Exercise draft, successful/failed publish, home navigation, fresh published re-edit and CLOSED state. Assert assignment-type navigation/link/icon visibility, compact complete footer controls and that saving cannot demote published work. Check shared differentiated settings in every saved child, not just the editor state.
- Reconcile concurrent updates on their exact current source, preserve their immutable paths and artwork registry, use a fresh release namespace and rerun integrated checks. V35's pre-upload guard caught main172/art5 replacing171/art4; it prevented a stale upload. Preserve the full current693-image collection.


## Assignment-wide scaffolding, actual warnings and Space keys (V36)

- Exercise exactly one global checkbox and no per-card scaffolding toggles on all five requested lessons. Verify native preview hover, on/off, mixed historical settings, Cancel/Save, across-difficulty persistence and all three differentiated child payloads. Do not rewrite existing started snapshots/work when assignment metadata changes.
- Test missing-work feedback by actually clicking Check Answer, not only inspecting a completion predicate: a disabled button can make the warning unreachable. Assert the exact message and no check API/check-count consumption across word work, PCL and factoring. Preserve server completeness gates before mutations.
- Test physical and native virtual Space on the actual intermediate/combined MathLive fields, then save/reopen. The shared insertion helper's format parameter is a function-template selector; passing latex as a selector can silently prevent ordinary insertion. Keep the existing keyboard layout and unrelated fields unchanged.
- Finish the full public-body hash download before a published-code replay. Fail if a required published artifact is missing; an environment flag alone does not prove actual downloaded-body coverage. Investigate unexpected post-activation responses, repeat complete verification and record material failures/limits honestly.


## V37 — bank ownership and explicit student migrations

- A new current bank must retain every old source/checker and same-ID problem. Test old-revision teacher reads, actual re-edit/republish and source pin persistence; validation against one bank followed by storing another revision is invalid. Display difficulty from frozen slots when catalogs have changed.
- Ordinary assignment metadata edits never authorize rebasing started work. For an explicitly requested migration, define target teacher/group, archived originals, current-question policy, disjoint graded/example reservations, counts/weights/positions, Ready shared cache, all retry snapshots and nondecreasing best grades. Preserve unrelated records and reward receipts.
- Use a guarded archive plus updates in one transaction, idempotent receipt IDs and exact old-row/count comparisons. Re-read/replan on a racing save. Explicit additive DDL is maintenance work; never initialize it on GET/startup. Remove maintenance triggers afterward while keeping preservation receipts. Never use generic deletion/pool reset to force compatibility.
- Changed-question identity must protect stale save/check/navigation/report before cleaning/mutation; preserve submitted old work and isolate local draft recovery. Retained items keep their old pins. Retry selection must honor each item's owning revision and prior graded/example exclusions.
- Test completed/past, untouched/current changed, current unchanged, existing retry, manual/late/weighted grades, Ready sharing, stale/foreign clients, idempotence, rollback on concurrent activity and no YY writes. Verify actual production scope/readback without publishing private records. Prefer forward repair once new bank identities are live.
- Hover geometry must not intersect its checkbox at desktop/tablet/phone sizes. Check all preview modes and exactly one combine-after-layers stage. Full published-body downloads must finish before authenticated replay; limit local concurrent browser suites if navigation is CPU-starved, and report that separately from a production defect.


## V38 — variable case and retired organizers

- A variable rename must cover question/answer mathematics, expected power-map keys, all positive/negative solution/ladder terms, verification expressions and derived input categories across all variants. Preserve numeric coefficients, variant labels and paired IDs. Test native answer entry/checking as well as rendering; keep every historical bank's original data. Current or explicitly pinned preview checking must resolve the corresponding bank rather than an older global same-ID object.
- Removing an organizer is not permission to discard saved work or rebase student snapshots. Test old saved true flags, start/edit/save, old structured responses in regular Work, old clients that send only structured work, save/reopen/review, and ordinary empty-work gates without consumed checks. Tolerate only the explicitly retired IDs; retain bounds and reject unrelated invalid flags. Do not bulk-migrate data for a presentation change.
- Compare actual font sizes, line heights, baselines, right-edge placement and overflow for both enabled/available status text at desktop/tablet/320–390px. Native MathLive content lives in shadow DOM; outer innerText alone cannot establish that visible old work is missing. Inspect field values/shadow content and actual screenshots. Preserve earlier image bytes and test default Lesson2-6 preview modes separately from other lessons.


## V39 — shuffled choices and solution consistency

- Test all24 A/B/C/D permutations and a wrong/exhausted state, not only whether the correct expression appears somewhere. Match the visible option letter, solution key, selected-response review and authored Choice/Option references. Saving/checking must still use the original stable ID, with unchanged grade/check behavior.
- Preserve each displayed part's choices when merging revealed multipart answers/solutions. Check pre-lock/release hiding, saved/reopened seeds, Unit1/Unit2 prose and ordinary unshuffled teacher/worksheet contexts. A correct answer's solution may be collapsed behind View Solution; open the real control before asserting its contents.
- Map explicit contextual text references only for rendering; do not rewrite LaTeX variables, source banks, answer metadata or saved snapshots. Prove nonmutation and unchanged bank/Worker business handlers. Use bounded read-only production evidence to separate display confusion from real grading issues; do not regrade records without evidence and authorization. Keep all private case details out of GitHub.


## V40 — preview sizing and scoped toolbar changes

- Measure actual image draw bounds, natural aspect ratio and old available width before claiming a fractional size. A half maximum width is insufficient when the old popover was side-room limited. Check every preview mode in review and customization, viewport/checkbox exclusion, scrolling and intact source pixels at desktop/tablet/320–390px.
- Remove presentation controls at the answer component boundary; retain Functions, physical/virtual keyboard, undo/redo, current values and native grading. Exercise numeric/algebraic/factoring/word answers and custom long assessment responses, plus saved/reopened answers and rich Work controls. Do not remove rich controls globally or strip stored styled math.
- For Cancel/reopen assertions, await actual dialog closure and the reopened controlled input's settled state. Fix missing local source artifacts before declaring a full-app test pass; keep those captures private. Preserve one canonical app runtime and complete downloaded-body replay gates.
