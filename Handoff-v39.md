# Handoff V39 — solution letters follow displayed choice order

**DEPLOYED AND VERIFIED.** Main **177 / 598b2e97-aeb6-4656-9a4b-e52f26c45172**, deployment **`e2811f42-8a0a-46fb-b868-b3caf047c0de`**,100%; activation/readback **2026-10-28T23:38:35.871147+00:00**; this record **2026-10-28T23:43:12.778271+00:00**. Worker **8,929,686 bytes**, SHA256 **`9995a33f4aeae1d6abebccb066ddae7ad3f52bd643aa8b748d3b21dc254f3835`**. Art remains **5 / 818df882-1a64-44e5-9c63-20e42c462de5**, deployment `3a172e35-9b53-4c1c-a03d-700d1bbdc326`, all **693 images**. All seven bindings, opaque managed ASSETS, configuration/runtime, schedules and exposure remain unchanged.

Read V39 first, then [V38](Handoff-v38.md), [V37](Handoff-v37.md), retained earlier records and [release checks](docs/RELEASE-CHECKLIST.md). **Next handoff: V40.** Do not repeat V37's migration or regrade student work to fix a display label.

## Report and cause

The owner reported **“Why the choices got misplaced”** with a student photograph. It shows the Lesson2-5 five-star pattern3r+5,6r+10,9r+15,… asking for the12th term. Displayed options are A:36r+55, B:33r+60, C:12r+20, D:36r+60. The solution incorrectly said **“Answer: C:36r+60.”** Correct mathematics is36r+60; the matching displayed letter is **D**.

The server deliberately shuffles choice objects deterministically by student/set/question seed, preserving each choice's **stable ID**. The student radio inputs submit that ID. Visible A/B/C/D labels are positional. The shared `Zu` answer renderer printed `answer.correct_choice_id` directly as a human letter, even after that choice moved to another position. It therefore paired the correct expression with an obsolete letter. Authored “Choice C…” prose could have the same problem. This was a missed display mapping; it was not a bank mathematics correction.

A narrowly scoped, bounded **SELECT-only** inspection of the reported assignment/student's matching attempts confirmed the photograph's first attempt: the saved response corresponds to visible C,12r+20, with zero credit; the canonical correct choice is visible D,36r+60. Rechecking locally with the exact owning bank agrees. The later saved retry's correct response/credit also agrees. This establishes this reported case's grading; it is not a claim that every past account/attempt was audited. No grade or response was changed, and no regrade was needed for this case. Student identity, assignment IDs, snapshots, responses and photographs remain private and are not in GitHub.

## Repair

- **Solution key:** `Zu` derives a displayed letter by finding the stable correct ID in the exact `problem.choices` order being rendered. It still retrieves the answer content by stable ID. It never renumbers or mutates choices, submitted responses, answer keys or snapshots. A missing choice match does not fabricate a positional letter.
- **Worked prose:** `Nu` creates a presentation-only solution copy and maps explicit **Choice A–D / choice A–D / Option A–D / option A–D** text references to the same visible order. It touches text nodes only; mathematical LaTeX, variables, values, stored solutions and answer metadata remain. Current-bank audit found16 such authored references across both units; all are tested. This is a bounded contextual map, not unrestricted find/replace over source strings.
- **Multipart review:** `qH` merges revealed part solution/answer metadata into the original displayed part objects, retaining their choice arrays. The previous merge discarded those arrays. This lets each supported nested part resolve its own label/content correctly. Existing feedback-release gates and pre-check answer hiding remain.

The displayed option order, deterministic seeds, stored answer IDs, native grading, checks/locks, highest grades and rewards remain unchanged. Unit1/Unit2 numeric/algebraic/choice answers, examples, teacher previews, worksheets/Boards answer keys and saved history keep their source data. For unshuffled teacher/worksheet contexts, the derived letter naturally agrees with the displayed source order.

No backend business handler changed: inverse/source verification proves the captured Worker prefix is byte-identical apart from the top-level release export. V39 adds only the new static delivery wrapper/registry; three native UI functions and two pure display helpers implement the repair. Existing CSS/layout is unchanged. There is **no bank/reference JSON change, new bank revision, schema change, data migration, response/grade/point update or deletion**.

## Fresh baseline and preservation

Captured **2026-10-28T23:26:04.542480Z**: main **176 / fbbb59a2-a45d-4c6f-a132-d4127021097d**, deployment `8a4a038b-8120-4ff4-9e97-9245fcd3bdaa`,8,754,754bytes, SHA256 `9397af21726e1e55cf07cc92b698ebae712b5ecf06e03bffec35ed023294fdd6`; art5 unchanged. GitHub began at **`620caa8f6995af1460682e309fefc2b66d699185`**. Actual current main/art/GitHub and current handoff were read before editing, with fresh head/configuration checks before upload and activation. One publisher was used; freshness is not a lock.

Current Unit2 remains **139 types /1,355 questions**, schema `2.6.1-lowercase-factor-variants`, pin **`9a41708b5904b1d9f0121c4d8057dec6fe0bf033095b6ed17abfe622c121aa74`**. All **13 current/historical revisions** and both default banks deeply match the captured baseline. Unit1 remains104/520. Root reference JSON is byte-identical. Preserve V38's lowercase242 variants,228 wording/footer, regular Work for226/227/245, retired-organizer saved-work compatibility, and V37's archive/receipts/question tokens/mixed-pin retries.

All prior immutable public paths, padded images and all693 artwork paths remain. YY ownership/points/monthly limits,047 bare heads, skin mappings, student/teacher reaction counts and headwear offsets/timing are untouched. No artwork/R2/Drive upload, production test write or notification/message send occurred.

## Verification

| Check | Result |
| --- | --- |
|Complete static bodies/protocols, one-owner graph, unrelated code and exact backend prefix |1,382 passed;25 modules, one canonical app/React owner |
|Choice display helpers, all24 permutations, stable IDs, nonmutation,16 authored references and all13 banks |709 passed |
|Native signed-in choice scenarios |38 before and38 published |
|Retained V38 three-slide UI |754 before and754 published |
|Retained V36/V35/Prompt5/Prompt6/keyboard UI |66/100/45/26/29 before and published |
|Historical mixed scaffold-map UI |5 before and5 published |
|Complete populated sign-in, Grades/PDF, worksheets, Student View, Playground and Boards |135 before and135 published |
|Both-domain complete body hashes /protocol checks |338 /16 passed |

Native choice tests put the correct Unit2 answer at each A/B/C/D position, submit its stable ID, verify credit and the visible key, then refresh/reopen. A separate fictional case reproduces the photograph's **exact full option order**, visible C12r+20, exhausted checks/zero credit and corrected **D36r+60** key. Unit1 authored “Choice C…” text maps to displayed D. A fictional multipart case verifies independently shuffled part keys A/D and matching prose without dropping the choice arrays. The new UI tests also assert no solution before checking and no unhandled exceptions.

Official Wrangler **4.151.1**, no-bundle dry-run, staged content and active content match the exact source size/hash above. Strict inheritance preserves all seven bindings and managed assets. The canonical owner is **`/api/v39/static/20261028a/native/index-studentv39.js`** in the V39 immutable namespace. A stale bootstrap ETag gets the new revalidating bootstrap. Preserve all preceding namespace bodies.

All published bodies were downloaded/hash-verified **before** the signed-in replay. The replay server refuses missing current V39 artifacts, avoiding generated fallback for those files. **1198 browser assertions** pass against actual downloaded Worker/public code with fictional authenticated APIs/SQLite; no production student writes are used. Both domains are verified: `xylearninglab.t-pbl.com` and `student.xylearninglab.t-pbl.com`.

Browser **Chromium154.0.8037.57**; desktop/tablet/320–390px retained flows. Actual Safari/WebKit and every account were not tested. The retained `source-sans-3.ttf` local fixture fallback remains; no font or CPU-reduction claim is made. Native correct-answer solutions are intentionally collapsed behind **View Solution**, so the test opens that control before checking labels; wrong/exhausted cases open the solution automatically. This is existing behavior, not another repair.

## Handoff and recovery

GitHub receives this handoff, five factual current-log inserts and additive UI/release-prevention notes only. Keep every prior handoff/document byte and separate Coloring work. Root banks are unchanged. Do not publish private captures, student records, credentials, databases, screenshots or app bundles.

Students with an already-open page should **refresh once**. Their stored choice IDs, option order, work and grades remain; only display mapping changes. Recover by a compatible forward repair from177 or its actual newer successor, keeping all13 banks, every current/old asset path, V38/V37 compatibility and archived data. Never change stored IDs into displayed letters, erase responses, clear student storage or run a generic pool rebase to fix a label. Capture fresh actual main/art/GitHub before the next update and stop/reconcile on a mismatch. **Next: V40.**
