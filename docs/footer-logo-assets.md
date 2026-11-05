# Clean footer logo assets

Current implementation: the footer now uses `public/images/london-home-services-logo-dark.svg` and `public/images/mango-logo-dark.svg`. All runtime recoloring, background-key filters and blending are removed. The London mark is traced from the original artwork with simplified/smoothed paths; the low-resolution Mango wordmark is rebuilt with SVG typography and line artwork. These are reconstructed vector assets, not original designer source vectors. Screenshot: `footer-vector-logos-preview.png`. Production build passed. The PNG workflow below is superseded.

Final workspace assets:

- `C:/Projects/Mango UK/public/images/london-home-services-logo-dark-v2.png`
- `C:/Projects/Mango UK/public/images/mango-logo-dark-v2.png`

Created with the built-in image generation/editing tool using the original logo files as references. Light-background logos remain unchanged. The previous color-conversion filter was removed. The footer uses the dedicated dark assets and an alpha-only navy matte key; RGB colors are not transformed by that key.

Final rendering prompt: Create a new clean vector-style rendering of the reference brand logo for a website footer, matching its identity, composition, lettering and green artwork. Set LONDON/GROUP/skyline or MAN lettering to white. Preserve green HOME SERVICES/swooshes or GO/hard-hat motif. Use smooth solid strokes, exact spelling and a navy #061f2d background. No pixel inversion, texture, distress, grain, rough outlines or holes in letter fills. Keep the complete logo visible with comfortable padding.

Verification screenshot: `footer-clean-logos-preview.png`. Production build passed before the final matte-key adjustment; final TypeScript check passed after it.
