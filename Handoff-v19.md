# XY Learning Lab Handoff v19 — Boards Up

**DEPLOYED AND VERIFIED — October 20, 2026, 13:39 EDT.** Worker **`7bdf72a5-add2-4bc0-a91c-d7fdcbbd07d2`** (number **154**), deployment **`3ea9e982-182d-42bc-aa5e-4b17a521cd7f`**, **100% traffic**. Activation: `2026-10-20T17:39:14.945052Z`. Complete live module/configuration verification: `2026-10-20T17:39:17.784069+00:00`. Both-domain HTTP verification: `2026-10-20T17:39:25.550358+00:00`. Worker: **9,630,871 bytes**, SHA-256 **`b3429f7e71f65ace8dde526683f10df19ad8968e0eb7eb34db4133d777192974`**.

Start here for Boards Up, then read [V18](Handoff-v18.md) for the current UI preferences and retained-history guide. V19 is incremental and does not replace the older classroom, input, grade, conversation or project contracts. All earlier handoffs and reference banks remain unchanged. Latest human instructions take precedence. Next handoff is **V20**.

The owner explicitly authorized building and publishing this additional activity online, supplied the video, and later requested Previous Problem. The final long Boards Up description supersedes the abandoned setup idea before it. The release operator made **no production student, assignment, membership, work, grade, point, message, media-object or schema mutation**. No production test assignment/student was created, and no individual production student record was opened. Changes are Worker/frontend code and documentation only.

## Teacher entry and setup

Open Curriculum → 7th Grade Math → Unit 1 or Unit 2 → lesson → review/check problem types → Create Assignment → **🖊️ Boards Up**, immediately after Comic-Con. Card description: “Solve problems in pairs, raise your boards, and earn whole-class rewards.” Single Digital Assignment, Worksheet Generator, Differentiated Assignment, Comic-Con and both unavailable cards remain.

Boards Up uses the **current XY bank and the checked types**. It never loads or embeds the original game’s `all_questions.json`. The existing native type picker adds/changes types within the current bank. Native questions, options, math, geometry, multipart keys and the earlier perimeter/area emphasis are reused.

| Step | Behavior |
| --- | --- |
| 1 — Introduction | Play the owner’s Boards.mp4. |
| 2 — Prize tiers | Base, Deluxe and Champion targets/rewards. The whole-class scoreboard earns the entered reward when its target is reached. Targets must be ascending positive integers, with at least one reward entered. |
| 3 — Questions & extra credit | Left: 1–5-star counts/availability, **no weight column**. Right: Yes/No extra credit with two fixed sample equations. Note: “Questions appear from easiest (1 star) to hardest (5 stars).” |
| 4 — Classroom rules | Display the supplied rules image and bold teacher-facing display prompt, then Start Boards Up. |
| 5 — Game & answer key | The game opens in a new tab. This step has a short new-tab indicator, Open game tab and the same numbered answer key. Keys contain answers only, with an extra-credit column when enabled; Print/Close work. |

Back + Save Draft sit left and Next/Start right. There is no duplicate heading Save/Home. Source Sans 3 / Libre Baskerville and native controls remain in setup. Existing header and Assignment types navigation invoke the familiar leave guard until launch. A successful game launch clears that warning for this activity.

**Boards Up Save Draft is explicit and device-local**, labeled “Saved on this device.” Drafts store configuration/step under a teacher/unit/lesson key; opening setup does not silently replace new checked types. Open saved draft is explicit. There is no server assignment/draft creation or student dashboard/Grades item for this teacher-led whole-class game. This is a distinct storage contract from existing project creators; do not change their persistence to match it.

## Classroom game

The original blue/light-blue game layout retains question, optional extra credit, timer, rewards, scoreboard, score controls, reveal, navigation and answer key. The game omits the copyright footer; the normal teacher setup keeps the existing platform footer.

- **Previous Problem sits immediately left of Next Problem**, disabled on question 1. Next is disabled on the final question. Navigation revisits the same question/bonus, hides revealed answers and leaves score/timer unchanged. Enter activates Previous when it has focus; elsewhere Enter retains Next behavior. Space reveals answers.
- Main-question points equal its 1–5-star level. Minus deducts one. The original extra-credit hint is also an accessible +1 bonus action, with B shortcut. These are whole-class game points, not YY points or grades.
- The timer starts at 2:00, with Start/Pause/Reset/±30s and a time-up sound. Next/Previous do not reset it. Scores change prize-tier colors. The final Next cannot advance past the bank.
- Selection balances draws across included types within each star, avoids repeated main variants and orders stars ascending. There are 1–200 questions, bounded by available selected variants. Whole-class selection does not consume or mutate any student’s graded/example reservations.
- Thirty fixed authored fill-box extra-credit equations are built into the small activity model; their arithmetic answers were independently checked. They are not imported from the original game bank and are not editable in this first release.
- Setup stores one fixed teacher-owned question snapshot in sessionStorage and opens `/boards-up/game/<uuid>` on the same origin. The new tab inherits that snapshot. Both keys use exactly the same numbered rows. Refresh restarts score/timer/question index while keeping that sequence. The URL is not a shareable student game link.
- The game checks `/api/me` for teacher role and validates owner/id/session before rendering. Missing session, wrong owner and student role fail clearly. Existing student APIs/release/disclosure rules remain unchanged.

Desktop 1440×1000 and 1366×768 and a 620px stack were reviewed. Scoped overrides keep all controls visible and navigation readable on hover; small screens stack panels. Print overrides isolate the key and remove native clipping/hiding. No unrelated teacher/student screen is redesigned.

## Video, rules and provenance

Reference game: https://t-pbl.com/mathrace/7bu.html, mirrored in daryeaye/mathrace/main/7bu.html. The supplied slide deck and its original game were read. Rules: daryeaye/mathrace/main/boardsuprule.jpg, **166,842 bytes**, SHA-256 `ab14c814ae3d0c712253ba482a5eef585e27e8ede133e108945eafdf2a758af5`.

Owner’s video: https://github.com/daryeaye/website/blob/main/Boards.mp4 . It is pinned to public commit `116cc155748ae0a6d73ccf0a239ed221dcd4eabc`: **4,059,131 bytes**, SHA-256 **`5966b471401716dd4e54275b38dd26c9bde526d99d0b682841fb87b0b3003799`**, **63.553 seconds / 1280×720**. The native video element uses `/api/boards-up/static/v19/boards.mp4`; GET redirects to the exact public pinned raw file. HEAD/ETag and invalid-range handling remain at the Worker; valid media requests follow to GitHub’s range-capable source. Video bytes, valid ranges and actual playback pass. Keep the pin and hash together; changing the clip requires a new version/URL. The introduction depends on that public GitHub file being available.

No R2 object or prior video was replaced/deleted in V19. V18’s Project Two replacement video and its old alias remain intact.

## Fresh baseline and preserved state

GitHub parent: `be5159963ee37e9911b81b0bef775794b41e61a6`, with V18 highest. AGENTS, all numbered handoffs through V18, current shared logs and linked original Unit 2/classroom records were reviewed. Cloudflare was freshly captured before preparation and checked repeatedly before publication. Starting Worker: `3876044e-862d-40e1-a6ef-ce9d77758cbf` (152), deployment `331346e2-440f-44ee-bd91-abf75959d9b9`, 100%; original Worker **8,272,064 bytes**, SHA-256 `8ae726154bf426ea88c82d6c4ee458f99adc03ddf57fa5a3ef910da08d336f74`.

Removing V19’s appended static wrapper and restoring the prior default-export name recovers **every byte of the original backend and 105-entry R2 public map**. All Unit 1 / eight Unit 2 banks, default `140b8ef301aec5a604e4552866a05177d967a25997e7c8de8b8d29a49a06708d` pin, exact checkers, saved-work/revision logic, grades, messages, YY/reward receipts and scheduled handler remain unchanged. There is no migration, backfill, regrade or student-data cleanup.

Native functional edits are limited to the activity chooser and Boards Up branch/back guard in the lesson builder. The game path selects its teacher-gated root. Main/integration/lazy aliases are rewritten together to retain one React/native instance. Original V18 CSS remains loaded; new setup/key styles are scoped and original game CSS is applied only in its separate game tab.

The finite new static allowlist has **10 decoded files / 3,119,745 bytes**: native main, three dependent lazy chunks, Project Two integration alias, Boards UI/model/CSS, rules and bootstrap. New paths use `/api/boards-up/static/v19/…`. The existing `/assets/index-studentv14cc5e9397ba56.js` bootstrap is intentionally intercepted to select the new main. Its original R2 map entry remains unchanged underneath; old frontend/dependency URLs remain available.

The Worker embeds gzip/base64 static file bodies. Final transport has **worker.mjs plus the unchanged 233-byte _headers module**, SHA-256 `6a3077bed172e1fd2632fb114f786e51cb3e640c692d3ad673952bf8ab6dc387`. The introduction is not a binary Worker module. Official no-bundle dry-run bytes equal the uploaded modules; reported gzip upload is **1,566.55 KiB**.

All six bindings/secrets, complete managed ASSETS namespace/configuration, existing `/api/*` and bootstrap Worker-first routes, runtime, observability, hourly cron, both domains and disabled workers.dev/previews match baseline. The API used strict inherited bindings and keep_assets:true. Never deploy a partial captured asset folder over the original namespace. No R2 management access or new infrastructure permission was added.

## Publication and credential diagnosis

The original package included the 4 MB video as a binary module and produced a roughly 13.7 MB multipart upload. Both the custom uploader and official Wrangler received a 401 from the managed credential integration; code-only upload also failed with that package. Token verification confirmed active status through 2077, and the owner showed Workers Scripts:Edit. Asking the owner to recreate the token before verifying it was premature.

The smaller, text-only package uploaded successfully using the existing configured token. No token rotation or permission expansion was needed. This establishes a packaging/transport problem with the original upload; it does **not** establish a specific gateway byte limit, because size and binary attachment changed together.

Interim version 153, `68259ddf-a31b-450e-b2dc-65f7856bd456`, was briefly activated under deployment `eed3ab5b-e485-4b34-b9cb-25e8567cb3da`. Its server-side video fetch returned 503 in live checks. V154 changes only the new video delivery to the verified public redirect; all ten new frontend asset bodies remain identical to 153. Final modules/runtime/bindings/assets were read back before activation at `2026-10-20T17:39:13.718641+00:00` and again after it. Final traffic is the version/deployment at the top of this handoff.

## Verification and limits

- Model: **474 checks**, all **15 current Unit 1/2 lesson sessions / 165 selected questions**, capacity, included types, uniqueness, ascending stars, bonus-off, owner/session validation, 30 independent bonus calculations and exact original Worker recovery.
- Assembled Worker routes: **269 checks**, all ten new body hashes, GET/HEAD/ETag/304, video bytes/ranges/416/405/If-Range and **104 unchanged visible old map routes**. The remaining map URL is the deliberately changed bootstrap, separately verified. The 105-route capture is finite, not an enumeration of all managed assets.
- Native local browser: **35 main + 18 edge checks**, including video, both banks/checked types, type picker, explicit draft restoration, popup blocking/retry, rules, session inheritance, matching keys, timer/score/reveal, star order, refresh, leave guard, bonus-off, owner/student denial and desktop/narrow layouts. Separate Previous checks cover boundaries, stable main/bonus, hidden answers after moving, preserved score/timer, keyboard Enter and aligned controls.
- A **100-answer key prints across six Letter pages** with extractable content and the final numbered answer. Both teacher step-5 and Unit 1 game keys also print. Card/line-height, narrow-grid and native print conflicts were found and corrected before final packaging.
- Final live HTTP: **258 requests**, **210 mapped HEAD checks / 22 complete new-body hashes** across both domains, normalized old HTML/root/game entry, anonymous protected-route denial, video/ranges/416 and bootstrap 304. Zero failures. Anonymous `/api/me` correctly returns 200/null; actual bank/grade/assignment/private-PDF guards return 401. Cloudflare strips ETags on the two old HTML routes, so full normalized bodies verify them instead.
- Final live-asset Chrome check: actual public deployed assets/video are loaded through a TLS-verifying HTTP bridge; only account/data API responses are fictional browser-local fixtures. It verifies actual 63.553s/1280×720 video playback, rules, new game tab, Previous/Next and matching answer keys. No JS errors. Native Chrome could not trust the workspace proxy CA directly; TLS verification was retained in the HTTP bridge. This is not an authenticated production teacher/student submission test.
- Staged and active complete Worker/header bytes, all retained runtime/bindings/assets/settings/cron/subdomain settings match their expected values. No production Save Draft/Assign, student submission, point award or message send was used. Browser samples and all test records are fictional/private.

These checks do not prove every authored variant visually fits every device or every network/concurrent-edit failure. The unrelated original source-sans fallback remains. Existing student autosave and teacher project saving/Grades behavior are unchanged. Screenshots, compiled bundles, captures, fixture data and credentials stay outside GitHub.

## Next release and recovery

Use **V20** next. Read this release and V18’s retained-reference guide, fetch current GitHub, then freshly capture actual active/latest Worker/configuration/frontend. Keep one publisher and recheck immediately before external writes; these checks are not an atomic lock. Preserve every bank pin, existing media alias and all student records. The latest human request overrides historical UI statements.

For recovery, prefer forward repair from the actual current version. A code rollback does not restore database/media state. V18 is the clean previous feature baseline; the interim V153 introduction has a known video-loading problem. Do not restore an obsolete V15 video key. Archive Class/export/permanent purge remains deferred.

GitHub publication scope: new **Handoff-v19.md**, with factual prepends to **README.md, AGENTS.md, CHANGELOG.md, RELEASES.md and docs/PENDING-UPDATES.md**. All prior content, handoffs and reference banks remain unchanged. The commit containing this document records its publication; private metadata stores the resulting commit afterward.
