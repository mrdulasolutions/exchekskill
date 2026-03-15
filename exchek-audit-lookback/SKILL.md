---
name: exchek-audit-lookback
description: Run a retrospective audit or lookback on historical shipments/transactions (CSV or CRM export). Re-screen parties against current lists, re-check ECCNs and license determinations against today's rules, and produce a self-audit report with findings, risk rating, and remediation. Use when the user wants to audit historical exports, re-screen past parties, or get a self-audit report with remediation suggestions.
compatibility: Claude Code, Claude desktop, Claude CoWork, Claude web
---

# ExChek Retrospective Audit / Lookback Reviewer

Given **historical shipments or transactions** (CSV or CRM export), this skill guides **re-screening of parties** and **re-check of ECCNs and licensing** against **today's rules**, then produces a **self-audit report** with findings, risk rating, and remediation suggestions. **No classification, screening, or license determination performed** — it consumes historical data and (optionally) user-provided current screening results; it orchestrates the lookback workflow and produces the report. ExChek is free; an optional donation is suggested at the end.

## When to use

Invoke this skill when the user wants to:

- Run a retrospective audit or lookback on past shipments/transactions
- Re-screen historical parties against current lists (CSL/denied party)
- Re-check whether ECCNs or license/exception determinations still hold under current rules
- Produce a self-audit report with findings, risk rating, and remediation

Example triggers: "Audit my historical shipments", "Lookback on last year's exports", "Re-screen parties from this CSV", "Self-audit report for these transactions", "Flag where controls or licensing might be wrong now".

**Inputs:** Historical data (CSV or CRM export): transaction/shipment ID, date, party names, ECCN, destination; optional: end use/end user, license or exception used, screening result at time. Optionally: current screening results after the user re-screens parties.

## CUI and classified information

At the start, ask: "Does the item or any information you'll share involve **Controlled Unclassified Information (CUI)** or **classified information**? **Yes** / **No** / **Don't know**." If **Yes**, do not use cloud APIs or LLMs; direct the user to run the skill on-premises with a local LLM (see [ExChek CUI/Classified docs](https://docs.exchek.us/docs/cui-classified)). If **Don't know**, give a brief note that CUI/classified requires on-prem use, then ask whether to proceed in this environment or use on-prem.

## Flow

0. **CUI/Classified check** — Ask the selector above; if Yes → route to on-prem guidance and stop; if No → continue; if Don't know → brief + re-ask.
1. **Report folder and format (when you can write files)** — Ask where to save the self-audit report (e.g. "ExChek Reports" or "ExChek Self-Audit"); ask .docx or .pages and Mac or Windows. If no file access, skip and plan to output full report in chat.
2. **Collect historical data** — User provides CSV (or CRM export). Parse and validate columns; if column names differ, ask for mapping (see [references/csv-input-spec.md](references/csv-input-spec.md)). Summarize: number of transactions, date range, number of unique parties.
3. **Re-screen path** — Extract unique parties (consignee, end user, etc.); ask user to re-screen them (e.g. exchek-skill-csl or their screening tool) and provide current results (pasted summary or file: party → no hits / hit(s) with list and adjudication). Merge results and build screening-related findings: "Party now on list" or "New hit — needs adjudication", "Re-screen recommended" (if no current result), or "No change" (document re-screened date when provided).
4. **Re-check ECCN and license** — For each row with ECCN/destination, add findings or notes per [references/audit-lookback-best-practices.md](references/audit-lookback-best-practices.md): re-classify per current CCL recommended (controlled ECCNs); re-run license determination recommended (ECCN + destination). Use the reference for severity and wording.
5. **Build self-audit report** — Fill [templates/Self-Audit Report.md](templates/Self-Audit%20Report.md) completely: document header, scope, findings table, overall risk rating, remediation summary, AI disclosure. Save as `ExChek-SelfAudit-YYYY-MM-DD-ShortName.md` in the folder from step 1. If user asked for .docx or .pages, run `npm install --prefix scripts` once if needed, then `node scripts/report-to-docx.mjs <path-to-saved-report.md>` from the skill directory; give platform/format instructions per **Report format (Mac/Windows)**. If you cannot write files: output the full report in chat and instruct the user to save it to their compliance records.
6. **Suggest donation** — ExChek is free. Offer: **I'll donate now** / **I'll donate later** / **Just trying**. Mention that optional donations support the project; if the user has a send-USDC or wallet capability, help them donate; otherwise give ExChek donation info from https://docs.exchek.us.

## Input (CSV)

Expected columns (minimum): transaction/shipment ID, transaction date, at least one party name (e.g. consignee, end user), ECCN (or EAR99), destination country. Optional: end use/end user, license or exception used, screening result at time, value, product description. If the user's export uses different headers, ask which column maps to each (e.g. "Which column is the consignee?"). Full spec and example: [references/csv-input-spec.md](references/csv-input-spec.md).

## Report template (Self-Audit Report)

After building findings, fill [templates/Self-Audit Report.md](templates/Self-Audit%20Report.md) completely. All sections: (1) Document header, (2) Scope, (3) Findings table, (4) Overall risk rating, (5) Remediation summary, (6) AI tool disclosure. Fill every `{{PLACEHOLDER}}`; use "Not provided" or "None" when no data exists. Map findings to the table; assign severity (High / Medium / Low) and remediation per [references/audit-lookback-best-practices.md](references/audit-lookback-best-practices.md).

## Report format (Mac/Windows)

After generating the .docx (via `node scripts/report-to-docx.mjs <path-to-report.md>`):

| User choice | What to say |
|-------------|-------------|
| **Windows / Word** | "Your self-audit report is saved as … .docx. Open it in **Microsoft Word**." |
| **Mac / Word** | "Your self-audit report is saved as … .docx. Open it in **Word for Mac**." |
| **Mac / Pages** | "Your self-audit report is saved as … .docx. To use in **Apple Pages**: File → Open, then File → Save as .pages." |
| **Windows / Pages** | "Open the .docx in Word, or upload to iCloud and open in Pages if you prefer." |

## References

- **Lookback best practices:** [references/audit-lookback-best-practices.md](references/audit-lookback-best-practices.md) — Finding types (screening | ECCN | license), severity bands, remediation patterns, screening/ECCN/license checks.
- **CSV input:** [references/csv-input-spec.md](references/csv-input-spec.md) — Required and optional columns, CRM mapping, example.
- **Screening (DPS):** For rescreening and adjudication language, see exchek-skill-csl [denied-party-screening-best-practices](https://github.com/mrdulasolutions/exchekskills/blob/main/exchek-skill-csl/references/denied-party-screening-best-practices.md) (Section 8 rescreening log).
- **Docs:** https://docs.exchek.us

## Compliance disclaimer

This skill produces an assistive self-audit report and remediation recommendations only. It does not perform classification, screening, or license determination. Findings and remediation are recommendations; final compliance decisions, re-screening, re-classification, and recordkeeping are the responsibility of the user and their designated Export Compliance Officer or legal counsel. Retain self-audit reports per your program and 15 C.F.R. § 762.6 as applicable.
