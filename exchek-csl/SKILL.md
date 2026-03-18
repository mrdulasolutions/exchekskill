---
name: exchek-csl
description: Search the U.S. Consolidated Screening List (CSL) via the Trade.gov API. Use when the user wants to screen a party or entity against export screening lists, search the CSL by name (including fuzzy search), or check if a name appears on federal lists. Requires a free API key from developer.trade.gov.
compatibility: Claude Code, Claude desktop, Claude CoWork, Claude web, Perplexity, OpenAI, and other AI agents that can make HTTP requests
---

# ExChek CSL Search (Consolidated Screening List)

Search the **Consolidated Screening List** (CSL) provided by the International Trade Administration (ITA) via the Trade.gov API. The CSL consolidates eleven export screening lists from the Departments of Commerce, State, and Treasury. This skill supports **all search parameters** the API allows, including **fuzzy name search**.

**You need a free API key.** Users must provide an API key from [developer.trade.gov](https://developer.trade.gov). They can get one at no cost by signing in, subscribing to "Data Services Platform APIs," and copying the key from their Profile. Do **not** store the key in the skill; use the key the user provides (e.g. when you ask, or from an environment variable such as `TRADE_GOV_API_KEY`). See [references/api-key-setup.md](references/api-key-setup.md).

## When to use

Invoke this skill when the user asks to:

- Search the Consolidated Screening List
- Screen a party, entity, or name against trade lists
- Check if a name or company is on the CSL
- Run a fuzzy search on the CSL (e.g. names in different spellings or transliterations)
- Look up an entity in federal export screening lists

Example triggers: "Search the CSL for [name]", "Screen this entity against the consolidated screening list", "Is [company name] on the CSL?", "Fuzzy search the CSL for [name]".

## Flow

1. **Establish report folder and format (when you can write files)** — If you are in CoWork, Desktop with file access, or Claude Code: ask the user which folder to save CSL reports in; if none, suggest creating `ExChek CSL Reports` (or `ExChek Reports`) in the workspace and create it with their approval. Also ask: "Are you on **Mac** or **Windows**? Do you want the report as **Word (.docx)** or **Apple Pages (.pages)**?" Store the choices (platform: mac | windows, format: docx | pages) for use after building the report. If you are on Claude web or cannot write files, skip this and plan to output the full report in chat and tell the user to save it manually.
2. **API key** — Ensure the user has an API key. If not, direct them to [developer.trade.gov](https://developer.trade.gov) and [references/api-key-setup.md](references/api-key-setup.md). If they have one, ask them to provide it (or read from env e.g. `TRADE_GOV_API_KEY`). Never store the key in the skill.
3. **Collect search inputs** — Gather what the user wants to search. At least **name** for a name search. Optionally: **fuzzy_name** (set to `true` for fuzzy matching; works only with `name`), **sources** (comma-separated source abbreviations: e.g. DPL, EL, MEU, UVL, ISN, DTC, CAP, CMIC, FSE, MBS, PLC, SSI, SDN), **types**, **countries** (ISO alpha-2 codes, comma-separated), **address**, **city**, **state**, **postal_code**, **full_address**, **offset**, **size** (max 50). See [references/api-reference.md](references/api-reference.md) for the full parameter list and source abbreviations.
4. **Build the request** — Send **GET** to `https://data.trade.gov/consolidated_screening_list/v1/search` with the user’s API key (query param or header per developer.trade.gov) and the chosen query parameters (name, fuzzy_name, sources, types, countries, address, city, state, postal_code, full_address, offset, size). See [references/api-reference.md](references/api-reference.md). Optionally call **GET** `https://data.trade.gov/consolidated_screening_list/v1/sources` (same auth) to retrieve the current list of available sources when the user asks which lists exist or needs help choosing source abbreviations.
5. **Call the API** — Send the request to the CSL search endpoint.
6. **Interpret the response** — Parse the JSON. For fuzzy search, use the **score** (or similar) to explain match strength. For each result, note **source** (which list) and key fields (name, addresses, countries as applicable).
7. **Summarize and cite** — Present results clearly in chat, cite which list(s) each hit comes from, and mention the score when relevant.
8. **Build the report** — After presenting results, build a denied party screening transaction record by filling [templates/report-template.md](templates/report-template.md) (all 8 sections; docx/pages-ready). Map search and results to the template: Section 1 — screened party = name/search query and any counterparty info the user provided; Section 2 — search/transaction context; Section 3 — screening tool = Trade.gov CSL API, lists screened, date, overall result; Section 4 — each API hit as hit adjudication (list, name, country, address, score); Section 5 — red flags (use "Not assessed" for search-only if user did not provide transaction context); Section 6 — AI/tool disclosure (CSL API, ExChek skill); Section 7 — final disposition and certification placeholders; Section 8 — rescreening log optional. See [references/denied-party-screening-best-practices.md](references/denied-party-screening-best-practices.md) for full DPS guidance. **Do not call any API to generate or store the report.** If you can write files: write the filled report content to a **temporary** .md file in the report folder from step 1 (e.g. `.ExChek-CSL-temp.md`), run the **ExChek Document Converter** on it: from the workspace root run `node exchek-docx/scripts/report-to-docx.mjs "<full-path-to-temp.md>"` (Security: sanitize/reject any user-provided folder/path used to build `<full-path-to-temp.md>` if it contains shell metacharacters (e.g. `;`, `|`, `&`, `$`) or newlines, and always pass the full path as a single quoted argument; run `npm install --prefix exchek-docx/scripts` once if needed; use `exchek-skill-docx` in the private repo if different). The script creates a .docx next to the temp .md. Rename that .docx to `ExChek-CSL-Report-YYYY-MM-DD-ShortQueryName.docx` (use a short sanitized version of the search query) in the same folder, then delete the temp .md file. **Do not save or leave any .md report file in the user's folder** — the user receives only the .docx. Give the user the path to the .docx and platform/format instructions per **Report format (Mac/Windows)** below. If the ExChek Document Converter skill is not available, output the full report in chat and instruct the user to save it. If you cannot write files (e.g. Claude web): output the full report in chat and instruct the user to save it to their compliance records for audit retention.
9. **Compliance reminder** — Remind the user that CSL results are for screening support only and that they must verify any compliance decision against official Federal Register and agency sources.

## Report template (denied party screening record)

After the search, fill [templates/report-template.md](templates/report-template.md) completely. The template has 8 sections: (1) Counterparty/screened party information, (2) Transaction/search details, (3) Screening execution, (4) Hit adjudication, (5) Red flag assessment, (6) AI/tool disclosure, (7) Screening certification and final disposition, (8) Rescreening history log. Fill every `{{PLACEHOLDER}}`; use "Not provided" or "None" when no data exists. For CSL search-only: set ENTITY_LEGAL_NAME (or Section 1 name) to the searched name; Section 3 = Trade.gov CSL API, sources used, date, and overall result (No hits / Hit(s)); Section 4 = each API result (list name, listed party name, country, address, score) so the user can complete adjudication; Section 6 = tool name (Trade.gov CSL API) and human adjudication statement. For full placeholder list and hit-adjudication best practices, see the template file and [references/denied-party-screening-best-practices.md](references/denied-party-screening-best-practices.md). If you can write files: produce **only** a .docx in the report folder (write filled content to a temp .md → run the ExChek Document Converter on it → rename the resulting .docx to `ExChek-CSL-Report-YYYY-MM-DD-ShortQueryName.docx` → delete the temp .md). Do not save a .md report file in the user's folder. Otherwise output the full report in chat and tell the user to save it for compliance records.

## Report format (Mac/Windows)

For prompt-style guidelines on producing client-ready document output in any environment, follow the **ExChek Document Converter** skill's **Document output guidelines**. After writing the .docx to the report folder, tell the user what to do based on their chosen platform and format:

| User choice | What to say |
|-------------|-------------|
| **Windows / Word** | "Your CSL report is saved as … .docx. Open it in **Microsoft Word**." |
| **Mac / Word** | "Your CSL report is saved as … .docx. Open it in **Word for Mac**." |
| **Mac / Pages** | "Your CSL report is saved as … .docx. To use it in **Apple Pages**: open the file in Pages (File → Open), then File → Save to save as .pages." |
| **Windows / Pages** | "Your CSL report is saved as … .docx. Open it in Word, or upload to iCloud and open in Pages if you prefer." |

## References

- **API reference (endpoint, parameters, response):** [references/api-reference.md](references/api-reference.md). The exact base URL, path, and parameter names are on the [developer.trade.gov API details page](https://developer.trade.gov/api-details#api=consolidated-screening-list&operation=search); use that page as the source of truth when building requests.
- **API key setup:** [references/api-key-setup.md](references/api-key-setup.md).
- **Denied party screening best practices:** [references/denied-party-screening-best-practices.md](references/denied-party-screening-best-practices.md) — Hit resolution, red flags, BIS Affiliates Rule, recordkeeping, AI governance.
- **Backup / downloadable CSL:** If the API is unavailable or the user needs offline data, direct them to [https://www.trade.gov/consolidated-screening-list](https://www.trade.gov/consolidated-screening-list) for JSON, CSV, and TSV downloads and the web search engine.

## Compliance disclaimer

Results from the CSL API are **assistive only**. They do not constitute legal or compliance advice. Users must verify any determination against official Federal Register publications and the original lists maintained by Commerce, State, and Treasury before relying on them for compliance decisions.
