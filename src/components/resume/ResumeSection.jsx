import CertificationList from './CertificationList.jsx'
import EducationList from './EducationList.jsx'
import ExperienceList from './ExperienceList.jsx'
import ProjectList from './ProjectList.jsx'
import SkillsList from './SkillsList.jsx'
import { DocumentRenderError } from './DocumentRenderError.js'

const sectionRenderers = Object.freeze({
  skills: SkillsList,
  experience: ExperienceList,
  projects: ProjectList,
  certifications: CertificationList,
  education: EducationList,
})

export default function ResumeSection({ section, locale, presentLabel }) {
  const SectionContent = sectionRenderers[section.type]

  if (!SectionContent) {
    throw new DocumentRenderError(`No renderer exists for section type "${section.type}".`, {
      sectionId: section.id,
      sectionType: section.type,
    })
  }

  const headingId = `section-${section.id}`

  return (
    <section aria-labelledby={headingId} data-section-type={section.type}>
      <h2 id={headingId}>{section.heading}</h2>
      <SectionContent items={section.items} locale={locale} presentLabel={presentLabel} />
    </section>
  )
}
