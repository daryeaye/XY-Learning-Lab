# Design Your Playground! — final version 7

This is a self-contained, 14-page algebra activity for XY Learning Lab. Students simplify perimeter and area expressions, name a custom equipment block, arrange four blocks in a playground, and calculate the area left for paths. **Text on Pictures** is the selected design.

## Open and review

- Double-click **Playground-Final.html**, or run **Start Playground.cmd**. Scripts, images and the Love Ya Like A Sister font are embedded; no server or internet is required.
- **Playground-Final-Review.pdf** shows all 14 pages with blank answer fields and a sample design: basketball, soccer, slide and “Moonbeam Carousel.” It is a visual review, not an interactive worksheet.
- **Artwork-Review.html** opens the clean park, original-buddy composition, five sample JPG layouts and three office JPGs. Keep the assets/examples folders alongside this gallery.
- For editing, run `node server.mjs` and visit `http://127.0.0.1:8767/`. Rebuild the portable HTML after source changes with `node tools/build-offline.mjs`.

## Latest changes

Every playground character is now an unchanged original PNG from the user's YY Buddies Drive folder. Ten sprites use only Happy, Normal and Surprised states; five displays are mirrored horizontally. No new characters or poses were generated. The clean park, sprites and equipment are separate layers, so choosing equipment cannot alter the cast.

Page 13 has no learner-name field or playground-name heading. Its scene retains the original park proportions. Page 14 says “Let’s finish up the plan! Find the area left for paths so the manager can plan the paving.” Its instruction is 50px at the native slide size, laid out in three lines. The existing office scenes and remaining accepted layouts are retained.

Joey speaks in first person on pages 2, 9 and 12. Page 10 has eight unnamed choices: carousel, ice cream store, seesaw, merry-go-round, pool, treehouse, trampoline and pavilion. The student's equipment name carries to pages 11, 13 and 14. The old three-style prototype and unused artwork are excluded from the final package.

## Interaction and mathematics

Pages 3–8 and 11 require both perimeter and area answers to be explicitly checked and correct before proceeding. Scratch work is ungraded. Spaces, optional yard units and algebraically equivalent expressions pass. Incorrect longer expressions containing the right text do not pass. Editing a checked answer locks later pages again while preserving work.

A selected picture and a nonblank custom equipment name unlock page 11. Page 13 requires three distinct lesson items plus that custom block, occupying four different areas. Drag a thumbnail to an area, or tap it to place it automatically. Tap a thumbnail then an area to target a placement. Drag an existing block to move it; occupied destinations swap blocks. Arrow keys move a focused block; Delete or × removes it.

Four prepared views exist for each of the fourteen equipment species. Placement chooses the appropriate stored view; no AI runs in the student app. Courts use the approved source illustration clipped to each physical plot. Page 14 carries the arrangement and four dimension rows; its totals depend on the three lesson items selected. The remaining-path calculation subtracts the four equipment areas from the whole playground area.

Static text uses **Love Ya Like A Sister**; student entries use **Comic Sans MS**, with Arial fallback. The fixed 1600×900 stage scales to the window. Answer boxes are 320px wide at native size, with units outside; long entries shrink inside the box. Side measurements rotate clockwise, with yd at 60% of the expression size.

## Source map for the next editor

| File | Responsibility |
| --- | --- |
| `app.js` / `styles.css` / `index.html` | Page rendering, inputs, hints, navigation, placement and layout |
| `data.js` / `lesson-source.json` | Lesson wording, dimensions, answers and source notes |
| `scene.js` / `equipment-views.js` | Scene coordinates, court clipping and prepared equipment views |
| `buddy-sprites.js` / `assets/buddies/` | Original PNG catalog, hashes, positions and display mirroring |
| `math-engine.js` / `progression.js` | Safe algebra checking, dynamic totals and prerequisites |
| `tools/build-offline.mjs` | Dependency-free portable HTML builder |
| `tests/` / `VALIDATION.md` | Automated checks and visual review results |
| `ARTWORK.md` / `ARTWORK-v7.md` | Current artwork provenance and original sprite hashes |
| `CHANGELOG.md` | Concise implementation history |
| `references/` / `docs/` | Preserved original exports and three read-only research notes |

Run `node --test tests/*.test.mjs` for the 27 checks. `node tools/build-offline.mjs --check-only` validates dependencies without writing output. Student progress is stored locally by the browser; no student submissions are sent to a service. `?qa` uses separate test storage.

The five original files under references/ and docs/ are preserved byte-for-byte. This project is separate from the live XY Learning Lab. Repository delivery is restricted to **Project Two/**; handoff documents and all other repository paths are outside its scope.

©TruePBL. All rights reserved.
