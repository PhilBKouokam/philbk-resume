export default function SkillGroup({ group }) {
  return (
    <li>
      <section aria-labelledby={`skill-group-${group.id}`}>
        <h3 id={`skill-group-${group.id}`}>{group.label}</h3>
        <ul>
          {group.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>
    </li>
  )
}
