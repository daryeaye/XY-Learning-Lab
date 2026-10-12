# XY Learning Lab release record

Shared deployment ledger for `daryeaye/XY-Learning-Lab`. This private repository stores the log and reference files, not the full application. Each update starts from the exact current Cloudflare Worker, frontend and assets. Cloudflare version IDs identify application builds; Git commits identify log revisions here.

## Unit 2 release — October 12, 2026, 14:27 EDT

- Status: deployed and verified; current traffic 100%.
- Baseline version: `0e8f843a-18cf-4163-a100-5bb841c15d3c`; baseline deployment `b909d74a-373a-4378-8022-ed13c7ca6835`.
- Uploaded/result version: `74f9e816-cf0f-4d24-b411-8fe8099444e7`. Deployment: `2f7ae037-3d28-4ad0-9def-24fc2ed764cc`.
- Fresh current Worker acquired before changes; matching immutable local baseline assets reused only after current live entrypoint/chunk hash checks. Active baseline rechecked before upload at 2026-10-12 T18:25:16.479 Z and immediately before publishing at 2026-10-12 T18:26:55.352 Z. No competing deployment was observed.
- Source: current compiled Cloudflare Worker/frontend plus guarded additive Unit 2 patches; original editable-project commit unavailable. Bank source pinned to GitHub commit `27c0f0a9a1b8395b5816996c1eb50b303b18f4aa`, blob `de28a6d23c0180a8443aebfa7332bc1fa64d6e5e`; bank SHA-256 `1d746556d4c283ee019bef4b2c7e614e4849e893ddcc6fb9e1abeb8fa26648fb`. Source reference files are unchanged.
- Final official Wrangler dry run passed; upload 6048.71 KiB /398.07 KiBgzip; Cloudflare reported Worker startup 37 ms for this upload. These are package/runtime measurements, not a monthly usage bill.
- Post-deploy active/latest version and configuration check: 2026-10-12T18:27:34.403Z, all bindings, routing and observability preserved. HTTP check: 2026-10-12T18:27:46.465Z,15GET/HEAD per domain,8 hash matches each, all passed. Live browser confirmed Unit 2 entry and type review, preserved Unit 1 lesson/project entry and student dashboard. The manual student answer-entry walkthrough remains deferred.
- Local checks: backend 121,054; grader 5,455; frontend 1,300 passing assertions. Seven protected Unit 1 sections remain byte-identical. All 1,566 original non-HTML public files remain byte-identical;1,574 final public files. No demo files/full answer bank in public assets; no database migration or production test assignment/points/media write.

| Release file | SHA-256 |
| --- | --- |
| Worker | `568c8d8020087d6eed659719245e385e45ba10ca2ec26716b5335260fc1e73af` |
| HTML | `ed7dd02bc69d15d6c05667d1366017840325411ed7829f41d08c9a975f4282ec` |
| `/assets/index-u2da675f742c18.js` | `200fb90eee7a3eb7b564dcafa6e0f63637b9c78fe657217d97328f992b0ef0d9` |
| `/assets/index-u2eec0221deabf.css` | `eec0221deabfed53bbecd5646f0909a87af7dc28ac5960814d7244a56ab15097` |

Local tested package and evidence: `work/unit2-2026-10-12/`, including `src/worker.mjs`, `public/`, `wrangler.jsonc`, `release.json`, bank/test reports and pre/post-deploy/liveHTTP audits. Baseline: `work/current-production-2026-10-12-unit2/`. These local artifacts are not application source files in this logs-only repository.

Recovery: pre-Unit 2 Cloudflare version `0e8f843a-18cf-4163-a100-5bb841c15d3c`. Compare the then-current release and log before rollback; a blind rollback can erase later features and remove support for newly created Unit 2 assignments. Code rollback does not restore DB/media data. Preserve compatible bank handling once Unit 2 records exist. No rollback performed.

Contracts, limitations and receiving-account instructions: [docs/UNIT2-HANDOFF.md](docs/UNIT2-HANDOFF.md).

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

## Unit 2 content review — October 12, 2026, 16:58 EDT

- Status: uploaded, deployed at 100%, and verified. Preparing chat: teacher's seven annotated Unit 2 review comments and handoff v3.
- Fresh baseline: `74f9e816-cf0f-4d24-b411-8fe8099444e7`, deployment `2f7ae037-3d28-4ad0-9def-24fc2ed764cc`. Acquired 2026-10-12T20:33:56.790425Z; exact Worker SHA-256 `568c8d8020087d6eed659719245e385e45ba10ca2ec26716b5335260fc1e73af`.
- Uploaded/result version: `0348716b-46e6-4592-a5d4-ca2cb1048e3b`; deployment `f3f1c9de-bc57-463f-9e69-c6a23bde3dc1`. Immediate pre-deploy baseline check: 2026-10-12T20:58:35.737035Z. Post-deploy active/config check: 2026-10-12T20:59:17.808559Z.
- Source: captured then-current compiled Worker/frontend/assets plus scoped content and revision-routing patches; no original editable-project commit used. Shared-log baseline `a804393d983c5bf8a2b4f86e1139f9ae8b3917c6`. Original source revision `1d746556d4c283ee019bef4b2c7e614e4849e893ddcc6fb9e1abeb8fa26648fb` is embedded unchanged alongside current revision `929816201a727134cd3c6830eb2932df8c219d3eb8fbf622a69f43297a3d15cd`.
- Scope: Type 110 math target; coefficient/constant vocabulary; three new translation types (120/121/126), ten variants each; Simplify wording; retire Type 144 without renumbering other IDs. Revised reference file has 124 types / 1,240 questions; old 125 / 1,250 revision is retained for existing work.
- Local tests: 19,596 passing assertions. Includes all current/retained expected answers and wrong mutations, exact snapshot/example/assessment resolution, both revisions' lesson selection and retries, mixed Daily Challenges/assessments, unsupported revision errors, and Unit 1/source preservation. These are assertions, not individual user walkthroughs.
- Publication: official Wrangler versions dry run passed; 9,589.03 KiB / 589.82 KiB gzip, startup reported 84 ms. Five unique new/modified asset contents uploaded; unchanged contents deduplicated. Uploaded single Worker module matched tested bytes exactly. Runtime/bindings and asset settings match baseline; non-versioned safe settings are unchanged except the release message annotation.
- Live checks: 24 GET checks across teacher/student domains, 22 exact hash comparisons at 2026-10-12T20:59:45.119954Z; current and retained JS, CSS, HTML and comic manifest pass. Teacher-only full-bank protections remain 401 to unauthenticated requests. Live in-app teacher browser confirmed entry and both affected lesson previews. No production test assignment or submission was created.
- Preservation: all 1,573 original non-HTML public files retained byte-for-byte; original 1,574 files plus six new JS aliases = 1,580 directory files. Existing CSS and all unrequested app layout/features remain intact. Original Unit 1 is still 104 types / 520 questions with exact original cleaner/checker; the repository's older Unit 1 reference remains untouched.
- Configuration/data: DB/R2/ASSETS and activation secret binding preserved, ASSESSMENT_ENABLED and COMIC_ENABLED remain true, compatibility date/flags and observability unchanged. Existing `/api/*` worker-first routing, SPA handling and cache rules are preserved. Previous-release asset discovery temporarily enabled previews; verified restored `enabled:false, previews_enabled:false` before publishing. No routes/domain/subscription change, database migration/export, production data mutation or R2 media write.
- Local evidence: `work/unit2-content-2026-10-12/` (fresh `baseline/`, revised JSON, tested Worker/assets, router, build scripts, `bank-audit.json`, `frontend-audit.json`, `test-report.json`, pre/post-deploy checks, uploaded-version comparison and live HTTP/screenshot evidence). These files are local, not a full app source tree in GitHub.

| Artifact | SHA-256 |
| --- | --- |
| Worker, 9,819,170 bytes | `6ef921967529e492d48f147426b5bf3037e374a9947feac75bfbf897809759ae` |
| Revised JSON | `929816201a727134cd3c6830eb2932df8c219d3eb8fbf622a69f43297a3d15cd` |
| Clean HTML | `c17761b5ba62f5cdd975687bfdfd6bec645a113c1c8a49a077546b8263f6bccd` |
| `/assets/index-u2review929816201a72.js` | `a2b26b8917e0c86e7d0673fd56bf10445e9c79768a0a6238e0f0557362102bfe` |
| Unchanged `/assets/index-u2eec0221deabf.css` | `eec0221deabfed53bbecd5646f0909a87af7dc28ac5960814d7244a56ab15097` |

Recovery: keep both source revisions. Compare then-current Cloudflare and the shared log before any repair. Returning to `74f9e816-cf0f-4d24-b411-8fe8099444e7` alone would remove support for assignments created against the new revision. Prefer a forward repair retaining new/old banks; code rollback does not restore DB/media. No rollback performed. The live student manual answer-entry walkthrough remains deferred; local tests provide the grading evidence for this content update.

## Unit 2 signs and distribution review — October 12, 2026, 19:23 EDT

Deployed and verified: version `b7b00f23-fbea-4aaa-bde6-02c3f642a2a5` at 100% traffic, deployment `e17dfa5e-f057-4b29-a4da-3b7e91771d6f`, from freshly acquired baseline `0348716b-46e6-4592-a5d4-ca2cb1048e3b`. New selections use **129 types / 1,290 questions**, IDs 105–234 with the existing retired Type 144 gap; each type has ten flat variants A–J. Source schema `2.3.2-signs-and-distribution-review`, SHA-256 `608a257142cba03e3204ce256b4b32ff91a720175544938e4f13573070b8959c`. Both previously deployed source revisions remain embedded unchanged for pinned assignments, question sets, examples, ordinary retries, assessments and Daily Challenges.

- Types 139 (3 stars), 140 (4 stars) and 142 (4 stars) now combine signs before circling each signed term and combining full like terms. The first variants are the teacher's exact expressions, including decimal coefficients in 142.
- Type 152 (2 stars) distributes over a constant minus a variable term with positive/negative outside factors. Type 154 (3 stars) distributes over a fractional variable coefficient and a fractional constant; its ten variants include fractional final answers as explicitly requested.
- Type 157 is now four stars; its questions and two methods are unchanged. Existing three-star assignments retain the prior revision.
- Types 158–162 previously belonged only to Lesson 2-2. They were removed from that default pool and preserved in Lesson 2-4 with unchanged questions, ratings and solutions. Default pools follow lesson_ids; the existing explicit Add More Types feature can still select other Unit 2 lessons intentionally.
- Added Types 230–234 to Lesson 2-2: identical grocery bags (3 stars), movie tickets/snacks, school supply boxes, recipe quantities and decimal-priced snack bundles (4 stars). No exponents and no like terms after distribution. Students write the model from the story; solutions list quantities, translate them, model one group/all groups and distribute, without unnecessary Circle/Like Terms stages. Recipe variants produce integer coefficients after distributing. All lesson/star pools remain between four and eight types.

Validation: 32,187 local assertions passed, covering all 1,290 current, 1,240 previous-review and 1,250 original-activation expected answers/wrong answers, exact pinned snapshots/examples, selections/retries, mixed assessments/Daily Challenges, changed star/lesson eligibility, content-preservation and Unit 1 preservation. 830 changed-question/solution math runs rendered strictly without errors; original expressions and displayed solution equalities were verified with exact rational polynomial checking. Live in-app teacher previews confirmed Lessons 2-1, 2-2 and 2-4; Type 157 shows four stars, new types appear, and moved types are absent from the Lesson 2-2 default cards. Both domains passed 24 bounded HTTP checks including 22 exact frontend/hash comparisons and unauthenticated bank 401 protection.

The complete current Worker was downloaded, then only an additive new source/integration and router-selection line were inserted. Removing that insertion reproduces the entire baseline Worker exactly. Unit 1 bank/checker/cleaner, all other backend code, frontend/CSS/public assets, drawing pad/comics/YY/grades/refresh/autosave/submission behavior and safe configuration remain unchanged. No production test assignment or student submission was made; the manual student answer-entry walkthrough remains deferred. No database migration, production data/media write, route/domain or subscription changes.

Release records:

| Item | Identity/result |
| --- | --- |
| Shared log baseline main | `99bb3c8cbdbf762d5a31b16f4c0caa2c5d12a1fd` |
| Fresh Cloudflare capture | 2026-10-12T23:11:52.953327Z |
| Baseline Worker SHA-256 | `6ef921967529e492d48f147426b5bf3037e374a9947feac75bfbf897809759ae` |
| Immediate pre-deploy active check | 2026-10-12T23:22:43.374085Z |
| Active/config verification | 2026-10-12T23:23:14.271351Z |
| Live HTTP/hash verification | 2026-10-12T23:23:17.654288Z |
| Result Worker SHA-256, 13,620,935 bytes | `a59defbd3a3d7ca8691330261971e283c13e9bf87bab40e20fd7d4a017e27636` |
| JSON, 10,666,053 bytes | `608a257142cba03e3204ce256b4b32ff91a720175544938e4f13573070b8959c` |
| JSON Git blob SHA-1 | `ad74a25437f70df4e9be900eebbecb4b216ee1cf` |
| Main JS unchanged | `/assets/index-u2review929816201a72.js`, SHA-256 `a2b26b8917e0c86e7d0673fd56bf10445e9c79768a0a6238e0f0557362102bfe` |
| CSS unchanged | `/assets/index-u2eec0221deabf.css`, SHA-256 `eec0221deabfed53bbecd5646f0909a87af7dc28ac5960814d7244a56ab15097` |
| Official Wrangler dry run/upload | tested Worker bytes matched; gzip 793.24 KiB; startup 62 ms; no changed asset content uploaded |

All uploaded bindings/runtime and asset configuration were compared with the fresh version; all safe current non-versioned settings match except release annotations. Preview exposure was not enabled in this release. The activation secret name remains bound without exporting its value. Local immutable frontend reuse was accepted only after fresh exact current Worker/version identity and live HTML/main/CSS/lazy/retained/comic-manifest hash comparisons.

Evidence remains local in `work/unit2-signs-2026-10-12/`: fresh baseline, revised JSON, additive build, test report, Worker-preservation record, pre/upload/post metadata, configuration comparison, live HTTP record and live lesson screenshots. Original editable React source was not used or claimed; the repository remains a shared log/reference repository.

Recovery: compare the then-current Cloudflare release and newest shared log before repair. Do not blindly restore the prior version: it cannot resolve assignments created against `608a257142cba03e3204ce256b4b32ff91a720175544938e4f13573070b8959c` or new IDs 230–234. Repair forward and retain all three banks. Code rollback does not restore DB/media state. No rollback performed. Every later publisher must recheck the actual live version immediately before publication; this log is not a lock.
