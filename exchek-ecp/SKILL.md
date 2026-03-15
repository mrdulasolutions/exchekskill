---
name: exchek-ecp
description: Generate tailored Export Compliance Program (ECP) docs, SOPs, and training outlines from company footprint, product mix, and risk profile. Aligns with BIS/DDTC guidance and maps screening, classification, and licensing to CRM/ERP/agents. Use when the user wants to create or refresh an ECP, draft export compliance SOPs, or generate training outlines.
compatibility: Claude Code, Claude desktop, Claude CoWork, Claude web
---

# ExChek ECP / Policy & Training Generator

Generates **tailored Export Compliance Program (ECP) documents**, **SOPs**, and **training outlines** from company footprint, product mix, and risk profile. Aligns with **BIS nine ECP elements** and **DDTC** expectations (where ITAR applies) and maps screening, classification, and licensing into **CRM/ERP/agents**. **No classification, screening, or license determination** — this skill produces program-level and training content only. ExChek is free; an optional donation is suggested at the end.

## When to use

Invoke this skill when the user wants to:

- Create or refresh an Export Compliance Program (ECP) document
- Draft SOPs for screening, classification, licensing, or recordkeeping
- Generate training outlines for export compliance (by role or topic)
- Align their program with BIS/DDTC guidance and map controls into CRM/ERP/agents

Example triggers: "Generate an ECP for our company", "Draft SOPs for our export compliance process", "Create a training outline for sales on red flags", "ECP and training outline based on our product mix and risk profile", "How should screening and classification fit in our CRM?"

**Inputs:** Company footprint (geography, subsidiaries, high-risk jurisdictions), product mix (EAR/ITAR, ECCN bands, encryption), risk profile (low/medium/high); optional existing controls and systems (CRM, ERP, agents). For training: roles (sales, shipping, compliance, engineering) and depth (awareness vs detailed).

## CUI and classified information

At the start, ask: "Does the item or any information you'll share involve **Controlled Unclassified Information (CUI)** or **classified information**? **Yes** / **No** / **Don't know**." If **Yes**, do not use cloud APIs or LLMs; direct the user to run the skill on-premises with a local LLM (see [ExChek CUI/Classified docs](https://docs.exchek.us/docs/cui-classified)). If **Don't know**, give a brief note that CUI/classified requires on-prem use, then ask whether to proceed in this environment or use on-prem.

## Flow

0. **CUI/Classified check** — Ask the selector above; if Yes → route to on-prem guidance and stop; if No → continue; if Don't know → brief + re-ask.
1. **Output choice** — Ask what to generate: ECP only / SOPs only / Training outline only / combination (e.g. ECP + training outline).
2. **Report folder and format (when you can write files)** — Ask where to save (e.g. "ExChek ECP" or "ExChek Reports") and .docx/.pages preference; Mac or Windows. If no file access, skip and plan to output full content in chat.
3. **Collect inputs** — Company footprint, product mix, risk profile; optional existing controls and systems (CRM/ERP/agents). For training: roles and depth. Accept pasted summaries or short descriptions (e.g. "small SaaS with EAR99 and some 5A992").
4. **Generate** — Use [references/ecp-best-practices.md](references/ecp-best-practices.md) and [references/sop-and-training-guidance.md](references/sop-and-training-guidance.md) to tailor content. Fill the appropriate template(s); cite BIS/DDTC where relevant; include "embedding in CRM/ERP/agents" when user provided systems.
5. **Save and convert** — Save as `ExChek-ECP-YYYY-MM-DD-ShortName.md`, `ExChek-SOP-YYYY-MM-DD-ShortName.md`, and/or `ExChek-TrainingOutline-YYYY-MM-DD-RoleOrTopic.md` in the folder from step 2. If user asked for .docx or .pages, run the **ExChek Document Converter** on the saved file. From the workspace root run `node exchek-docx/scripts/report-to-docx.mjs <full-path-to-saved-file.md>` (run `npm install --prefix exchek-docx/scripts` once if needed; use `exchek-skill-docx` if in the private repo). Then give platform/format instructions per **Report format (Mac/Windows)**. If the Document Converter is not available, or you cannot write files: output the full content in chat and instruct the user to save it; suggest installing the Document Converter skill from the ExChek skills repo for .docx export.
6. **Suggest donation** — ExChek is free. Offer: **I'll donate now** / **I'll donate later** / **Just trying**. Mention that optional donations support the project; if the user has a send-USDC or wallet capability, help them donate; otherwise give ExChek donation info from https://docs.exchek.us.

## Templates

- **ECP document:** [templates/ECP Document Template.md](templates/ECP%20Document%20Template.md) — Sections aligned with BIS nine elements; fill placeholders from company footprint, product mix, risk profile; optional integration-with-systems subsection.
- **SOP:** [templates/SOP Export Compliance.md](templates/SOP%20Export%20Compliance.md) — Purpose, scope, roles, procedure steps (screening, classification, license determination, recordkeeping, escalation); references (EAR/ITAR); where steps touch CRM/ERP/agents.
- **Training outline:** [templates/Training Outline Template.md](templates/Training%20Outline%20Template.md) — Audience (role), learning objectives, topics with suggested duration/depth, references to ECP/SOPs, quiz/certification placeholder.

Fill every `{{PLACEHOLDER}}`; use "Not provided" or "None" when no data exists. Map inputs to placeholders per references.

## Report format (Mac/Windows)

For prompt-style guidelines on producing client-ready document output in any environment, follow the **ExChek Document Converter** skill's **Document output guidelines**. After generating the .docx (via the ExChek Document Converter):

| User choice | What to say |
|-------------|-------------|
| **Windows / Word** | "Your document is saved as … .docx. Open it in **Microsoft Word**." |
| **Mac / Word** | "Your document is saved as … .docx. Open it in **Word for Mac**." |
| **Mac / Pages** | "Your document is saved as … .docx. To use in **Apple Pages**: File → Open, then File → Save as .pages." |
| **Windows / Pages** | "Open the .docx in Word, or upload to iCloud and open in Pages if you prefer." |

## References

- **ECP structure and BIS/DDTC:** [references/ecp-best-practices.md](references/ecp-best-practices.md) — BIS nine elements, DDTC program expectations, ECP document structure.
- **SOP and training:** [references/sop-and-training-guidance.md](references/sop-and-training-guidance.md) — SOP patterns, training outline patterns, CRM/ERP/agent mapping.

## Compliance disclaimer

This skill generates assistive ECP, SOP, and training content only. It does not perform classification, screening, or license determination. Adoption of an ECP and legal sufficiency of program documentation are the responsibility of the user and their legal or compliance counsel. Recommend legal/compliance review before formal adoption.
