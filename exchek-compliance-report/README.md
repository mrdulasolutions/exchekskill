# exchek-compliance-report

**CARFAX-style Export Compliance Report Card** — generate a customer-facing compliance summary that exporters can send to buyers, distributors, and partners.

## What it does

Aggregates classification, screening, license determination, country risk, and red-flag assessment results into a single trust-building report with a clear compliance status:

- **PASS** — Transaction fully vetted and cleared
- **CONDITIONAL** — Vetted with specific conditions or authorizations
- **HOLD** — Further review required before proceeding

## Usage

This skill consumes results from other ExChek skills (classify, CSL, license, country-risk, red-flag-assessment) or user-provided compliance data. It does not perform classification or screening itself.

Install into your agent's skills directory and invoke with triggers like:
- "Generate a compliance report card for this shipment"
- "Create a CARFAX-style report for my customer"
- "Compliance summary to send to the buyer"

## Free to use

ExChek is free. Optional donations welcome — see `references/donation.md`.

## Learn more

- Docs: https://docs.exchek.us
- Skills repo: https://github.com/mrdulasolutions/exchekskills
