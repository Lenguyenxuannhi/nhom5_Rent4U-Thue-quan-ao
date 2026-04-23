#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

// Resolve the Vite project's mock-data: ../../Hehe/mock-data/db.json
const viteDbPath = path.resolve(__dirname, '..', '..', 'Hehe', 'mock-data', 'db.json')
const targetDbPath = path.resolve(__dirname, '..', 'mock-db', 'db.json')

function readJson(p) {
  if (!fs.existsSync(p)) return null
  try { return JSON.parse(fs.readFileSync(p, 'utf-8')) } catch (e) { console.error('Failed to parse', p, e); process.exit(1) }
}

function writeJson(p, obj) {
  fs.mkdirSync(path.dirname(p), { recursive: true })
  fs.writeFileSync(p, JSON.stringify(obj, null, 2), 'utf-8')
}

const viteData = readJson(viteDbPath)
if (!viteData) {
  console.error('Vite DB not found at', viteDbPath)
  process.exit(1)
}

const db = readJson(targetDbPath) || { users: [], products: [], orders: [], categories: [], settings: {} }

const summary = {}

for (const key of Object.keys(viteData)) {
  const value = viteData[key]
  if (!Array.isArray(value)) {
    db[key] = { ...(db[key] || {}), ...value }
    summary[key] = 'object merged'
    continue
  }
  db[key] = db[key] || []
  const existingIds = new Set(db[key].map(i => String(i.id)))
  let added = 0
  for (const item of value) {
    const id = item.id ?? item._id ?? null
    if (id && existingIds.has(String(id))) continue
    db[key].push(item)
    if (id) existingIds.add(String(id))
    added++
  }
  summary[key] = `${added} added, now ${db[key].length}`
}

writeJson(targetDbPath, db)

const backupsDir = path.resolve(__dirname, '..', 'mock-db', 'backups')
fs.mkdirSync(backupsDir, { recursive: true })
const ts = new Date().toISOString().replace(/[:.]/g, '-')
const backupPath = path.join(backupsDir, `import-from-vite-${ts}.json`)
fs.writeFileSync(backupPath, JSON.stringify(viteData, null, 2), 'utf-8')

console.log('Import complete. Summary:', summary)
console.log('Wrote mock DB to', targetDbPath)
console.log('Vite DB backed up to', backupPath)
