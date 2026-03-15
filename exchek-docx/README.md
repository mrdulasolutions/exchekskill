# ExChek Document Converter

Converts ExChek markdown reports to client-ready **Word (.docx)**. Used by other ExChek skills (CSL, classification, license, jurisdiction, risk triage, etc.); can also be run standalone.

**Install:** Copy this folder into your agent's skills directory (e.g. `exchek-docx` in the public repo). For .docx output from CSL, classification, or any other ExChek skill, install both the content skill and this converter.

**Usage:** From the directory that contains this skill folder, run:

```bash
npm install --prefix exchek-docx/scripts   # once (or, in exchekinc repo root: npm install --prefix scripts)
node exchek-docx/scripts/report-to-docx.mjs /path/to/report.md
```

The .docx is written next to the .md file. When using from the full ExChek private repo (exchekinc), the script delegates to the canonical converter at `scripts/md-to-docx.mjs`; run `npm install --prefix scripts` once at repo root so that script has its dependencies.
