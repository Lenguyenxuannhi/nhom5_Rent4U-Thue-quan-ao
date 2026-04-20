export type Session = { user: any; role?: string } | null

const AUTH_KEY = 'auth'
const LEGACY_AUTH_KEY = 'r4_auth_user'

export function sanitizeUser(user: any) {
  if (!user) return null
  const { password, passwordHash, salt, passwordAlgo, ...safe } = user
  return safe
}

async function digestPassword(password: string, salt: string) {
  const bytes = new TextEncoder().encode(`${salt}:${password}`)
  const hash = await crypto.subtle.digest('SHA-512', bytes)
  return Array.from(new Uint8Array(hash))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('')
}

export function getSession(): Session {
  try {
    const raw = localStorage.getItem(AUTH_KEY)
    if (raw) return JSON.parse(raw)

    const legacy = localStorage.getItem(LEGACY_AUTH_KEY)
    if (!legacy) return null
    const user = JSON.parse(legacy)
    return { user, role: user?.role }
  } catch {
    return null
  }
}

export function setSession(session: Session) {
  try {
    if (!session) {
      localStorage.removeItem(AUTH_KEY)
      localStorage.removeItem(LEGACY_AUTH_KEY)
      return
    }

    const payload = { user: session.user, role: session.role ?? session.user?.role }
    localStorage.setItem(AUTH_KEY, JSON.stringify(payload))
    localStorage.setItem(LEGACY_AUTH_KEY, JSON.stringify(payload.user))
  } catch {
    // ignore
  }
}

export async function loginWithCredentials(identifier: string, password: string) {
  const { getAll } = await import('@/lib/client-db')
  const users = await getAll('users')
  if (!Array.isArray(users)) return null

  const found = users.find(
    (user: any) => user?.email === identifier || user?.username === identifier
  )
  if (!found) return null

  if (found.password) {
    return found.password === password ? sanitizeUser(found) : null
  }

  if (found.passwordHash && found.salt) {
    const digest = await digestPassword(password, found.salt)
    return digest === found.passwordHash ? sanitizeUser(found) : null
  }

  return null
}

export async function registerLocalUser(input: {
  username: string
  email?: string
  password: string
  role: string
  name?: string
  avatar?: string
}) {
  const { getAll, save } = await import('@/lib/client-db')
  const users = await getAll('users')
  const list = Array.isArray(users) ? users : []

  if (list.find((user: any) => user?.username === input.username)) {
    throw new Error('Username đã tồn tại.')
  }

  if (input.email && list.find((user: any) => user?.email === input.email)) {
    throw new Error('Email đã được sử dụng.')
  }

  const salt = crypto.randomUUID().replace(/-/g, '')
  const passwordHash = await digestPassword(input.password, salt)
  const saved = await save('users', {
    id: Date.now().toString(),
    username: input.username,
    name: input.name || input.username || input.email,
    email: input.email || `${input.username}@example.com`,
    role: input.role,
    avatar: input.avatar,
    passwordHash,
    salt,
    passwordAlgo: 'sha512',
    createdAt: new Date().toISOString(),
  })

  return sanitizeUser(saved)
}

export default { getSession, setSession, sanitizeUser, loginWithCredentials, registerLocalUser }
