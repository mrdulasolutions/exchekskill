---
name: exchek-compliance-report
description: Generate a CARFAX-style Export Compliance Report Card that an exporter can send to their customer. Aggregates classification, screening, license determination, country risk, and red-flag results into a single customer-facing trust document with a clear compliance status (PASS / CONDITIONAL / HOLD). Free to use; optional donation.
compatibility: Claude Code, Claude desktop, Claude CoWork, Claude web
---

# ExChek Compliance Report Card

Generate a **CARFAX-style Export Compliance Report Card** — a single, customer-facing document that aggregates classification, screening, license determination, country risk, and red-flag assessment into one trust-building report. The report gives the recipient a clear **compliance status** (PASS / CONDITIONAL / HOLD) and a plain-language summary so they can see — at a glance — that the transaction has been vetted. **No paid API required.** ExChek is free; an optional donation is suggested at the end.

Think of it like a CARFAX vehicle history report: instead of accident history and mileage verification, this report shows classification status, denied-party screening results, license authorization, destination risk, and end-use/end-user verification — everything a customer or compliance counterpart needs to trust the transaction.

## When to use

Invoke this skill when the user wants to:

- Generate a compliance report card to send to a customer, distributor, or partner
- Create a customer-facing compliance summary for a transaction or shipment
- Produce a trust document showing an item has been cleared for export
- Bundle classification, screening, and license results into one shareable report
- Provide compliance assurance documentation for a deal or order

Example triggers: "Generate a compliance report card for this shipment", "Create a CARFAX-style report for my customer", "I need a compliance summary to send to the buyer", "Build an export compliance report card for this order", "Compliance certificate for this transaction".

**Inputs:** This skill **consumes results** from other ExChek skills or user-provided data. It does not perform classification, screening, or license determination itself. The user should provide (or the agent should have already produced) results from:

- **Classification:** ECCN, jurisdiction (BIS/ITAR), classification memo reference
- **Screening:** CSL/denied-party screening results (no hits / hits with adjudication)
- **License determination:** NLR, license exception, or license required
- **Country/destination risk:** Country risk level (from exchek-country-risk or user knowledge)
- **Red-flag assessment:** Red flags identified (from exchek-red-flag-assessment or user input)
- **End-use/end-user:** Stated end use and end user

If any of these are missing, the skill will prompt the user to provide them or note them as "Not assessed" in the report.

## CUI and classified information

At the start, ask: "Does the item or any information you'll share involve **Controlled Unclassified Information (CUI)** or **classified information**? **Yes** / **No** / **Don't know**." If **Yes**, do not use cloud APIs or LLMs; direct the user to run the skill on-premises with a local LLM (see [ExChek CUI/Classified docs](https://docs.exchek.us/docs/cui-classified)). If **Don't know**, give a brief note that CUI/classified requires on-prem use, then ask whether to proceed in this environment or use on-prem.

## Compliance status logic

The report card assigns one of three statuses based on the inputs:

| Status | Criteria | Customer meaning |
|--------|----------|------------------|
| **PASS** | Classification complete, no screening hits, NLR or valid license exception, no red flags, low country risk | Transaction has been fully vetted and cleared for export under applicable U.S. regulations. |
| **CONDITIONAL** | Classification complete but one or more of: license required (and obtained or in process), medium country risk, minor red flags resolved, screening hits adjudicated as false positives | Transaction has been vetted; specific conditions or authorizations apply. Details provided. |
| **HOLD** | Any of: unresolved screening hits, unresolved red flags, license required but not yet obtained, high country risk, incomplete classification | Transaction requires further review before proceeding. Do not ship until resolved. |

**Rules:**
- Any unresolved CSL/denied-party hit → **HOLD** regardless of other factors.
- Any unresolved red flag → **HOLD**.
- License required but not obtained → **HOLD**.
- ITAR items always get at minimum **CONDITIONAL** (due to inherent sensitivity).
- Missing classification or screening data → **HOLD** (incomplete vetting).

## Flow

0. **CUI/Classified check** — Ask the selector above; if Yes → route to on-prem guidance and stop; if No → continue; if Don't know → brief + re-ask.

1. **Report folder and format (when you can write files)** — If you are in CoWork, Desktop with file access, Cursor, or Claude Code: ask the user which folder to save the report card in; if none, suggest creating `ExChek Reports` in the workspace and create it with their approval. Also ask: "Are you on **Mac** or **Windows**? Do you want the report as **Word (.docx)** or **Apple Pages (.pages)**?" Store the choices for use after building the report. If you are on Claude web or cannot write files, skip this and plan to output the full report in chat.

2. **Collect transaction and compliance data** — Ask the user for or gather from prior conversation:

   **Transaction details:**
   - Transaction / order / shipment reference number
   - Item name and description
   - Buyer / consignee name and country
   - Ultimate end user (if different from buyer)
   - Stated end use
   - Ship-to destination country

   **Compliance results (from other ExChek skills or user input):**
   - Classification: ECCN, jurisdiction (BIS/ITAR), classification memo reference or date
   - Screening: CSL/denied-party results — no hits, or hits with list name(s) and adjudication (true match / false positive / pending)
   - License determination: NLR, license exception (cite which), license number, or "license required — not yet obtained"
   - Country risk level: Low / Medium / High (from exchek-country-risk or user assessment)
   - Red-flag assessment: Red flags identified? (Yes/No, details from exchek-red-flag-assessment or user)
   - End-use/end-user verification: Verified / Not verified / Concerns noted

   If the user has already run other ExChek skills in this conversation (classify, CSL, license, country-risk, red-flag), pull results from those outputs. For any missing element, ask the user or mark as "Not assessed" (which triggers HOLD status).

3. **Determine compliance status** — Apply the **Compliance status logic** table above. Walk through each factor, score it, and determine PASS / CONDITIONAL / HOLD. Present the status and rationale to the user for confirmation before building the report.

4. **Build the report card** — After the user confirms the status, fill [templates/Compliance Report Card.md](templates/Compliance%20Report%20Card.md) completely. Fill every `{{PLACEHOLDER}}`; use "Not assessed" or "Not provided" when no data exists.

   **Customer-facing language:** The report card is designed to be **sent to the customer**. Use professional, clear, plain-language descriptions. Avoid internal jargon or compliance shorthand that the recipient wouldn't understand. The tone should be confident and trust-building — like a CARFAX report that says "this vehicle has a clean history."

   If you can write files: write the filled report content to a **temporary** .md file in the folder from step 1 (e.g. `.ExChek-ComplianceReport-temp.md`), run the **ExChek Document Converter** from the workspace root: `node exchek-docx/scripts/report-to-docx.mjs "<full-path-to-temp.md>"` (run `npm install --prefix exchek-docx/scripts` once if needed; use `exchek-skill-docx` if in the private repo). **Security:** sanitize/reject any user-provided folder/path used to build `<full-path-to-temp.md>` if it contains shell metacharacters (`;`, `|`, `&`, `$`, backticks) or newlines, and always pass the full path as a single quoted argument. Rename the resulting .docx to `ExChek-ComplianceReport-YYYY-MM-DD-ShortName.docx`, then delete the temp .md. **Do not save or leave any .md report file** in the user's folder. Give platform/format instructions per **Report format (Mac/Windows)**.

   If the Document Converter is not available, or you cannot write files: output the full report in chat and instruct the user to save it.

5. **Internal compliance record (optional)** — Ask the user if they also want an internal-only version with additional detail (red-flag checklist, screening hit details, adjudication notes, analyst name). If yes, produce a second document using the same template but with the internal sections filled. Name it `ExChek-ComplianceReport-INTERNAL-YYYY-MM-DD-ShortName.docx`.

6. **Push to CRM (optional)** — If the user wants to attach or log this report in a CRM (HubSpot, Salesforce), confirm target system, object type, and record ID. Use the user's CRM connector or API access to attach or update the record.

7. **Suggest donation** — ExChek is free. Offer: **I'll donate now** / **I'll donate later** / **Just trying**. See [references/donation.md](references/donation.md) for addresses and behavior.

## Report template (Compliance Report Card)

After status is confirmed, fill [templates/Compliance Report Card.md](templates/Compliance%20Report%20Card.md) completely. The template has these sections:

1. **Report header** — Compliance status badge (PASS/CONDITIONAL/HOLD), report number, date, prepared by
2. **Transaction summary** — Item, buyer, destination, end use — plain language
3. **Compliance status overview** — The big badge + one-paragraph plain-language explanation
4. **Classification check** — ECCN, jurisdiction, what it means in plain language
5. **Screening check** — Denied-party/restricted-party screening results
6. **License & authorization check** — NLR, exception, or license details
7. **Destination risk check** — Country risk level and context
8. **End-use / end-user verification** — Verification status and notes
9. **Red-flag assessment** — Any red flags and resolution
10. **Conditions & notes** — Any conditions that apply (for CONDITIONAL status)
11. **Validity & disclaimer** — Report validity period, regulatory disclaimer
12. **AI tool disclosure** — ExChek tool disclosure for transparency

## Report format (Mac/Windows)

After writing the .docx to the report folder:

| User choice | What to say |
|-------------|-------------|
| **Windows / Word** | "Your compliance report card is saved as … .docx. Open it in **Microsoft Word**." |
| **Mac / Word** | "Your compliance report card is saved as … .docx. Open it in **Word for Mac**." |
| **Mac / Pages** | "Your compliance report card is saved as … .docx. To use in **Apple Pages**: File → Open, then File → Save as .pages." |
| **Windows / Pages** | "Open the .docx in Word, or upload to iCloud and open in Pages if you prefer." |

## Donation (multi-chain)

At the end of a successful report, offer the three donation options (see Flow step 7). See [references/donation.md](references/donation.md) for the full list of networks and addresses. Pick the chain that matches the user's or agent's payment abilities.

## References

- **Report card best practices:** [references/report-card-best-practices.md](references/report-card-best-practices.md) — Design principles, customer-facing language, status logic details
- **Donation addresses:** [references/donation.md](references/donation.md)
- **Docs:** https://docs.exchek.us

## Compliance disclaimer

This skill produces an assistive compliance summary report. It does not perform classification, screening, or license determination — it aggregates results from other ExChek skills or user-provided data. The Compliance Report Card is not a legal opinion, export license, or government certification. Final compliance decisions and export authorizations are the responsibility of the exporter and their designated Export Compliance Officer or legal counsel. The recipient should not construe this report as a guarantee of regulatory compliance. Retain compliance records per your program and 15 C.F.R. § 762.6 as applicable.
