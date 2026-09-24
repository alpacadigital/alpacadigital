---
name: Alpaca Digital
description: A local search map of Rochester, MN, where one ultramarine route leads the customer to your business.
colors:
  route: "#3b2ef0"
  route-ink: "#ffffff"
  route-soft: "#e4e2fd"
  land: "#e6ebe2"
  land-deep: "#d9e0d4"
  paper: "#ffffff"
  street: "#ffffff"
  casing: "#c9d2c6"
  rule: "#c9d2c6"
  ink: "#13201b"
  ink-2: "#45544d"
  ink-3: "#66756e"
  highway: "#f2b33d"
  highway-casing: "#d2921c"
  park: "#c3dcae"
  park-ink: "#3f6b2e"
  water: "#a7d3db"
  water-ink: "#2a6f7a"
  band: "#13201b"
  on-band: "#e4ece7"
  on-band-2: "#a9b8b1"
  band-rule: "#2c3b35"
  up: "#8fd16f"
  route-night: "#8c83ff"
  route-ink-night: "#0b0a26"
  route-soft-night: "#221f4d"
  land-night: "#0e1714"
  paper-night: "#16221e"
  street-night: "#24322c"
  rule-night: "#2a3833"
  ink-night: "#e4ece7"
  ink-2-night: "#a9b8b1"
  ink-3-night: "#8a9a93"
  band-night: "#08100d"
typography:
  display:
    fontFamily: "Big Shoulders, Arial Narrow, sans-serif"
    fontSize: "clamp(3.6rem, 5.2vw, 5.6rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Big Shoulders, Arial Narrow, sans-serif"
    fontSize: "clamp(2.6rem, 6vw, 4.4rem)"
    fontWeight: 800
    lineHeight: 0.95
  title:
    fontFamily: "Big Shoulders, Arial Narrow, sans-serif"
    fontSize: "2.4rem"
    fontWeight: 800
    lineHeight: 1
  title-text:
    fontFamily: "Overpass, system-ui, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 700
    lineHeight: 1.25
  body:
    fontFamily: "Overpass, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  lead:
    fontFamily: "Overpass, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Overpass, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.43
  map-label:
    fontFamily: "Overpass, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    letterSpacing: "0.02em"
rounded:
  row: "12px"
  card: "16px"
  menu: "24px"
  sheet: "28px"
  pill: "9999px"
spacing:
  gutter: "20px"
  gutter-sm: "32px"
  section: "96px"
  section-lg: "144px"
  container: "1240px"
  stage: "1600px"
components:
  button-route:
    backgroundColor: "{colors.route}"
    textColor: "{colors.route-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "16px 28px"
  button-route-compact:
    backgroundColor: "{colors.route}"
    textColor: "{colors.route-ink}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  nav-link:
    textColor: "{colors.ink-2}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  nav-link-hover:
    backgroundColor: "{colors.land}"
    textColor: "{colors.ink}"
  rank-badge-solid:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    size: "36px"
  rank-badge-you:
    backgroundColor: "{colors.route}"
    textColor: "{colors.route-ink}"
    rounded: "{rounded.pill}"
    size: "36px"
  input-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.row}"
    padding: "14px 16px"
  panel-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
  sheet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sheet}"
    padding: "40px 48px"
  change-chip:
    textColor: "{colors.up}"
    rounded: "{rounded.pill}"
    padding: "2px 10px"
---

# Design System: Alpaca Digital

## Overview

**Creative North Star: "The Local Search Map"**

The whole site is a street map of Rochester, MN, drawn the way a navigation app draws a city: pale green-gray land, white streets with gray casing, amber highways, park green, river teal with italic water labels, and green-black ink. Interface pieces behave like map UI floating over that ground: a results sheet, a docked results panel, place cards, a legend, pins. The one ultramarine ink on the page is the route to the customer, and nothing else wears it for decoration.

Density is calm and generous, built for older owners reading on phones: large body type (17px), 44px tap targets, long line-heights, and sections that breathe (96px on phones, 144px on desktop). Headlines are civic and loud (Big Shoulders, extra-bold, all caps); everything else is quiet highway-sign text (Overpass). A night map replaces the day map in dark mode with the same roles, not a new palette.

Rank is always shown by pin form, never by color: solid for the top three, outlined for the rest of page one, dashed for buried. Numbers appear only where sequence is information: ranks and route stops.

**Key Characteristics:**
- Map-as-ground: the land, street, park and water colors are the neutrals.
- One reserved ultramarine for the route to the customer (your pin, route lines, audit calls to action, the audit section).
- Rank by pin form: solid, outlined, dashed.
- Floating map-UI panels are the only lifted surfaces.
- Big Shoulders caps for headings, Overpass for everything read.
- A dark band carries proof (Results) and closes the page (footer).

## Colors

A cartographic palette: desaturated land and ink neutrals, map-feature hues kept inside map drawings, and one saturated route ink. Each day token has a night counterpart in `.dark`; the `-night` keys above record the ones that change most.

### Primary
- **Route Ultramarine** (route; night: route-night): the path from searcher to business. Your pin and its "Your business" callout, the route line in the hero, the "Found" state of the switch, the "Call" chip, every audit call to action, the Process route line and its numbered stops, and the whole audit section field. It also carries the system's focus ring, text selection, and the typing caret in the search bar, because those mark where the user is.
- **Route Ink** (route-ink): text and marks on route fills. White by day, near-black indigo by night.
- **Route Wash** (route-soft): the background of your row in the results list once it reaches #1. Nowhere else.

### Secondary
- **Highway Amber** (highway, highway-casing): highways and the amber road in the Local SEO map symbol. Map drawings only.
- **Park Green** (park, park-ink): parks and park labels in the map and symbols.
- **River Teal** (water, water-ink): rivers, lakes, and italic water labels.

### Tertiary
- **Signal Green** (up): positive change on the dark band only: the change chips and "up 2%" in Results.

### Neutral
- **Land** (land): the page ground, the map base, and hover fills on paper surfaces.
- **Land Deep** (land-deep): parcels drawn outside the city grid on the map.
- **Paper** (paper): sheets, panels, cards, inputs, and the Services and About sections.
- **Street** and **Casing** (street, casing): streets and their outlines; also the rail under the Process route.
- **Ink** (ink): headings, primary text, solid rank pins and badges.
- **Ink 2** (ink-2): secondary text, metadata, outlined pins of competitors.
- **Ink 3** (ink-3): placeholders, the ROCHESTER map label, inactive list dots.
- **Rule** (rule): hairlines between rows, input borders, legend borders.
- **Band** (band, on-band, on-band-2, band-rule): the dark proof band (Results) and the footer. The footer forces the night map, so its band is band-night.

### Named Rules
**The Reserved Route Rule.** Ultramarine means "the way to the customer." It goes on your pin, route lines, route stops, audit calls to action, and the audit section, plus focus, selection, and the search caret. Competitor pins, headings, links, icons, and decoration never use it.

**The Map Material Rule.** Highway amber, park green, and river teal live inside map drawings and map symbols. They never become button, text, or section colors.

**The Band Rule.** The dark band is for the proof table and the footer. Positive-change green appears only on it.

## Typography

**Display Font:** Big Shoulders, variable with optical size axis (fallback: Arial Narrow, sans-serif)
**Body Font:** Overpass, normal and italic (fallback: system-ui, sans-serif)

**Character:** A Midwestern civic display face over a Highway Gothic descendant. Headlines read like city signage; text, labels, and figures read like road signs.

### Hierarchy
- **Display** (800, clamp(3.6rem, 5.2vw, 5.6rem) on desktop, clamp(3.1rem, 11vw, 4.25rem) on phones, 0.92, uppercase): the hero H1 only.
- **Headline** (800, clamp(2.6rem, 6vw, 4.4rem), 0.95, uppercase): every section H2, balanced wrap, often capped at 16 to 18ch.
- **Title** (800, 2rem to 2.4rem, 1, uppercase, Big Shoulders): service names; also the audit form title (1.7rem) and the Results total figure.
- **Title (text)** (Overpass 700, 1.25rem to 1.35rem): route stop titles, project names, one-line job statements.
- **Body** (400, 1.0625rem, 1.6): default text. Section leads step up to 1.125rem at 1.625 and hold 30 to 38rem measure.
- **Label** (600 to 700, 0.875rem): metadata, captions, table headers, chips, the wordmark's supporting lines.
- **Map label** (600, 13px, 0.02em tracking, halo in the ground color): street names on the map; water labels are italic 14px teal.

### Named Rules
**The Civic Caps Rule.** Big Shoulders is set extra-bold and uppercase, for H1, H2, service titles, the wordmark (0.04em tracking), and the one hero figure. It never sets running text.

**The Tabular Figures Rule.** Ranks, route stop numbers, clicks, changes, highway shields, and coordinates use tabular figures.

## Layout

Two containers: the hero stage runs to 1600px with the map full-bleed behind it, and every content section sits in a 1240px container with 20px gutters (32px from 640px up). Sections stack in alternating grounds (land, paper, band, route) with no dividers between them; vertical padding is 96px on phones and 144px from 1024px up.

Desktop sections split on asymmetric 5:7 or 5:6 grids, with the heading column sometimes sticky. Lists are ruled: a 2px ink top rule, then 1px rule hairlines between rows.

The hero changes form by breakpoint. On desktop the map fills the viewport (at least 760px tall), the white sheet floats on the left (up to 600px wide, 24px inset), and the results panel docks top-right at 360px. On phones the map is a 320px band on top and the sheet rises over it as a bottom sheet with a 28px top radius, keeping the H1 and audit button above the fold. The navbar is a floating pill 12px from the top edge (24px on desktop).

## Elevation & Depth

The page is flat except for map UI that floats over something. Sheets, the docked results panel, the navbar, the mobile menu, the audit form card, the portrait caption, and the project browser frame all use one shadow: a tight contact shadow plus a long soft drop tinted with ink. In the night map, the shadow turns into a 1px rule ring plus a black drop, because dark surfaces can't show a tinted shadow.

### Shadow Vocabulary
- **Floating panel, day** (`box-shadow: 0 1px 2px rgb(19 32 27 / 0.1), 0 14px 36px -12px rgb(19 32 27 / 0.28)`): any map-UI surface floating over the map or a section ground.
- **Floating panel, night** (`box-shadow: 0 0 0 1px var(--rule), 0 14px 36px -12px rgb(0 0 0 / 0.6)`): the same surfaces in dark mode.
- **Pin ground shadow** (ink ellipse at 18% opacity under each pin tip): the one depth cue inside the map drawing.

### Named Rules
**The Floating Panel Rule.** Only surfaces that float like map UI get a shadow, and they all get the same one. Section blocks, rows, and legends stay flat and use rules or tone.

## Shapes

Soft, app-like geometry. Actions, the navbar, rank badges, chips, the switch, and nav links are full pills. Large floating surfaces (the hero sheet, audit form card, portrait) use 28px corners; cards and panels (results panel, project browser, legend) use 16px; inputs and list rows use 12px; the mobile menu uses 24px. Map symbols sit in 14px-rounded squares of land.

The pin is the recurring silhouette: a teardrop with a round head, used for map pins, the legend key, the audit form title, and the success state. Rank pins at the top of the map scale up (your #1 pin to 1.3x, the top three to 1.12x) and lower ranks shrink to 0.9x.

## Components

### Buttons
Confident, pill-shaped, and always route ink, because every primary action is a step toward the audit.
- **Shape:** full pill.
- **Primary (route):** route fill, route-ink text, bold 1rem to 1.05rem, 16px by 28px padding, trailing arrow where it links forward.
- **Compact (navbar):** same fill, 10px by 20px, 0.95rem.
- **Hover / Focus:** lifts 2px (1px in the navbar) with the settle ease over 300ms; the arrow nudges 2px right. Focus is the global 3px route outline at 3px offset.
- **Text links as secondary actions:** semibold ink with a rule-colored underline 4px below that darkens to ink on hover.

### Chips
- **Change chip:** signal-green outline and text on the band, 0.875rem bold tabular; the total uses a filled green chip with band-colored text.
- **Buried/Found switch:** a land-colored pill track with two pill buttons. "Found" on is route; "Buried" on is ink; off is ink-2 text.

### Cards / Containers
- **Corner Style:** 16px for panels and cards, 28px for sheets.
- **Background:** paper on land, land, or route grounds.
- **Shadow Strategy:** the floating panel shadow (see Elevation), or none with a 1px rule border for static legends.
- **Internal Padding:** 16px in panel headers and rows, 20px in legends, 24px to 36px in the audit card, 40px by 48px in the desktop sheet.

### Inputs / Fields
- **Style:** paper fill, 2px rule border, 12px radius, 14px by 16px padding, 1.02rem ink text, ink-3 placeholder. Labels sit above in bold 0.95rem ink; "(optional)" hints are regular ink-2.
- **Hover / Focus:** border darkens to ink-3 on hover and turns route on focus.
- **Error:** a land-filled, 12px-rounded message in semibold ink with `role="alert"`.

### Navigation
A floating pill panel at 95% paper with a background blur. Big Shoulders wordmark beside the alpaca logo; semibold ink-2 pill links that fill with land on hover; a round day/night map toggle; a compact route button. On phones, links fold into a floating 24px-rounded panel with 48px rows and a full-width route button.

### Rank Pins and Badges (signature)
Rank shows by form. Solid (ink fill, paper stroke, white rank number) for 1 to 3; outlined (paper fill, 2.5px ink stroke, dot head) for 4 to 8; dashed (4 3 dash, 70% fill, faded dot) for 9 and below. Your pin uses route in place of ink. The results list badges mirror the same three forms at 36px.

### Results Panel (signature)
A 16px paper panel docked over the map: a search bar with a typing query and route caret, "Near Rochester" with the Buried/Found switch, four 64px rows that reorder by FLIP transform with the settle ease over 700ms, and a small caption naming it an illustration.

### Route (signature)
A 6px round-capped route line draws from "Someone nearby" to your pin (stroke dash over 1.4s). In Process the same route is a 14px street rail with a route core, and the four stops are 40px paper circles with a 3px route ring and a route number.

### Motion
One ease, the settle curve `cubic-bezier(0.16, 1, 0.3, 1)`, for pin scaling, row reordering, route drawing, and button lifts. Searcher dots drift toward pins weighted by rank and ping on arrival; they pause offscreen and in hidden tabs. With reduced motion, the switch jumps straight to Found and all animation stops.

## Do's and Don'ts

### Do:
- **Do** keep route ultramarine (#3B2EF0 day, #8C83FF night) for the route to the customer: your pin, route lines and stops, audit calls to action, the audit section, and focus and selection.
- **Do** show rank by pin form: solid for 1 to 3, outlined for 4 to 8, dashed for 9 and below.
- **Do** give every floating map-UI surface the one floating panel shadow, and nothing else.
- **Do** set H1, H2, and service titles in Big Shoulders extra-bold caps, and everything read in Overpass at 17px or larger.
- **Do** use tabular figures for ranks, stops, and metrics, and number things only where order is information.
- **Do** define every new color in both the day map (`:root`) and the night map (`.dark`).

### Don't:
- **Don't** use route ink on competitor pins, headings, plain links, icons, or decoration.
- **Don't** show rank with color alone; the form has to carry it.
- **Don't** take highway amber, park green, or river teal outside map drawings and map symbols.
- **Don't** add shadows to section blocks, list rows, or static legends.
- **Don't** set running text in Big Shoulders or set Big Shoulders in lowercase.
- **Don't** use signal green off the dark band.
