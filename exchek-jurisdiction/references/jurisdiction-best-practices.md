# Jurisdiction Best Practices — ITAR vs. EAR

This reference supports the ExChek Jurisdiction skill. It summarizes the regulatory framework for determining whether an item is subject to **ITAR** (State/DDTC) or **EAR** (Commerce/BIS), or another U.S. government agency, and when to recommend a Commodity Jurisdiction (CJ) request.

---

## 1. Order of analysis (jurisdiction only)

Jurisdiction is the **first** decision. Follow this sequence; stop as soon as a determination is reached.

| Step | Question | If Yes → | If No → |
|------|----------|----------|---------|
| **1** | Is the item subject to the exclusive jurisdiction of another U.S. government agency? | Recommend that agency; document and stop. | Proceed to Step 2. |
| **2** | Is the item described on the United States Munitions List (USML), 22 CFR Part 121? | **ITAR.** Next step: DDTC / USML classification. | Proceed to Step 3. |
| **3** | Is the item "specially designed" for a defense article per 22 CFR § 121(d)? | **ITAR.** Next step: DDTC. | Proceed to Step 4. |
| **4** | Is the item subject to the EAR per 15 CFR § 734.3? | **EAR.** Next step: BIS classification (e.g. ExChek classification skill for ECCN). | Document basis (e.g. foreign-made, no U.S. content); recommend counsel if unclear. |

When the answer at Step 2 or 3 is **unclear** (e.g. borderline USML, "specially designed" ambiguous), recommend a **Commodity Jurisdiction (CJ) request** to DDTC per 22 CFR § 120.4 and document that in the memo's Next steps.

---

## 2. Other agency jurisdiction (Step 1)

**Applicable regulation:** Supplement No. 3 to 15 CFR Part 730 (Items subject to the exclusive jurisdiction of another agency).

Agencies with exclusive jurisdiction include (examples; not exhaustive):

- **Nuclear Regulatory Commission (NRC):** Certain nuclear materials and equipment (10 CFR Part 110).
- **Department of Energy (DOE):** Certain nuclear technology (10 CFR Part 810).
- **Drug Enforcement Administration (DEA):** Controlled substances.
- **Other:** Check Supplement No. 3 for the current list.

If the item falls under one of these agencies, the jurisdiction memo should state that the item is **not** under EAR or ITAR for export control purposes and recommend the user contact the relevant agency. No EAR or ITAR classification is performed.

---

## 3. USML and ITAR (Steps 2 and 3)

**Applicable regulations:**

- **22 CFR Part 121** — United States Munitions List (USML). Categories I–XXI (e.g. firearms, ammunition, military electronics, spacecraft, etc.).
- **22 CFR § 121(b)** — Order of Review for the USML. Review categories in the order specified; many categories have a "specially designed" catch-all.
- **22 CFR § 121(d)** — Definition of "specially designed" for ITAR. An item can be a defense article if it is "specially designed" for a defense article or defense service listed on the USML, even if the item itself is not explicitly named in a USML category.
- **22 CFR § 120.4** — Commodity Jurisdiction. When the jurisdiction between ITAR and EAR is uncertain, the exporter may submit a CJ request to DDTC for a formal determination.

**Guidance:**

- Compare the item's **technical parameters and intended use** to the USML categories that are relevant to the item type (e.g. Category XI for military electronics, Category IV for launch vehicles).
- If the item is **described in** any USML category (including "specially designed" paragraphs), jurisdiction is **ITAR**. Next step: contact DDTC and classify under the applicable USML category.
- If the item is **specially designed** for a defense article per § 121(d) but not explicitly listed, it is still ITAR. Next step: DDTC.
- **When uncertain** (e.g. dual-use, borderline military application): recommend a **CJ request** per § 120.4 and document in the memo. Do not assume EAR or ITAR.

---

## 4. Items subject to the EAR (Step 4)

**Applicable regulation:** 15 CFR § 734.3 (Items subject to the EAR).

Items subject to the EAR include (summary):

- Items located in the United States (with certain exceptions).
- U.S.-origin items wherever located (with certain exceptions).
- Certain foreign-made items that incorporate above‑de‑minimis U.S.-origin controlled content or are direct products of U.S. technology/software (Foreign Direct Product Rule, 15 CFR § 736.2(b)(3)).

If the item is **not** on the USML (and not "specially designed" for a defense article) and **is** subject to the EAR, jurisdiction is **EAR**. Next step: BIS classification — run the **ExChek classification skill** (or equivalent) to determine ECCN (or EAR99) under the Commerce Control List (15 CFR Part 774).

If the item is **not** subject to the EAR (e.g. certain foreign-made items with no U.S. content and outside FDPR), document the basis and recommend counsel if the user is unsure.

---

## 5. "Specially designed" (EAR vs. ITAR)

- **ITAR (22 CFR § 121(d)):** Used to pull items into the USML when they are "specially designed" for a defense article. Apply when assessing Steps 2 and 3.
- **EAR (15 CFR § 772.1):** The EAR has its own "specially designed" definition (catch/release). That definition is used **only after** jurisdiction is determined to be EAR, i.e. during CCL/ECCN classification. The jurisdiction skill does **not** assign ECCNs; it only decides ITAR vs. EAR. When documenting "subject to the EAR," you do not need to apply 772.1 "specially designed" for jurisdiction — that is for the classification skill.

---

## 6. Next steps (summary)

| Recommended jurisdiction | Next steps to state in memo |
|--------------------------|-----------------------------|
| **Other agency** | Contact the identified agency (e.g. NRC, DOE, DEA) for that agency's requirements. |
| **ITAR (State/DDTC)** | Contact DDTC; classify the item under the applicable USML category. Optionally use the ExChek classification skill for USML category if supported. |
| **EAR (Commerce/BIS)** | Proceed to BIS classification. Run the **ExChek classification skill** (exchek-classify) to determine ECCN or EAR99. |
| **Uncertain** | Submit a **Commodity Jurisdiction (CJ) request** to DDTC per 22 CFR § 120.4. Do not export until jurisdiction is resolved. Recommend legal/compliance counsel. |

---

## 7. Regulatory citations (quick reference)

| Topic | Citation |
|-------|----------|
| Other agency jurisdiction | Supplement No. 3 to 15 CFR Part 730 |
| USML | 22 CFR Part 121 |
| USML order of review | 22 CFR § 121(b) |
| ITAR "specially designed" | 22 CFR § 121(d) |
| Commodity Jurisdiction | 22 CFR § 120.4 |
| Items subject to the EAR | 15 CFR § 734.3 |
| EAR "specially designed" (for classification, not jurisdiction) | 15 CFR § 772.1 |
