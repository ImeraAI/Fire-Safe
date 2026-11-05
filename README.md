# London Home Services Group — powered by Mango

Local Next.js marketing page for the London cleaning and moving pilot. Customers request help; Mango's AI agent calls to gather job details and help arrange a provider.

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
- `src/components/service-explorer.tsx`: two image category cards and always-visible service lists.
- `src/components/audience-cards.tsx`: four audience cards with direct enquiry CTAs.
- `src/content/audiences.ts`: audience descriptions, service examples and CTA defaults shared with the form.
- `src/components/service-catalogue.module.css`: scoped card, directory and category-page styling on a white background.
- `src/components/service-category-page.tsx`: shared Cleaning and Moving page structure.
- `src/app/cleaning/page.tsx` and `src/app/moving/page.tsx`: dedicated category routes and metadata.
- `src/components/lead-form.tsx`: local callback prototype.
- `src/content/landing.ts`: phone settings, main categories, process and FAQs.
- `src/content/services.ts`: Cleaning and Moving groups and their proposed subservices.
- `docs/service-architecture.md`: service page hierarchy; category routes exist, individual subservice routes remain proposed.
- `public/images/`: user-supplied London logo, Mango logo and hero photo.

The hero follows the supplied Maverick screenshot composition. Lower sections follow the London Safety Checks information layout with original pilot copy and the supplied green/navy branding.

## Preview boundaries

- The callback form validates locally and explicitly reports that no request was sent. It does not transmit or store contact details.
- The current phone (+44 (555) 0198) and email (info@imeraai.com) are supplied by the user and configured in `src/content/landing.ts`. Header, mobile menu and footer share these settings.
- Detailed service categories are proposals; the catalogue states that availability and provider details need confirmation.
- No competitor ratings, testimonials, prices, registrations or contact details are attributed to this business.
- Search indexing is disabled for the draft. No hosting deployment has been made.

Before launch: connect the callback integration server-side, confirm available services and postcode coverage, supply approved privacy/contact content and enable indexing when the page is ready.

