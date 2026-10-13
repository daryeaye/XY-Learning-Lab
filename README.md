# XY Learning Lab — shared update log

## Latest release — October 12, 2026, 20:33 EDT

**This entry supersedes older current-version and bank statements; preserve their historical records.** Deployed and verified Cloudflare version `bb8c766d-9773-455d-a99b-b988b936b677`, deployment `52b7d77e-15d7-413d-a6e8-a5d85a4f122b`, 100% traffic. Exact live baseline was `b7b00f23-fbea-4aaa-bde6-02c3f642a2a5`. Current Unit 2 reference has 129 types / 1,290 questions, revision `6f4b2094d8a59e0bd5615e1f8876e265fd38260f58181587ba94a0dca63e6f20`, schema `2.4.0-geometry-word-solutions`, IDs 105–235 with retired 144 and 213. All three older banks remain embedded for saved assignments.

Read [Handoff Version 3](docs/UNIT2-HANDOFF-v3.md) for the connection among the original test collection, seven annotated lesson PDFs and latest reviews. The latest sixteen comments, twenty-question Unit 2 Comic-Con preset, teacher-approved algebraic Comic-Con checking and shared underlined See Solution links are implemented. Runtime, bindings, secrets, asset configuration and unrelated features were preserved. See CHANGELOG.md and RELEASES.md for checks and recovery.

This private repository holds the Unit 1 and Unit 2 curriculum reference files and the shared update history for XY Learning Lab.

**Cloudflare remains the live deployment location. This repository is a log, not the application's complete editable source project.** The original `grade7_unit1_rational_numbers.json` and `scoreboard.png` are preserved. The reference JSON has 96 problem types / 480 problems; the live October 11 Worker embeds a newer bank with 104 types / 520 problems. Do not replace the live bank with the older reference file.

## Latest recorded release

Unit 2 signs/distribution review deployed October 12, 2026, 19:23 EDT: Cloudflare version `b7b00f23-fbea-4aaa-bde6-02c3f642a2a5` at 100% traffic. New selections use **129 types / 1,290 questions** with ten variants each. Types 139/140/142/152/154 were revised, Type 157 moved to four stars, Types 158–162 moved to Lesson 2-4, and new word-problem Types 230–234 were added to Lesson 2-2. Both previous bank revisions remain available for existing assignments. Unit 1 and all current app features/configuration are preserved. Details: [CHANGELOG.md](CHANGELOG.md), [RELEASES.md](RELEASES.md), and [Unit 2 handoff](docs/UNIT2-HANDOFF.md). Query Cloudflare again before future work; this recorded version is not a substitute for a fresh check.

## Before either Codex account updates the app

1. Read `CHANGELOG.md`, `RELEASES.md` and `docs/PENDING-UPDATES.md`.
2. Query the active Cloudflare version and download that exact current Worker, frontend and assets. Preserve safe configuration metadata and record the baseline version and content hashes locally.
3. Make the requested changes on that latest build. Preserve all other layout, behavior, bindings, routes, settings, data and assets. If using a separate editable source folder, first merge the current deployed changes into it and verify them; do not deploy an older folder because it has newer changes of its own.
4. Test both the requested changes and previously recorded features. Immediately before deployment, query the active version again. Stop and reconcile if it has changed.
5. Publish one update at a time. Record the resulting Cloudflare version, baseline, changes, checks and recovery information here. Hand this updated log to the other account before its next update.

The version check prevents an ordinary stale-baseline update only when every publisher follows it. A shared deployment queue is needed if both accounts publish concurrently. The log itself does not merge code or enforce a lock.

Cloudflare backups may be compiled builds. Downloading one does not reconstruct the original React project automatically. This workflow intentionally keeps the application out of GitHub; preserve the actual tested build separately in Cloudflare and local backups.

No passwords, tokens, student records, database exports or demo accounts belong in this repository.

