import fs from 'fs/promises'
import path from 'path'

const DB_PATH = path.join(process.cwd(), 'mock-db', 'db.json')

export async function readDb() {
  try {
    const raw = await fs.readFile(DB_PATH, 'utf-8')
    return JSON.parse(raw)
  } catch (err) {
    if ((err as any).code === 'ENOENT') return {}
    throw err
  }
}

export async function writeDb(db: any) {
  await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2), 'utf-8')
}

export async function getCollection<T = any>(name: string): Promise<T[]> {
  const db = await readDb()
  return db[name] ?? []
}

export async function getItem(name: string, id: string) {
  const list = await getCollection(name)
  return list.find((x: any) => x && x.id === id) ?? null
}

export async function upsertItem(name: string, item: any) {
  const db = await readDb()
  db[name] = db[name] ?? []
  if (!item.id) item.id = Date.now().toString()
  const idx = db[name].findIndex((x: any) => x && x.id === item.id)
  if (idx === -1) {
    db[name].push(item)
  } else {
    db[name][idx] = { ...db[name][idx], ...item }
  }
  await writeDb(db)
  return item
}

export async function deleteItem(name: string, id: string) {
  const db = await readDb()
  db[name] = db[name] ?? []
  const idx = db[name].findIndex((x: any) => x && x.id === id)
  if (idx === -1) return false
  db[name].splice(idx, 1)
  await writeDb(db)
  return true
}

export default {
  readDb,
  writeDb,
  getCollection,
  getItem,
  upsertItem,
  deleteItem,
}
