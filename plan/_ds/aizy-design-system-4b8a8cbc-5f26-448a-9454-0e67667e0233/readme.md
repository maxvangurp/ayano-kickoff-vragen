# aizy — Design System

**aizy** (always lowercase, never "Aizy" in body copy) is a Dutch AI performance-marketing
software company based in Breda, founded 2024 by Stefan Nuijten with tech investor
Michiel Mol. It sells software — not agency hours — that connects directly to the
official Google Ads, Meta and TikTok APIs and *executes* optimisations rather than
recommending them. Roughly 500+ customers, 140.000+ automated optimisations per
month, 40+ specialists, top-10% fastest-growing SaaS worldwide (ChartMogul), WBSO-
recognised, official development partner of Google and Meta.

Two commercial lines: **aizy paid** (Google/Meta/TikTok ad optimisation) and
**aizy SEO** (organic + AI-search visibility). One product surface: the aizy
platform — Overzicht, Campagnes, Aanbevelingen, Automations, Autoscale,
Rapportage and **Aizy Agent**, a chat surface that proposes an intervention and
then writes it into the ad accounts on approval.

---

## Sources used to build this system

| Source | What it gave us |
|---|---|
| `uploads/aizy_salespresentatie_2026.pdf` (28 slides, image-only PDF) | The entire visual language: colour, type, layout, card system, photography, product screens. Page renders extracted to `scraps/page-01.png` … `page-28.png`. |
| `uploads/Aizy-Logo-Black.png`, `uploads/Aizy-Logo-White (1).png` (5000×5000) | The logo. Tight-cropped and de-matted into `assets/`. |
| https://www.tryaizy.com (Framer site, public pages) | Copy, tone, company facts, product IA, English/Dutch voice. |

**Not available:** no codebase, no Figma file, no font binaries, no icon library, no
brand book. Everything below is measured off the deck renders — sampled pixel
colours, measured spacing — not recalled from a spec.

---

## CONTENT FUNDAMENTALS

**Language.** Dutch first. The sales deck is entirely Dutch; the website has an
English mirror. Dutch copy uses **informal second person** — *je / jij / jouw*,
never *u*. English copy switches to *you* and stays equally plain.

**Person.** "Wij" for aizy, "je" for the reader. The brand talks *to* one business
owner, not to a market. "Wij maken de allerbeste performance marketing bereikbaar
voor álle ondernemers." Note the accent on *álle* — aizy uses accents for spoken
emphasis (*álle*, *écht*, *wél*, *één*) rather than bold or italics.

**Sentence shape.** Short declaratives, often fragments. Two-beat rhythm with a
full stop in the middle of what would be one sentence:

> "Software die je advertenties echt beheert. Niet adviseert."
> "De meeste AI adviseert. De onze voert uit."
> "Marketing is geen project. Het is een systeem dat nooit stilstaat."
> "Adviseren is een rapport. Uitvoeren is rendement."

**Headlines** are two or three lines, each a complete sentence, and **always end in
a full stop** (or a question mark: *"Zullen we beginnen?"*). Never a colon, never
an exclamation mark.

**Eyebrows** are two-to-four-word section labels in sentence case in the source,
rendered uppercase with 0.17em tracking: *Het probleem · Waarom nu · De oplossing ·
Onze positie · Ons echte onderscheid · De software · Het verschil · De vergelijking
· Wat het oplevert · Investering · Bewijs · Erkenning · In goed gezelschap · Het team*.

**Casing.** Sentence case everywhere except eyebrows and table headers. The
wordmark is lowercase *aizy* even at the start of a sentence. Product names keep
their capital: *Aizy Agent*, *Autoscale*.

**Numbers.** Dutch conventions, always: comma decimal, period thousands, thin space
after the euro sign — *€ 63,4K · 140.000+ · 6,49 · +32% · −30% · € 1.400*. Ranges use
a middle dot or an en dash (*6 → 11*, *Week 0 tot 6*). Percentages carry an explicit
sign when they are a change (+32%, −70%).

**Tone.** Confident, concrete, anti-agency. The enemy is named plainly ("Je betaalt
voor een senior, je krijgt een junior met een kater") but the claim is always
sourced or quantified. Every benefit is a number, and numbers carry a source line
("Bron: WordStream, ANA & McKinsey Digital"). Risk and honesty are part of the
pitch: the deck spends a whole slide on what happens if a vendor is *not* on the
official API.

**Vocabulary to keep:** rendement, verspilling, bijsturen, ingreep, doorvoeren,
onderbouwd, zekerheid, grenzen, auditlog, in gewone taal.
**Vocabulary to avoid:** bureau-jargon, "synergie", "oplossingen op maat",
"innovatief" as a self-description, anything a traditional agency would say.

**Emoji: never.** Not in the deck, not on the site, not in UI. No emoji, no emoji
cards, no decorative unicode beyond ▲ ▼ ↔ → and the euro sign.

---

## VISUAL FOUNDATIONS

**Colour.** Two anchors and one accent. **Purple** `--purple-500 #5A46FF` is the
brand: buttons, eyebrows on light, accent rules, the "this is us" card. **Ink**
`--ink-900 #1F1144` is the brand's black — a deep indigo, never neutral — used for
every headline and for the dark ground. **Mint** `--mint-400 #5DEED4` is the accent
that only appears *on* dark or purple: eyebrows, accent rules, highlight clauses,
closing-slide bullets. Rose `#F5356B` marks waste and loss; green `#0E9E77` marks
executed and positive. Every neutral is cool — `--grey-100 #F1F4FB` has a violet
cast, `--wash-cyan #E5F4F9` a cyan one. **Maximum two grounds per deck:** the light
wash and the deep indigo.

**Gradients** — three, each with one job.
`--gradient-brand` (purple → periwinkle → sky, 96°) fills exactly *one* line of a
headline and nothing else. `--gradient-purple` (#5744FE → #7A5BFF, 135°) is the
purple card and the aizy column of a comparison table. `--gradient-page-light`
(white → violet → cyan, 140°) is the light slide ground; `--gradient-page-dark` is a
radial from a lighter violet at top-right into near-black at bottom-left. Never a
gradient behind body text, never a rainbow, never a bluish-purple "AI" wash.

**Type.** One family, geometric sans, across display and body. Display: 800 weight,
−0.028em tracking, 1.02 leading, two or three lines. Body: 400 at 1.45–1.6 leading in
`--ink-500`. Card titles: 700 at 1.22. Big stats: 800 at −0.03em, purple on light and
white on purple. Eyebrows: 700, 12px, 0.17em, uppercase. Nothing in the system is
lighter than 400 or set in italics except customer quotes.
**The face is Plus Jakarta Sans**, supplied by aizy and shipped in `assets/fonts/`
as a variable TTF (weights 200–800, upright and italic) with static fallbacks.
Reference it only through `--font-core` / `--font-display` / `--font-body`.

**Spacing & layout.** Slides are a fixed 1920×1080 (authored here at 1280×720) with
104px side margins, 88px top margin and a **26px gutter** between cards. Card padding
is 26px, 32px on large cards. Content is left-aligned to a single left edge that
never moves. Footer furniture is fixed on every slide: `tryaizy.com` bottom-left at
11px, logo bottom-right at 22px. Card rows are 3, 4 or 5 across, always equal width,
always equal height. The 4px scale runs 4/8/12/16/20/24 then jumps to 32/40/48/64/80/104.

**Backgrounds.** No patterns, no textures, no noise, no hand-drawn illustration, no
decorative SVG. A slide is either the light wash, the deep indigo radial, or a
full-bleed photograph with a left-to-right dark veil (`--gradient-veil-dark`) so
white type clears 4.5:1 on the left third.

**Photography.** Real customers and the real Breda office, shot in natural light:
a shop owner with her phone, the team on a sofa under the office logo wall, three
people around a meeting table. Grade is cool-neutral, slightly desaturated, no
filter, no grain, no gloss. People are mid-gesture, never posed to camera. Photos
are either full-bleed (with veil) or a 16px-radius panel filling half the slide.
Bundled: `assets/photo-hero-shopkeeper.png`, `photo-team-breda.png`,
`photo-office-wall.png`, `photo-meeting-room.png`.

**Cards.** 16px radius, white fill, 1px `--grey-200` hairline, and a very soft
cool-tinted drop (`--shadow-card`: 1px/2px plus 8px/24px at 4–5% ink). Every card
opens with the **accent rule** — a 22×3px bar, purple on light, mint on purple or
ink — then 14–16px of space, then a 700-weight title, then muted body. Three skins:
light (default), `ink` (#25114E, the "before" state), `purple` (gradient, the aizy
position). At most one purple and one ink card per row.

**Radii.** 6–8px on small controls and chips-that-aren't-pills, 12px on in-app
panels and tables, **16px on cards**, 20px on product frames, pill (999px) only on
chips, badges and the Autoscale switch. Buttons are 8–12px — the brand does not use
pill buttons for actions.

**Borders & shadows.** One hairline weight: 1px `--grey-200` on light,
`rgba(255,255,255,.10)` on dark. Dark cards get no drop shadow — they get a 1px
white-alpha edge. Product frames get `--shadow-frame` (24px/70px at 14%). Purple
CTAs get `--shadow-purple`, a coloured glow. No inner shadows anywhere. No
double borders, no coloured left-border accents.

**Transparency & blur.** Transparency is used in exactly three places: white-alpha
fills on dark grounds (`rgba(255,255,255,.04–.12)` for translucent cards and chips),
the photo veil, and muted text (`rgba(255,255,255,.72)`). **No backdrop blur, no
frosted glass** — it never appears in the source.

**Animation.** Short, eased, never playful. `--ease-out` (.22 .61 .36 1) for
interaction, `--ease-entrance` (.16 .84 .28 1) for reveals. 200ms base, 520ms for a
content reveal that fades up 12px. **No bounce, no spring, no parallax, no scroll-
jacking, no looping ambient motion.**

**Hover.** Cards lift `translateY(-2px)` and swap to `--shadow-card-hover`. Primary
buttons darken one step (purple-500 → purple-600); the gradient button brightens 6%.
Secondary buttons fill `--grey-50` and darken their border. Ghost buttons fill
`--purple-50`. Nav items move to `--purple-50` with a `--purple-100` border. Nothing
scales, nothing changes opacity.

**Press.** Colour only — one more step darker. Nothing shrinks.

**Focus.** 2px `--purple-500` outline at 2px offset. Never removed.

**Fixed elements.** On slides: the footer pair. In the app: the sidebar. Nothing
else is pinned; there are no floating action buttons and no sticky headers.

**Protection.** Text over photography always sits on the veil gradient, never on a
capsule or a blurred pill.

---

## ICONOGRAPHY

**There is no aizy icon set, and this system does not invent one.**

The 2026 deck contains no icons at all. Where an icon would sit — beside each
sidebar item, beside each recommendation row — the source renders a **flat rounded
square**: 15px, 4px radius, `--grey-200` when inactive and `--purple-500` when
active. `NavGlyph` reproduces that exactly, and the UI kit uses it. It is a
faithful copy of the source, not a placeholder we chose.

The only glyphs the brand actually uses are typographic: **▲ ▼** in delta
indicators, **↔ →** in copy, **★** in the Google-review wall, **€** and the accent
characters. Bullet points are 7px purple or mint **discs**, not icons.

Partner logos (Google, Meta, TikTok) appear as their own official wordmarks in
white or grey; they are third-party marks and are **not** bundled here — set them
in type or drop in the official assets. Client logos on the "500+ bedrijven" slide
are likewise third-party and not bundled.

**If a project genuinely needs UI icons**, use **Lucide** from CDN at 1.5px stroke
and `currentColor`, sized 16/20/24 — the geometric monoline style is the closest
match to the brand's letterforms. **Flag it as a substitution** in any deliverable:
aizy has not approved an icon set. Do not use filled icons, duotone icons, or emoji.

---

## Index

### Root
- `styles.css` — the single entry point; `@import` lines only.
- `readme.md` — this file.
- `SKILL.md` — Agent-Skills front matter for use outside this project.
- `thumbnail.html` — homepage tile.

### `tokens/`
`fonts.css` (Plus Jakarta Sans `@font-face`), `colors.css`, `typography.css`, `spacing.css`,
`radii.css`, `elevation.css`, `motion.css`, `semantic.css`, `base.css`.
147 custom properties in total.

### `assets/`
`logo-aizy-gradient.png`, `logo-aizy-white.png`, `logo-aizy-dark.png`,
`mark-aizy-gradient.png`, `mark-aizy-white.png`, `mark-aizy-dark.png`,
`photo-hero-shopkeeper.png`, `photo-team-breda.png`, `photo-office-wall.png`,
`photo-meeting-room.png`, `fonts/` (Plus Jakarta Sans).

### `guidelines/` — 22 foundation specimen cards
Colours (purple, ink, mint & sky, neutrals, semantic, brand gradient, surface
gradients), Type (display, headings, body, eyebrow, stat numerals), Spacing (scale,
slide geometry, radii, elevation), Brand (accent rule, logo lockups, brand mark,
photography, motion).

### Components — 26, in four groups
**`components/core/`** — `AccentRule`, `Badge`, `Button`, `Card`, `Chip`, `Eyebrow`, `Logo`
**`components/data/`** — `ComparisonTable`, `DataTable`, `Delta`, `MetricTile`, `StatCard`, `ToggleRow`
**`components/content/`** — `BulletList`, `CalloutBar`, `GradientHeadline`, `NumberedStep`, `PriceCard`, `QuoteCard`
**`components/app/`** — `AgentExchange`, `AppFrame`, `NavGlyph`, `RecommendationRow`, `SidebarNav`
**`components/slide/`** — `Slide`, `SlideHeader`

Each has a sibling `.d.ts` (props contract) and `.prompt.md` (what & when, usage,
variants). Each directory has one `@dsCard` HTML showing its states.

### `ui_kits/platform/`
Click-through recreation of the product: `Overzicht`, `Campagnes`, `Aanbevelingen`,
`Autoscale`, `AizyAgent`, driven by `index.html`. See that folder's `README.md`
for what is traced and what is deliberately missing.

### `templates/sales-deck/`
`SalesDeck.dc.html` — a five-slide starting deck (cover, card row, three
positions, results, closing) that consuming projects can copy and edit directly.
`ds-base.js` next to it loads this system's stylesheet and bundle.

### `slides/` — 8 sample slide types
Cover (full-bleed), card row, three positions, results, product screen,
comparison table, dark proof, closing.

### `scraps/`
Page-by-page renders of the source PDF, kept for reference. Not shipped.

---

## Intentional additions

Only two components exist that the source doesn't name as a "component", both
because the source repeats the pattern on many slides and consumers would
otherwise rebuild it: `Slide` / `SlideHeader` (the 1280×720 canvas and the
eyebrow → headline → lead rhythm) and `NavGlyph` (the rounded-square icon slot,
copied exactly as the deck draws it).

## Open questions for aizy

1. **Icon set.** Is there one? If not, do you want Lucide adopted formally?
2. **Website design.** No visual source was available for tryaizy.com, so there is
   no marketing-site UI kit here. Share a Figma file or repo and we'll add one.
3. **Automations & Rapportage** screens are in the product nav but not in any slide.
