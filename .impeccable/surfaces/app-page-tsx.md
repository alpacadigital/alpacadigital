---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: []
---

# Surface brief: home page (app/page.tsx)

Scope: the single-page marketing site at alpacadigital.co. Visitor mode: Persuade.

Audience and job: Rochester-area business owners, mostly on phones, asking "will this person get me more customers?". Action: request a free visibility audit (secondary: call/text, email). Proof: five live client sites, Exclusive Drywall Search Console numbers (28-day, confirmed), Gates's photo. Testimonials pending; render nothing until real quotes exist. No prices.

## Direction contract

THESIS: The page is a local search map of Rochester. The visitor watches "your business" climb from a buried #9 to the top pin while searcher dots drift to it. Refuses the agency default: big headline plus six icon cards plus screenshot grid.

OWN-WORLD: Day map: pale green-gray land, white streets with gray casing, amber highways, park green, river teal with italic water labels, green-black ink. One ultramarine ink (#3B2EF0) is reserved for the route to the customer: your pin, the route line, the audit button, nothing decorative. Night map for dark mode. Type: Big Shoulders (Midwestern civic display) and Overpass (Highway Gothic lineage) for text, labels, and tabular figures. Components are map UI: results sheet, place cards, legend table, pins whose rank is shown by form (solid top 3, outlined page one, dashed buried).

STORY: Your next customer is searching right now. Three things decide who gets the call (legend: website, Google Business Profile, search). Proof: Exclusive Drywall's real queries. The work as a place list. Gates in person. The route: audit, plan, build, stay. Close on the audit form.

FIRST VIEWPORT: Full-bleed authored SVG map of Rochester (Zumbro River, Silver Lake, Broadway, Hwy 52, Hwy 14). Desktop: white results sheet on the left third with a typing search bar, H1 "Be the first call when Rochester searches." at display scale, one-line sub naming Gates and the three services, the ultramarine "Get my free visibility audit" button, then a three-row local results list. The map fills the rest with pins. Mobile: map band on top, the sheet as a bottom sheet overlapping it, H1 and button above the fold.

FORM: Local search map, grounded list position 7 of 7. Seed key a16b1ebd. Signature interaction: a Buried/Found switch that reorders the results list (FLIP) and moves your pin from dashed to solid, auto-played once on load; searcher dots obey one law, drifting toward pins weighted by rank. Motion grammar: ease-out settles, dots paused offscreen, everything static under reduced motion. Raises: reserved route ink (orienteering); rank by pin form (spectrogram rail); one motion law (gravity garden); one control flips the whole map (drawcord cape); calm tone with one urgent moment, at the audit form (broadcast); numbering only where sequence is information: ranks and route stops (teletext).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Cited adaptations

- Results panel placement: on desktop the search bar and results list float top-right over the map, the way map UIs dock results, so the left sheet can give the H1 and audit button the whole column. On phones the panel sits below the sheet so the H1 and button stay above the fold. The list shows 4 rows because the buried state needs a visible #9 row under the top three.
- Silver Lake is drawn but sits under the results panel from 1280 to 1920, as map features under a docked panel do. The Hwy 52 shield moved onto the open stretch of 52 south of downtown.
- "Replies within one business day" and "I keep my client list small on purpose" are carried over from the incumbent site's copy.

## Unresolved

- Phone number (pending from Gates).
- 3-month Search Console figures (85 clicks, 3.03K impressions, avg position 7.1): add once confirmed as Exclusive Drywall.
- Testimonials: pending from clients.
