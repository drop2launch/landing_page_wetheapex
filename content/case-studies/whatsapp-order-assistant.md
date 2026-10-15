---
title: WhatsApp order-status assistant for a D2C brand
description: How we would take “where is my order?” messages off a small support team and answer them in seconds.
client: D2C skincare brand, around 20 employees
industry: E-commerce & D2C
service: AI chatbots & agents
demo: true
order: 2
tools: [WhatsApp Business API, n8n, Shopify, Courier tracking API, Google Sheets]
results:
  - value: "Target 60%"
    label: Share of order-status queries answered without a person
  - value: "Hours → under 1 minute"
    label: Target first-response time for order queries
  - value: "Baseline first"
    label: Support time to be measured before and after
---

## Client context

A direct-to-consumer skincare brand sells through its own Shopify store and ships across the UAE. Two people handle customer support over WhatsApp and email alongside other duties.

## Problem

Most incoming messages ask the same thing: where is my order? Each one means opening the store admin, finding the order, checking the courier site and typing a reply. During sale periods the queue builds up, replies slow down and customers message again, which adds to the queue.

## Approach

1. **Measure first.** Export a month of conversations and tag them by type to confirm how many are order-status queries and how long each takes.
2. **Start narrow.** Automate only order status in the first release, and leave returns, complaints and product advice with the team.
3. **Design the handover.** Agree exactly when a person takes over: delayed orders, failed deliveries, anything the assistant cannot match to an order.
4. **Test with real messages.** Replay past conversations through the assistant before any customer sees it.

## Solution

- The customer messages the brand's WhatsApp number.
- The assistant identifies the order from the phone number, or asks for the order ID.
- It reads the order from Shopify and the latest scan from the courier.
- It replies in plain language with the status and a tracking link.
- If the order is delayed beyond the agreed threshold, or the customer is unhappy, the conversation is passed to the support team with a short summary.
- Every conversation is logged to a sheet so the team can review what was asked and how it was answered.

## Measurable results

Every project starts by recording a baseline, and results are reported against it. For this kind of project we measure:

- Share of order-status queries resolved without a person
- First-response time for order queries
- Support hours spent on order queries per week
- Number of conversations handed over, and why

## Tools used

WhatsApp Business API, n8n, Shopify, the courier's tracking API and Google Sheets for the conversation log.
