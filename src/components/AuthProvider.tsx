"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { getSession, setSession } from '@/lib/auth-client';
import { getById, save } from '@/lib/client-db';

export type Role = 'user' | 'admin' | 'shopowner';

export type User = {
  id?: string;
  name: string;
  username?: string;
  email: string;
  role: Role;
  avatar?: string;
  phone?: string;
  address?: string;
  cardNumber?: string;
  bank?: string;
};

type AuthContextType = {
  user: User | null;
  login: (u: User) => void;
  logout: () => void;
  update: (patch: Partial<User>) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    try {
      const session = getSession();
      if (session?.user) setUser(session.user);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      if (user) setSession({ user, role: user.role });
      else setSession(null);
      // notify other parts of the app (header, storage helpers)
      try { window.dispatchEvent(new CustomEvent('r4:auth-changed', { detail: { user } })); } catch {}
    } catch {}
  }, [user]);

  // when a user is present and has an id, refresh from the client-side data store
  useEffect(() => {
      if (!user || !user.id) return;
      let canceled = false;
      ;(async () => {
        try {
          const current = await getById('users', String(user.id))
          if (!current) return
          const { password, passwordHash, salt, passwordAlgo, ...safe } = current
          // avoid unnecessary setUser to prevent loops
          let changed = false
          for (const k of Object.keys(safe)) {
            if ((user as any)[k] !== (safe as any)[k]) { changed = true; break }
          }
          if (changed && !canceled) {
            setUser((prev) => (prev ? { ...prev, ...safe } : prev))
          }
        } catch {
          // ignore
        }
      })()
      return () => { canceled = true }
    }, [user?.id])

  const login = (u: User) => setUser(u);
  const logout = () => setUser(null);
  const update = (patch: Partial<User>) => setUser((prev) => {
    if (!prev) return prev
    const next = { ...prev, ...patch }
    ;(async () => {
      try {
        if (next.id) {
          await save('users', next)
        }
      } catch {
        // ignore
      }
    })()
    return next
  });

  return <AuthContext.Provider value={{ user, login, logout, update }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
