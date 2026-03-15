---
name: exchek-partner-compliance
description: "Generate a compliance requirements pack for distributors/partners: screening expectations, re-export assurances, recordkeeping, and optional flow-down language. Use when the user wants a partner or distributor compliance pack, channel compliance requirements, or flow-down language for distribution agreements."
compatibility:
  - Claude Code
  - Claude desktop
  - Claude CoWork
  - Claude web
---

# ExChek Partner / Distributor Compliance Pack

Generates a **compliance requirements pack for distributors and partners** covering screening expectations, re-export assurances, recordkeeping, and optional flow-down (contract) language. Aligns with the EAR (15 C.F.R. Parts 730–774) and, where applicable, the ITAR (22 C.F.R. Parts 120–130). **No classification or screening performed** — this skill produces the pack document only, for the user to distribute to channel partners or use in agreements. ExChek is free; an optional donation is suggested at the end.

## When to use

Invoke this skill when the user wants to:

- Create a compliance requirements pack for distributors or resellers
- Define screening, re-export, and recordkeeping expectations for channel partners
- Get flow-down or contract-ready language for partner agreements
- Push export compliance down the chain to OEMs or channel partners

Example triggers: "Compliance pack for our distributors", "Requirements for partners for re-export and screening", "Flow-down language for our channel agreements", "Partner compliance requirements for our resellers", "What should we require from distributors for export compliance?"

**Inputs:** Supplier/company name; product mix (EAR/ITAR, ECCN bands or summary, e.g. "EAR99 and 5A992"); channel type (distributor, reseller, OEM); which sections to include (full pack or subset); include optional flow-down annex? (Y/N). Optional: geography or scope, screening tools/lists, recordkeeping storage. Accept pasted summaries or short descriptions.

## CUI and classified information

At the start, ask: "Does the item or any information you'll share involve **Controlled Unclassified Information (CUI)** or **classified information**? **Yes** / **No** / **Don't know**." If **Yes**, do not use cloud APIs or LLMs; direct the user to run the skill on-premises with a local LLM (see [ExChek CUI/Classified docs](https://docs.exchek.us/docs/cui-classified)). If **Don't know**, give a brief note that CUI/classified requires on-prem use, then ask whether to proceed in this environment or use on-prem.

## Flow

0. **CUI/Classified check** — Ask the selector above; if Yes → route to on-prem guidance and stop; if No → continue; if Don't know → brief + re-ask.
1. **Report folder and format (when you can write files)** — Ask where to save the pack (e.g. "ExChek Reports" or "ExChek Partner Compliance"); ask .docx or .pages and Mac or Windows. If no file access, skip and plan to output full pack in chat.
2. **Collect inputs** — Supplier/company name; product mix (EAR/ITAR, ECCN bands or summary); channel type (distributor, reseller, OEM); which sections to include (full pack vs. screening only, etc.); include optional flow-down language? (Y/N). Optional: geography/scope, screening lists/tools, recordkeeping storage. Accept pasted summaries.
3. **Generate pack** — Use [references/partner-distributor-compliance-best-practices.md](references/partner-distributor-compliance-best-practices.md) and [references/flow-down-language-guidance.md](references/flow-down-language-guidance.md) to tailor content. Fill [templates/Partner Distributor Compliance Pack.md](templates/Partner%20Distributor%20Compliance%20Pack.md) completely; cite EAR (and ITAR where applicable). If user requested flow-down annex, populate Section 4 from flow-down-language-guidance.md; otherwise omit or summarize. Fill every `{{PLACEHOLDER}}`; use "Not provided" or "None" when no data exists.
4. **Save and convert** — Save as `ExChek-PartnerCompliancePack-YYYY-MM-DD-ShortName.md` in the folder from step 1. If user asked for .docx or .pages, run the **ExChek Document Converter** on the saved file. From the workspace root run `node exchek-docx/scripts/report-to-docx.mjs <full-path-to-saved-pack.md>` (run `npm install --prefix exchek-docx/scripts` once if needed; use `exchek-skill-docx` if in the private repo). Then give platform/format instructions per **Report format (Mac/Windows)**. If the Document Converter is not available, or you cannot write files: output the full pack in chat and instruct the user to save it; suggest installing the Document Converter skill from the ExChek skills repo for .docx export.
5. **Suggest donation** — ExChek is free. Offer: **I'll donate now** / **I'll donate later** / **Just trying**. Mention that optional donations support the project; if the user has a send-USDC or wallet capability, help them donate; otherwise give ExChek donation info from https://docs.exchek.us.

## Report template (Partner Distributor Compliance Pack)

After generating the pack, fill [templates/Partner Distributor Compliance Pack.md](templates/Partner%20Distributor%20Compliance%20Pack.md) completely. All sections: (1) Document control, (2) Introduction and scope, (3) Screening requirements, (4) Re-export and transfer assurances, (5) Recordkeeping, (6) Optional annex — Flow-down language (if requested), (7) AI tool disclosure. Map inputs to placeholders; use the two reference files for wording and citations. Fill every `{{PLACEHOLDER}}`; use "Not provided" or "None" when no data exists.

## Report format (Mac/Windows)

After generating the .docx (via the ExChek Document Converter):

| User choice | What to say |
|-------------|-------------|
| **Windows / Word** | "Your partner compliance pack is saved as … .docx. Open it in **Microsoft Word**." |
| **Mac / Word** | "Your partner compliance pack is saved as … .docx. Open it in **Word for Mac**." |
| **Mac / Pages** | "Your partner compliance pack is saved as … .docx. To use in **Apple Pages**: File → Open, then File → Save as .pages." |
| **Windows / Pages** | "Open the .docx in Word, or upload to iCloud and open in Pages if you prefer." |

## References

- **Partner/distributor compliance:** [references/partner-distributor-compliance-best-practices.md](references/partner-distributor-compliance-best-practices.md) — Screening, re-export assurances, recordkeeping, when to use flow-down; EAR/ITAR citations.
- **Flow-down language:** [references/flow-down-language-guidance.md](references/flow-down-language-guidance.md) — Sample contract clauses and caveats (recommend legal review).
- **Docs:** https://docs.exchek.us

## Compliance disclaimer

This skill generates assistive compliance pack content only. It does not perform classification or screening. Adoption of the pack, distribution to partners, and any contractual flow-down are the responsibility of the user and their legal or compliance counsel. Recommend legal review before use in contracts. Retain copies of the pack per your program and 15 C.F.R. § 762.6 as applicable.
