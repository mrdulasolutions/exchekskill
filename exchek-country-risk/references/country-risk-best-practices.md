# Country / Destination Risk One-Pager — Best Practices

Guidance for producing a one-page country-level risk summary for deal or territory review. Aligns with EAR (15 CFR Parts 736, 738, 740, 746), OFAC sanctions, BIS Entity List and MEU List, and BIS "Know Your Customer" red flags (Supplement No. 3 to 15 C.F.R. Part 732). This skill does **not** perform screening, classification, or license determination; it summarizes country-level risk only.

---

## 1. Embargo and sanctions summary

### EAR comprehensive embargo (15 CFR Part 746)

The following destinations are subject to EAR comprehensive or near-comprehensive embargo. License exceptions are severely restricted or unavailable under § 740.2; most exports and reexports require a license or are prohibited.

- **Cuba** — 15 CFR § 746.2
- **Iran** — 15 CFR § 746.7
- **North Korea** — 15 CFR § 746.4
- **Syria** — 15 CFR § 746.9
- **Russia / Belarus / Crimea Region of Ukraine** — 15 CFR § 746.5, § 746.6, § 746.8 (as applicable). Many items require a license; license exceptions are limited. Check current rules for scope.

**Country Group E:1** (Supplement No. 1 to Part 740) lists countries to which most license exceptions do **not** apply (e.g., Cuba, Iran, North Korea, Syria; Russia/Belarus/Crimea may be included depending on rule date). Cite Part 746 and § 740.2 when stating embargo status.

### OFAC sanctions

OFAC administers economic and trade sanctions. **Comprehensive sanctions** (e.g., Iran, North Korea, Syria, Cuba, Crimea, Donetsk/Luhansk, and certain other programs) generally prohibit most transactions involving the country/region unless authorized. **List-based sanctions** (SDN List, SSI, etc.) apply to designated individuals and entities; country risk one-pagers should note whether the country is subject to a comprehensive OFAC program or only list-based designations.

**Sources:** [OFAC Sanctions Programs](https://ofac.treasury.gov/sanctions-programs-and-country-information), [OFAC Country Information](https://ofac.treasury.gov/countries-territories).

### One-pager wording

For the one-pager, state clearly:

- **EAR embargo:** Yes / No (and cite Part 746 section if yes).
- **OFAC comprehensive or list-based:** Brief summary (e.g., "Comprehensive sanctions" or "List-based only; recommend screening all counterparties").
- **§ 740.2:** Whether license exceptions are barred for this destination (e.g., "License exceptions largely barred per § 740.2(a)(1) for Country Group E:1.").

Use [references/embargo-and-sanctions-summary.md](embargo-and-sanctions-summary.md) for a quick reference table if available in this skill.

---

## 2. Entity List and MEU List density

### What "density" means

**Entity List** (Supplement No. 4 to 15 CFR § 744): Entities for which BIS imposes a license requirement for specified items; policy of denial for many. **MEU List** (Military End-User List, Supplement No. 7 to Part 744): Entities that are "military end users"; license required for specified items to those entities.

**Density** for a country one-pager means: the relative number or concentration of Entity List and MEU List entities **in or linked to** that country (e.g., headquartered, primary operations, or significant presence). High density increases screening burden and risk of dealing with listed parties or their affiliates (see BIS 50% rule for entities 50%+ owned by listed parties).

### Where to get current data

- **BIS Entity List:** [BIS Entity List](https://www.bis.doc.gov/index.php/policy-guidance/lists-of-parties-of-concern/entity-list)
- **BIS MEU List:** [BIS Military End-User List](https://www.bis.doc.gov/index.php/policy-guidance/lists-of-parties-of-concern/military-end-user-list)
- **Consolidated Screening List (CSL):** [trade.gov Consolidated Screening List](https://www.trade.gov/consolidated-screening-list) — searchable by country; includes Entity List, MEU, SDN, and other lists.

This skill does **not** call the CSL API or run screening. The agent uses general knowledge and/or a static reference (if present) to characterize density as **Low**, **Medium**, or **High** for the one-pager, and may recommend that the user run screening for specific counterparties.

### Characterizing Low / Medium / High

| Level | Guidance for one-pager |
|-------|-------------------------|
| **Low** | Few or no Entity List/MEU entities in or tied to the country. Routine screening still required for every transaction. |
| **Medium** | Notable number of listed entities in the country or in key sectors; recommend screening and ownership checks (BIS Red Flag 29). |
| **High** | Many Entity List/MEU entities in the country or in critical sectors; high diligence and screening required; consider hold or escalation for unclear counterparties. |

Add one line of context where helpful (e.g., "Notable Entity List presence in [sector]." or "Recommend checking CSL for current entities in [Country] before committing.").

---

## 3. Typical license expectations (Country Chart and Country Groups)

### Commerce Country Chart (Supplement No. 1 to Part 738)

The Country Chart is a matrix of **countries** (rows) and **reasons for control** (columns). If the cell has an "X," a license is generally required for that control reason. Use **api.exchek.us** `GET /api/ecfr/738` or eCFR title-15 Part 738 when available to look up the destination country and state which columns have "X."

- **EAR99:** No CCL control reason; no Country Chart "X" for the item itself. EAR99 may still require a license for embargoed destination, restricted party, or prohibited end-use (Part 736, § 744, § 746).
- **Controlled ECCN:** For each reason for control (NS, AT, NP, CB, MT, etc.), the corresponding Country Chart column(s) apply. Summarize for the one-pager: "For NS/AT columns, license required" or "No X for typical EAR99; controlled items may require license for [columns]."

### Country Groups (Supplement No. 1 to Part 740)

- **Country Group B:** Generally favorable; many license exceptions (e.g., GBS, TSR) apply.
- **Country Group D:1, D:3, D:4, D:5:** Restrictive; some exceptions apply, others do not.
- **Country Group E:1:** Embargoed; license exceptions largely barred under § 740.2.

### One-pager wording

Summarize in 2–4 sentences:

- **EAR99:** Typically NLR to this country unless embargoed/sanctioned or restricted party/end-use applies.
- **Controlled items:** Which Country Chart columns have "X" for this country; "License or exception typically required for [reasons]."
- **Country Group:** E.g., "Country Group B — many exceptions available" or "Country Group D:1 — heightened controls; check exceptions."

Do not perform transaction-specific license determination; that is the role of the license determination skill.

---

## 4. High-level red flags for "can we go there?"

Use this checklist for the one-pager. Align with BIS Know Your Customer (Supp. 3 to Part 732) and exchek-skill-csl / exchek-skill-red-flag-assessment where applicable.

| Red flag | One-pager use |
|----------|----------------|
| **Country subject to comprehensive embargo or OFAC comprehensive sanctions** | Yes → "High risk; most exports prohibited or heavily restricted." No → note if list-based only. |
| **High Entity List/MEU density** | Yes → "Screen all counterparties; ownership trace recommended (BIS Red Flag 29)." |
| **Diversion / transshipment risk** | Known transshipment hub or re-export concern → "Enhanced due diligence and re-export assurances recommended." |
| **End-use/end-user concerns** | Military, WMD, or sanctioned end-use prevalent or unclear → "End-use and end-user verification required; consider hold for compliance." |
| **Unstable or high-risk jurisdiction** | Per BIS/OFAC guidance → "Heightened controls; recommend compliance review before entering territory." |

**Next steps:** For any "Yes" or high risk, state: "For transaction-specific determination use license determination and screening; recommend counsel for high-risk or ambiguous cases."

---

## 5. Citations and retention

- **EAR:** 15 CFR Parts 736, 738, 740, 746; Supplement No. 3 to Part 732 (red flags).
- **Entity List / MEU:** Supplement No. 4 and Supplement No. 7 to 15 CFR § 744.
- **Retention:** One-pagers are assistive; retain per organization policy and 15 CFR § 762.6 as applicable. Final decisions rest with Export Compliance Officer or legal counsel.

**Docs:** https://docs.exchek.us
