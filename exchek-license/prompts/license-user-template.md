# User prompt template (license determination)

Use this template to build the user message for license determination. Collect each variable from the user (or from a prior classification report). Use empty string or "Not provided" if not provided.

---

<license_determination_inputs>
Item summary: {{ITEM_SUMMARY}}
ECCN (or EAR99): {{ECCN}}
Destination country: {{DESTINATION}}
End user: {{END_USER}}
End use: {{END_USE}}
Value / quantity (if relevant for LVS): {{VALUE_QUANTITY}}
Transaction or reference (optional): {{TRANSACTION_REF}}
</license_determination_inputs>

Determine whether a license is required or a license exception applies for this export/reexport. Use the system prompt and the regulatory data (Part 774 for reasons for control, Part 738 for Country Chart, Part 740 for exceptions). Apply § 740.2 first; then evaluate each relevant exception. Fill the License Determination Memo (11 sections: purpose/scope, transaction summary, five determinative facts, Country Chart, GPs 4–10, authorization path, SNAP-R if needed, DCS, AI disclosure, recordkeeping, certification). Map inputs to memo placeholders: END_USER → ULTIMATE_END_USER; END_USE → ULTIMATE_END_USE; VALUE_QUANTITY → SHIPMENT_VALUE and/or QUANTITY; TRANSACTION_REF → TRANSACTION_ID_OR_ORDER.
