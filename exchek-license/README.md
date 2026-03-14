# ExChek License Determination Skill (exchek-license)

Determine **EAR license requirements and license exceptions** for a given item (ECCN), destination, and end use. Walks through the Commerce Country Chart (15 CFR Part 738) and Part 740 exceptions (LVS, GBS, TMP, RPL, CIV, TSR, etc.) and produces a short, audit-ready license determination memo.

**Why use it** — Answer "Do we need a license?" or "Can we use LVS/GBS/…?" with a BIS-audit-ready memo. Free to use; optional donation.

- **API**: https://api.exchek.us (GET /api/ecfr/774, /api/ecfr/738, /api/ecfr/740)
- **Docs**: https://docs.exchek.us
- **Website**: https://exchek.us

## Install

This skill lives in the **exchek-license** folder in the public repo. Clone the repo and copy the folder into your agent's skills directory:

```bash
git clone https://github.com/mrdulasolutions/exchekskills exchekskills
cp -r exchekskills/exchek-license ~/.claude/skills/exchek-license
```

Restart your agent (or run `claude skills list`). Skill name: **exchek-license**.

## How to use

- **Invoke** — Ask e.g. *"Do we need a license to ship ECCN 5A992 to Germany?"* or *"License determination for [item] to [country]."*
- **What the agent does** — Collects item/ECCN, destination, end user/end use; fetches Part 774, 738, 740 data; applies Country Chart and exceptions; builds the license determination memo.
- **What you get** — Conclusion (license required or exception cited), rationale, and an audit-ready memorandum.

See **SKILL.md** in this folder for full flow and references.

## License

See ExChek, Inc. terms.
