# Alpaca Digital — alpacadigital.co

Next.js 16 + Tailwind CSS 4. One-page marketing site focused on lead generation:
custom websites, local SEO, and Google Business Profile optimization.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy (Vercel)

1. Push this folder to a GitHub repo and import it in Vercel (or replace the code in your existing Vercel project's repo).
2. Add environment variables in **Vercel → Project → Settings → Environment Variables** (see `.env.example`):
   - `RESEND_API_KEY`: from https://resend.com (free tier). Without it, the contact form shows a "please call or email" fallback.
   - `CONTACT_TO_EMAIL`: where leads go (defaults to hello@alpacadigital.co).
   - `CONTACT_FROM_EMAIL`: a sender on a domain you've verified in Resend.
3. Point `alpacadigital.co` at the Vercel project.

## Where to edit things

| What | File |
| --- | --- |
| Phone, email, name, city, site URL | `src/lib/site.ts` |
| Hero headline and intro | `src/components/Hero.tsx` |
| The three pillars (website / SEO / Google profile) | `src/components/LeadSystem.tsx` |
| "How leads happen" 4-step path | `src/components/LeadPath.tsx` |
| Exclusive Drywall case study | `src/components/CaseStudy.tsx` |
| Everything-included grid | `src/components/Included.tsx` |
| Process steps | `src/components/Process.tsx` |
| About section + business card | `src/components/About.tsx` |
| FAQ (also feeds Google's FAQ structured data) | `src/components/FAQ.tsx` |
| Contact form / email delivery | `src/components/ContactForm.tsx`, `src/app/api/contact/route.ts` |
| Page title, description, local-business schema | `src/app/layout.tsx` |
| Link preview image (texts, social) | `src/app/opengraph-image.tsx` |

Images live in `public/` (logo marks) and `public/work/` (case study screenshots).
