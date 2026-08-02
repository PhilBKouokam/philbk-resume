# Résumé Engineering System

`philbk-resume` is a software system whose product happens to be a résumé. It applies production-engineering practices—explicit architecture, structured content, validation gates, deterministic builds, and automated verification—to create a concise, ATS-friendly document that can evolve without sacrificing correctness or reproducibility.

Rather than treating the résumé as a manually edited file, the repository treats it as a compiled and tested artifact. Content is modeled as data, presentation is isolated behind a semantic renderer, and every published PDF must satisfy the same repeatable pipeline. The result is both a professional document and a demonstration of how I design maintainable software systems.

The repository includes the canonical `fullstack` résumé and published job-targeted variants. The `frontend`, `startup`, and `cloud` variants remain drafts.

## Why I Built This

I wanted to engineer résumé creation with the same rigor I use to build production software. A résumé changes over time, targets different audiences, and must remain accurate across formats—concerns that benefit from clear boundaries, enforceable contracts, and reliable automation.

Building it as a system turns each update into a controlled change instead of a manual formatting exercise. The architecture makes content reusable, output reproducible, failures visible, and future variants inexpensive to maintain.

## Engineering Philosophy

Documents deserve the same engineering discipline as applications:

- **Validation:** content and generated artifacts should fail clearly when they violate defined contracts.
- **Maintainability:** facts, editorial decisions, rendering, presentation, and output concerns should evolve independently.
- **Repeatability:** the same validated inputs should produce the same verified artifact.
- **Structured data:** content should be modeled explicitly rather than embedded in templates or duplicated across variants.
- **Testing:** correctness includes semantics, layout, metadata, links, page geometry, and deterministic bytes—not merely visual appearance.

## Key Features

- Canonical, structured résumé content separated from presentation.
- Schema validation with readable failures for malformed content.
- Variant manifests that control selection and section order without renderer changes.
- One semantic, accessible HTML document for browser and PDF output.
- Editorial single-column design with dedicated screen and print styles.
- Deterministic US Letter PDF generation through pinned Chromium.
- Automated checks for page size, page count, overflow, selectable text, links, metadata, and repeated-byte determinism.
- ATS-oriented markup with conventional headings, lists, links, dates, and logical source order.

## Architecture Overview

The architecture is organized as a deterministic document compiler. Canonical facts and editorial choices are structured inputs; schemas and normalization establish a validated, immutable intermediate model; and a semantic document engine renders that model for both browser and print. The Output Engine then produces and verifies the final artifact, making correctness a property of the whole pipeline rather than a manual check at the end.

Explicit boundaries keep the system understandable, testable, and safe to change:

- `content/` owns facts, wording, ordering, and variant strategy.
- `components/` owns semantic rendering and contains no résumé copy.
- `styles/` owns document presentation and media-specific behavior.
- `validation/` protects content, semantics, and print contracts.
- `scripts/output/` builds and validates production artifacts.

## Architecture Diagram

![Architecture pipeline](assets/screenshots/architecture-pipeline.png)

_The complete path from variant selection and schema validation to semantic rendering, deterministic PDF generation, and artifact validation._

```text
Variant registry
      ↓
Schema validation
      ↓
Immutable normalized model
      ↓
Semantic document engine
      ↓
Screen / print design system
      ↓
Pinned headless Chromium
      ↓
Canonical PDF metadata
      ↓
Output validation
      ↓
dist/pdf/<validated filename>
```

## Browser Preview

![Browser preview](assets/screenshots/browser-preview.png)

_The browser is the development environment: it renders the selected validated variant through the production document engine and shared design system._

Run `npm run dev`, then select a registered variant with the `variant` query parameter when needed:

```text
http://localhost:5173/?variant=fullstack
```

## Generated PDF

![Generated PDF](assets/screenshots/generated-pdf.png)

_The one-page US Letter artifact is generated from the same semantic document as the browser preview—there is no second template or PDF-specific component tree._

The exported PDF remains selectable, searchable, hyperlink-enabled, and ATS-friendly. Canonical metadata and deterministic filenames come from validated content. Repeated exports are byte-checked for determinism before an artifact is accepted.

## Project Structure

```text
philbk-resume/
├── scripts/
│   ├── export.js                 # export command entry point
│   ├── validate-content.js       # registry-wide content validation
│   └── output/                   # Chromium export and PDF validation
├── src/
│   ├── app/                      # variant selection and application boundary
│   ├── components/
│   │   ├── primitives/           # links and date rendering
│   │   └── resume/               # semantic document engine
│   ├── content/
│   │   ├── shared/               # canonical facts and résumé copy
│   │   ├── variants/             # published and draft manifests
│   │   ├── normalize.js          # immutable render-model normalization
│   │   ├── schema.js             # content contract
│   │   └── index.js              # variant registry and content API
│   ├── styles/                   # tokens, reset, screen, résumé, and print CSS
│   └── validation/               # content, document, ATS, and print tests
├── README.md
├── PRD.md
└── package.json
```

## Validation Pipeline

Every production export passes through the following gates:

1. Load the requested registered variant.
2. Validate required content, IDs, URLs, metadata, dates, and section order.
3. Normalize and deeply freeze the render model.
4. Build and serve the Vite production bundle locally.
5. Render the existing application with print media enabled.
6. Reject horizontal overflow, page overflow, browser warnings, and unexpected underfill.
7. Generate a tagged US Letter PDF with canonical metadata.
8. Verify page geometry, extracted text, link annotations, metadata, filename, and deterministic bytes.
9. Publish the validated artifact atomically to `dist/pdf/`.

Draft and invalid variants are rejected before browser export.

## Development Workflow

AI-assisted development accelerated investigation, architecture exploration, implementation, debugging, and documentation throughout the project. It shortened feedback loops and made it faster to compare approaches, trace failures, and refine the system.

Validation, testing, architectural decisions, and final verification remained under human review. AI increased the speed of engineering work; it did not replace responsibility for the design, correctness, or quality of the published artifact.

## Export Commands

```bash
# Export the default published variant
npm run export:pdf

# Export one named published variant
npm run export -- --variant fullstack

# Export every published variant
npm run export:all
```

The v1.0 artifact is written to:

```text
dist/pdf/phillip-bryan-kouokam-fullstack.pdf
```

## Variant System

Variants are ordered content manifests, not component forks. Each manifest uses the same schema, normalization stage, semantic renderer, styles, and Output Engine.

- `fullstack` and registered job-targeted variants: published and exportable.
- `frontend`: draft.
- `startup`: draft.
- `cloud`: draft.

Canonical facts live under `src/content/shared/`. A variant selects and orders those facts while owning target-specific editorial choices. Publishing another variant does not require redesigning the application.

## Development

### Requirements

- Node.js 22.12 or newer.
- npm.
- Playwright's pinned Chromium build for PDF export.

### Setup

```bash
npm install
npx playwright install chromium
npm run dev
```

### Quality Commands

```bash
npm run lint
npm run test
npm run validate:content
npm run build
npm run preview
```

See [PRD.md](./PRD.md) for the product requirements and architectural decisions.

## License

This repository does not currently include a software license.
