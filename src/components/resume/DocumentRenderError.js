export class DocumentRenderError extends Error {
  constructor(message, details = {}) {
    super(message)
    this.name = 'DocumentRenderError'
    this.details = details
  }
}
