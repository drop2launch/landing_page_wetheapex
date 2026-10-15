---
title: AI receptionist for a dental clinic
description: How we would make sure every call to a busy clinic is answered, and most bookings are made without the front desk picking up.
client: Dental clinic with two branches, around 25 employees
industry: Healthcare & clinics
service: AI voice agents & receptionist
demo: true
order: 1
tools: [Twilio, Vapi, Google Calendar, n8n, Clinic booking system]
results:
  - value: "Target 100%"
    label: Calls answered, including after hours
  - value: "Target 50%"
    label: Bookings made without front-desk involvement
  - value: "Baseline first"
    label: No-show rate, measured before and after reminders
---

## Client context

A dental clinic with two branches takes most of its bookings by phone. Two receptionists handle calls, walk-ins, payments and patient questions at the same time.

## Problem

Calls peak when the front desk is busiest. Some ring out, and after 6pm nobody answers at all. Patients who cannot get through often book elsewhere, and no-shows leave gaps that could have been filled.

## Approach

1. **Count the missed calls.** Pull a month of call logs to see how many calls go unanswered and when.
2. **Start with overflow and after-hours.** The AI answers only when the team cannot, so staff stay in control during the day.
3. **Keep it to bookings and common questions.** Anything clinical is passed straight to staff.
4. **Listen before launch.** The clinic reviews recorded test calls and chooses the voice.

## Solution

- Unanswered and after-hours calls are picked up by an AI receptionist that introduces itself as an AI assistant.
- It books, moves or cancels appointments directly in the clinic's booking system.
- Opening hours, directions and accepted insurance are answered on the call.
- Each booking is confirmed by SMS, with a reminder the day before.
- Clinical questions and upset callers are transferred, or a message is sent to the right branch.
- Every call is summarised and logged against the patient's record.

## Measurable results

Every project starts by recording a baseline, and results are reported against it. For this kind of project we measure:

- Share of calls answered
- Bookings completed without front-desk involvement
- No-show rate before and after reminders
- Calls transferred to staff, and why

## Tools used

Twilio, Vapi, Google Calendar, n8n and the clinic's booking system.
