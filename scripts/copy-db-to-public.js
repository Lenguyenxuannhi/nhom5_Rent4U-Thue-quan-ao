const fs = require('fs')
const path = require('path')

const SRC = path.join(process.cwd(), 'mock-db', 'db.json')
const DEST_DIR = path.join(process.cwd(), 'public', 'mock-db')
const DEST = path.join(DEST_DIR, 'db.json')

try {
  fs.mkdirSync(DEST_DIR, { recursive: true })
  fs.copyFileSync(SRC, DEST)
  console.log(`Copied mock DB to ${DEST}`)
} catch (err) {
  console.error('Failed to copy mock-db/db.json to public/', err)
  process.exit(1)
}
