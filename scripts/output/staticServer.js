import { createReadStream } from 'node:fs'
import { stat } from 'node:fs/promises'
import { createServer } from 'node:http'
import { extname, resolve, sep } from 'node:path'
import { OutputError } from './OutputError.js'

const MIME_TYPES = Object.freeze({
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
})

export async function startStaticServer(rootDirectory) {
  const root = resolve(rootDirectory)

  try {
    if (!(await stat(root)).isDirectory()) throw new Error('Path is not a directory')
  } catch (error) {
    throw new OutputError(
      'INVALID_BUILD_DIRECTORY',
      `Production build directory is unavailable: ${root}. Run npm run build first.`,
      { cause: error.message },
    )
  }

  const server = createServer(async (request, response) => {
    try {
      const requestUrl = new URL(request.url, 'http://127.0.0.1')
      const requestedPath = requestUrl.pathname === '/' ? '/index.html' : requestUrl.pathname
      const filePath = resolve(root, `.${decodeURIComponent(requestedPath)}`)

      if (filePath !== root && !filePath.startsWith(`${root}${sep}`)) {
        response.writeHead(403).end('Forbidden')
        return
      }

      const file = await stat(filePath)
      if (!file.isFile()) throw new Error('Not a file')

      response.writeHead(200, {
        'Cache-Control': 'no-store',
        'Content-Type': MIME_TYPES[extname(filePath)] ?? 'application/octet-stream',
      })
      createReadStream(filePath).pipe(response)
    } catch {
      response.writeHead(404).end('Not found')
    }
  })

  try {
    await new Promise((resolveListening, reject) => {
      server.once('error', reject)
      server.listen(0, '127.0.0.1', resolveListening)
    })
  } catch (error) {
    throw new OutputError('SERVER_START_FAILED',
      `Local production server could not start: ${error.message}`, { cause: error.code })
  }

  const address = server.address()
  return {
    origin: `http://127.0.0.1:${address.port}`,
    close: () => new Promise((resolveClose, reject) => server.close((error) => {
      if (error) reject(error)
      else resolveClose()
    })),
  }
}
