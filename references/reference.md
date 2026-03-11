# ExChek API reference (Claude skill)

- **Base URL**: `https://api.exchek.us`
- **Paid endpoints**: x402 (USDC on Base). Use `npx awal@2.0.3 x402 pay <url> -X POST -d '<json>'` for paid calls. When start-free returns 402, do not auto-pay — ask the user how they want to pay before calling the paid start.
- **Session endpoints**: Require `jobId` in body; no payment after start. Always send the full user-provided item description and context in submit-info so jurisdiction and OOR use accurate signals.

## Endpoints

| Endpoint | Payment | Body | Returns |
|----------|---------|------|--------|
| POST /api/classify/start-free | None | `{ "walletAddress": "0x..." }` | jobId, promptForUser (or 402 if free used) |
| POST /api/classify/start | x402 $0.01 | `{}` | jobId, nextStep, promptForUser |
| POST /api/classify/jurisdiction | x402 $2 | item fields (see below) | jurisdiction, regulatoryAgency, justification, citations, exportRestrictions, licenseRequirements, auditLog |
| POST /api/classify/submit-info | None | jobId + item fields (see below) | jurisdiction, justification, citations, promptForUser |
| POST /api/classify/submit-classification | None | jobId, proposedClassification (see below) | nextStep, promptForUser |
| POST /api/classify/confirm-jurisdiction | None | jobId, confirmed or feedback | nextStep, promptForUser |
| POST /api/classify/request-oor | None | jobId | eccn, rationale, justification, regulatoryAgency, citations, exportRestrictions, licenseRequirements, auditLog, promptForUser |
| POST /api/classify/refine-oor | None | jobId, feedback | eccn, rationale, justification, promptForUser |
| POST /api/classify/approve | None | jobId | reportUrl, message, eccn, jurisdiction |
| POST /api/classify/status | None | jobId | jobId, state, nextStep, promptForUser, hasItemInfo, hasJurisdiction |

Use status to recover context (e.g. "where are we?") — returns current state and suggested next step. 404 if job not found.

## Item fields (submit-info, jurisdiction)

- **description** (Item description)
- **specifications** (Technical specifications)
- **intendedUse**, **notes**
- **performanceParameters** (Performance parameters)
- **valuation**, **units**
- **htsCode** (HTS Code), **scheduleBNumber** (Schedule B number)
- **endUser**, **endUse**, **destinationCountry**

All optional; send what the user provides.

## proposedClassification (submit-classification)

Agent-driven flow: send the result of your classification for adjudicator review.

- **regulatoryAgency**: `"BIS"` or `"DDTC"`
- **eccnOrClassification**: ECCN (e.g. 3A001), EAR99, or ITAR category
- **justification**: Legally defensible reasoning
- **exportRestrictions**: array of strings
- **licenseRequirements**: array of strings
- **restrictionsJustifications**: string
- **auditLog**: summary of steps for legal review

After submit-classification, call request-oor to retrieve this proposal for the user; then approve or refine-oor.

## Error responses

| Code | Meaning | Agent should |
|------|---------|--------------|
| 400 | Bad request (e.g. missing jobId, missing confirmed/feedback, invalid proposedClassification) | Use promptForUser or error to inform the user; fix the request and retry. Response may include validationErrors: [{ field, message }] (e.g. field "eccnOrClassification", "justification", "confirmed_or_feedback"). Do not report success. |
| 402 | First free already used; payment required | Do not auto-pay. Ask user how they want to pay; only after confirmation call paid start. Response may include nextStep: "payment_required", requiredAction: "pay_start", paymentAmount, paymentEndpoint. |
| 404 | Job not found | Tell user the session expired or is invalid; start a new classification (start-free first). |
| 500 | Server error (jurisdiction, OOR, or refinement failed) | Use promptForUser if present; otherwise tell user something went wrong and they can retry or start over. |
| 503 | Regulatory data (eCFR) temporarily unavailable | Use promptForUser to tell user to try again later; optionally retry once. |

Full docs: https://docs.exchek.us
