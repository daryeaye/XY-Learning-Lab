# Handoff V26 — Assignment Pass, grade editing and interface updates

## Current verified release

Main Worker **0486baff-9a80-498f-84ab-efcce0a38bd2** (**163**) is active at **100%**, deployment **d358d9fa-0eab-4563-9da5-693e442e45c1**, activated **2026-10-24T12:42:41.288568Z** (October 24, 2026, **08:42:41 AM EDT**). `worker.mjs`: **9,910,878 bytes**, SHA-256 **5643f6101dd03abcaf403f415fceb6dfb257a42f390f27eb253feeedf5fbace9**. The retained `_headers` module is 233 bytes, SHA-256 **6a3077bed172e1fd2632fb114f786e51cb3e640c692d3ad673952bf8ab6dc387**.

Artwork service **xy-yy-art-v24** remains **3d6c8e1f-d394-49fa-9fee-a37c079b514a** (3), deployment **42010797-dd25-4fc3-b7bb-d494c150545d**, 100%, with all **153 images**. It was not redeployed for V26.

Read this file, [Handoff-v25.md](Handoff-v25.md), [docs/RELEASE-CHECKLIST.md](docs/RELEASE-CHECKLIST.md) and the retained preservation instructions before further changes. Freshly capture both active/latest services and current GitHub before editing. **Next handoff: V27.** A handoff number does not rename older valid runtime namespaces.

## Requested changes now live

1. **Boards Up:** gameplay scoring, navigation, timer and answer controls retain their appearance during hover/press. Actions still work, disabled states remain and keyboard focus is visible. This is scoped to Boards Up.
2. **Grades heading:** removed only the redundant small `Project 2` subtitle under the descriptive Playground column title.
3. **YY Maker:** the customization dialog's text uses `Love Ya Like A Sister`, including labels, tiers, actions and change allowances.
4. **Student tabs:** all six selected assignment tabs connect to their category-colored panel through a dark 3px outline. The selected junction has no separator; its one-pixel fill extension avoids clip-path antialiasing at fractional coordinates.
5. **Assignment Pass:** teacher Grades now has a button beside Summary Generator and Export CSV. Select a class, check multiple students, then choose one current/late regular lesson assignment. The human explicitly confirmed **regular lesson assignments only**, excluding projects and assessments. Applying a pass shows exactly **Exempted**. Existing passes can be removed, including after the deadline. Saved attempts and numeric grades remain intact; no grade, submission or YY reward is fabricated. Differentiated selections apply to eligible child assignments as a group. Exempt work leaves missing/past-due reports and appears in Completed Work.
6. **Editable grades:** teachers can edit an overall lesson grade on blur for not-started, in-progress and completed work. An authoritative additive override preserves native grades, attempts, responses, progress and student release gates. It does not submit the student's work. Normal grade history records the edit; NS history uses a null attempt ID rather than a fabricated attempt.
7. **Summary Generator:** the first choice counts missing-or-incomplete regular lesson assignments; the second counts incomplete regular assignments after their final deadline, including the late-work deadline when enabled. Differentiated groups count once. Projects, assessments, exemptions and future work are excluded from those two reports. The third grade-threshold choice retains its existing scope.
8. **Student Playground:** the assigned activity fills the usable area between the brand row and copyright. The actual scene and controls scale responsively, including small landscape/portrait viewports. Teacher editor sizing is unchanged.
9. **Playground grade review:** teacher per-student review uses a two-column `Page` / `Answer from the Student` table. It includes saved math answers, custom choices/placement and final work; missing fields show `IP`. Raw text is escaped by React. It does not show correctness or solution keys, load an interactive activity, or generate a PDF whenever review opens. Global teacher introduction/answer-key and worksheet PDF tools remain available.
10. **YY history:** entries from **2026-10-24T01:42:23.629Z**, the initial V26 build cutoff, display month/day and local 12-hour time; earlier entries keep the existing year/date display. No historical stored timestamp was rewritten or invented.

## Explicit additive migration

The production dashboard's schema-only read confirmed `grades.attempt_id` is NOT NULL and **`grade_history.attempt_id` is nullable**, matching the NS override design. The dashboard then successfully executed exactly these additions, and a second `sqlite_master` read confirmed their complete definitions:

```sql
CREATE TABLE IF NOT EXISTS xy_v26_grade_overrides (
  assignment_id TEXT NOT NULL,
  student_id TEXT NOT NULL,
  teacher_id TEXT NOT NULL,
  points REAL NOT NULL CHECK(points >= 0),
  updated INTEGER NOT NULL,
  PRIMARY KEY (assignment_id, student_id)
);
CREATE TABLE IF NOT EXISTS xy_v26_assignment_passes (
  student_id TEXT NOT NULL,
  assignment_id TEXT NOT NULL,
  teacher_id TEXT NOT NULL,
  class_id TEXT NOT NULL,
  created INTEGER NOT NULL,
  PRIMARY KEY (assignment_id, student_id)
);
CREATE INDEX IF NOT EXISTS xy_v26_assignment_passes_teacher_class
  ON xy_v26_assignment_passes(teacher_id, class_id, student_id);
```

No existing student records were edited or used as production test records. Do not drop these tables or override/pass records during a future release. There are **no runtime schema writes on startup or GET requests**. Existing CLI authentication could read Workers but D1 queries returned Cloudflare 7403; the human signed into the dashboard, and the migration/schema verification used its visible SQL console without exporting credentials or expanding permissions.

Pass operations enforce active teacher/class ownership, current class/audience, ordinary lesson mode, accommodation level, snapshot dates, class opening dates and current/late deadlines. Validate the entire selection before the guarded atomic insert. Expired valid flags remain effective/revocable; changed mode/audience, archived/transferred students and disallowed levels cannot activate stale flags. Revoke reveals untouched original work.

Manual grade reads and writes validate both live and snapshot modes. Metadata and completion displays use the same validated override helper, so an ordinary override cannot leak into a later assessment/project conversion. The V26 interception boundary authenticates with a read-only joined session/identity query, preserving the distinction between account ID and roster student ID. It does not call native `/me` and accidentally refresh denied accounts' YY allowances. Native `/me` itself remains unchanged.

## Delivery and preservation

Started from fresh healthy V25 main **dbd1d4dd-ee59-42e3-8ca9-d06b68a6ff83**, SHA-256 **4f11edcfabaf4704fa1de5ff0ed696e0a11593fd163eae0a9fd9d39cc8590322**, plus its exact headers, public dependencies and both services' configuration. Reversing guarded Worker edits recovers that exact original source. All bank snapshots and earlier helpers before the native Worker remain byte-identical. Preserve Unit 1, all eight retained Unit 2 revisions, snapshots, saved work, YY IDs/ownership/reactions/047 bare-head art and all V21 source objects.

The explicit new connected alias set is under **`/api/v26/static/20261024a/`**:

- `native/index-studentv26.js` — the single canonical app/React owner.
- `project-two-integration.js` — imports that same owner from outside `native/`.
- `native/GradebookReview-studentv26.js`.
- `native/index.es-studentv26.js`.
- `native/jspdf.es.min-studentv26.js`.

The student iframe's changed HTML/app/CSS use `/api/project-two/static/v26/student/`; other iframe helpers/art remain pinned to retained V17 sources. Old immutable URLs stay served. Stable `/assets/index-studentv14cc5e9397ba56.js` remains `no-cache` and imports the new canonical entry; requests with the old bootstrap ETag return the new body. Other older CSS/helper namespaces remain valid.

Only the main Worker was staged/activated. The original complete managed ASSETS namespace was retained; no partial public capture was uploaded as a replacement. Staged and active readback confirmed exact assets/routing/headers, all seven bindings including private `YY_ART`, compatibility `2026-09-01`, runtime, observability, hourly cron, custom domains and disabled workers.dev/previews. Art service configuration, module hashes and active/latest heads stayed unchanged.

## Verification and limits

- Fresh GitHub/both-service checks before upload and activation; one publisher. Official Wrangler 4.148.0 dry run, inactive upload, staged readback and active readback passed. The staged generic content response observably matched the candidate bytes while V25 remained active; do not generalize that endpoint into an undocumented version-pinned API.
- Exact candidate Worker and `_headers` hashes matched staged and active content. Post-activation audit confirmed deployment, configuration and art preservation, with stable heads during each readback.
- **82** actual assembled-Worker static/hash/header/ETag/recursive graph checks passed: one app/React owner, connected five-module alias set, no missing imports.
- **78** fictional SQLite/native Assignment Pass checks; **64** grade/summary/override checks; **71** actual outer-Worker/session/API checks. NS/IP edit and apply/revoke fixtures preserve all original attempts, responses, snapshots, native grades and YY tables exactly. Denied-account stale-month cases perform no writes.
- Project 2 preparation: **32** preservation/inverse checks and **18** actual adapter/model API checks. Published-body browser replay passed **34** Project 2 checks across four desktop/mobile sizes and **46** misc UI checks, including exact pixels across all six selected tab junctions, font availability, dates, multi-student apply/revoke and functioning Boards Up hover/press/focus/actions.
- **24 full public bodies across both app domains** matched tested sizes/hashes/MIME/cache. All 20 JS/CSS ETags matched after weak-prefix normalization; four HTML responses omitted ETag but matched full bytes. Both stale-bootstrap ETag requests returned the new body.
- The published-code startup/PDF replay passed **85 checks** with ordinary fictional teacher/student sign-in, populated dashboards/Grades, IP editing, Assignment Pass and refresh, native GradebookReview lazy view, native Worksheet Generator preview and valid Print/Save PDF, and direct/retained/reloaded teacher/student Playground routes. Every document retained one canonical app entry and a nonempty root; **zero unhandled/React errors**. The optional PDF `index.es` helper was separately imported/evaluated because the worksheet's `addImage` print path does not use it.
- A fresh actual signed-in teacher tab also loaded populated live Grades and the Assignment Pass catalog successfully. This was read-only; no real grade/pass was applied. The user's original open lesson tab was left untouched.

Browser engine scope is **Chromium 156.0.8078.47**. Full workflow replays used exact published code plus retained captured V25 fallback and populated **fictional intercepted APIs**, with browser outbound requests blocked. They do not establish actual Safari/WebKit behavior, every real student/account path, or whole-account CPU performance. The known baseline `/source-sans-3.ttf` missing-font fallback remains; no new code/media dependency failure was found. Preserve these distinctions when describing coverage.

## Recovery and next work

Healthy pre-V26 main **dbd1d4dd-ee59-42e3-8ca9-d06b68a6ff83** remains the rollback target if needed. Leave the additive tables dormant and retain their records during rollback; do not drop data. **Version 161 (`42c9ced2-c616-4597-b299-896623db93f2`) is known bad** and must not be restored as healthy. Do not roll back the art service for a main-app issue. Verify exact active/latest heads, configuration, canonical graph and representative signed-in routes after recovery.

This GitHub update contains documentation only, not complete app source, bundles, captured data, credentials, private screenshots, PDFs, fixtures or dependencies. Continue the standing workflow: read the highest handoff and current logs before edits, verify the live result after deployment, and update the handoff/shared logs under the human's existing authorization.
