# philbk-resume

`philbk-resume` is a production-quality React document-generation application for creating a concise, ATS-friendly software engineering résumé. It is intentionally built as software—not maintained as a Word document—so its content, presentation, validation, and output can evolve consistently over time.

The résumé is the printable counterpart of `philbk.dev`: systems-first, minimal, typographic, evidence-led, maintainable, scalable, and data-driven. It is a résumé generator, not a portfolio.

> Status: first production `fullstack` variant published and validated. Additional variants remain drafts.

## Engineering philosophy

- **Content is the source of truth.** Every piece of résumé copy lives under `src/content`.
- **Presentation is replaceable.** Components know how to render content, but never own résumé copy.
- **One semantic document.** Browser, print, and PDF output use the same accessible HTML hierarchy.
- **Evidence over claims.** Entries prioritize outcomes, scope, constraints, and measurable impact.
- **Print is a product surface.** US Letter output is designed, tested, and versioned—not treated as an afterthought.
- **Constraints are explicit.** Content shape, page budget, ATS rules, and output checks are enforced where practical.
- **Minimalism is structural.** Hierarchy comes from typography and spacing rather than decoration.

## Proposed architecture

```text
philbk-resume/
├── README.md
├── PRD.md
├── package.json                 # scripts and dependencies (implementation phase)
├── public/
└── src/
    ├── app/
    │   ├── App.jsx              # application boundary; selects a résumé variant
    │   └── main.jsx             # browser entry point
    ├── content/
    │   ├── shared/              # reusable facts, never rendered directly
    │   │   ├── profile.js
    │   │   ├── experience.js
    │   │   ├── projects.js
    │   │   ├── education.js
    │   │   └── certifications.js
    │   ├── variants/            # ordered, presentation-ready résumé manifests
    │   │   ├── frontend.js
    │   │   ├── fullstack.js
    │   │   ├── startup.js
    │   │   └── cloud.js
    │   ├── schema.js            # content contract and validation rules
    │   └── index.js             # variant registry and public content API
    ├── components/
    │   ├── resume/
    │   │   ├── Resume.jsx       # semantic document composition
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
    │   ├── tokens.css           # type, spacing, color, and page tokens
    │   ├── reset.css
    │   ├── resume.css           # shared document presentation
    │   ├── screen.css           # browser-only preview shell
    │   └── print.css            # dedicated print contract
    └── validation/
        ├── content.test.js       # shape, required fields, URL, and date checks
        ├── ats.test.js           # semantic and prohibited-pattern checks
        └── print.test.js         # page count and overflow checks
```

Directories shown beyond `README.md` and `PRD.md` are a proposed implementation plan, not files created in this phase.

### Content model

Shared content contains canonical facts. A variant is an explicit, ordered manifest that selects those facts and supplies variant-specific summary and bullet choices. This prevents copy drift while still allowing targeted résumés to differ materially.

Each variant conforms to one schema and exposes a complete render model:

```text
ResumeVariant
├── id, label, locale
├── metadata (title, description, filename)
├── header (name, headline, location, links)
├── summary
└── sections[]
    ├── type
    ├── heading
    └── items[]
```

Section order belongs to content because ordering is part of résumé strategy. Components remain unaware of named variants and render only the validated model they receive.

## Architectural boundaries

- `content/` owns wording, facts, ordering, inclusion, and variant strategy.
- `components/` owns semantic markup and reusable rendering behavior.
- `styles/` owns visual hierarchy and media-specific layout.
- `validation/` protects the content contract, ATS semantics, and one-page output.
- `app/` resolves a requested variant and passes it to the document renderer.

Résumé prose, labels, headings, dates, and URLs must not be embedded in components. Structural accessibility text may live in components only when it is interface behavior rather than résumé content.

## Scripts

The implementation phase should provide these stable commands:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the browser preview with fast refresh. |
| `npm run build` | Create the production application bundle. |
| `npm run preview` | Preview the production bundle locally. |
| `npm run lint` | Run static analysis. |
| `npm run test` | Run content, component, ATS, and print checks. |
| `npm run validate:content` | Validate every registered résumé variant. |
| `npm run export:pdf` | Generate the default published variant. |
| `npm run export -- --variant frontend` | Generate one named published variant. |
| `npm run export:all` | Generate every published variant. |

These commands are the stable production interface. Export commands reject draft or invalid variants before launching the browser.

## Output engine

The production pipeline is:

```text
Variant registry
      ↓
Schema validation
      ↓
Immutable normalized model
      ↓
Semantic document engine
      ↓
Document design and print styles
      ↓
Pinned headless Chromium
      ↓
Canonical PDF metadata
      ↓
Page, text, link, metadata, layout, and determinism validation
      ↓
dist/pdf/<validated filename>
```

Exports always use the Vite production build and the existing application route. There is no PDF-specific component tree or second HTML template. Draft variants are rejected with a readable diagnostic; they are never exported accidentally.

## Print workflow

1. Select a registered résumé variant in the preview environment.
2. Run content and print validation.
3. Review the browser preview at actual page dimensions.
4. Print using US Letter, 100% scale, default margins disabled, and background graphics enabled only if required by the final design.
5. Confirm the output is exactly one page, has selectable text, retains working links, and contains no clipped or orphaned content.

The print stylesheet will define `@page` size and margins, remove the preview shell, normalize color handling, and control break behavior. One-page fit will not be achieved through arbitrary global scaling; content budgets and typography will be adjusted intentionally.

## PDF generation

PDF is an output of the web document, not a separate template. The preferred production workflow is a pinned headless Chromium version that loads the production build and calls the browser PDF API with US Letter settings. This creates repeatable exports across variants and CI environments.

Manual browser printing remains supported for inspection. Generated PDFs should be treated as build artifacts rather than source files unless a release workflow explicitly publishes them.

Every exported PDF must pass these acceptance checks:

- exactly one US Letter page;
- selectable, searchable text;
- valid embedded hyperlinks;
- no clipping, overflow, unexpected blank space, or layout shift;
- logical reading order when text is extracted;
- fonts embedded or resolved consistently;
- filename derived from validated variant metadata.

## Roadmap

1. **Foundation:** choose the React build tool, establish linting/testing, implement the schema and variant registry.
2. **Semantic document:** build content-free render components and accessibility checks.
3. **Visual system:** implement tokens, typography, screen preview, and print stylesheet.
4. **Content:** author canonical facts and the initial targeted variant.
5. **Output quality:** add automated PDF export, text extraction, link, overflow, and page-count validation.
6. **Variants:** add frontend, full-stack, startup, and cloud manifests without changing presentation.
7. **Release:** add deterministic artifact naming and optional CI publication.

See [PRD.md](./PRD.md) for the full product and technical specification.
