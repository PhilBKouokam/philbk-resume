import { readFile } from 'node:fs/promises'
import { describe, expect, it } from 'vitest'

describe('print stylesheet', () => {
  it('defines US Letter portrait geometry and the shared page margin', async () => {
    const css = await readFile(new URL('../styles/print.css', import.meta.url), 'utf8')

    expect(css).toContain('size: Letter portrait')
    expect(css).toContain('margin: var(--page-margin)')
    expect(css).toContain("width: calc(var(--page-width) - (2 * var(--page-margin)))")
  })

  it('removes preview chrome and protects document units from page breaks', async () => {
    const css = await readFile(new URL('../styles/print.css', import.meta.url), 'utf8')

    expect(css).toContain('width: 100%')
    expect(css).toContain('--font-size-body: 8.5pt')
    expect(css).toContain('--page-margin: 0.4in')
    expect(css).toContain('outline: none')
    expect(css).toContain('break-inside: avoid')
    expect(css).toContain('break-after: avoid')
  })
})
