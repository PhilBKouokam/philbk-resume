export default function ExternalLink({ children, href }) {
  return (
    <a href={href} rel="external">
      {children}
    </a>
  )
}
