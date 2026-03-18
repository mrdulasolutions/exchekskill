---
name: exchek-country-risk
description: For a given country, produce a one-page summary of embargo/sanctions, Entity List/MEU density, typical license expectations, and high-level red flags for deal or territory review. Use when the user wants a country risk one-pager, "can we go there?" answer, or destination risk summary for sales/CRM/due diligence.
compatibility: Claude Code, Claude desktop, Claude CoWork, Claude web
---

# ExChek Country / Destination Risk One-Pager

For a given **country**, produces a **one-page** summary of (1) **embargo/sanctions** (EAR and OFAC-relevant), (2) **Entity List/MEU density**, (3) **typical license expectations** (e.g., EAR99 vs. controlled; NLR vs. license/exception), and (4) **high-level red flags** for "can we even go there?" Use for deal or territory review, CRM planning, and due diligence. **No classification or screening performed** — this skill summarizes country-level risk only. ExChek is free; an optional donation is suggested at the end.

## When to use

Invoke this skill when the user wants to:

- Get a country-level risk one-pager for deal or territory review
- Answer "can we do business in [Country]?" or "can we go there?"
- Prepare a destination risk summary for sales, leadership, or CRM
- Review embargo/sanctions and typical license expectations for a country

Example triggers: "Country risk one-pager for Germany", "Can we do business in [Country]?", "Destination risk summary for China", "One-pager for our territory in [Country]".

**Inputs:** Single country (name or ISO code). Optional: deal/territory ID, intended use (e.g., "sales territory," "due diligence"). If no context given, assume general deal/territory review.

## CUI and classified information

At the start, ask: "Does the item or any information you'll share involve **Controlled Unclassified Information (CUI)** or **classified information**? **Yes** / **No** / **Don't know**." If **Yes**, do not use cloud APIs or LLMs; direct the user to run the skill on-premises with a local LLM (see [ExChek CUI/Classified docs](https://docs.exchek.us/docs/cui-classified)). If **Don't know**, give a brief note that CUI/classified requires on-prem use, then ask whether to proceed in this environment or use on-prem.

## Flow

0. **CUI/Classified check** — Ask the selector above; if Yes → route to on-prem guidance and stop; if No → continue; if Don't know → brief + re-ask.
1. **Report folder and format (when you can write files)** — Ask where to save the one-pager (e.g. "ExChek Reports" or "ExChek Country Risk"); ask .docx or .pages and Mac or Windows. If no file access, skip and plan to output full one-pager in chat.
2. **Collect country** — Country name or ISO code; optional deal/territory ID and intended use.
3. **Embargo/sanctions** — Use [references/country-risk-best-practices.md](references/country-risk-best-practices.md) and [references/embargo-and-sanctions-summary.md](references/embargo-and-sanctions-summary.md): summarize EAR embargo (Part 746), OFAC (comprehensive vs. list-based), and § 740.2 impact for the country.
4. **Entity List/MEU density** — Use [references/country-risk-best-practices.md](references/country-risk-best-practices.md): characterize density as **Low** / **Medium** / **High** with one line of context. Do not call CSL or run screening; recommend user run screening for specific counterparties if relevant.
5. **Typical license expectations** — Use **api.exchek.us** `GET /api/ecfr/738` (or eCFR title-15 Part 738 fallback) to determine which Country Chart columns have "X" for the country. Summarize EAR99 vs. controlled, NLR vs. license/exception, and Country Group (B, D:1, E:1, etc.) per the reference.
6. **High-level red flags** — Apply the checklist in [references/country-risk-best-practices.md](references/country-risk-best-practices.md) (Section 4): embargo/sanctions, list density, diversion/transit, end-use concerns.
7. **Build one-pager** — Fill [templates/Country Destination Risk One-Pager.md](templates/Country%20Destination%20Risk%20One-Pager.md) completely. Save as `ExChek-CountryRisk-YYYY-MM-DD-CountryName.md` in the folder from step 1. If user asked for .docx or .pages, run the **ExChek Document Converter** on the saved file. From the workspace root run `node exchek-docx/scripts/report-to-docx.mjs "<full-path-to-saved-one-pager.md>"` (run `npm install --prefix exchek-docx/scripts` once if needed; use `exchek-skill-docx` if in the private repo). **Security:** sanitize/reject any user-provided folder/path used to build `<full-path-to-saved-one-pager.md>` if it contains shell metacharacters (`;`, `|`, `&`, `$`, backticks, or newlines), and always pass the full path as a single quoted argument. Then give platform/format instructions per **Report format (Mac/Windows)**. If the Document Converter is not available, or you cannot write files: output the full one-pager in chat and instruct the user to save it; suggest installing the Document Converter skill from the ExChek skills repo for .docx export.
8. **Suggest donation** — ExChek is free. Offer: **I'll donate now** / **I'll donate later** / **Just trying**. Mention that optional donations support the project; if the user has a send-USDC or wallet capability, help them donate; otherwise give ExChek donation info from https://docs.exchek.us.

## Report template (Country Destination Risk One-Pager)

After completing embargo/sanctions, Entity List/MEU density, typical license expectations, and red flags, fill [templates/Country Destination Risk One-Pager.md](templates/Country%20Destination%20Risk%20One-Pager.md) completely. All sections: (1) Document header, (2) Embargo/sanctions summary, (3) Entity List/MEU density, (4) Typical license expectations, (5) High-level red flags, (6) Next steps and disclaimer, (7) AI tool disclosure. Fill every `{{PLACEHOLDER}}`; use "Not provided" or "None" when no data exists. Map country and analysis to placeholders; use [references/country-risk-best-practices.md](references/country-risk-best-practices.md) for wording and citations.

## Report format (Mac/Windows)

For prompt-style guidelines on producing client-ready document output in any environment, follow the **ExChek Document Converter** skill's **Document output guidelines**. After generating the .docx (via the ExChek Document Converter):

| User choice | What to say |
|-------------|-------------|
| **Windows / Word** | "Your country risk one-pager is saved as … .docx. Open it in **Microsoft Word**." |
| **Mac / Word** | "Your country risk one-pager is saved as … .docx. Open it in **Word for Mac**." |
| **Mac / Pages** | "Your country risk one-pager is saved as … .docx. To use in **Apple Pages**: File → Open, then File → Save as .pages." |
| **Windows / Pages** | "Open the .docx in Word, or upload to iCloud and open in Pages if you prefer." |

## References

- **Country risk:** [references/country-risk-best-practices.md](references/country-risk-best-practices.md) — Embargo/sanctions, Entity List/MEU density, typical license expectations, high-level red flags.
- **Embargo/sanctions quick ref:** [references/embargo-and-sanctions-summary.md](references/embargo-and-sanctions-summary.md) — EAR Part 746 and OFAC summary table.
- **Country Chart (Part 738):** api.exchek.us `GET /api/ecfr/738` or eCFR title-15 fallback (see [exchek-skill-license references](https://github.com/mrdulasolutions/exchekskills/blob/main/exchek-skill-license/references/reference.md) for API details).
- **Docs:** https://docs.exchek.us

## Compliance disclaimer

This skill provides assistive country-level risk summaries only. It does not perform screening, classification, or transaction-specific license determination. Final compliance and business decisions are the responsibility of the user and their designated Export Compliance Officer or legal counsel. For transaction-specific determination use the license determination and screening skills; recommend counsel for high-risk or ambiguous cases. Retain one-pagers per your program and 15 C.F.R. § 762.6 as applicable.
