# Audit Lookback Best Practices

This reference defines **what to check** in a retrospective audit/lookback, **finding types**, **severity bands**, and **remediation patterns**. Use it when building the self-audit report and assigning severity to findings. Align with BIS recordkeeping (15 C.F.R. Part 762), denied party screening best practices (exchek-skill-csl), and license determination expectations (Part 738, 740).

---

## 1. Lookback scope (what to check)

### Screening currency

- **Re-screen all counterparties** (consignee, end user, intermediate consignee, etc.) against **current** Consolidated Screening List (CSL) and any other lists your program uses (e.g. OFAC SDN, Entity List, MEU, DPL).
- Lists are updated frequently (e.g. CSL daily); a party clear at export may be listed later. Document the **date of re-screening** in the report.
- For rescreening expectations and audit trail, see exchek-skill-csl [denied-party-screening-best-practices](https://github.com/mrdulasolutions/exchekskills/blob/main/exchek-skill-csl/references/denied-party-screening-best-practices.md) (Section 8 Rescreening history log).

### ECCN / CCL re-check

- **CCL (15 CFR Part 774)** is amended periodically. Items classified at export may have different ECCNs or reasons for control under current rules.
- **Controlled ECCNs** (not EAR99): recommend **re-classify per current CCL** using ExChek classification skill or internal process.
- **High-change categories** (re-verify against current Part 774): encryption (e.g. 5A992, 5D992), 600 series, 9x515, and "specially designed" catch/release. Note in remediation: "These ECCNs are frequently updated; re-verify against current 15 CFR Part 774."

### License / exception re-check

- **Country Chart (Part 738)** and **license exceptions (Part 740)** are updated periodically. A transaction that was NLR or under an exception at export may require a license or a different exception today.
- For each transaction with ECCN + destination: recommend **re-run license determination** (ExChek license skill or internal process) for current rules. Cite Part 738 and Part 740.

---

## 2. Finding types

| Type | Description | Example |
|------|-------------|---------|
| **Screening** | Party re-screen result or re-screen gap | "Party now on list"; "New hit — needs adjudication"; "Re-screen recommended" (no current result provided) |
| **ECCN re-check** | Classification should be re-verified against current CCL | "Re-classify per current CCL recommended (controlled ECCN)"; "High-change ECCN — re-verify against current Part 774" |
| **License re-check** | License determination may have changed | "Re-run license determination for current Country Chart and Part 740" |

---

## 3. Severity bands (High / Medium / Low)

Use these to assign **severity** to each finding in the findings table and to derive the **overall risk rating** of the lookback.

### High

- **Party now on list** (current screening shows a hit on CSL/SDN/Entity List/MEU/DPL or other program lists).
- **New hit — needs adjudication** (current screening shows a hit not yet adjudicated).
- **Controlled ECCN to sensitive destination** without confirmation that current license determination has been re-run (e.g. Country Group D:1, D:3, D:4, D:5 or embargoed/sanctioned country).

### Medium

- **Re-screen recommended** (user did not provide current screening result for that party).
- **Controlled ECCN** (not EAR99) with no indication that classification was re-verified against current CCL.
- **ECCN + destination** with no indication that license determination was re-run for current Part 738/740.

### Low

- **Informational**: EAR99 to low-risk destination; re-screening completed with no hits; re-classification or license re-check already documented for the scope period.
- **High-change ECCN** (e.g. 5A992, 600 series) with recommendation to re-verify against current Part 774 only (no other risk factors).

---

## 4. Remediation patterns

| Finding type | Suggested remediation wording |
|--------------|-------------------------------|
| **Screening — party now on list / new hit** | "Do not ship or engage until adjudication. Document hit and disposition per DPS best practices. Escalate to export compliance or legal as appropriate." |
| **Screening — re-screen recommended** | "Re-screen party against current CSL (e.g. ExChek CSL skill or your screening tool). Document result and date; attach to party/transaction record." |
| **ECCN re-check** | "Re-classify item per current 15 CFR Part 774 (ExChek classification skill or internal process). Update classification memo and any license determinations that depend on it." |
| **License re-check** | "Re-run license determination for this ECCN + destination + end use under current Part 738 and Part 740 (ExChek license skill or internal process). Update authorization and retain memo." |

Prioritize remediation in the report: address **High** first (especially any party now on list), then **Medium** (re-screen and re-verify), then **Low** (informational or optional re-verify).

---

## 5. Overall risk rating (lookback)

Assign a single **overall risk rating** (Low / Medium / High) to the lookback based on findings:

- **High:** One or more high-severity findings (e.g. party now on list, new hit needing adjudication, or controlled item to sensitive destination without current license re-check).
- **Medium:** One or more medium-severity findings (e.g. re-screen recommended, controlled ECCN or license not re-verified) and no high-severity findings.
- **Low:** Only low-severity or informational findings; re-screening and re-checks completed or documented with no issues.

State the rating and a short rationale (e.g. "2 high-severity findings (party now on list); 5 parties re-screen recommended") in the Self-Audit Report.
