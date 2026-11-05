# Services section — supplied-image cards and visible directory

This revision supersedes the previous editorial/accordion design.

## User requirements implemented

- White section background, matching the original page.
- Two large Cleaning and Moving category cards at the top, following the supplied reference.
- Both use the photo areas from the user's composite reference image. No generated or stock image is used in this services section or the category pages.
- The entire Cleaning card links to /cleaning; Moving links to /moving.
- All 12 subservices and their descriptions are simultaneously visible below the cards. No tabs, filters or accordions conceal these lists.
- Each subservice link opens its category page at the matching service heading.
- The two category pages have six services, service-specific enquiry links, preparation guidance and the existing demo form.
- Navigation, mega-menu and footer links work across the new routes.

## Image provenance

Source: the user-supplied codex-clipboard-192309a8-b4f4-46db-bfa4-7e57e5e1162e.png (1672 × 941).

Photo areas extracted with Sharp and saved as WebP:

- public/images/cleaning-service-provided.webp: x=389, y=313, width=435, height=369.
- public/images/moving-service-provided.webp: x=1190, y=313, width=432, height=369.

The supplied photos are framed with CSS so the card headings, icons and buttons remain live accessible HTML. Image content was not regenerated. The previously generated kitchen asset remains on disk for history and is not referenced by the live services section.

## Content boundaries

The reference's claims about vetted/insured professionals are not carried over without verification. The reassurance row instead explains the actual intended enquiry journey. The form remains a local demo and the draft stays noindex.

## Validation

Production build and TypeScript pass. Browser checks confirm a white background, all 12 visible homepage service entries, working category card links, six entries on each category page and service-specific enquiry selection.
