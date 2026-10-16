# XY Learning Lab — shared update log

## Current planning, grades and notification update — October 16, 2026, 15:40 EDT

Current verified Cloudflare version `41501f19-e22a-4ed2-b7e3-748fbc101a1e`, deployment `2685a7f9-892d-4beb-b8e6-29660a8ce4f0`, 100%; verified October 16, 2026, 19:40 UTC (October 16, 2026, 15:40 EDT), from freshly captured V12 `534da593-47c7-49c0-9f36-4377a209b815`. Read [Handoff-v13.md](Handoff-v13.md) first. Next numbered handoff is V14.

Completed: Comic Maker starts with the shared student planning/highlighting screen and fixed Joey example; all four student YY tools share one row; YY action buttons share styling with an always-visible monthly-change note; teacher/student grade summaries retain the highest completed score during retries; notification tabs are white, omit counts and acknowledge each category after five visible seconds. Attempt history, manual overrides, release gates, all eight Unit 2 sources, Unit 1 and previous classroom updates remain preserved. No production student data was changed for testing or migration. See V13 for contracts, validation, hashes and finite limits.

## Current classroom update — October 16, 2026, 14:40 EDT

Current verified Cloudflare version `534da593-47c7-49c0-9f36-4377a209b815`, deployment `fd61247c-af8e-46a2-ab14-bd2b0793ca9d`, 100%; verified October 16, 2026, 18:40 UTC (October 16, 2026, 14:40 EDT), from fresh V11 `39cc714b-18c5-4189-95a0-2564878103d5`. Read [Handoff-v12.md](Handoff-v12.md) first. Next numbered handoff is V13.

Completed: temporary blank Comic Maker from teacher Student View; BC/AD examples in Project 1 defaults 14/25/29; centered multiplication dot; vertically centered units at three times normal size; Unit 2 surrounding-word tolerance; class-selective assignment deletion; published-link return-home state; and Lesson 2-3 geometry labels/emphasis. Maker work is memory-only and clears on refresh. Partial deletion preserves unchecked classes. All eight Unit 2 banks and Unit 1/reference JSONs remain unchanged. No production student data was changed for testing or migration. See V12 for data semantics, checks, hashes, finite capture and recovery.

## Current Comic-Con result update — October 15, 2026, 20:42 EDT

Read [Handoff-v11.md](Handoff-v11.md) first, then v10 and earlier records. Deployed and verified Cloudflare version `39cc714b-18c5-4189-95a0-2564878103d5`, deployment `3bd77c85-e877-413c-b5e3-688ff0371c48`, 100% traffic, based on the freshly captured active v10 `060bf911-d099-4687-96c7-b442cab35f9b`. GitHub main read before work was `47e5e5692ca28fcaa826d0232ac58e0469e5e8f0`; v10 was the highest handoff. Live verification completed October 15, 2026, 20:38 EDT.

Comic-Con/Project1 now shows the canonical correct answer above the confirmation in a light-green/dark-blue result card after success, and above supportive copy in a light-red card after both attempts are used. The first wrong try remains retryable with no answer disclosure. Completed answers reappear on reopening. Shared real-student and temporary teacher Student View use the same display; teacher preview remains SELECT-only/in-memory. Attempts, grading, keys, ownership/class/publication/release gates and existing writes remain unchanged.

Setup changes already autosave. Merely opening an untouched creator does not create a server assignment; the first change creates it after the existing 750 ms debounce. The redundant Save Setup Draft action is removed from new setup pages. Saved/Saving/Not synced, normal autosave/navigation recovery and published-pool Save Changes remain. An error-only Retry saving preserves an explicit retry without a normal manual-save button.

The complete Project Two folder was downloaded locally from the same GitHub commit: 38 original files, 28,987,869 bytes, including 20 PNGs and PDF/PPTX references. All originals remain unchanged. Actual Chrome loaded the local app; nine supplied math tests and a Fountain activity's perimeter/area inputs pass. A local Mac launcher/guide was added beside the originals. Use localhost rather than double-clicking HTML; Safari was not separately tested. No Project Two source or remote folder was edited or deployed.

All eight Unit 2 revisions, default `140b8ef301aec5a604e4552866a05177d967a25997e7c8de8b8d29a49a06708d` (136 types / 1,325 questions), Unit 1 and all v10 features are preserved. No production student data, assignments, points, grades, comics, messages, media or schema were changed for testing/migration. Archive Class/export/permanent purge remains deliberately deferred. See v11 for exact scope, checks, hashes and finite limits.


## Current release — October 15, 2026, 14:07 EDT

Read [Handoff-v10.md](Handoff-v10.md) first. Verified Cloudflare version `060bf911-d099-4687-96c7-b442cab35f9b`, deployment `1ba86ad2-8b1d-49af-b165-f344a1cf1119`, 100%, on the freshly captured v9 baseline. Completed: Comic-Con controls/name links, class assignment filtering, protected assessment-draft deletion, shared large math keyboards and icon functions, and score-aware completion/retry popups. Archive Class, its two-tab backup and permanent purge are explicitly deferred. Current Delete Class only hides a class; it does not erase all records. No production student data or schema was changed for testing. Unit 2 reference `140b8ef301aec5a604e4552866a05177d967a25997e7c8de8b8d29a49a06708d` and all eight pins/Unit 1 are unchanged. See v10 for guards, tests, finite limits and recovery.

## Current release — October 15, 2026, 12:10 EDT

Read [Handoff-v9.md](Handoff-v9.md) first. Verified Cloudflare `d35f8c41-9b30-4505-af5e-a8949d01634c`, deployment `07fa0115-03b0-44ab-806b-a7e69c9b398b`, at 100% traffic, based on the freshly captured v8 build. Completed the specified continuation: Types 231–234 wording, three notification tabs, Grades/Daily Challenge layout fixes, context-specific assignment headings, share-link text, report eyes/name flow, temporary teacher Student View and student Mailbox. The unspecified second addition remains unspecified.

Current Unit 2 reference is 136 types / 1,325 questions at `140b8ef301aec5a604e4552866a05177d967a25997e7c8de8b8d29a49a06708d`; all seven previous pins remain available. The smaller Worker reconstructs historical banks losslessly. Preview state stays in its tab and uses no production student mutation routes. Tests: 20,769 backend assertions, seven browser groups plus the final module-graph/route check, and 1,725 live HTTP/route checks. See v9 for exact evidence, finite coverage/capture limits and recovery. No production student data was changed for testing. GitHub continues to hold reference data and documentation only.

## Current release — October 14, 2026, 18:58 EDT

Read [Handoff-v8.md](Handoff-v8.md) first. Verified Cloudflare version `da91e18e-99a4-4cc5-9ec7-3f7b35513fe4`, deployment `0d4f4be5-d8d4-43ef-a40e-f7441b1f3c9f`, 100% traffic, based on a fresh capture of `a8b66166-1632-4a58-bf0c-f61c1f19a66f`.

Completed the sixteen browser comments: pale yellow MathLive selection and consistent math answer entry/legacy fragment handling; three-level grades with pooled star counts and timestamps; opaque left-edge Student scrolling; project titles opening Progress & Grades; top-row Podium action and viewer-only Large/Compact comics; threshold reward notifications with a shared per-class Yes/No preference; and removal of unnecessary positive-term parentheses in thirty variants of Types 139, 140 and 235. Missing variables are never reconstructed and saved student answers/grades are not rewritten.

Current reference JSON: 136 types / 1,325 questions, schema `2.5.2-positive-term-parentheses`, source SHA-256 `728afa24cf2bab520562238eba00fb680a805ab29c395f5d100900f955def513`. All six historical revisions remain available for existing pins. Reward receipts use a new additive D1 table/index initialized through the existing binding; no historical notification burst or production test point changes occur. Full preservation, atomicity, tests and limits are recorded in v8.

Standing user authorization: always read the highest GitHub handoff before XY edits and update it and the shared logs after each verified deployment without another permission request. This repository contains documentation/reference content rather than full app source.

## Current like-term wording update — October 13, 2026, 20:45 EDT

Deployed and verified: Cloudflare version `a8b66166-1632-4a58-bf0c-f61c1f19a66f`, deployment `45f9a756-523a-4f53-a447-2f4b909686e0`, 100% traffic. Exact freshly captured baseline `19760650-9d06-40c4-b402-b0d6c595adc9`; GitHub head read before work was `5719a121af746e03c7ac3fc71b063d78aebb1ac8`. Read [Handoff-v7.md](Handoff-v7.md) first, then Handoff-v6 and the earlier classroom-method handoffs.

Types 115 and 122 now ask students to identify the like terms, then count their groups. The instruction, unchanged expression and count question occupy separate rows. All twenty variants have solutions listing complete signed terms by matching variables and powers, including single-term groups and a constant group. Type 115 answers remain 2; Type 122 answers remain 4. Their numeric answer fields, work requirements, expressions, stars, lessons, identities and example rotation are unchanged.

The current reference JSON is 136 types / 1,325 questions, schema `2.5.1-like-term-group-wording`, SHA-256 `0ddc29240f843443b1fb5717dc36d4c3f00594948b916f2292e2ae900f882720`. All 134 other type objects, including every five-star question, are unchanged. The five preceding source revisions remain embedded and routed by their recorded pins; existing assignments, examples, assessments and retries retain their original content. The entire preceding Worker is recovered by removing the additive source/integration and restoring its router declaration. Every checker and all other backend code are unchanged.

Frontend, CSS, all 1,721 public files, safe settings/bindings and today's YY/Daily Challenge/comic/solution-row updates are unchanged. Checks passed: 1,554 actual integration assertions, 100 strict math renderings, both live question/solution previews, and 16 both-domain HTTP checks / 14 exact asset hash comparisons. No production assignments, student work, points, messages, comic content or database records were changed. These are local integration tests and read-only live previews, not a real student submission walkthrough.


## Current release — October 13, 2026, verified 17:16 EDT

**Read [Handoff-v6.md](Handoff-v6.md) first, then Handoff-v5 and the newest logs.** Active Cloudflare version `19760650-9d06-40c4-b402-b0d6c595adc9`, deployment `85e593d9-6f64-4399-8921-15f6e6a034f2`, 100% traffic. Exact captured baseline: `59682d37-6eba-46a7-bde3-c30707b3fa47`.

This update adjusts Unit 2 solution rows/inline spacing, named YY unlock speech with matching outfit tabs, point-loss audio, Daily Challenge placement/starry styling, successful comic publication navigation and the golf preset wording. The backend Worker remains byte-identical: SHA-256 `763aab47b5391e3634df90d7a937403e6fb481e16d606bffbddbf6393c649227`. Unit 2 remains **136 types / 1,325 questions**, source pin `f629143e2442eb82b5c31cec2846401d391f6f8257d6edd6e121afefd56610c7`; all five banks, five-star additions and morning repairs are unchanged.

The user's explicitly requested existing xye4 Project 1 golf prompt was corrected in two active assignments serving classes 701, 703 and 707. Answer 9, effective revisions, planning ranges, scenes, snapshots, media, timestamps, grades and feedback were preserved. Only the prompt/pool text and metadata materializing the existing revision value changed. No production test records or point changes were created. Both live domains passed 42 HTTP checks/40 exact hash comparisons; read-only live solution preview and fictional local feature tests passed.

## Latest final release — October 13, 2026, 06:54 EDT

**Current version: `59682d37-6eba-46a7-bde3-c30707b3fa47`, deployment `3fbcffaf-f4d0-4ecc-ab7f-22f62bc633d1`, 100% traffic.** This final frontend serialization release supersedes interim `97e8cfff-da84-4e79-af20-2c33d9a3e321` and initial five-star `9cc3a6c6-23f1-4d36-8f9b-8ca0a3babbf6`, both retained below as history. Unit 2 remains **136 active types / 1,325 questions**, seven new five-star types 236–242 with five approved variants each; source pin `f629143e2442eb82b5c31cec2846401d391f6f8257d6edd6e121afefd56610c7` is unchanged and already published in [GitHub commit 9a22800](https://github.com/daryeaye/XY-Learning-Lab/commit/9a22800ed0c40217e69e53b3e99cfe9f348800b7).

Read [Handoff-v5.md](Handoff-v5.md) FIRST, then the latest release/change logs. Handoff-v4 and all historical records remain preserved. All old question objects and server answer-checking policies remain unchanged. The necessary shared started-assignment reopening declaration fix from the interim release remains installed.

A correct Fraction-function answer, `$ \frac{9}{20} $x+1`, was displayed properly but rejected because the existing Unit 2 parser accepts continuous LaTeX rather than internal display delimiters. The frontend-only repair normalizes recognized balanced, unescaped function/exponent math spans in Unit 2 answer-field callbacks to continuous mathematical input. It changes only one helper and the two normal-assignment/assessment callbacks; work, Unit 1, custom answers, shared MathLive editor/keyboard, review renderers, CSS, all bank pins and every server grader remain unchanged. Bare currency dollars, unbalanced spans and variable-denominator grouping are preserved; wrong reciprocals and powers remain wrong. Three inverse guarded edits recover the prior reviewed frontend exactly. All 1,491 focused serializer/render/reconciliation checks passed.

Final independent local save/check QA passed all **136 types / 1,325 variants / 6,421 answer-form cases**, zero failures, using the unchanged downloaded Worker and the actual frontend normalizer. Sixteen independently specified real mixed-markup cases extend the earlier 6,405 formal-input cases, which had missed the browser's raw MathLive serialization. Answers are independently derived from question/model data without importing the app checker or reading its keys. This finite suite cannot prove every possible spelling or the semantic correctness of every authored word-problem model.

Actual local browser testing entered answers with work `xy` across 20 seeded uniformly selected distinct Unit 2 types. Nineteen passed initially; the one real failure was Type 206's correct Fraction-function input serialized as internal mixed `$...$` markup. That frontend serialization bug was repaired and retested. A separate four-question fixture verified wrong variable denominators, partial factoring and a missing square were rejected, while corrected fractions and reordered negative-GCF factoring passed. Two wrong-question/cached-answer diagnostic entries and one mistakenly entered exponent were correctly rejected and are excluded from acceptance claims. A fresh seven-question fixture then accepted all seven answers and was submitted: named geometry fields, numeric and variable-numerator fractions, complete GCF, Type 236's denominator count, Type 239 with Functions/Exponent, and Type 238 with the real virtual-keyboard square button. Functions/Fraction, Exponent and Square plus virtual Keyboard/Fraction, a², main digits/operators and abc letters were actually clicked; rendered fractions/powers stayed intact during editing and in review. These checks do not mean every fresh question was tested wrong then right, or every possible answer spelling was tested. All records/accounts were fictional and local; production test records were not created.

Cloudflare active/latest verification at `2026-10-13T10:54:33.072Z` (October 13, 2026, 06:54 EDT) confirmed `59682d37-6eba-46a7-bde3-c30707b3fa47`, deployment `3fbcffaf-f4d0-4ecc-ab7f-22f62bc633d1`, 100% traffic. Both teacher and student domains passed 30 GET/HEAD checks with 16 exact hash comparisons and zero errors at `2026-10-13T10:55:34.379Z`. Bindings, asset routing and observability remained preserved. Worker SHA-256 `763aab47b5391e3634df90d7a937403e6fb481e16d606bffbddbf6393c649227` is unchanged from the assignment-reopening repair; upload startup was 111 ms, an upload/runtime measurement rather than a usage bill.

Final complete downloaded-copy evidence: The final active version was freshly downloaded: 1,712 public HTTP files, 353,315,583 bytes, zero download failures; copying the unchanged _headers yields 1,713 local public files. Independent per-file SHA-256 comparisons matched all 1,712 downloaded files to the tested staged bytes at the same URLs. The downloaded Worker SHA-256 763aab47b5391e3634df90d7a937403e6fb481e16d606bffbddbf6393c649227 matches the deployed/tested Worker exactly. The local server now uses the actual post-deployment public directory rather than the staged build. Its student dashboard shows the fresh seven-question fixture saved as 7/7 correct, 100/100; local screenshot: outputs/Unit2-keyboard-test-100.png. Complete current copy: work/five-star-2026-10-12/post-deploy/worker-original.mjs and post-deploy/public/. All test records remain fictional and local.

## Assignment-reopening repair — October 13, 2026, 06:24 EDT (interim history)

**Interim version: `97e8cfff-da84-4e79-af20-2c33d9a3e321`, deployment `ee4d12d2-6b17-4d1b-8909-234786377a25`, 100% traffic.** This supersedes the initial five-star deployment `9cc3a6c6-23f1-4d36-8f9b-8ca0a3babbf6`, retained below as interim history. Unit 2 remains **136 active types / 1,325 questions**, seven approved five-star types 236–242 with five variants each. Source pin `f629143e2442eb82b5c31cec2846401d391f6f8257d6edd6e121afefd56610c7` is unchanged and is published in [GitHub commit 9a22800](https://github.com/daryeaye/XY-Learning-Lab/commit/9a22800ed0c40217e69e53b3e99cfe9f348800b7). Read [Handoff-v5.md](Handoff-v5.md) FIRST, then the latest changelog and release ledger; Handoff-v4 remains unchanged.

The actual local browser walkthrough exposed a pre-existing server assignment-loading error: the saved-set branch of `/api/assignment` assigned `selectedBank` without declaring it. Strict-module execution returned HTTP 400 when reopening an already-started assignment. The forward repair adds only the missing `const ` declaration (six bytes) at that location. It restores started-assignment reopening for Unit 1, current Unit 2 and historical pinned Unit 2; it does not change question content, answer checking, scoring, attempt state, revision pins or student layout. Removing those six bytes recovers the entire initial five-star Worker SHA-256 exactly.

All 28 focused regression checks passed: fresh assignment metadata remains HTTP 200; previously failing started metadata changes from HTTP 400 to 200 for Unit 1, current Unit 2 and a historical Unit 2 pin including retired Type 144. Attempt routes remain HTTP 200, with existing snapshots, attempts and bank pins preserved. Cloudflare active/latest verification at `2026-10-13T10:24:57.307Z` (October 13, 2026, 06:24 EDT) confirmed `97e8cfff-da84-4e79-af20-2c33d9a3e321`, deployment `ee4d12d2-6b17-4d1b-8909-234786377a25`, 100% traffic, preserved bindings/routing/observability. Cloudflare reported startup 94 ms for this upload; this is an upload/runtime measurement, not a usage bill.

Subsequent real browser testing identified the mixed-function serialization issue; the final 06:54 EDT release below records its repair and complete UI results.

All prior source pins, old question objects, Unit 1 answer checkers, current frontend/CSS/assets and earlier features remain preserved. The shared assignment-loading declaration fix is an explicit necessary route change, including Unit 1 started-assignment reopening; do not describe the entire shared route as byte-identical to the earlier release.

## Initial five-star deployment — October 12, 2026, 22:46 EDT (interim history)

**This initial five-star record is historical; the October 13 current-version record above supersedes it.** Approved five-star Unit 2 types are deployed as Cloudflare version `9cc3a6c6-23f1-4d36-8f9b-8ca0a3babbf6`, deployment `5d641728-aa80-4eda-a932-ccbc428e0828`, 100% traffic. Baseline: `bb8c766d-9773-455d-a99b-b988b936b677`. Unit 2 now contains **136 active types / 1,325 questions**, IDs 105–242 with retired 144 and 213; new IDs 236–242 add one five-star type per lesson with five approved variants A–E. Source revision: `f629143e2442eb82b5c31cec2846401d391f6f8257d6edd6e121afefd56610c7`, schema `2.5.0-approved-five-star`.

**Read [Handoff-v5.md](Handoff-v5.md) FIRST before the next update**, then the latest CHANGELOG.md and RELEASES.md. [Handoff-v4.md](Handoff-v4.md) remains unchanged and documents the preceding classroom/presentation decisions. All 129 previous active types, Unit 1 checking, the existing layout, earlier features and all four prior bank pins remain preserved; the new pin is added, not substituted into saved records. GitHub remains reference data plus logs; Cloudflare remains the application deployment source.

Post-deployment download verification passed: the downloaded Worker matches the uploaded SHA-256 exactly; all 1,706 public HTTP files (350,422,599 bytes) downloaded and matched with zero failures. An independent local sweep against this downloaded Worker tested all 136 active types, all 1,325 variants and 6,405 answer-form cases, with zero failed cases, in 21.38 seconds. These are local fictional-data tests of actual save/check endpoints, not production student submissions. The browser walkthrough subsequently exposed an existing started-assignment loading error; the October 13 forward-repair entry below records its correction and final browser evidence.

Live verification passed on both teacher and student domains: 30 combined GET/HEAD checks, 16 exact hash comparisons, zero errors. A read-only Cloudflare check at 2026-10-13T02:46:33.408Z (October 12, 2026, 22:46 EDT) confirmed active/latest version 9cc3a6c6-23f1-4d36-8f9b-8ca0a3babbf6 at 100% traffic, deployment 5d641728-aa80-4eda-a932-ccbc428e0828, with bindings, asset routing and observability preserved.

## Latest release — October 12, 2026, 20:33 EDT

**This entry supersedes older current-version and bank statements; preserve their historical records.** Deployed and verified Cloudflare version `bb8c766d-9773-455d-a99b-b988b936b677`, deployment `52b7d77e-15d7-413d-a6e8-a5d85a4f122b`, 100% traffic. Exact live baseline was `b7b00f23-fbea-4aaa-bde6-02c3f642a2a5`. Current Unit 2 reference has 129 types / 1,290 questions, revision `6f4b2094d8a59e0bd5615e1f8876e265fd38260f58181587ba94a0dca63e6f20`, schema `2.4.0-geometry-word-solutions`, IDs 105–235 with retired 144 and 213. All three older banks remain embedded for saved assignments.

Read [Handoff Version 3](docs/UNIT2-HANDOFF-v3.md) for the connection among the original test collection, seven annotated lesson PDFs and latest reviews. The latest sixteen comments, twenty-question Unit 2 Comic-Con preset, teacher-approved algebraic Comic-Con checking and shared underlined See Solution links are implemented. Runtime, bindings, secrets, asset configuration and unrelated features were preserved. See CHANGELOG.md and RELEASES.md for checks and recovery.

This private repository holds the Unit 1 and Unit 2 curriculum reference files and the shared update history for XY Learning Lab.

**Cloudflare remains the live deployment location. This repository is a log, not the application's complete editable source project.** The original `grade7_unit1_rational_numbers.json` and `scoreboard.png` are preserved. The reference JSON has 96 problem types / 480 problems; the live October 11 Worker embeds a newer bank with 104 types / 520 problems. Do not replace the live bank with the older reference file.

## Latest recorded release

Unit 2 signs/distribution review deployed October 12, 2026, 19:23 EDT: Cloudflare version `b7b00f23-fbea-4aaa-bde6-02c3f642a2a5` at 100% traffic. New selections use **129 types / 1,290 questions** with ten variants each. Types 139/140/142/152/154 were revised, Type 157 moved to four stars, Types 158–162 moved to Lesson 2-4, and new word-problem Types 230–234 were added to Lesson 2-2. Both previous bank revisions remain available for existing assignments. Unit 1 and all current app features/configuration are preserved. Details: [CHANGELOG.md](CHANGELOG.md), [RELEASES.md](RELEASES.md), and [Unit 2 handoff](docs/UNIT2-HANDOFF.md). Query Cloudflare again before future work; this recorded version is not a substitute for a fresh check.

## Before either Codex account updates the app

1. Read `CHANGELOG.md`, `RELEASES.md` and `docs/PENDING-UPDATES.md`.
2. Query the active Cloudflare version and download that exact current Worker, frontend and assets. Preserve safe configuration metadata and record the baseline version and content hashes locally.
3. Make the requested changes on that latest build. Preserve all other layout, behavior, bindings, routes, settings, data and assets. If using a separate editable source folder, first merge the current deployed changes into it and verify them; do not deploy an older folder because it has newer changes of its own.
4. Test both the requested changes and previously recorded features. Immediately before deployment, query the active version again. Stop and reconcile if it has changed.
5. Publish one update at a time. Record the resulting Cloudflare version, baseline, changes, checks and recovery information here. Hand this updated log to the other account before its next update.

The version check prevents an ordinary stale-baseline update only when every publisher follows it. A shared deployment queue is needed if both accounts publish concurrently. The log itself does not merge code or enforce a lock.

Cloudflare backups may be compiled builds. Downloading one does not reconstruct the original React project automatically. This workflow intentionally keeps the application out of GitHub; preserve the actual tested build separately in Cloudflare and local backups.

No passwords, tokens, student records, database exports or demo accounts belong in this repository.



