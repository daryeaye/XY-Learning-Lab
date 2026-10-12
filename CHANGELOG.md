# XY Learning Lab change log

This is the shared update log in the private `daryeaye/XY-Learning-Lab` repository. GitHub holds documentation and the original Unit 1 reference files; Cloudflare holds the application. This log is not the full editable source or an automatic deployment lock.

## October 11, 2026 — website update deployed; verified October 12

Status: deployed and verified. Baseline `775f9822-44c1-4a13-b1fe-79ef618c09bc` → release `0e8f843a-18cf-4163-a100-5bb841c15d3c`, serving 100% of traffic. Preparing chat: “Review Cloudflare setup.” Deployment: `b909d74a-373a-4378-8022-ed13c7ca6835`.

- The complete Grades header stays visible during page scrolling, with synchronized column widths and horizontal scrolling. Existing header actions continue to use the original controls; the floating row hides behind dialogs.
- YY announces newly earned outfit tiers with “Yay! We unlocked new looks together! Come check them out!” It observes the existing unlocks determined by teacher settings, rather than hard-coding 20/40/60/80. First-load history is quiet, multiple new tiers produce one message, and polling/reloads do not repeat seen tiers in the same browser. Seen IDs are stored per student locally; this is not cross-device notification synchronization. The message waits while YY Maker is open, and stale background responses cannot overwrite Maker state.
- All six student work tabs have rounded upper corners. The full selected content panel matches its existing light blue/red/purple/teal/green/gray tab palette, including empty states.
- This was a frontend-only update on the exact current Cloudflare build. Worker bytes, the newer embedded bank, bindings, asset routing and logging settings were preserved. All 1,558 original non-HTML public assets were retained byte-for-byte, with new hashed entrypoints/chunks; older chunks remain for cached clients. No production database migration, student-record edit or R2 content write was performed.
- Validation: 46 YY behavior groups and 15 hook scenarios; 18 UI fixture checks; local app checks for Grades alignment/actions/dialogs, six palettes and the exact YY announcement. Both live domains passed 26 combined GET/HEAD checks (16 hash comparisons) on October 12 at 09:02 EDT. Live browser checks confirmed all six panel colors and a complete 11-cell frozen Grades row at page scroll 522 px. YY threshold earning was tested with fictional local data; live student points were not altered.
- Cloudflare was rechecked immediately before publishing. A fresh read-only check on October 12 at 09:03 EDT confirmed the release remains active at 100% with settings/bindings preserved.

See `RELEASES.md` for hashes, checks and recovery. `docs/PENDING-UPDATES.md` now preserves the completed requirements. Future accounts must read this log, download the then-current Cloudflare build, preserve all other behavior and coordinate one publisher at a time; a log does not merge code or enforce a lock.

## October 11, 2026 — repository setup and current build captured

- Renamed `daryeaye/G7` to `daryeaye/XY-Learning-Lab` and confirmed it is private. The initial shared log and agent instructions are recorded in this documentation commit.
- Read-only acquisition confirmed active version `775f9822-44c1-4a13-b1fe-79ef618c09bc` at 100% of traffic; a second check matched it. Captured the Worker, safe configuration metadata and 1,559 public files (338,181,889 bytes) as the update baseline.
- The live embedded Unit 1 bank has 104 types / 520 problems. The preserved repository reference JSON has 96 types / 480 problems and must not overwrite the newer live bank.

No new application version was deployed by this setup/capture step. See `RELEASES.md` for identifiers and verification evidence.

## October 9, 2026 — observed other-account deployment

Cloudflare version: `775f9822-44c1-4a13-b1fe-79ef618c09bc`. Deployment history describes comic draft opacity validation, Saved button state, two-try peer answers, required feedback/IP grades, white selected tabs, teacher share links, and scuba/winter buddies with matching poses. These changes were reported by that deployment's message; they were not authored or fully verified by this chat. White selected-tab styling is superseded by the user's new matching-color request.

## October 8, 2026, afternoon — observed restoration release

Cloudflare version: `81196c29-157e-451f-b427-8a32926ce01e`. Its message describes restoring the morning compact editor, fuzzy feet shadows, cropping and future bank rules, enlarging six Big Item thumbnails, and retaining afternoon gallery/grading updates. This records a later restoration, not this chat's original release or proof that every following build retained its behavior.

## October 8, 2026, morning — this chat's deployed release

Cloudflare version: `12618fc6-4548-4676-9e6a-86451ebd04d6`, based on `561a20cf-7f0e-4a9a-b869-5fe4c75cfa61`.

- Compact comic library tabs, three-column background thumbnails and one-row Save Draft / Finish & Publish controls.
- Project title `Project#1: My Integer Story`, smaller copyright footer, and the reminder “Do not show the ANSWER of the word problem.” above the third panel only.
- Automatic small, soft oval character foot shadows; white outline thickness scales with character size.
- Non-destructive character cropping with eight black handles, Done/Reset controls, saved crop metadata and gallery/export support.
- Numeric grading accepts valid thousands-grouping commas while preserving sign and malformed-grouping checks.
- Units 2–8 remain unavailable until their own banks contain problems. Future lesson Comic-Con drafts select eligible word problems of at least 100 characters across stars 1–5; Unit 1/Project#1 behavior remains scoped separately.

At this release's baseline, preservation checks retained the then-current grading settings, introduction/gallery video and teacher override handlers. Local checks covered grading, future-bank validation, crop persistence/geometry, curriculum and shadows; live frontend hashes passed on both domains on October 8. No demo accounts/database, schema migration or D1/R2 content change was included. These are historical results, not a claim that every later build retained them. Each new update must preserve the exact current baseline outside its requested changes.

## October 12, 2026 at 12:37 EDT — Unit 2 JSON uploaded; not deployed

Status: uploaded to GitHub for the other account to integrate later. No Cloudflare application update or fresh live-version verification was performed.

- Added `grade7_unit2_algebraic_expressions.json` beside the preserved Unit 1 reference file. The upload is byte-identical to the final local review JSON; SHA-256: `1d746556d4c283ee019bef4b2c7e614e4849e893ddcc6fb9e1abeb8fa26648fb`.
- Unit 2 contains 125 types, IDs 105–229 without gaps, ten A–J variants per type, and 1,250 problems. IDs continue after the current Unit 1 bank's 104 types, not the older 96-type repository reference. Four to eight types are available for each lesson/star; no five-star types.
- Solutions use only necessary simplification stages, keep signed full terms, model word-problem quantities individually, and put any negative-one factoring division separately at the end. Both factoring methods and rotating example references are included.
- Local validation passed all 1,250 exact answers, 190 multiple-choice uniqueness checks, 1,680 solution equalities, example references, numbering, geometry domains, factoring divisions, and 12,820 KaTeX math runs.
- The JSON remains a review bank. Application schema integration and live algebraic expression/input checking are not implemented by this upload. Before online integration, the other account must follow the existing current-Cloudflare-baseline and preservation requirements, retain the newer Unit 1 bank, and test the new checking logic locally.
- Recovery: remove only the new Unit 2 file if necessary; the existing reference bank and application files were not replaced. No new PDF or handoff file was generated.
