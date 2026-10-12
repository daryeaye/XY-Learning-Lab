# XY Learning Lab — Unit 2 Release Handoff

Verified October 12,2026. **Deployed at 100% traffic and verified on both live domains.** Read the newest GitHub log and recheck the actual current Cloudflare version before any later update.

## Release identity

| Item | Identity |
| --- | --- |
| Teacher site | https://xylearninglab.t-pbl.com/ |
| Student site | https://student.xylearninglab.t-pbl.com/ |
| Private shared repository | https://github.com/daryeaye/XY-Learning-Lab |
| Fresh baseline version | `0e8f843a-18cf-4163-a100-5bb841c15d3c` |
| Baseline traffic | 100% immediately before publication |
| Result traffic | 100% |
| Baseline deployment | `b909d74a-373a-4378-8022-ed13c7ca6835` |
| Result version | `74f9e816-cf0f-4d24-b411-8fe8099444e7` |
| Result deployment | `2f7ae037-3d28-4ad0-9def-24fc2ed764cc` |
| Live verification time | `2026-10-12T18:27:46.465Z` |

The source content, built candidate, uploaded candidate, deployed version and live-verified result are different records. Do not claim a candidate is live merely because it was built or uploaded. Final traffic percentages belong in the completed release log.

## Read the shared record before every update

GitHub holds the shared update log and explicitly authorized curriculum reference files. It is **not** the complete editable app project. Keep deploying on Cloudflare; do not overwrite the live app from an unrelated old local folder.

1. Authenticate to the private repository and read the newest `README.md`, `AGENTS.md`, `CHANGELOG.md`, `RELEASES.md`, `docs/PENDING-UPDATES.md`, and any newer handoff.
2. Query the exact then-current Cloudflare version and traffic split. Download its Worker, frontend, assets and safe configuration; record time, version and hashes. A copied immutable local release is acceptable only after fresh live identity checks establish it is the same current build.
3. Build on that exact baseline. Preserve all unrequested features and layout from both Codex accounts. A compiled backup does not recreate original React source automatically.
4. Coordinate **one publisher at a time**. Immediately before publication, recheck the active version; stop and reconcile if it differs from the recorded baseline.
5. After publication and verification, append factual baseline/result identities, scope, checks, limitations and recovery details to the shared log.

A log and version check do not provide an atomic deployment lock or automatically merge competing changes. Both accounts must follow this process. Do not commit credentials, OAuth files, tokens, student records, database exports, fictional databases or dependencies.

## Preserved Unit 1 and existing features

The current live Unit 1 bank contains **104 types / 520 questions**, IDs `001`–`104`. The repository's `grade7_unit1_rational_numbers.json` is an older **96-type / 480-question** reference. Leave it intact, and never use it to replace the newer embedded Unit 1 bank.

This release preserves the original Unit 1 bank, response cleaner, answer checker, selection, retry helper, assessment bank grader and resolver byte-for-byte. Unit 1 dispatch delegates to these existing functions. Supporting Unit 2 logic is separate; it does not change Unit 1 answer keys, comparison policy or attempt scoring.

Preserve the actual then-current comic editor, cropping, fuzzy foot shadows, dynamic character outline, third-panel-only ANSWER warning, gallery, feedback, grades, sharing, drawing/work pad, keyboard, autosave, submission, assignments and YY settings.

Also preserve the entire frozen Grades header with horizontal alignment, YY's newly unlocked outfit message and deduplication, and the six rounded student tabs with matching panel colors. Keep current refresh behavior; do not reinstate an abandoned refresh policy from an older conversation.

## Exact Unit 2 content source

- File: `grade7_unit2_algebraic_expressions.json`.
- Pinned source: https://github.com/daryeaye/XY-Learning-Lab/blob/27c0f0a9a1b8395b5816996c1eb50b303b18f4aa/grade7_unit2_algebraic_expressions.json
- Upload commit: `27c0f0a9a1b8395b5816996c1eb50b303b18f4aa`.
- Git blob SHA-1: `de28a6d23c0180a8443aebfa7332bc1fa64d6e5e`.
- SHA-256: `1d746556d4c283ee019bef4b2c7e614e4849e893ddcc6fb9e1abeb8fa26648fb`.
- Size: 10,223,839 bytes; schema `2.3.0-review-adaptive-contiguous`.
- **125 types / 1,250 questions**, IDs `105`–`229`, ten flat variants A–J per type. The teacher confirmed using this uploaded count after the original spoken 1,520 expectation was resolved.
- Answers: 230 numeric, 820 algebraic, 190 choice and 10 named multipart questions.

Source review-only status fields were not rewritten to pretend that wording/rating review is complete. Application activation uses a separate explicit unit registry and adapter. New content revisions must be versioned and revalidated.

## Lesson entry chain

| Lesson | Title |
| --- | --- |
| 2-0 | Understanding Algebraic Expressions |
| 2-1 | Combining Like Terms |
| 2-2 | Using the Distributive Property |
| 2-3 | Writing and Simplifying Geometric Expressions |
| 2-4 | Simplifying and Rewriting Expressions |
| 2-5 | Writing and Simplifying Everyday Expressions |
| 2-6 | Factoring Algebraic Expressions |

Unit 2 reuses the Unit 1 curriculum layout and lesson → type review → assignment-builder flow. Lookups are scoped by **grade 7, unit 2 and lesson 0–6**. Zero is a valid lesson ID. Type eligibility uses cross-listed `lesson_ids`, without changing a type's fixed difficulty or identity.

Teacher previews, ordinary/differentiated assignments, worksheets/keys, assessment selection, student loading, submission, review and retries use the selected unit. Legacy assignments without unit metadata still resolve to Unit 1. Units 3–8 are not given new banks by this release.

Explicit teacher AddMoreTypes selections can include other lessons within Unit 2 while retaining fixed star ratings; default pools follow lesson_ids. Reject Unit 1/unknown/wrong-star entries.

There are **no Unit 2 five-star types**. Five-star selections receive unavailable-pool feedback; do not invent ratings or borrow Unit 1 questions into a Unit 2 assignment. Existing Unit 1 five-star behavior remains intact.

## Unit-specific answer and input contracts

- Unit 2's exact checker compares the complete numeric value or complete polynomial using rational coefficients, variable identities and powers. It does not use substring matches, floating-point tolerance, random substitutions, AI grading, `eval`, or unsafe execution.
- `simplified_expression` requires an expanded sum with like terms combined. An equivalent unfinished expression gets a helpful format message and `correct:false`. `equivalent_expression` accepts a valid equivalent grouped model. Existing attempt/scoring policies still apply; no new penalty policy is introduced.
- Plain `1/4x` means `(1/4)*x`. Fraction-key `\frac{1}{4}x` is accepted. Explicit `1/(4*x)` or `\frac{1}{4x}` remains a variable denominator and is not reinterpreted as the coefficient.
- Numeric fractions, negative mixed numbers, exact repeating decimals and bounded supported powers retain their structure. `-1 8/27` is not collapsed to `-18/27`; normalized checking never replaces original submitted input.
- Single-letter variables are case-sensitive. Permitted question variables include letters that cancel from the final answer. A configured unit suffix cannot consume a matching algebra variable such as m or m².
- Multiple choice compares the stable option ID against the server-owned key, including factoring questions. Dispatch by answer kind before required-format metadata.
- Type 163 geometry preserves named `perimeter` and `area` fields and one shared work area. Both values are checked independently; the integration retains existing scoring/partial-credit policy.
- Bounds limit length, nesting, tokens, exponents, integer growth, terms and computation. Unsupported or incomplete input produces controlled feedback.

Original input is preserved through scoped response cleaning, persistence and review. Keep server-owned bank revision/type/variant identity authoritative; never trust an expected answer supplied by the student.

## Solutions, examples and retries

The Unit 2 renderer supports signed `circled_terms`, L-divider `division_rows`, optional word-problem modeling, multiple methods and stored line ordering. Keep −1 factoring division in its separate final block. Do not invent a PCL stage when the supplied method does not need it.

Worked examples use the stored next-variant reference A→B→…→J→A. Selection reserves examples **before** assigning graded questions. A ten-variant cycle supplies at most five disjoint graded/example pairs per type in one selection. Cross-listed lesson rows share the same reservation identity.

Ordinary retries retain per-type used/reserved history. Assessment new-number attempts select in a batch against all prior question/example identities. Exhausted pools receive a controlled capacity message; Unit 2 does not silently recycle variants. Existing Unit 1 retry behavior remains unchanged.

Daily Challenge uses safe disjoint Unit 2 pairs across its source assignment pool. Unit 2 questions are not recycled to fill a short pool. The Unit 1-only selection path remains exactly the existing path; mixed challenges may repeat only legacy Unit 1 entries when needed.

Unit 2 attempts pin the source revision. A later bank mismatch stops with a clear error instead of silently grading against changed answers. Future updates must retain any bank revisions needed by existing attempts.

Keep full answers, keys, verification and unreleased solutions server-side. The full bank endpoint remains teacher-authorized. Student payloads expose authorized questions and examples under existing access/release rules; the public frontend contains no full Unit 2 answer bank.

## Boundaries of this update

The existing Comic-Con word-problem eligibility and **numeric-answer** filter remain in force. Algebraic-answer Comic-Con expansion is not included. Unit 1's Project #1 remains a Unit 1 activity, including older saved settings that misleadingly specify sourceUnit 2.

The teacher deferred a manual student assignment/answer-checking walkthrough to the next prompt. The automated local implementation checks below are separate and do not claim that walkthrough occurred.

There are no database migrations, production test assignments, real student submission edits, points/messages, subscription changes, or intentional binding/route/domain/cache/observability changes in this release. Fictional fixtures and test files remain outside public assets. The post-deploy configuration check confirmed the existing bindings, routing and observability.

## Release identity and verification

| Artifact/check | Identity or result |
| --- | --- |
| Worker SHA-256 | `568c8d8020087d6eed659719245e385e45ba10ca2ec26716b5335260fc1e73af` |
| Frontend implementation SHA-256 before lazy-import aliases | `da675f742c189e5ad89bc1f456cf0fb540e18f7b5a3d89d2f2274c4dae7a4714` |
| Deployed main path | `/assets/index-u2da675f742c18.js` |
| Main bytes SHA-256 after lazy-import aliases | `200fb90eee7a3eb7b564dcafa6e0f63637b9c78fe657217d97328f992b0ef0d9` |
| CSS path / SHA-256 | `/assets/index-u2eec0221deabf.css` / `eec0221deabfed53bbecd5646f0909a87af7dc28ac5960814d7244a56ab15097` |
| HTML SHA-256 | `ed7dd02bc69d15d6c05667d1366017840325411ed7829f41d08c9a975f4282ec` |
| Backend/real local endpoint suite | 121,054 passing checks; fictional in-memory SQLite only |
| Standalone exact grading suite | 5,455 passing checks; all 1,250 displayed expected answers and wrong mutations |
| Frontend/rendering/entry-chain suite | 1,300 passing checks; all 1,250 solutions plus reload/selection regressions |
| Original assets | 1,566 non-HTML files retained byte-for-byte; 1,574 final public files |

The deployed main hash differs from the pre-alias frontend hash because lazy imports point to the new hashed chunks. Compare the correct bytes at the correct stage. Do not use the filename stem as proof of its final file hash.

Local evidence is in `work/unit2-2026-10-12/`: `release.json`, `bank-audit.json`, backend and grading test reports, frontend tests, preservation records, and independent review. Final active/configuration audit: 2026-10-12T18:27:34.403Z. Live HTTP verification: 2026-10-12T18:27:46.465Z,30GET/HEAD checks across teacher/student domains including16 hash comparisons, all passed. Live browser confirmed all seven Unit 2 lessons and24 Lesson2-0 type cards, preserved eight Unit 1 lessons/IntegerStory, and student dashboard loading. Local browser confirmed reload retains13-question defaults and saved type deselection. No production assignment was published for these checks.

## Recovery and next update

The preparation baseline is `0e8f843a-18cf-4163-a100-5bb841c15d3c`. Keep its local Worker/assets/safe configuration capture and the pinned Unit 2 source. Before any recovery, compare the then-current release and shared log so later changes are not erased.

A code rollback does not restore database/media state. Rolling back to the pre-Unit-2 baseline would also remove support for newly created Unit 2 assignments; preserve compatible bank handling rather than blindly reverting once those records exist.

The next assistant should read this finalized handoff and newest GitHub logs, acquire the current live version, preserve Unit 1 and all unrequested behavior, and coordinate publication. Record only what was actually built, uploaded, deployed and verified.
