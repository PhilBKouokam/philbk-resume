import DateRange from '../primitives/DateRange.jsx'

export default function ExperienceItem({ item, locale, presentLabel }) {
  return (
    <li>
      <article aria-labelledby={`experience-${item.id}`}>
        <h3 id={`experience-${item.id}`}>{item.role}</h3>
        <p>{item.organization}</p>
        <p>{item.location}</p>
        <DateRange
          startDate={item.startDate}
          endDate={item.endDate}
          locale={locale}
          presentLabel={presentLabel}
        />
        <ul data-accomplishments="">
          {item.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </article>
    </li>
  )
}
