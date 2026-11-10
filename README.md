# London Fire Safety Group — powered by Mango

Local Next.js preview for London fire and property safety enquiries, powered by Mango.

## Run

```powershell
npm install
npm run dev
```

Visit the local URL printed by Next.js. Validation: `npm run build` and `npm run typecheck`.

## Structure

- `src/app/`: App Router page, metadata and responsive CSS/theme.
- `src/components/landing-sections.tsx`: hero and page sections.
- `src/components/site-header.tsx`: white navigation bar, image-led Services mega menu, contact links and mobile service accordions.
- `src/components/service-explorer.tsx`: four image-led category cards and service lists.
- `src/components/audience-cards.tsx`: four audience cards with direct enquiry CTAs.
- `src/content/audiences.ts`: audience descriptions, service examples and CTA defaults shared with the form.
- `src/components/service-catalogue.module.css`: scoped card, directory and category-page styling on a white background.
- `src/components/service-category-page.tsx`: shared fire, electrical, gas and property survey category page structure.
- `src/app/cleaning/` and `src/app/moving/`: legacy redirects to current categories.
- `src/components/lead-form.tsx`: local callback prototype.
- `src/content/landing.ts`: phone settings, main categories, process and FAQs.
- `src/content/services.ts`: safety service categories, card content and individual service details.
- `public/images/`: user-supplied London logo, Mango logo and hero photo.

The hero follows the supplied Maverick screenshot composition. Lower sections follow the London Safety Checks information layout with original pilot copy and the supplied green/navy branding.

## Preview boundaries

- The callback form validates locally and explicitly reports that no request was sent. It does not transmit or store contact details.
- The contact email (info@imeraai.com) and phone availability are configured in `src/content/landing.ts`.
- Detailed service categories are proposals; the catalogue states that availability and provider details need confirmation.
- No competitor ratings, testimonials, prices, registrations or contact details are attributed to this business.
- Search indexing is disabled for the draft. No hosting deployment has been made.

Before launch: connect the callback integration server-side, confirm available services and postcode coverage, supply approved privacy/contact content and enable indexing when the page is ready.

<!-- Project update comment for git commit -->


