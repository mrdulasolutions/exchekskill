# Denied Party Screening: Best Practices & Compliance Memo Template

## Executive Summary

Denied party screening (DPS) — also called restricted party screening (RPS) or watchlist screening — is the process of systematically checking all transaction counterparties against U.S. government and international lists of prohibited, restricted, or sanctioned individuals and entities. It is one of the most enforcement-active areas of export compliance: in 2025, a single company faced a **$140 million penalty** traceable in substantial part to weak, inconsistent, and manually-conducted DPS, including failure to detect aliases of a Chinese military university on the BIS Entity List. A defensible DPS program requires more than running a name through a database — it requires written policies, documented adjudication of every hit (including false positives), ownership tracing, and immutable audit records for each transaction.[^1][^2]

***

## Part I: The Regulatory Landscape — Lists You Must Screen Against

### U.S. Government Administered Lists

The U.S. Consolidated Screening List (CSL), maintained at trade.gov, aggregates most major lists into one searchable resource and is a solid starting point. However, it does **not** include all applicable lists, and using the CSL alone is insufficient for full compliance. The mandatory screening universe includes:[^3]

**Bureau of Industry and Security (BIS) — 15 C.F.R. Part 744:**

| List | Regulatory Basis | Effect of Match |
|---|---|---|
| Denied Persons List (DPL) | 15 C.F.R. § 764.3 | Total prohibition — no license exceptions available[^4] |
| Entity List | Supp. 4 to 15 C.F.R. § 744 | License required; policy of denial for most items[^5] |
| Military End-User (MEU) List | 15 C.F.R. § 744.21 | License required for items on MEU control list |
| Unverified List (UVL) | Supp. 6 to 15 C.F.R. § 744 | No license exceptions; written statement required[^6] |

**Office of Foreign Assets Control (OFAC) — 31 C.F.R. Chapter V:**

| List | Effect of Match |
|---|---|
| Specially Designated Nationals and Blocked Persons (SDN) | Full blocking — prohibits virtually all transactions; assets must be frozen[^3] |
| Consolidated Sanctions List (non-SDN) | Varies by sanctions program; country-specific restrictions apply |
| Foreign Sanctions Evaders (FSE) | Prohibits transactions with U.S. persons |
| Sectoral Sanctions Identifications (SSI) | Restricts specific transaction types; does not block all activity |

**Directorate of Defense Trade Controls (DDTC) — 22 C.F.R. Part 127:**

| List | Effect of Match |
|---|---|
| Debarred Parties | Prohibition on ITAR transactions; no exceptions[^3] |

**Other Lists to Consider:**
- EU Consolidated Sanctions List
- UN Security Council Consolidated List
- UK Office of Financial Sanctions Implementation (OFSI) List
- Canadian Department of Foreign Affairs sanctions lists
- Interpol notices (for heightened due diligence contexts)

### The BIS Affiliates Rule: The Most Significant Recent Development

On September 29, 2025, BIS issued the **Affiliates Rule** (interim final rule), which automatically extends Entity List and MEU List restrictions to any foreign entity **50% or more owned — directly or indirectly, individually or in the aggregate — by one or more listed entities**. This mirrors the long-standing OFAC 50% Rule and closes a major diversion loophole. Key implications:[^7][^8][^9]

- The U.S. government's CSL alone is **no longer sufficient** — unlisted affiliates of listed entities are now also restricted[^10]
- BIS added **Red Flag 29**: if an exporter has any knowledge that a foreign entity has a listed owner, they have an **affirmative duty** to determine the ownership percentage[^11]
- Significant minority ownership (even below 50%) by a listed entity is itself a red flag requiring additional due diligence[^11]
- BIS suspended the Affiliates Rule from **November 10, 2025 to November 9, 2026** while trade negotiations with China proceed — but this is a pause, not a repeal, and prudent ownership due diligence should continue[^12][^10]

The practical impact: every DPS program must now include **ownership tracing** as a component, not just name-matching against published lists.[^13][^10]

***

## Part II: When to Screen — Triggers and Frequency

### Transaction Lifecycle Screening Points

Best practice is to screen at the **earliest possible point of engagement** and then again at each subsequent transaction stage. The following trigger events require a screening:[^14][^15]

| Trigger Event | Urgency | Rationale |
|---|---|---|
| First contact / lead entry into CRM | Before engagement | Prevents investment in relationships with restricted parties[^14] |
| Onboarding (customer, vendor, partner) | Before contract | Creates baseline record prior to any commitment[^16] |
| Quote or RFQ response | Before proposal submission | Prevents wasted resources and premature commitment[^14] |
| Contract execution | Before signature | Catches changes between first contact and formalization |
| Order placement | Before processing | Active transaction screen; most commonly documented[^17] |
| Shipment / license application | Before export | Required for export documentation purposes |
| Payment / financial transaction | Before processing | Intersects OFAC sanctions on financial transactions |
| Re-screen of existing active counterparties | Ongoing / continuous | List additions effective immediately upon publication[^15] |
| Material change in counterparty corporate structure | Upon notice | Affiliates Rule ownership change triggers[^10] |
| New sanctions program or list update | Upon regulatory change | Proactive compliance requirement[^18] |

### Why Continuous Rescreening Is Required

Denied party lists change almost constantly — a party not listed today may appear tomorrow with immediate effect. Organizations should implement automated rescreening of their active counterparty database on a scheduled basis (daily or weekly for high-volume operations; at minimum before each transaction for lower-volume organizations). **A one-time onboarding screen is not sufficient.** BIS's recent $140M enforcement action specifically cited screening that was conducted "at a limited scale rather than at every new transaction."[^18][^15][^1]

***

## Part III: Hit Resolution — The Adjudication Process

This is the area most often executed poorly. OFAC's "reasonable care" standard in enforcement actions examines your adjudication *process*, not just outcomes. "We reviewed it and it was fine" does not constitute a defensible record.[^2][^19]

### Step-by-Step Hit Resolution Framework

**Step 1 — Confirm the Hit is Real (Not a Screening Tool Error)**
Pull the *primary source* record directly from Treasury.gov, BIS.gov, or the issuing agency — not just your screening software's summary. Screening tools have been known to lag list updates by days and to truncate alias fields. Verify the *current* status of the listed entry.[^19]

**Step 2 — Primary Identifier Comparison**
Compare three core identifiers against your counterparty's on-file information: (a) full legal name including patronymics, transliterations, and all known aliases; (b) date of birth (for individuals); (c) country of registration or citizenship. Document each comparison in the hit resolution record.[^19]

**Step 3 — Secondary Identifier Verification**
Name matches alone prove nothing — the name "Ahmed Hassan" appears across OFAC, EU, and UK lists over 23 times. Secondary identifiers include: registered address, passport or government ID number, vessel IMO number, company registration or tax ID number, known associates, and banking details. If your customer file lacks secondary identifiers to compare, this is a **KYC gap that must be resolved before proceeding** — the lack of documentation is itself a red flag.[^20][^19]

**Step 4 — Ownership Trace (Post-Affiliates Rule)**
For corporate entities, conduct an ownership trace to verify no 50%-or-more-owned parent is on the Entity List, MEU List, or SDN List. Document the source of ownership information (corporate registry, D&B, Dun & Bradstreet, direct counterparty certification, etc.).[^9][^10]

**Step 5 — Document the Analysis and Disposition**
Document every hit, every comparison, and every rationale — including false positive resolutions. Undocumented false positive resolutions look like rubber-stamping to auditors and enforcement counsel. Maintain an allow-list (safe harbor list) of previously adjudicated false positives to reduce future re-processing time, with a mandatory review schedule.[^2][^19]

**Step 6 — Escalation and Final Disposition**
Only qualified persons should make final determinations on potential true matches. The escalation chain must be defined in your written program. If a true match is confirmed, **immediately halt the transaction**. Do not proceed under any circumstances without legal review. If a new export violation is discovered, consult export compliance counsel regarding whether a Voluntary Self-Disclosure to BIS (15 C.F.R. § 764.5) or OFAC is warranted.[^20]

**Resolution Time Benchmarks**:
- Obvious false positive (clearly different entity/person): ~90 seconds
- Ambiguous match requiring secondary verification: 15–20 minutes
- Potential true match requiring escalation and legal review: 2–4 hours[^19]

Teams averaging under 5 minutes per hit across *all* categories are cutting corners.[^19]

***

## Part IV: AI and Automation in DPS Programs

### Legitimate Use of Automated Screening

AI-powered and automated DPS platforms (Descartes Visual Compliance, BITE Data, Lenzo, KYG Trade, MIC Customs) provide capabilities that manual screening cannot match at scale:[^21][^17]
- Fuzzy logic name matching (phonetic variants, transliterations, alias detection)
- Real-time list updates with immediate rescreening of active counterparty databases
- Automated audit trail generation for every hit and resolution decision
- Integration with CRM, ERP, e-commerce, and export licensing platforms[^1][^21]
- Ownership tracing and beneficial ownership data enrichment (post-Affiliates Rule)[^10]

### AI Limitations and Required Governance

Automated screening tools significantly reduce but do not eliminate compliance risk. Key governance requirements:

1. **Human adjudication remains required** — the tool generates hits; trained humans must adjudicate them[^15][^20]
2. **Tool accuracy must be documented** — periodic testing of match sensitivity (fuzzy logic threshold calibration) is required; too-narrow thresholds miss variants, too-broad thresholds generate unworkable false positive rates[^22]
3. **Tool limitations must be disclosed** — in your DPS record and program documentation, identify the screening tool, version, and the lists it covers; document any known coverage gaps[^21]
4. **CSL is insufficient alone** — tools must be configured to screen against the full list universe, including lists not in the CSL[^3][^10]
5. **AI-generated ownership reports require verification** — algorithmic beneficial ownership data (e.g., from Dun & Bradstreet feeds) must be validated against authoritative primary sources when a potential ownership connection to a listed entity is identified

***

## Part V: Recordkeeping Requirements

Under 15 C.F.R. Part 762, all records related to export transactions — including screening records, hit resolution documentation, and adjudication rationales — must be retained for **five years** from the date of the transaction or export. Records include: memoranda, notes, correspondence, contracts, and screening outputs. The records must be retained in their original form, must be legible and reproducible, and must be organized so that any particular record can be immediately located upon request.[^23][^24][^25]

For OFAC purposes, blocking and rejecting transactions must be reported to OFAC (for SDN matches involving blockable property) within 10 days of the action, and annually thereafter, regardless of the amount.[^2]

***

## Part VI: The DPS Transaction Record Template

Use this template to document every DPS screen. For recurring transaction partners, maintain one master Party Record per counterparty and attach individual transaction records to it.

***

### TEMPLATE: DENIED PARTY SCREENING TRANSACTION RECORD

***

```
PRIVILEGED AND CONFIDENTIAL
EXPORT COMPLIANCE — DENIED PARTY SCREENING RECORD

TRANSACTION / SCREENING RECORD NO.:  [DPS-YYYY-NNN]
DATE OF SCREEN:                       [YYYY-MM-DD HH:MM TZ]
SCREENED BY:                          [Name, Title]
REVIEWED / APPROVED BY:               [Name, Title — Compliance Officer or designee]
TRANSACTION REFERENCE:                [Order No. / Contract No. / Deal ID / PO No.]
```

***

#### Section 1 — Counterparty Information

| Field | Details |
|---|---|
| **Entity / Individual Name (Legal)** | [Full legal name — no abbreviations] |
| **DBA / Trade Name / Aliases Known** | [List all known alternative names] |
| **Country of Incorporation / Citizenship** | [Country] |
| **Registered Address** | [Full address including city, country, postal code] |
| **Government / Tax ID Number** | [If known — EIN, VAT, company registration number] |
| **Date of Birth** (individuals) | [YYYY-MM-DD] |
| **Nationality / Passport Number** (individuals) | [Country / Number] |
| **Role in Transaction** | [ ] Customer / [ ] Supplier / [ ] Freight Forwarder / [ ] Financial Institution / [ ] Broker / [ ] End-User / [ ] Other: ___ |
| **Counterparty Type** | [ ] Individual / [ ] Private Company / [ ] State-Owned Enterprise / [ ] Government Entity / [ ] Research Institution |
| **Parent Company / Ownership** | [Identify ultimate beneficial owner ≥25% threshold; document source of ownership info] |
| **Ownership Source Verified** | [ ] Corporate registry / [ ] D&B / [ ] Direct counterparty certification / [ ] Other: ___ |
| **Date Ownership Verified** | [YYYY-MM-DD] |

**Supporting KYC Documentation on File**:
- [ ] Government-issued ID or business registration certificate
- [ ] Proof of address
- [ ] Beneficial Ownership Certification (signed by counterparty)
- [ ] Corporate organizational chart
- [ ] End-use / End-user Certificate (EUC) — if applicable
- [ ] Other: ___________

***

#### Section 2 — Transaction Details

| Field | Details |
|---|---|
| **Item / Product / Service Description** | [Description — include ECCN or EAR99 classification] |
| **Destination Country** | [Country of ultimate end-use] |
| **Stated End-Use** | [As represented by counterparty] |
| **Transaction Value** | [USD] |
| **License / License Exception Applicable** | [ECCN + license exception, or NLR basis] |
| **Shipping Method** | [ ] Physical shipment / [ ] Electronic transmission / [ ] Deemed export / [ ] Service delivery |

***

#### Section 3 — Screening Execution

| Field | Details |
|---|---|
| **Screening Tool Used** | [e.g., Descartes Visual Compliance, BITE Data, Lenzo, KYG Trade, manual] |
| **Tool Version / Data Set Date** | [Version number; confirm list data is current as of date of screen] |
| **Fuzzy Logic / Match Threshold Setting** | [e.g., 85% — note if default or customized] |
| **Date/Time of Screen** | [YYYY-MM-DD HH:MM TZ] |

**Lists Screened** (check all that apply — do not rely solely on CSL):

*BIS Lists:*
- [ ] Denied Persons List (DPL)
- [ ] Entity List
- [ ] Military End-User (MEU) List
- [ ] Unverified List (UVL)

*OFAC Lists:*
- [ ] Specially Designated Nationals and Blocked Persons (SDN)
- [ ] Non-SDN Consolidated Sanctions List
- [ ] Foreign Sanctions Evaders (FSE)
- [ ] Sectoral Sanctions Identifications (SSI)
- [ ] Non-SDN Menu-Based Sanctions List (NS-MBS)
- [ ] Non-SDN Chinese Military-Industrial Complex Companies List (CMIC)

*DDTC:*
- [ ] Debarred Parties List (22 C.F.R. Part 127)

*Other:*
- [ ] EU Consolidated Sanctions List
- [ ] UN Security Council Consolidated List
- [ ] UK OFSI Consolidated List
- [ ] Other: ___________

*BIS Affiliates Rule Ownership Screen (required post-September 2025 or when rule is reinstated):*
- [ ] Ownership trace conducted — see Section 4
- [ ] Ownership trace not required — basis: [explain, e.g., U.S. domestic entity; individual natural person with no corporate affiliations]

**Overall Screening Result**: [ ] NO HITS — No matching records found. Proceed to certification.
                              [ ] HIT(S) — Complete Section 4.

***

#### Section 4 — Hit Adjudication (Complete for each hit)

*Duplicate this section for each separate hit returned by screening.*

**Hit Reference No.**: [H-001, H-002, etc.]

**4.1 — Hit Summary**

| Field | Details |
|---|---|
| **List on Which Hit Appeared** | [e.g., OFAC SDN, BIS Entity List] |
| **Listed Party Name (as it appears on list)** | [Exact name from list entry] |
| **Listed Party Country** | [Per list entry] |
| **Listed Party Address** | [Per list entry] |
| **Listed Party DOB / ID** | [Per list entry, if provided] |
| **Aliases Listed** | [All aliases per list entry] |
| **Federal Register / List Entry Date** | [Date party was listed — verify this is the current version] |
| **Source Record URL / Reference** | [Direct URL to Treasury.gov, BIS.gov, or agency source — NOT just software summary] |

**4.2 — Primary Identifier Comparison**

| Identifier | Listed Party Value | Screened Party Value | Match? | Notes |
|---|---|---|---|---|
| Full Legal Name | [From list] | [From counterparty file] | [ ] Yes / [ ] No | [Explain differences — transliteration, abbreviation, patronymic] |
| Date of Birth | [From list] | [From counterparty file] | [ ] Yes / [ ] No / [ ] N/A | |
| Country of Registration / Citizenship | [From list] | [From counterparty file] | [ ] Yes / [ ] No | |

**4.3 — Secondary Identifier Comparison** *(complete if primary identifiers do not definitively resolve)*

| Identifier | Listed Party Value | Screened Party Value | Match? | Source of Verification |
|---|---|---|---|---|
| Registered Address | [From list] | [From counterparty file] | [ ] Yes / [ ] No | [e.g., corporate registry, counterparty-provided docs] |
| Government / Tax ID | [From list] | [From counterparty file] | [ ] Yes / [ ] No | |
| Passport / ID Number | [From list] | [From counterparty file] | [ ] Yes / [ ] No | |
| Known Associates | [From list] | [From counterparty file] | [ ] Yes / [ ] No | |
| Banking Information | [From list] | [From counterparty file] | [ ] Yes / [ ] No | |
| Other: ___ | | | | |

**4.4 — Ownership Trace** *(complete if corporate entity or if ownership concern identified)*

| Field | Details |
|---|---|
| Ultimate Beneficial Owner(s) ≥25% | [Name(s), country, ownership %] |
| Any owner ≥50% on BIS Entity List / MEU List / OFAC SDN? | [ ] Yes / [ ] No / [ ] Unable to Determine |
| Any minority ownership by listed entity (below 50%)? | [ ] Yes (red flag — escalate) / [ ] No / [ ] Unable to Determine |
| Ownership verification source | [Corporate registry name; date of record; D&B report; direct certification] |
| If unable to determine: action taken | [e.g., requested additional documentation; applied for BIS license as conservative measure; escalated to counsel] |

*Note: BIS Red Flag 29 requires that if you have knowledge — actual or constructive — that a foreign entity has any owner on the Entity List, MEU List, or SDN List, you have an affirmative duty to determine the ownership percentage before proceeding.*[^13][^11]

**4.5 — Hit Disposition**

Adjudication performed by: [Name, Title, Date] — *Only qualified persons may make final hit dispositions*[^20]

| Question | Answer |
|---|---|
| Do the primary AND secondary identifiers support that the hit is the same person/entity as the screened counterparty? | [ ] Yes — true match (proceed to 4.5.A) / [ ] No — false positive (proceed to 4.5.B) / [ ] Inconclusive — escalate (proceed to 4.5.C) |

**4.5.A — TRUE MATCH PROTOCOL**:
```
☐  Transaction immediately halted as of [date/time].
☐  Counterparty notified? [ ] Yes / [ ] No (explain basis for not notifying)
☐  Matter escalated to Export Compliance Officer: [Name] on [Date]
☐  Legal Counsel engaged: [Name/Firm] on [Date]
☐  Relevant agency notification considered:
     OFAC blocking/rejecting report required? [ ] Yes (file within 10 days) / [ ] No
     BIS reporting required? [ ] Yes / [ ] No
☐  VSD to BIS under 15 C.F.R. § 764.5 evaluated? [ ] Yes / [ ] No — basis: ___
☐  Transaction record and all related documentation preserved for minimum 5 years per
    15 C.F.R. Part 762.
```

**4.5.B — FALSE POSITIVE DETERMINATION**:

*Analysis supporting false positive determination* (must be specific — "different country," "different DOB," etc.; general statements are insufficient for audit purposes):

> [Write specific, factual narrative explaining why this hit is NOT the same party as the screened counterparty. Example: "The OFAC SDN list entry for 'Ali Hassan' identifies a Syrian national born 1971-03-15, located in Damascus. Our counterparty is a Delaware-incorporated entity with EIN [XX-XXXXXXX], headquartered in San Jose, California, with no individual beneficial owners sharing this name. Primary and secondary identifiers are fully non-overlapping. Determination: false positive."]

```
☐  False positive determination documented.
☐  Party added to allow-list? [ ] Yes — Allow List Entry No.: ___ / [ ] No
☐  Allow-list entry requires periodic revalidation: Next review date: ___________
☐  Determination recorded in screening software audit log.
```

**4.5.C — ESCALATION (INCONCLUSIVE)**:

```
Reason for escalation: [Describe ambiguity]
Escalated to: [Name, Title] on [Date]
Additional documentation requested from counterparty: [ ] Yes / [ ] No
  If yes, items requested: ___________  Deadline: ___________
Resolution deadline: ___________
Transaction status pending resolution: [ ] On hold / [ ] Proceed at risk (requires senior ECO approval)
Escalation outcome documented in Section 4.5.A or 4.5.B upon resolution.
```

***

#### Section 5 — Red Flag Assessment

The following red flags, drawn from BIS's "Know Your Customer" Guidance (Supp. 3 to 15 C.F.R. Part 732) and standard due diligence practice, must be assessed for every transaction. A "Yes" response to any item below requires escalation before proceeding.

| Red Flag | Present? | Notes |
|---|---|---|
| Counterparty is unfamiliar with the product's normal use / end-use stated is inconsistent with product capabilities | [ ] Yes / [ ] No | |
| Counterparty unwilling to provide end-use information or end-user identity | [ ] Yes / [ ] No | |
| Transaction involves an unusual payment structure (cash, third-party payment, overpayment) | [ ] Yes / [ ] No | |
| Shipping destination differs from buyer's country or billing address without explanation | [ ] Yes / [ ] No | |
| Delivery instructions are inconsistent with normal commercial practice | [ ] Yes / [ ] No | |
| Counterparty requests removal of normal technical documentation (manuals, safety data) | [ ] Yes / [ ] No | |
| Counterparty has no established business history or web presence | [ ] Yes / [ ] No | |
| Transaction involves a country subject to comprehensive embargo or heightened controls | [ ] Yes / [ ] No | |
| Item is controlled for AT (Anti-Terrorism), NP (Nuclear Nonproliferation), CB (Chemical/Biological), or MT (Missile Technology) reasons | [ ] Yes / [ ] No | |
| Counterparty has refused to provide ownership documentation or identification upon request | [ ] Yes / [ ] No | *Refusal to provide KYC docs is itself a red flag requiring escalation[^19]* |
| Known or suspected minority ownership by Entity List / MEU List entity (BIS Red Flag 29) | [ ] Yes / [ ] No | Affirmative duty to determine full ownership structure[^11] |
| Other: ___ | [ ] Yes / [ ] No | |

**Total Red Flags Identified**: ___

**Red Flag Disposition** (if any flagged): [ ] Escalated to [Name] on [Date] / [ ] No red flags identified / [ ] Enhanced due diligence conducted — describe: ___________

***

#### Section 6 — AI Tool Disclosure *(complete if AI or automated screening tools were used)*

| Field | Details |
|---|---|
| **Tool Name and Version** | [e.g., Descartes Visual Compliance v4.x; BITE Data; Lenzo; KYG Trade] |
| **Lists Covered by Tool** | [Identify which lists tool screens; note any gaps vs. required list universe] |
| **Data Freshness / Last Update** | [Date of most recent list data loaded into tool] |
| **Fuzzy Logic Threshold** | [e.g., 85% match — note if adjusted from default] |
| **Tool Limitations Relevant to This Screen** | [e.g., no EU list coverage; does not perform ownership tracing] |
| **Human Adjudication Performed** | [ ] Yes — all hits reviewed by human analyst per Section 4 |
| **AI Reliance Limitation Statement** | *Automated screening tools were used to generate initial hit results. All hits, including false positive determinations, were reviewed and adjudicated by the qualified human analyst identified below. The compliance determination in Section 7 reflects human judgment, not automated tool output.* |

***

#### Section 7 — Screening Certification and Final Disposition

```
SCREENING CERTIFICATION

I, the undersigned, hereby certify that:

(1) The denied party screening described in this record was conducted using current
    versions of the lists identified in Section 3 as of the date of screen;
(2) All hits were adjudicated using primary and secondary identifiers as documented
    in Section 4;
(3) A red flag assessment was completed in Section 5;
(4) The final disposition stated below reflects my good-faith professional judgment
    based on applicable regulations as of the date hereof;
(5) This record will be retained for a minimum of five (5) years per 15 C.F.R. § 762.6
    and in its original form per 15 C.F.R. § 762.4.

FINAL DISPOSITION:
  [ ] CLEAR — No matches found or all hits resolved as false positives.
              Transaction may proceed.
  [ ] HOLD — True match confirmed or escalation pending.
              Transaction is halted. See Section 4.5.A or 4.5.C.
  [ ] CONDITIONAL PROCEED — Enhanced due diligence conditions applied.
              Describe: ___________

SCREENED BY:
Signature: _______________________    Date: ___________
Printed Name: ___________________    Title: ___________

COMPLIANCE OFFICER APPROVAL:
Signature: _______________________    Date: ___________
Printed Name: ___________________    Title: ___________
```

***

#### Section 8 — Rescreening History Log

*Attach this log to the master Party Record for each counterparty. Each transaction or periodic rescreening adds a row.*

| Screen Date | Screened By | Tool Used | Lists Version Date | Result | Disposition | Ref. No. |
|---|---|---|---|---|---|---|
| [YYYY-MM-DD] | [Name] | [Tool] | [Date] | [ ] Clear / [ ] Hit | [FP / TM / Escalated] | [DPS-YYYY-NNN] |
| | | | | | | |

***

## Part VII: Denied Party Screening Program Governance

### Written Policy Requirements

A defensible DPS program requires a written policy document covering:[^16][^18]

1. **Scope** — which transactions, entities, and business systems are covered (sales, procurement, HR, site visitors, financial transactions)
2. **Lists Screened** — complete enumeration of lists and commitment to update as new lists are published
3. **Screening Triggers** — defined trigger events (first contact, order, shipment, rescreening frequency)
4. **Responsible Parties** — named roles (Export Compliance Officer, screening analysts, escalation chain)
5. **Hit Resolution Procedures** — the adjudication framework from Part III of this document
6. **AI / Automation Governance** — tool selection criteria, testing, and human oversight requirements
7. **Allow-List (Safe Harbor) Management** — creation, review, and expiration procedures for validated false positives
8. **Recordkeeping** — five-year retention, format requirements, storage system
9. **Training** — frequency, content, and documentation of training for all personnel in the screening workflow
10. **Escalation and Violation Response** — true match protocol, OFAC reporting deadlines, VSD evaluation

### Integration with Business Systems

The $140M enforcement action confirmed what compliance practitioners have argued for years: screening that is **not embedded into business systems** creates gaps. Best-in-class programs integrate DPS at the system level:[^1]

- **CRM (e.g., Salesforce)**: Screen before a lead can be qualified or a contact record created
- **ERP (e.g., SAP, NetSuite)**: Block order processing pending cleared screen; prevent PO issuance to unscreened vendors
- **E-commerce platforms**: Screen customer at checkout; block shipment pending clearance for controlled items
- **HR systems**: Screen all new hires and contractors for deemed export implications
- **Visitor management**: Screen visitors prior to site access where controlled technology is present[^26]

### Penalty Context and Voluntary Self-Disclosure

| Violation | Civil Penalty | Key Consideration |
|---|---|---|
| OFAC SDN transaction (per violation) | Up to $1.3M or 2x transaction value | Strict liability — intent is not a defense for civil violations[^2] |
| BIS Entity List violation | Up to $300K or 2x value | Good-faith screening record is strong mitigating factor[^3] |
| Failure to disclose OFAC blocking | $250K–$1M+ | Required within 10 days; separate violation from underlying one[^2] |
| Criminal (willful) | Up to $1M + 20 years imprisonment[^27] | Requires knowledge element |
| VSD (mitigating factor) | Reduced base penalty | BIS and OFAC both formally recognize VSD as mitigation[^3] |

BIS has stated that a history of denied party screenings, combined with documented compliance efforts, is a **"strong mitigating factor"** that can protect companies from penalties in cases where a violation has occurred despite good-faith efforts.[^3]

---

## References

1. [$140M Export Control Penalty: How Automated Screening Could ...](https://www.visualcompliance.com/blog/140m-export-control-penalty-how-denied-party-screening-software-could-have-prevented-violations/) - Bottom line: Each of the violations BIS cited maps directly to a control that denied party screening...

2. [OFAC Screening Process: Step-by-Step Compliance Guide - Trademo](https://www.trademo.com/blog/ofac-screening-process) - A defensible process starts with full coverage of every OFAC-administered list and awareness of whic...

3. [Export Compliance: Understanding Restricted Party Screening](https://shippingsolutionssoftware.com/blog/export-compliance-understanding-restricted-party-screening) - Restricted/denied party lists are government lists of people and organizations U.S. companies must n...

4. [Denied Party Screenings and Best Practices - Braumiller Law Group](https://www.braumillerlaw.com/denied-party-screenings-and-best-practices/) - Make no mistake – denied party screening applies to you. Don't gamble with your export privileges by...

5. [Overview of BIS and OFAC Restricted Party Lists](https://researchpolicy.caltech.edu/research-security/export-compliance/restricted-party-screening/overview-of-bis-and-ofac-restricted-party-lists) - If a potential collaborator is a restricted party, the proposed activities need to be reviewed by Ex...

6. [Guidance on end-use and end-user controls and U.S. person controls](https://www.bis.gov/licensing/guidance-on-end-user-and-end-use-controls-and-us-person-controls) - This section provides guidance to determine license requirements based on the end user and end use o...

7. [Beware of Affiliates: BIS Expands Controls with 50% Ownership ...](https://www.wilmerhale.com/en/insights/client-alerts/20251001-beware-of-affiliates-bis-expands-controls-with-50-ownership-rule-new-diligence-obligations) - To address diversion risks, BIS announced the Affiliates Rule, which through operation of law impose...

8. [BIS implements “Affiliates Rule” (a 50% rule) applicable to Entity List ...](https://www.whitecase.com/insight-alert/bis-implements-affiliates-rule-50-rule-applicable-entity-list-and-military-end-user) - The U.S.

9. [BIS Adopts '50% Rule': Key Takeaways for Trade Compliance](https://www.morganlewis.com/pubs/2025/09/bis-adopts-50-percent-rule-key-takeaways-for-trade-compliance) - The Affiliates Rule automatically extends the US Department of Commerce's Entity List and Military E...

10. [What the new BIS 50% Rule Means for Third-Party Screening ...](https://ethixbase360.com/what-the-new-bis-50-rule-means-for-third-party-screening-ownership-due-diligence/) - The BIS 50% Rule updates the requirements for screening foreign entities as enumerated in the Entity...

11. [BIS Suspends the “Affiliates Rule” Expanding End User Export ...](https://blog.freshfields.us/post/102lvi4/bis-suspends-the-affiliates-rule-expanding-end-user-export-controls-for-one-yea) - The Affiliates Rule Will Generally Align BIS and OFAC Restrictions Based on Ownership · BIS Adds “Re...

12. [U.S. Pauses BIS “50% Affiliates Rule” for One Year: What It Means ...](https://www.visualcompliance.com/blog/u-s-pauses-bis-50-affiliates-rule-for-one-year-what-it-means-for-exporters-importers-and-compliance-teams/) - The effective suspension period for the Affiliates Rule spans November 10, 2025, to November 9, 2026...

13. [BIS Issues “Affiliates Rule” to Dramatically Expand Applicability of ...](https://www.crowell.com/en/insights/client-alerts/bis-issues-affiliates-rule-to-dramatically-expand-applicability-of-entity-and-military-end-user-lists) - Unable to Determine Ownership: BIS added Red Flag 29 explaining that if an exporter has “knowledge” ...

14. [Best Practices in Screening for Denied or Restricted Parties | ECTI, Inc.](https://learnexportcompliance.com/insights/best-practices-in-screening-for-denied-or-restricted-parties) - Screening for denied or restricted parties is one of the most important risk management tasks in exp...

15. [What is denied party screening? | Descartes](https://www.descartes.com/resources/knowledge-center/what-is-denied-party-screening)

16. [Implementing denied party screening in business processes?](https://www.reidellawfirm.com/implementing-denied-party-screening-in-business-processes/) - Discover the importance of implementing denied party screening in your business processes to ensure ...

17. [Denied Party Screening Process: All You Need to Know - shiperp](https://blog.shiperp.com/denied-party-screening-process) - Discover how and when you should run a denied party screening process. It's important for your compa...

18. [12 Steps to Optimize Your Denied Party Screening Program](https://www.visualcompliance.com/blog/12-steps-to-optimize-your-denied-party-screening-program/) - Every business, across all industries, faces an enormous regulatory and compliance burden unlike at ...

19. [Denied Party Match Resolution: 5-Step Process | Lenzo Blog](https://www.lenzo.ai/blog/denied-party-match-resolution-5-step-process) - Resolve denied party screening matches with this 5-step process. Documentation, verification, and es...

20. [So I've Got a Match on a Denied Parties List…Now What?](https://www.visualcompliance.com/blog/so-ive-got-a-match-on-a-denied-parties-listnow-what/) - A positive screening match need not be cause for alarm, but it’s important to be mindful of the very...

21. [Top Five Best Practices to Integrated Denied Party Screening](https://www.visualcompliance.com/blog/top-five-best-practices-to-integrated-denied-party-screening/) - In this article, we will discuss integration best practices to help you better understand the requir...

22. [How to Manage False Positives in Denied Party Screening](https://www.visualcompliance.com/blog/how-to-manage-false-positives-in-denied-party-screening/) - To dramatically reduce false positives in denied party screening requires the combination of quality...

23. [Part 762 - Recordkeeping](https://www.bis.doc.gov/index.php/documents/regulation-docs/429-part-762-recordkeeping/file)

24. [Part 762 - Recordkeeping - EAR | Bureau of Industry and Securitywww.bis.gov › regulations › ear › 762](https://www.bis.gov/regulations/ear/762) - Website of the United States Bureau of Industry and Security

25. [15 CFR § 762.2 - Records to be retained. - Legal Information Institute](https://www.law.cornell.edu/cfr/text/15/762.2)

26. [[PDF] An Introduction to Denied Party Screening](https://www.descartes.com/content/media/documents/2020-06/anintroductiontodeniedpartyscreening-descartesvisualcompliance.pdf)

27. [Restricted party screening in the US: A guide for businesses - MIC](https://www.mic-cust.com/software-solutions/export-control-management/restricted-party-screening-in-the-us-a-guide-for-businesses/) - What should firms know about restricted party screening processes in order to ensure compliance with...

