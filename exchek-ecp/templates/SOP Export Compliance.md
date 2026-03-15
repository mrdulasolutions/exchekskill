# Standard Operating Procedure: Export Compliance

*This template covers screening, classification, license determination, recordkeeping, and escalation. Fill every `{{PLACEHOLDER}}` from company inputs. Use "Not provided" or "None" when no data exists. Output is designed for conversion to .docx or .pages from the skill. For guidance, see [references/sop-and-training-guidance.md](../references/sop-and-training-guidance.md).*

---

## Document control

| Field | Value |
|-------|--------|
| **SOP title** | Export Compliance — Screening, Classification, License Determination, Recordkeeping, and Escalation |
| **Company** | {{COMPANY_NAME}} |
| **Version** | {{SOP_VERSION}} |
| **Effective date** | {{EFFECTIVE_DATE}} |
| **Owner** | {{SOP_OWNER}} |

---

## 1. Purpose and scope

**Purpose:** To ensure consistent, documented performance of denied party screening, export classification, license determination, recordkeeping, and escalation in accordance with the EAR (15 C.F.R. Parts 730–774) and, where applicable, the ITAR (22 C.F.R. Parts 120–130).

**Scope:** This SOP applies to {{SCOPE}} (e.g., all personnel and transactions involving the export or reexport of items, software, or technology subject to the EAR; and, if applicable, defense articles and services under the ITAR).

---

## 2. Roles and responsibilities

| Role | Responsibility |
|------|----------------|
| **Export Compliance Officer (ECO)** | {{ECO_RESPONSIBILITIES}} |
| **Sales / business development** | {{SALES_RESPONSIBILITIES}} |
| **Shipping / logistics** | {{SHIPPING_RESPONSIBILITIES}} |
| **Legal / compliance counsel** | {{LEGAL_RESPONSIBILITIES}} |

---

## 3. Denied party screening

**When:** {{SCREENING_WHEN}} (e.g., before quote, order, or shipment; and on a defined schedule for existing parties).

**Procedure:**

1. Collect party identifiers: name, address; for individuals, DOB if available.
2. Run screening against consolidated list(s) using {{SCREENING_TOOL_OR_SYSTEM}}. Document result (no hit / hit with list name and match strength).
3. If no hit: document and proceed per license determination. If hit: do not proceed until adjudicated; escalate per Section 7.
4. Retain screening record and link to transaction. Storage: {{SCREENING_RECORD_STORAGE}}.

**Where in process:** {{SCREENING_POINT_IN_PROCESS}} (e.g., at opportunity in CRM; at order entry in ERP; via ExChek CSL skill with report attached).

**Regulatory reference:** 15 C.F.R. § 732.4; BIS Consolidated Screening List; OFAC SDN; DDTC debarred parties as applicable.

---

## 4. Classification

**When:** {{CLASSIFICATION_WHEN}} (e.g., before first export of an item; upon material change to product or regulations; per annual or trigger-based review).

**Procedure:**

1. Gather technical/product information sufficient for classification.
2. Determine jurisdiction (EAR vs. ITAR). If ITAR, follow DDTC procedures.
3. For EAR: apply Order of Review (Supplement No. 4 to Part 774); document recommended ECCN and basis in classification memo.
4. Obtain approval from qualified person (ECO, counsel, or documented SME).
5. Retain classification memo; attach to product/transaction per {{CLASSIFICATION_RECORD_LOCATION}}.

**Where in process:** {{CLASSIFICATION_TOOL_OR_PROCESS}} (e.g., ExChek classification skill; internal process; attach memo to opportunity/product in CRM).

**Regulatory reference:** 15 C.F.R. Part 774 (CCL); Order of Review; 22 C.F.R. USML for ITAR.

---

## 5. License determination

**When:** For each transaction (item, destination, end user, end use).

**Procedure:**

1. Confirm classification is current.
2. Apply five determinative facts: classification, destination, end-user, end-use, conduct (15 C.F.R. § 736.2(a)).
3. Check Commerce Country Chart (Supplement No. 1 to Part 738) and General Prohibitions (Part 736).
4. Determine authorization path: No License Required (NLR), License Exception (cite exception), or formal license (BIS SNAP-R or DDTC as applicable).
5. Document in license determination memo. Retain and link to transaction.

**Where in process:** {{LICENSE_DETERMINATION_POINT}} (e.g., at quote/order in CRM; ExChek license skill; attach determination to order).

**Regulatory reference:** 15 C.F.R. Parts 736, 738, 740; 22 C.F.R. for ITAR licenses/agreements.

---

## 6. Recordkeeping

**What to retain:** Classification memos, license determinations, screening records, export documentation (invoice blocks, SLI, AES/EEI data as applicable), triage/escalation notes.

**Retention:** Five years from date of export or last transaction under license, whichever is later (15 C.F.R. Part 762). Records must be reproducible and legible.

**Storage:** {{RECORD_STORAGE_LOCATION}}

---

## 7. Escalation and triage

**When:** After screening or risk triage when disposition is "hold for export compliance" or "escalate to legal."

**Procedure:**

1. Do not proceed with transaction until cleared by ECO or legal, as applicable.
2. Document in triage/escalation note: transaction summary, risk score, disposition, rationale, red flags (if any). Complete escalation block: escalated to (name/role), date, follow-up.
3. Route to ECO (hold) or legal (escalate) per company escalation chain. Retain note and attach to transaction.
4. Follow up per ECO/legal decision before release.

**Where in process:** {{TRIAGE_NOTE_STORAGE}}; workflow/task in {{CRM_OR_ERP_NAME}} for "Export compliance review" or "Legal hold" when applicable.

**Regulatory reference:** BIS "Know Your Customer" red flags (Supplement No. 3 to Part 732); company risk-triage policy.

---

## 8. Revision history

| Version | Date | Author | Summary |
|---------|------|--------|---------|
| {{SOP_VERSION}} | {{EFFECTIVE_DATE}} | {{AUTHOR}} | Initial or {{REVISION_SUMMARY}} |

---

## AI tool disclosure

This SOP was generated with the assistance of an AI-driven tool (ExChek ECP skill). It should be reviewed and approved by qualified legal or compliance personnel before use.
