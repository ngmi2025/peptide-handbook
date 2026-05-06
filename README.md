# Peptide Handbook

The UK's evidence-first guide to peptides, performance, and longevity. Built with Next.js 15 (App Router) and TypeScript.

## Stack

- Next.js 15 · App Router · React 18 · TypeScript
- Inter via `next/font/google`
- File-based content layer in `lib/peptides/`, `lib/comparisons.ts`, `lib/guides.ts`, `lib/goals.ts`
- SSG for all content pages; SSR for the assessment results page (URL-param driven)

## Local development

```bash
npm install
npm run dev
```

Defaults to http://localhost:3000. Override with `npm run dev -- -p 3030` (or any port).

## Build

```bash
npm run build
npm start
```

## Routes

- `/` — homepage
- `/peptides` and `/peptides/[slug]` — directory + 12 profiles
- `/goals` and `/goals/[slug]` — 6 goal landing pages
- `/compare` and `/compare/[slug]` — head-to-head comparisons
- `/assessment` — 5-step quiz
- `/assessment/results?goal=…&experience=…&risk=…&timeline=…&budget=…` — recommendation engine
- `/guides` and `/guides/[slug]` — long-form articles
- `/about`, `/editorial-policy`, `/medical-disclaimer`, `/privacy`, `/terms`
- `/sitemap.xml`, `/robots.txt`

## Editorial principles

Every claim is tied to a primary source. Confidence ratings (High / Medium / Low) reflect study design, sample size, and replication — not marketing volume. UK legal status is displayed on every peptide page. We do not sell products, accept affiliate commission, or take editorial input from manufacturers.

For details, see [/editorial-policy](https://peptidehandbook.co.uk/editorial-policy).
