import ResumeHeader from './ResumeHeader.jsx'
import ResumeSection from './ResumeSection.jsx'
import Summary from './Summary.jsx'
import { DocumentRenderError } from './DocumentRenderError.js'

export default function Resume({ model }) {
  if (model?.status !== 'published') {
    throw new DocumentRenderError('Resume requires a normalized published model.', {
      receivedStatus: model?.status,
    })
  }

  return (
    <main data-resume-document="" lang={model.locale} aria-labelledby="resume-name">
      <ResumeHeader header={model.header} />
      <Summary summary={model.summary} />
      {model.sections.map((section) => (
        <ResumeSection
          key={section.id}
          section={section}
          locale={model.locale}
          presentLabel={model.labels.present}
        />
      ))}
    </main>
  )
}
