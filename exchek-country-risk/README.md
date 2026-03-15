# ExChek Country / Destination Risk One-Pager Skill (exchek-country-risk)

For a given **country**, produces a **one-page** summary of embargo/sanctions, Entity List/MEU density, typical license expectations, and high-level red flags for deal or territory review. Use for "can we go there?" answers, sales planning, CRM, and due diligence.

- **Docs:** https://docs.exchek.us  
- **Website:** https://exchek.us  

## What it does

- **Inputs:** Single country (name or ISO code). Optional: deal/territory ID, intended use (e.g., sales territory, due diligence).
- **Outputs:** A filled **Country Destination Risk One-Pager** (markdown and optional .docx/.pages) with embargo/sanctions summary, Entity List/MEU density, typical license expectations, and high-level red flags.

This skill does **not** perform screening or classification; it summarizes country-level risk only. For transaction-specific license determination or screening, use the license determination and CSL skills.

## Install

Copy this folder into your agent's skills directory:

```bash
# If from exchekinc repo:
cp -r exchek-skill-country-risk ~/.cursor/skills/exchek-country-risk

# Or from exchekskills repo:
git clone https://github.com/mrdulasolutions/exchekskills exchekskills
cp -r exchekskills/exchek-skill-country-risk ~/.cursor/skills/exchek-country-risk
```

Restart your agent or run `claude skills list`. Skill name: **exchek-country-risk**.

## How to use

Ask your agent for a country risk one-pager, e.g.:

- "Country risk one-pager for Germany"
- "Can we do business in China?"
- "Destination risk summary for Russia"
- "One-pager for our territory in India"

See **SKILL.md** in this folder for full flow, references, and template.

## License

See ExChek, Inc. terms.
