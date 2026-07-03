import SkillGroup from './SkillGroup.jsx'

export default function SkillsList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <SkillGroup key={item.id} group={item} />
      ))}
    </ul>
  )
}
