# Original YY Buddy sprites — v7

This revision uses ten authentic original YY Buddy PNGs as fixed park decorations. It supersedes the generated park-character approaches documented in ARTWORK-v5.md and the v6 work notes. No character was generated, redrawn, retouched, recolored, cropped into a new image, resampled, or re-encoded for v7. No ImageGen prompt or generation call applies to these characters.

## Original source and permitted states

All ten originals came from the user's [YY Buddies Google Drive folder](https://drive.google.com/drive/folders/1iWwcrXqYT_impRyh7wVGNYqT-eYSldBe). Drive was used read-only to inspect and download the source files. The selected set contains six **Happy**, three **Normal**, and one **Surprised** sprite. Angry, Crying, and Sad sprites are not included in this catalog.

The authentic costumes are four Art Students with their original paint berets, blue paint-splashed shirts, shorts, and bare feet; an Astronaut with the original helmet and full suit; a Barista with the original brown cap, white shirt, and brown apron; a Bank Staff figure with the original glasses, vest, tie, and ID lanyard; and three Professor expressions with the original blond hair, glasses, tan shirt, navy tie, and shorts. Their original faces, hats, bodies, and pixel shapes remain intact.

Art Student A/B/C/D Happy originals were downloaded through Drive UI during the v5 reference audit. Astronaut Normal, Barista A Happy, and Bank Staff A Normal originals were downloaded through Drive UI during v6; additional unchanged reference copies are in `docs/artwork-references/`. Professor sources were downloaded during the initial Baby Boss source audit; the original manifest is `work/buddy-assets/manifest.md`. Professor Normal was downloaded individually; Happy and Surprised were obtained from Drive's multi-select ZIP.

## Files and byte verification

`buddy-sprites.js` exports `BUDDY_SPRITES` and `PARK_BUDDIES`. Each image in `assets/buddies/` is a byte-for-byte copy of the listed original. All ten are 1254 × 1254 RGBA PNGs. Source and destination bytes were compared directly, and matching SHA-256 values are recorded below and in the exported catalog.

| Sprite / state | Local original | Destination |
| --- | --- | --- |
| `art-student-a-happy` / Happy | `work/final-v5/buddy-references/Art-Student-A-Happy.png` | `assets/buddies/art-student-a-happy.png` |
| `art-student-b-happy` / Happy | `work/final-v5/buddy-references/Art-Student-B-Happy.png` | `assets/buddies/art-student-b-happy.png` |
| `art-student-c-happy` / Happy | `work/final-v5/buddy-references/Art-Student-C-Happy.png` | `assets/buddies/art-student-c-happy.png` |
| `art-student-d-happy` / Happy | `work/final-v5/buddy-references/Art-Student-D-Happy.png` | `assets/buddies/art-student-d-happy.png` |
| `astronaut-normal` / Normal | `work/final-v6/buddy-references/Astronaut-Normal.png` | `assets/buddies/astronaut-normal.png` |
| `barista-a-happy` / Happy | `work/final-v6/buddy-references/Barista-A-Happy.png` | `assets/buddies/barista-a-happy.png` |
| `bank-staff-a-normal` / Normal | `work/final-v6/buddy-references/Bank-Staff-A-Normal.png` | `assets/buddies/bank-staff-a-normal.png` |
| `professor-normal` / Normal | `work/buddy-assets/professor-normal.png` | `assets/buddies/professor-normal.png` |
| `professor-happy` / Happy | `work/buddy-assets/Professor Happy.png` | `assets/buddies/professor-happy.png` |
| `professor-surprised` / Surprised | `work/buddy-assets/Professor Surprised.png` | `assets/buddies/professor-surprised.png` |

| Sprite | SHA-256 of original and copy |
| --- | --- |
| `art-student-a-happy` | `9de3eb26c3b1b7d8201653a5cabf0a49857e1eac8f32d914a3e97ff64b6c2649` |
| `art-student-b-happy` | `ee6f88ae1147cbbcfc7cb2170b3bef6c4a99ebc491d70e9dac9895dc0d6361d9` |
| `art-student-c-happy` | `62404cae106abea9ede7a3688a0e3c5c8882d2d82bf1654cab5cbdc0fad1fc8c` |
| `art-student-d-happy` | `1dfe4c90676b66643ce03c0ed35a574c1da2c8e81edd6fa62ae5200a2d7774a6` |
| `astronaut-normal` | `1c041ccba690e678993054e8ab79637f5d236bd047df87b2512c1d7f62eb39f7` |
| `barista-a-happy` | `6a6de4558ba56c6197dc0bb0171f9a001a718f43c20e16c6c667d040d2548767` |
| `bank-staff-a-normal` | `5576bc377d338c487ab7134b6d4fda4935c22a8b959b3ece893ed47b358c6686` |
| `professor-normal` | `1dde730a000fcfe047df7c56f3b22f6f6d0501294548302e77c65ce87535dc13` |
| `professor-happy` | `49b5ebf25e2c56478a9411293d510ca49a88427bbd16e0040335d4b2c0cac21a` |
| `professor-surprised` | `f2a94e466ee41799379c49975febac2090f916429608b3407e56f89045f76d7e` |

Observed Professor Drive file IDs: Normal `1kQGpBIG0URISkNkfr9zwj1on-v88j-d1`; Happy `1rknY8WL2WgydDjDz1o7YopZstrN8v2hf`; Surprised `1ABK8gyR4Vaxs9icAtV2Ogw0Rj9kyHlQI`. Individual Drive IDs for the other seven originals were not retained in the source audit; none are inferred here.

## Display and placement contract

Metadata `canvas` is the unchanged PNG width and height. `bounds` is `[left, top, width, height]` from the nonzero-alpha bounding box. `alphaBBox` records the same box as exclusive-edge `[left, top, right, bottom]`. Pillow was used only to read these values and validate PNG metadata; copying used original file bytes.

Each placement's `foot` is the bottom-center of the visible alpha bounds in the unaltered 1448 × 1086 park coordinate system. Its `height:55` means 55 native park units for the complete visible alpha bounds, preserving the source aspect ratio. Five placements set `mirror:true`; the consuming SVG renderer mirrors those displays horizontally. This transforms the display only and does not modify a source PNG. No new walking pose or emotional expression is synthesized.

Ten fixed positions occupy paths and the front gate approach. Two figures stand on the entry path at `[688,894]` and `[750,915]`. Narrower Normal/Surprised originals occupy the central corridor; the wider raised-arm originals fit the side paths and entry. The four equipment plots retain their clean grass. Positions remain the same regardless of equipment selection.

The clean base is `assets/park-empty.png`, 1448 × 1086. It is an earlier landscape-only generation/edit preserving the supplied park layout and removing the four sports areas. V7 does not modify that image. Earlier generated-character images are historical artifacts and are not source sprites for this catalog. The app composes the original PNG layers deterministically over the clean base; no runtime AI is used.

Validation: ten selected sprites, ten placements, five authentic costume families, only the three allowed emotional states, unchanged source bytes for all ten PNGs, original aspect ratios, alpha-derived bounds, and paths kept clear of all four grass plots. App/PDF visual validation is performed by the integrating agent after SVG composition.

This work was entirely local. It did not change Google Drive, GitHub, or Cloudflare.
