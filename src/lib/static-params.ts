import fs from 'fs/promises'
import path from 'path'

async function readDb() {
  const dbPath = path.join(process.cwd(), 'mock-db', 'db.json')
  const raw = await fs.readFile(dbPath, 'utf-8')
  return JSON.parse(raw)
}

export async function getStaticParamsForCollection(collection: string) {
  try {
    const db = await readDb()
    const items = Array.isArray(db?.[collection]) ? db[collection] : []
    return items
      .filter((item: any) => item?.id !== undefined && item?.id !== null)
      .map((item: any) => ({ id: String(item.id) }))
  } catch {
    return []
  }
}

export async function getStaticItemById(collection: string, id: string) {
  try {
    const db = await readDb()
    const items = Array.isArray(db?.[collection]) ? db[collection] : []
    return items.find((item: any) => String(item?.id) === String(id)) ?? null
  } catch {
    return null
  }
}
