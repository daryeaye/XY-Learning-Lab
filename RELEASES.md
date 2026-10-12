# XY Learning Lab release record

Shared deployment ledger for `daryeaye/XY-Learning-Lab`. This private repository stores the log and reference files, not the full application. Each update starts from the exact current Cloudflare Worker, frontend and assets. Cloudflare version IDs identify application builds; Git commits identify log revisions here.

## October 11 current-build acquisition and pending update

- Status: current baseline captured and rechecked; three website changes in progress; not yet deployed. Repository renamed and privacy confirmed; the initial shared log and agent instructions are recorded in this documentation commit.
- Baseline/active version: `775f9822-44c1-4a13-b1fe-79ef618c09bc`, 100% traffic.
- Worker captured October 11 at 20:48 Eastern (`2026-10-12T00:48:25.770Z`); version rechecked at 20:51 Eastern (`2026-10-12T00:51:25.363Z`) and matched.
- Worker SHA-256: `5c9711d46fcab33bf11841cba305e971268b05c697c8d1545c6e44b6ef2eb846`.
- Frontend entrypoints: `assets/index-BPSg6P3l.js` and `assets/index-BLj_e8cd.css`.
- Acquisition: 1,559 public files, 338,181,889 bytes; safe metadata preserved. The capture used read-only requests.
- Current bank: 104 types / 520 problems. Legacy repository reference: 96 / 480; leave the current embedded bank intact.
- Planned changes: page-scroll Grades header, YY outfit-tier announcement using teacher thresholds, rounded upper tab corners and matching student-panel colors.
- Local recovery baseline: `work/current-production-2026-10-11/`, including `worker-original.mjs`, `public/`, `worker-acquisition-report.json`, `public-download-report.json`, `runtime-dependency-audit.json`, `worker-metadata-redacted.json` and `final-version-check.json`.
- Result version, deployment ID, live verification and log-upload commit: pending. Recheck the baseline again immediately before publishing; this acquisition check does not replace that check.

| Event | Eastern time | Cloudflare version | Source identity / evidence |
| --- | --- | --- | --- |
| Baseline for this chat's October 8 release | Before the morning release | `561a20cf-7f0e-4a9a-b869-5fe4c75cfa61` (version 114) | Recovered production Worker and frontend; original editable source commit unknown. |
| This chat's release | Verified October 8 at 07:03 | `12618fc6-4548-4676-9e6a-86451ebd04d6` (version 115) | Local release package and live HTTP/hash verification preserved. |
| Later restoration | October 8 at 14:35:31 | `81196c29-157e-451f-b427-8a32926ce01e` | Deployment message describes restoring morning features while retaining newer work. Source commit unknown. |
| Other-account release, confirmed still active October 11 | October 9 at 15:13:26 | `775f9822-44c1-4a13-b1fe-79ef618c09bc` | Deployment `3865fe26-ecc3-41c2-81d3-e2475046e1f0`; original source commit unknown. |

## First documented release: October 8 morning

- Baseline: `561a20cf-7f0e-4a9a-b869-5fe4c75cfa61`.
- Result: `12618fc6-4548-4676-9e6a-86451ebd04d6`.
- Source: recovered compiled production bundles plus guarded patches; no editable-project Git commit available.
- Package: `work/deploy-2026-10-08/src/worker.mjs`, `public/`, `wrangler.jsonc` and `release.json`.
- Worker SHA-256: `2f83452b0041a6f6b249774a8d9d55d9e5d32a0460a93ee0de9ad21ed5c621e3`.
- Main JavaScript SHA-256: `48653fcc29ca92a594b348111dd6a28adc24531c99ac63263bc59ec70b334d4e`.
- CSS SHA-256: `f5c71808df724bb2e5fb45e00a5b2839dd590af58957e55fcc0dcdb096b50ef2`.
- HTML SHA-256: `a3b539d2b0772afa10698056d0f65d2497f11374a529dd66cc6ba401f0ca8f36`.
- Validation: 82 grading groups, 124 future-bank/planner cases, 32 Worker crop-validation cases, 325 crop geometry cases, seven curriculum regressions, shadow checks and live teacher/student frontend hash verification. Packaging audit reported no missing static references.
- Data/configuration: existing bindings and variables retained; no schema migrations or D1/R2 content writes; fictional local users/database excluded.
- Evidence: `worker-build-report.json`, `frontend-preservation-audit.json`, `frontend-rebase-report.json`, `release-packaging-audit.json`, `live-http-verification.json` and `live-comic-editor.png` in that release folder.
- Recovery limitation: this is a historical build. Redeploying it without reconciliation can remove later features. Cloudflare code rollback does not roll back associated database/media state.

## Required record for every new release

```text
Status: planned / built / uploaded / deployed / verified / failed
Date/time with timezone:
Preparing account/chat:
Shared-log repository, branch and log commit:
Current Cloudflare Worker/frontend/assets capture location and hashes:
Original source commit, only if used and known:
Baseline Cloudflare version(s):
Changes and affected features:
Checks performed and results:
Database, asset and configuration changes:
Uploaded version ID:
Deployed version(s) and traffic percentages:
Deployment ID:
Live verification:
Updated log location available to the other account:
Recovery Cloudflare version/local build and known limitations:
```

Before every update, read this log and capture the exact currently active Cloudflare build. Preserve all unrequested features and configuration. Immediately before publishing, recheck the active version and stop on a mismatch. Coordinate one publisher at a time: the log and version check do not implement a lock or prevent a simultaneous deployment race. Record the resulting build/version and share the updated log afterward. Keep compiled backups separately; original source availability is not a prerequisite for the user's chosen workflow. Exclude credentials and student/database content from this repository.
