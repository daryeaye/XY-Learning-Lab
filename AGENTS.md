# Agent instructions — XY Learning Lab update log

The user deliberately uses GitHub for documentation only and keeps application deployments on Cloudflare. Do not move the full app into this repository unless the user later requests that.

Read README.md, CHANGELOG.md, RELEASES.md and docs/PENDING-UPDATES.md before updating XY Learning Lab. Take the current active Cloudflare Worker version, frontend assets and safe deployment metadata as the baseline. Never redeploy an independent older project folder over it. If using original editable source, merge and verify all intervening deployed changes first.

Preserve the exact existing layout and features outside the requested change. Record the active version at the start, recheck immediately before publishing, and stop on a mismatch. Coordinate with the other account so only one publishes at a time. A log is not an implemented lock or automatic synchronization.

Append a factual log entry after every update. Distinguish planned, implemented, uploaded, deployed and verified states. Include baseline/result Cloudflare versions, timestamp/timezone, change summary, checks, material limitations and recovery information. Never mark pending work as deployed.

The legacy bank JSON in this repository is older than the October 11 live bank (96/480 versus104/520); do not overwrite the current embedded bank with it. Preserve the original reference files.

Exclude credentials, OAuth files, API tokens, real student data, DB exports, demo databases and node_modules. Repository privacy does not replace these exclusions.


Unit 2 is activated across lessons 2-0–2-6, with unit-specific exact grading and source-revision/paired-example reservations. After the October 12 teacher review, new selections use 124 types / 1,240 questions; the original 125-type / 1,250-question revision remains embedded for existing assignments. Type 144 is retired for new selection. Never renumber or discard live identities or pinned revisions. Read docs/UNIT2-HANDOFF.md before changing those contracts. Preserve the original reference JSONs and all currently deployed Unit 1 checking. A later Unit 2 source upload is not an app deployment.

Latest October 12 signs/distribution review supersedes the current count above: 129 types / 1,290 questions, revision `608a257142cba03e3204ce256b4b32ff91a720175544938e4f13573070b8959c`. The original 125/1,250 and previous review 124/1,240 banks are both still embedded. Preserve all three revisions. Type 157 is four stars for new selections, but old pins keep three stars; Types 158–162 now default to Lesson 2-4; IDs 230–234 are new Lesson 2-2 distribution contexts. Never replace saved old questions or their star/lesson metadata with the new same-ID content. The current frontend/adapter already accepts dynamic bank counts; do not rewrite other app features.
