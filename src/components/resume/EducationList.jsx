import EducationItem from './EducationItem.jsx'

export default function EducationList({ items, locale }) {
  return (
    <ul>
      {items.map((item) => (
        <EducationItem key={item.id} item={item} locale={locale} />
      ))}
    </ul>
  )
}
