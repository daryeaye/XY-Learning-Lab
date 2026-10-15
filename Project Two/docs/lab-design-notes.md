# XY Learning Lab reference study

Read-only study of https://xylearninglab.t-pbl.com/ on 2026-10-14. No cloud files, settings, lessons, GitHub content, or Cloudflare resources changed.

## Measured visual tokens

- Page: warm ivory `#f7f5ef`; foreground and primary action `#24364b`.
- UI/body: Source Sans 3, sans-serif; 20px body in the observed project view, 15px upper navigation, 16px stepper, 14px profile/status text.
- Display headings: Libre Baskerville, Georgia, serif; project H1 32px.
- Project 1 main content: centered 1100px wide at a 1265px viewport (82px left gutter). Broad white card, 14px corner radius, 24px padding, thin `#d9dfd9` border. Main header starts around 90px from page top below a 64px site header.
- Active step: green `#357655`, filled numbered circle, roughly 3px green bottom rule. Inactive step border `#d9dfd9`.
- Buttons: 7px radius, approximately 51px height in project UI. Primary dark navy/white; secondary white/navy with thin outline.
- Small uppercase eyebrow with letter spacing above large serif title. Home and saved indicator aligned right. Numbered stages span the content width under the title. The next action is at bottom right of the lesson card. Small copyright sits outside the main content near page bottom.
- Home curriculum uses a wide grid of pale blue-gray course cards; active 7th-grade card has a pale blue wash. Projects use the quieter ivory/white treatment.

## Observed Project 1 workflow

Curriculum > 7th Grade Math > Unit 1 > Project#1: My Integer Story. Its teacher creator has four stages: Introduction, Title and classes, Word problem pool, My Integer Story settings. Page eyebrow: THREE PANELS. ONE STORY. Title: My Integer Story Creator. Intro appears inside the white card, with centered instruction above video and a bottom-right Next button. A separate Save Setup Draft button is outside/below the card. I did not activate Save or edit anything. Current user is a teacher/developer, so this is the creator rather than student view.

For the new local student app, borrow the centered container, deliberate heading/body pairing, paper surfaces, green progress, and consistent bottom navigation. Retain the user's pixel lesson style inside that shell; omit roster, grades, curriculum, and teacher controls as requested.

## Read-only infrastructure findings

- Cloudflare access verified through GET /accounts and GET /accounts/{id}/workers/scripts.
- Live application is the `xy-learning-lab` Worker. GET of Worker content succeeded. The response is a 28.8MB multipart deployment bundle, so no full application was copied locally or included in the deliverable.
- Account has no Cloudflare Pages projects in the listing.
- GitHub repository `daryeaye/XY-Learning-Lab` is private and accessible. Recursive tree read contains curriculum JSON and Markdown handoff documents, rather than the deployed UI source.

## Current authoritative design references

1. [CAST UDL Guidelines 3.0](https://udlguidelines.cast.org/) recommends learner choice, joy/play, clear goals, support for mathematical symbols, graduated practice, and action-oriented feedback. App application (our inference): let pupils choose/name equipment; keep the mission visible; use specific encouragement/hints beside answer fields; preserve all attempts rather than treating a mistake as failure.
2. [W3C WCAG 2.2 overview](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/) specifies a single-pointer alternative for dragging, minimum target size of 24x24 CSS pixels with exceptions, consistent placement of help, and avoiding redundant entry. App application (our inference): click equipment then click canvas to place, plus keyboard controls; aim for 44px main targets for children; keep Need Help in a stable position; carry name/dimensions/design automatically into later pages.
3. [IES/What Works Clearinghouse elementary mathematics practice guide](https://ies.ed.gov/ncee/wwc/practiceguide/26) (2021, current official listing) gives strong-evidence recommendations for systematic instruction, concise mathematical language, and carefully chosen concrete/semi-concrete representations. App application (our inference): place algebraic dimensions directly beside the equipment or rectangle they describe, use short worked scaffolds, then have learners produce perimeter/area expressions independently.

These sources inform interaction/accessibility decisions; the user's Slides and Google Form remain the authority for lesson words and answer rules.
