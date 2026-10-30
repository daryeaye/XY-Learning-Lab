# Handoff V40 — first three Prompt slides

**DEPLOYED AND VERIFIED.** Main **178 / 459cee34-e501-4998-96b8-b4e2e84f4676**, deployment **`d4ccbba9-a1c9-4e8b-ab56-1f978e0f25c3`**, 100%; activation/readback **2026-10-30T01:04:00.731689+00:00**. Documentation verification **2026-10-30T01:07:15.018906+00:00**. Worker **9,090,346 bytes**, SHA256 **`40b1c400e408dea724689f418ac105643dd012339c65e883704365b1f07d273e`**. Artwork service remains **5 / 818df882-1a64-44e5-9c63-20e42c462de5**, deployment `3a172e35-9b53-4c1c-a03d-700d1bbdc326`; complete **693-image** registry preserved. All seven bindings, opaque managed ASSETS, settings/runtime, schedules and domains remain.

Read V40 first, then [V39](Handoff-v39.md), [V38](Handoff-v38.md), [V37](Handoff-v37.md), retained history and the [release checklist](docs/RELEASE-CHECKLIST.md). **Next handoff: V41.** Never repeat V37's completed migration for a UI update.

## Scope and source

The owner's latest instruction is to run **only the first three slides** of the same native [Prompt deck](https://docs.google.com/presentation/d/1OFU_HFfBLDc4zrn3gn0rwyl1sW5XpEomouj3EVPkWQY). Revision **`VyjeEJs6Tf6XFw`** was read and rechecked before publication. Slides **`h7a83bd4e47a26495_9_47`**, **`h7a83bd4e47a26495_9_57`**, **`h7a83bd4e47a26495_9_64`** were read as text and visually at 1600×900. Later slides are outside this release. The deck itself was not edited.

1. **Scaffold status hover.** Both **Scaffolded** and **Scaffolding available** now show the exact hint: **Please see details on the "Add Scaffolding" check box.** The question-mark help cursor becomes a normal pointer. The status stays plain text in the See Solution row; clicking it cannot toggle problem inclusion. Global checkbox behavior, fonts and alignment remain.
2. **Smaller scaffold preview.** The hover preview's image uses approximately **one-quarter of its previous displayed area**, implemented as half the width and half the height, with the same padded source pixels/aspect ratio. The placement calculation starts from the previous actual available width, including side-room limits, rather than merely halving a maximum that the old tooltip never reached. Text remains readable at its existing size; two-column preview spacing/minimums and image height limits shrink proportionally. Checkbox exclusion, viewport limits and scrolling remain. Native factor-image measurements at 1366/768/390/320px are approximately 25% of the baseline area. All four organizer previews and all five global-control lessons are exercised.
3. **Answer toolbar.** Remove **Bold, Italic, Underline, Font size and Font color** from final-answer editors, including numeric/algebraic bank fields and custom long assessment responses. **Functions, multiplication dot, keyboard and Undo/Redo** remain. The shared rich editor has an explicit presentation-controls flag: ordinary answer editors default off, large Work/Explanation/description/planning editors retain their formatting, and long assessment responses explicitly opt out. Older word-organizer answer keys are also handled. This changes controls, not stored content: it does not strip existing answer formatting, alter values or change grading/input rules.

Five native frontend functions change (`TM`, tooltip placement, `uy`, `ir`, `Tv`), plus the organizer editor's explicit answer flag and scoped CSS. All other native functions match after URL alias normalization. The entire captured Worker business-handler prefix is exact apart from the release default export. The added outer wrapper only serves the finite V40 static registry. No bank/reference JSON, schema, migration, production response/grade/point/YY/message write, deletion or artwork/R2 upload occurred.

## Baseline and preservation

Fresh capture **2026-10-30T00:51:55.870986+00:00** matched main **177 / 598b2e97-aeb6-4656-9a4b-e52f26c45172**, deployment `e2811f42-8a0a-46fb-b868-b3caf047c0de`, 8,929,686 bytes, SHA256 `9995a33f4aeae1d6abebccb066ddae7ad3f52bd643aa8b748d3b21dc254f3835`. Art 5 and GitHub **`3e3caab6054eeabb735f01ab01f0126de2d0a709`** matched V39. Fresh active/latest/configuration and GitHub checks precede upload/activation. One publisher; a freshness read is not an atomic lock.

Unit 2 remains **139 types /1,355 questions**, schema `2.6.1-lowercase-factor-variants`, pin **`9a41708b5904b1d9f0121c4d8057dec6fe0bf033095b6ed17abfe622c121aa74`**. All **13 current/historical revisions** and Unit 1's 104 types / 520 questions deeply match. Both reference JSON files remain byte-identical. Preserve V39's displayed-choice mapping and stable-ID grading, V38's lowercase242/228 wording/retired-organizer compatibility, and V37's archive, receipts, question tokens, replacement policy and mixed-pin retries.

All old immutable URLs and source objects remain. YY ownership/points/limits, 047 bare heads, skin mapping, four student/two teacher reactions and headwear 0/−1/+1px offsets remain. No student records were used for tests; fictional local accounts/SQLite exercised normal authenticated UI/API behavior.

## Verification

| Check | Result |
| --- | --- |
|Static/complete bodies, protocols, exact prefix/native preservation, one app/React owner |1,459 passed; 25 modules |
|Retained choice mapping, all 24 permutations,16 authored references and all 13 bank revisions |709 passed |
|New three-slide native UI scenarios |182 before and published |
|All native browser assertions, including retained flows |1,380 before and published |
|Both-domain complete body hashes/protocols |404 /16 passed |

New scenarios check the exact status title/cursor and non-toggling behavior, all preview modes at desktop/tablet/320–390px, quarter-area measurements, unobstructed controls, regular numeric/algebraic/factoring/word answers, native long-response assessment, retained Work formatting, Functions/dot/keyboard, narrow toolbar bounds, save/reopen and unchanged correct-answer credit. Retained suites cover scaffold defaults/Cancel/Save/differentiated levels, missing-box gates, old work, physical/virtual keyboards, choice order/solutions, dates, Grades/PDF lazy modules, exact worksheets, Student View, populated teacher/student Playground/direct/reload routes and Boards Up. Browser assertion counts by suite: v40-ui:182, v38-ui:754, v39-ui:38, v36-ui:66, v36-mixed-ui:5, v34-ui:100, prompt5-ui:45, prompt6-ui:26, urgent:29, browser:135.

Official Wrangler 4.151.1 no-bundle dry-run, staged/active/downloaded Worker bytes all match the exact hash above. Strict inherited bindings keep managed ASSETS and the complete configuration. Canonical owner **`/api/v40/static/20261030a/native/index-studentv40.js`**; stable bootstrap revalidates and a V39 ETag receives the new body. All public-body downloads/hash verification completed **before** published replay; the replay server fails if a required current artifact is missing. Both `xylearninglab.t-pbl.com` and `student.xylearninglab.t-pbl.com` are verified.

Browser **Chromium 154.0.8037.57**, not actual Safari/WebKit or every account. The retained local `source-sans-3.ttf` fixture fallback remains. Fixture setup initially lacked a retained private Playground PDF and a native helper; those were restored from the verified local prior capture before the passing complete runs. Retained Cancel testing now waits for the previous dialog to close and the reopened checkbox to settle, rather than sampling a transient old node; actual Cancel/Save semantics are verified. No production code change was needed for these test setup/synchronization issues. No CPU reduction claim.

## Handoff and recovery

GitHub gets this handoff, additive current-log inserts and UI/release-check notes only. Preserve every earlier document/handoff and separate Coloring work. No bundles, slides/screenshots, PDF, artwork, credentials, student records, captures or fixture databases are published.

Open pages need **one refresh** for the new controls. Stored work remains. Future repairs must start from actual current main/art/GitHub and preserve all historical namespaces, banks and saved structured work. Never clear student storage, renumber saved choice IDs, regrade or repeat a migration to update presentation controls. **Next handoff: V41.**
