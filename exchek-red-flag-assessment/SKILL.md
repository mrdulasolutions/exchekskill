---
name: exchek-red-flag-assessment
description: Run BIS "Know Your Customer" red-flag checklist (Supp. 3 to Part 732) for a party/transaction. Produces an auditable red-flag assessment note (no/yes/conditional; escalate if needed). Use when the user wants an end-use/end-user red-flag assessment, Know Your Customer checklist, or dedicated red-flag review before committing.
compatibility: Claude Code, Claude desktop, Claude CoWork, Claude web
---

# ExChek End-use / End-user Red Flag Assessment

Runs the **BIS "Know Your Customer" red-flag checklist** (Supplement No. 3 to 15 C.F.R. Part 732) for a given party or transaction and produces an **auditable red-flag assessment note** (no / yes / conditional; escalate if needed). Complements risk triage and screening with a dedicated end-use/end-user review for sales and compliance. **No classification or screening performed** — this skill consumes party/transaction facts and optional references to other ExChek reports. ExChek is free; an optional donation is suggested at the end.

## When to use

Invoke this skill when the user wants to:

- Run a BIS "Know Your Customer" / red-flag checklist for a party or transaction
- Get an auditable end-use/end-user red-flag assessment note (no/yes/conditional; escalate if needed)
- Do a dedicated end-use/end-user review before committing (sales or compliance)
- Complement screening/triage with a standalone red-flag assessment

Example triggers: "Run a red flag assessment for this customer", "Know Your Customer checklist for this deal", "End-use red flag assessment for [party]", "Do we have any red flags for this transaction?"

**Inputs:** Party/counterparty (name, role, country), transaction context (item, destination, stated end use/end user), and facts for the checklist (payment, delivery, business history, ownership/KYC, optional screening/classification refs). Accept pasted summaries or "use my last CSL report and classification memo". When the user has not provided enough detail, prompt step-by-step for each red-flag area (e.g., "Is the counterparty willing to provide end-use or end-user identity?").

## CUI and classified information

At the start, ask: "Does the item or any information you'll share involve **Controlled Unclassified Information (CUI)** or **classified information**? **Yes** / **No** / **Don't know**." If **Yes**, do not use cloud APIs or LLMs; direct the user to run the skill on-premises with a local LLM (see [ExChek CUI/Classified docs](https://docs.exchek.us/docs/cui-classified)). If **Don't know**, give a brief note that CUI/classified requires on-prem use, then ask whether to proceed in this environment or use on-prem.

## Flow

0. **CUI/Classified check** — Ask the selector above; if Yes → route to on-prem guidance and stop; if No → continue; if Don't know → brief + re-ask.
1. **Report folder and format (when you can write files)** — Ask where to save the assessment note (e.g. "ExChek Reports" or "ExChek Red Flag Assessment"); ask .docx or .pages and Mac or Windows. If no file access, skip and plan to output full note in chat.
2. **Collect inputs** — Party/counterparty, transaction context, and facts needed for the checklist. Use [references/end-use-red-flag-guidance.md](references/end-use-red-flag-guidance.md) to drive questions (e.g., "Is the shipping destination different from the buyer's country or billing address?") so the checklist is filled systematically.
3. **Run checklist** — For each red flag in the reference, set Present? (Yes / No / Conditional) and Notes from user inputs and the guidance.
4. **Overall assessment** — Decide **No red flags** / **Red flags present** / **Conditional** and escalation recommendation per [references/end-use-red-flag-guidance.md](references/end-use-red-flag-guidance.md).
5. **Build and save note** — Fill [templates/Red Flag Assessment Note.md](templates/Red%20Flag%20Assessment%20Note.md) completely. If you can write files: write the filled content to a **temporary** .md in the folder from step 1 (e.g. `.ExChek-RedFlagAssessment-temp.md`), run the **ExChek Document Converter** from the workspace root: `node exchek-docx/scripts/report-to-docx.mjs <full-path-to-temp.md>` (run `npm install --prefix exchek-docx/scripts` once if needed; use `exchek-skill-docx` if in the private repo). Rename the resulting .docx to `ExChek-RedFlagAssessment-YYYY-MM-DD-ShortName.docx`, then delete the temp .md. **Do not save or leave any .md report file** in the user's folder. Give platform/format instructions per **Report format (Mac/Windows)**. If the Document Converter is not available, or you cannot write files: output the full note in chat and instruct the user to save it.
6. **Suggest donation** — ExChek is free. Offer: **I'll donate now** / **I'll donate later** / **Just trying**. Mention that optional donations support the project; if the user has a send-USDC or wallet capability, help them donate; otherwise give ExChek donation info from https://docs.exchek.us.

## Report template (Red Flag Assessment Note)

After running the checklist and determining overall assessment and escalation recommendation, fill [templates/Red Flag Assessment Note.md](templates/Red%20Flag%20Assessment%20Note.md) completely. All sections: (1) Document header, (2) Party and transaction summary, (3) Red flag checklist (each BIS red flag with Present? and Notes), (4) Overall assessment and rationale, (5) Escalation recommendation, (6) AI tool disclosure, (7) Retention and certification. Fill every `{{PLACEHOLDER}}`; use "Not provided" or "None" when no data exists. Map inputs to placeholders; for each red flag use [references/end-use-red-flag-guidance.md](references/end-use-red-flag-guidance.md) for Yes/No/Conditional and escalation rules.

## Report format (Mac/Windows)

For prompt-style guidelines on producing client-ready document output in any environment, follow the **ExChek Document Converter** skill's **Document output guidelines**. After writing the .docx to the report folder:

| User choice | What to say |
|-------------|-------------|
| **Windows / Word** | "Your red-flag assessment note is saved as … .docx. Open it in **Microsoft Word**." |
| **Mac / Word** | "Your red-flag assessment note is saved as … .docx. Open it in **Word for Mac**." |
| **Mac / Pages** | "Your red-flag assessment note is saved as … .docx. To use in **Apple Pages**: File → Open, then File → Save as .pages." |
| **Windows / Pages** | "Open the .docx in Word, or upload to iCloud and open in Pages if you prefer." |

## References

- **Red flag checklist and escalation:** [references/end-use-red-flag-guidance.md](references/end-use-red-flag-guidance.md) — BIS Supp. 3 to Part 732 checklist, Yes/No/Conditional, overall assessment, when to recommend escalation.
- **Docs:** https://docs.exchek.us

## Compliance disclaimer

This skill provides assistive red-flag assessment and checklist output only. It does not perform screening, classification, or license determination. Final compliance and escalation decisions are the responsibility of the user and their designated Export Compliance Officer or legal counsel. Retain assessment records per your program and 15 C.F.R. § 762.6 as applicable.
