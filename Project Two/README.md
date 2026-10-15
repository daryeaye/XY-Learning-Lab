# Project Two — Playground Design Lab

Start here if you are continuing this project from another account.

This is a standalone, local 14-page web app based on the user's Playground lesson, Google Form answer keys, Project 2 equipment images, and Professor characters, presented as **Baby Boss**. It uses the visual style of XY Learning Lab but does not connect to its curriculum, accounts, points, databases, or production deployment.

The app includes six perimeter/area interview activities, an answer review, eight unnamed equipment choices with student naming, a drag-and-drop playground builder, and a final grass-area calculation based on the actual selected blocks. Original slide 10 is split in two; original slides 12 and 13 are combined, keeping 14 pages total. Work saves in browser storage and can be exported/imported as JSON.

## Run and change it

1. Open a terminal in `app/` and run `node server.mjs` (Node.js required), then open **http://127.0.0.1:8765**. On the original Windows computer, `app/Start Playground.cmd` also works.
2. Edit `app/app.js` for the page content and interactions, `app/styles.css` for design, and `app/math-engine.js` for answer checking. All images are in `app/assets/`.
3. Run `node --test tests/math-engine.test.mjs` from the `Project Two` folder. The nine tests include every fixed equipment answer and all 20 valid combinations of three interview blocks.

Read `app/README.md` for the detailed behavior, `app/lesson-source.json` and `docs/slide-audit.md` for lesson content, and `app/ARTWORK.md` for the generated image prompts. `docs/` also contains the design study and Baby Boss asset provenance. `references/` contains unmodified, read-only PDF and PowerPoint exports of the original 14-slide deck so it can be studied without another Drive connection.

Important dimensions: the custom block is **23 × (2x + 3y) yd**; the playground is **400 × (x + 32) yd**. Final equipment and grass-area checks depend on the three distinct chosen interview blocks plus the custom block.

This folder is a source snapshot for continued local development. It is not the deployed XY Learning Lab application. Do not deploy it over the live site. Keep the existing handoff files unchanged. Ask the user for explicit confirmation before any GitHub or Cloudflare write, even if a request seems to imply it.

©TruePBL. All rights reserved.
