import DateRange from '../primitives/DateRange.jsx'
import ExternalLink from '../primitives/ExternalLink.jsx'

export default function CertificationItem({ item, locale }) {
  const name = item.url ? (
    <ExternalLink href={item.url}>{item.name}</ExternalLink>
  ) : (
    item.name
  )

  return (
    <li>
      <article aria-labelledby={`certification-${item.id}`}>
        <h3 id={`certification-${item.id}`}>{name}</h3>
        <p>{item.issuer}</p>
        <DateRange date={item.date} locale={locale} />
      </article>
    </li>
  )
}
