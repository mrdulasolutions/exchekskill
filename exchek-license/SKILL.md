---
name: exchek-license
description: Determine EAR license requirements and exceptions (Part 738 Country Chart, Part 740) for a given item, ECCN, destination, and end use. Produces a short audit-ready license determination memo. Free; optional donation.
compatibility: Claude Code, Claude desktop, Claude CoWork, Claude web
---

# ExChek License Determination

Determine whether a **license is required** or a **license exception** may be used for an export or reexport under the EAR. Given an item (or ECCN), destination country, and end user/end use, the skill walks through reasons for control (CCL), the Commerce Country Chart (15 CFR Part 738), and license exceptions (Part 740 — LVS, GBS, TMP, RPL, CIV, TSR, etc.), then produces a short, audit-ready **license determination memo**. **No paid API required.** ExChek is free; an optional donation is suggested at the end.

## When to use

Invoke this skill when the user asks whether a license is needed, which license exception applies, or wants a license determination memo. Example triggers: "Do we need a license to ship this to [country]?", "Can we use LVS for this export?", "License determination for ECCN 5A992 to Germany", "Walk me through license exceptions for this item."

**Inputs:** Item summary (or product name), ECCN (or EAR99), destination country, end user, end use. The user may already have an ECCN from a prior classification.

## Regulatory data

Obtain Part 774 (CCL), Part 738 (Country Chart), and Part 740 (License Exceptions) using one of these options:

- **ExChek API (recommended):** No auth, no payment.
  - `GET https://api.exchek.us/api/ecfr/774` — Part 774 (reasons for control).
  - `GET https://api.exchek.us/api/ecfr/738` — Part 738 (Commerce Country Chart).
  - `GET https://api.exchek.us/api/ecfr/740` — Part 740 (License Exceptions).
- **eCFR (fallback):** If the API returns 503 or is unreachable, use `GET https://www.ecfr.gov/api/versioner/v1/structure/current/title-15.json` and extract the nodes for Part 774, 738, and 740 (identifier or label containing the part number).

See [references/reference.md](references/reference.md) for full API and fallback. See [references/license-exceptions.md](references/license-exceptions.md) for exception citations and when they cannot be used.

## License determination prompts

- **System prompt:** [prompts/license-system.md](prompts/license-system.md) — expert instructions for Country Chart, § 740.2, and license exceptions.
- **User template:** [prompts/license-user-template.md](prompts/license-user-template.md) — inputs: item summary, ECCN, destination, end user, end use, value/quantity (if relevant for LVS).

Fill the user template from the user (or from a prior classification), then run license determination using the system prompt and regulatory data.

## Saving the memo (CoWork vs Claude web)

The memo is BIS audit-ready and should be retained per 15 CFR Part 762. Behavior depends on environment:

- **Claude CoWork, Claude Desktop (with file access), Cursor, or Claude Code:** At the start, ask which folder to save memos in (e.g. Desktop, Documents, or "ExChek Reports"). Ask whether they want the memo as Word (.docx) or Apple Pages (.pages) and Mac or Windows. Produce **only** a .docx in that folder: write the filled memo to a temp .md (e.g. `.ExChek-License-temp.md`), run the **ExChek Document Converter** from the workspace root: `node exchek-docx/scripts/report-to-docx.mjs <full-path-to-temp.md>` (run `npm install --prefix exchek-docx/scripts` once if needed; use `exchek-skill-docx` if in the private repo), rename the resulting .docx to `ExChek-License-YYYY-MM-DD-ShortName.docx`, then delete the temp .md. **Do not save or leave any .md report file** in the user's folder. Give platform/format instructions. If the Document Converter is not available, output the full memo in chat.
- **Claude web or no file access:** Output the full memo in chat and instruct the user to save it to their compliance records.

## CUI and classified information

At the start, ask: "Does the item or any information you'll share involve **Controlled Unclassified Information (CUI)** or **classified information**? **Yes** / **No** / **Don't know**." If **Yes**, do not use cloud APIs or LLMs; direct the user to run the skill on-premises with a local LLM and on-prem regulatory data (see [ExChek CUI/Classified docs](https://docs.exchek.us/docs/cui-classified)). If **Don't know**, give a brief note that CUI/classified requires on-prem use, then ask whether to proceed in this environment or use on-prem.

## Flow

0. **CUI/Classified check** — Ask the selector above; if Yes → route to on-prem guidance and stop; if No → continue; if Don't know → brief + re-ask.
1. **Report folder and format (when you can write files)** — Ask where to save and .docx/.pages preference; store for later. If no file access, skip and plan to output in chat.
2. **Collect inputs** — Item summary, ECCN (or EAR99), destination country, end user, end use. Optionally value/quantity for LVS. If the user has a prior classification report, accept ECCN from it.
3. **Get regulatory data** — Call `GET https://api.exchek.us/api/ecfr/774`, `/api/ecfr/738`, `/api/ecfr/740`. If 503, use eCFR title-15 and extract 774, 738, 740.
4. **Determine license requirement** — Apply Country Chart for destination; list reasons for control; evaluate exceptions per § 740.2 and each exception's conditions. Conclude: license required or exception available (cite section).
5. **Build the memo** — Fill [templates/License Determination Memo.md](templates/License%20Determination%20Memo.md) (all 6 sections). If you can write files: produce **only** a .docx (write filled content to temp .md → run ExChek Document Converter on it → rename .docx to `ExChek-License-YYYY-MM-DD-ShortName.docx` → delete temp .md). Do not save a .md file in the user's folder. Otherwise output full memo in chat.
6. **Suggest donation** — ExChek is free. Offer: **I'll donate now** / **I'll donate later** / **Just trying**. If a donation reference is present in the skill, use it; otherwise mention that ExChek is free and optional donations support the project.

## Report template (license determination memo)

After determining license or exception, fill [templates/License Determination Memo.md](templates/License%20Determination%20Memo.md) completely. The template follows the **Export License Determination: Best Practices & Compliance Memo** format. Sections: (1) Purpose and scope, (2) Transaction summary, (3) Five determinative facts analysis (Classification, Destination, End-user, End-use, Conduct), (4) Commerce Country Chart analysis, (5) General Prohibitions 4–10 review, (6) Authorization path determination (NLR / License Exception / Formal license), (7) SNAP-R application support package (if formal license), (8) Destination Control Statement, (9) AI tool disclosure, (10) Recordkeeping checklist, (11) Certification and final authorization. Fill every `{{PLACEHOLDER}}`; use "Not provided" or "None" when no data exists. Map user inputs as follows: item summary → `{{ITEM_SUMMARY}}`; ECCN → `{{ECCN}}`; destination → `{{DESTINATION}}`; end user → `{{ULTIMATE_END_USER}}`; end use → `{{ULTIMATE_END_USE}}`; value/quantity → `{{SHIPMENT_VALUE}}` / `{{QUANTITY}}`; transaction ref → `{{TRANSACTION_ID_OR_ORDER}}`. Leave checkboxes and optional fields for the user to complete where information was not provided.

## Report format (Mac/Windows)

For prompt-style guidelines on producing client-ready document output in any environment, follow the **ExChek Document Converter** skill's **Document output guidelines**. After writing the .docx to the report folder:

| User choice | What to say |
|-------------|-------------|
| **Windows / Word** | "Your memo is saved as … .docx. Open it in **Microsoft Word**." |
| **Mac / Word** | "Your memo is saved as … .docx. Open it in **Word for Mac**." |
| **Mac / Pages** | "Your memo is saved as … .docx. To use in **Apple Pages**: File → Open, then File → Save as .pages." |
| **Windows / Pages** | "Open the .docx in Word, or upload to iCloud and open in Pages if you prefer." |

## Reference

- API and eCFR: [references/reference.md](references/reference.md)
- License exceptions: [references/license-exceptions.md](references/license-exceptions.md)
- Docs: https://docs.exchek.us
