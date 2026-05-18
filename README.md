# Regelwiki — Content Schema & Claude Code Guide

## What this is

Regelwiki is an encyclopedia of German regulations, written for citizens —
not lawyers. Each card explains what a regulation does, why it exists,
what trade-off it represents, and how comparable countries handle the same problem.

The editorial voice is: **informed, direct, non-partisan, constructive.**
We don't call regulations absurd. We surface the trade-off and ask whether
it's still calibrated correctly.

---

## Card types

Every card is classified as one of three types:

| Type | German | Meaning |
|------|--------|---------|
| `interessenkonflikt` | Interessenkonflikt | Two legitimate values in tension. The regulation made a choice. Is the balance still right? |
| `flickenteppich` | Flickenteppich | Same problem, inconsistent answers across districts/states. The inconsistency is the issue. |
| `zeitgeist-problem` | Zeitgeist-Problem | Rule made sense in its era. Context has changed; the rule hasn't caught up. |

---

## Domains

| Slug | Label |
|------|-------|
| `wohnen-bauen` | Wohnen & Bauen |
| `oeffentlicher-raum` | Öffentlicher Raum & Umwelt |
| `alltagsbuerokratie` | Alltagsbürokratie |
| `unternehmen` | Unternehmen gründen & führen |
| `arbeit-familie` | Arbeit & Familie |

---

## Frontmatter schema

```yaml
---
title: ""                        # Short name of the regulation or rule
subtitle: ""                     # One-sentence editorial hook
slug: ""                         # URL slug, kebab-case
domain: ""                       # see domains above
domain_label: ""                 # Human-readable domain label
type: ""                         # interessenkonflikt | flickenteppich | zeitgeist-problem
type_label: ""                   # Human-readable type label

# Jurisdiction
jurisdiction: ""                 # federal | state | municipal | district | mixed
jurisdiction_label: ""           # Plain description
legal_basis: ""                  # The actual law(s), with § references
source_url: ""                   # Link to primary source (gesetze-im-internet.de preferred)
applies_in: all | partial        # Whether it applies everywhere or only in activated areas
applies_in_note: ""              # Optional: explain partial application
local_variation: true | false    # Does it vary by Bundesland / Gemeinde / Bezirk?
local_variation_note: ""         # If true: explain how it varies

# Who this affects
affects:                         # List of affected groups, plain language
  - ""

# Editorial classification (for Interessenkonflikt cards)
trade_off_values:
  side_a: ""                     # Values on one side of the trade-off
  side_b: ""                     # Values on the other side
trade_off_current_lean: a | b    # Which side the current rule leans toward
trade_off_note: ""               # One sentence on why the lean is problematic

# Key numbers (optional but recommended)
key_numbers:
  - label: ""
    value: ""
    source: ""

# Comparators (1–3 countries with a better approach)
comparators:
  - country: ""                  # ISO 3166-1 alpha-2 code (DE, NL, AT, DK, SE, FI, EE, CH...)
    country_name: ""             # German name
    summary: ""                  # 2–3 sentences: what they do differently and why it works
    source: ""                   # The law or report name

# Reform status
reform_status: ""                # none | discussed | proposed | partial | enacted
reform_status_label: ""          # Plain description
reform_proposals:                # List of concrete reform ideas
  - ""

# Illustration (optional) — image for "Was es bedeutet" section
# Place the file in public/images/[domain-slug]/[card-slug]/
illustration:
  src: ""                        # e.g. /images/wohnen-bauen/grz-grundflaechenzahl/grz-beispiel.jpg
  alt: ""                        # Screen-reader description
  caption: ""                    # Short caption shown below image

# Numbered references — cited inline in MDX body with <Ref id={1} /> etc.
# Renders as a linked "Quellen" section at the bottom of the card.
references:
  - label: ""                    # Display name of the source
    url: ""                      # Direct link (prefer gesetze-im-internet.de, destatis.de, etc.)
    note: ""                     # Optional: brief context ("Erhebung 2023")

# Metadata
tags:                            # Relevant tags for filtering
  - ""
last_reviewed: ""                # YYYY-MM
card_version: 1
---
```

---

## Inline citations

Use `<Ref id={1} />` anywhere in the MDX body to insert a numbered footnote marker.
The number must match the position of the source in the `references` frontmatter array (1-indexed).

```mdx
Die GRZ wurde nach den Gründerzeitschäden eingeführt.<Ref id={1} />
```

Renders as: "Die GRZ wurde nach den Gründerzeitschäden eingeführt.[1]" — clicking [1] jumps to the Quellen section.

---

## Body structure

Every card body has exactly four sections, in this order:

### ## Was es bedeutet
Plain German explanation. No jargon, no § references, no assumptions about
legal knowledge. Explain what the regulation does to a normal person's life.
Use concrete examples (a 600m² plot, a 20-unit apartment building, etc.).
Target length: 150–250 words.

### ## Warum es dieses Gesetz gibt
The legitimate origin. Every regulation on this site has a reason —
explain it fairly and without sarcasm. This is where we demonstrate that
we're not just complaining. Target length: 100–150 words.

### ## Die Abwägung
The editorial heart of the card. What trade-off is being made?
Is the calibration still right? What has changed since the rule was written?
This is where the site's voice lives — informed, direct, willing to
challenge the status quo, but not dismissive. No strawmanning.
Target length: 200–350 words.

### ## Was andere machen
2–3 country comparisons. Each starts with the flag emoji + country name in bold.
Explain what they do differently, be specific (cite the law or policy name),
and explain why it works. Avoid "X is just better" — explain the mechanism.
Target length: 150–250 words.

### ## Reformrichtung
Concrete reform proposals, as a bulleted list with brief explanation.
Not wishful thinking — actionable, politically legible proposals that
existing reform discussions could absorb. Target length: 100–200 words.

---

## Tone guide

**Do:**
- Name the trade-off explicitly
- Credit the legitimate origin of the rule
- Use concrete numbers and examples
- Cite comparator laws by name
- End with actionable reform proposals

**Don't:**
- Call regulations stupid or absurd
- Assume bad faith by legislators
- Oversimplify a complex balance
- Editorialize in the "Warum es dieses Gesetz gibt" section
- Use passive voice in the "Was es bedeutet" section

---

## How to generate a new card with Claude Code

Prompt template:

```
Generate a Regelwiki MDX card for: [regulation name]

Context:
- Domain: [domain]
- The regulation: [brief description of what it does]
- Why it's interesting: [what the trade-off or problem is]
- My experience with it: [optional personal context]

Comparators to research: [countries that handle it better, if known]

Follow the schema in README.md exactly.
In "Die Abwägung", the tone should be: [specific editorial angle if any]
```

---

## File naming

`content/[domain-slug]/[card-slug].mdx`

Examples:
- `content/wohnen-bauen/grz-grundflaechenzahl.mdx`
- `content/oeffentlicher-raum/baumscheibe-berlin.mdx`
- `content/alltagsbuerokratie/anmeldung.mdx`

---

## Content status

### Domain 1: Wohnen & Bauen ✅ (5 cards)
- [x] GRZ Grundflächenzahl
- [x] Baugenehmigung Dauer
- [x] Stellplatzpflicht
- [x] Solar Abstandsregeln & Denkmalschutz
- [x] Mietpreisbremse & Mietspiegel

### Domain 2: Öffentlicher Raum & Umwelt 🔲
- [ ] Baumscheibe Berlin (Flickenteppich)
- [ ] Baumschutzverordnung
- [ ] Ruhezeit
- [ ] Radwege Berlin

### Domain 3: Alltagsbürokratie 🔲
- [ ] Anmeldung
- [ ] Ummeldung-Kaskade
- [ ] Kassenbon-Pflicht
- [ ] Terminvergabe Bürgeramt

### Domain 4: Unternehmen 🔲
- [ ] GmbH/UG-Gründung
- [ ] Notarpflicht
- [ ] Freiberufler vs. Gewerbe
- [ ] Handwerksordnung

### Domain 5: Arbeit & Familie 🔲
- [ ] Elterngeld-Bürokratie
- [ ] Schriftformerfordernis
- [ ] Kita-Platzvergabe
