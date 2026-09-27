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

## First-pass verification results

- ESLint and TypeScript pass.
- Production build passes, including the homepage, writing index, article pages, and existing Moil CMS routes.
- Browser reviewed at 1440 × 900, 390 × 844, and 320 × 740.
- No document-level horizontal overflow at those sizes.
- Desktop gallery pins below the header and advances horizontally with scroll. Resizing to mobile removes the pin spacer and restores vertical cards.
- Keyboard navigation reaches the last project and brings its full card into view. The immediate keyboard-position refinement was subsequently verified during the second pass.
- Light / dark theme switching, mobile menu opening, Escape dismissal, menu navigation, project brief selection, scope slider, and priority selection were exercised.
- The generated email URI contains the chosen type, scope and priority. No email was sent.
- Writing index and an existing article rendered correctly after client navigation. Browser error log was empty during those checks.
- Reduced-motion behavior is implemented through GSAP media queries and CSS; its preference branch was reviewed in code, not exercised with OS preference emulation.
- Homepage content is present in server-rendered markup; animation state is applied only on the client.
- The existing browser-target data package emits an age warning during builds; it does not prevent compilation.

## Full-video comparison and second edition

Reviewed the [full-resolution video](https://cdn.dribbble.com/userupload/47841476/file/09bfe5c4946c210a2e59d0b0ab64b558.mp4) after browser access was restored. It is the same approximately 49.2-second sequence at 1900 × 1424. This is an interpretation for Taiwo’s identity, not a frame-perfect reproduction.

- About: four illustrated capability panels with asymmetric typography, original SVG artwork, perspective entrances and subtle pointer tilt.
- Work: layered screenshots, oversized background lettering and opposing movement inside the pinned desktop gallery.
- Approach: a sticky circular process dial with a drawn progress ring and scroll-linked counters for Discover, Design, Develop and Deliver. The gallery refreshes first so its added scroll distance cannot desynchronize downstream scenes.
- Writing: three staggered editorial covers using real article content and links.
- Contact: masked headline lines, a spring entrance for the contact circle and a magnetic hover response.
- Footer: a full signature layout with navigation, social links, oversized individually animated TAIWO letters and a rotating TT seal. The back-to-top link returns to the homepage anchor.
- Motion: GSAP and ScrollTrigger own the timelines and scroll choreography. React owns only the motion preference; animation changes do not trigger React renders on every frame. All contexts and pointer listeners clean up when preferences or viewport conditions change.
- Accessibility: a visible Motion control disables pinning and animation and restores normal document flow. System reduced-motion preferences are also respected. All content is readable without animation.

## Second-edition verification

- Desktop, 390 px and 320 px layouts reviewed; no document-level horizontal overflow.
- Changing to mobile removes the desktop pin and displays all projects vertically.
- Immediate keyboard focus brings the final gallery card fully into the viewport.
- Motion control removes the pin and leaves reveal content visible; enabling it restores the gallery.
- Process counters follow the visible steps after correcting the pin refresh order.
- Light and dark themes and homepage return links checked.
- System reduced motion is implemented and reviewed in code; the visible reduced-motion control was exercised, without changing the host OS preference.
- Updated footer reviewed at 1440 × 900, 390 × 844 and 320 × 740; signature, seal and links remain inside the viewport. Its return link reaches scroll position zero.
- Process progress ring visually verified while partway through step two.
- Final browser error/warning log is empty. ESLint, TypeScript, whitespace checks and production build pass.

## Screenshot feedback refinement

- Removed the large footer name, TT seal, and small footer wordmark; retained the footer links and copyright.
- Aligned the selected-work caption and arrow horizontally, including on mobile.
- Hero now uses a pure white background with dark text and brand-blue headings in light mode, and retains its black background in dark mode. Light mode uses a clean photographic frame instead of a dark feathered edge.
- Redesigned the writing index around an oversized editorial masthead, featured essay, and simpler two-column article cards. Updated article typography, cover treatment, and reading width to match.
- Production build, lint and TypeScript pass. Blog links and mobile article flow verified; no horizontal overflow in the tested mobile and desktop layouts.

## Light hero portrait blend

Replaced the light-mode arch with a transparent cutout at `public/portrait-cutout.png`, generated using the built-in image tool. The original photograph remains at `public/potrait.jpg` for dark mode. The light-mode cutout has no frame or background; a CSS alpha gradient fades only the lower torso into the page. Desktop scroll transforms continue to apply through the existing portrait wrapper.

Image edit prompt:

> Use case: background-extraction. Edit target: supplied original portrait. Remove only the black studio background to actual transparency (alpha), creating a clean professional cutout for a white website hero. Preserve the exact original person, identity, facial structure, expression, skin texture, hair, ears, body, pose, clothing, framing and original lighting. Do not redraw, beautify, stylize or relight the person. Preserve fine hair edges with no dark halo, no added white outline, no shadow and no invented elements. Original square framing and full visible torso retained. Output a transparent PNG.
