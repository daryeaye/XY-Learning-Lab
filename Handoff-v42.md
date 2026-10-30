# Handoff V42 — one parenthesis per key press

**DEPLOYED AND VERIFIED.** Main **180 /`4190199e-5fff-4ae9-9adb-551433b195eb`**, deployment **`8e01cadc-0e52-4330-9815-9a6e6d27b284`**,100%; activation **2026-10-30T13:46:37.511697Z**, code/config readback **2026-10-30T13:46:39.221789+00:00**; documentation **2026-10-30T13:51:14.280718+00:00**. Worker **9,401,662 bytes**, SHA256 **`4c21f42b84c4c780ae64b01afae800281ddc9fd00ed2f09ae8683d095ebf3ef4`**. Art remains **5 /`818df882-1a64-44e5-9c63-20e42c462de5`**, deployment `3a172e35-9b53-4c1c-a03d-700d1bbdc326`, all **693 images**. All seven bindings, complete managed ASSETS, runtime/settings, schedules and domains remain.

Read V42 first, then [V41](Handoff-v41.md), [V40](Handoff-v40.md), [V39](Handoff-v39.md), retained history and the [release checklist](docs/RELEASE-CHECKLIST.md). **Next: V43.** No student-data migration or regrade is part of this repair.

## Report, reproduced cause and scope

The owner reported repeated/unwanted parentheses when students type into the answer box. The photo shows the square-perimeter question with side **3x+7**, with many extra parentheses in the answer. Current public bank identifies this as **Type 227, variant 227-03**. The mathematical expression **4(3x+7)** is equivalent to 12x+28 and is accepted by the unchanged native checker in the reproduced fictional case. No actual student record was read or changed.

On captured179, physical typing used MathLive's enabled **smartFence** completion: typing `4(` created `4\left(\right)`, including an untyped automatic closing fence. The app's on-screen keys instead inserted literal delimiters. Mixing physical opening and an on-screen closing produced **`4\left(3x+7)\right)`**, with an additional closing character inside the automatically closed group. Physical-only completion worked for the ordinary balanced example, and no autonomous endless stream was observed; the demonstrated failure is automatic extra fences and inconsistent input paths. The photo alone does not establish every preceding key press.

## Repair and preservation

- Disable native **smartFence** completion in ordinary mathematical answer fields and the shared mathematical scaffold fields. Set both the initial custom-element attribute and per-field options, so initialization and subsequent updates agree. A literal `(` or `)` now enters one character on physical and native on-screen keyboards, including mixed entry. Native editing/history machinery handles the key events; there is no custom document-level parenthesis interception.
- Keep explicit Functions templates intentional: brackets/absolute-value/fraction/root templates retain their authored structures. Native automatic fence completion is off for mathematical fields, so other directly typed fence characters also remain literal. Rich prose Work editors retain their existing mode/options.
- Only the native shared answer editor function and scaffold MathInput options/attribute change. No grading, input-category policy, response cleaner, bank, backend business handler or data schema changes. The entire captured Worker prefix is exact apart from the release default export; all other native functions match after URL alias normalization. CSS/layout is unchanged.
- Existing saved expressions, including nested groups, old `\left/\right` notation and already duplicated characters, are preserved. **Do not strip or rewrite old parentheses automatically:** valid nested mathematics and student intent cannot be inferred from a character run. Refresh open pages to use the repaired entry behavior; keep all work/storage.

## Verification

| Check | Result |
| --- | --- |
|Complete static/protocol bodies, native/Worker preservation, one app/React owner |1,557 passed; 26 modules |
|Retained choice mappings/all 24 permutations and exact current/historical banks |709 passed |
|Focused parenthesis UI |90 before and published |
|All signed-in browser assertions |1,727 before and published |
|Both-domain complete body hashes/protocol checks |496 /16 passed |

Focused cases check one opening/closing character at every keystroke, nested/multiple groups, a closing-only input, fast 20-opening/20-closing sequences and no growth after typing stops, physical/virtual/both mixed directions, middle insertion/backspace, save/reopen/reload, numeric-only rejection, Unit 1 grouping, factoring and Circle math work, and touch 1024×768 entry. The photo's exact current variant is used in a fictional saved snapshot; **4(3x+7)** saves/reloads and receives native credit1. Current Undo/Redo controls remain present and their implementation is unchanged.

During testing, a separate native answer Undo→Redo sequence after insertion/backspace failed to restore the post-backspace state **on the original179 build as well as this candidate**. It is recorded as a separate pending issue, rather than being presented as fixed by this option change. Shared Circle history passes its retained V41 checks. No production record was modified to investigate either case.

Retained suites cover all 18 PCL types and touch keyboards, old rich/multiline work and Enter, V40 preview/hint/answer-control behavior, choice keys, work gates, templates, factoring layers/Spaces, assignment settings/dates, Grades/PDF lazy modules, exact worksheets, Student View, populated/direct/reloaded teacher/student Playground and Boards. Counts: v42-ui:90, v41-ui:257, v40-ui:182, v38-ui:754, v39-ui:38, v36-ui:66, v36-mixed-ui:5, v34-ui:100, prompt5-ui:45, prompt6-ui:26, urgent:29, browser:135.

Official Wrangler 4.151.1 no-bundle dry-run, staged/active/downloaded Worker bytes match the exact hash above. Strict inherited bindings retain all assets/configuration. Canonical owner **`/api/v42/static/20261030a/native/index-studentv42.js`**; old bootstrap ETags get the new revalidating body. Full public downloads, including all script-graph dependencies, finish **before** the published replay. Both `xylearninglab.t-pbl.com` and `student.xylearninglab.t-pbl.com` pass. Replay uses actual downloaded code with fictional authenticated APIs/SQLite and no production student test writes.

Browser **Chromium 154.0.8037.57**, desktop/tablet/320–390px and touch 1024×768/DPR2 retained flows. Actual Safari/WebKit/every account are not tested; no WebKit executable is installed. Retained local font fallback remains; no font or CPU-reduction claim.

## Baseline, data and recovery

Fresh capture **2026-10-30T13:20:43.290411+00:00** matched main **179 /`4d8d9874-a66b-4c78-8250-5d5c5e0bce3c`**, deployment `ca2558bb-2ae7-451b-b6cd-89a0c4e0a375`, 9,244,834 bytes, SHA256 `daa78e027ff4853d810fa6b700b5a44fca8b19592db72a1a9cad92d2a4998500`. Art 5 and GitHub **`d43957b11f66e0d6c0144d94c657fb3a45fbde4c`** matched V41. Fresh head/configuration and GitHub checks precede upload/activation; one publisher and bounded activation-receipt confirmation are used.

Both banks and all **13 Unit 2 current/historical revisions** remain exact: Unit 1 **104 types/520 questions**, Unit 2 **139/1,355**, current pin **`9a41708b5904b1d9f0121c4d8057dec6fe0bf033095b6ed17abfe622c121aa74`**, schema `2.6.1-lowercase-factor-variants`. Both reference JSON files are unchanged. Preserve V41's shared term toolbar/legacy work, V40 controls/previews, V39 stable-ID choice mapping, V38 compatibility, V37 archives/receipts/tokens/mixed retries, and all earlier work/grades/history/YY contracts. No production student data, responses, points, messages, banks or schemas were changed/deleted; no artwork/R2/Drive upload occurred. All 693 images and prior immutable paths/source objects remain.

GitHub gets this handoff, additive current-log/UI/release notes and the separate pending-history observation only. Preserve every prior document and separate Coloring work. Never publish app bundles, photographs, private captures, credentials, student records or fixtures. Use a compatible forward repair and capture actual current main/art/GitHub before later work. **Next handoff: V43.**
