# ExChek Claude Skill

Classify export items for **ECCN** (BIS/ITAR) from Claude Code using the ExChek API. Claude runs the full Adjudicator-in-the-Loop (AITL) flow: it calls the API, relays jurisdiction and Order of Review results, and returns an audit-ready classification report when you approve.

**Why use it** — Get U.S. export classifications (15 CFR Part 774, 22 CFR Part 121) without leaving your editor. First classification per wallet is free; paid runs use x402 (USDC on Base). Reports are suitable for compliance records and audits.

- **API**: https://api.exchek.us  
- **Docs**: https://docs.exchek.us  
- **Website**: https://exchek.us  

## Install for Claude Code

```bash
git clone https://github.com/mrdulasolutions/exchekskill ~/.claude/skills/exchek-classify
```

Restart Claude Code (or run `claude skills list`) so the skill is picked up. The skill name is `exchek-classify`.

## How to use

- **Invoke the skill** — Type `/exchek-classify` or ask in plain language, e.g. *“Classify this item for export”* or *“What’s the ECCN for [product description]?”*  
- **What Claude does** — Uses your wallet (you’ll be prompted to authenticate or fund with USDC on Base if needed), starts a classification (first free per wallet, then paid), asks for item description/specs/intended use, runs jurisdiction and Order of Review via the API, and walks you through confirmations or refinements until you approve. Payments are accepted via **Pay Sponge, Coinbase, or Base wallet**.  
- **What you get** — A final ECCN (or jurisdiction outcome), rationale, citations, and when Supabase is configured a **report URL** for the audit-ready classification memo. Claude returns that URL or a success message so you can save or share the report.

You can say things like: *“I need to classify a pressure sensor for export”*, *“Run an ExChek classification for this spec sheet”*, or *“What’s the BIS/ITAR status for [item]?”* — Claude will load the skill and run the AITL flow.

## License

See ExChek, Inc. terms.
