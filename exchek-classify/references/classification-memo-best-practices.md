# Export Compliance Classification Memo: Best Practices & Template

## Executive Summary

A well-constructed export classification memorandum is the single most critical document in an export compliance program. When regulators, auditors, or enforcement officers scrutinize an export decision, this memo is the record that demonstrates your organization applied a documented, methodical, and legally sound process — the difference between a resolved inquiry and a civil or criminal enforcement action. Civil penalties for misclassification reach up to **$300,000 per transaction or twice the transaction value** (whichever is greater), and criminal penalties can reach **$1 million per transaction plus up to 20 years imprisonment**. This guide synthesizes best practices from leading international trade law firms, BIS official guidance, and modern AI-assisted classification tools to help you build the most defensible classification memo possible.[^1]

***

## Part I: What Makes a Classification Memo "Defensible"

### The Legal Standard BIS Applies

BIS does not require a specific classification memo format, but the agency has made clear through its enforcement actions and voluntary self-disclosure guidance that companies must be able to demonstrate a reasoned, documented analysis. The September 2024 BIS final rule on Voluntary Self-Disclosures codified that a "deliberate decision not to disclose" a significant apparent violation — including one stemming from faulty classification — is a formal aggravating factor in penalty determination. Conversely, a robust contemporaneous classification record demonstrating good-faith analysis is a powerful mitigating factor.[^2][^3]

The standard BIS looks for in classification documentation mirrors what it requires in formal Commodity Classification (CCATS/SNAP-R) requests: a recommended classification, the basis for that recommendation tied to specific technical parameters in the CCL, and supporting documentation (specs, brochures, test data) sufficient to verify the classification. Your internal memo should meet or exceed that standard.[^4]

### Why the Order of Review Is Non-Negotiable

The BIS-mandated CCL Order of Review (Supplement No. 4 to Part 774 of the EAR) is the official analytical sequence exporters must follow. BIS returned approximately **23% of export license applications in 2025 for incorrect or incomplete classification**, almost always because companies skipped steps or assumed EAR99 without documenting the analysis. The Order of Review provides the logical backbone of any defensible memo — each step must be documented, even when the answer is "no" or "does not apply."[^5][^6]

### Documentation of Reasoning Matters as Much as the Result

A correct classification with no documented rationale is nearly as vulnerable as a wrong one. BIS and opposing counsel in enforcement actions will look for evidence of a contemporaneous, deliberate process — not a post-hoc justification. The memo must record who performed the analysis, their qualifications, when the analysis was done, what technical information was reviewed, and how that information maps to specific regulatory text.[^1][^5]

***

## Part II: Best Practices from Leading Law Firms

### Structural Approach: IRAC Applied to Export Classification

Top international trade law firms — including Steptoe, Gibson Dunn, Torres Trade Law, Mayer Brown, and Williams Mullen — consistently apply a structure derived from the IRAC (Issue, Rule, Application, Conclusion) legal analysis framework to export classification matters. This is the same framework used in formal legal opinion letters and is immediately recognizable to regulators and enforcement attorneys. A classification memo structured in IRAC provides:[^7][^8][^3]

- **Issue**: A precise, answerable question about the item's classification
- **Rule**: The applicable regulatory text (USML categories, CCL entries, definitions from 15 CFR Part 772 or 22 CFR Part 120)
- **Application**: A technical analysis mapping product specifications to regulatory parameters
- **Conclusion**: A clear stated classification with license determination

### Address Counterarguments Explicitly

One hallmark of law firm-quality classification memos is the explicit consideration and rejection of alternative classifications. If an item could plausibly be classified under ECCN 3A001 but analysis shows 3A991 is correct, the memo must explain *why* 3A001's technical parameters are not met. This demonstrates good faith and preempts the argument that the lower-control classification was adopted carelessly. The same logic applies at the ITAR vs. EAR decision point: document *why* the item is not on the USML, citing specific USML categories reviewed.[^9][^10]

### Software and SaaS: The Most Litigated Trap

Torres Trade Law has documented that SaaS and software companies make four recurring, legally significant classification errors:[^11]

1. Believing "we don't export" because no physical shipment occurs (incorrect — downloading software in another country is an export; releasing software to a foreign national in the U.S. is a "deemed export")
2. Assuming encryption-enabled software is uncontrolled (incorrect — even standard cryptography "taints" software toward ECCN 5D002 for National Security and Encryption Items controls)
3. Claiming open-source encryption means the item is "publicly available" (incorrect — BIS states that incorporating publicly available encryption creates a new controlled item)
4. Invoking "Mass Market" treatment without conducting the full Cryptography Note analysis

If your company is a software or SaaS provider (which, given your background, it likely is), the classification memo must include a dedicated encryption analysis section and a complete Mass Market Note evaluation.

### Recordkeeping Requirements

Under EAR Part 762, classification records must be retained for **five years** from the date of export or the last transaction under a license, whichever is later. BIS specifies records must be reproducible in their original form and legible. The classification memo itself, along with all technical exhibits, should be stored in a document management system with version control and access logs.[^2]

***

## Part III: AI-Assisted Classification — Use, Governance, and Caveats

### What AI Tools Can Legitimately Do

AI-powered export classification platforms such as KYG Trade use machine learning and pre-built decision trees to automate the initial jurisdiction and classification analysis, with full audit trails. Thomson Reuters' AI classification engine continuously cross-references exports against updated global trade content, reducing manual errors and providing proactive (not reactive) compliance flags. These tools can:[^12][^13]

- Map product descriptions to CCL categories and product groups
- Flag potential 9x515 or "600 series" ECCN applicability
- Monitor for CCL/USML/Wassenaar updates in real time
- Generate preliminary decision tree outputs for reviewer sign-off
- Maintain automated audit trails for recordkeeping

KYG Trade clients have reported **50% reductions in classification time** while strengthening overall export controls.[^12]

### What AI Tools Cannot Do

AI classification tools do not constitute a legal determination. BIS has made clear that the *exporter* bears responsibility for classification accuracy under 15 CFR Part 730.7. An AI output is a starting point — it must be reviewed, validated, and approved by a qualified human (attorney, licensed export compliance officer, or subject matter expert with documented technical qualifications). Any classification memo that relies on AI-generated analysis must:[^5]

1. Disclose that AI tools were used as part of the analysis process
2. Identify the specific tool, version, and date of analysis
3. Document the human review and override or confirmation decision
4. Not rely solely on AI output as the basis for the classification conclusion

The January 2025 AI Diffusion Interim Final Rule (effective May 2025) further elevated BIS's due diligence expectations for AI hardware and model classifications, creating new ECCN 4E091 for certain advanced AI model weights. Companies operating in the AI/ML space must now include a specific AI technology review section in classification memos.[^14][^15]

***

## Part IV: The Classification Memo Template

The template below is organized as a formal legal memorandum suitable for internal records, external counsel review, and production in BIS audits or enforcement proceedings. Bracketed fields `[...]` are placeholders. All sections should be completed for each classified item.

***

### TEMPLATE: EXPORT CONTROL CLASSIFICATION MEMORANDUM

***

```
PRIVILEGED AND CONFIDENTIAL
ATTORNEY-CLIENT COMMUNICATION / ATTORNEY WORK PRODUCT
[If prepared with or at the direction of legal counsel]

EXPORT CONTROL CLASSIFICATION MEMORANDUM

TO:       Export Compliance File / [Name, Title]
FROM:     [Name, Title, Export Compliance Officer / Legal Counsel]
DATE:     [YYYY-MM-DD]
RE:       Export Control Classification — [Product/Item Name, Model/SKU/Version]
DOC NO.:  [ECM-YYYY-NNN] [unique sequential reference number]
VERSION:  [1.0 — Original / 2.0 — Revision: describe trigger]
REVIEW DATE: [Date for next scheduled classification review]
```

***

#### Section 1 — Purpose and Scope

This memorandum documents the export control jurisdiction and classification analysis conducted by [Company Name] ("Company") for the item(s) described herein, in accordance with the Export Administration Regulations ("EAR"), 15 C.F.R. Parts 730–774, and the International Traffic in Arms Regulations ("ITAR"), 22 C.F.R. Parts 120–130, as applicable. This analysis follows the Order of Review prescribed in Supplement No. 4 to 15 C.F.R. Part 774 and is intended to (a) establish a contemporaneous record of the Company's classification determination, (b) support license determination decisions, and (c) satisfy applicable recordkeeping requirements under 15 C.F.R. Part 762.

This memorandum does not constitute legal advice and is not a substitute for a formal Commodity Classification (CCATS) ruling from BIS or a Commodity Jurisdiction (CJ) determination from the State Department's Directorate of Defense Trade Controls ("DDTC"). For items where significant ambiguity exists, submission of a formal CCATS or CJ request is recommended.[^16]

**Scope**: This classification applies to the item(s) described in Section 2 as of the date of this memorandum. Changes to the item's technical specifications, functionality, end-use context, or applicable regulatory text may necessitate reclassification.

***

#### Section 2 — Item Description and Technical Specifications

| Field | Details |
|---|---|
| **Item Name / Product Name** | [Full commercial name] |
| **Model / Part / SKU / Version** | [Model number, software version, revision] |
| **Item Type** | [Hardware / Software / Technology / Service] |
| **Manufacturer / Developer** | [Name, country of origin] |
| **Country of Origin** | [Country where item was designed/manufactured] |
| **Technical Function** | [Plain-language description of what the item does] |
| **Key Technical Parameters** | [Specs relevant to CCL/USML criteria: e.g., processing speed, frequency range, encryption key length, operating wavelength, etc.] |
| **Intended End-Use** | [How the item will be used] |
| **Primary Markets / Customers** | [Consumer, commercial, government, dual-use, etc.] |
| **Prior Classification (if any)** | [Prior ECCN, date assigned, by whom] |
| **Manufacturer-Provided Classification** | [If vendor supplied classification, note it here with source document reference] |

**Supporting Documentation (Exhibits)**:
- Exhibit A: Technical Datasheet / Specifications
- Exhibit B: Product Description / Marketing Materials
- Exhibit C: Engineering Diagrams or Architecture Documents (if applicable)
- Exhibit D: Manufacturer Classification Statement (if applicable)
- Exhibit E: Prior CCATS Determination (if applicable)

***

#### Section 3 — Classification Methodology

This classification analysis follows the three-path methodology authorized under BIS regulations:[^17]

> **(1)** Contact the manufacturer, developer, or producer to obtain their stated classification;
> **(2)** Self-classify by following the Order of Review (Supplement No. 4 to Part 774); and/or
> **(3)** Submit a formal Classification Request (CCATS) to BIS via SNAP-R.

**Method(s) Used**: [✓ Mark all that apply]
- [ ] Manufacturer-provided classification (see Exhibit D)
- [ ] Internal self-classification per Order of Review (documented in Section 4)
- [ ] CCATS submitted — Reference No.: ___________; Date: ___________; Response: ___________
- [ ] Advisory Opinion requested from BIS per 15 C.F.R. § 748.3(a)

**Classifier Information**:

| Field | Details |
|---|---|
| **Primary Analyst** | [Name, Title] |
| **Qualifications** | [Relevant certifications, years of experience, bar admission if attorney] |
| **Technical Subject Matter Expert** | [Name, Title, Department] — consulted for technical parameters |
| **Legal Review** | [Name, Title] — reviewed and approved |
| **Date of Analysis** | [YYYY-MM-DD] |
| **Date of Legal Approval** | [YYYY-MM-DD] |

**AI-Assisted Analysis Disclosure** *(Complete if AI tools were used)*:
- Tool Used: [Name, version, provider]
- Date of AI Analysis: [YYYY-MM-DD]
- AI Output Summary: [Describe what the tool returned]
- Human Review Action: [Confirmed / Modified / Rejected — describe basis]
- Final Determination: [Human determination controls; AI output is advisory only]

*Note: AI-assisted classification tools provide a preliminary analytical starting point and do not constitute a legal determination. The human analyst named above bears responsibility for the accuracy of this classification. AI outputs have been reviewed, validated, and either confirmed or modified by the qualified analyst identified herein.*[^5][^12]

***

#### Section 4 — Order of Review Analysis

##### Step 1: Prerequisite — Is the item subject to the exclusive jurisdiction of another U.S. government agency?

**Analysis**: [Describe review of Supplement No. 3 to 15 C.F.R. Part 730 for agencies with exclusive jurisdiction (e.g., Nuclear Regulatory Commission for nuclear materials under 10 C.F.R. Part 110; DOE for certain nuclear technology under 10 C.F.R. Part 810; DEA for controlled substances)]

**Determination**: [ ] Yes — Item is subject to [Agency] jurisdiction. This analysis proceeds no further under EAR.
                  [ ] No — Proceed to Step 2.

***

##### Step 2: ITAR Analysis — Is the item described on the United States Munitions List (USML)?

**Applicable Regulation**: 22 C.F.R. Part 121 (ITAR); 22 C.F.R. § 120.4 (Commodity Jurisdiction procedure)[^18]

**USML Categories Reviewed**: [List specific USML categories examined, e.g., Category IV (Launch Vehicles), Category VI (Vessels), Category XI (Military Electronics), Category XIII (Materials and Miscellaneous Articles), etc.]

**Analysis**:

> The item was compared against the technical parameters of USML [Category(ies)]. The USML Order of Review specified in 22 C.F.R. § 121(b) was followed, including assessment of whether the item is "specially designed" for a USML-controlled item per 22 C.F.R. § 121(d). Specifically:[^19]
>
> [Describe each relevant USML entry reviewed and explain why the item does or does not meet the criteria. Include specific technical comparisons, e.g.: "USML Category XI(a) controls electronic systems designed for military application. The subject item [does/does not] meet this criterion because [technical reason]."]

**Counterargument Addressed**: [If any USML category could arguably apply, address it here and explain why it does not govern]

**Determination**: [ ] Yes — Item IS on the USML. Subject to ITAR jurisdiction. Contact DDTC. Further EAR analysis suspended.
                  [ ] No — Item is NOT described on the USML. Proceed to Step 3.

*If uncertain, a Commodity Jurisdiction (CJ) Request to DDTC is recommended per 22 C.F.R. § 120.4*.[^20]

***

##### Step 3: EAR Jurisdiction — Is the item subject to the EAR?

**Applicable Regulation**: 15 C.F.R. § 734.3 (Items subject to the EAR)[^21]

**Analysis**: [Address whether the item is subject to the EAR. Note: most U.S.-origin items and certain foreign-made items incorporating U.S.-origin technology are subject to the EAR. Address the Foreign Direct Product Rule (FDPR) at 15 C.F.R. § 736.2(b)(3) if applicable.]

**Determination**: [ ] Yes — Item is subject to the EAR. Proceed to Step 4.
                  [ ] No — Item is not subject to the EAR (document basis carefully).

***

##### Step 4: 9x515 and "600 Series" ECCN Review

**Applicable Regulation**: Supplement No. 4 to 15 C.F.R. Part 774 (CCL Order of Review, Steps 3–4)[^6][^22]

**Analysis**: The item was reviewed against the "600 series" (military items transitioned from USML) ECCNs and 9x515 (space/satellite) ECCNs. The "600 series" review is conducted first because items described by these ECCNs in paragraphs *not* using "specially designed" are classified there without further review.[^6]

> [Identify relevant 9x515 or 600-series ECCNs reviewed, e.g., 0A606, 1A613, 9A515. For each, compare item specifications to ECCN parameters and document finding.]
>
> Example: "ECCN 0A606.x was reviewed. That entry controls [description]. The subject item does not meet the parameters of 0A606.x because [technical comparison]."

**Determination**: [ ] Yes — Item IS described in [9x515 / "600 series"] ECCN. **Final classification: [ECCN]**. Proceed to Section 5.
                  [ ] No — Item is NOT described in any 9x515 or "600 series" entry. Proceed to Step 5.

***

##### Step 5: Non-600 Series ECCN Review — Commerce Control List Analysis

**Applicable Regulation**: 15 C.F.R. Part 774, Supplement No. 1 (Commerce Control List)[^23]

**CCL Category Identified**: [Category 0–9] — [Category Name]
**Product Group Identified**: [A/B/C/D/E] — [Product Group Name]

*The CCL is organized into 10 categories (0–9) and 5 product groups (A–E). The first digit of an ECCN identifies the category; the second character identifies the product group. For example, ECCN 5D002 = Category 5 (Telecommunications and Information Security), Product Group D (Software).*[^23]

**ECCNs Reviewed** (in CCL Order of Review sequence, beginning with "000 series"):

| ECCN | Description | Item Meets Criteria? | Basis for Decision |
|---|---|---|---|
| [e.g., 3A001] | [CCL description] | [ ] Yes / [✓] No | [Technical comparison — cite specific subparagraph] |
| [e.g., 3A991] | [CCL description] | [✓] Yes | [Technical comparison — cite specific subparagraph] |
| [...] | [...] | [...] | [...] |

**"Specially Designed" Analysis** *(if applicable)*: [Address 15 C.F.R. § 772.1 definition of "specially designed" if relevant ECCN uses that control parameter]

**Proposed ECCN**: [e.g., 3A991.a]

**Counterarguments Addressed**:
> [This is critical for defensibility. For each plausible alternative classification, explain why it was rejected. Example: "Although the item contains [feature], it does not meet the threshold in ECCN 3A001.b.1 because [technical reason]. The performance parameter of [X] in 3A001.b.1 requires [Y], but the subject item achieves only [Z]."]

**Determination**: [ ] Item IS described in ECCN [___]. **Proposed classification: [ECCN + subparagraph]**. Proceed to Section 5.
                  [ ] Item is NOT described in any CCL entry. Proceed to Step 6.

***

##### Step 6: EAR99 Designation

**Applicable Regulation**: 15 C.F.R. § 734.3; EAR Part 774[^24]

*EAR99 is not a "safe harbor." EAR99 items still require a license if destined for embargoed/sanctioned countries, restricted parties, or prohibited end-uses.*[^25][^24]

**Analysis**: [Document affirmative steps taken to conclude no ECCN applies — do not simply assert EAR99. Note each step of the Order of Review that was completed and returned a negative result.]

**Determination**: [ ] Item IS designated EAR99. Proceed to Section 5 for license determination.

***

#### Section 5 — Software and Encryption Analysis *(Complete for all software, SaaS, and technology items)*

**Applicable Regulation**: 15 C.F.R. § 740.17 (License Exception ENC); 15 C.F.R. Part 742 Supplement No. 1 (Cryptography Note / Mass Market Note)[^26][^11]

**Does the item contain, use, or leverage encryption functionality?** [ ] Yes / [ ] No

*Note: Under BIS guidance, software that incorporates or "calls" publicly available open-source encryption (e.g., OpenSSL, libsodium) is NOT automatically treated as publicly available. A new item with encryption functionality has been created and must be evaluated as a whole.*[^11]

If yes, complete the following:

**5.1 — Primary Encryption Analysis**:

| Parameter | Finding |
|---|---|
| Encryption algorithms used | [e.g., AES-256, RSA-2048] |
| Key lengths | [e.g., 256-bit symmetric] |
| Is encryption a primary function of the item? | [ ] Yes / [ ] No |
| Does item qualify as "publicly available" per 15 C.F.R. § 734.7? | [ ] Yes / [ ] No |
| Open-source encryption incorporated? | [ ] Yes (name: ___) / [ ] No |
| If open-source: Does the item create a NEW item with encryption functionality? | [ ] Yes (treat as new item) / [ ] No |
| Proposed encryption ECCN without Mass Market treatment | [e.g., 5D002.a.1] |

**5.2 — Mass Market (Cryptography Note) Analysis** per CCL Note 4 to Cat. 5 Part 2:

*The item qualifies as "mass market" only if ALL four criteria below are met:*

| Criteria | Met? | Basis |
|---|---|---|
| 1. Generally available to the public, sold without restriction from stock at retail points (including electronic transactions) | [ ] Yes / [ ] No | [Explain] |
| 2. Cryptographic functionality cannot be easily changed by the user | [ ] Yes / [ ] No | [Explain] |
| 3. Designed for installation by the user without further substantial support by supplier | [ ] Yes / [ ] No | [Explain] |
| 4. Details accessible and will be provided to appropriate authority upon request | [ ] Yes / [ ] No | [Explain] |
| **All criteria met → Mass Market → ECCN 5D992** | [ ] Yes / [ ] No | |

**5.3 — License Exception ENC Analysis** *(for items classified under 5D002)*:

If 5D002 applies and mass market treatment is unavailable, the item may be eligible for License Exception ENC (15 C.F.R. § 740.17). Identify applicable ENC subparagraph:

| ENC Subparagraph | Description | Applicable? | Requirements |
|---|---|---|---|
| (a) | Retail products, personal use | [ ] Yes / [ ] No | No reporting required |
| (b)(1) | Self-classifiable items | [ ] Yes / [ ] No | Annual self-classification report to BIS required |
| (b)(2) | Government end-users | [ ] Yes / [ ] No | Classification request (CCATS) to BIS required |
| (b)(3) | Other controlled items | [ ] Yes / [ ] No | Classification request (CCATS) to BIS required |

*Note: Items classified under ENC (b)(2) or (b)(3) require a formal CCATS submission — self-classification is not sufficient. Opting to submit a CCATS for ENC (b)(1) items eliminates the annual reporting obligation.*[^11]

***

#### Section 6 — License Determination

**Proposed ECCN**: [___] or [ ] EAR99

**Reason(s) for Control**: [e.g., NS = National Security; AT = Anti-Terrorism; EI = Encryption Items; NP = Nuclear Nonproliferation; RS = Regional Stability — cite specific ECCN control paragraph]

**Commerce Country Chart Analysis** *(15 C.F.R. Part 738, Supplement No. 1)*:

| Destination Country | Control Reason Applies? | License Required? | License Exception Available? | Exception Cited |
|---|---|---|---|---|
| [Country] | [ ] Yes / [ ] No | [ ] Yes / [ ] No | [ ] Yes / [ ] No | [e.g., LVS, GBS, CIV, ENC] |

**License Exception(s) Claimed** (beyond ENC, if applicable):

| Exception | 15 C.F.R. Citation | Applicable? | Conditions |
|---|---|---|---|
| LVS (Low Value Shipments) | § 740.3 | [ ] | |
| GBS (Shipments to Group B Countries) | § 740.4 | [ ] | |
| CIV (Civil End-Users) | § 740.5 | [ ] | |
| TSR (Technology and Software under Restriction) | § 740.6 | [ ] | |
| [Other] | § 740.[__] | [ ] | |

***

#### Section 7 — Restricted Party and End-Use Screening

**Screening Conducted**: [ ] Yes — Date: ___________ / [ ] No

**Screening Tools Used**: [e.g., BIS Consolidated Screening List, Visual Compliance, Descartes, etc.]

**Lists Screened**:
- [ ] BIS Denied Persons List
- [ ] BIS Entity List
- [ ] BIS Military End-User (MEU) List
- [ ] BIS Unverified List
- [ ] OFAC Specially Designated Nationals (SDN) List
- [ ] OFAC Country/Region-specific Sanctions Programs
- [ ] State Department DDTC Debarred Parties
- [ ] Other: ___________

**Result**: [ ] No matches found / [ ] Match found — see attached escalation report

**End-Use Concerns / Red Flags Identified**: [ ] None / [ ] Yes — describe: ___________

***

#### Section 8 — Classification Conclusion

**FINAL CLASSIFICATION**:

| Field | Determination |
|---|---|
| **Jurisdiction** | [ ] EAR (Commerce/BIS) / [ ] ITAR (State/DDTC) / [ ] Other agency |
| **ECCN (if EAR)** | [ECCN + subparagraph, e.g., 5D002.a.1] / [ ] EAR99 |
| **USML Category (if ITAR)** | [e.g., Category XI(a)] |
| **License Required?** | [ ] Yes / [ ] No — No License Required (NLR) / [ ] License Exception applies |
| **License Exception (if applicable)** | [e.g., ENC(b)(1)] |
| **Reporting Obligation (if any)** | [e.g., Annual self-classification report per § 740.17(e)(3)] |
| **CCATS Submission Recommended?** | [ ] Yes — submit for formal BIS confirmation / [ ] No |
| **Next Review Date** | [Date — recommend annual or upon material change to product] |

**Classification Rationale Summary**:

> [2–4 sentences summarizing the key technical finding that drives the classification. This is the "plain language" summary that a non-technical reviewer (e.g., an enforcement officer or judge) can understand. Example: "The item is classified ECCN 5D002.a.1 because it contains encryption functionality using AES-256 algorithms that is integral to the item's operation, the item does not qualify as 'publicly available' because it incorporates open-source encryption into a new combined product, and the item does not satisfy all four Mass Market Note criteria because the encryption can be reconfigured through API access."]

***

#### Section 9 — AI Tool Usage Disclosure (Complete if AI was used)

| Field | Details |
|---|---|
| **AI Tool Name and Version** | [e.g., KYG Trade v2.1, Thomson Reuters ONESOURCE, Lenzo AI, internal LLM] |
| **Date of AI Analysis** | [YYYY-MM-DD] |
| **Scope of AI Use** | [e.g., Initial CCL category screening; encryption parameter flagging; CCL text cross-referencing] |
| **AI Output Summary** | [Describe what the AI tool returned, including any preliminary ECCN suggestion] |
| **Human Review Finding** | [ ] AI output confirmed as accurate / [ ] AI output modified — describe modification and basis / [ ] AI output rejected — describe basis |
| **Responsible Human Reviewer** | [Name, Title, Credentials] |
| **AI Reliance Limitation Statement** | *The AI-generated analysis used in this classification was reviewed and either confirmed or modified by the qualified human analyst identified herein. AI tools were used as a research accelerator only. The legal determination reflected in Section 8 is that of the human reviewer, not the AI tool. This disclosure is maintained for audit transparency.* |

***

#### Section 10 — Caveats, Limitations, and Reaffirmation Requirements

1. **Regulatory Currency**: This classification is based on regulations in effect as of the date noted in the heading. Export control regulations — particularly controls on advanced computing, AI, and semiconductor items — are subject to frequent amendment. This classification must be reviewed upon any material change to applicable regulations.[^27]

2. **Technical Accuracy**: This analysis relies on the technical information provided in Exhibits A–E and the representations of the Technical Subject Matter Expert identified in Section 3. Any material change to the item's technical specifications, functionality, software version, or intended end-use triggers a mandatory reclassification review.

3. **Not a Government Determination**: This memorandum reflects the Company's good-faith self-classification analysis. It does not constitute a BIS Commodity Classification determination (CCATS), a DDTC Commodity Jurisdiction determination, or an advisory opinion from BIS. For items with significant classification uncertainty, the Company should consider submitting a CCATS via SNAP-R or requesting an Advisory Opinion from BIS under 15 C.F.R. § 748.3(a).[^16]

4. **EAR99 Is Not a License Exemption**: If the item is designated EAR99, this does not mean the item may be exported without restriction. EAR99 items may not be exported to embargoed destinations, restricted parties, or for prohibited end-uses, and may require a license in those circumstances.[^24]

5. **Deemed Exports**: This classification does not address whether a deemed export authorization is required for transfer of the technology to foreign nationals within the United States. A separate deemed export analysis may be required.[^11]

6. **Re-Export and In-Country Transfer**: This classification applies to the initial export. Re-exports from third countries and in-country transfers may be subject to additional requirements under 15 C.F.R. Parts 736 and 740.

7. **Voluntary Self-Disclosure**: If, upon review of this memorandum or subsequent audit, a potential violation is identified, the Company should immediately consult export compliance counsel regarding whether a Voluntary Self-Disclosure to BIS under 15 C.F.R. § 764.5 is warranted. VSD is a recognized mitigating factor in BIS enforcement. Deliberate failure to disclose a significant apparent violation is a formal aggravating factor.[^3][^28]

***

#### Section 11 — Reviewer Certification and Approval

```
CLASSIFICATION CERTIFICATION

I, the undersigned, hereby certify that:
(1) I have reviewed this Export Control Classification Memorandum in its entirety;
(2) The technical information in Section 2 and Exhibits is accurate to the best of my 
    knowledge and belief;
(3) The Order of Review analysis in Section 4 was conducted in accordance with 
    Supplement No. 4 to 15 C.F.R. Part 774;
(4) The classification determination in Section 8 reflects my good-faith professional 
    judgment based on applicable regulations as of the date hereof;
(5) I am aware that willful violations of the Export Administration Regulations may 
    result in criminal penalties including imprisonment under 50 U.S.C. § 4819; and
(6) This memorandum is being created and retained as part of the Company's Export 
    Compliance Program in satisfaction of 15 C.F.R. Part 762.

PRIMARY ANALYST:
Signature: _______________________    Date: ___________
Printed Name: ___________________    Title: ___________

TECHNICAL REVIEWER (if applicable):
Signature: _______________________    Date: ___________
Printed Name: ___________________    Title: ___________

LEGAL APPROVAL:
Signature: _______________________    Date: ___________
Printed Name: ___________________    Title: ___________

EXPORT COMPLIANCE OFFICER FINAL APPROVAL:
Signature: _______________________    Date: ___________
Printed Name: ___________________    Title: ___________
```

***

#### Section 12 — Version Control and Amendment Log

| Version | Date | Author | Description of Change | Trigger |
|---|---|---|---|---|
| 1.0 | [YYYY-MM-DD] | [Name] | Initial classification | New product/item |
| 2.0 | [YYYY-MM-DD] | [Name] | [Describe change] | [e.g., Reg change / product update / audit finding] |

***

## Part V: Ongoing Classification Program Considerations

### Integration with BIS's Nine ECP Elements

A classification memo is most defensible when it exists within a broader Export Compliance Program (ECP) that BIS has formally endorsed. BIS identifies nine critical ECP elements:[^29]

1. Management Commitment — signed policy statement from CEO/senior executive
2. Risk Assessment — product, operations, and customer risk profiling
3. **Export Authorization** — the written procedures that produce classification memos
4. **Recordkeeping** — five-year retention under 15 C.F.R. Part 762
5. Training — documented training for all personnel touching export decisions
6. Audits — periodic internal and external review of classification accuracy
7. Handling Violations and Corrective Action
8. Build and Maintain the ECP Manual
9. [Additional elements tailored to organizational complexity]

### Classification Review Triggers

The following events require a mandatory reclassification review of existing classification memos:[^30][^1]

- Material change to product specifications, software version, or functionality
- Change to the intended end-use or target customer base
- Addition of new export destinations or markets
- Amendments to the CCL, USML, or applicable license exceptions
- Acquisition of or merger with another entity with export-controlled products
- Receipt of a "red flag" transaction request
- BIS audit finding or external enforcement inquiry
- Annual review cycle (minimum)

### Encryption-Specific Annual Reporting

Companies relying on License Exception ENC (b)(1) must submit an annual self-classification report to BIS by February 1 of the following calendar year, covering all items exported under that exception during the prior year. This report is submitted via email to BIS and the ENC Encryption Request Coordinator in CSV format per Supplement No. 8 to Part 742. Companies that submit a CCATS for their ENC (b)(1) items are relieved of this annual reporting obligation — a significant administrative efficiency for software-heavy organizations.[^31][^11]

***

## Part VI: Penalty and Risk Context

| Violation Type | Civil Penalty | Criminal Penalty |
|---|---|---|
| EAR violation (standard) | Up to $300,000/transaction or 2x transaction value (whichever greater)[^1] | Up to $1M/transaction + 20 years[^1] |
| Willful violation / knowing violation | Higher multipliers; loss of export privileges | Same criminal exposure + debarment |
| ITAR violation | Up to $1M/violation (AECA § 38) | Up to $1M + 20 years |
| Failure to disclose (VSD aggravation) | Increased base penalty per 2024 BIS rule[^3] | DOJ referral possible[^28] |
| Voluntary Self-Disclosure (mitigation) | Reduced penalties recognized[^28] | DOJ notified of VSD but credit may be given |

The 2024 BIS VSD reform established a **dual-track system**: minor/technical violations receive expedited processing and reduced penalties; significant violations receive full investigation. Companies with documented classification memos demonstrating good-faith analysis are substantially better positioned in both tracks.[^32]

---

## References

1. [ECCN classification: Best practices for exporters | Thomson Reuters](https://tax.thomsonreuters.com/en/insights/articles/eccn-classification-best-practices-for-exporters) - Here are 5 key challenges exporters face with ECCN classification, along with 5 best practices to en...

2. [[PDF] The Elements of an Effective Export Compliance Program](https://www.bis.gov/sites/default/files/documents/ECP_0.pdf) - This document contains information on the elements of an effective Export Compliance Program (ECP) a...

3. [BIS Final Rule on Voluntary Self-Disclosure Process and Penalty ...](https://www.gibsondunn.com/bis-final-rule-on-voluntary-self-disclosure-process-and-penalty-guidelines-highlights-significant-export-control-violations-and-higher-penalties/) - BIS Final Rule on Voluntary Self-Disclosure Process and Penalty Guidelines Highlights Significant Ex...

4. [US Department of Commerce - Bureau of Industry and Security](https://www.bis.gov/node/17054)

5. [ECCN Lookup: Step-by-Step Classification Guide | Lenzo Blog](https://www.lenzo.ai/blog/eccn-lookup-step-by-step-process) - Master the 6-step ECCN lookup process. BIS returns 23% of applications for classification errors, av...

6. [BIS Website - CCL Order of Review - Bureau of Industry and Security](https://www.bis.doc.gov/index.php/component/fsj_faqs/cat/70-ccl-order-of-review-3)

7. [Export Controls | Steptoe](https://www.steptoe.com/en/services/practices/international-trade-compliance-and-investment/export-controls/index.html) - Steptoe attorneys handle export requirements for transfers of dual-use items, controlled primarily u...

8. [Ofac](https://www.williamsmullen.com/services/practice/itar-export-controls-and-economic-sanctions) - Williams Mullen, an AmLaw 200 law firm with deep Mid-Atlantic roots, provides full-service legal sol...

9. [Legal Memo Template](https://www.clio.com/resources/legal-document-templates/legal-memo-template/) - Enhance your legal writing with expert legal memo templates and drafting tips. Download samples and ...

10. [Master the Legal Memo Format - Bloomberg Law](https://pro.bloomberglaw.com/insights/litigation/master-the-legal-memo-format/) - Learn how to format and write a legal memo to apply legal issues and address all relevant points for...

11. [Persistent Errors in the Export Classification of Software Products](https://www.torrestradelaw.com/posts/Persistent-Errors-in-the-Export-Classification-of-Software-Products/352) - Persistent Errors in the Export Classification of Software Products

12. [AI-Powered Export Classification - KYG Trade](https://www.kygtrade.com/platform/features/eccn) - Faster Compliant Export Controls · AI-Assisted Jurisdiction and Classification. KYG Trade uses advan...

13. [3 ways AI transforms product classification in global trade](https://tax.thomsonreuters.com/blog/from-rigid-rules-to-intelligent-learning-3-ways-ai-transforms-product-classification-in-global-trade/) - AI-powered classification continuously learns from your decisions, building institutional knowledge ...

14. [U.S. Department of Commerce Establishes Export Control ...](https://www.cov.com/en/news-and-insights/insights/2025/01/us-department-of-commerce-establishes-export-control-framework-limiting-the-diffusion-of-advanced-artificial-intelligence-and-expands-and-clarifies-advanced-computing-controls) - The AI Diffusion IFR was effective as of January 13, 2025, but exporters, reexporters, and transfero...

15. [Export Regulatory and Policy Update Roundup: February 2025](https://exportcompliancesolutions.com/blog/2025/02/14/export-regulatory-and-policy-update-roundup-february-2025/) - BIS published an Interim Final Rule increasing controls on advanced biotechnology tools: High-parame...

16. [15 CFR § 748.3 - Classification requests and advisory opinions.](https://www.law.cornell.edu/cfr/text/15/748.3)

17. [[PDF] determine an ECCN - Bureau of Industry and Security](https://www.bis.gov/media/documents/how-determine-eccn.pdf)

18. [Export Classification services: Its importance and process. | CTP, Inc.](https://www.ctp-inc.com/articles/what-is-export-classification) - Understand export classification, its role in compliance with U.S. export control regulations, and h...

19. [Decision Tree Tools for Self-Classification](https://compliance.fiu.edu/export-controls/decision-tree-tools-for-self-classification/)

20. [Export Classification: Navigating the USML and CCL | CTP, Inc.www.ctp-inc.com › articles › export-classification-navigating-the-usml-and...](https://www.ctp-inc.com/articles/export-classification-navigating-the-usml-and-ccl) - Learn how to navigate export classification under ITAR’s USML and EAR’s CCL. Understand ECCNs, licen...

21. [Part 732 - Steps for Using the EAR - Bureau of Industry and Security](https://www.bis.gov/regulations/ear/732) - Website of the United States Bureau of Industry and Security

22. [[PDF] CCL Order of Review](https://www.bis.gov/media/documents/ccl-order-review-decision-tool)

23. [ECCNs and Classification](https://www.vumc.org/globalsupport/eccn)

24. [Export Terminology & Definitionsexportcontrol.lbl.gov › glossary](https://exportcontrol.lbl.gov/glossary/)

25. [Export Procedure Manual EXPORT REVIEW PROCEDURES GUIDE](https://research.mines.edu/wp-content/uploads/2024/05/ExportProcedureManual_2016November18FINAL.pdf)

26. [Export Controls on Software: 6 Secrets You Need to Know - Traliance](https://traliance.com/software-export-compliance/) - Software export compliance is tricky. Tackling a software or encryption software export or deemed ex...

27. [Export Classification Blog Posts | International Trade Law Firm](https://www.torrestradelaw.com/topic/Export-Classification/2) - Export Classification

28. [15 CFR § 764.5 - Voluntary self-disclosure. - LII](https://www.law.cornell.edu/cfr/text/15/764.5) - BIS strongly encourages disclosure to the Office of Export Enforcement (OEE) if you believe that you...

29. [Elements Of An Effective Export Compliance Program](https://www.bis.doc.gov/index.php/documents/compliance-training/export-administration-regulations-training/375-elements-effective-export-compliance-pdf/file)

30. [Trade Compliance in 2025: What Global Exporters Need to Know](https://www.globaltrademag.com/trade-compliance-in-2025-what-global-exporters-need-to-know/) - Technology is transforming trade compliance, with many countries shifting to fully digital customs a...

31. [annual self-classification report](https://www.bis.gov/learn-support/encryption-controls/annual-self-classification) - Website of the United States Bureau of Industry and Security

32. [BIS Reforms Voluntary Self-Disclosure Policies and Penalty ...](https://www.visualcompliance.com/blog/bis-reforms-voluntary-self-disclosure-policies-and-penalty-guidelines-for-export-compliance-violations/) - BIS codifies policy changes to incentivize self-disclosures of violations and enhance export complia...

