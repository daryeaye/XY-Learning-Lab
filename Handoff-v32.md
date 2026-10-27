# Handoff V32 — Prompt 5 and retained urgent fixes

## Current verified release

Main **170 / 9bbbf609-7643-486c-b33b-39377eb85185**, deployment **f60220fc-35d6-41bf-adb6-6a7d861ffd55**, is active at **100%** from **2026-10-27T14:52:28.516377Z** (**October 27, 2026, 10:52:28 AM EDT**). Worker **10,441,231 bytes**, SHA256 **5283ba9cd26b8f0ad47fdf2161aa938b94a496b17add330f691a64b65ed61c4c**. Unchanged `_headers`: 233 bytes, SHA256 6a3077bed172e1fd2632fb114f786e51cb3e640c692d3ad673952bf8ab6dc387.

Private artwork remains **4 / fe8ab164-4c8c-44e8-86a0-15782c44e7c2**, deployment **1ac5c1fe-2c99-4d8d-b1e7-00207067aa8c**, at 100%, with all 453 images. Latest/active/settings were freshly reconfirmed for both services at **2026-10-27T16:21:33.746446+00:00** / **2026-10-27T16:21:34.491280+00:00**. All seven bindings, complete opaque managed ASSETS, private YY_ART, runtime/settings, schedules, domains and exposure remain. Inactive and active modules match the exact tested/official-dry-run package.

Both domains passed **92 complete body/hash matches across 46 paths** and **16 protocol/auth checks** at **2026-10-27T14:53:57.183922+00:00**. The three expressly requested project due dates were verified at **2026-10-27T14:54:37.834127+00:00** and reconfirmed read-only at **2026-10-27T16:24:32.303147+00:00**. This maintenance did not edit student work, grades, accounts or other student records.

## Scope and retained first delivery

Prompt (5).pdf, supplied October 27, supersedes the unfinished pages of Prompt (4).pdf. Implemented its fourteen main pages; page fifteen has no required update. The owner explicitly authorized live deployment and completing/publishing this handoff on GitHub. Preserve the urgent pages 1–3 already deployed earlier that day.

The first delivery was main 169 / ad80aa6e-9333-4db8-8f63-9905e3164d34, deployment d89e8e33-15b5-4d5b-b377-280b5d8cc3ab, activated 2026-10-27T12:39:41.451719Z. Its 10,390,169-byte module SHA256 is d3bc6dd9d22d9eef8d97925e2d92c285f8ab758e0eeee8b7e048874b61b5430a. GitHub remained at V31 by request while that partial handoff stayed local. This continuation freshly captured actual main 169/art 4, rather than restoring GitHub's older main 168. GitHub main at the start was 0a90bc62744cdb558738eda98b938599ae10673e.

Retained urgent fixes put Type checkboxes and labels on one row, reduce default rich-work Enter rows from 100 px to 27 px, and reuse the original native main/abc keyboard for factoring. The inherited column label rule and 100 px per-line math-field minimum caused the first two regressions. Keep real line breaks and rich math/styles; do not flatten saved work to fix spacing. The native keyboard component remains byte-identical. Prompt 5 now supersedes its automatic opening on factoring focus with explicit manual opening.

## Standing interface preference

**Keep titles, button labels and subtitles on one line. Use compact wording, compact controls and even spacing.** This governs every future new or changed interface unless the owner explicitly overrides it. Controls may move to another row on narrow screens while each label stays on one line. Preserve complete meaningful text and accessible names. Do not introduce duplicate headings, subtitles, Description labels or unnecessary explanatory copy. Test actual integrated CSS and screen positions, including phone widths; a JSX flex direction alone does not establish a horizontal layout when an inherited grid/display rule wins. See [UI preferences](docs/UI-PREFERENCES.md).

## Boards Up and assignment settings

Timer controls fill the available width, with Start/Pause above Reset/+30s/−30s. Their font sizes are unchanged. The demonstrated cause was an implicit, content-sized grid column centered inside the wider timer controls container. The explicit minmax(0,1fr) column stretches it. At 1366 px, Start grows from about 76 px to 111 px while retaining 14.343 px text; Reset retains 20 px. Existing measured FitLine also keeps Previous/Next labels on one line. Scoring, rewards, bonus configuration, native bank selection, timer arithmetic, keyboard shortcuts, previous/next, answer keys, restart and storage remain.

Single digital assignments have one Description heading. Its outer redundant label is removed and its editor fills the available row. Both single and differentiated builders put unlimited assignment attempts below student targeting, then show three separate, evenly spaced horizontal rows: Attempts per question; Possible points; Time to release the grade. Labels and controls align. Scheduling, class/student targeting, grade release, attempts, points, weights, accommodations and per-level maps remain unchanged.

Single digital progress reads **Question x of y**, without “in Single Digital Assignment.” Other levels retain their useful labels.

## Project dates

Both project builders have compact due-date, allow-late and late-deadline controls. Integer Story places them before Grading; Playground includes them in its final title/classes/grading setup step. They fit three horizontal-control rows on narrow screens. Dates save and reopen through native draft/edit flows and appear on student project cards and relevant native project views.

The owner also requested a one-time due date for the two existing published Integer Story projects and one Playground project shown in the PDF: **November 4, 2026, 2:00 PM America/New_York**. November 4 is EST, so its stored instant is **2026-11-04T19:00:00Z**, not18:00Z. The verified targeted update changes only their due-date metadata and normal updated timestamps; no student work/grade/record is changed. Existing late options remain; no unspecified late cutoff or penalty is invented. Detailed private before/after/CAS evidence stays outside GitHub.

Project dates use the existing JSON storage. Comic settings add optional `due`, `allowLate`, `lateDeadline`; its draft keeps the same due date. Playground exposes `schedule` with those fields and stores it inside existing `grading_json.schedule`, separately from its unchanged grading policy/audience. No table/column or schema initialization is added. Actual production project-table definitions were read before implementation.

Server and builder validation share the same bounded date model. Null due means no scheduled cutoff; late is allowed by default for retained unscheduled projects; a blank late deadline means no final late cutoff. A chosen late deadline must be on/after due. Old-client Playground edits omitting schedule preserve stored dates; normal Comic updates already merge existing settings. Existing ownership/audience/session/origin/method/concurrency gates remain. After a configured cutoff, new comic work/submissions/peer answers/feedback/votes and Playground student-work writes fail before changing work; saved/history reads remain. Closed Playground frames are read-only. Dates do not regrade old work, change point calculations or add automatic late deductions.

## Add Scaffolding

The teacher label is now **Add Scaffolding**, with its checkbox and text on one row. Eligible new review/builder choices default checked. Preserve explicit false choices, existing assignment settings, independent differentiated maps, Save/Cancel semantics, worksheet exclusion and frozen existing student snapshots. The backend does not retroactively turn on old work just because a UI default changed. Activation still uses the established explicit boolean `stepByStep` map and frozen `stepByStepHelp` flag.

The hover/focus explanation includes three real native student-interface examples: Unit 1 Question–Numbers–Operations, Unit 2 word work Question–Variables–Numbers–Operations, and factoring layers. These are screenshots of fictional native student work with canonical authored solution values, published as three small lossless WebP assets. They contain no real student record or account. Mixed math uses the native dollar-delimited line format, so fractions and multiplication render as math. The tooltip is clamped inside the viewport instead of extending past the first card's left edge. No image-generation substitute or second editor/keyboard was introduced.

Eligibility stays unchanged: the22 Unit 1 word types, Unit 2 types195–212 plus234, and factoring214–225. Existing ordinary Work, drawings, answers, attempt/scoring behavior, rich editors and read-only review remain. Final answers stay in the existing native fields.

Static factoring solutions align left and use the expression's compact width instead of stretching across their full container, including negative alternatives. The underlying JSON solution data and task meanings are unchanged. Keep227's expanded perimeter,228's inner expression and242's complete positive/negative GCF contract.

## Final factoring row and persistence

Under editable layers, show **Multiply the numbers on the side and bring down the expression after division:** followed by blank outside-factor and inside-expression math fields, with parentheses. Students fill both. Do not prefill or mathematically grade intermediate factors, quotients or this row. The unchanged native final checker still decides correctness.

`scaffoldWork` keeps format xy-step-work/version1 and adds an optional factor-mode `combined:{factor,expression}` object. It uses the same strict field/payload bounds. New editing creates this blank row; old work without it remains valid/readable and its original layers are retained. Current completion requires both meaningful combined fields before CHECK/RECORD, independently on client and server and before spending an attempt. Save/Exit/autosave can retain incomplete work. Read-only older reviews omit a nonexistent row rather than fabricating historical entries.

Save/reopen/review preserve both fields and LaTeX. The plain `work` fallback includes human-readable combined-factor/final-expression lines, never internal JSON. The server still derives the given expression from the frozen question, ignores client source claims, and preserves every bank revision and native correctness rule. Sample-solution JSON is not changed to add this student-work row.

## Keyboard and square root

Clicking factoring fields tracks/focuses the active target without opening a keyboard. **Math keyboard** explicitly opens/closes the original native main/abc keyboard; switching fields while it is open targets the correct field. Closing it stays closed on another field click. MathLive's separate default keyboard remains manual/hidden. Existing physical typing, fractions, powers, layers and cross-editor coordination remain.

The Functions square-root action inserts a fillable MathLive radical template with a top bar and placeholder, and its icon shows that input shape. Actual physical entry fills it; MathLive may canonically serialize a one-digit radicand as `\\sqrt6`, which is equivalent to `\\sqrt{6}`. Do not mistake that normal serialization for a missing template. Other function keys/layout remain.

## Teacher preview parity

There were two omissions: the preview server/client dropped scaffolding context while assembling a displayed question, and the demo used its own YY presentation instead of the native assignment-restricted component. Signed preview questions now retain server-frozen scaffold metadata; preview checks clean and validate structured work using the same native gate. An incomplete preview check creates no production response or consumed attempt.

Teacher view-as-student now reuses the actual native YY component with assignment context during normal/challenge/assessment work. Outfit changing stays on the dashboard; inside an assignment the existing encouragement/mailbox behavior matches the student interface. Native reactions and controls are shared. Preview profiles, practice responses, points and changes remain ephemeral; demo unlock observations use null storage and no real student account is changed. Preserve owned-class scoping, class-switch resets and demonstration route state.

## Preservation and delivery

Unit 1 remains104 types/520 questions. Unit 2 remains136 types/1,325 questions, default revision c0dcd61e5cb3fd7f7021c69c05dfe48331f4962656c14ffab2aa5d413b0afb8a, retaining all ten previous revisions/checkers. No reference-bank JSON, sample-solution JSON, question/answer identity, selection reservation or historical snapshot is replaced.

Keep all student accounts/work/responses/attempts, grades/history/passes, assignments/classes, schedules/messages, YY points/receipts/ownership/looks, exact worksheet packs, all historical static URLs and all453 art images. Black→brown mapping,047bare head, saved IDs/prices, four student/two teacher reaction cycles,500 ms frames and0/−1/+1 CSS px headwear offsets remain. Art4 is unchanged and was not redeployed. No R2/art write, student data migration or production student test occurred. The only production DML is the three expressly requested project due-date updates.

Seventeen finite delivered bodies comprise sixteen new paths under **/api/v32/static/20261027p5/** and the existing revalidating stable bootstrap. This includes the three example images. The canonical app/React owner is **/api/v32/static/20261027p5/native/index-studentv32p5.js**. Native main, outside-native Project2 integration, Gradebook and PDF lazy back-imports share that owner across21 reachable modules. Preserve every old V31/V32p13 source and immutable URL. Derived bodies use exact source hashes/guards, success-only caching and failure retry. Only actual module/CSS URL spans are aliased; never broadly rewrite every string literal or empty string.

The Project2 integration imports app-owned React through a cycle. Initialize new injected view factories lazily during rendering, after that owner exists; do not eagerly call the factory at module evaluation. Keep the mandatory [release checklist](docs/RELEASE-CHECKLIST.md), complete dependency graphs, populated signed-in routes and published-body replay.

## Packaging and test limits

The first10,529,740-byte standard multipart upload hit the previously documented connection-layer401 (“authentication failed for integration”). Read-only token verification showed active with expiration2077-01-01; neither expiry nor missing Worker Edit permission was established. The smaller standard upload uses the same configured credential/proxy/TLS. No HTTP-gzip multipart or credential replacement is used; the exact connection size threshold is unproven.

Source packaging removes88,509 bytes of non-license comments and safe horizontal whitespace outside every literal/template. All license comments and every newline remain. Exact reversal recovers prepared source SHA256 e3bad8f1fc761d66e1fa1308cb06520fe7b3ebc6762066c4556d122d8c8406b2; normalized executable AST hashes match e8fd064bd0286afd8b1ea00fce671dc1622ec3caa0a3a7605a7ded672b67a15f. All public JS/CSS/image bytes remain identical. Repeat the complete release checks on the packaged module; do not treat proof on the larger source alone as release verification.

Browser coverage is **Chromium154.0.8037.57**, including390 px viewport checks, not actual Safari/WebKit or every production account. Native APIs/SQLite and authenticated UI use fictional local records. A small fictional PDF fills only the unchanged Project2 introduction-preview document during date-control testing; its original production PDF content is not certified by that fixture. Actual native worksheet PDF generation, layout, keys and saved pack/reopen are separately tested. The documented local source-sans-3.ttf404 uses fallback and is not a production font-failure claim.

## Completed verification

| Final package check | Result |
| --- | --- |
| Assembled/static/protocol/import graph |254 checks; 17 delivered bodies, retained V31/V32p13 bodies, HEAD/304/ranges/416/method/404, stale bootstrap revalidation,21reachable modules and one app/React owner; exact packaging reversal and unrelated-source preservation |
| Project/scaffolding backend |73 checks; both builders' date persistence/validation/ownership, old-client date retention, cutoff writes denied without work changes, native and teacher-preview completion gates, correct final grading, retained old structured work and unrelated fictional student records |
| Prompt 5 signed-in UI |44 checks before activation and44 against downloaded actual public code: inline/default help and example, compact solutions, both assignment settings, one Description, both project builders' save/reopen, New York date time, mobile rows, fillable radical/top bar/typing, manual keyboard, combined fields and teacher-preview YY/scaffolding |
| Retained urgent fixes |29 checks before activation and29 against actual published bytes: checkbox alignment at 1366/980/390, physical Enter/compact lines, save/reopen, unchanged native main/abc keyboard, target changes, mobile and saved layers |
| Complete signed-in app |135 checks before activation and135 against actual published code: ordinary teacher/student sign-in, populated Grades/pass/Enter/history, real Gradebook lazy route, exact saved worksheets/keys/one–two-column native PDF/reopen, owned-class Student View, direct/retained/reloaded Playground and Boards scoring/timer/navigation/keys |
| Publication |Official dry-run exact bytes; guarded inactive/active full module and configuration readback;92public bodies/16 protocol checks on both domains; all final heads/settings reconfirmed |

All final reports use the exact active Worker SHA256 above. Published UI replays explicitly serve freshly downloaded public JS/CSS/image bodies while API/SQLite records remain fictional. There are zero unexpected JavaScript/React/static/SQLite errors; the known local font fallback is documented below. All private evidence remains under `/workspace/xy-v32-prompt5-2026-10-27/`; the earlier partial delivery remains under `/workspace/xy-v32-p1-3-2026-10-27/`. No private evidence is committed to GitHub.

## Recovery and next update

Prefer a compatible forward repair. Main169/art 4 is the healthy immediate pre-continuation baseline; never restore known-bad161. Once new combined-row work exists, old169's strict validator cannot faithfully edit that new object without a compatibility repair. Preserve all saved combined fields/plain projections, project dates, every old/new asset URL, worksheet/pass schema and student records through recovery; never delete data to make an older UI run. A temporary older client is not a data migration strategy.

Coloring, Archive Class/export/purge and all other held proposals remain held. Retain every older handoff. GitHub contains documentation/reference only, with no app bundle, private captures/fixtures/PDF, credentials or student records. Capture actual active/latest main/art and fresh GitHub before the next change, use one publisher, and recheck immediately before upload/activation. Next handoff is **V33**.
