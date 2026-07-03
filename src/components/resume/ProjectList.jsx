import ProjectItem from './ProjectItem.jsx'

export default function ProjectList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <ProjectItem key={item.id} item={item} />
      ))}
    </ul>
  )
}
