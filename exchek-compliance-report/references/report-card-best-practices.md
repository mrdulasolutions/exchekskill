# Compliance Report Card — Design Principles and Best Practices

## The CARFAX analogy

CARFAX built trust in the used-car market by providing a single, verifiable report that aggregates vehicle history data into an easy-to-read format. The buyer doesn't need to understand DMV databases or insurance claim systems — they see a clean report or a flagged one.

The ExChek Compliance Report Card does the same for export compliance:

| CARFAX concept | Compliance Report Card equivalent |
|----------------|-----------------------------------|
| Vehicle history report | Export compliance report card |
| Clean title / salvage title | PASS / CONDITIONAL / HOLD |
| Accident history | Red-flag assessment |
| Mileage verification | Classification verification |
| Theft check | Denied-party screening |
| Service records | License & authorization check |
| State inspection | Destination risk check |

## Customer-facing language principles

The report card is **not** an internal compliance memo. It is a **customer-facing trust document**. Language rules:

1. **Plain language first.** Every check has a "What this means" field. Write it so a non-compliance-professional can understand.
2. **Lead with the status.** The compliance status (PASS/CONDITIONAL/HOLD) should be the first thing the reader sees.
3. **Be specific but not overwhelming.** Cite the ECCN and regulation but explain what it means in practice.
4. **No internal jargon.** Don't use abbreviations like "NLR" without explaining them. Write "No License Required (NLR)".
5. **Confidence without overstatement.** The report should inspire confidence but never claim to be a government certification.
6. **Actionable conditions.** If CONDITIONAL, clearly state what the recipient needs to know or do.

## Status determination logic (detailed)

### PASS — all of the following must be true:
- Classification complete (ECCN or EAR99 determined)
- Jurisdiction confirmed (BIS or ITAR)
- Screening complete with no hits (or all hits adjudicated as false positives)
- No License Required (NLR) OR valid license exception applies
- Destination risk: Low
- No red flags identified
- End use and end user verified

### CONDITIONAL — classification complete AND one or more of:
- License required AND obtained (license number available)
- License exception applies (with conditions the recipient should know)
- Destination risk: Medium
- Minor red flags identified AND resolved (with documentation)
- Screening hits adjudicated as false positives (documented)
- ITAR jurisdiction (inherent sensitivity warrants CONDITIONAL minimum)
- End use verified but end user verification is partial

### HOLD — any one of the following:
- Classification incomplete or in progress
- Screening incomplete or unresolved hits (potential true matches)
- License required but not yet obtained
- Destination risk: High (embargoed or heavily sanctioned)
- Unresolved red flags
- End use or end user cannot be verified
- Any "Not assessed" element that would materially affect the determination

## Validity period guidance

- **Standard validity:** 90 days from date of issue
- **Shortened validity (30 days):** When screening results could change rapidly (e.g., evolving sanctions, Entity List additions expected)
- **Extended validity (180 days):** For low-risk, routine commercial transactions to stable destinations
- **Revalidation triggers:** Any regulatory change affecting the ECCN, destination, or parties; new screening data; material change to transaction terms

## Internal vs. customer-facing versions

The skill can produce two versions:

1. **Customer-facing (default):** Professional, clean, plain-language. Includes compliance status, checks, and conditions. Does NOT include: analyst names (unless requested), detailed adjudication notes, internal risk scoring rationale, or red-flag checklist details.

2. **Internal (optional):** Adds: analyst name and qualifications, detailed screening adjudication notes, full red-flag checklist with BIS Supplement No. 3 references, internal risk score and rationale, CRM record references, and reviewer/approver signatures.

## Integration with other ExChek skills

The Compliance Report Card is a **downstream aggregator**. It pulls from:

| ExChek skill | Data consumed |
|--------------|---------------|
| exchek-classify | ECCN, jurisdiction, classification memo reference |
| exchek-csl | Screening results, lists checked, hit adjudication |
| exchek-license | License type, exception, authorization details |
| exchek-country-risk | Country risk level, embargo/sanctions context |
| exchek-red-flag-assessment | Red flags identified, resolution |
| exchek-jurisdiction | ITAR vs. EAR determination |
| exchek-risk-triage | Risk score (can inform status but report card has its own logic) |

If a skill hasn't been run, the agent should either run it first or ask the user for the equivalent data.
