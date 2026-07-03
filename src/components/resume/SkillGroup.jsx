export default function SkillGroup({ group }) {
  return (
    <li>
      <section aria-labelledby={`skill-group-${group.id}`}>
        <h3 id={`skill-group-${group.id}`}>{group.label}</h3>
        <ul>
          {group.skills.map((skill, index) => (
            <li key={skill}>
              {skill}
              {index < group.skills.length - 1 ? (
                <span aria-hidden="true" data-skill-separator="">•</span>
              ) : null}
            </li>
          ))}
        </ul>
      </section>
    </li>
  )
}
