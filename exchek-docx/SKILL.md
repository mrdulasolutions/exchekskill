---
name: exchek-docx
description: Convert an ExChek markdown report to client-ready Word (.docx). Use when the user or another skill needs to produce a .docx or .pages from a saved ExChek report (.md).
compatibility: Claude Code, Claude desktop, Claude CoWork, Cursor, and other AI agents that can run shell commands and write files
---

# ExChek Document Converter

Convert ExChek markdown reports (screening records, classification memos, license memos, etc.) to **client-ready Word (.docx)**. Other ExChek skills (CSL, classification, license, jurisdiction, and the rest) produce .md reports; when the user asks for .docx or Apple Pages, run this converter on the saved file.

## When to use

- The user or another skill has saved an ExChek report as a `.md` file and wants a **Word (.docx)** or **Apple Pages** (.pages) version.
- Another ExChek skill instructs you to "run the ExChek Document Converter" on a path.

## Flow

1. **Input** — You have a path to a saved ExChek markdown report (e.g. from the user or from another skill that just saved the report).
2. **Run the converter** — From the **workspace root** (or the directory where ExChek skills are installed), run:
   - `npm install --prefix exchek-docx/scripts` once if needed (or `exchek-skill-docx/scripts` in the private repo).
   - `node exchek-docx/scripts/report-to-docx.mjs <full-path-to-report.md>`
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

- Other ExChek skills (CSL, classification, license, etc.) reference this converter for .docx/.pages output. Install this skill alongside them for one-step report → .docx.
- Docs: https://docs.exchek.us
