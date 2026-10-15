---
title: Invoice-to-ERP processing for a finance team
description: How we would remove line-by-line invoice entry for an accounts payable team, while keeping every check in place.
client: Distribution company, around 120 employees
industry: Finance & accounting operations
service: Document processing
demo: true
order: 3
tools: [Power Automate, SharePoint, AI document extraction, SAP, Power BI]
results:
  - value: "Target under 2 min"
    label: Handling time per invoice
  - value: "Target 70%"
    label: Invoices posted without manual entry
  - value: "Baseline first"
    label: Month-end close, to be measured
---

## Client context

A distribution company receives several hundred supplier invoices a month by email, as PDFs and scans. A three-person accounts payable team enters them into SAP.

## Problem

Each invoice is keyed in by hand and then checked against its purchase order and goods receipt. Mismatches are often found only at payment time. Near month-end the backlog grows, and the close is delayed while the team catches up.

## Approach

1. **Sample the documents.** Take a few hundred recent invoices and group them by supplier and layout, to see how much variety there really is.
2. **Measure extraction on real invoices.** Test how reliably each field can be read before committing to a design or a price.
3. **Keep the controls.** Three-way matching and approval limits stay exactly as they are. Only the typing is removed.
4. **Send uncertainty to people.** Any field read with low confidence, and any mismatch, goes to a review queue.

## Solution

- Invoices sent to a shared mailbox are saved to SharePoint automatically.
- Supplier, invoice number, dates, tax and line items are extracted.
- The invoice is checked for duplicates, then matched against the purchase order and goods receipt.
- Clean invoices are posted to SAP with the PDF attached.
- Exceptions appear in a review queue that shows the document next to the extracted fields and the reason it was held.
- A Power BI report shows volumes, exception reasons and processing time.

## Measurable results

Every project starts by recording a baseline, and results are reported against it. For this kind of project we measure:

- Handling time per invoice
- Share of invoices posted without manual entry
- Exceptions by reason, to target supplier or process fixes
- Days to close accounts payable at month-end

## Tools used

Power Automate, SharePoint, an AI document extraction service, SAP and Power BI.
