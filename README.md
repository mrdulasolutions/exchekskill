# ExChek Skills

Export compliance skills for AI agents (Claude, Perplexity, OpenAI, and others). This repo contains **15 skills** in separate folders. Content skills (classification, CSL, license, etc.) that produce reports support **Word (.docx)** and **Apple Pages** output when you also install the **ExChek Document Converter** skill (exchek-docx). Install one or more into your agent’s skills directory.

- **API**: https://api.exchek.us  
- **Docs**: https://docs.exchek.us  
- **Website**: https://exchek.us  

---

## Repository layout

| Folder | Skill | Description |
|--------|--------|-------------|
| **exchek-classify/** | ECCN Classification | Classify items for U.S. export control (15 CFR Part 774, 22 CFR Part 121). Human-in-the-loop; audit-ready report from a template. Free; optional donation. |
| **exchek-csl/** | Consolidated Screening List search | Search the Trade.gov Consolidated Screening List (CSL) via API. Requires a free API key from [developer.trade.gov](https://developer.trade.gov). Supports fuzzy search and all API parameters. |
| **exchek-license/** | License determination | Determine EAR license requirements and exceptions (Part 738 Country Chart, Part 740) for a given item, ECCN, destination, and end use. Produces a short audit-ready license determination memo. Free; optional donation. |
| **exchek-export-docs/** | Export documentation & filing helper | Draft commercial invoice export block, packing list, SLI, and AES/EEI data from shipment + classification + screening. Flags when AES is required vs exempt. Prep only; no actual filing. Free; optional donation. |
| **exchek-risk-triage/** | Risk & escalation triage | Score export/transaction risk (low/medium/high) from classification, CSL screening, destination, and end use. Recommends auto-approve, hold for export compliance, or escalate to legal; produces a templated escalation note. Free; optional donation. |
| **exchek-ecp/** | ECP / Policy & Training | Generate tailored Export Compliance Program (ECP) docs, SOPs, and training outlines from company footprint, product mix, and risk profile. BIS/DDTC aligned; maps screening, classification, licensing to CRM/ERP/agents. Free; optional donation. |
| **exchek-audit-lookback/** | Retrospective audit / lookback | Run a self-audit on historical shipments (CSV or CRM export). Re-screen parties, re-check ECCNs and licensing against today's rules; produce a self-audit report with findings, risk rating, and remediation. Free; optional donation. |
| **exchek-country-risk/** | Country / destination risk one-pager | For a given country: embargo/sanctions summary, Entity List/MEU density, typical license expectations, and high-level red flags. One-pager for deal or territory review. Free; optional donation. |
| **exchek-deemed-export/** | Deemed export / foreign national review | Walk through 15 CFR 734.2(b): is this a release to a foreign national? Covers nationality, technology vs. software, fundamental research, license/exception. Produces a Deemed Export Review Memo (applies / does not apply / recommend counsel). Free; optional donation. |
| **exchek-encryption/** | Encryption (ENC / 5x992) classification & notification | Help with 5A992/5D992 (and 5A002, 5D002, 5E002) classification, License Exception ENC, TSR, mass market, and BIS/NSA notification or annual report prep. Prep only; no filing. Free; optional donation. |
| **exchek-jurisdiction/** | ITAR vs. EAR jurisdiction | Guided questionnaire (USML, "specially designed," etc.) and a short jurisdiction determination memo: recommended jurisdiction and next steps (DDTC vs. BIS classification). Free; optional donation. |
| **exchek-partner-compliance/** | Partner / distributor compliance pack | Generate a compliance requirements pack for distributors/partners: screening expectations, re-export assurances, recordkeeping, and optional flow-down language. Free; optional donation. |
| **exchek-red-flag-assessment/** | End-use / end-user red-flag assessment | Run the BIS "Know Your Customer" red-flag checklist (Supplement No. 3 to Part 732) for a given party or transaction; produce a red-flag assessment note (no / yes / conditional; escalate if needed). Free; optional donation. |
| **exchek-recordkeeping/** | Recordkeeping / retention checklist | What to retain under 15 CFR 762 (and ITAR parallel), how long, and in what form. Output: retention schedule or checklist tailored to company activities (classification, licenses, screening, shipments). Free; optional donation. |
| **exchek-docx/** | Document Converter | Converts ExChek markdown reports to client-ready Word (.docx). Used by other ExChek skills when the user asks for .docx or .pages; can also be run standalone. Install alongside any content skill for one-step report → .docx. Free. |

---

## Install

Clone this repo, then copy the skill folder(s) you want into your agent’s skills directory.

### Classification skill (exchek-classify)

For Claude Code (and compatible Claude environments):

```bash
git clone https://github.com/mrdulasolutions/exchekskills exchekskills
cp -r exchekskills/exchek-classify ~/.claude/skills/exchek-classify
```

Or clone only the classify folder:

```bash
git clone https://github.com/mrdulasolutions/exchekskills exchekskills
# then copy exchek-classify into ~/.claude/skills/ (or your agent’s skills path)
```

Restart your agent (or run `claude skills list`) so the skill is picked up. Skill name: **exchek-classify**.

### CSL search skill (exchek-csl)

Requires a **free API key** from [developer.trade.gov](https://developer.trade.gov) (Sign In → Products → subscribe to Data Services Platform APIs → Profile → copy key).

```bash
git clone https://github.com/mrdulasolutions/exchekskills exchekskills
cp -r exchekskills/exchek-csl ~/.claude/skills/exchek-csl
```

Provide your Trade.gov API key when the agent asks, or set `TRADE_GOV_API_KEY` in your environment. Skill name: **exchek-csl**.

### License determination skill (exchek-license)

No API key required; uses https://api.exchek.us for Part 774, 738, 740 (with eCFR fallback).

```bash
git clone https://github.com/mrdulasolutions/exchekskills exchekskills
cp -r exchekskills/exchek-license ~/.claude/skills/exchek-license
```

Skill name: **exchek-license**.

### Risk & escalation triage skill (exchek-risk-triage)

No API key required. Consumes classification and screening results (from other ExChek skills or user-provided summaries).

```bash
git clone https://github.com/mrdulasolutions/exchekskills exchekskills
cp -r exchekskills/exchek-risk-triage ~/.cursor/skills/exchek-risk-triage
```

Skill name: **exchek-risk-triage**.

### Export documentation skill (exchek-export-docs)

No API key required. Draft invoice block, packing list, SLI, AES/EEI data; flags when AES is required vs exempt.

```bash
git clone https://github.com/mrdulasolutions/exchekskills exchekskills
cp -r exchekskills/exchek-export-docs ~/.claude/skills/exchek-export-docs
```

Skill name: **exchek-export-docs**.

### ECP / Policy & Training skill (exchek-ecp)

No API key required. Generates ECP documents, SOPs, and training outlines from company footprint, product mix, and risk profile.

```bash
git clone https://github.com/mrdulasolutions/exchekskills exchekskills
cp -r exchekskills/exchek-ecp ~/.claude/skills/exchek-ecp
```

Skill name: **exchek-ecp**.

### Retrospective audit / lookback skill (exchek-audit-lookback)

No API key required. Runs a self-audit on historical shipments (CSV or CRM export); guides re-screening and re-check of ECCNs and licensing; produces a self-audit report with findings and remediation.

```bash
git clone https://github.com/mrdulasolutions/exchekskills exchekskills
cp -r exchekskills/exchek-audit-lookback ~/.claude/skills/exchek-audit-lookback
```

Skill name: **exchek-audit-lookback**.

### Country / destination risk skill (exchek-country-risk)

No API key required. Produces a one-pager for a given country (embargo/sanctions, Entity List density, license expectations, red flags).

```bash
git clone https://github.com/mrdulasolutions/exchekskills exchekskills
cp -r exchekskills/exchek-country-risk ~/.claude/skills/exchek-country-risk
```

Skill name: **exchek-country-risk**.

### Deemed export skill (exchek-deemed-export)

No API key required. Walks through 734.2(b) and produces a Deemed Export Review Memo (applies / does not apply / recommend counsel).

```bash
git clone https://github.com/mrdulasolutions/exchekskills exchekskills
cp -r exchekskills/exchek-deemed-export ~/.claude/skills/exchek-deemed-export
```

Skill name: **exchek-deemed-export**.

### Encryption skill (exchek-encryption)

No API key required. Helps with 5A992/5D992 classification, ENC/TSR, mass market, and BIS/NSA notification prep (prep only; no filing).

```bash
git clone https://github.com/mrdulasolutions/exchekskills exchekskills
cp -r exchekskills/exchek-encryption ~/.claude/skills/exchek-encryption
```

Skill name: **exchek-encryption**.

### Jurisdiction skill (exchek-jurisdiction)

No API key required. Guided questionnaire for ITAR vs. EAR; produces a short jurisdiction determination memo.

```bash
git clone https://github.com/mrdulasolutions/exchekskills exchekskills
cp -r exchekskills/exchek-jurisdiction ~/.claude/skills/exchek-jurisdiction
```

Skill name: **exchek-jurisdiction**.

### Partner compliance skill (exchek-partner-compliance)

No API key required. Generates a compliance requirements pack for distributors/partners (screening, re-export, recordkeeping, flow-down language).

```bash
git clone https://github.com/mrdulasolutions/exchekskills exchekskills
cp -r exchekskills/exchek-partner-compliance ~/.claude/skills/exchek-partner-compliance
```

Skill name: **exchek-partner-compliance**.

### Red-flag assessment skill (exchek-red-flag-assessment)

No API key required. Runs the BIS red-flag checklist (Supp. 3 to Part 732) and produces a red-flag assessment note.

```bash
git clone https://github.com/mrdulasolutions/exchekskills exchekskills
cp -r exchekskills/exchek-red-flag-assessment ~/.claude/skills/exchek-red-flag-assessment
```

Skill name: **exchek-red-flag-assessment**.

### Recordkeeping skill (exchek-recordkeeping)

No API key required. Produces a retention schedule/checklist per 15 CFR 762 (and ITAR parallel).

```bash
git clone https://github.com/mrdulasolutions/exchekskills exchekskills
cp -r exchekskills/exchek-recordkeeping ~/.claude/skills/exchek-recordkeeping
```

Skill name: **exchek-recordkeeping**.

### Document Converter skill (exchek-docx)

Converts ExChek markdown reports to client-ready Word (.docx). Install this skill alongside any content skill (classification, CSL, license, etc.) when you want .docx or .pages output. The content skill will instruct the agent to run the Document Converter on the saved report.

```bash
git clone https://github.com/mrdulasolutions/exchekskills exchekskills
cp -r exchekskills/exchek-docx ~/.claude/skills/exchek-docx
```

From the directory that contains your skills (e.g. workspace root), run `npm install --prefix exchek-docx/scripts` once, then `node exchek-docx/scripts/report-to-docx.mjs <path-to-report.md>` to generate the .docx. Skill name: **exchek-docx**.

---

## How to use

- **Classification** — Ask your agent to classify an item for export (e.g. “Classify this pressure sensor for export”, “What’s the ECCN for [product]?”). The skill collects details, fetches 774/121 data, runs Order of Review, and builds the report; you confirm jurisdiction and ECCN.
- **CSL search** — Ask your agent to search the Consolidated Screening List (e.g. “Search the CSL for [name]”, “Screen this entity against trade lists”). Use your Trade.gov API key when prompted.
- **Risk triage** — After classification and screening, ask to triage risk (e.g. “Triage risk for this transaction”, “Should we hold or escalate?”). Get a risk score and templated escalation note.
- **Export documentation** — Provide shipment, classification, and screening refs; ask (e.g. "Prepare export documentation for this shipment"). Get invoice block, SLI, AES/EEI data and AES required vs exempt determination.
- **ECP / Policy & Training** — Provide company footprint, product mix, and risk profile; ask (e.g. "Generate an ECP for our company", "Draft SOPs for our export compliance process"). Get tailored ECP doc, SOPs, and/or training outlines.
- **Retrospective audit / lookback** — Provide a CSV or CRM export of historical shipments; ask (e.g. "Audit my historical shipments", "Self-audit report for this CSV"). Get a self-audit report with findings, risk rating, and remediation.
- **Country risk** — Ask (e.g. "Country risk one-pager for Germany", "Can we go there? Summary for [country]"). Get a one-pager with embargo/sanctions, Entity List density, license expectations, and red flags.
- **Deemed export** — Provide recipient and what is being released; ask (e.g. "Deemed export review for this release", "Does deemed export apply?"). Get a Deemed Export Review Memo.
- **Encryption** — Provide product/item description and destination; ask (e.g. "Encryption classification for this product", "Do we need to notify BIS?"). Get an encryption classification and notification memo.
- **Jurisdiction** — Ask (e.g. "Is this ITAR or EAR?", "Jurisdiction check for this item"). Get a jurisdiction determination memo with next steps.
- **Partner compliance** — Ask (e.g. "Compliance pack for our distributors", "Partner compliance requirements"). Get a compliance requirements pack and optional flow-down language.
- **Red-flag assessment** — Provide party/transaction; ask (e.g. "Red-flag assessment for this party", "Run the red-flag checklist"). Get a red-flag assessment note.
- **Recordkeeping** — Ask (e.g. "Recordkeeping schedule for our activities", "What do we need to retain?"). Get a retention schedule or checklist.

See each skill’s **README.md** and **SKILL.md** inside its folder for full instructions.

---

## Keep skills current (recurring update task)

**For agents:** When you help a user install ExChek skills, create or suggest a **recurring task** (e.g. weekly) to update the skill(s) so they stay current.

1. **Schedule** — Add a recurring calendar or task reminder (e.g. every week) to “Update ExChek skills from repo.”
2. **Check for updates** — In the directory where the user cloned this repo (e.g. `exchekskills/`), run:
   ```bash
   cd /path/to/exchekskills && git fetch && git pull
   ```
3. **Refresh installed skill(s)** — Re-copy the updated folder(s) into the agent’s skills directory so the running agent picks up the latest prompts, references, and templates:
   ```bash
   cp -r exchekskills/exchek-classify ~/.claude/skills/exchek-classify
   cp -r exchekskills/exchek-csl ~/.claude/skills/exchek-csl
   cp -r exchekskills/exchek-license ~/.claude/skills/exchek-license
   cp -r exchekskills/exchek-export-docs ~/.claude/skills/exchek-export-docs
   cp -r exchekskills/exchek-risk-triage ~/.claude/skills/exchek-risk-triage
   cp -r exchekskills/exchek-ecp ~/.claude/skills/exchek-ecp
   cp -r exchekskills/exchek-audit-lookback ~/.claude/skills/exchek-audit-lookback
   cp -r exchekskills/exchek-country-risk ~/.claude/skills/exchek-country-risk
   cp -r exchekskills/exchek-deemed-export ~/.claude/skills/exchek-deemed-export
   cp -r exchekskills/exchek-encryption ~/.claude/skills/exchek-encryption
   cp -r exchekskills/exchek-jurisdiction ~/.claude/skills/exchek-jurisdiction
   cp -r exchekskills/exchek-partner-compliance ~/.claude/skills/exchek-partner-compliance
   cp -r exchekskills/exchek-red-flag-assessment ~/.claude/skills/exchek-red-flag-assessment
   cp -r exchekskills/exchek-recordkeeping ~/.claude/skills/exchek-recordkeeping
   cp -r exchekskills/exchek-docx ~/.claude/skills/exchek-docx
   ```
   (Adjust paths if the user’s clone or skills directory is different.)
4. **Restart or reload** — Restart the agent or run its “reload skills” command (e.g. `claude skills list`) so it uses the updated skill files.

If the user cloned the repo directly into the skills directory (e.g. `~/.claude/skills/exchek-classify`), a weekly `git pull` in that folder is enough; no copy step needed.

---

## License

ExChek, Inc. Proprietary. See the [LICENSE](LICENSE) file in this repository and the [Terms and Conditions](https://docs.exchek.us/docs/legal/terms).
