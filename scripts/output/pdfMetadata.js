import { PDFDocument } from 'pdf-lib'

const CANONICAL_DATE = new Date('2000-01-01T00:00:00.000Z')

export async function applyCanonicalMetadata(pdfBytes, model) {
  const document = await PDFDocument.load(pdfBytes, { updateMetadata: false })

  document.setTitle(model.metadata.title, { showInWindowTitleBar: true })
  document.setSubject(model.metadata.description)
  document.setAuthor(model.header.name)
  document.setCreator('philbk-resume')
  document.setProducer('philbk-resume Output Engine')
  document.setCreationDate(CANONICAL_DATE)
  document.setModificationDate(CANONICAL_DATE)

  return document.save({ addDefaultPage: false, useObjectStreams: false })
}
