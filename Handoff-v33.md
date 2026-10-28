# Handoff V33 — Prompt 6 and reported-answer investigation

## Current verified release

Main **171 / 66f7e61c-0ca9-4c06-abb7-ae355acc0662**, deployment **cd75d12e-346c-4882-98e3-794e90d50234**, is active at **100%**. Activation: **2026-10-28T00:04:34.880096Z** (October 27, 2026, approximately 8:04 PM America/New_York / EDT). Worker: **7,699,428 bytes**, SHA256 **c36b1561724e6be3ca7978dd3e2d10495b87373ac35548f55bc9892abf391fed**. `_headers` remains 233 bytes, SHA256 6a3077bed172e1fd2632fb114f786e51cb3e640c692d3ad673952bf8ab6dc387.

Private art remains **4 / fe8ab164-4c8c-44e8-86a0-15782c44e7c2**, deployment 1ac5c1fe-2c99-4d8d-b1e7-00207067aa8c, with all 453 images. No art or R2 write/redeployment occurred. Seven bindings, complete opaque managed ASSETS, private YY_ART, runtime/settings, schedules and exposure are preserved. Official dry-run, inactive and active modules match the tested package exactly.

Both app domains passed **132 complete body/hash matches across 66 paths** and **16 protocol/auth checks** at **2026-10-28T00:05:34.603022+00:00**. Current-bank revisions, every old public path and native checking/scoring remain. No production student work, grade, report status, account, assignment setting or other record was written. Production investigation used SELECTs only; no migration or schema initialization was added. GitHub started at 94167d2f491345741a20bcb8f7efa5a5711bafd3. Next handoff: **V34**.

## Scope and interpretation

The owner supplied Prompt (6).pdf (18 pages) and explicitly requested its updates plus a cause for each report on pages 7–11. Pages 12–18 expressly define input restrictions while preserving evaluation: do not reinterpret the earlier report commentary as authority to change equivalence, case rules, grades or historical answers. All 18 pages were read, including the screenshot-only input-format examples on 13.

Read V33, V32/V31, [UI preferences](docs/UI-PREFERENCES.md) and the mandatory [release checklist](docs/RELEASE-CHECKLIST.md). All older handoffs and held Coloring/Archive/export/purge proposals remain.

## Pages1–2: narrow factoring and previews

The editable factoring diagram now has a300 px maximum width at desktop and phone widths, with compact factor/expression columns, inset layers, the combined final row, manual native keyboard and saved values intact. V32 narrowed static solutions but left the editable component's second grid column flexible across the full work container; that is why the earlier change did not address the owner's screenshot. This release measures the actual editable component, rather than treating the static solution as proof.

The new teacher factoring image is a screenshot of the actual native student component with fictional canonical work, narrow layers and no Add/Keyboard controls. The student editor retains those working controls. The PCL preview is also native UI. LosslessWebP conversions exactly match their source screenshot pixels; old preview assets remain unchanged at their immutable URLs.

## Pages3–4: daily challenges

New default counts are **Mild:4 three-star problems; Hot:2 four-star problems; Spicy:1 five-star problem**. The shared advanced settings expose three controls in one desktop row; phone widths stack controls while retaining single-line labels. Counts save in existing assignment settings and general teacher defaults. The native challenge setup/start and teacher preview use the source assignment's selected counts. Invalid counts are rejected on the server; each must be a whole number 1–100.

The default-settings panel combines posting and grade release under **Time to Post and to Release Grade**. Its **Daily Challenge** section starts collapsed, shows three vertical count rows when opened, and has a short description visible below the disclosure. Defaults save/reopen through existing teacher preferences. They apply to future builders; explicit existing assignment/class choices and already-started challenge snapshots remain. Existing eligibility, selection/reservation, expiration, reward receipts, points and grading are retained. No retrospective stored-class/default rewrite occurred.

## Page5: project dates and fonts

Both projects show due date, allow-late checkbox and late deadline in three rows. Date labels inherit the same font size as their grading controls; measured Playground labels are20 px alongside20 px grading labels. Checkboxes and text remain aligned. The standing preference now also requires consistent heading/label fonts within a container. Project date persistence, omitted-old-client retention and configured-cutoff enforcement remain from V32. The three earlier published projects' November 4,2026, 2 PM New York dates remain 19:00UTC; no maintenance DML was repeated.

## Page6: PCL scaffolding

New **Add Scaffolding** mode **pcl** covers18 types:158–161,180,182–194. Presets are generated from each type's authored Circle solution; all variants were inspected and have consistent counts within each type. Counts are:158=4;159=6;160=3;161=3;180=3;182=3;183=3;184=4;185=3;186=4;187=4;188=3;189=4;190=2;191=4;192=4;193=4;194=5. Type 190 has no Parentheses step.

Students get blank Parentheses work where required, a separate rich-math box for each circled signed term, and Like terms work. Existing native editors support actual Enter line breaks, compact spacing and Save/Exit/reopen/review. New eligible builder choices default checked; explicitfalse and frozen old snapshots remain. Complete work is required before consuming an attempt, but intermediate mathematics is not graded. Final grading remains native. Do not populate live student boxes with solution values.

This extends the bounded **xy-step-work/version 1** schema with modepcl and preset-derived field names. Preserve the12-layer/2048-character-field/48 KB bounds, optional factor combined fields, old responses, plain-text work projection and read-only reviews. Backend and client share the same model; never accept a client-provided original problem as authoritative.

## Pages7–11: evidence and reasons

Production reads were scoped to the named reports and matching saved response/frozen-question context. Private evidence stays outside GitHub. The table below intentionally omits names, account IDs, report IDs and raw records. Current credit or granted status is an observed state, not proof of every earlier check. Individual submitted values for each historical check are not retained.

| Page | Finding and cause |
| --- | --- |
|7|Stored answer is `14x_{+23y+12z-18}`. The entire tail is a subscript, which explains its lower position. It is not the sum `14x+23y+12z-18`; native checking rejects it. The input mechanism itself was not logged. New restrictions reject unsupported subscripts before they enter this type's answer field.|
|8|Stored final answer is `\frac{x}{4}-13.75`, which passes the recorded-revision checker and equals `0.25x-13.75`. The current saved response has credit. The report explicitly says the work was wrong; that work contains `4/x - 13.75`, the reciprocal of the needed coefficient. No current fraction/decimal equivalence defect was reproduced, and an earlier individual failed input cannot be recovered from the latest response.|
|9|Stored `4X+8Y` uses different, uppercase identifiers from required `4x+8y`; case-sensitive native evaluation rejects it. New category restrictions reject uppercase X/Y for this type without converting them. Authored uppercase variables elsewhere remain supported.|
|10|Stored answer is `12+$ a $`: legacy dollar-sign math delimiters and spaces surround a. There is no hidden exponent or subscript in that saved value. The current recorded-revision checker accepts it as `a+12`; the report's credit was already granted. The exact earlier rejection is not reproducible from retained per-question history, so do not claim that delimiters caused it or blame the student. New restricted input keeps unnecessary delimiter characters out.|
|11|Stored final answer `6x+10y` is correct. Operations contains only `+`, which the old generic work-presence test stripped before checking for letters/numbers. Both client and server therefore treated that field as empty and blocked checking before consuming an attempt. Operations now recognizes mathematical operation symbols as present; other field completion and final grading are unchanged.|

Do not automatically grant credit, change old responses or resolve reports based on this investigation. Those existing states were preserved. The repeated teacher-report request-failure banner is not itself a record of the student's answer-checking result.

## Pages 12–18: input-format restrictions

A reusable pure model derives a small type-level **input_format/version 1** configuration from sample answers across every variant. Both reference JSON files add this metadata to their104/136 types, with no other parsed value changed. The runtime derives equivalent metadata from the actual selected/frozen bank revision; it does not edit question identity, answers, solutions, revision pins or stored snapshots.

Categories include digits, decimal points, signs/operators, necessary variable letters, multiplication dots, exponents, fractions, absolute value, currency, repeating notation, grouping and roots. Rational answers support needed decimal/fraction forms. Digits are unrestricted 0–9 rather than limited to those in a sample. Type-level unions preserve valid formats used by other variants. Type 242 deliberately has uppercase letters in two authored answers; preserve those specific letters instead of globally rejecting every uppercase variable. Lowercase-only types still reject uppercase. Choice/day-time controls keep their native behavior; multipart numeric inputs receive the applicable type policy.

The existing keyboard component/layout is byte-identical, with keys visible/enabled. Physical input, original virtual-keyboard inserts and paste use the same category guard. A prohibited insertion leaves the existing answer unchanged and shows a small inline warning below it; valid new input clears the warning. No popup, silent uppercase conversion, automatic cleanup of saved historical answers, new correctness rule or server regrading is introduced. Work editors remain unrestricted by final-answer categories. Teacher preview shares native answer fields.

A rejected MathLive insertion may emit a later input event containing the restored value. The guard must keep the warning until a valid new value is entered, rather than immediately clearing it on that same-value event. Test this with the original virtual Fraction key as well as physical letters and pasted content.

## Delivery, data packaging and preservation

**21 delivered bodies** comprise20 new immutable paths under **/api/v33/static/20261027a/** and the existing revalidating bootstrap. Canonical app/React owner: **/api/v33/static/20261027a/native/index-studentv33.js**. Native main, outside-native Project2 integration, Gradebook/PDF back-imports and the new pure/UI helpers share that owner across 23 reachable modules. All prior V31/V32/earlier URLs and source objects remain. Stale bootstrap ETags receive the new entry.

The larger prepared source is10,586,996bytes, SHA256356232738cd13ed2e14c2f0f3b12d9d4f331d86a34706fea460c9787f874460b. The final package losslessly encodes the3,796,923-byte **xyBankBaseSource** data literal using deterministic LZW/varint plus base64 and a small synchronous UTF-8 decoder. Exact restored JSON SHA256 is **728afa24cf2bab520562238eba00fb680a805ab29c395f5d100900f955def513**. Only this data representation changes; no code is evaluated dynamically. The decoder does not alter any bank value. Keep the decoder with its initializer. All reference/checker revisions and public source-derived bodies pass after reconstruction.

This saves2,887,568source bytes and avoids the previous large-upload connection issue using the ordinary credential/proxy/TLS path. It is a data representation change, so do not claim an identical executable AST for the entire package. Exact data decoding, inverse intended backend edits, preserved historical public bodies, native final checks and full integrated browser behavior provide the preservation evidence. No claim of measured account-wide CPU improvement is made.

Unit 1 remains 104 types/520 questions. Unit 2 remains 136 types/1,325 questions, default c0dcd61e5cb3fd7f7021c69c05dfe48331f4962656c14ffab2aa5d413b0afb8a with all ten older revisions/checkers. Exact worksheets, grades/passes/history, classes/accounts/messages, YY ownership/prices/reactions, project dates and all 453 art images remain. No production student test, record mutation, migration, R2 write or art deployment occurred.

## Verification and limits

Final active-package checks pass:184 static/graph/protocol/preservation;1,973 input/PCL/backend assertions including1,590 canonical answer strings;73 retained project/scaffolding backend;26 Prompt 6native UI;44 Prompt 5native UI;29 urgent regressions;135 complete signed-in app checks. Normal teacher/student sign-in, populated Grades/pass/history, real Gradebook/PDF lazy views, exact worksheet generation/save/reopen, direct/reloaded Playground, scoped Student View and Boards navigation/scoring remain covered. The same affected browser suites are replayed with actual downloaded published bodies and fictional API/SQLite data.

Engine: Chromium 154.0.8037.57, including 390 px viewports. This is not actual Safari/WebKit or every production account. The known local source-sans-3.ttf 404 uses fallback; it is not a claimed production font defect. Existing fictional PDF-preview fixture limits from V32 remain. Anonymous HTTP success alone does not establish signed-in health.

Private capture/test/deployment/report evidence lives under `/workspace/xy-v33-prompt6-2026-10-27/`; do not publish it, the PDF, student records, credentials or app bundles. GitHub contains factual handoffs/instructions/reference configuration only.

## Recovery and next release

Prefer a forward repair. Main 170/art 4 is the healthy immediate baseline, but170 does not understand new pcl structured work; preserve and support that work rather than deleting it to run an older client. Keep V32 combined fields, project dates, plain projections, schemas, saved packs and all asset URLs. Never restore known-bad 161. Freshly capture actual active/latest main/art/GitHub and follow the release checklist before V34.
