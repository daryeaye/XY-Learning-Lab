# Playground Design Lab

A complete, local-only 14-page version of the TruePBL Playground lesson. No account, backend, build step, package installation, curriculum connection, points system, or remote storage is required.

## Open the app

Open `Start Playground.cmd`, then visit **http://127.0.0.1:8765**. Keep the terminal running while using the app. Press Ctrl+C in that terminal to stop it.

Alternatively, with Node.js installed, run `node server.mjs` from this folder. The supplied launcher also recognizes the bundled Node.js runtime on this computer. If port 8765 is occupied, set the `PORT` environment variable to another number before starting.

The server listens only on this computer's loopback interface. Nothing is deployed to GitHub, Cloudflare, Google Drive, Google Sites, or Google Forms. External links are limited to the original Need Help reference images, which open only when clicked.

## The lesson

1. Design Your Playground! Original description and standards.
2. Baby Boss introduces the interview in a new pixel office.
3–8. Fountain, Slide, Swing, Statue, Basketball Court, and Mini Soccer Field. Four perimeter scratch boxes and two area factor boxes remain ungraded. Only the two long result boxes are checked.
9. Review all six interview blocks.
10. Choose one of eight **unnamed** images, drag or tap it into the green slot, then name the block.
11. Calculate the perimeter and area of the custom block, with dimensions **23 × (2x + 3y) yd**.
12. Introduction to building the playground.
13. Choose three different interview blocks. Your custom block carries over automatically. Drag blocks, select and tap a location, or use arrow keys to move the selected block. Shift + arrow moves farther. The shallow-angle lawn is new artwork. The images illustrate a plan and are not physically to scale.
14. The same arrangement carries into the final calculation. Calculate the playground area, total equipment area, and remaining grass area. Dimensions are **400 × (x + 32) yd**. The two latter answers change with the selected equipment.

Original slide 10 is split into two pages. Original slides 12 and 13 are combined into the builder, preserving a total of 14 pages. Google-search/copy-and-paste instructions are adapted to the requested local image tray. Other instructional wording, including source grammatical quirks, is retained. The optional first-page video is omitted as requested.

## Answers and progress

The Form's 14 fixed equipment expressions and playground-area key were read directly from its editor. The app accepts algebraically equivalent expressions, including reordered terms, spaces, decimals/fractions, optional yard units, and correct final expressions after an equals sign. It uses exact rational polynomial arithmetic, not JavaScript `eval` or numeric guesses. It excludes the Form's accidental literal `Correct Answer` entry for basketball area.

The final equipment total and remaining grass area are calculated from the chosen blocks. These fields have no static graded key in the original Form. All three final outputs are checked in this app. Scratch work stays ungraded.

Progress saves in this browser on this device. **Save my work** downloads a portable JSON project. **Lesson map → Open saved project** restores that file in another browser. **Print my project** produces a printable report containing the student's design, answers, work, and reflection. **Start a new project** asks before clearing local work. No student entries are sent to a server.

## Artwork and sources

The nine Project 2 equipment PNGs and six Professor expressions come from the supplied Drive folders. The Professor character is presented as **Baby Boss**. Five new assets were created with the built-in Image Generation tool: the office, lawn, merry-go-round, volleyball court, and seesaw. Exact prompts and asset details are in [ARTWORK.md](ARTWORK.md). All images are included locally under `assets/`.

Read-only source references:

- [Playground project folder](https://drive.google.com/drive/folders/1J0uW0QKVtdguuVnnM0mIjcGhILcLVD-O)
- [Baby Boss / YY Buddies folder](https://drive.google.com/drive/folders/1iWwcrXqYT_impRyh7wVGNYqT-eYSldBe)
- [Original 14-slide lesson](https://docs.google.com/presentation/d/1GGNAkoX-Y7LaGJUB3k_bBIiv8i_vvqJ-Mzn-VLkF5JU/edit)
- [Original answer Form](https://docs.google.com/forms/d/1nygkX7etrQ0hytkRQkxK8b8VPvjxISv1wWrAASbk3S4/edit)
- [XY Learning Lab](https://xylearninglab.t-pbl.com/), studied for its ivory/navy/green shell, centered lesson container, serif headings, navigation, and footer.

Design references: [CAST UDL](https://udlguidelines.cast.org/) for learner choice and actionable feedback, [WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/) for alternatives to dragging and consistent help, and the [IES mathematics practice guide](https://ies.ed.gov/ncee/wwc/practiceguide/26) for clear representations and systematic instruction.

©TruePBL. All rights reserved.
