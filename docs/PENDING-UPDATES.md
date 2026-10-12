# Pending XY Learning Lab changes

Updated October 11, 2026. Implementation is in progress on the current Cloudflare build `775f9822-44c1-4a13-b1fe-79ef618c09bc`; these changes are not yet deployed. The user selected GitHub for shared logs only. Do not wait for an original source project or move the application into this repository. Download the current Cloudflare Worker/frontend/assets before each update and preserve the exact existing layout and behavior outside the requested changes.

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
