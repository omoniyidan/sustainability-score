---
name: cosplay-project-quote
description: Build a detailed, clean 3-package price quote (HTML page plus PDF) for a cosplay, costume or wearable 3D-modelling project such as an Iron Man suit, helmet, armor or prop build. Use when the user asks for a quote, package pricing, price list or proposal for a cosplay or 3D print/wearable build.
---

# Cosplay project quote

Produces a branded quote: a published HTML artifact and an A4 PDF. The reference example is `assets/quote-template.html` (Iron Man Mark 42, Basic from $1,200).

## Defaults
- Prepared by: leave **blank** (fill-in lines for name and studio, blank "Designer" signature label, no name in the footer) until the user gives a name. Once given, fill the Prepared by box, the Designer signature label and the footer with it. Never reuse a name from an earlier quote without being told.
- Three packages: Basic / Standard (marked "Most chosen") / Premium. Each includes the one before.
- Currency: ask. Default USD.
- Leave out dates, validity periods, delivery days, timelines and rush pricing unless the user asks for them. Quote number has no date, e.g. `QT-<CODE>-001`.
- Keep the client box as blank fill-in lines. Add a Marvel/IP-style note in the terms when the character is licensed IP (personal, non-commercial use unless a commercial licence add-on is bought).

## Steps
1. Ask the user (short, one round) for anything not given: character/project, currency, end use (cosplay print, film/animation, game asset), the Basic starting price, client name.
2. Copy `assets/quote-template.html` to a working file and rewrite the content for the new project:
   - Title, hero text, quote number, scale/output meta.
   - Package cards: Basic = core shell/segments, scaled to client measurements, split for printing, assembly map, 1 revision. Standard adds surface detail, one signature moving feature, finishing guide, renders, 2 revisions. Premium adds articulation, electronics/LED layout, under-suit/harness, test print, walkthrough video, 3 revisions.
   - Price breakdown boxes: line items must sum exactly to each package total. Standard = Basic + extras, Premium = Standard + extras.
   - Part-by-part table: list the real segments of the character's costume with Basic/Std/Prem columns.
   - Add-ons table, payment schedule (default 40/30/30), terms, signature blocks.
   - Keep the CSS tokens, light/dark theme blocks and print styles unchanged.
3. Publish the HTML with the Artifact tool (icon `document`, one-sentence description).
4. Make the PDF: `NODE_PATH=$(npm root -g) node scripts/render_pdf.js <abs html path> <abs pdf path>` (Playwright Chromium, A4, scale 0.72 so the desktop layout is used). Check page count (aim for 3 pages) with `pdftoppm -r 50 -png` and look at page 1.
5. Send the PDF to the user with SendUserFile and give the artifact link.

## Pricing guide (when the user gives only the Basic price B)
Standard about 2x B, Premium about 3.5x B. Round to clean numbers. Say plainly which numbers are assumptions.
