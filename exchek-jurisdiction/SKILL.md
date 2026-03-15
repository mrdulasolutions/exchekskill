---
name: exchek-jurisdiction
description: Determine whether an item is ITAR or EAR via a guided questionnaire (USML, specially designed, etc.) and produce a short jurisdiction memo with recommended next steps (DDTC vs. BIS classification). Use when the user wants to know "is it ITAR or EAR?", run a jurisdiction check, or get a jurisdiction memo before classifying.
compatibility: Claude Code, Claude desktop, Claude CoWork, Claude web
---

# ExChek ITAR vs. EAR Jurisdiction

Guides users through a **jurisdiction-only** analysis: (1) other-agency jurisdiction, (2) USML (22 CFR Part 121), (3) "specially designed" for a defense article (22 CFR § 121(d)), (4) subject to the EAR (15 CFR § 734.3). Produces a **short memo** with **recommended jurisdiction** (ITAR vs. EAR) and **next steps** (e.g. contact DDTC vs. run BIS/ExChek classification). **No ECCN or USML category assignment** — this skill answers "is it ITAR or EAR?" and hands off to the right path. ExChek is free; an optional donation is suggested at the end.

## When to use

Invoke this skill when the user wants to:

- Determine whether an item is ITAR or EAR before classifying
- Run a structured "jurisdiction only" check (USML, specially designed, etc.)
- Get a short, audit-ready jurisdiction memo with next steps (DDTC vs. BIS)

Example triggers: "Is this ITAR or EAR?", "Jurisdiction check for this item", "Do we need to go to DDTC or BIS?", "ITAR vs EAR questionnaire for [product]".

**Inputs (gathered via questionnaire):** Item description/type (hardware, software, technology, data); intended use (military vs. civilian); whether designed for military or for a USML item; other agency jurisdiction (NRC, DOE, etc.); origin (US vs. foreign); any known USML categories to review. Accept pasted text or references to prior docs.

## CUI and classified information

At the start, ask: "Does the item or any information you'll share involve **Controlled Unclassified Information (CUI)** or **classified information**? **Yes** / **No** / **Don't know**." If **Yes**, do not use cloud APIs or LLMs; direct the user to run the skill on-premises with a local LLM (see [ExChek CUI/Classified docs](https://docs.exchek.us/docs/cui-classified)). If **Don't know**, give a brief note that CUI/classified requires on-prem use, then ask whether to proceed in this environment or use on-prem.

## Flow

0. **CUI/Classified check** — Ask the selector above; if Yes → route to on-prem guidance and stop; if No → continue; if Don't know → brief + re-ask.
1. **Report folder and format (when you can write files)** — Ask where to save the jurisdiction memo (e.g. "ExChek Reports" or "ExChek Jurisdiction"); ask .docx or .pages and Mac or Windows. If no file access, skip and plan to output full memo in chat.
2. **Collect inputs via questionnaire** — Walk through the four steps using [references/jurisdiction-best-practices.md](references/jurisdiction-best-practices.md): (1) Other agency? (2) On USML? (3) Specially designed for a defense article per 22 CFR § 121(d)? (4) Subject to the EAR per 15 CFR § 734.3? Accept short answers or pasted text. If the answer at Step 2 or 3 is unclear, note "Uncertain" and plan to recommend a Commodity Jurisdiction (CJ) request per 22 CFR § 120.4.
3. **Apply jurisdiction logic** — Use [references/jurisdiction-best-practices.md](references/jurisdiction-best-practices.md) to determine: Other agency | ITAR (State/DDTC) | EAR (Commerce/BIS) | Uncertain (recommend CJ). Set **Next steps** accordingly.
4. **Build memo** — Fill [templates/Jurisdiction Determination Memo.md](templates/Jurisdiction%20Determination%20Memo.md) completely: questionnaire summary, recommended jurisdiction, rationale (cite 15 CFR 734.3, 22 CFR 120.4, 121(b), 121(d), Supplement No. 3 to 15 CFR Part 730 as applicable), next steps, AI disclosure. If you can write files: write the filled content to a **temporary** .md in the folder from step 1 (e.g. `.ExChek-Jurisdiction-temp.md`), run the **ExChek Document Converter** from the workspace root: `node exchek-docx/scripts/report-to-docx.mjs <full-path-to-temp.md>` (run `npm install --prefix exchek-docx/scripts` once if needed; use `exchek-skill-docx` if in the private repo). Rename the resulting .docx to `ExChek-Jurisdiction-YYYY-MM-DD-ShortName.docx`, then delete the temp .md. **Do not save or leave any .md report file** in the user's folder. Give platform/format instructions per **Report format (Mac/Windows)**. If the Document Converter is not available, or you cannot write files: output the full memo in chat and instruct the user to save it.
5. **Suggest donation** — ExChek is free. Offer: **I'll donate now** / **I'll donate later** / **Just trying**. Mention that optional donations support the project; if the user has a send-USDC or wallet capability, help them donate; otherwise give ExChek donation info from https://docs.exchek.us.
6. **Suggest next step (feed into classification)** — If the recommended jurisdiction is **EAR**, suggest: "You can run the **ExChek classification skill** (exchek-classify) next to get an ECCN or EAR99." If the recommended jurisdiction is **ITAR**, suggest: "Next step: contact DDTC or run classification for the applicable USML category." If **Uncertain**, remind them to submit a CJ request per 22 CFR § 120.4 and not to export until jurisdiction is resolved.

## Report template (Jurisdiction Determination Memo)

After applying jurisdiction logic, fill [templates/Jurisdiction Determination Memo.md](templates/Jurisdiction%20Determination%20Memo.md) completely. Sections: (1) Document header, (2) Questionnaire summary, (3) Recommended jurisdiction, (4) Rationale, (5) Next steps, (6) AI tool disclosure, (7) Retention and disclaimer. Fill every `{{PLACEHOLDER}}`; use "Not provided" or "None" when no data exists. Map questionnaire answers and determination to placeholders; for next steps use the table in [references/jurisdiction-best-practices.md](references/jurisdiction-best-practices.md) (Section 6).

## Report format (Mac/Windows)

For prompt-style guidelines on producing client-ready document output in any environment, follow the **ExChek Document Converter** skill's **Document output guidelines**. After writing the .docx to the report folder:

| User choice | What to say |
|-------------|-------------|
| **Windows / Word** | "Your jurisdiction memo is saved as … .docx. Open it in **Microsoft Word**." |
| **Mac / Word** | "Your jurisdiction memo is saved as … .docx. Open it in **Word for Mac**." |
| **Mac / Pages** | "Your jurisdiction memo is saved as … .docx. To use in **Apple Pages**: File → Open, then File → Save as .pages." |
| **Windows / Pages** | "Open the .docx in Word, or upload to iCloud and open in Pages if you prefer." |

## References

- **Jurisdiction logic and regulations:** [references/jurisdiction-best-practices.md](references/jurisdiction-best-practices.md) — Order of analysis (other agency → USML → specially designed → subject to EAR), 15 CFR 734.3, 22 CFR 120.4, Part 121, 121(b), 121(d), when to recommend CJ, next steps (DDTC vs. BIS).
- **Docs:** https://docs.exchek.us

## Compliance disclaimer

This skill provides assistive jurisdiction analysis only. It does not constitute legal advice. Final jurisdiction determination is the responsibility of the user and their legal or compliance counsel. When in doubt, recommend a Commodity Jurisdiction (CJ) request to DDTC per 22 CFR § 120.4. Retain jurisdiction memos per your program and 15 C.F.R. § 762.6 as applicable.
