# Handoff V38 — three-slide wording and scaffolding corrections

**DEPLOYED AND VERIFIED.** Main **176 / fbbb59a2-a45d-4c6f-a132-d4127021097d**, deployment **`8a4a038b-8120-4ff4-9e97-9245fcd3bdaa`**, is active at **100%**. Activation/readback **2026-10-28T19:22:53.442304+00:00**; this record **2026-10-28T19:28:10.441427+00:00**. Worker **8,754,754 bytes**, SHA256 **`9397af21726e1e55cf07cc92b698ebae712b5ecf06e03bffec35ed023294fdd6`**. Art remains **5 / 818df882-1a64-44e5-9c63-20e42c462de5**, deployment `3a172e35-9b53-4c1c-a03d-700d1bbdc326`, with all **693 images**. All seven bindings, managed ASSETS, runtime/settings, schedules and exposure remain unchanged. No artwork upload occurred.

Read V38 first, then [V37](Handoff-v37.md), the older handoffs/curriculum records, [UI preferences](docs/UI-PREFERENCES.md) and [release checks](docs/RELEASE-CHECKLIST.md). **Next handoff: V39.** Preserve V37's migration receipts, question tokens, mixed-pin retry support and every saved record. V38 does not repeat that migration or authorize another one.

## Source, authorization and baseline

Owner: **“I got 3 new slides. Check out and update.”** The previously supplied native [Prompt presentation](https://docs.google.com/presentation/d/1OFU_HFfBLDc4zrn3gn0rwyl1sW5XpEomouj3EVPkWQY) now has **three actionable slides plus an empty fourth marker**, revision **`SkT2VIhTQVLUPw`**. All three were read as native text and visually at1600×900; their screenshots identify Types228,242,226/227/245. The source revision was rechecked unchanged before deployment. No Drive edit/export upload or unrelated spreadsheet access occurred. Keep slide captures out of GitHub.

Fresh baseline captured **2026-10-28T19:06:24.980739Z**: main **175 / c9ba8a30-1188-4ac8-adc4-4db2a6b8d8af**, deployment `d11a71bf-b3fb-43e3-a53a-7b1352503967`,8,586,828bytes, SHA256 `7d3621244c54b9829a719a08ca1c176f3d261a1ce3901b84bf63ec4ba833494c`; art5 unchanged. GitHub began at **`61aee5d4ec8c0955b1e9c9cccf39364fd8f20457`**. Current source, complete module/configuration metadata and latest GitHub were read; main/art were rechecked before upload and activation. One publisher was used. A freshness read is not a lock.

## Slide1 — Type228 wording and matching footer text

All **ten current Type228 variants** now say **“Write the expression that belongs inside the parentheses ONLY.”** Their original identity equation, numbers, answer, solution, paired example and A–J labels are unchanged.

**See Solution** and the noninteractive scaffold status share one font size, line height and baseline. The status sits at the **right edge** of their row. Both **Scaffolded** and **Scaffolding available** stay complete on one line. The shared CSS uses14px at ordinary widths and12px at narrow phone widths, with equal text sizing for both elements. Type inclusion remains independent; the status still has no action. No per-type scaffold checkbox was restored.

The previous style mixed a14px link with a rem-sized status and top padding on the link, then grouped both toward the left. The corrected row owns the spacing and aligns both text baselines. Tests measure actual font sizes, line heights, baselines, right edges and overflow for all default Lesson2-6 eligible cards, enabled and disabled, at1366/768/390/320px.

## Slide2 — lowercase Type242 variable variants

The first current Type242 variant is **168r+448s−392t**, with answer **56(3r+8s−7t)**. The second is **240a−336b+432c**, with answer **48(5a−7b+9c)**. The other three variants already use lowercase letters and remain identical.

The rename covers question mathematics, expected polynomial power keys, positive/negative answer forms, every ladder input/quotient/result, native solution-method rows and verification expressions. All numeric coefficients, GCFs, question/example IDs and pair cycles remain. **A–E variant labels stay uppercase** because they label variants rather than algebraic variables. Type-level input categories are re-derived from all five answers, so current final-answer entry accepts the lowercase variables. The complete-factoring requirement and either GCF sign remain; expanded/partial equivalents are still rejected.

New current Unit2 source **`9a41708b5904b1d9f0121c4d8057dec6fe0bf033095b6ed17abfe622c121aa74`**, schema **`2.6.1-lowercase-factor-variants`**, **139 types /1,355 questions**. The hash is SHA256 of `JSON.stringify` of the raw bank before derived input categories. The root reference JSON matches that source after removing its derived `input_format` fields. All **twelve older banks remain exact**, for **thirteen revisions including current**. Unit1 is unchanged at104 types /520 questions. No difficulties, coverage counts or type IDs changed in V38;137 other type objects are exact.

Corrected wording/letters apply to the new current bank. Previously pinned question/answer versions remain available and are not silently rewritten or regraded. The preview-check path for these Unit2 questions now resolves the current bank, or an explicit supplied `bankRevision`, rather than accidentally checking a new lowercase question against an old same-ID uppercase object. An explicit old revision still checks its original uppercase answer correctly. Native student/assessment/teacher-preview revision ownership remains.

## Slide3 — no XNO for Lesson2-6 word tasks

**226,227,245 no longer offer the Question/Variables/Numbers/Operations organizer.** These word tasks use the existing **Work or Explanation** area and their ordinary answer entry. Their cards show See Solution without a scaffold-status label. The default Lesson2-6 set now has **one eligible organizer style: factoring layers**, with only its existing image in the global hover preview. The checkbox and factoring defaults for the remaining eligible types remain.

This implements “No need to apply ... XNO on these questions,” without forcing a division ladder onto a perimeter-multiplication task or exposing its answer as a given expression. It expressly supersedes V37's implementation choice to use XNO for226/227/245. Other lessons' word/PCL organizers remain.

The rule applies when rendering/resolving both fresh and previously started items; no stored snapshots need to be rebased. Previously saved XNO true flags for these three IDs are narrowly tolerated and retired when settings are normalized, so an old assignment can still start/edit/save. Invalid enabled flags for unrelated ineligible types still fail.

**Existing work is retained:** the regular Work area displays the already-saved plain work, and the bounded old `scaffoldWork` object survives subsequent ordinary Work saves. An older open client that sends only its structured word work is preserved as readable text as well. A deliberate empty regular-work field still fails the usual work-presence gate before an answer check consumes an attempt. Hidden XNO boxes are no longer required. Final answer checking and grades are unchanged.

No automatic student-data edit, schema migration, new archive/table, point award, grade recalculation or deletion occurred. The only production D1 access for this release was a bounded SELECT of table/index definitions for the fictional test fixture. V37's archive/index and applied receipts remain untouched; its removed maintenance triggers were not recreated.

## Verification and publication

| Check | Result |
| --- | --- |
|Retained/new public bodies, protocols, import graph and unrelated native code |1,345 passed;25 modules, one app/React owner |
|Bank/current canonical answers, input categories, retained12 banks, paired IDs and preview ownership |3,801 passed;1,355 current Unit2 canonical questions |
|Independent SymPy mathematics/renamed powers/ladder/GCF and unrelated types |210 passed;all5 variants and137 other types |
|Retired organizer flags, prior work, old-client compatibility, empty-work gate and save/reopen paths |62 passed |
|Retained warnings /eight-layer legacy-work /project dates /input/PCL backend |35 /35 /73 /2,006 passed |
|New V38 native UI |754 before and754 published |
|Retained V36/V35/Prompt5/Prompt6/keyboard UI |66/100/45/26/29 before and published |
|Historical mixed scaffold-map UI |5 before and5 published |
|Complete populated signed-in app, Grades/PDF, worksheets, Student View, Playground and Boards |135 before and135 published |
|Both-domain complete public hashes /HTTP protocol checks |294 /16 passed |

Official Wrangler **4.151.1**, no-bundle dry-run, staged content and active content match the exact size/hash above. Strict inherited bindings preserve opaque managed ASSETS and all seven existing bindings. The new immutable namespace is **`/api/v38/static/20261028a/`**; its one canonical owner is **`/api/v38/static/20261028a/native/index-studentv38.js`**. The stable bootstrap revalidates, and an old ETag receives the new body. Every earlier immutable URL and the four padded preview-image bytes remain.

The complete published download/hash check finished **before** replay. The replay server requires all current V38 files and cannot silently use generated fallback bodies for a missing published file. **1160 browser assertions** pass using actual downloaded public/Worker code with fictional authenticated APIs/SQLite. Scenarios include ordinary teacher/student sign-in, populated Grades/PDF lazy routes, saved worksheets, direct/reloaded Playground, Student View and native Boards timer/prize/navigation/answer controls. No unhandled/React errors occurred. Both app domains are verified: `xylearninglab.t-pbl.com`, `student.xylearninglab.t-pbl.com`.

Browser **Chromium154.0.8037.57**, desktop/tablet/320–390px. This is not actual Safari/WebKit or every production account. The retained local `source-sans-3.ttf` fixture fallback remains; no production font change or CPU-improvement claim is made. Native MathLive values/shadow content and screenshots establish that old work is visible; outer `innerText` alone omits visible MathLive content.

## Preservation, records and recovery

All prior bank pins and native checkers, V37 mixed-pin retries/question tokens/stale-work archive, highest-grade logic, layered/PCL bounds, YY ownership/points/limits/reactions, all693 art paths, 047 bare heads, headwear offsets/timing, managed assets, account/class/comic/media and histories remain. No production student test writes, bulk DML, R2/artwork writes or Drive writes occurred.

GitHub receives only this handoff, factual current-log inserts, additive UI/release-prevention notes and the changed reference bank. Preserve every earlier handoff/document byte and separate Coloring work. Do not publish bundles, screenshots, slide exports, private records, fixtures/databases or credentials.

Recover with a compatible **forward repair from176 or its actual newer successor**. New assignments can carry the V38 pin; older code cannot resolve it. Preserve all13 revisions, lowercase expected-variable data and input policies, retired-flag/structured-work compatibility, all old public bodies and V37 receipts/tokens. Do not restore a stale Worker, rebase old questions, clear student storage or erase old work to solve a display issue. Future work requires fresh main/art/GitHub/source reads and applicable user authorization; stop/reconcile on a mismatch. **Next: V39.**
