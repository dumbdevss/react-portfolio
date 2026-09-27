# Taiwo — portfolio design and motion map

Reference: [Nadnova / Developer Portfolio Website Design](https://dribbble.com/shots/27407928-Developer-Portfolio-Website-Design-Webflow-WordPress).
Reviewed the 49-second embedded film in the browser, including the opening, section transition, project gallery, calculator and closing sequence. Timestamps below are approximate; implementation timings are our choices, not measurements of the source website.

## Observations and translation

| Film   | Observed design / motion                                                                           | Taiwo implementation                                                                                                         |
| ------ | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 0–5s   | Huge two-line type behind a centered portrait; small corner navigation and captions                | Oversized SOFTWARE / ENGINEER typography, original portrait, compact TT wordmark, cobalt accents                             |
| 5–9s   | Hero recedes into a dark section; large heading and four cards settle at slightly different angles | Scroll-linked portrait / type parallax; capability cards rise and straighten on entry                                        |
| 10–14s | Oversized, asymmetrically arranged statement with clipped text entrances                           | Large editorial statement and masked line reveals                                                                            |
| 15–24s | Project scenes move horizontally, with smaller website previews layered over the visuals           | Desktop scroll-linked horizontal featured gallery with local screenshots; ordinary vertical cards on mobile / reduced motion |
| 25–29s | Comparison section with a central circular counter                                                 | Skills and process section, using actual expertise instead of unverified awards or statistics                                |
| 30–35s | Two sliders update a calculated figure                                                             | Interactive project brief: choose project type, scope and priority; prepare a tailored email without invented pricing        |
| 36–43s | Spare contact view with progressively appearing message text                                       | Large contact invitation, editorial writing links, and email brief                                                           |
| 44–49s | Playful blue retro-computer ending / modal                                                         | Cobalt contact finish and oversized wordmark; no forced modal                                                                |

## Brand

Retain #1a35a8 / #142a8c in light mode, #3b6ef0 / #2554d6 in dark mode, #08090c dark background, #fbfbfa light background. Geist is the primary display and body family; Instrument Serif gives a human accent; Geist Mono handles labels.

The new TT mark uses two offset, interlocking T forms on an 8-unit grid. One T represents Taiwo, the other Triumphant. Their stepped edges recall code brackets. The flat silhouette remains readable as a favicon, a navigation mark and a large decorative stamp. Deliver transparent SVG, square app icons, and an inline component. No external logo asset is copied.

## Motion contract

- Opening: masked title lines (0.95s), portrait (1.2s), captions (0.65s), staggered and overlapping. No blocking loader.
- Hero scroll: modest opposing type movement and portrait recession linked to scroll.
- Section entrances: 0.8–1.0s power3 easing, 60–100ms stagger; cards straighten from ±2 degrees.
- Featured work: desktop-only GSAP ScrollTrigger pin/scrub; section distance derives from measured overflow. Keyboard focus advances the gallery to the focused link. Resizes and image loading refresh measurements.
- Links / buttons: 180–300ms underline and arrow movement. Native pointer remains visible.
- Reduced motion: no pinning, parallax or animated entrance. Content uses normal document flow. Preferences changing while the page is open revert active GSAP contexts.
- Mobile: vertically stacked gallery, no horizontal scroll hijacking, visible portrait, touch-sized controls.
- Progressive enhancement: content is visible in server-rendered HTML. Animation start states are applied only after JS initializes.

## Content and boundaries

Preserve real projects, external links, social URLs, contact email, local / Sanity blog content and existing CMS routes. Featured projects use the existing local Moil CRM and Vault screenshots plus a custom text-based Movement cover. Keep the full project index beneath the showcase. Do not invent client testimonials, success percentages, awards or fees. The project brief only opens the visitor's email composer; it does not submit personal data to a service.

## Verification

Run ESLint, TypeScript and a production build. Review desktop and mobile layout, navigation, gallery scroll and focus, theme switching, project brief, blog routes and reduced-motion fallbacks. Record outcomes after implementation.

## Verification results

- ESLint and TypeScript pass.
- Production build passes, including the homepage, writing index, article pages, and existing Moil CMS routes.
- Browser reviewed at 1440 × 900, 390 × 844, and 320 × 740.
- No document-level horizontal overflow at those sizes.
- Desktop gallery pins below the header and advances horizontally with scroll. Resizing to mobile removes the pin spacer and restores vertical cards.
- Keyboard navigation reaches the last project and brings its full card into view. A final refinement forces the scroll-position cache to update before completing the scrub tween; the immediate-position recheck was blocked by the browser approval service.
- Light / dark theme switching, mobile menu opening, Escape dismissal, menu navigation, project brief selection, scope slider, and priority selection were exercised.
- The generated email URI contains the chosen type, scope and priority. No email was sent.
- Writing index and an existing article rendered correctly after client navigation. Browser error log was empty during those checks.
- Reduced-motion behavior is implemented through GSAP media queries and CSS; its preference branch was reviewed in code, not exercised with OS preference emulation.
- Homepage content is present in server-rendered markup; animation state is applied only on the client.
- The existing browser-target data package emits an age warning during builds; it does not prevent compilation.

## Additional full-video reference — pending comparison

The user supplied [this full video](https://cdn.dribbble.com/userupload/47841476/file/09bfe5c4946c210a2e59d0b0ab64b558.mp4) after implementation and initial browser testing. It has not yet been inspected. Browser automatic approval review reported that the workspace was out of credits and blocked further browser interaction. Do not treat the earlier clip analysis as verification of this additional video.

The implementation is a complete first pass based on the earlier 49-second clip. Compare the new full video before claiming complete motion parity.
