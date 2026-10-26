# User-facing internal-ID audit (report only)

Scope: current V29 canonical native UI and connected Project 2 integration, read
from the freshly captured public bodies. Static render-expression review found
103 identifier-bearing candidates; most were React keys, internal control flow,
URLs or lookups rather than displayed IDs. Candidate details are retained locally
in id-audit-candidates.json. This is a source-path audit, not proof that every
fallback has occurred in a production account.

## Confirmed direct opaque-ID display

| User-facing location | Source render path | What is displayed | V30 status |
| --- | --- | --- | --- |
| Grades → open a student/lesson grade → Grade history | Native `nY`, baseline line 9763, history paragraph | `entry.teacher_id` appended after timestamp/reason; this is the teacher's internal UUID shown in the PDF | Removed from the V30 presentation; backend history and actor IDs are retained. |

## Conditional fallbacks that can show an opaque identifier

| User-facing location | Source render path | Condition and displayed fallback |
| --- | --- | --- |
| Project 2 → Delete assignment → class checkboxes | Integration `XyProjectDeleteDialog`, baseline line 44 | `classes.find(...).name || id` prints the stored class ID when the assigned class is absent from the supplied class-name list, e.g. an old/deleted class reference. |
| Teacher Student view → Comic-Con → nested Class dropdown | Native `xyDemoComic`, baseline line 13841 | Class-name lookup falls back to `cid` for option text/title. Normally the preview catalog supplies all active owned names; a stale/incomplete catalog could expose the class UUID. |
| Assessment response/answer display for a multipart question | Native `Yo`, `Tv`, `Fv` | Missing/blank part labels fall back to `part.id` or `Part ` + `part.id`. Teacher-created added parts use crypto.randomUUID(), so imported/legacy/blank-label records can display that UUID. New parts normally receive labels such as `Part A`. `Fv` is the typed-work review display. |
| Generic saved-response review for multipart work | Native `Hf`, baseline line 9763 | The heading is `Part ` + the saved response's part-map key. Ordinary authored bank part keys are short/meaningful; a record containing UUID part keys would expose them. |

These are reported for the owner; this feature does not broadly remove IDs or
rewrite stored references. The Student view class filter restricts valid nested
Comic-Con options but intentionally does not perform an unrelated label cleanup.

## Authored curriculum references (visible, normally useful rather than UUIDs)

- Grades → per-question answer review (`nY`): heading includes the authored
  `problemId` and numeric `typeId` after the question number.
- Notifications → open a reported problem (`rY`, baseline line 10170):
  `Problem {problemId} · Type {typeId} · Question {questionNumber}`.
- Assessment builder → bank-question card (`AK`, lines 12040–12082): bank type,
  authored variant ID and difficulty. Edit bank question → Numerical Variant
  dropdown (`AK`, line 12255) displays the authored problem IDs.
- Problem selection and worked solutions display `Type N`, `Lesson U-L`, and
  authored part/choice labels. Those are curriculum references, not account UUIDs.

The displayed curriculum IDs can be simplified later if the owner wants, but
removing them automatically would change useful bank-authoring/review context.

## Intentionally retained functional values

Student usernames, class/invitation/recovery codes, human lesson/type numbers,
share-link URLs, persisted YY item IDs and internal React/data/URL keys were not
classified as meaningless UUID text to erase. Routing and storage references must
remain intact even when a corresponding user-facing label is improved. This audit
makes no claim to enumerate arbitrary IDs embedded in user-authored prose or
external libraries/iframe documents outside the reviewed native/integration UI.
