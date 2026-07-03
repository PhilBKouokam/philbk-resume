import { useEffect, useState } from 'react'
import { loadVariant } from '../content/index.js'
import Resume from '../components/resume/Resume.jsx'
import DocumentErrorBoundary from './DocumentErrorBoundary.jsx'

const DEFAULT_VARIANT_ID = 'fullstack'

function readRequestedVariantId() {
  return new URLSearchParams(window.location.search).get('variant') ?? DEFAULT_VARIANT_ID
}

export default function App() {
  const [state, setState] = useState({
    status: 'validating',
    variantId: readRequestedVariantId(),
  })

  useEffect(() => {
    let active = true

    loadVariant(state.variantId)
      .then((variant) => {
        if (active) {
          if (variant.status === 'published') document.title = variant.metadata.title
          setState({ status: 'ready', variantId: variant.id, variant })
        }
      })
      .catch((error) => {
        if (active) {
          setState({ status: 'failed', variantId: state.variantId, error })
        }
      })

    return () => {
      active = false
    }
  }, [state.variantId])

  if (state.status === 'ready' && state.variant.status === 'published') {
    return (
      <DocumentErrorBoundary>
        <Resume model={state.variant} />
      </DocumentErrorBoundary>
    )
  }

  return (
    <main>
      <h1>Resume Renderer</h1>
      <dl>
        <dt>Variant</dt>
        <dd>{state.variantId}</dd>
        <dt>Validation</dt>
        <dd>{state.status === 'ready' ? 'Passed' : state.status}</dd>
        {state.status === 'ready' ? (
          <>
            <dt>Document status</dt>
            <dd>{state.variant.status}</dd>
          </>
        ) : null}
      </dl>
      {state.error ? <pre role="alert">{state.error.message}</pre> : null}
    </main>
  )
}
