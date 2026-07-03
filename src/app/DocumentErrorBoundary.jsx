import { Component } from 'react'

export default class DocumentErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  render() {
    if (this.state.error) {
      return (
        <main>
          <h1>Document rendering failed</h1>
          <pre role="alert">{this.state.error.message}</pre>
        </main>
      )
    }

    return this.props.children
  }
}
