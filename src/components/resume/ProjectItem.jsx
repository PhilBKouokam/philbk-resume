import ExternalLink from '../primitives/ExternalLink.jsx'

export default function ProjectItem({ item }) {
  return (
    <li>
      <article aria-labelledby={`project-${item.id}`}>
        <h3 id={`project-${item.id}`}>{item.name}</h3>
        {item.links ? (
          <nav aria-label={item.linksLabel}>
            <ul>
              {item.links.map((link) => (
                <li key={link.id}>
                  <ExternalLink href={link.url}>{link.label}</ExternalLink>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
        {item.description ? <p>{item.description}</p> : null}
        {item.bullets ? (
          <ul data-project-bullets="">
            {item.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        ) : null}
        <ul data-technologies="">
          {item.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </article>
    </li>
  )
}
