# philbk-resume — Product Requirements Document

## 1. Vision

Build a durable résumé-generation system that produces a world-class, one-page software engineering résumé for browser, print, and PDF. The output should feel like the printable counterpart of `philbk.dev`: restrained, precise, premium, and grounded in evidence.

The product is not a portfolio, visual résumé, or document-editor clone. It is a small publishing system with a stable content contract, semantic renderer, intentional typography, and deterministic export pipeline.

## 2. Product principles

1. **Systems first:** recurring decisions become contracts, tokens, and reusable renderers.
2. **Content first:** facts and copy determine the document; presentation never becomes a second content store.
3. **Evidence first:** specific results and technical scope replace unsupported adjectives.
4. **Typography first:** type, rhythm, and whitespace establish hierarchy.
5. **One document:** screen, print, and PDF share semantic HTML and source content.
6. **Durability:** adding or revising a variant should be routine and low risk.
7. **Constraint-driven quality:** one-page fit and ATS compatibility are acceptance criteria.

## 3. Goals

### 3.1 Product goals

- Render a polished résumé in modern browsers.
- Produce exactly one US Letter page when printed or exported.
- Preserve selectable text, link annotations, and logical reading order in PDF.
- Keep all résumé content under `src/content`.
- Support distinct targeted résumé variants without presentation changes.
- Make content and output regressions detectable through automation.
- Remain understandable and maintainable for years.

### 3.2 Success criteria

- A new variant can be added through content and registry changes only.
- No résumé copy is found in rendering components.
- Every registered variant passes schema validation.
- Automated export produces one page at 8.5 × 11 inches.
- Extracted PDF text follows visual reading order and includes all visible content.
- All visible URLs are represented by working link annotations.
- The document remains readable in grayscale and when CSS is unavailable.
- The screen preview and PDF have no clipped or overlapping content.

### 3.3 Non-goals

- Portfolio pages, case studies, galleries, or project screenshots.
- A rich-text editor or general-purpose résumé builder.
- Drag-and-drop layout customization.
- Multiple columns, sidebars, timelines, charts, ratings, or decorative graphics.
- A Microsoft Word export in the initial scope.
- Runtime content management, authentication, or a database.
- Sacrificing readability merely to force excessive content onto one page.

## 4. Users and use cases

### Primary user

The résumé owner, who needs to maintain canonical career facts and generate targeted applications with minimal duplication.

### Secondary users

- Recruiters and hiring managers reading the résumé visually.
- Applicant tracking systems extracting structured plain text.
- Interviewers following links to supporting evidence.

### Core use cases

- Preview the active résumé in a browser.
- Select a targeted variant by a stable identifier.
- Edit career facts once and propagate them safely.
- Tune variant-specific summary, ordering, inclusion, and bullets.
- Export one or all variants to deterministic PDF files.
- Validate output before sending an application.

## 5. Design philosophy

The visual language is a single-column editorial document. Whitespace, alignment, type scale, and concise rules do the work normally assigned to decoration.

Required characteristics:

- one column with a natural top-to-bottom reading order;
- clear name, section, role, organization, date, and body hierarchy;
- compact but comfortable vertical rhythm;
- subtle neutral dividers where they improve scanning;
- black and neutral text on white;
- blue reserved exclusively for hyperlinks;
- no icons unless plain text would communicate less clearly;
- no sidebar, timeline, rating bar, chart, photo, logo, or decorative illustration.

The browser preview may use a quiet neutral canvas to distinguish the page boundary. That preview treatment must disappear in print and is not part of the résumé itself.

## 6. Information architecture

The default document order is:

1. Header and contact links
2. Professional summary
3. Skills
4. Professional experience
5. Selected projects, when strategically useful
6. Certifications, when relevant
7. Education

This is a default, not a hard-coded layout. A validated variant owns section inclusion and order. The renderer supports only approved semantic section types, which keeps markup predictable while allowing strategy to vary.

Every section must earn space. Empty sections are invalid and must not render. Repeated facts should have one canonical definition.

## 7. System architecture

### 7.1 Layers

```text
Canonical facts
      ↓
Variant manifest and selection
      ↓
Schema validation / normalization
      ↓
Semantic React renderer
      ↓
Shared document styles
      ↓
Screen preview     Print CSS
                         ↓
                  Chromium PDF
                         ↓
                Output validation
```

### 7.2 Proposed source tree

```text
src/
├── app/
│   ├── App.jsx
│   └── main.jsx
├── content/
│   ├── shared/
│   │   ├── profile.js
│   │   ├── experience.js
│   │   ├── projects.js
│   │   ├── education.js
│   │   └── certifications.js
│   ├── variants/
│   │   ├── frontend.js
│   │   ├── fullstack.js
│   │   ├── startup.js
│   │   └── cloud.js
│   ├── schema.js
│   └── index.js
├── components/
│   ├── resume/
│   │   ├── Resume.jsx
│   │   ├── ResumeHeader.jsx
│   │   ├── ResumeSection.jsx
│   │   ├── ExperienceList.jsx
│   │   ├── ExperienceItem.jsx
│   │   ├── ProjectList.jsx
│   │   ├── ProjectItem.jsx
│   │   ├── SkillsList.jsx
│   │   ├── EducationList.jsx
│   │   └── CertificationList.jsx
│   └── primitives/
│       ├── ExternalLink.jsx
│       └── DateRange.jsx
├── styles/
│   ├── tokens.css
│   ├── reset.css
│   ├── resume.css
│   ├── screen.css
│   └── print.css
└── validation/
    ├── content.test.js
    ├── ats.test.js
    └── print.test.js
```

### 7.3 Dependency direction

- `app` may import content, components, and styles.
- `components` may import other components and presentation utilities, but never a specific variant.
- `content` must not import components or styles.
- `styles` must not encode content or variant identity.
- `validation` may consume the public content API and rendered output.

These boundaries prevent circular ownership and keep each layer independently replaceable.

### 7.4 Variant resolution

Variants are registered in one explicit map keyed by stable IDs such as `frontend` and `cloud`. Development preview may select a variant through a query parameter or environment default. Export tooling must require a known ID and reject unknown values rather than silently falling back.

Variant selection must not produce different component trees. All variants pass through the same validator and renderer.

## 8. Content architecture

### 8.1 Canonical facts versus editorial choices

The architecture distinguishes two kinds of content:

- **Canonical facts:** employers, roles, dates, project URLs, credentials, education, and verified outcomes. These live under `content/shared` with stable IDs.
- **Editorial choices:** summary wording, selected bullets, section order, skill emphasis, and inclusion decisions for a target. These live in variant manifests.

This hybrid avoids two failure modes: duplicating entire résumés for each target, and forcing every target to use identical copy. Variants can reference canonical entries and override only explicitly permitted editorial fields.

### 8.2 Content contract

The schema should validate at least:

- variant ID, display label, locale, document title, and output filename;
- header name, headline, location, and typed links;
- non-empty summary with an agreed length budget;
- known section types and unique section IDs;
- stable item IDs and valid shared-content references;
- role, organization, location, start date, optional end date, and bullets;
- project name, description or bullets, technologies, and valid URLs;
- skill groups containing plain-text values;
- education and certification names, issuers, dates, and optional URLs;
- chronological and date-range consistency;
- no empty arrays, placeholder text, unsafe markup, or duplicate links.

Validation should fail during development, tests, builds, and export. Invalid content must never generate a seemingly successful PDF.

### 8.3 Content rules

- Components contain no résumé headings, labels, prose, dates, or destinations.
- Content is plain structured data, not preformatted HTML.
- Bullet text begins with a strong action or outcome and favors evidence.
- Metrics must be supportable and use consistent formatting.
- Technology names use canonical spelling.
- Dates use machine-readable source values and a consistent display formatter.
- URLs use `https` where available and provide concise visible labels.
- All arrays are deliberately ordered; the renderer does not infer strategic priority.
- Section and item IDs remain stable to support testing and future editing tools.

### 8.4 Page budget

One-page fit is partly a content concern. Each variant should have enforceable budgets for summary length, bullet count, bullet length, skill count, and total sections. Budgets should report actionable failures rather than silently truncate copy. CSS must never hide overflow or content to pass the page requirement.

## 9. Component architecture

### 9.1 Responsibilities

- `Resume` creates the document-level semantic boundary and renders ordered sections.
- `ResumeHeader` renders identity, headline, location, and contact links.
- `ResumeSection` maps approved section types to their renderer and associates headings accessibly.
- List components own semantic list structure.
- Item components render one experience, project, education, or certification record.
- `ExternalLink` standardizes safe anchors and printable link behavior.
- `DateRange` provides consistent human-readable date output backed by valid source values.

### 9.2 Markup requirements

- Use one primary `main` document region.
- Use exactly one `h1` for the candidate name.
- Use `h2` for section headings and `h3` only where item headings require it.
- Use paragraphs and unordered lists for prose and accomplishments.
- Use real anchor elements with useful accessible names.
- Use semantic date elements where they improve machine interpretation.
- Preserve DOM order as the intended visual and extraction order.
- Do not use tables for alignment or definition-like content.
- Do not represent visible text through pseudo-elements.

### 9.3 Extensibility rules

A new variant requires content and registry changes only. A new section type requires a schema addition, renderer, tests, and style rules; it must not be introduced as an ad hoc variant condition. Components should prefer explicit props over reaching into global content state.

## 10. Typography system

The initial scale is a design specification to validate during implementation, not immutable values. It uses a reliable system sans-serif stack to minimize loading risk and maximize text extraction consistency.

### 10.1 Font stack

```text
Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif
```

If Inter is used, it must be locally hosted, subset responsibly, and embedded reliably in PDF. The system must remain visually sound if it falls back to system fonts.

### 10.2 Print type tokens

| Role | Size | Weight | Line height | Notes |
| --- | ---: | ---: | ---: | --- |
| Name | 22 pt | 700 | 1.05 | Primary identity; no decorative tracking. |
| Headline | 10 pt | 500 | 1.25 | Clear role positioning. |
| Contact line | 8.5 pt | 400 | 1.3 | Plain text separators; links in blue. |
| Section heading | 9 pt | 700 | 1.2 | Uppercase optional; modest 0.06em tracking. |
| Item heading | 9.5 pt | 650–700 | 1.2 | Role or project name. |
| Item metadata | 8.5 pt | 500 | 1.25 | Organization, location, dates. |
| Body and bullets | 8.5–9 pt | 400 | 1.32–1.38 | Never below 8.5 pt in the target output. |
| Supporting detail | 8 pt | 400 | 1.3 | Use sparingly; not for core evidence. |

Screen preview should preserve these physical relationships. Browser zoom is not a substitute for print sizing.

### 10.3 Weight and emphasis

Use regular, medium, and bold weights only. Bold communicates structure or a small amount of inline emphasis; it must not turn bullets into a field of competing highlights. Italics are reserved for conventional metadata where they improve comprehension.

### 10.4 Links and color

- Body text: near-black, target `#171717`.
- Secondary text: neutral dark gray, target `#4B5563`, subject to contrast testing.
- Dividers: light neutral gray, target `#D1D5DB`.
- Links: one restrained blue, target `#1D4ED8`.
- Paper: white.

Links are the only blue elements. They remain recognizable in grayscale through underlines or another non-color cue. Print output must preserve clickable destinations.

## 11. Spacing system

Use a compact base unit of 2 pt for print-oriented spacing. Tokens should be named by purpose as well as scale so page tuning remains systematic.

| Token | Value | Typical use |
| --- | ---: | --- |
| `space-1` | 2 pt | Inline or tightly related text. |
| `space-2` | 4 pt | Heading-to-metadata, bullet gaps. |
| `space-3` | 6 pt | Related item elements. |
| `space-4` | 8 pt | Between entries. |
| `space-5` | 12 pt | Between compact sections. |
| `space-6` | 16 pt | Major header-to-body transition. |
| `space-8` | 24 pt | Screen-only page surroundings; rarely in print. |

Spacing must express relationships: less space within an item, more between items, and most between sections. Negative margins and one-off pixel nudges require documented justification.

### 11.1 Page geometry

- Target page: US Letter, 8.5 × 11 inches.
- Initial print margins: 0.48–0.55 inches on all sides; start at 0.5 inches.
- Usable area at 0.5-inch margins: 7.5 × 10 inches.
- Screen preview: render the exact page aspect ratio and physical dimensions where supported.
- Minimum safe distance from paper edge: governed by the defined page margin; no full bleed.

The final margin within the stated range should be selected only after content and printer/PDF validation. Margin reduction is not the first response to overflow.

## 12. Divider treatment

Section dividers, if used, are a single 0.5 pt neutral rule associated with the section heading. They must not fragment every item or create a boxed interface. Dividers should survive grayscale output without becoming visually dominant.

## 13. ATS strategy

ATS compatibility is addressed structurally, not through a second hidden document.

### 13.1 Required practices

- Semantic HTML with conventional headings, paragraphs, lists, links, and dates.
- A single-column DOM and visual layout.
- Selectable text for every piece of résumé content.
- Standard Unicode characters and conservative punctuation.
- Conventional section names supplied by content.
- Full technology and organization names where ambiguity is harmful.
- Human-readable visible link labels and real hyperlink destinations.
- Logical source order identical to reading order.

### 13.2 Prohibited practices

- Tables used for page layout.
- CSS columns, positioned text boxes, or grid placement that changes reading order.
- Canvas, SVG text, or images containing résumé text.
- Icon-only contact information.
- Generated visible copy in CSS pseudo-elements.
- Hidden keyword stuffing or duplicated invisible text.
- Content clipped with `overflow: hidden`.
- Headers or footers injected by the browser export UI.

### 13.3 Validation

Automated checks should:

- inspect rendered markup for heading order and prohibited elements;
- extract text from the PDF and compare expected normalized content and sequence;
- verify each required section and link is present;
- flag suspicious missing glyphs or replacement characters;
- ensure the PDF is not image-only;
- optionally run representative ATS parsers as advisory checks, not as the sole quality signal.

Manual review remains necessary because ATS products vary and automated checks cannot guarantee behavior in every vendor system.

## 14. Print strategy

### 14.1 Dedicated stylesheet

`print.css` will be loaded for print media and will:

- define `@page { size: Letter; margin: ... }`;
- remove the screen preview frame, shadows, controls, and background;
- set exact print typography and colors;
- avoid browser-added headers and footers in automated export settings;
- apply targeted `break-inside: avoid` to compact entries;
- keep headings with their first item where feasible;
- preserve link styling and annotations;
- ensure the document uses normal flow and never clips overflow.

Break-avoidance is a safeguard, not the main one-page mechanism. The content budget and total document rhythm must already fit.

### 14.2 Deterministic export

The export pipeline should use a pinned headless Chromium runtime against the production build. For each registered variant it should:

1. resolve and validate content;
2. load the stable variant URL;
3. wait for fonts and layout stability;
4. export with Letter size, 100% scale, print backgrounds as specified, and browser margins/header/footer disabled;
5. write an artifact using the variant's validated filename;
6. validate page count, dimensions, extracted text, links, and overflow.

### 14.3 Browser support

The preview targets current Chromium, Firefox, and Safari. Chromium is the canonical automated PDF engine because PDF rendering differs across browsers. Manual output from other browsers is supported on a best-effort basis and must be visually inspected.

### 14.4 Print acceptance criteria

- Exactly one page with Letter dimensions.
- No content touches or crosses the content box.
- No orphaned heading or isolated final bullet.
- No unexpected reflow after fonts finish loading.
- All text is legible at actual size without relying on viewer zoom.
- Link text remains blue or otherwise identifiable and every destination remains clickable.
- Text extraction matches DOM reading order.

## 15. Screen experience

The application shell should be intentionally small. It may provide a variant selector and print/export action in development or preview contexts, but those controls are outside the résumé document and must never print. The primary view centers one Letter-sized page on a neutral background and supports narrow screens without altering the print contract.

Production routes or query parameters for variants must be stable enough for automated export. UI controls must not be required for export automation.

## 16. Quality strategy

### 16.1 Static quality

- Lint source and tests.
- Validate all content at import/build boundaries.
- Enforce dependency boundaries and detect résumé copy in components where practical.
- Reject duplicate IDs, unknown section types, invalid URLs, and invalid dates.

### 16.2 Behavioral quality

- Component tests verify semantic markup and conditional omission.
- Variant tests confirm every registered manifest produces a complete model.
- Accessibility tests check headings, link names, landmarks, and contrast.
- Snapshot tests may protect normalized structure, but must not replace focused assertions.

### 16.3 Output quality

- Export every variant in CI or a dedicated validation job.
- Assert one-page count and Letter media box.
- Compare extracted PDF text against expected content.
- Check PDF link annotations.
- Capture a rasterized page for visual regression with controlled fonts and browser version.
- Detect DOM overflow before export and page overflow after export.

## 17. Performance and reliability

The application is static and should require no backend. It should have a small JavaScript footprint, no runtime network dependency for content, and no analytics requirement. Fonts and assets needed for output should be local and versioned. A production export must be reproducible offline after dependencies are installed.

## 18. Accessibility

- Meet WCAG 2.2 AA contrast for text and interactive elements.
- Preserve a logical heading hierarchy.
- Make links understandable without surrounding context.
- Support keyboard access for any preview controls.
- Avoid color-only meaning.
- Respect text selection and browser zoom in the screen experience.
- Do not add ARIA where native HTML already expresses the correct semantics.

## 19. Development roadmap

### Phase 0 — Architecture

- Approve this PRD and README.
- Confirm initial variant and content inventory.
- Select the build, schema-validation, test, and PDF tooling.

Exit criterion: architecture and boundaries are accepted; no résumé UI implementation is required.

### Phase 1 — Foundation

- Initialize the React application and quality tooling.
- Define the content schema and canonical model.
- Add the variant registry and validation command.
- Create representative fixture content for tests.

Exit criterion: valid content resolves to a normalized render model; invalid content fails clearly.

### Phase 2 — Semantic renderer

- Implement content-free document components.
- Establish heading, list, link, and date semantics.
- Add component and accessibility tests.

Exit criterion: the unstyled document has correct order, complete text, and useful semantics.

### Phase 3 — Visual and print system

- Implement tokens, reset, document styles, preview shell, and dedicated print styles.
- Tune type and spacing against real content.
- Validate US Letter output across representative systems.

Exit criterion: the initial variant renders legibly and fits exactly one page without clipping or hidden content.

### Phase 4 — Export and validation

- Add deterministic Chromium PDF generation.
- Add page-size, page-count, text, link, glyph, and overflow checks.
- Add controlled visual regression output.

Exit criterion: a single command produces a verified PDF artifact.

### Phase 5 — Variant expansion

- Add frontend, full-stack, startup, and cloud manifests.
- Establish variant-specific content budgets.
- Export and review all variants.

Exit criterion: every variant passes the same content, ATS, accessibility, and print gates without renderer changes.

### Phase 6 — Release workflow

- Add CI validation and optional artifact publication.
- Document versioning, naming, and release review.
- Record the canonical browser and font versions.

Exit criterion: generated documents are reproducible and traceable to source revisions.

## 20. Future enhancements

- Additional role- or company-specific variants.
- A content linter for weak verbs, unsupported claims, repetition, and length budgets.
- Optional JSON Resume import/export adapter without changing the internal model.
- Localization-aware date and location formatting.
- Release metadata embedded in PDF document properties.
- A visual diff review page for variant comparisons.
- Automated broken-link checking.
- A controlled two-page senior-career format using the same content model, if the product scope changes.
- A small authoring interface that writes schema-valid content, provided content files remain the authoritative artifact.

Future features must preserve semantic output, deterministic export, and presentation/content separation.

## 21. Risks and mitigations

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Content growth breaks one-page output | Clipping or unreadably small type | Enforce content budgets and automated page/overflow checks. |
| Variants duplicate and drift | Conflicting facts and high maintenance | Keep canonical facts shared; permit narrow editorial overrides. |
| Browser PDF output differs by machine | Inconsistent artifacts | Pin Chromium and fonts for canonical exports. |
| Custom fonts load late or fail | Layout shift and overflow | Host locally, await fonts, retain a tested system fallback. |
| Visual layout harms ATS parsing | Missing or reordered text | Keep one semantic DOM order and verify extracted PDF text. |
| Tests overfit one ATS parser | False confidence | Test structural invariants and use third-party parsing only as advisory evidence. |
| Component layer accumulates copy | Variants require code changes | Enforce the content boundary in review and with static checks where practical. |

## 22. Architecture decisions

### ADR-001: Variants are manifests, not component forks

All variants use one schema and renderer. This keeps presentation improvements consistent and prevents target-specific UI branches.

### ADR-002: Canonical facts and editorial variants are separate

Facts should not be recopied, but targeted wording and selection are legitimate. Stable references plus controlled overrides provide both consistency and flexibility.

### ADR-003: Section order is content

Priority changes by target role. The variant owns ordered sections; the renderer does not impose career strategy.

### ADR-004: PDF is generated from the production web document

A separate PDF template would create a second presentation system and invite drift. The production DOM and print stylesheet are the sole rendering path.

### ADR-005: One-page output is validated, not assumed

Page count, dimensions, text, links, and overflow are testable output properties and belong in the quality gate.

## 23. Definition of done

The initial product is complete when:

- one production-ready variant is authored entirely in `src/content`;
- the application renders it with no résumé copy in components;
- the document meets the approved visual and semantic design;
- canonical export produces one verified US Letter PDF;
- text is selectable and extracted in logical order;
- hyperlinks are preserved and functional;
- content, accessibility, ATS, print, and export checks pass;
- documentation explains how to maintain facts, create a variant, preview, validate, and export;
- adding a second variant requires no component or stylesheet changes.

