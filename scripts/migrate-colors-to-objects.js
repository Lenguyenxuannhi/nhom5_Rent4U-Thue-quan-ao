#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

const VI_NAME_MAP = {
  'do': '#ff0000',
  'đo': '#ff0000',
  'xanh': '#0000ff',
  'xanhla': '#00a86b',
  'xanh lá': '#00a86b',
  'trang': '#ffffff',
  'trắng': '#ffffff',
  'den': '#000000',
  'đen': '#000000',
  'vang': '#ffff00',
  'vàng': '#ffff00',
  'hong': '#ffc0cb',
  'hồng': '#ffc0cb',
  'tim': '#800080',
  'tím': '#800080',
  'nau': '#a52a2a',
  'nâu': '#a52a2a',
  'cam': '#ffa500',
  'xam': '#808080',
  'xám': '#808080',
  'be': '#f5f5dc'
}

function normalizeText(s) {
  return String(s || '')
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '')
}

function resolveHexFromString(v) {
  if (!v) return undefined
  const s = String(v).trim()
  if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(s)) return s
  const norm = normalizeText(s)
  if (VI_NAME_MAP[norm]) return VI_NAME_MAP[norm]
  return undefined
}

function toColorObject(item) {
  if (!item && item !== 0) return { name: '', hex: undefined }
  if (typeof item === 'string') {
    const name = item
    const hex = resolveHexFromString(item)
    return { name, hex }
  }
  if (typeof item === 'object') {
    const name = item.name ?? item.hex ?? ''
    const hexCandidate = item.hex ?? (item.name ? resolveHexFromString(item.name) : undefined)
    const hex = hexCandidate && /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(hexCandidate) ? hexCandidate : undefined
    return { name, hex }
  }
  return { name: String(item), hex: undefined }
}

function processProductsArray(products) {
  if (!Array.isArray(products)) return 0
  let changed = 0
  for (const p of products) {
    if (!p || typeof p !== 'object') continue
    if (!Array.isArray(p.colors)) continue
    const newColors = p.colors.map((c) => toColorObject(c))
    // detect change
    const same = JSON.stringify(newColors) === JSON.stringify(p.colors)
    if (!same) {
      p.colors = newColors
      changed++
    }
  }
  return changed
}

function backupFile(filePath) {
  const bak = `${filePath}.bak-${Date.now()}`
  fs.copyFileSync(filePath, bak)
  return bak
}

function migrateFile(filePath) {
  try {
    const raw = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(raw)
    let totalChanged = 0

    if (Array.isArray(data)) {
      // array of products
      totalChanged += processProductsArray(data)
    } else if (data && typeof data === 'object') {
      if (Array.isArray(data.products)) {
        totalChanged += processProductsArray(data.products)
      }
      // also check top-level arrays named 'items' or similar? skip for now
    }

    if (totalChanged > 0) {
      const bak = backupFile(filePath)
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8')
      console.log(`Migrated ${totalChanged} product(s) in ${filePath} (backup: ${bak})`)
      return true
    }
    console.log(`No changes needed for ${filePath}`)
    return false
  } catch (err) {
    console.error(`Failed to process ${filePath}: ${err.message}`)
    return false
  }
}

function findBackupJsonFiles(dir) {
  try {
    if (!fs.existsSync(dir)) return []
    return fs.readdirSync(dir).filter((f) => f.endsWith('.json')).map((f) => path.join(dir, f))
  } catch {
    return []
  }
}

const targets = []
const root = process.cwd()
const filesToCheck = [
  path.join(root, 'mock-db', 'db.json'),
  path.join(root, 'public', 'mock-db', 'db.json'),
]

for (const f of filesToCheck) if (fs.existsSync(f)) targets.push(f)

const backupsDirs = [path.join(root, 'mock-db', 'backups'), path.join(root, 'public', 'mock-db', 'backups')]
for (const d of backupsDirs) {
  const js = findBackupJsonFiles(d)
  for (const j of js) targets.push(j)
}

if (targets.length === 0) {
  console.log('No target files found to migrate.')
  process.exit(0)
}

let totalFiles = 0
let totalMigrated = 0
for (const t of targets) {
  totalFiles++
  if (migrateFile(t)) totalMigrated++
}

console.log(`Done. Checked ${totalFiles} files, migrated ${totalMigrated} files.`)
