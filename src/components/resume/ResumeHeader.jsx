import ExternalLink from '../primitives/ExternalLink.jsx'

export default function ResumeHeader({ header }) {
  return (
    <header data-resume-header="">
      <h1 id="resume-name">{header.name}</h1>
      <p>{header.headline}</p>
      <address>
        <p>{header.location}</p>
        <nav aria-label={header.linksLabel}>
          <ul>
            {header.links.map((link) => (
              <li key={link.id} data-link-id={link.id}>
                <ExternalLink href={link.url}>{link.label}</ExternalLink>
              </li>
            ))}
          </ul>
        </nav>
      </address>
    </header>
  )
}
