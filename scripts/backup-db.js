#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

const dbPath = path.resolve(__dirname, '..', 'mock-db', 'db.json')

if (!fs.existsSync(dbPath)) {
  console.error('No DB found at', dbPath)
  process.exit(1)
}

const backupsDir = path.resolve(__dirname, '..', 'mock-db', 'backups')
fs.mkdirSync(backupsDir, { recursive: true })
const ts = new Date().toISOString().replace(/[:.]/g, '-')
const out = path.join(backupsDir, `db-backup-${ts}.json`)
fs.copyFileSync(dbPath, out)
console.log('Backup written to', out)
