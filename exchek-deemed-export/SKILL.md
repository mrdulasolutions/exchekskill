---
name: exchek-deemed-export
description: Walk through 15 CFR 734.2(b) to determine if a release of technology or source code to a foreign national is a deemed export. Covers nationality, technology vs. software, fundamental research, and license/exception. Produces a short memo (deemed export applies / does not apply / recommend counsel). Use when the user wants a deemed export review, foreign national access review, or a memo on sharing tech with a foreign national.
compatibility: Claude Code, Claude desktop, Claude CoWork, Claude web
---

# ExChek Deemed Export / Foreign National Review

Walks through **15 CFR 734.2(b)** to determine whether a **release** of technology or source code to a **foreign national** is a deemed export under the EAR. Covers (1) foreign national status / nationality, (2) technology vs. software / what is being released, (3) fundamental research and other carve-outs, (4) license or exception for the deemed-export "destination." Produces a short **Deemed Export Review Memo** with conclusion: **Deemed export applies** | **Deemed export does not apply** | **Recommend counsel**. **No classification or screening performed** — this skill may consume user-provided classification and focuses solely on deemed-export analysis. ExChek is free; an optional donation is suggested at the end.

## When to use

Invoke this skill when the user wants to:

- Determine if sharing technology or technical data with a foreign national is a deemed export
- Review a foreign national's access (employee, visitor, contractor) to controlled technology or software
- Assess fundamental research, public domain, or other carve-outs in a deemed-export context
- Get a short memo documenting whether deemed export applies, does not apply, or counsel is recommended

Example triggers: "Is this a deemed export?", "Foreign national review for our new hire", "We're sharing this tech with a contractor—do we need a license?", "Deemed export memo for this release", "Does fundamental research apply here?".

**Inputs:** Recipient (citizenship/nationality, immigration status if relevant — e.g., green card = U.S. person), what is being released (technology and/or source code; brief technical description), context (employment, site visit, collaboration; where and how access occurs), optional ECCN/classification for the technology/software, fundamental research or other carve-out if asserted, optional case/transaction ID. Accept pasted summaries or "use my classification memo".

## CUI and classified information

At the start, ask: "Does the item or any information you'll share involve **Controlled Unclassified Information (CUI)** or **classified information**? **Yes** / **No** / **Don't know**." If **Yes**, do not use cloud APIs or LLMs; direct the user to run the skill on-premises with a local LLM (see [ExChek CUI/Classified docs](https://docs.exchek.us/docs/cui-classified)). If **Don't know**, give a brief note that CUI/classified requires on-prem use, then ask whether to proceed in this environment or use on-prem.

## Flow

0. **CUI/Classified check** — Ask the selector above; if Yes → route to on-prem guidance and stop; if No → continue; if Don't know → brief + re-ask.
1. **Report folder and format (when you can write files)** — Ask where to save the memo (e.g. "ExChek Reports" or "ExChek Deemed Export"); ask .docx or .pages and Mac or Windows. If no file access, skip and plan to output full memo in chat.
2. **Collect inputs** — Recipient (nationality/citizenship, immigration status), what is being released (technology/software description), context (employment/visit/collaboration), optional ECCN/classification, fundamental research or other carve-outs. Accept pasted data or references to prior ExChek reports.
3. **Apply 734.2(b) analysis** — Use [references/deemed-export-best-practices.md](references/deemed-export-best-practices.md): (a) Is the recipient a foreign national? (b) Is there a release of technology or source code? (c) Fundamental research, public domain, or other exception? (d) If release to a foreign national, license or exception for the "destination" (country of citizenship or permanent residence)?
4. **Reach conclusion** — **Deemed export does not apply** | **Deemed export applies** (license required or exception with citation) | **Recommend counsel** (with brief reason). Use the reference for when to recommend counsel.
5. **Build memo** — Fill [templates/Deemed Export Review Memo.md](templates/Deemed%20Export%20Review%20Memo.md) completely: document header, scenario summary, analysis (foreign national status, nature of release, fundamental research/carve-out, license/exception), conclusion, AI disclosure. Save as `ExChek-DeemedExport-YYYY-MM-DD-ShortName.md` in the folder from step 1. If user asked for .docx or .pages, run the **ExChek Document Converter** on the saved file. From the workspace root run `node exchek-docx/scripts/report-to-docx.mjs <full-path-to-saved-memo.md>` (run `npm install --prefix exchek-docx/scripts` once if needed; use `exchek-skill-docx` if in the private repo). Then give platform/format instructions per **Report format (Mac/Windows)**. If the Document Converter is not available, or you cannot write files: output the full memo in chat and instruct the user to save it; suggest installing the Document Converter skill from the ExChek skills repo for .docx export.
6. **Suggest donation** — ExChek is free. Offer: **I'll donate now** / **I'll donate later** / **Just trying**. Mention that optional donations support the project; if the user has a send-USDC or wallet capability, help them donate; otherwise give ExChek donation info from https://docs.exchek.us.

## Report template (Deemed Export Review Memo)

After completing the 734.2(b) analysis and conclusion, fill [templates/Deemed Export Review Memo.md](templates/Deemed%20Export%20Review%20Memo.md) completely. All sections: (1) Document header, (2) Scenario summary, (3) Analysis (foreign national status, nature of release, fundamental research or other carve-out, license/exception for deemed-export destination), (4) Conclusion, (5) AI tool disclosure. Fill every `{{PLACEHOLDER}}`; use "Not provided" or "None" when no data exists. Map inputs to placeholders; use [references/deemed-export-best-practices.md](references/deemed-export-best-practices.md) for analysis wording and citations.

## Report format (Mac/Windows)

For prompt-style guidelines on producing client-ready document output in any environment, follow the **ExChek Document Converter** skill's **Document output guidelines**. After generating the .docx (via the ExChek Document Converter):

| User choice | What to say |
|-------------|-------------|
| **Windows / Word** | "Your deemed export memo is saved as … .docx. Open it in **Microsoft Word**." |
| **Mac / Word** | "Your deemed export memo is saved as … .docx. Open it in **Word for Mac**." |
| **Mac / Pages** | "Your deemed export memo is saved as … .docx. To use in **Apple Pages**: File → Open, then File → Save as .pages." |
| **Windows / Pages** | "Open the .docx in Word, or upload to iCloud and open in Pages if you prefer." |

## References

- **Deemed export analysis:** [references/deemed-export-best-practices.md](references/deemed-export-best-practices.md) — 15 CFR 734.2(b), foreign national vs. U.S. person, technology vs. software, fundamental research (734.8/734.11), other carve-outs, license/exception for deemed-export destination, when to recommend counsel.
- **Docs:** https://docs.exchek.us

## Compliance disclaimer

This skill provides assistive deemed export analysis and a memo only. It does not perform classification or screening. Final determination of whether a deemed export applies and any license obligation is the responsibility of the user and their designated Export Compliance Officer or legal counsel. Recommend counsel when facts are ambiguous or high-stakes. Retain deemed export review memos per your program and 15 C.F.R. § 762.6 as applicable.
