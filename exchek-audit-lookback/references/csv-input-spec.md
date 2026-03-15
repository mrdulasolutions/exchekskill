# CSV Input Specification for Retrospective Audit / Lookback

This reference defines the **expected and optional columns** for historical shipment/transaction data used by the ExChek audit lookback skill. Use it to validate user CSV or CRM exports and to map non-standard column names.

---

## 1. Required columns

At least one column (or user-mapped equivalent) must be provided for each of the following.

| Logical field | Example column names | Description |
|---------------|----------------------|-------------|
| **Transaction/shipment ID** | `transaction_id`, `order_id`, `shipment_id`, `ref`, `ID` | Unique identifier for the transaction or shipment. |
| **Transaction date** | `date`, `ship_date`, `transaction_date`, `export_date` | Date of the transaction or export (YYYY-MM-DD or parseable format). |
| **Party name (at least one)** | `consignee`, `end_user`, `customer`, `party`, `counterparty` | Name of consignee, end user, or other screened party. If multiple party columns exist (e.g. consignee + end user), use all for re-screen extraction. |
| **ECCN** | `eccn`, `ECCN`, `classification`, `item_eccn` | Export Control Classification Number (e.g. 5A992.c, EAR99). |
| **Destination country** | `destination`, `country`, `destination_country`, `country_of_destination` | Country code (e.g. DE, GERMANY) or full name. |

If the user's file uses different headers, ask: "Which column is the [transaction ID / date / consignee or party / ECCN / destination]?" and map accordingly.

---

## 2. Optional columns

These improve findings and remediation; use when present.

| Logical field | Example column names | Description |
|---------------|----------------------|-------------|
| **End use / end user** | `end_use`, `end_user`, `ultimate_end_user` | Free text or identifier; helps with license re-check context. |
| **License or exception** | `license`, `exception`, `authorization`, `license_exception` | e.g. NLR, LVS, GBS, license number. |
| **Screening result at time** | `screening_result`, `dps_result`, `csl_at_export` | e.g. "No hits", "Hit – adjudicated FP", "Screened 2024-01-15". |
| **Value** | `value`, `value_usd`, `shipment_value` | Numeric; useful for AES/context. |
| **Product description** | `description`, `product`, `item_description` | Short description for report context. |
| **Additional party columns** | `intermediate_consignee`, `purchaser` | Any other party to be re-screened; include in unique-party extraction. |

---

## 3. Example CSV (minimal)

```csv
transaction_id,date,consignee,eccn,destination
ORD-001,2024-03-15,Acme GmbH,5A992.c,Germany
ORD-002,2024-03-18,Widgets Inc,EAR99,Canada
ORD-003,2024-03-20,Tech Solutions LLC,5A992.c,Japan
```

---

## 4. Example CSV (with optional columns)

```csv
transaction_id,date,consignee,end_user,eccn,destination,license_exception,screening_result_at_export
ORD-001,2024-03-15,Acme GmbH,Acme GmbH,5A992.c,Germany,GBS,No hits
ORD-002,2024-03-18,Widgets Inc,Widgets Inc,EAR99,Canada,NLR,No hits
ORD-003,2024-03-20,Tech Solutions LLC,Tech Solutions LLC,5A992.c,Japan,LVS,Screened 2024-03-18 No hits
```

---

## 5. CRM export tips

- **Column mapping:** CRM exports often use internal field names (e.g. `Account.Name`, `Opportunity.Ship_To_Country`). Ask the user to provide a header row or to specify which column corresponds to: transaction ID, date, party (consignee/end user), ECCN, destination. Map those to the logical fields above.
- **Multiple party fields:** If the export has separate columns for consignee, end user, and intermediate consignee, extract unique parties from all of them for the re-screen list.
- **Date format:** Accept common formats (YYYY-MM-DD, MM/DD/YYYY, DD-MM-YYYY); normalize for scope summary (date range, count).
- **Missing ECCN or destination:** If a row is missing ECCN or destination, still include the transaction in scope; add a finding that "ECCN re-check" or "License re-check" cannot be applied without that data, and recommend supplying it for a complete lookback.
