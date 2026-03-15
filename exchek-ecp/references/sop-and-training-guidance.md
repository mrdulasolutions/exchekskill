# SOP and Training Guidance: Patterns and CRM/ERP/Agent Mapping

Reference for building Export Compliance SOPs and role-based training outlines. Includes procedure patterns (screening, classification, license determination, recordkeeping, escalation) and how to map controls into CRM, ERP, and agents.

---

## 1. SOP patterns

### 1.1 Standard SOP sections

Each SOP should include:

- **Purpose** — Why the procedure exists (e.g. comply with EAR screening requirements).
- **Scope** — What activities, products, or transactions it covers.
- **Roles and responsibilities** — Who performs each step (e.g. sales, ECO, counsel).
- **Procedure steps** — Numbered, actionable steps with decision points.
- **Regulatory references** — EAR/ITAR citations (e.g. 15 C.F.R. § 732.4, Part 762).
- **Recordkeeping** — What must be retained and where.
- **Revision history** — Optional table (version, date, author, summary).

### 1.2 Screening SOP

- **When:** Before committing to a transaction (e.g. quote, order, shipment); also for existing parties on a defined schedule.
- **Steps:** (1) Collect party identifiers (name, address, DOB if individual); (2) Run screening against consolidated list(s) per company tool (e.g. ExChek CSL skill, trade.gov API, internal system); (3) Document result (no hit / hit with list and match strength); (4) If hit: adjudicate per DPS best practices or escalate to ECO/legal; (5) Retain screening record and link to transaction.
- **Where in systems:** CRM — screen at opportunity or quote; ERP — screen at order or shipment; Agent — run ExChek CSL skill and attach result. Use placeholder {{SCREENING_TOOL_OR_SYSTEM}} and {{SCREENING_POINT_IN_PROCESS}} when user provides systems.

### 1.3 Classification SOP

- **When:** Before first export of an item; upon material change to product or regulations; per annual or trigger-based review.
- **Steps:** (1) Gather technical/product information; (2) Apply jurisdiction (EAR vs ITAR); (3) Apply Order of Review (EAR) or USML analysis (ITAR); (4) Document in classification memo; (5) Obtain approval from qualified person (ECO, counsel, or SME); (6) Retain memo and attach to product/transaction records.
- **Where in systems:** Product master or catalog; attach memo to opportunity/quote in CRM; reference in ERP item master; Agent — use ExChek classification skill and attach memo. Use {{CLASSIFICATION_TOOL_OR_PROCESS}} and {{CLASSIFICATION_RECORD_LOCATION}}.

### 1.4 License determination SOP

- **When:** For each transaction (item, destination, end user, end use).
- **Steps:** (1) Confirm classification current; (2) Apply five determinative facts (classification, destination, end-user, end-use, conduct); (3) Check Country Chart and General Prohibitions; (4) Determine path: NLR, License Exception, or formal license; (5) Document in license determination memo; (6) Retain memo and link to transaction.
- **Where in systems:** CRM — at quote/order; ERP — at order/shipment; Agent — ExChek license skill; attach determination to transaction. Use {{LICENSE_DETERMINATION_POINT}}.

### 1.5 Recordkeeping SOP

- **What to retain:** Classification memos, license determinations, screening records, export documentation (invoice blocks, SLI, AES/EEI data), and any escalation/triage notes. Per 15 C.F.R. Part 762: five years from export or last transaction under license.
- **Steps:** (1) Define record set per transaction type; (2) Store in designated system (DMS, CRM, ERP) with version control and access logs; (3) Ensure reproducibility and legibility; (4) Retention schedule and disposal per policy.
- **Where in systems:** Document where each record type lives (e.g. "Classification memos in [DMS]; screening and triage in [CRM] or ExChek Reports folder").

### 1.6 Escalation / triage SOP

- **When:** After screening or risk triage when disposition is "hold" or "escalate."
- **Steps:** (1) Do not proceed with transaction until cleared; (2) Route to ECO (hold) or legal (escalate) per company escalation chain; (3) Document in triage/escalation note (transaction, risk score, disposition, rationale, red flags); (4) Retain note; (5) Follow up per ECO/legal decision.
- **Where in systems:** Triage note attached to opportunity/order; workflow or task in CRM/ERP for "Export compliance review" or "Legal hold."

---

## 2. Embedding in CRM / ERP / agents

When the user provides **systems** (e.g. Salesforce, NetSuite, ExChek agents), the ECP and SOPs should include an **integration** subsection:

- **CRM (e.g. Salesforce):** Screening at opportunity or quote stage; classification memo and license determination attached to opportunity/quote; triage note and "Export compliance review" task when hold or escalate. Fields or objects: Export Control Status, ECCN, Screening Date, ECO Review.
- **ERP:** Screening and license check at order entry or shipment; ECCN and license/exception on order line; export documentation and AES data linked to shipment. Blocks: order hold for compliance, release after ECO sign-off.
- **Agents (e.g. ExChek skills):** Use ExChek classification skill for ECCN and memo; ExChek CSL skill for screening; ExChek license skill for license determination; ExChek risk-triage skill for risk score and escalation note. Outputs (reports) saved to ExChek Reports folder and referenced in CRM/ERP or attached to transaction.

Use placeholders {{CRM_NAME}}, {{ERP_NAME}}, {{AGENT_OR_TOOL_NAMES}} and fill from user input when provided.

---

## 3. Training outline patterns

### 3.1 Role-based audiences

- **Sales / business development** — Awareness: what is export control; red flags; when to stop and get compliance; no technical classification.
- **Shipping / logistics** — Export documentation, AES/EEI awareness, destination and consignee checks, record retention.
- **Export compliance / ECO** — Full: classification, screening, license determination, triage, recordkeeping, escalation, VSD.
- **Engineering / product** — Technical data and deemed exports; classification inputs (specs, functionality); when to involve compliance.

### 3.2 Learning objectives (examples)

- **Awareness (sales):** Recognize red flags (BIS Know Your Customer, Supp. 3 to Part 732); know when to escalate; do not release quotes/shipments without compliance clearance when required.
- **Procedural (shipping):** Complete export documentation per SOP; know when AES is required; retain records per Part 762.
- **Technical (compliance):** Perform or oversee classification, screening, license determination, and triage per SOPs; document and retain; escalate per policy.

### 3.3 Topics by role (suggested)

| Role        | Topics |
|------------|--------|
| Sales      | Export control overview; red flags; when to hold; who to contact (ECO); no commitment without compliance OK when required. |
| Shipping   | Export docs (invoice block, SLI, AES); recordkeeping; destination/consignee checks; escalation if red flag. |
| Compliance | Full ECP; classification (Order of Review, memo); screening (lists, adjudication); license determination; triage; recordkeeping; VSD. |
| Engineering| Deemed exports; technical data; classification inputs; when to involve compliance. |

Tailor **depth** (awareness vs detailed) and **duration** (e.g. 30 min awareness vs 2 hr compliance) from user input. For higher-risk profiles, emphasize red flags and escalation.

### 3.4 Training outline template structure

- **Audience** — Role(s).
- **Learning objectives** — 3–5 bullet objectives.
- **Topics** — List with suggested duration or depth; reference ECP/SOP sections.
- **Materials** — ECP, relevant SOPs, red-flag checklist, internal contacts.
- **Quiz / certification** — Placeholder for attestation or short quiz (e.g. "I have completed export compliance training for [role] and understand my responsibilities").

---

## 4. References to other ExChek skills

- **exchek-skill (classification):** Classification memo and Order of Review; reference for Classification SOP and compliance training.
- **exchek-skill-csl:** Screening and DPS best practices; reference for Screening SOP and red-flag training.
- **exchek-skill-license:** License determination; reference for License Determination SOP.
- **exchek-skill-risk-triage:** Risk score and escalation; reference for Escalation SOP and training (when to hold/escalate).
- **exchek-skill-export-docs:** Export documentation and AES/EEI; reference for Recordkeeping and shipping training.

Link to these in SOPs and training outlines where the user indicates they use ExChek or similar agent tools.
