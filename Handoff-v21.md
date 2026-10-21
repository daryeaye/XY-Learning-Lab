# XY Learning Lab Handoff v21 — pending replies and unfinished exponents

**DEPLOYED AND VERIFIED — October 20, 2026, 20:49 EDT.** Worker **`03a7a250-525a-4a68-ad4d-84576cabc0e6`** (number **156**), deployment **`6446cbeb-c277-44ea-90d0-a3d2628b89ac`**, **100% traffic**. Activation `2026-10-21T00:47:37.82276Z`. Complete active module/configuration verification `2026-10-21T00:48:08.803927+00:00`. Both-domain HTTP verification `2026-10-21T00:48:16.970053+00:00`. Worker **9,639,911 bytes**, SHA-256 **`22a7d4c0628e01a72cdac3619047f961185adccf11448c8808d6493468d8405d`**.

Read V21 first for these two fixes, then [V20](Handoff-v20.md) for the current Boards Up setup/UI preferences, [V19](Handoff-v19.md) for game/storage contracts and [V18](Handoff-v18.md) for the retained-history guide. All prior content remains. Latest human direction takes precedence. Next numbered handoff: **V22**.

The owner reported that resolving/granting while a typed reply was unsent granted credit but lost the draft, and requested that either resolve button also send the written reply. The owner also asked why a displayed correct answer had been rejected. A narrowly scoped SELECT-only production audit was used for that reported example. Raw audit data stays private; no student identity, report ID, snapshot or grade record is included here. The release operator did not send a production message, change a production grade/point/attempt, or create a production test assignment. The owner's already-granted credit remains unchanged.

## Reply before resolution

The teacher's Reported Problem dialog previously rendered the composer in the shared conversation component, while its parent resolve/grant actions directly called separate endpoints. That bypassed the component's pending message. The issue was action coordination, not message delivery after a successful Send reply.

Current behavior:

| Teacher action | Result |
| --- | --- |
| Mark Resolved and Grant Credit, with a written reply | Save the reply successfully, then run the existing grant action. |
| Mark Resolved without granting credit, with a written reply | Save the reply successfully, then run the existing resolve action. |
| Either resolve action with no meaningful reply | Run the existing action without creating an empty message. |
| Send reply | Save the reply without resolving or granting credit. |
| Reply fails | Keep the report open and retain its draft; do not call grant/resolve. Show the send error. |
| Reply succeeds but resolution fails | Keep the acknowledged message in history and the report available for retry. Retrying resolution does not resend that acknowledged draft. |

The same small sequencer handles all three buttons. An immediate ref lock prevents concurrent double-click/Send-versus-Resolve requests; pending resolve buttons are disabled, the form is temporarily inert, and a status indicates the action is in progress. The draft is cleared only after the reply endpoint acknowledges success. Original ownership checks, reply limits, conversation grouping/history, poll/sequence/unmount guards, student unread behavior, grant calculation/audit and resolve notification logic remain.

The existing parent notification callback now returns a success/failure boolean, allowing the shared component to distinguish a failed resolution. Only the two explicitly marked report-resolution buttons use reply-first behavior. Report to Developer and other notification actions retain their existing semantics. Existing V20 font/spacing/compact action-row styles and labels remain.

This is a **sequential reply-then-resolution flow**, not a new combined server transaction. A successful reply can exist while a later resolution fails. There is no new cross-network exactly-once guarantee if a reply was saved but its acknowledgement was lost; existing reply endpoint behavior is retained. Do not claim a new transactional backend or message migration.

## Reason for the correct-looking answer

The visible expression was mathematically correct: `0.3(4a−6)+1.6a+2 = 2.8a+0.2`. The saved/reported answer actually ended in an **empty exponent**: `2.8a+0.2^{}`. The mathematical renderer hid the unfinished superscript, making the report look identical to the key. The strict checker received the unfinished expression and rejected it. The saved response and report payload agreed; this was not a different answer in the Work field or a decimal rounding discrepancy. The audit does not establish which keystroke created the empty superscript.

For ordinary **Unit 2 `/check`** requests, a narrow validation now detects an empty LaTeX exponent in an answer field (including whitespace/nested parts) before the existing grading/check-count/version writes. It returns:

> Finish or remove the empty exponent in your answer before checking. No attempt was used.

It does **not** erase the exponent, guess its value, loosen exact algebra/form checking or automatically grant credit. A complete `2.8a+0.2` still grades correctly. Work text is excluded; choice answers and Unit 1 behavior are excluded. The existing save/report routes may retain unfinished drafts; `/check` stops before spending an attempt. Already-locked answers keep their existing behavior, and the already-granted real example was not regraded or edited. No bank, answer key, historical snapshot, score, grade history or schema migration was performed.

This guard is scoped to the observed normal-assignment flow. Assessment-prototype and Comic-Con grading contracts were not broadened. Other unfinished syntax retains its existing checker behavior.

## Fresh baseline and preservation

GitHub parent **`f31d21bd5084e18620cc2bf97455ce0d458a7999`**, with V20 highest. The current handoff, AGENTS and shared logs were read. Fresh live capture: Worker **`c02651af-93bd-4b6d-b973-377a885d264e`** (155), deployment **`2f2afcff-99e2-4fb7-a6cd-a4f3b66e8457`**, 100%; **9,635,374 bytes**, SHA-256 **`be0f74aa3ac641bab88b7d12beb7a8fbf1cf8acbdaf1f52b8f43ee0718cc1fbd`**. All ten V20 frontend source bodies match the freshly captured live static-map metadata.

The assembled Worker is the current V20 body with one guarded `/check` validation insertion, its small helper, a changed default-export alias and an appended exact static allowlist. Removing these specific additions/restoring the alias recovers **the entire exact V20 Worker**. Every existing bank/checker implementation, source pin, snapshot, backend reply/grant/resolve route, existing R2/embedded static map, scheduled handler and unrelated code remains. In particular, preserve all Unit 1/eight Unit 2 revisions and default **`140b8ef301aec5a604e4552866a05177d967a25997e7c8de8b8d29a49a06708d`** pin, V20's six-step Boards Up setup, 60/120/200 new defaults, legacy draft mapping, supplied WebP, capsule navigation, compact controls, V18 Project 2 video/targeting, Student view, YY/reward receipts and historical messages/grades.

**Seven fresh R2 objects / 2,893,493 bytes**, under `report-reply/v21/`: native main, three lazy dependency chunks, Project 2 integration alias, shared reply-flow module and bootstrap. Their public routes are `/api/report-reply/static/v21/…`; the existing bootstrap selects the new native main. The dependency graph is aliased together to retain one React instance. Boards Up/model/CSS/video and V18 styles keep their existing URLs. No older object was overwritten or deleted. Exact allowlisting, MIME, ETag/304, GET/HEAD, ranges/If-Range/416 and method guards remain. The existing private bucket is not exposed by wildcard.

Official no-bundle dry-run output equals the staged/uploaded Worker, reported gzip **1,568.47 KiB**. The existing **233-byte `_headers`**, SHA-256 **`6a3077bed172e1fd2632fb114f786e51cb3e640c692d3ad673952bf8ab6dc387`**, is unchanged. Active/latest/configuration were checked before writes/staging/activation. Cloudflare once returned identical modules in a different multipart order; verification was corrected to compare name/hash sets. This was not a competing code change.

All bindings/secrets, full managed ASSETS namespace/configuration, existing Worker-first patterns, runtime, observability, hourly schedule, both domains, media-bucket privacy and disabled workers.dev/previews match the baseline. Existing configured credentials sufficed. No new permissions, bindings, migration, backfill, regrade or production data cleanup. Never deploy a partial capture over the managed asset namespace.

## Verification and limits

**275 automated checks pass:**

- **64 focused checks / 7 actual Worker requests:** original empty-exponent rejection consumes a check; V21 rejects it with no response/check/version/credit mutation; corrected expression earns credit. Actual original backend reply→resolve and reply→grant ordering. Shared sequencer blank, Send-only, failure, partial-success/retry and immediate double-click exclusion, plus whitespace/nested/choice/work exclusions.
- **63 existing conversation checks / 34 requests:** ownership, bidirectional history, unread grouping, same-millisecond/stale acknowledgement handling, notification grouping/deletion and direct threads, all with fictional SQLite.
- **69 existing project checks / 42 requests:** save/publish, assigned/unassigned access, Grades, zero/fractional manual grades and work retention, all with fictional SQLite.
- **79 assembled-static checks:** all seven new body hashes/MIME/HEAD/ETag/304/method/range guards, exact V20 inverse and exact official dry-run bytes.

Actual native local browser: typed an unsent draft and clicked Grant; the message appeared in history and the report resolved. On a second fictional report, typed an unsent draft and clicked Resolve without credit; history retained it and the report resolved. Ordinary Send reply then saved a full follow-up without another resolution. Request trace is exactly reply→grant, reply→resolve, reply-only; no console errors. Screenshots/fixture records stay private. Failure/concurrency branches were tested with the actual shared sequencer and backend tests, not by inducing production outages.

Live HTTP on both domains: **306 read-only requests / 302 checks**, **258 mapped HEAD checks / 14 full new-body hashes**, existing normalized HTML, protected/private-source denial, bootstrap 304 and retained Project 2 video/alias ranges. Zero failures. Existing HTML validator stripping is handled by complete normalized-body comparison. Staged and active full module read-back matches the expected release; existing domains/schedule/privacy/preview settings pass preservation checks.

No production Send/Resolve/Grant/student Check test was used. The real case audit was SELECT-only and no real student data is included in GitHub. These finite checks do not prove every network/unmount/concurrent-edit scenario. Preserve V20/V19/V18 limits and the deferred Archive Class/export/permanent purge.

## Continuation and recovery

Use **V22** next. Fetch current GitHub, read current and referenced handoffs, freshly capture actual active/latest Worker/assets/configuration, coordinate one publisher and recheck immediately before external writes. A log/check is not an atomic deployment lock. Preserve all source revisions, historical snapshots, messages, credit/grades and media aliases. Prefer a compatible forward repair from the current release. V20 is this release's exact previous-code baseline; a code rollback does not restore external data.

Publication scope: new **Handoff-v21.md**, factual inserts in **README.md, AGENTS.md, CHANGELOG.md, RELEASES.md and docs/PENDING-UPDATES.md**. All original content and older handoffs/reference files remain. Application bundles, real report audit data, screenshots, fixture DBs, credentials and compiled artifacts remain outside GitHub. The commit containing this file records publication; its SHA is stored privately afterward.
