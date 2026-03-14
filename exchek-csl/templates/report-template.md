# Denied Party Screening Transaction Record

*This template is structured for BIS, OFAC, and DDTC audit readiness. Fill every `{{PLACEHOLDER}}` with screening inputs, API results, and adjudication. Use "Not provided" or "None" only when no data exists. Output is designed for conversion to .docx or .pages from the skill.*

---

## Document header

**PRIVILEGED AND CONFIDENTIAL — EXPORT COMPLIANCE — DENIED PARTY SCREENING RECORD.** This document is privileged and confidential whether or not it was prepared by an attorney.  
*[Include this line if prepared with or at the direction of legal counsel: Prepared with or at the direction of legal counsel.]*

| Field | Value |
|-------|--------|
| **Transaction / Screening record no.** | {{DOC_NUMBER}} |
| **Date of screen** | {{DATE_OF_SCREEN}} |
| **Screened by** | {{SCREENED_BY}} |
| **Reviewed / approved by** | {{REVIEWED_APPROVED_BY}} |
| **Transaction reference** | {{TRANSACTION_REFERENCE}} |

---

## Section 1 — Counterparty / screened party information

| Field | Details |
|-------|---------|
| **Entity / individual name (legal)** | {{ENTITY_LEGAL_NAME}} |
| **DBA / trade name / aliases known** | {{ALIASES}} |
| **Country of incorporation / citizenship** | {{COUNTRY}} |
| **Registered address** | {{REGISTERED_ADDRESS}} |
| **Government / tax ID number** | {{GOV_TAX_ID}} |
| **Date of birth** (individuals) | {{DOB}} |
| **Nationality / passport number** (individuals) | {{NATIONALITY_PASSPORT}} |
| **Role in transaction** | {{ROLE_IN_TRANSACTION}} |
| **Counterparty type** | {{COUNTERPARTY_TYPE}} |
| **Parent company / ownership** | {{PARENT_OWNERSHIP}} |
| **Ownership source verified** | {{OWNERSHIP_SOURCE}} |
| **Date ownership verified** | {{DATE_OWNERSHIP_VERIFIED}} |

**Supporting KYC documentation on file:** {{KYC_DOCUMENTATION}}

---

## Section 2 — Transaction / search details

| Field | Details |
|-------|---------|
| **Item / product / service description** | {{ITEM_DESCRIPTION}} |
| **Destination country** | {{DESTINATION_COUNTRY}} |
| **Stated end-use** | {{STATED_END_USE}} |
| **Transaction value** | {{TRANSACTION_VALUE}} |
| **License / license exception applicable** | {{LICENSE_OR_EXCEPTION}} |
| **Shipping method** | {{SHIPPING_METHOD}} |

*For CSL search-only: this section may reflect the search context (e.g. name searched, sources requested).*

---

## Section 3 — Screening execution

| Field | Details |
|-------|---------|
| **Screening tool used** | {{SCREENING_TOOL}} |
| **Tool version / data set date** | {{TOOL_VERSION_DATA_DATE}} |
| **Fuzzy logic / match threshold** | {{FUZZY_THRESHOLD}} |
| **Date / time of screen** | {{SCREEN_DATE_TIME}} |

**Lists screened:** {{LISTS_SCREENED}}

*BIS Affiliates Rule ownership screen:* {{AFFILIATES_RULE_OWNERSHIP}}

**Overall screening result:** {{OVERALL_RESULT}}

---

## Section 4 — Hit adjudication

*Complete for each hit returned. For CSL API searches, document each result from the API; for full DPS, complete primary/secondary identifier comparison and disposition.*

{{HIT_ADJUDICATION}}

*If no hits:* No matching records found. Proceed to Section 7 certification.

---

## Section 5 — Red flag assessment

| Red flag | Present? | Notes |
|----------|----------|-------|
| Counterparty unfamiliar with product / end-use inconsistent with product | {{RED_FLAG_1}} | {{RED_FLAG_1_NOTES}} |
| Unwilling to provide end-use or end-user information | {{RED_FLAG_2}} | {{RED_FLAG_2_NOTES}} |
| Unusual payment structure | {{RED_FLAG_3}} | {{RED_FLAG_3_NOTES}} |
| Shipping destination differs from buyer country without explanation | {{RED_FLAG_4}} | {{RED_FLAG_4_NOTES}} |
| Delivery instructions inconsistent with normal practice | {{RED_FLAG_5}} | {{RED_FLAG_5_NOTES}} |
| Requests removal of technical documentation | {{RED_FLAG_6}} | {{RED_FLAG_6_NOTES}} |
| No established business history or web presence | {{RED_FLAG_7}} | {{RED_FLAG_7_NOTES}} |
| Country subject to comprehensive embargo or heightened controls | {{RED_FLAG_8}} | {{RED_FLAG_8_NOTES}} |
| Item controlled for AT, NP, CB, or MT reasons | {{RED_FLAG_9}} | {{RED_FLAG_9_NOTES}} |
| Refused to provide ownership or identification | {{RED_FLAG_10}} | {{RED_FLAG_10_NOTES}} |
| Known or suspected minority ownership by Entity/MEU/SDN (BIS Red Flag 29) | {{RED_FLAG_11}} | {{RED_FLAG_11_NOTES}} |
| Other | {{RED_FLAG_OTHER}} | {{RED_FLAG_OTHER_NOTES}} |

**Total red flags identified:** {{TOTAL_RED_FLAGS}}

**Red flag disposition:** {{RED_FLAG_DISPOSITION}}

---

## Section 6 — AI / tool disclosure

*Complete when AI or automated screening tools were used (e.g. ExChek CSL, CSL API, or other automated screening tools).*

| Field | Details |
|-------|---------|
| **Tool name and version** | {{AI_TOOL_NAME_VERSION}} |
| **Lists covered by tool** | {{AI_LISTS_COVERED}} |
| **Data freshness / last update** | {{AI_DATA_FRESHNESS}} |
| **Fuzzy logic threshold** | {{AI_FUZZY_THRESHOLD}} |
| **Tool limitations relevant to this screen** | {{AI_TOOL_LIMITATIONS}} |
| **Human adjudication performed** | {{AI_HUMAN_ADJUDICATION}} |

*Automated screening tools were used to generate initial hit results. All hits, including false positive determinations, were reviewed and adjudicated by the qualified human analyst identified below. The compliance determination in Section 7 reflects human judgment, not automated tool output.*

---

## Section 7 — Screening certification and final disposition

**SCREENING CERTIFICATION**

I, the undersigned, hereby certify that:

1. The denied party screening described in this record was conducted using current versions of the lists identified in Section 3 as of the date of screen.
2. All hits were adjudicated using primary and secondary identifiers as documented in Section 4.
3. A red flag assessment was completed in Section 5.
4. The final disposition stated below reflects my good-faith professional judgment based on applicable regulations as of the date hereof.
5. This record will be retained for a minimum of five (5) years per 15 C.F.R. § 762.6 and in its original form per 15 C.F.R. § 762.4.

**FINAL DISPOSITION:** {{FINAL_DISPOSITION}}

**Screened by**

Signature: _________________________  Date: {{SCREENED_BY_DATE}}  
Printed name: {{SCREENED_BY_NAME}}  Title: {{SCREENED_BY_TITLE}}

**Compliance officer approval**

Signature: _________________________  Date: {{COMPLIANCE_OFFICER_DATE}}  
Printed name: {{COMPLIANCE_OFFICER_NAME}}  Title: {{COMPLIANCE_OFFICER_TITLE}}

---

## Section 8 — Rescreening history log

*For recurring counterparties, attach to master Party Record. Each transaction or periodic rescreening adds a row.*

| Screen date | Screened by | Tool used | Lists version date | Result | Disposition | Ref. no. |
|-------------|-------------|-----------|--------------------|--------|-------------|----------|
| {{RESCREENING_LOG}} |

---

## Record retention and disclaimer

- **BIS (15 C.F.R. Part 762):** Retain records as required by 15 C.F.R. 762.2 and 762.6. Typical retention: at least five years from the date of the transaction or export.
- **OFAC:** Blocking and rejecting transactions must be reported to OFAC (for SDN matches involving blockable property) within 10 days of the action when required.
- This document is a screening record and is not a substitute for legal or compliance advice. Verify any determination against official Federal Register and agency sources (Commerce, State, Treasury). CSL data is updated daily (~5:00 AM EST/EDT); this report reflects the screening output at the time of the search.

---

*Powered by ExChek, Inc.*
