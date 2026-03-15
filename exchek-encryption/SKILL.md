---
name: exchek-encryption
description: Help with 5A992/5D992 (and related) encryption classification, License Exception ENC/TSR, mass market and TSU, and when BIS/NSA notification or annual self-classification report is needed. Prep only; no filing. Use when the user wants to classify encryption items, understand ENC, or determine notification/report obligations.
compatibility: Claude Code, Claude desktop, Claude CoWork, Claude web
---

# ExChek Encryption (ENC / 5x992) Classification & Notification

Helps with **5A992/5D992** (and related **5A002, 5D002, 5E002**) classification using CCL Category 5 Part 2 and **mass market** criteria (Note 3). Covers **License Exception ENC** (§ 740.17), **TSR** where applicable, and **mass market / TSU** eligibility. Determines when **BIS/NSA notification** or **annual self-classification report** is required and **what to prepare** — **prep only; no filing**. ExChek is free; an optional donation is suggested at the end.

## When to use

Invoke this skill when the user wants to:

- Classify or double-check encryption items (5A992, 5D992, or 5A002/5D002/5E002)
- Understand License Exception ENC (§ 740.17) and whether ENC(a), ENC(b)(1), (b)(2), (b)(3) or TSU applies
- Determine mass market eligibility (Note 3 to Cat 5 Part 2) and TSU
- Determine if BIS/NSA notification or annual self-classification report is needed (and what to prepare — no filing)
- Get a single, audit-style memo that ties classification + ENC/TSR + notification/report obligations together

Example triggers: "Is this 5A992 or 5A002?", "Do we need to notify BIS for this encryption product?", "Walk me through ENC for our software", "Mass market encryption classification and what we need to report", "Annual self-classification report required for this?"

**Inputs:** Product/item description (hardware/software, encryption functionality, use case); current or proposed ECCN if any (5A992, 5D992, 5A002, 5D002, etc.); destination or "general" for notification/report logic; whether already registered or reported (optional). Accept pasted text or references to prior classification memos.

## CUI and classified information

At the start, ask: "Does the item or any information you'll share involve **Controlled Unclassified Information (CUI)** or **classified information**? **Yes** / **No** / **Don't know**." If **Yes**, do not use cloud APIs or LLMs; direct the user to run the skill on-premises with a local LLM (see [ExChek CUI/Classified docs](https://docs.exchek.us/docs/cui-classified)). If **Don't know**, give a brief note that CUI/classified requires on-prem use, then ask whether to proceed in this environment or use on-prem.

## Flow

0. **CUI/Classified check** — Ask the selector above; if Yes → route to on-prem guidance and stop; if No → continue; if Don't know → brief + re-ask.
1. **Report folder and format (when you can write files)** — Ask where to save (e.g. "ExChek Reports" or "ExChek Encryption") and .docx/.pages preference; Mac or Windows. If no file access, skip and plan to output full memo in chat.
2. **Collect inputs** — Product/item description (encryption function, hardware vs software), current/proposed ECCN if any, destination (or "general"), prior BIS registration/report if known. Use [references/encryption-classification-guidance.md](references/encryption-classification-guidance.md) to ask targeted questions (e.g. mass market criteria, key length, end-use).
3. **Classification and ENC/TSR** — Apply references to conclude: (a) Recommended or current ECCN (5A992, 5D992, 5A002, 5D002, 5E002, or "needs formal classification"); (b) Mass market (Note 3) and TSU eligibility; (c) License Exception ENC eligibility (740.17) and sub-paragraph (e.g. ENC(b)(1)); (d) TSR applicability if relevant.
4. **Notification and reporting** — Apply [references/enc-notification-and-reporting.md](references/enc-notification-and-reporting.md): (a) Whether BIS/NSA notification or encryption registration is needed; (b) Whether annual self-classification report is required (e.g. 740.17(b)(1); note mass market 5A992.c/5D992.c reporting changes); (c) What to *prepare* (no filing). Cite 15 CFR 740.17, 742.15, and BIS encryption pages.
5. **Build memo** — Fill [templates/Encryption Classification and Notification Memo.md](templates/Encryption%20Classification%20and%20Notification%20Memo.md) completely: product summary, classification conclusion, ENC/TSR/mass market, notification and report obligations (prep), citations, AI disclosure.
6. **Save and convert** — Save as `ExChek-Encryption-YYYY-MM-DD-ShortName.md` in the folder from step 1. If user asked for .docx or .pages, run the **ExChek Document Converter** on the saved file. From the workspace root run `node exchek-docx/scripts/report-to-docx.mjs <full-path-to-saved-memo.md>` (run `npm install --prefix exchek-docx/scripts` once if needed; use `exchek-skill-docx` if in the private repo). Then give platform/format instructions per **Report format (Mac/Windows)**. If the Document Converter is not available, or you cannot write files: output the full memo in chat and instruct the user to save it; suggest installing the Document Converter skill from the ExChek skills repo for .docx export.
7. **Suggest donation** — ExChek is free. Offer: **I'll donate now** / **I'll donate later** / **Just trying**. Mention that optional donations support the project; if the user has a send-USDC or wallet capability, help them donate; otherwise give ExChek donation info from https://docs.exchek.us.

## Report template (Encryption Classification and Notification Memo)

After building the memo, fill [templates/Encryption Classification and Notification Memo.md](templates/Encryption%20Classification%20and%20Notification%20Memo.md) completely. All sections: (1) Document header, (2) Product/item summary, (3) Classification, (4) License Exception ENC/TSR, (5) Notification and reporting obligations, (6) Next steps, (7) AI tool disclosure. Fill every `{{PLACEHOLDER}}`; use "Not provided" or "None" when no data exists. Map inputs to placeholders per [references/encryption-classification-guidance.md](references/encryption-classification-guidance.md) and [references/enc-notification-and-reporting.md](references/enc-notification-and-reporting.md).

## Report format (Mac/Windows)

For prompt-style guidelines on producing client-ready document output in any environment, follow the **ExChek Document Converter** skill's **Document output guidelines**. After generating the .docx (via the ExChek Document Converter):

| User choice | What to say |
|-------------|-------------|
| **Windows / Word** | "Your encryption memo is saved as … .docx. Open it in **Microsoft Word**." |
| **Mac / Word** | "Your encryption memo is saved as … .docx. Open it in **Word for Mac**." |
| **Mac / Pages** | "Your encryption memo is saved as … .docx. To use in **Apple Pages**: File → Open, then File → Save as .pages." |
| **Windows / Pages** | "Open the .docx in Word, or upload to iCloud and open in Pages if you prefer." |

## References

- **Classification and ENC/TSR:** [references/encryption-classification-guidance.md](references/encryption-classification-guidance.md) — 5A992/5D992, 5A002/5D002/5E002, mass market (Note 3), License Exception ENC (§ 740.17), TSR (§ 740.6).
- **Notification and reporting:** [references/enc-notification-and-reporting.md](references/enc-notification-and-reporting.md) — BIS/NSA notification, annual self-classification report, prep only (no filing).
- **Docs:** https://docs.exchek.us

## Compliance disclaimer

This skill assists with encryption classification and notification/report *preparation* only. It does not perform formal BIS classification (CCATS), submit notifications or reports, or provide legal advice. The user is responsible for correct classification, timing, and submissions. Recommend counsel or a qualified compliance professional for high-stakes or uncertain cases.
