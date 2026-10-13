# XY Learning Lab change log

This is the shared update log in the private `daryeaye/XY-Learning-Lab` repository. GitHub holds documentation and the original Unit 1 reference files; Cloudflare holds the application. This log is not the full editable source or an automatic deployment lock.

## October 11, 2026 — website update deployed; verified October 12

Status: deployed and verified. Baseline `775f9822-44c1-4a13-b1fe-79ef618c09bc` → release `0e8f843a-18cf-4163-a100-5bb841c15d3c`, serving 100% of traffic. Preparing chat: “Review Cloudflare setup.” Deployment: `b909d74a-373a-4378-8022-ed13c7ca6835`.

- The complete Grades header stays visible during page scrolling, with synchronized column widths and horizontal scrolling. Existing header actions continue to use the original controls; the floating row hides behind dialogs.
- YY announces newly earned outfit tiers with “Yay! We unlocked new looks together! Come check them out!” It observes the existing unlocks determined by teacher settings, rather than hard-coding 20/40/60/80. First-load history is quiet, multiple new tiers produce one message, and polling/reloads do not repeat seen tiers in the same browser. Seen IDs are stored per student locally; this is not cross-device notification synchronization. The message waits while YY Maker is open, and stale background responses cannot overwrite Maker state.
- All six student work tabs have rounded upper corners. The full selected content panel matches its existing light blue/red/purple/teal/green/gray tab palette, including empty states.
- This was a frontend-only update on the exact current Cloudflare build. Worker bytes, the newer embedded bank, bindings, asset routing and logging settings were preserved. All 1,558 original non-HTML public assets were retained byte-for-byte, with new hashed entrypoints/chunks; older chunks remain for cached clients. No production database migration, student-record edit or R2 content write was performed.
- Validation: 46 YY behavior groups and 15 hook scenarios; 18 UI fixture checks; local app checks for Grades alignment/actions/dialogs, six palettes and the exact YY announcement. Both live domains passed 26 combined GET/HEAD checks (16 hash comparisons) on October 12 at 09:02 EDT. Live browser checks confirmed all six panel colors and a complete 11-cell frozen Grades row at page scroll 522 px. YY threshold earning was tested with fictional local data; live student points were not altered.
- Cloudflare was rechecked immediately before publishing. A fresh read-only check on October 12 at 09:03 EDT confirmed the release remains active at 100% with settings/bindings preserved.

See `RELEASES.md` for hashes, checks and recovery. `docs/PENDING-UPDATES.md` now preserves the completed requirements. Future accounts must read this log, download the then-current Cloudflare build, preserve all other behavior and coordinate one publisher at a time; a log does not merge code or enforce a lock.

## October 11, 2026 — repository setup and current build captured

- Renamed `daryeaye/G7` to `daryeaye/XY-Learning-Lab` and confirmed it is private. The initial shared log and agent instructions are recorded in this documentation commit.
- Read-only acquisition confirmed active version `775f9822-44c1-4a13-b1fe-79ef618c09bc` at 100% of traffic; a second check matched it. Captured the Worker, safe configuration metadata and 1,559 public files (338,181,889 bytes) as the update baseline.
- The live embedded Unit 1 bank has 104 types / 520 problems. The preserved repository reference JSON has 96 types / 480 problems and must not overwrite the newer live bank.

No new application version was deployed by this setup/capture step. See `RELEASES.md` for identifiers and verification evidence.

## October 9, 2026 — observed other-account deployment

Cloudflare version: `775f9822-44c1-4a13-b1fe-79ef618c09bc`. Deployment history describes comic draft opacity validation, Saved button state, two-try peer answers, required feedback/IP grades, white selected tabs, teacher share links, and scuba/winter buddies with matching poses. These changes were reported by that deployment's message; they were not authored or fully verified by this chat. White selected-tab styling is superseded by the user's new matching-color request.

## October 8, 2026, afternoon — observed restoration release

Cloudflare version: `81196c29-157e-451f-b427-8a32926ce01e`. Its message describes restoring the morning compact editor, fuzzy feet shadows, cropping and future bank rules, enlarging six Big Item thumbnails, and retaining afternoon gallery/grading updates. This records a later restoration, not this chat's original release or proof that every following build retained its behavior.

## October 8, 2026, morning — this chat's deployed release

Cloudflare version: `12618fc6-4548-4676-9e6a-86451ebd04d6`, based on `561a20cf-7f0e-4a9a-b869-5fe4c75cfa61`.

- Compact comic library tabs, three-column background thumbnails and one-row Save Draft / Finish & Publish controls.
- Project title `Project#1: My Integer Story`, smaller copyright footer, and the reminder “Do not show the ANSWER of the word problem.” above the third panel only.
- Automatic small, soft oval character foot shadows; white outline thickness scales with character size.
- Non-destructive character cropping with eight black handles, Done/Reset controls, saved crop metadata and gallery/export support.
- Numeric grading accepts valid thousands-grouping commas while preserving sign and malformed-grouping checks.
- Units 2–8 remain unavailable until their own banks contain problems. Future lesson Comic-Con drafts select eligible word problems of at least 100 characters across stars 1–5; Unit 1/Project#1 behavior remains scoped separately.

At this release's baseline, preservation checks retained the then-current grading settings, introduction/gallery video and teacher override handlers. Local checks covered grading, future-bank validation, crop persistence/geometry, curriculum and shadows; live frontend hashes passed on both domains on October 8. No demo accounts/database, schema migration or D1/R2 content change was included. These are historical results, not a claim that every later build retained them. Each new update must preserve the exact current baseline outside its requested changes.

## October 12, 2026 at 12:37 EDT — Unit 2 JSON uploaded; not deployed

Status: uploaded to GitHub for the other account to integrate later. No Cloudflare application update or fresh live-version verification was performed.

- Added `grade7_unit2_algebraic_expressions.json` beside the preserved Unit 1 reference file. The upload is byte-identical to the final local review JSON; SHA-256: `1d746556d4c283ee019bef4b2c7e614e4849e893ddcc6fb9e1abeb8fa26648fb`.
- Unit 2 contains 125 types, IDs 105–229 without gaps, ten A–J variants per type, and 1,250 problems. IDs continue after the current Unit 1 bank's 104 types, not the older 96-type repository reference. Four to eight types are available for each lesson/star; no five-star types.
- Solutions use only necessary simplification stages, keep signed full terms, model word-problem quantities individually, and put any negative-one factoring division separately at the end. Both factoring methods and rotating example references are included.
- Local validation passed all 1,250 exact answers, 190 multiple-choice uniqueness checks, 1,680 solution equalities, example references, numbering, geometry domains, factoring divisions, and 12,820 KaTeX math runs.
- The JSON remains a review bank. Application schema integration and live algebraic expression/input checking are not implemented by this upload. Before online integration, the other account must follow the existing current-Cloudflare-baseline and preservation requirements, retain the newer Unit 1 bank, and test the new checking logic locally.
- Recovery: remove only the new Unit 2 file if necessary; the existing reference bank and application files were not replaced. No new PDF or handoff file was generated.

## October 12, 2026 — Unit 2 deployed and verified

Status: deployed and verified. Baseline `0e8f843a-18cf-4163-a100-5bb841c15d3c` → release `74f9e816-cf0f-4d24-b411-8fe8099444e7`, serving 100% of traffic. Deployment `2f7ae037-3d28-4ad0-9def-24fc2ed764cc`. Post-deployment version/configuration check: 2026-10-12T18:27:34.403Z; both-domain HTTP check: 2026-10-12T18:27:46.465Z.

- Activated the user-confirmed uploaded bank: **1,250 questions / 125 types**, IDs 105–229, ten A–J variants each, across seven lessons2-0 through2-6. Source upload commit `27c0f0a9a1b8395b5816996c1eb50b303b18f4aa`; source SHA-256 `1d746556d4c283ee019bef4b2c7e614e4849e893ddcc6fb9e1abeb8fa26648fb`. The JSON file and its review metadata remain unchanged in GitHub.
- Reused the current Unit 1 curriculum layout and grade→unit→lesson→type-review→assignment entry chain. Teacher previews, assignments, differentiated work, worksheets/keys and assessments resolve their selected unit. Lesson 0 is valid. Unit 2 type selections restore after deferred bank loading/reload; existing builder defaults and unsaved-draft policy remain in place. Teachers can explicitly add other Unit 2 lesson types without changing their fixed star ratings.
- Added separate exact Unit 2 numeric/algebraic/choice/named-geometry checking, original-input persistence, solution rendering and server-side bank/revision handling. Worked examples and retries reserve disjoint variants; exhausted pools show capacity feedback. Student payloads do not receive the full answer bank. No AI grading service is introduced.
- **Unit 1 remains104 types /520 questions.** Its bank, response cleaner, checker, selection, retries and assessment grading/resolver are byte-identical to the live baseline. The older repository Unit 1 reference remains96/480 and must never replace that live bank. Integer Story still uses Unit 1, including historical saved settings with misleading sourceUnit2 metadata.
- Preserved all1,566 original non-HTML assets byte-for-byte, existing frontend/CSS as the patch baseline, and DB/R2 bindings, variables, asset routing, cache headers and observability settings. New hashed entrypoints/chunks were added. No schema migration, production test assignment/submission/points/message change, R2 bank write or subscription change was performed.
- Validation:121,054 backend assertions against the actual Worker and fictional local SQLite;5,455 exact-grader checks;1,300 frontend/rendering/entry-chain checks. These are assertions, not distinct user scenarios or OpenAI API requests. Local browser confirmed Lesson 2-0 review→builder and reload with13 questions and preserved deselection. Both live domains passed30 combinedGET/HEAD checks, including16 asset-hash comparisons and teacher-only bank protections. Live teacher UI showed seven Unit 2 lessons,24 Lesson2-0 type cards, and preserved eight Unit 1 lessons/IntegerStory; live student dashboard loaded. No production assignment was published during verification.
- Limits: no Unit 2 five-star pool; no expansion of algebraic-answer Comic-Con. Existing numeric-word-problem eligibility and Unit 1 Project1 behavior remain. The user deferred the manual student answer-entry walkthrough to a later prompt.

Details and preservation workflow: [docs/UNIT2-HANDOFF.md](docs/UNIT2-HANDOFF.md) and [RELEASES.md](RELEASES.md). Before the other account edits, read the newest GitHub logs and capture the then-current Cloudflare version. A log does not merge code or prevent concurrent deployments.

## October 12, 2026 at 16:58 EDT — Unit 2 teacher review deployed and verified

Status: deployed and verified. Exact current baseline `74f9e816-cf0f-4d24-b411-8fe8099444e7` → result `0348716b-46e6-4592-a5d4-ca2cb1048e3b`, 100% traffic. Result deployment `f3f1c9de-bc57-463f-9e69-c6a23bde3dc1`. Baseline acquired 2026-10-12T20:33:56.790425Z; rechecked immediately before publishing at 2026-10-12T20:58:35.737035Z. Latest shared-log head was `a804393d983c5bf8a2b4f86e1139f9ae8b3917c6`; no intervening publisher was observed.

- Type 110 renders the powered target as mathematics (for example, x²). Unit 2 question wording omits “signed” before coefficient/constant while retaining negative answers. “Simplify completely” becomes “Simplify”; factoring wording is unchanged.
- Types 120 and 121 keep their three-star ratings and ten variants, now translating “more than the product” and “less than twice.” Type 126 keeps four stars and ten variants, now translating “less than the quotient,” with quotient → subtraction → final fraction expression on separate solution lines. These writing tasks accept equivalent expressions and do not invent simplification/PCL stages.
- Type 144 is unavailable for new selection. Other live IDs are unchanged; the intentional retired-ID gap avoids changing existing assignment identities. The current reference JSON has **124 types / 1,240 questions**, schema `2.3.1-review-stable-identities`, revision SHA-256 `929816201a727134cd3c6830eb2932df8c219d3eb8fbf622a69f43297a3d15cd`. All seven lessons still have four to seven types per star, stars 1–4.
- Both current and original Unit 2 sources are embedded. Ordinary assignments, existing question sets, examples, retries, assessments and Daily Challenges resolve their pinned revision; older Types 120/121/126 and retired Type 144 remain available to existing work. New selection uses the revised source. Unknown revisions fail clearly. All current answer checking, input preservation, reservation limits and scoring remain in use.
- The original Unit 1 bank/checker/cleaner remain byte-identical (104 types / 520 questions). All backend application code outside the scoped Unit 2 adapter/router and two question-set revision lines is preserved. The frontend has only a count-validation correction (source count instead of hardcoded 125), with new import aliases. Current CSS is unchanged; all 1,573 original non-HTML public files, including cache rules, are retained byte-for-byte. Final public directory: 1,580 files.
- Validation: **19,596 passing local assertions** against actual candidate/baseline functions, including every 1,240 current and 1,250 retained expected answer, wrong answers, old/new revision resolution, all lessons' selection/retries, assessment and Daily Challenge reservations, retired-type protection, expression translations and Unit 1 preservation. Official Wrangler dry run passed; uploaded Worker bytes exactly matched the tested candidate. Both live domains passed **24 bounded HTTP checks / 22 hash comparisons** at 2026-10-12T20:59:45.119954Z. Live in-app browser showed the seven-lesson entry, Type 110 math exponent, replacement questions, and Lesson 2-1's 17 Simplify cards without Type 144.
- Existing runtime/bindings/routing/cache/observability were verified unchanged; release message annotation changed as expected. Preview access was briefly enabled solely to discover retained previous-release asset filenames, then restored and verified disabled before upload. No production assignment/submission/points/message mutation, database migration, R2 content write or subscription change. No live student answer-entry walkthrough was performed; grading was verified locally.

Recovery and preservation details are appended to `RELEASES.md` and `docs/UNIT2-HANDOFF.md`. A blind rollback to the previous version would remove the current revision needed by newly created work; preserve both revisions when repairing.

## Unit 2 signs and distribution review — October 12, 2026, 19:23 EDT

Deployed and verified: version `b7b00f23-fbea-4aaa-bde6-02c3f642a2a5` at 100% traffic, deployment `e17dfa5e-f057-4b29-a4da-3b7e91771d6f`, from freshly acquired baseline `0348716b-46e6-4592-a5d4-ca2cb1048e3b`. New selections use **129 types / 1,290 questions**, IDs 105–234 with the existing retired Type 144 gap; each type has ten flat variants A–J. Source schema `2.3.2-signs-and-distribution-review`, SHA-256 `608a257142cba03e3204ce256b4b32ff91a720175544938e4f13573070b8959c`. Both previously deployed source revisions remain embedded unchanged for pinned assignments, question sets, examples, ordinary retries, assessments and Daily Challenges.

- Types 139 (3 stars), 140 (4 stars) and 142 (4 stars) now combine signs before circling each signed term and combining full like terms. The first variants are the teacher's exact expressions, including decimal coefficients in 142.
- Type 152 (2 stars) distributes over a constant minus a variable term with positive/negative outside factors. Type 154 (3 stars) distributes over a fractional variable coefficient and a fractional constant; its ten variants include fractional final answers as explicitly requested.
- Type 157 is now four stars; its questions and two methods are unchanged. Existing three-star assignments retain the prior revision.
- Types 158–162 previously belonged only to Lesson 2-2. They were removed from that default pool and preserved in Lesson 2-4 with unchanged questions, ratings and solutions. Default pools follow lesson_ids; the existing explicit Add More Types feature can still select other Unit 2 lessons intentionally.
- Added Types 230–234 to Lesson 2-2: identical grocery bags (3 stars), movie tickets/snacks, school supply boxes, recipe quantities and decimal-priced snack bundles (4 stars). No exponents and no like terms after distribution. Students write the model from the story; solutions list quantities, translate them, model one group/all groups and distribute, without unnecessary Circle/Like Terms stages. Recipe variants produce integer coefficients after distributing. All lesson/star pools remain between four and eight types.

Validation: 32,187 local assertions passed, covering all 1,290 current, 1,240 previous-review and 1,250 original-activation expected answers/wrong answers, exact pinned snapshots/examples, selections/retries, mixed assessments/Daily Challenges, changed star/lesson eligibility, content-preservation and Unit 1 preservation. 830 changed-question/solution math runs rendered strictly without errors; original expressions and displayed solution equalities were verified with exact rational polynomial checking. Live in-app teacher previews confirmed Lessons 2-1, 2-2 and 2-4; Type 157 shows four stars, new types appear, and moved types are absent from the Lesson 2-2 default cards. Both domains passed 24 bounded HTTP checks including 22 exact frontend/hash comparisons and unauthenticated bank 401 protection.

The complete current Worker was downloaded, then only an additive new source/integration and router-selection line were inserted. Removing that insertion reproduces the entire baseline Worker exactly. Unit 1 bank/checker/cleaner, all other backend code, frontend/CSS/public assets, drawing pad/comics/YY/grades/refresh/autosave/submission behavior and safe configuration remain unchanged. No production test assignment or student submission was made; the manual student answer-entry walkthrough remains deferred. No database migration, production data/media write, route/domain or subscription changes.

## October 12, 2026 — geometry, word solutions and preview update — 20:33 EDT

Status: deployed and verified. Baseline `b7b00f23-fbea-4aaa-bde6-02c3f642a2a5` → `bb8c766d-9773-455d-a99b-b988b936b677`, 100% traffic, deployment `52b7d77e-15d7-413d-a6e8-a5d85a4f122b`.

- Removed student-facing range assumptions in all new geometry selections and added 120 dimension-labeled rectangle/triangle variants for Types 163–174. A triangle-area diagram has a perpendicular height; four-star Types 175–178 have no diagram. Type 164 gives 5x and Type 173 gives 14x+4y.
- Removed Type 187 only from Lesson 2-1, retaining it in 2-4. Added three-star Type 235 with four signed variable terms, exactly two decimal coefficients and two integer coefficients. Previous signs/distribution edits and Types 230–234 remain.
- Simplified Type 205 to taxi outward and a flat bus fare home; clarified Type 202's additional red stickers; rebuilt Type 207 with a constant batch count and integer variable amounts per batch. Type 211 explicitly subtracts the entire second plan group and distributes −1. Type 212 now gives one donation for the entire sale and its seed answer is 9x−10, matching the six-row quantity routine. All 180 Lesson 2-5 variants follow question, one given quantity per row, then operations, without student-facing XNO/QNO labels.
- Retired Type 213 from new selection while retaining old pinned content. Type 185 now simply asks to simplify. Converted Types 226–228 to typed short answers; rebuilt Type 229 as average monthly net change, dividing each total term by the fixed number of months.
- Algebraic tasks in Lessons 2-0–2-5 require expanded terms with like terms combined. The checker accepts 14x+4y and 4y+14x, rejects 2(7x+2y) and 7x+7x+4y; Lesson 2-6 uses each task's required form.
- New Unit 2 Comic-Con drafts start with 20 unique questions, one per type: 195,196,197,230,231,232,233,234,167,168,169,170,171,172,173,174,202,205,207,211. All 31 eligible types remain in the existing picker. The teacher explicitly approved necessary Unit 2 algebraic validation/checking. Unit 1 numeric checking, tools, screens and grading weights are preserved; saved drafts remain intact.
- Added an underlined See Solution link to each shared teacher review card for Unit 1, Unit 2 and future banks. The modal shows the exact displayed variant, keeps the checkbox state and returns focus on closing.
- Completed Handoff Version 3 as Markdown and a visually reviewed four-page Word document, connecting the 24-item original test reference, seven annotated PDFs and successive teacher reviews.

Current source: 129 active types / 1,290 questions, schema `2.4.0-geometry-word-solutions`, revision `6f4b2094d8a59e0bd5615e1f8876e265fd38260f58181587ba94a0dca63e6f20`. Four revisions are embedded; older question/answer/star/lesson pins remain unchanged. Existing Unit 1 bank/checker and unrelated backend code were verified byte-for-byte. Frontend changes are scoped to preview links, diagram display and necessary Unit 2 preset/checking integration; existing asset aliases remain available.

Verification: 42,012 local assertions; 9,340 strict math renderings; all 1,290 current keys and 3,780 retained keys; revision-aware assignment/example/retry/assessment selection; full baseline reconstruction from inverse scoped patches; safe configuration comparisons. Both domains passed 278 HTTP checks with 276 exact asset comparisons. Local fictional browser data verified twenty unique preset rows and 31 picker types. Read-only live Unit 1/Unit 2 previews verified solutions and diagrams. No production test assignment, Comic-Con draft or student submission was created. Full real student autosave/submission/gallery walkthrough remains unperformed.

