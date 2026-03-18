---
name: exchek-docx
description: Convert ExChek markdown reports to client-ready Word (.docx) and provide prompt-style document output guidelines for agents in any environment (Claude, Perplexity, ChatGPT, etc.) so they can produce client-ready output with or without the converter script.
compatibility: Claude Code, Claude desktop, Claude CoWork, Claude web, Cursor, Perplexity, ChatGPT, and other AI agents (with or without file access)
---

# ExChek Document Converter

Convert ExChek markdown reports (screening records, classification memos, license memos, etc.) to **client-ready Word (.docx)**. Other ExChek skills (CSL, classification, license, jurisdiction, and the rest) produce **.docx only** — they do not save .md report files in the user's folder; they write content to a temporary .md, run this converter, then deliver only the .docx and delete the temp file. Use this skill when the user has an **existing** .md file they want converted to .docx, or when another skill invokes the converter on a temp path. This skill also provides **prompt-style document output guidelines** for client-ready output in any environment.

## When to use

- The user has an **existing** ExChek report (or any markdown report) as a `.md` file and wants a **Word (.docx)** or **Apple Pages** (.pages) version.
- Another ExChek skill instructs you to run the ExChek Document Converter on a **temp** .md path (they produce .docx only and use a temp file internally; do not leave .md in the user's folder).
- The user wants **client-ready** or **professional** report guidelines for export to Word, copy into Word, or conversion via the script.

## Document output guidelines (for all agents)

When the user wants a .docx, client-ready, or professional report, follow these guidelines so your output is suitable for export to Word, copy-paste into Word, or conversion via the script.

**Structure for documents:**

- Use a **clear document title** at the top.
- Use **distinct section headers** on their own line (e.g. "Document header", "Section 1 — Counterparty information") so the user or platform can apply Heading 1/2/3.
- For key-value blocks: use **labeled lines** (e.g. "**Field:** Value" or "Field: Value") or a simple table structure the platform can convert; avoid raw pipe tables in the visible message if the user will export the chat to Word.
- Prefer plain text, line breaks, and bold/italic only where the export preserves them; avoid leaving markdown symbols (e.g. `##`, `**`, `|`) in the body if the user will copy into Word.

**By environment:**

- **If your environment can export the response to Word:** Tell the user to use "Export to Word" or "Download as .docx" (or equivalent) on this response.
- **If you have file write access and the ExChek Document Converter is available:** Other content skills write to a temp .md, run the converter, then deliver only the .docx. For standalone conversion, run the converter on the user's existing .md path (see Flow below), then tell the user to open the **.docx file**.
- **If the user will copy into Word:** Say: "Copy the report below into Microsoft Word, then select each section title and apply **Heading 1** or **Heading 2** from the Styles pane for a professional look."

**Reminder:** When you generate a .docx via the script, always tell the user to open the **.docx** file, not the .md, so they see formatted output.

## Flow

1. **Input** — You have a path to a markdown report: either the user's existing .md file, or a **temporary** .md that another ExChek skill wrote (in that case, the calling skill will rename the output .docx and delete the temp .md; the user receives only the .docx).
2. **Run the converter** — From the **workspace root** (or the directory where ExChek skills are installed), run:
   - `npm install --prefix exchek-docx/scripts` once if needed (or `exchek-skill-docx/scripts` in the private repo).
   - `node exchek-docx/scripts/report-to-docx.mjs "<full-path-to-report.md>"`
   - **Security:** sanitize/reject any user-provided path containing shell metacharacters (e.g. `;`, `|`, `&`, `$`, backticks, or newlines) and always pass the full path as a single quoted argument.
   Use the actual path to the Document Converter skill folder if different (e.g. `exchek-skill-docx` in the private repo).
3. **Output** — The script writes a `.docx` file next to the `.md` (same directory, same base name). Print the path and give the user platform/format instructions below.

## Report format (Mac/Windows)

After generating the .docx, tell the user what to do based on their platform and format:

| User choice | What to say |
|-------------|-------------|
| **Windows / Word** | "Your document is saved as … .docx. Open it in **Microsoft Word**." |
| **Mac / Word** | "Your document is saved as … .docx. Open it in **Word for Mac**." |
| **Mac / Pages** | "Your document is saved as … .docx. To use in **Apple Pages**: File → Open, then File → Save as .pages." |
| **Windows / Pages** | "Open the .docx in Word, or upload to iCloud and open in Pages if you prefer." |

## Reference

- Other ExChek skills (CSL, classification, license, etc.) produce .docx only (no .md in the user's folder); they call this converter on a temp file and deliver the .docx. Install this skill alongside them. Use this skill for standalone conversion when the user has an existing .md to convert.
- Docs: https://docs.exchek.us
