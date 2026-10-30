# Handoff V41 — emergency term keyboard and work-field audit

**DEPLOYED AND VERIFIED.** Main **179 / `4d8d9874-a66b-4c78-8250-5d5c5e0bce3c`**, deployment **`ca2558bb-2ae7-451b-b6cd-89a0c4e0a375`**, 100%; activation **2026-10-30T12:54:58.188127Z**, code/configuration readback **2026-10-30T12:56:13.082338+00:00**. Documentation verification **2026-10-30T13:01:00.207306+00:00**. Worker **9,244,834 bytes**, SHA256 **`daa78e027ff4853d810fa6b700b5a44fca8b19592db72a1a9cad92d2a4998500`**. Art remains **5 / `818df882-1a64-44e5-9c63-20e42c462de5`**, deployment `3a172e35-9b53-4c1c-a03d-700d1bbdc326`, all **693 images**. Seven bindings, complete managed ASSETS, settings/runtime, schedules and domains remain.

Read V41 first, then [V40](Handoff-v40.md), [V39](Handoff-v39.md), [V38](Handoff-v38.md), [V37](Handoff-v37.md), retained records and the [release checklist](docs/RELEASE-CHECKLIST.md). **Next handoff: V42.** No student-data migration is part of this update. Never repeat V37's completed migration.

## Authorized source and cause

The owner requested **only the first two slides**, urgently, from the same [Prompt deck](https://docs.google.com/presentation/d/1OFU_HFfBLDc4zrn3gn0rwyl1sW5XpEomouj3EVPkWQY). Text and 1600×900 thumbnails were read for **`h7a83bd4e47a26495_9_69`** and **`h7a83bd4e47a26495_9_72`**, revision **`SKM9MP3Fo1wAnw`**, rechecked before publication. Later slides are outside scope. The deck was not edited.

Slide 1 shows PCL's **Circle: Identify each term with its sign** boxes and requests centered mathematical input, **one shared toolbar for the whole term row**, and a virtual keyboard because children report being unable to type on iPad. Slide 2 requests an audit of both unit JSON banks for other work boxes lacking a keyboard, especially scaffolding.

The demonstrated UI error is specific: the earlier single-line term layout used rich text-mode editors but hid their **entire formatting/keyboard controls** with the circle-grid CSS. It also hid the built-in MathLive keyboard toggle. There was consequently no visible app keyboard opener for those boxes. The old text-mode behavior also explains why typed terms did not look like mathematical answers. This establishes the missing-control problem; an actual iPad/Safari operating-system failure was not independently reproduced.

## Repair

- **Centered math terms:** PCL Circle boxes reuse the existing native mathematical field used by factoring. New term fields start/stay in math mode, use mathematical variable typography, center horizontally/vertically and fit their font to the available width/height. Boxes remain in equal-width columns in one fixed-width row, with a 40px single-line-height viewport. Existing multiple lines remain available by scrolling; no old line is removed.
- **One shared row:** Bold/Italic/Underline, size/color, Functions, keyboard and Undo/Redo appear once for the entire Circle row. There are no per-box toolbars. These are Work controls; V40's final-answer formatting removal remains. Parentheses and Like terms retain their existing individual toolbars.
- **Keyboard target:** The app's original main/abc keyboard and Functions act on the last focused/touched term; opening without a previous target safely selects the first term. Switching boxes retains the other values. Native open/close events coordinate with other keyboards. Fractions, variables, multiplication dot, physical typing and Undo/Redo are exercised on actual fields.
- **Existing work format:** The original rich-work reader/writer is injected. Older plain strings, text wrappers, math-delimited strings and version1 multiple-line data remain readable. Display conversion is presentation-only; an unedited open/save preserves the original work exactly. An edited line is stored as mathematical content inside the existing rich-lines format, preserving every other line/field. Physical and virtual Enter retain the existing add-line behavior. Review continues using the native mixed reader. Completeness checks and final-answer grading are unchanged.

Only **two native frontend functions** change: the lazy scaffold-view factory injects the existing toolbar/serialization helpers, and the insertion-mode helper recognizes the new term-field class. The scaffold UI module and narrowly scoped CSS implement the row, with a small pure term-display module. Ordinary rich editors, the native keyboard implementation, grading and all Worker business handlers remain unchanged. Exact inverse verification preserves the complete captured Worker prefix apart from the default release export. A new finite static wrapper/registry serves V41 and retains all older immutable paths/source objects.

## Both-bank work audit

The audit reads **all 1,875 current questions**: Unit 1 **104 types /520 questions**, Unit 2 **139 types /1,355 questions**, plus **25 nested Unit 1 parts**. It checks their response/work declarations and the actual shared native renderer paths, then exercises representative touch workflows.

| Work family | Current question count | Keyboard access |
| --- | --- | --- |
|Unit 1 word organizers |110 |Existing per-field native keyboard |
|Unit 2 word organizers |190 |Existing per-field native keyboard |
|Unit 2 factoring |150 |Existing shared factoring keyboard |
|Unit 2 PCL |180 across 18 types |Parentheses/Like terms already had keyboards; Circle now has one shared keyboard |
|Ordinary Work |410 Unit 1 +835 Unit 2 |Existing Work keyboard |

All 18 PCL types are exercised, with actual 2/3/5/6-term layouts measured at desktop/tablet/320–390px. No additional preset work family lacking keyboard access was found. Native table cells are ordinary HTML inputs and retain the system touch keyboard; they are not preset MathLive scaffold boxes. This audit does not change either JSON bank. All **13 current/historical Unit 2 revisions** and both current banks deeply match the baseline. Current Unit 2 pin remains **`9a41708b5904b1d9f0121c4d8057dec6fe0bf033095b6ed17abfe622c121aa74`**, schema `2.6.1-lowercase-factor-variants`. Both GitHub reference JSON files remain exact.

## Baseline and verification

Fresh main/art capture **2026-10-30T12:37:20.889392+00:00** matched main **178 /`459cee34-e501-4998-96b8-b4e2e84f4676`**, deployment `d4ccbba9-a1c9-4e8b-ab56-1f978e0f25c3`, 9,090,346 bytes, SHA256 `40b1c400e408dea724689f418ac105643dd012339c65e883704365b1f07d273e`. Art 5 and GitHub **`ee6b7e76cccb8f5c85331eb4524bd1a92eeb1455`** matched V40. Actual active/latest/configuration and GitHub were rechecked before upload/activation. One publisher; freshness is not an atomic lock.

| Check | Result |
| --- | --- |
|Complete static/protocol/native/Worker preservation and one canonical app/React owner |1,510 passed; 26 modules |
|Retained shuffled choices/all 24 orders,16 authored references and exact banks/all 13 revisions |709 passed |
|New emergency UI/touch scenarios |257 before and published |
|Complete native browser assertions |1,637 before and published |
|Both-domain complete public body hashes /protocol checks |450 /16 passed |

New tests cover every PCL type, shared control counts, mathematical mode and actual text centers, complete toolbar bounds, touch entry at 1024×768, target changes, fractions/variables/dot, Undo/Redo, physical typing, legacy raw/multiline data and native save/reopen. Both banks' regular Work, word organizers and factoring keyboards open via touch. Retained suites cover V40's exact hints/smaller previews/answer controls, old work/Enter/space/layers, choice keys, assignment settings, native dates, Grades/PDF lazy routes, exact worksheets, Student View, populated/direct/reloaded teacher/student Playground and Boards. Counts: v41-ui:257, v40-ui:182, v38-ui:754, v39-ui:38, v36-ui:66, v36-mixed-ui:5, v34-ui:100, prompt5-ui:45, prompt6-ui:26, urgent:29, browser:135.

Cloudflare accepted activation, but the first deployment-list read still returned the prior baseline. A later fresh read matched the activation receipt, 179/100% and the exact staged module; no second activation was sent. Complete public verification was repeated after that readback settled. The local release controller now polls bounded read-only confirmation of the accepted receipt, stops on an unexpected concurrent head, and never retries the activation write. Three mocked old-to-new/concurrent/timeout cases pass without network or writes.

Official Wrangler 4.151.1 no-bundle dry-run, staged/active/downloaded Worker bytes match the hash above. Strict inherited bindings preserve the complete configuration. Canonical owner **`/api/v41/static/20261030a/native/index-studentv41.js`**; stale bootstrap ETags receive the new revalidating body. All published bodies, including complete script-graph and retained stylesheet dependencies, were downloaded/hash-verified **before** replay. Both app domains are checked. Replay uses actual published code with fictional authenticated APIs/SQLite, with no production student test writes.

Browser **Chromium 154.0.8037.57**, desktop/tablet/320–390px and touch 1024×768 at DPR2. **Actual iPad/Safari/WebKit is not tested**; no WebKit executable is installed. Touch emulation is recorded separately from engine coverage. The retained local font fallback remains. The retained old PCL layout test measures the new math viewport at 40px; physical-Enter/save/reopen behavior still passes. The previous release's private preview-size measurement is retained for V40 regression testing. No CPU-reduction claim.

## Preservation and next work

No production student records, responses, snapshots, grades, YY points, ownership, histories or messages were edited/deleted. No schema migration, bank edit, regrade, artwork/R2/Drive upload or notification send occurred. Keep V39's stable-ID/displayed-letter mapping, V38's retired-organizer compatibility/lowercase242/228 wording, V37's archive/receipts/question tokens/mixed-pin retries and all earlier data contracts. YY's 693 artwork paths, 047 bare heads, skin mappings, four student/two teacher reaction cycles and headwear offsets remain.

GitHub gets this handoff, additive current-log inserts and UI/release notes only. Preserve every previous document/handoff and separate Coloring work. Never upload Worker bundles, slides, screenshots, student data, credentials or fixture databases. Open student pages need **one refresh** to load the keyboard fix; do not clear their work/storage. Start any subsequent task from actual current main/art/GitHub. **Next handoff: V42.**
