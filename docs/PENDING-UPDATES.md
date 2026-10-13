# XY Learning Lab completed update requirements

## October 12, 2026, 20:33 EDT — latest sixteen comments and additional requests completed

**Current-version addendum; older sections below are historical preservation records.** Version `bb8c766d-9773-455d-a99b-b988b936b677` is deployed at 100% and verified. Read [Handoff Version 3](UNIT2-HANDOFF-v3.md): it connects state-test skill expectations, the seven annotated PDFs' classroom methods, and final review decisions.

Completed: range removal, 120 lower-star geometry diagrams, new two-decimal sign-combining Type 235 replacing 187 in Lesson 2-1, revised Types 202/205/207/211/212, retirement of 213, plain simplification Type 185, short-answer Types 226–229, expanded/simplified algebraic answer requirements through Lesson 2-5, twenty unique Unit 2 Comic-Con preset questions with all 31 eligible picker types and explicitly approved algebraic checking, and shared underlined exact-variant See Solution links. Keep saved drafts and all four bank pins unchanged. All earlier accepted requirements remain preserved.

No remaining implementation from this request is marked pending. Full real student autosave/submission/Comic-Con gallery testing remains separately unperformed; no production test records were created. Fresh active-baseline, byte-preservation, configuration, mathematical and both-domain HTTP checks passed. Details: CHANGELOG.md, RELEASES.md and Handoff Version 3.

Updated October 12, 2026. All three requirements below were implemented on baseline `775f9822-44c1-4a13-b1fe-79ef618c09bc`, deployed as `0e8f843a-18cf-4163-a100-5bb841c15d3c` at 100%, and verified on the live domains. They are retained here as preservation requirements for future updates; there is no remaining pending change from this request. See CHANGELOG.md and RELEASES.md for evidence and limitations.

The user selected GitHub for shared logs only. Download the then-current Cloudflare Worker/frontend/assets before each update and preserve the existing layout and behavior outside the requested changes. Do not deploy the October 11 baseline again over a newer release.

## 1. Frozen Grades header

Keep the entire header row—Student and every assignment name—visible while the teacher scrolls vertically through the grade table. Preserve alignment during horizontal scrolling, readable multi-line titles and existing header controls. The sticky offset must account for any fixed site navigation; opaque header backgrounds must prevent grades showing through. Do not interpret this as freezing only the Student column.

Acceptance: scroll near the bottom of a long roster and across assignment columns; all header cells remain visible and aligned, without covering navigation or blocking header actions. Check the narrower supported layout as well.

## 2. YY outfit-tier announcement

Use the existing student YY Buddy announcement presentation to say:

> Yay! We unlocked new looks together! Come check them out!

Use that same wording for each newly unlocked tier. Read the teacher's configured outfit thresholds; the common 20/40/60/80-point values are examples, not hard-coded rules. Preserve normal buddy messages and existing outfit/reward calculations.

Acceptance: crossing a configured threshold announces an unlocked look; below-threshold changes do not. A refresh, repeated polling or unchanged points must not repeat the same unlock announcement. Crossing several tiers in one update should produce one useful announcement, not a stack. Existing students should not receive a burst of all historical milestones. Adapt notification persistence/initialization to the source's existing unlock and message model; test non-default teacher thresholds too.

## 3. Six rounded tabs with matching panels

Round both upper corners of every student work tab while retaining its recognizable tab shape and label/count behavior. The full content container beneath the tabs must use the selected tab's light color, including empty states and the space around assignment cards.

| Tab | Panel color |
| --- | --- |
| Current Assignments | Its light blue |
| Late Assignments | Its light red |
| Projects and Activities | Its light purple |
| Assessment | Its existing light teal |
| Completed Work | Its existing light green |
| Past-due Work | Its existing light gray |

Use the existing palette consistently rather than inventing a second set of mismatched colors. Preserve readable contrast, keyboard navigation, focus indication and selected-tab accessibility. The new request supersedes previous white selected-tab styling.

Acceptance: select all six tabs, including empty/non-empty states; rounded upper corners render correctly and the whole panel updates to the matching color. Check narrow layouts and keyboard selection. Preserve assignment content, counts and navigation.

## Preservation checks before release

Compare the tested build with the downloaded current baseline. Preserve its comic editor, grading/gallery, feedback, share links, buddies, assignments, assets and configuration outside the three requested changes. Historical log entries describe earlier releases; do not reapply an old layout or restore a missing historical feature without a user request. Preserve the current embedded bank (104 types / 520 problems), not the older repository reference JSON (96 / 480).

Recheck the active Cloudflare version immediately before publication; stop and reconcile if it differs from the recorded baseline. Coordinate one publisher at a time. A shared log is not an implemented lock, and compiled Cloudflare backups are not original React source. Record baseline/result versions, build hashes, checks, recovery information and factual status in `RELEASES.md` and `CHANGELOG.md` after the update.

## October 12 Unit2 requirement — completed; preserve going forward

Unit 2 is deployed and verified as `74f9e816-cf0f-4d24-b411-8fe8099444e7` at 100%. It uses the uploaded1,250-question bank and seven lesson entrypoints mirroring Unit 1. Preserve existing Unit 1 bank/checking and all three October 11 requirements above. Read docs/UNIT2-HANDOFF.md for source identity, scoped checking, example reservations, limits and recovery. No manual student answer-entry walkthrough was performed; that is deferred to the user’s next request. No additional bank is enabled for Units3–8.

## October 12 teacher content review — completed; preserve going forward

Version `0348716b-46e6-4592-a5d4-ca2cb1048e3b` serves 100% after the seven requested Unit 2 changes. Current reference bank is 124 types / 1,240 questions; original 125-type revision stays embedded for existing assignments. Preserve the replacement Types 120/121/126, math target in Type 110, shorter vocabulary, and retirement of Type 144. Never renumber remaining live IDs or discard either pinned revision. Read the current-content addendum in `docs/UNIT2-HANDOFF.md`. All earlier completed UI/preservation requirements remain unchanged.

## Unit 2 signs and distribution review — October 12, 2026, 19:23 EDT — completed; preserve going forward

Version `b7b00f23-fbea-4aaa-bde6-02c3f642a2a5` serves 100% traffic. New selections use 129 types / 1,290 questions and source `608a257142cba03e3204ce256b4b32ff91a720175544938e4f13573070b8959c`. Preserve changed Types 139/140/142/152/154, four-star Type 157, Lesson 2-4 membership for 158–162 and new distribution word-problem Types 230–234 in Lesson 2-2. Preserve all three bank revisions and original answer/input/reservation policies. All earlier completed UI requirements are intact. No additional work from these seven comments remains; the manual student grading walkthrough remains separately deferred. Read the newest Unit 2 handoff and release records before the next update.
