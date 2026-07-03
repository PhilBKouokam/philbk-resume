import ExperienceItem from './ExperienceItem.jsx'

export default function ExperienceList({ items, locale, presentLabel }) {
  return (
    <ul>
      {items.map((item) => (
        <ExperienceItem
          key={item.id}
          item={item}
          locale={locale}
          presentLabel={presentLabel}
        />
      ))}
    </ul>
  )
}
