# Source layout audit for the local redesign

The original 14-slide PDF and PowerPoint were read and rendered locally. The original deck is 16:9 (9,144,000 × 5,143,500 EMU). Wording and dimensions below are visually verified against those unchanged exports; editable-control geometry is extracted directly from PPTX XML. References to original slide numbers use 1–14, while app navigation uses zero-based 0–13.

The six interview slides alternate illustration and mathematical workspace. **The vertical dimension belongs beside the equipment rectangle and is centered on its height; the horizontal dimension is centered directly below that rectangle.** Do not swap dimensions to force a generic card arrangement.

| Original slide | Equipment and dimensions | Illustration | Workspace |
| --- | --- | --- | --- |
| 3 | Fountain: horizontal 10 yd; vertical (x+4) yd | Left, tall peach rectangle, Fountain above | Right |
| 4 | Slide: horizontal (2x−5) yd; vertical 3 yd | Right, wide pink rectangle, Slide above | Left |
| 5 | Swing: horizontal (x+2) yd; vertical 2.5 yd | Left, wide lilac rectangle, Swing above | Right |
| 6 | Statue: horizontal 2 yd; vertical (x−3) yd | Right, tall off-white rectangle, Statue above | Left |
| 7 | Basketball Court: horizontal 35 yd; vertical 2x yd | Left, wide pale green rectangle, name above | Right |
| 8 | Mini Soccer Field: horizontal (4x+6.4) yd; vertical 28.2 yd | Right, wide green rectangle, name above | Left |

On every interview page, the perimeter prompt is above four separate scratch boxes joined with plus signs; the first long result box follows an equals sign. The area prompt then sits above two separate factor scratch boxes joined with a multiplication dot; the second long result box follows an equals sign. Only the two long result fields are checked.

## Exact long-answer control positions

Coordinates are `[left, top, width, height]` in a 1600 × 900 reference viewport. Scale both axes together for the original geometry variant.

| Original slide | Perimeter result | Area result |
| --- | --- | --- |
| 3 | [743.250, 397.620, 656.115, 86.194] | [743.250, 689.029, 656.115, 86.194] |
| 4 | [190.341, 317.450, 656.115, 86.194] | [190.341, 616.588, 656.115, 86.194] |
| 5 | [815.079, 336.780, 656.115, 86.194] | [815.079, 710.149, 656.115, 86.194] |
| 6 | [190.341, 317.450, 656.115, 86.194] | [190.341, 616.588, 656.115, 86.194] |
| 7 | [833.640, 329.825, 656.115, 86.194] | [833.640, 696.999, 656.115, 86.194] |
| 8 | [168.692, 356.111, 656.115, 86.194] | [168.692, 655.245, 656.115, 86.194] |

All small scratch boxes are 159.423 × 86.194 except slide 8's four perimeter boxes, which are 159.423 × 75.433. Full scratch/control rectangles are recorded locally in `work/reference/slide-control-geometry.json`.

## Other original compositions

- **Slide 1:** full playground photo, broad pale title band along the top, large blue “Design Your Playground!”; description in an orange translucent panel at bottom left; Standards 7.EE-1 and 7.EE-3 at bottom right; small Intro button at top right. The video remains optional/omitted as requested.
- **Slide 2:** white story area on the left, office and boss on the right, with a curved/sloping dividing edge. The two original paragraphs introduce the temporary playground and six interview questions. Baby Boss replaces the source character; preserve the story copy, including source grammatical quirks.
- **Slide 9:** office/boss on the left, white text area on the right. “Done? Let’s put the answers here!” above the invitation to create a personal block. The PPTX does not contain an actual hyperlink behind “answers here!”.
- **Slide 10:** original custom rectangle is horizontal **23 yd**, vertical **(2x+3y) yd**. The adapted app splits image/name selection and this math into two pages. Student choices must remain unnamed; the student supplies the name.
- **Slide 11:** darkened full office/boss background, thin hand-drawn white frame, large white “Are you ready to build your own playground?” and original instruction to choose three equipment blocks plus their own.
- **Slides 12–13:** six source equipment/dimension cards followed by the large lawn and learner name. The adapted flow merges these into one builder page. The latest local redesign further uses four distinct placement plots; this is a new interaction requirement, not a feature claimed to exist in the source deck.
- **Slide 14:** office/boss on the left, a speech bubble at upper left, white fade into the right workspace. Playground thumbnail at upper right, **(x+32) yd** above and **400 yd** on its right. Three long work fields at x=824.742, y=348.088/526.955/752.927, each 758.688 × 70.026. The app carries the learner's actual design into this thumbnail.

Original help links are `https://t-pbl.com/xinlindywane/PGA.png` on interview slides 3–8 and `https://t-pbl.com/xinlindywane/PGB.png` on slide 14. The source places these in varying corners; the separate-art/text style may place help consistently for accessibility.

## Answer authority and current lesson styling

The fourteen fixed equipment expressions and playground area were independently confirmed in the Google Form editor. Basketball's accidental literal accepted string “Correct Answer” is excluded. Equipment-total and grass-area fields have no static original Form answer key; the local app computes them from the three selected source rectangles plus the custom rectangle.

Handoff-v12.md was read through GitHub without modification. Its relevant current presentation rules are: put units beside the actual answer input, center them vertically even when Functions expands, use 3rem unit type and a true superscript for squared units, and bold/underline the question words perimeter and area. Its Unit 2 checking notes require a complete mathematical answer and reject substring matches, larger wrong coefficients and extra competing mathematical terms. The local checker therefore keeps exact algebraic comparison, recognizes only defined label/unit boundaries, and rejects arbitrary nonsense. Spaces, reordered equivalent terms, decimals/fractions, trailing yard variants (including the explicitly requested “1D” transcription), and valid final RHS working are accepted.

Every visual variant shares the same state and progression rules. Each interview requires both current answers to be correct and explicitly checked. Image and nonblank name gate custom math; both custom results gate the design stage. Four distinct placed plots containing exactly three different source blocks plus the custom block gate the finale. Editing a checked answer relocks later pages while preserving all work.

No handoff, source export or remote file was changed for this audit.
