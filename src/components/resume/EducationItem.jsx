import DateRange from '../primitives/DateRange.jsx'

export default function EducationItem({ item, locale }) {
  return (
    <li>
      <article aria-labelledby={`education-${item.id}`}>
        <h3 id={`education-${item.id}`}>{item.credential}</h3>
        <p>{item.institution}</p>
        {item.field ? <p>{item.field}</p> : null}
        {item.location ? <p>{item.location}</p> : null}
        <DateRange date={item.date} locale={locale} />
      </article>
    </li>
  )
}
