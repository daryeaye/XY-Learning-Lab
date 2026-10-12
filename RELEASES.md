# XY Learning Lab release record

Shared deployment ledger for `daryeaye/XY-Learning-Lab`. This private repository stores the log and reference files, not the full application. Each update starts from the exact current Cloudflare Worker, frontend and assets. Cloudflare version IDs identify application builds; Git commits identify log revisions here.

## October 11 update — deployed; verified October 12

- Status: deployed and verified. Preparing chat: “Review Cloudflare setup.”
- Repository: private `daryeaye/XY-Learning-Lab`, branch `main`; initial shared-log commit `7104e2c927c4a23278c2822e39afd3349a0f21c6`. The final release record is in the Git commit containing this entry.
- Baseline version: `775f9822-44c1-4a13-b1fe-79ef618c09bc`; previous deployment `3865fe26-ecc3-41c2-81d3-e2475046e1f0`.
- Result version: `0e8f843a-18cf-4163-a100-5bb841c15d3c`, 100% traffic.
- Deployment ID: `b909d74a-373a-4378-8022-ed13c7ca6835`.
- First post-deploy active-version check: October 11 at 21:17 EDT (`2026-10-12T01:17:55.881Z`). Fresh confirmation: October 12 at 09:03 EDT (`2026-10-12T13:03:07.966Z`), same active/latest version and 100% traffic.
- Source: recovered current compiled Worker/frontend plus guarded frontend patches. No original editable-project Git commit is available. Application source/build files are intentionally not stored in this repository.
- Changes: complete page-scroll Grades header; newly unlocked outfit-tier announcement from teacher-configured unlocks; rounded upper tab corners and matching full-panel colors.
- Preservation: Worker byte-identical; embedded bank remains 104 types / 520 problems; all 1,558 original non-HTML assets byte-identical; 1,567 final public files, including new hashed JS/CSS/chunks and preserved cache headers. Existing bindings, variables, asset routing and observability/logpush configuration retained. No schema migration, production student-record edit, database export or R2 content write. Test/demo files remain outside public assets.
- Checks: 46 YY behavior groups + 15 actual hook scenarios, including stale successful/failed requests after Maker closes; 18 UI fixture cases; actual local app checks for header alignment/actions/dialogs, six tab palettes and exact YY message. Independent final bundle review found no blocking issue.
- Live HTTP checks: October 12 at 09:02 EDT (`2026-10-12T13:02:14.592Z`), 13 GET/HEAD requests per domain, all passed. HTML, main JS, CSS and all five lazy chunks match staged hashes on teacher and student domains; expected cache/content types and unauthenticated API responses passed.
- Live browser checks: all six tab selections match their recorded palettes and rounded shapes; at vertical scroll 522 px, the full 11-cell floating Grades row was visible at top 0 with height 100.75 px. No grades, assignments or student points were edited during live verification. The YY earning scenario was verified using fictional local data, not by changing production points.
- YY notification scope: per-student browser-local seen-tier state, with quiet first load/history and one message for combined new tiers; no cross-device notification synchronization. Existing outfit/reward rules and normal buddy messages remain in use.
- Uploads `dfdba91c-83fe-441b-9ff1-d5b572feb6ee` and `36d38711-cb0f-4982-bd56-cf55fb6c4711` were intermediate review candidates and never served live traffic. Only the final result version above was published.

| Release file | SHA-256 |
| --- | --- |
| Worker (unchanged) | `5c9711d46fcab33bf11841cba305e971268b05c697c8d1545c6e44b6ef2eb846` |
| HTML | `3b5946a0f5225389b612df9286c14c9dc82c86d787135d53718178786109cc91` |
| `assets/index-xy6f9410108ee6.js` | `e2e5f4a535df9bc86798902ec43d88052b5b3b28b01d09b9c4f07ddababc32f6` |
| `assets/index-xy9c992f5b96e1.css` | `9c992f5b96e12cddd6685ec2ede0c7ff00606227635fdc33d421007be82370d2` |

Local tested release: `work/update-2026-10-11/` (`src/worker.mjs`, `public/`, `wrangler.jsonc`, `release.json`, pre/post-deploy audits and `live-http-verification.json`). These are local recovery files, not files in this GitHub repository.

Local baseline capture: `work/current-production-2026-10-11/`, including unchanged Worker, 1,559 public files (338,181,889 bytes), safe metadata and acquisition reports. Captured October 11 at 20:48 EDT; checked at 20:51 EDT; checked again immediately before publishing at 21:17 EDT (`2026-10-12T01:17:27.602Z`).

Recovery: the previous Cloudflare version is `775f9822-44c1-4a13-b1fe-79ef618c09bc`. A rollback must first be compared with the then-current release; it may remove this update or later updates. Code rollback does not restore database/media state. A compiled backup does not reconstruct original React source automatically. No rollback was performed.

## Observed earlier deployments

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
