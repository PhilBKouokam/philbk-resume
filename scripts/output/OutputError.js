export class OutputError extends Error {
  constructor(code, message, details = {}) {
    super(message)
    this.name = 'OutputError'
    this.code = code
    this.details = details
  }
}
