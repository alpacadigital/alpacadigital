# Alpaca Digital

The website for Alpaca Digital, Gates Jones's one-person studio in Rochester, MN. Gates helps local businesses get more customers from Google with websites, local SEO, and Google Business Profile work.

Live at [alpacadigital.co](https://alpacadigital.co).

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4
- Resend for the free audit form
- next-themes for the day and night map

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Environment variables

| Variable | What it's for |
|---|---|
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com). The audit form needs it to send email. |
| `CONTACT_TO_EMAIL` | Where audit requests go. Defaults to hello@alpacadigital.co. |

## Editing content

- Contact details: `lib/site.ts`. Fill in `phone` to show call and text links across the site.
- Client testimonials: `components/Testimonials.tsx`. The section stays hidden until the list has at least one quote. Only add real quotes, with the client's permission.
- Portfolio: `components/Work.tsx`. Screenshots live in `public/`.
- The hero map: `components/RochesterMap.tsx` draws the streets, river, and labels. `components/Hero.tsx` handles the pins, the Buried/Found switch, and the moving searcher dots.

Product and design notes are in `PRODUCT.md` and `DESIGN.md`.
