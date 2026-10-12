# Agent instructions — XY Learning Lab update log

The user deliberately uses GitHub for documentation only and keeps application deployments on Cloudflare. Do not move the full app into this repository unless the user later requests that.

Read README.md, CHANGELOG.md, RELEASES.md and docs/PENDING-UPDATES.md before updating XY Learning Lab. Take the current active Cloudflare Worker version, frontend assets and safe deployment metadata as the baseline. Never redeploy an independent older project folder over it. If using original editable source, merge and verify all intervening deployed changes first.

Preserve the exact existing layout and features outside the requested change. Record the active version at the start, recheck immediately before publishing, and stop on a mismatch. Coordinate with the other account so only one publishes at a time. A log is not an implemented lock or automatic synchronization.

Append a factual log entry after every update. Distinguish planned, implemented, uploaded, deployed and verified states. Include baseline/result Cloudflare versions, timestamp/timezone, change summary, checks, material limitations and recovery information. Never mark pending work as deployed.

The legacy bank JSON in this repository is older than the October 11 live bank (96/480 versus104/520); do not overwrite the current embedded bank with it. Preserve the original reference files.

Exclude credentials, OAuth files, API tokens, real student data, DB exports, demo databases and node_modules. Repository privacy does not replace these exclusions.

