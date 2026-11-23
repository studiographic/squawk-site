---
name: Squawk
description: A calm logic puzzle about air traffic, announced as a Squawk Air boarding pass.
colors:
  sky: "#2671e0"
  sky-reference: "#2c7cf2"
  deep: "#1a4fa3"
  night: "#0f1623"
  night-deep: "#0a101b"
  slab: "#1c2638"
  blue-ink: "#1f66d1"
  blue-ink-hover: "#2a73e0"
  blue-ink-base: "#154a9c"
  ivory: "#f7f6f2"
  ivory-edge: "#d6d9de"
  paper-ink: "#2b3442"
  paper-dim: "#56627a"
  paper-line: "#c9cfd8"
  text: "#ffffff"
  text-dim: "#a6b2c6"
  gold: "#ffcc33"
  stamp-red: "#c8352c"
typography:
  display:
    fontFamily: "Fredoka, ui-rounded, system-ui, sans-serif"
    fontSize: "clamp(3.75rem, 2.6rem + 5vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Fredoka, ui-rounded, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1.8rem + 2vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.01em"
  city:
    fontFamily: "Fredoka, ui-rounded, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.6rem + 1.6vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 0.95
  lede:
    fontFamily: "Fredoka, ui-rounded, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)"
    fontWeight: 500
    lineHeight: 1.25
  title:
    fontFamily: "Fredoka, ui-rounded, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "Fredoka, ui-rounded, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 500
    lineHeight: 1.45
  code-label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.1em"
  code-head:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.06em"
rounded:
  sm: "6px"
  chip: "10px"
  md: "14px"
  button: "16px"
  card: "20px"
  screen: "26px"
  device-screen: "31px"
  device: "38px"
  pill: "50%"
spacing:
  gutter: "clamp(18px, 5vw, 64px)"
  card-pad: "clamp(22px, 4vw, 40px)"
  ticket-pad: "20px 22px 22px"
  section-top: "clamp(64px, 10vh, 112px)"
  stack-sm: "12px"
  stack-md: "20px"
components:
  button-board:
    backgroundColor: "{colors.blue-ink}"
    textColor: "{colors.text}"
    typography: "{typography.title}"
    rounded: "{rounded.button}"
    padding: "12px 20px"
    height: "56px"
  button-board-hover:
    backgroundColor: "{colors.blue-ink-hover}"
  ticket:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.paper-ink}"
    rounded: "{rounded.card}"
    padding: "{spacing.ticket-pad}"
    width: "460px"
  rules-card:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.paper-ink}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-pad}"
  rule-number:
    backgroundColor: "{colors.blue-ink}"
    textColor: "{colors.text}"
    typography: "{typography.code-label}"
    rounded: "{rounded.pill}"
    size: "34px"
  screenshot-frame:
    backgroundColor: "{colors.night-deep}"
    rounded: "{rounded.screen}"
---

# Design System: Squawk

## Overview

**Creative North Star: "The Squawk Air Boarding Pass"**

The site is a piece of airline paper held up against the sky. A sky-blue ground falls into night navy behind faint radar rings and a dot grid; on top of it sit cards of ivory ticket stock with punched notches, dashed tear lines and a red rubber stamp. The world is inherited from the Squawk game itself (its win screen hands the player the same boarding pass), so the site reads as a page torn out of the game rather than a marketing template.

Density is low and calm, matching a calm puzzle: one hero, one rules card, one strip of screenshots, a footer. Words are set in rounded Fredoka; anything an airline would print as a code (FROM, TO, GATE, XPDR 1200, field labels, rule numbers) is set in JetBrains Mono. Depth comes from paper sitting on a darker edge, not from floating glass.

**Key Characteristics:**
- Sky-to-night gradient ground with radar rings and a 22px dot grid.
- Ivory ticket stock (#f7f6f2) as the only light surface, always with a 4px darker stock edge beneath.
- Fredoka for words, JetBrains Mono uppercase for codes and field labels.
- Dashed 2px tear lines divide paper content.
- One distressed red rubber stamp per surface, which thumps down once.

## Colors

A two-world palette: saturated sky and night navy for the ground, warm ivory and slate inks for the paper laid on it.

### Primary
- **Tower Sky** (sky): top of the hero gradient and the page's `theme-color`. It is a deliberate contrast adaptation of the game's accent: white 20px lede on the game's #2c7cf2 measures about 4.0:1 (under WCAG AA), on this value about 4.65:1.
- **Game Sky (reference)** (sky-reference): the Squawk game's own accent. Kept as the reference value for the world; not used directly as a text ground on the site.
- **Blue Ink** (blue-ink): blue on ivory. Ticket header, origin city, the "Paths" callout, numbered rule discs and the boarding button fill. About 5.0:1 on ivory and 5.4:1 under white text.
- **Blue Ink Hover** (blue-ink-hover): boarding button hover fill (white text about 4.5:1).
- **Blue Ink Base** (blue-ink-base): the darker slab under the boarding button.

### Secondary
- **Stamp Red** (stamp-red): the rubber-stamp ink only (the COMING SOON mark), printed with multiply blending on ivory.

### Tertiary
- **Transponder Gold** (gold): highlight on night. Text selection, default link focus ring, the 1200 squawk code in the footer.

### Neutral
- **Approach Deep** (deep): middle stop of the hero gradient.
- **Night Navy** (night): page background, video poster ground.
- **Night Deep** (night-deep): phone bezel and screenshot frames.
- **Hangar Slab** (slab): footer rule and scrollbar thumb.
- **Ivory Stock** (ivory): ticket and rules card surface.
- **Stock Edge** (ivory-edge): the 4px base edge beneath ivory cards.
- **Paper Ink** (paper-ink): primary text on ivory, destination city, plane glyph fill.
- **Paper Dim** (paper-dim): secondary text and mono field labels on ivory (about 5.7:1).
- **Tear Line** (paper-line): dashed perforations on ivory.
- **Cloud White** (text): text on sky and night.
- **Contrail** (text-dim): secondary text on night (about 8.5:1).

### Named Rules
**The Ink Follows The Stock Rule.** Text colors are chosen by surface: white and contrail on sky and night; paper ink, paper dim and blue ink on ivory. Never put the game sky (#2c7cf2) under white body text; use tower sky or blue ink.

**The One Stamp Rule.** Stamp red belongs to rubber-stamp marks only. It is never a button, link or UI state color.

## Typography

**Display Font:** Fredoka (self-hosted variable 300 to 700, with ui-rounded, system-ui)
**Body Font:** Fredoka
**Label/Mono Font:** JetBrains Mono (self-hosted variable, with ui-monospace)

**Character:** Fredoka's soft rounded letters keep the puzzle friendly and calm; JetBrains Mono supplies the printed-airline register for codes, so the two never compete for the same job.

### Hierarchy
- **Display** (700, clamp 3.75rem to 6rem, 0.95): the wordmark "Squawk" only, with a soft 3px drop shadow on sky.
- **Headline** (700, clamp 2.25rem to 3.25rem, 1): section titles.
- **City** (700, clamp 2rem to 2.5rem, 0.95): FROM and TO values on the ticket.
- **Lede** (500, clamp 1.25rem to 1.5rem, 1.25, balanced): the one line under the wordmark.
- **Title** (600, 1.25rem, 1.2): rule titles, ticket fact values, button label.
- **Body** (500, 1.0625rem, 1.45): running text; section ledes at 1.1875rem capped at 44ch.
- **Code Label** (Mono 700, 0.75rem, 0.1em, uppercase): ticket field labels (From, To, Puzzles, Gate).
- **Code Head** (Mono 700, 0.75rem, 0.06em, uppercase): the ticket header line.

### Named Rules
**The Words And Codes Rule.** Fredoka sets words; JetBrains Mono sets what an airline would print as a code or field label. Mono never sets a sentence.

## Layout

Single column, mobile first, with a fluid gutter (clamp 18px to 64px). On phones the hero stacks wordmark, phone frame (min(270px, 68vw)) and the ticket, which sits clear of the phone (gap clamp 32px to 44px) so the preview is never covered. The COMING SOON stamp takes the route plane's place between FROM and TO (the plane is hidden under it), and may overlap the city names a little on phones like a real stamp. At 900px and up the hero becomes two columns: phone left (min(330px, 30vw)) spanning both rows, wordmark and ticket stacked right in a 460px column, gap clamp 48px to 112px.

Sections below the hero sit in a 1120px container with clamp 64px to 112px top padding. The rules card caps at 920px; its four rules go two-up at 900px. Screenshots are a horizontal scroll-snap strip (columns min(66vw, 260px)) on narrow screens and a three-column grid capped at 940px on wide ones. Ticket facts are a 2x2 grid below 420px and a single spaced row above.

## Elevation & Depth

Depth is paper on a stock edge: every ivory card and the boarding button sits on a hard, unblurred 4px darker base, plus one soft ambient drop toward the night. Device frames use a soft long shadow only. Nothing uses glass, blur or glow.

### Shadow Vocabulary
- **Ticket stock** (`filter: drop-shadow(0 4px 0 #d6d9de) drop-shadow(0 22px 22px rgba(2,6,16,0.45))`): the notched ticket; a filter so the edge follows the mask.
- **Card stock** (`box-shadow: 0 4px 0 #d6d9de, 0 22px 40px -16px rgba(2,6,16,0.55)`): the rules card.
- **Button slab** (`box-shadow: 0 4px 0 #154a9c, 0 8px 14px -6px rgba(15,22,35,0.35)`): the boarding button, mirroring the game's buttons, which sit on a darker base slab. Pressed, it drops 3px onto a 1px slab.
- **Device** (`box-shadow: 0 30px 60px -10px rgba(2,6,16,0.6)` with a 2px inset highlight): the phone frame; screenshots use `0 18px 36px -12px rgba(0,0,0,0.6)`.

### Named Rules
**The Stock Edge Rule.** A hard 0 4px 0 offset is reserved for things that are paper or a pressable game button, and its color is always a darker tone of the same object (stock edge for ivory, blue-ink base for blue ink). Never black, never on text or images.

## Shapes

Generously rounded, toy-like corners: 20px on cards, 16px on the button, 10px on the XPDR chip, 26px on screenshot frames, 38px outer / 31px inner on the phone. The ticket is punched with two 13px semicircular notches at the left and right edge, positioned by script exactly on the tear line. Tear lines are 2px dashed paper-line. Rule numbers sit in 34px circles.

## Components

### Buttons
Tactile and game-like: a blue pill-ish slab that presses down.
- **Shape:** gently rounded (16px), min height 56px, full width of the stub.
- **Primary (board):** blue ink fill, white Fredoka 600 at 1.25rem, 12px 20px padding, on the button slab shadow.
- **Hover / Focus:** hover lightens to blue-ink hover; active translates 3px down and shrinks the slab to 1px; focus ring is a 3px outline in blue ink (on ivory) at 4px offset. Transitions 220ms on the expo-out ease.

### Cards / Containers
- **Ticket:** ivory, 20px corners, 20px 22px 22px padding, max 460px, notched at the tear line; header line in code-head blue ink with the transponder code in paper dim; route row FROM / plane glyph / TO; facts row under a dashed tear; stub holding only the action and one line of paper-dim note.
- **Rules card:** same ivory stock, 20px corners, clamp 22px to 40px padding, numbered list between dashed tear lines.
- **Screenshot frame:** 6px night-deep border, 26px corners, device shadow.

### Navigation
None. The page is one scroll; the footer carries the maker credit, email link and the XPDR 1200 code in mono with gold digits.

### Boarding Pass Stamp (signature)
A distressed SVG rubber stamp: double rounded-rect border and COMING SOON in Fredoka 700, stroked and filled in stamp red, roughened by turbulence, displacement and speckle filters, rotated -9deg at 0.88 to 0.9 opacity with multiply blending. When the ticket is 60% in view it thumps once (520ms: from scale 1.7 and -16deg with blur to rest) and the ticket jolts 3px. Reduced motion shows it at rest with no animation.

### Numbered Rules
Each rule is a grid row: a 34px blue-ink disc with a white mono numeral, then the rule illustration (max 300px), title and paper-dim sentence, separated by dashed tear lines.

## Do's and Don'ts

### Do:
- **Do** put light content on ivory ticket stock (#f7f6f2) with a 4px stock-edge base, never on plain white panels.
- **Do** set codes and field labels in JetBrains Mono 700 uppercase at 0.75rem, and words in Fredoka.
- **Do** use blue ink (#1f66d1) for blue text or fills on ivory, and tower sky (#2671e0) where white text sits on the sky.
- **Do** separate paper content with 2px dashed tear lines in #c9cfd8.
- **Do** let a stamp animate once on entry and rest thereafter; honor reduced motion.

### Don't:
- **Don't** set white body text on the game's #2c7cf2; it fails AA at text sizes.
- **Don't** use stamp red for buttons, links or states.
- **Don't** use a hard offset shadow in black or on anything that is not paper or a pressable button.
- **Don't** add glass, blur or glow surfaces; depth is paper on an edge.
