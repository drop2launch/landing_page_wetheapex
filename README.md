# wetheapex website

Marketing site for wetheapex (wetheapex.com), an automation agency based in the UAE. Next.js (App Router) + Tailwind CSS, deployable to Vercel.

```bash
npm install
cp .env.example .env.local   # optional for local work
npm run dev                  # http://localhost:3000
npm run build && npm run start
```

## Folder structure

```
content/                  Markdown you edit without touching code
  blog/                   one .md file per article
  case-studies/           one .md file per case study
  legal/                  privacy.md, terms.md, cookies.md
src/
  lib/site.ts             business details: name, email, WhatsApp, address, LinkedIn, Cal.com link
  content/
    pricing.ts            currencies used by the savings calculator (prices are not published)
    services.ts           all copy for the five service pages
    industries.ts         all copy for the four industry pages
  app/                    one folder per page (page.tsx)
    api/chat/route.ts     chatbot endpoint (server only)
    api/contact/route.ts  contact form endpoint (server only)
    sitemap.ts, robots.ts, opengraph-image.tsx, not-found.tsx
  components/             header, footer, workflow diagram, chatbot, ROI calculator, forms
  lib/                    SEO helpers, Markdown loader, chatbot knowledge, rate limiter
```

## Key decisions

- **Content as data.** Service and industry pages are each one template (`app/services/[slug]`, `app/industries/[slug]`) fed by a TypeScript file. To change copy, edit the data file. To add a service, add an object to the array; the page, navigation, footer, sitemap and chatbot knowledge all update.
- **Blog and case studies in Markdown.** Add a file to `content/blog` or `content/case-studies`, commit, and it is published. The file name is the URL. Front matter fields are shown below.
- **Everything is static** except the two API routes, so pages are fast and cheap to host. Unknown URLs return a real 404.
- **Secrets stay on the server.** The chat widget and contact form only call `/api/chat` and `/api/contact`. API keys are read from server environment variables and never reach the browser.
- **Chatbot.** Without `ANTHROPIC_API_KEY` it answers from rules in `src/lib/chat-knowledge.ts`. With the key it calls the AI provider, using a prompt built from the same content files as the pages. To use another provider, replace `askProvider` in `src/app/api/chat/route.ts`.
- **Spam protection.** Hidden honeypot field, a minimum fill time, input limits and per-IP rate limiting. The rate limiter is in memory, which on serverless slows abuse rather than stopping it. If spam becomes a problem, add Cloudflare Turnstile or Upstash rate limiting in `src/lib/rate-limit.ts`.
- **Consent first.** Analytics scripts load only after the visitor clicks "Accept analytics". The choice is stored in the browser and can be changed from the footer.
- **No published prices.** Every project gets a fixed quote after the free call. The savings calculator still lets visitors pick AED, USD, GBP, CAD or INR.
- **Accessibility.** Skip link, visible focus outlines, labelled form fields, native `<details>` for FAQs, workflow diagrams as ordered lists, reduced-motion support, AA colour contrast.

### Blog post front matter

```yaml
---
title: How to choose the first task to automate     # page title and <title>
description: One or two sentences.                  # meta description and index summary
date: 2026-10-01
updated: 2026-11-01        # optional
author: Your Name
tags: [Getting started]
---
```

### Case study front matter

```yaml
---
title: Invoice-to-ERP processing for a finance team
description: One or two sentences.
client: Who the client is (or "Fictional …" for demos)
industry: Finance & accounting operations
service: Document processing
demo: true                 # set to false for real client work; removes the demo labels
order: 2                   # position on the index page
tools: [Power Automate, SAP]
results:
  - value: "12 min → 2 min"
    label: Handling time per invoice
---
## Client context
## Problem
## Approach
## Solution
## Measurable results
## Tools used
```

To link a case study from a service or industry page, set `caseStudy: "file-name-without-md"` in `services.ts` or `industries.ts`.

## What to replace before launch

Nothing on the site now shows a "to add" box. Instead, the items below are filled with **dummy data** that looks real. Replace each one before the site goes public.

**Business details: `src/lib/site.ts`**
- [ ] Make sure the `support@wetheapex.com` mailbox exists and is monitored
- [ ] `founder.bio`: a one-line placeholder bio for Muthuraman; replace with a real one
- [ ] `hostingRegion` (confirm where you actually host)
- [ ] `calLink` (currently a personal test link)
- [ ] `countries` and `markets` (confirm the list)

**Terms**
- [ ] Budget ranges in `src/components/ContactForm.tsx`
- [ ] Audit credit policy and the six `timeline` values in `src/content/services.ts` (dummy)
- [ ] Reply time "one working day" in `src/app/contact/page.tsx` and `src/app/thank-you/page.tsx`

**Proof (currently hidden or demo)**
- [ ] Testimonials: hidden. Put real quotes in `src/app/page.tsx`, then set `showTestimonials: true` and `sampleProof: false` in `site.ts`
- [ ] Results figures: hidden. Put real numbers in `src/app/page.tsx`, then set `showStats: true` and `sampleProof: false` in `site.ts`
- [ ] Case studies: three example projects in `content/case-studies` with illustrative company details. Replace with real client work when you have it (set `demo: false` to drop the "illustrative" note)

**Claims to confirm**
- [ ] AI models named (Claude, GPT, Gemini) and voice tools named (Twilio, Vapi, Retell AI, ElevenLabs)
- [ ] The "Our standard" commitments, "Is this for you?" lists and call agenda on the home and contact pages
- [ ] All 36 chatbot answers in `src/content/chat-faq.ts`

**Legal**
- [ ] `content/legal/*.md` are templates filled with dummy company details, a Dubai jurisdiction and assumed retention periods. Have a lawyer review all three, and confirm whether a DIFC or ADGM free-zone law applies.

**Set-up**
- [ ] Email keys for the contact form (see deployment steps)
- [ ] Cal.com: rename the event and set the redirect to `/thank-you`
- [ ] Logo: run a trademark search before registering or printing it

## Search (SEO)

Built in: a search-phrased title and description on every page, one main heading per page, canonical addresses, a sitemap with 52 URLs, breadcrumbs, business/service/FAQ/article structured data, ten location pages (`src/content/locations.ts`), eight articles (`content/blog`), and `/llms.txt` for AI search tools.

After the site is live, these matter more than anything in the code:
- [ ] Add the site to Google Search Console and Bing Webmaster Tools, and submit `/sitemap.xml`
- [ ] Create a Google Business Profile with the real UAE address and phone number
- [ ] Use exactly the same name, address and phone number everywhere it is listed
- [ ] Get listed on Clutch, GoodFirms, DesignRush and LinkedIn, and ask early clients for reviews there
- [ ] Publish two articles a month in `content/blog`
- [ ] Replace sample testimonials, figures and demo case studies with real ones

## Deploying to your domain

1. **Push to GitHub.** Create a private repository and push this folder.
2. **Import into Vercel.** vercel.com → Add New → Project → pick the repository. The defaults work.
3. **Add environment variables** (Vercel → Project → Settings → Environment Variables), using `.env.example` as the list:
   - `NEXT_PUBLIC_SITE_URL` = `https://wetheapex.com`
   - `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`
   - `ANTHROPIC_API_KEY` (optional, for AI chatbot answers)
   - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` or `NEXT_PUBLIC_GA_ID` (optional)
4. **Set up Resend.** Create an account, add and verify your domain (DNS records), create an API key. `CONTACT_FROM_EMAIL` must be an address on the verified domain. Until these are set, the live form shows "The form is not set up yet."
5. **Connect the domain.** Vercel → Project → Settings → Domains → add your domain, then add the DNS records Vercel shows at your registrar. HTTPS is issued automatically.
6. **Set up Cal.com.** Create the event, put its link in `calLink`, and set the event's redirect-after-booking URL to `https://wetheapex.com/thank-you`.
7. **Redeploy** so the environment variables take effect, then test: submit the form, book a test call, ask the chatbot a question, and accept and decline the cookie banner.
8. **Search engines.** Add the site to Google Search Console and submit `https://wetheapex.com/sitemap.xml`.
