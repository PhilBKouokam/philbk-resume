export default function Summary({ summary }) {
  return (
    <section aria-labelledby="summary-heading">
      <h2 id="summary-heading">{summary.heading}</h2>
      <p>{summary.text}</p>
    </section>
  )
}
