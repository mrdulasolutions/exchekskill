---
name: exchek-recordkeeping
description: Produce a retention schedule or checklist under 15 CFR 762 (and ITAR 22 CFR Part 122 where applicable) tailored to company activities (classification, licenses, screening, shipments). Use when the user wants a recordkeeping/retention policy, retention schedule, or checklist for export compliance.
compatibility: Claude Code, Claude desktop, Claude CoWork, Claude web
---

# ExChek Recordkeeping / Retention Checklist

Produces a **retention schedule or checklist** under **15 CFR Part 762** (EAR) and, where applicable, **22 CFR Part 122** (ITAR), tailored to **company activities** (classification, license determinations, screening, shipments, deemed export, encryption reporting, etc.). Output is an audit-ready **Recordkeeping Retention Schedule and Checklist** that lists what to retain, how long, and in what form. **No classification, screening, or license determination** — this skill focuses solely on recordkeeping and retention. ExChek is free; an optional donation is suggested at the end.

## When to use

Invoke this skill when the user wants to:

- Build or validate a recordkeeping/retention policy for export compliance
- Get a retention schedule or checklist aligned with 15 CFR 762 (and ITAR where applicable)
- Tailor retention to company activities (e.g., classification, screening, shipments; EAR only or EAR + ITAR)
- Prepare for audits or ECP/lookback by documenting what to retain, how long, and in what form

Example triggers: "What do we need to retain for export compliance?", "Retention schedule for our export program", "Recordkeeping checklist under Part 762", "How long to keep classification memos and screening records?".

**Inputs:** Company activities (which apply: classification, license determinations, screening, shipments/export docs/AES, deemed export, encryption reporting, other), jurisdiction (EAR only vs. EAR + ITAR), optional ECP/SOP refs or storage preferences. Accept short free-form descriptions (e.g., "small company, EAR only, we classify and screen and ship").

## CUI and classified information

At the start, ask: "Does the item or any information you'll share involve **Controlled Unclassified Information (CUI)** or **classified information**? **Yes** / **No** / **Don't know**." If **Yes**, do not use cloud APIs or LLMs; direct the user to run the skill on-premises with a local LLM (see [ExChek CUI/Classified docs](https://docs.exchek.us/docs/cui-classified)). If **Don't know**, give a brief note that CUI/classified requires on-prem use, then ask whether to proceed in this environment or use on-prem.

## Flow

0. **CUI/Classified check** — Ask the selector above; if Yes → route to on-prem guidance and stop; if No → continue; if Don't know → brief + re-ask.
1. **Report folder and format (when you can write files)** — Ask where to save the document (e.g. "ExChek Reports" or "ExChek Recordkeeping"); ask .docx or .pages and Mac or Windows. If no file access, skip and plan to output full document in chat.
2. **Collect inputs** — Company activities (classification, license determinations, screening, shipments, deemed export, encryption, other), jurisdiction (EAR only vs. EAR + ITAR), optional ECP/storage notes.
3. **Apply reference** — Use [references/recordkeeping-retention-best-practices.md](references/recordkeeping-retention-best-practices.md) to select record types, retention periods, form, and citations for the chosen activities and jurisdiction.
4. **Build document** — Fill [templates/Recordkeeping Retention Schedule and Checklist.md](templates/Recordkeeping%20Retention%20Schedule%20and%20Checklist.md) completely; omit or mark N/A rows for activities not in scope.
5. **Save and convert** — If you can write files: write the filled content to a **temporary** .md in the folder from step 1 (e.g. `.ExChek-Recordkeeping-temp.md`), run the **ExChek Document Converter** from the workspace root: `node exchek-docx/scripts/report-to-docx.mjs "<full-path-to-temp.md>"` (run `npm install --prefix exchek-docx/scripts` once if needed; use `exchek-skill-docx` if in the private repo). **Security:** sanitize/reject any user-provided folder/path used to build `<full-path-to-temp.md>` if it contains shell metacharacters (`;`, `|`, `&`, `$`, backticks) or newlines, and always pass the full path as a single quoted argument. Rename the resulting .docx to `ExChek-Recordkeeping-YYYY-MM-DD-ShortName.docx`, then delete the temp .md. **Do not save or leave any .md report file** in the user's folder. Give platform/format instructions per **Report format (Mac/Windows)**. If the Document Converter is not available, or you cannot write files: output the full document in chat and instruct the user to save it.
6. **Suggest donation** — ExChek is free. Offer: **I'll donate now** / **I'll donate later** / **Just trying**. Mention that optional donations support the project; if the user has a send-USDC or wallet capability, help them donate; otherwise give ExChek donation info from https://docs.exchek.us.

## Report template (Recordkeeping Retention Schedule and Checklist)

After applying the reference and selecting record types for the user's activities and jurisdiction, fill [templates/Recordkeeping Retention Schedule and Checklist.md](templates/Recordkeeping%20Retention%20Schedule%20and%20Checklist.md) completely. All sections: (1) Document header, (2) Regulatory summary, (3) Retention schedule (table), (4) Checklist (optional), (5) AI tool disclosure, (6) Compliance disclaimer. Fill every `{{PLACEHOLDER}}`; use "Not applicable" or "None" when no data exists. Include only rows relevant to the user's activities and jurisdiction.

## Report format (Mac/Windows)

For prompt-style guidelines on producing client-ready document output in any environment, follow the **ExChek Document Converter** skill's **Document output guidelines**. After writing the .docx to the report folder:

| User choice | What to say |
|-------------|-------------|
| **Windows / Word** | "Your recordkeeping schedule is saved as … .docx. Open it in **Microsoft Word**." |
| **Mac / Word** | "Your recordkeeping schedule is saved as … .docx. Open it in **Word for Mac**." |
| **Mac / Pages** | "Your recordkeeping schedule is saved as … .docx. To use in **Apple Pages**: File → Open, then File → Save as .pages." |
| **Windows / Pages** | "Open the .docx in Word, or upload to iCloud and open in Pages if you prefer." |

## References

- **Recordkeeping and retention:** [references/recordkeeping-retention-best-practices.md](references/recordkeeping-retention-best-practices.md) — 15 CFR Part 762 (§ 762.2, 762.4, 762.6), 22 CFR Part 122 (ITAR), record types by activity, tailoring.
- **Docs:** https://docs.exchek.us

## Compliance disclaimer

This skill produces an assistive retention schedule/checklist only. It does not perform classification, screening, or license determination. Legal sufficiency of retention practices and compliance with 15 CFR Part 762 and 22 CFR Part 122 are the responsibility of the user and their legal or compliance counsel. Recommend legal/compliance review before adopting the schedule as policy.
