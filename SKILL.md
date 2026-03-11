---
name: exchek-classify
description: Classify export items for ECCN (BIS/ITAR) using the ExChek API with Adjudicator-in-the-Loop. Use when the user wants to classify an item, determine ECCN, check BIS or ITAR jurisdiction, or get an audit-ready export classification. Requires funding the wallet with USDC on Base before paid calls.
compatibility: Claude Code, Claude desktop
---

# ExChek ECCN Classification

Classify items for U.S. export control (15 CFR Part 774, 22 CFR Part 121) via the ExChek API. The flow is Adjudicator-in-the-Loop (AITL): the agent calls the API and relays prompts to the user for confirmation or refinement until the classification is approved.

## When to use

Invoke this skill when the user asks to classify an item for export, determine ECCN or jurisdiction, or check license requirements. Example triggers: "Classify this item for export", "What's the ECCN for…?", "Is this ITAR or EAR?", "Export classification for [product]", "Do we need a license for shipping to [country]?"

## Prerequisites

1. **Authenticate wallet** — Ensure the user's wallet is initialized and signed in (e.g. `npx awal@2.0.3 status`). If not, use the authenticate-wallet skill.
2. **Fund with USDC** — The wallet must have USDC on Base for paid endpoints. First classification is free via `POST /api/classify/start-free` with `walletAddress`. For subsequent classifications, fund via Base, Coinbase, or Pay Sponge; see the fund skill if needed.

## Classification prompts (agent-driven flow)

When you perform the classification yourself, use the prompts in this skill:

- **System prompt**: [prompts/classification-system.md](prompts/classification-system.md) — expert export control instructions (USML 22 CFR Part 121, CCL 15 CFR Part 774, Order of Review, ITAR/EAR).
- **User template**: [prompts/classification-user-template.md](prompts/classification-user-template.md) — item variables to collect: Item description, Technical specifications, Performance parameters, Valuation, Units, HTS Code, Schedule B number, End user, End use, Destination country.

Fill the template from the user, run the classification using the system prompt, then submit your result to the API via `submit-classification` so the adjudicator can review and approve.

## Human-in-the-loop (HITL) — mandatory

You **must** get **explicit user approval** before each of these actions. Never assume or act on your own.

- **Jurisdiction** — After submit-info, relay the API's jurisdiction (BIS vs ITAR) and rationale to the user. Do **not** call confirm-jurisdiction until the user explicitly confirms or provides feedback. Do not override the user's stated jurisdiction.
- **Proposed classification** — After request-oor (or after you run classification and submit-classification), present the proposed ECCN and rationale to the user. Do **not** submit a different ECCN or call submit-classification without the user confirming the classification they want. Do **not** call approve until the user explicitly approves.
- **Payment** — If start-free returns 402 (first free already used), do **not** auto-pay. Tell the user that payment is required ($0.01) and **ask how they want to pay** (e.g. fund the wallet via Base, Coinbase, Pay Sponge, or another method). Only after the user confirms they have funded or chosen a payment method may you proceed with the paid start call (or the user may run the pay command themselves). **Do not report that payment succeeded or that a job was started unless the paid start API actually returned HTTP 200 with a `jobId`.** If the user chose Pay Sponge (or another gateway), they must complete the payment flow; only after the paid start call returns 200 with jobId may you continue.
- **Cancel / start over** — If the user says they want to **cancel** or **start over**, acknowledge and tell them they can start a new classification anytime by asking again. Do not call approve or continue the previous job; discard or ignore the previous jobId for the rest of the conversation unless the user explicitly asks to resume.

## Flow (AITL)

1. **Start** — **You MUST always try the first-free classification first.** Get the user's wallet address: prefer the same tool/context used for payment (e.g. `npx awal@2.0.3 status`) so the same wallet is used for start-free and for any later paid start; if the user has multiple wallets, use the one they use with this agent for ExChek. Call `POST https://api.exchek.us/api/classify/start-free` with body `{"walletAddress": "<0x...>"}`. Do **not** skip this step or assume the user has already used their free classification. If the response is **200**, you have a `jobId` — proceed to step 2. If the response is **402**, the first free was already used: do **not** auto-pay. Inform the user that payment ($0.01) is required and **ask how they want to pay** (Base, Coinbase, Pay Sponge, etc.). Only after the user confirms they have funded or chosen a payment method may you call the paid start: `npx awal@2.0.3 x402 pay https://api.exchek.us/api/classify/start -X POST -d '{}'` (or let the user run it). **Only consider the job started when you receive HTTP 200 with a `jobId`** — do not report success until then.
2. **Collect item info** — Ask the user for: item description, technical specifications, performance parameters (optional), valuation, units, HTS Code, Schedule B number (optional), end user, end use, destination country, and intended use or notes. Send the **full** user-provided description and context to `POST https://api.exchek.us/api/classify/submit-info` (same fields as above). No payment. Relay the API's jurisdiction result and rationale to the user. **Stop and ask**: "Do you confirm this jurisdiction, or would you like to provide feedback?" Do not call confirm-jurisdiction until the user responds.
3. **Get proposed classification** (choose one). Only after the user has **confirmed jurisdiction** (step 2), proceed:
   - **API-driven**: Send `POST https://api.exchek.us/api/classify/confirm-jurisdiction` with `{"jobId": "<id>", "confirmed": true}` (or `"feedback": "..."` until the user confirms). Then `POST https://api.exchek.us/api/classify/request-oor` — API returns proposed ECCN and rationale. Relay to the user and ask for approval or feedback; do not approve on your own.
   - **Agent-driven**: Run classification using [prompts/classification-system.md](prompts/classification-system.md) and the user template. **Only submit** `POST https://api.exchek.us/api/classify/submit-classification` with a proposed ECCN **after** the user has indicated the classification they want (e.g. confirmed ECCN like 1A995). Then `POST https://api.exchek.us/api/classify/request-oor` to retrieve the proposal for the user to review. Do not submit a classification the user has not agreed to.
4. **Refine or approve** — Relay the proposed ECCN and rationale to the user. **Ask**: "Do you approve this classification, or would you like to provide feedback?" If they want changes: `POST https://api.exchek.us/api/classify/refine-oor` with `{"jobId": "<id>", "feedback": "..."}` (or for agent-driven, re-run classification and submit-classification again). Repeat until the user **explicitly** approves.
5. **Approve** — Call `POST https://api.exchek.us/api/classify/approve` with `{"jobId": "<id>"}` **only after** the user has explicitly said they approve (e.g. "yes", "I approve", "approved"). Return the `reportUrl` from the response when present. If the response has no `reportUrl` or includes `reportStorageError`, offer to summarize the classification (item, jurisdiction, ECCN, license, restrictions) so the user can save it themselves, and mention that the formal report could not be stored due to storage configuration.

## Input validation

- **jobId** — Use the exact string returned from start or start-free. Do not pass unvalidated user input.
- **walletAddress** — Must be a valid 0x-prefixed 40-char hex string. Reject otherwise.
- **URLs** — Use `https://api.exchek.us` only; no user-supplied URLs for API calls.

## Error handling

For every API response that is not 200, use the response body to inform the user and decide the next action. Do not report success unless you received 200 with the expected data.

- **400** — Use `promptForUser` or `error` to inform the user what is wrong. Fix the request (e.g. add jobId, send confirmed or feedback, or fix proposedClassification) and retry. Do not report success.
- **402** — Do not auto-pay. Ask the user how they want to pay; only after they confirm, call the paid start. Only consider the job started when you get 200 with a jobId. The response may include `nextStep: "payment_required"` or `requiredAction: "pay_start"` for machine use.
- **404** — Tell the user the session expired or is invalid. Start a new classification (call start-free first, then continue).
- **503** — Use `promptForUser` to tell the user eCFR is temporarily unavailable and to try again later. Optionally retry once after a short delay.
- **500** — Use `promptForUser` from the response if present; otherwise tell the user something went wrong and they can retry or start over.

## Example (paid start)

```bash
npx awal@2.0.3 x402 pay https://api.exchek.us/api/classify/start -X POST -d '{}'
```

Response includes `jobId`, `nextStep`, `promptForUser`. Use the same `jobId` in all subsequent session requests.

## Reference

- API and flow details: [references/reference.md](references/reference.md)
- Docs: https://docs.exchek.us
