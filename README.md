# XY Learning Lab — shared update log

This private repository holds the Unit 1 and Unit 2 curriculum reference files and the shared update history for XY Learning Lab.

**Cloudflare remains the live deployment location. This repository is a log, not the application's complete editable source project.** The original `grade7_unit1_rational_numbers.json` and `scoreboard.png` are preserved. The reference JSON has 96 problem types / 480 problems; the live October 11 Worker embeds a newer bank with 104 types / 520 problems. Do not replace the live bank with the older reference file.

## Latest recorded release

Unit 2 content review deployed October 12, 2026, 16:58 EDT: Cloudflare version `0348716b-46e6-4592-a5d4-ca2cb1048e3b` at 100% traffic. New selections use 124 types / 1,240 questions; existing assignments retain their original 125-type revision. The three expression-writing replacements, shorter wording, math exponent target and removal of Type 144 are live. Unit 1 and current app features are preserved. Details: [CHANGELOG.md](CHANGELOG.md), [RELEASES.md](RELEASES.md), and [Unit 2 handoff](docs/UNIT2-HANDOFF.md). Query Cloudflare again before future work; this recorded version is not a substitute for a fresh check.

## Before either Codex account updates the app

1. Read `CHANGELOG.md`, `RELEASES.md` and `docs/PENDING-UPDATES.md`.
2. Query the active Cloudflare version and download that exact current Worker, frontend and assets. Preserve safe configuration metadata and record the baseline version and content hashes locally.
3. Make the requested changes on that latest build. Preserve all other layout, behavior, bindings, routes, settings, data and assets. If using a separate editable source folder, first merge the current deployed changes into it and verify them; do not deploy an older folder because it has newer changes of its own.
4. Test both the requested changes and previously recorded features. Immediately before deployment, query the active version again. Stop and reconcile if it has changed.
5. Publish one update at a time. Record the resulting Cloudflare version, baseline, changes, checks and recovery information here. Hand this updated log to the other account before its next update.

The version check prevents an ordinary stale-baseline update only when every publisher follows it. A shared deployment queue is needed if both accounts publish concurrently. The log itself does not merge code or enforce a lock.

Cloudflare backups may be compiled builds. Downloading one does not reconstruct the original React project automatically. This workflow intentionally keeps the application out of GitHub; preserve the actual tested build separately in Cloudflare and local backups.

No passwords, tokens, student records, database exports or demo accounts belong in this repository.

