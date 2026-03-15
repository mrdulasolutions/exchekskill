# Encryption classification guidance (5x992, 5x002, ENC, TSR, mass market)

This reference supports the ExChek encryption skill for **classification** of encryption items under the Commerce Control List (CCL) Category 5 Part 2, **License Exception ENC** (§ 740.17), **TSR** (§ 740.6) where applicable, and **mass market / TSU** eligibility. Use it to ask targeted questions and to fill the Encryption Classification and Notification Memo. For notification and reporting obligations, see [enc-notification-and-reporting.md](enc-notification-and-reporting.md).

**Regulatory basis:** 15 CFR Part 774 (CCL), Category 5 — Part 2 (Information Security); 15 CFR Part 742 (§ 742.15 — Encryption items); 15 CFR Part 740 (§ 740.17 — ENC, § 740.6 — TSR). Always confirm current text at [eCFR](https://www.ecfr.gov) and [BIS Encryption](https://www.bis.doc.gov/index.php/policy-guidance/encryption).

---

## 1. ECCNs: 5A992 / 5D992 (mass market and related)

- **5A992** — Encryption commodities that are **not** 5A002 (e.g. mass market or other specified carve-outs). Often used for mass market encryption hardware.
- **5D992** — Encryption software that is **not** 5D002 (e.g. mass market or other specified carve-outs). Often used for mass market encryption software.
- **Note 3 to Category 5, Part 2** defines **“mass market”** eligibility: products that are (or have been) eligible for mass market treatment under specified criteria (e.g. generally available to the public, limited cryptographic functionality, or meeting the “mass market” note criteria). Items meeting Note 3 may be classified as 5A992 or 5D992 and are **not** subject to “EI” (encryption items) and “NS” (national security) controls for export to most destinations; license exception ENC and reporting rules still apply as set out in § 740.17.
- **When 5x992 vs 5x002:** If the item meets the technical description of 5A002/5D002 (e.g. encryption beyond certain limits, specific algorithms or key lengths) and does **not** qualify under Note 3 or other 5x992 carve-outs, it is 5A002/5D002. The skill should ask about: encryption functionality, key length, algorithm, distribution (retail vs. restricted), and end use to distinguish.

---

## 2. ECCNs: 5A002, 5D002, 5E002 (controlled encryption)

- **5A002** — Encryption commodities (hardware) controlled for “EI” and possibly other reasons; not eligible for 5A992 under Note 3 or other carve-outs.
- **5D002** — Encryption software controlled for “EI” (and possibly others); not eligible for 5D992.
- **5E002** — Encryption technology (technical data) for development, production, or use of 5A002/5D002 items.
- **Relationship to ENC:** License Exception ENC (§ 740.17) authorizes export/reexport of items classified under 5A002, 5B002, 5D002, and 5E002 (and 5A992/5D992 where applicable) **subject to the conditions and restrictions** of 740.17 (e.g. registration, notification, annual report where required). So classification as 5x002 does not mean “no export”; it means ENC (or a license) is the authorization path.

---

## 3. License Exception ENC (§ 740.17)

- **Structure:** § 740.17(a) through (e) and related paragraphs. Common sub-paragraphs referenced in practice:
  - **ENC(a)** — Specified types of encryption (e.g. certain publicly available, limited functionality).
  - **ENC(b)(1)** — Encryption items that may require one-time notification or registration; after compliance, exports can proceed under ENC.
  - **ENC(b)(2)** — Other specified encryption under (b)(2) eligibility.
  - **ENC(b)(3)** — Other specified encryption under (b)(3) eligibility.
- **Conditions:** § 740.2 (restrictions on use of all license exceptions) applies: e.g. embargoed countries, end use/end user restrictions, General Prohibitions. Country Groups (Supplement No. 1 to Part 740) and Part 746 (embargoes) must be checked.
- **Restrictions:** Certain destinations and end users may be ineligible for ENC; some encryption may require a license. The skill does not perform license determination for non-encryption reasons; it focuses on **ENC eligibility** for the encryption item and what notification/reporting applies.

---

## 4. TSR (§ 740.6) — Technology and Software under Restriction

- **TSR** authorizes export of eligible **technology and software** to Group B countries under the conditions of § 740.6. For **encryption** technology or software, both ENC and TSR may be relevant: ENC is the primary exception for encryption items; TSR can apply to eligible tech/software to Group B. When the item is 5D002 or 5E002 and destination is Group B, the skill should note TSR applicability in addition to ENC where both could apply; the user (or license skill) will determine which exception is used for the transaction.
- **Citation:** 15 CFR 740.6. Check eligibility (ECCN, country, end use) per current rule.

---

## 5. Mass market and TSU (encryption)

- **Mass market:** Note 3 to Category 5 Part 2; items classified as 5A992 or 5D992 under that note. Reporting and notification rules for mass market have been relaxed for many products (e.g. 5A992.c, 5D992.c per post–March 2021 rules); see [enc-notification-and-reporting.md](enc-notification-and-reporting.md).
- **TSU (encryption):** “Encryption commodities, software and technology” may be eligible for TSU under § 740.13 or as referenced in encryption guidance. When the product is mass market or qualifies for a TSU encryption provision, the memo should state that and how it interacts with ENC and annual reporting (e.g. “TSU eligible; annual self-classification report not required” where the rule so provides).

---

## 6. Citations and current text

- **CCL Category 5 Part 2:** 15 CFR Part 774, Supplement No. 1, Category 5 — Part 2 (Information Security). Use for 5A002, 5A992, 5B002, 5D002, 5D992, 5E002.
- **Encryption items (control policy):** 15 CFR 742.15.
- **License Exception ENC:** 15 CFR 740.17.
- **License Exception TSR:** 15 CFR 740.6.
- **Country Groups:** Supplement No. 1 to Part 740.
- **General exception restrictions:** 15 CFR 740.2.

For current regulatory text and BIS updates, use [eCFR](https://www.ecfr.gov/current/title-15/subtitle-B/chapter-VII/subchapter-C/part-740) and [BIS Encryption](https://www.bis.doc.gov/index.php/policy-guidance/encryption).
