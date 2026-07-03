import CertificationItem from './CertificationItem.jsx'

export default function CertificationList({ items, locale }) {
  return (
    <ul>
      {items.map((item) => (
        <CertificationItem key={item.id} item={item} locale={locale} />
      ))}
    </ul>
  )
}
