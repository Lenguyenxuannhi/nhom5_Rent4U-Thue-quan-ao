module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Downloads/nhom5rent4u/src/components/ThemeProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    theme: 'system',
    setTheme: ()=>{}
});
function useTheme() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
}
function ThemeProvider({ children }) {
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        try {
            if ("TURBOPACK compile-time truthy", 1) return 'system';
            //TURBOPACK unreachable
            ;
            const stored = undefined;
        } catch  {
            return 'system';
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const apply = (t)=>{
            const prefersDark = ("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            const resolved = t === 'system' ? ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'light' : t;
            if (resolved === 'dark') document.documentElement.classList.add('dark');
            else document.documentElement.classList.remove('dark');
        };
        apply(theme);
    }, [
        theme
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            if (theme === 'system') localStorage.removeItem('theme');
            else localStorage.setItem('theme', theme);
        } catch  {}
    }, [
        theme
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            theme,
            setTheme
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/nhom5rent4u/src/components/ThemeProvider.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/nhom5rent4u/src/lib/auth-client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getSession",
    ()=>getSession,
    "loginWithCredentials",
    ()=>loginWithCredentials,
    "registerLocalUser",
    ()=>registerLocalUser,
    "sanitizeUser",
    ()=>sanitizeUser,
    "setSession",
    ()=>setSession
]);
const AUTH_KEY = 'auth';
const LEGACY_AUTH_KEY = 'r4_auth_user';
function sanitizeUser(user) {
    if (!user) return null;
    const { password, passwordHash, salt, passwordAlgo, ...safe } = user;
    return safe;
}
async function digestPassword(password, salt) {
    const bytes = new TextEncoder().encode(`${salt}:${password}`);
    const hash = await crypto.subtle.digest('SHA-512', bytes);
    return Array.from(new Uint8Array(hash)).map((byte)=>byte.toString(16).padStart(2, '0')).join('');
}
function getSession() {
    try {
        const raw = localStorage.getItem(AUTH_KEY);
        if (raw) return JSON.parse(raw);
        const legacy = localStorage.getItem(LEGACY_AUTH_KEY);
        if (!legacy) return null;
        const user = JSON.parse(legacy);
        return {
            user,
            role: user?.role
        };
    } catch  {
        return null;
    }
}
function setSession(session) {
    try {
        if (!session) {
            localStorage.removeItem(AUTH_KEY);
            localStorage.removeItem(LEGACY_AUTH_KEY);
            return;
        }
        const payload = {
            user: session.user,
            role: session.role ?? session.user?.role
        };
        localStorage.setItem(AUTH_KEY, JSON.stringify(payload));
        localStorage.setItem(LEGACY_AUTH_KEY, JSON.stringify(payload.user));
    } catch  {
    // ignore
    }
}
async function loginWithCredentials(identifier, password) {
    const { getAll } = await __turbopack_context__.A("[project]/Downloads/nhom5rent4u/src/lib/client-db.ts [app-ssr] (ecmascript, async loader)");
    const users = await getAll('users');
    if (!Array.isArray(users)) return null;
    const found = users.find((user)=>user?.email === identifier || user?.username === identifier);
    if (!found) return null;
    if (found.password) {
        return found.password === password ? sanitizeUser(found) : null;
    }
    if (found.passwordHash && found.salt) {
        const digest = await digestPassword(password, found.salt);
        return digest === found.passwordHash ? sanitizeUser(found) : null;
    }
    return null;
}
async function registerLocalUser(input) {
    const { getAll, save } = await __turbopack_context__.A("[project]/Downloads/nhom5rent4u/src/lib/client-db.ts [app-ssr] (ecmascript, async loader)");
    const users = await getAll('users');
    const list = Array.isArray(users) ? users : [];
    if (list.find((user)=>user?.username === input.username)) {
        throw new Error('Username đã tồn tại.');
    }
    if (input.email && list.find((user)=>user?.email === input.email)) {
        throw new Error('Email đã được sử dụng.');
    }
    const salt = crypto.randomUUID().replace(/-/g, '');
    const passwordHash = await digestPassword(input.password, salt);
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
        createdAt: new Date().toISOString()
    });
    return sanitizeUser(saved);
}
const __TURBOPACK__default__export__ = {
    getSession,
    setSession,
    sanitizeUser,
    loginWithCredentials,
    registerLocalUser
};
}),
"[project]/Downloads/nhom5rent4u/src/lib/base-path.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBasePath",
    ()=>getBasePath,
    "productHref",
    ()=>productHref
]);
function getBasePath() {
    if ("TURBOPACK compile-time truthy", 1) return '';
    //TURBOPACK unreachable
    ;
}
function productHref(id) {
    const strId = String(id);
    const numericId = Number(strId);
    if (!isNaN(numericId) && numericId > 1776000000000) {
        return `/product/not-built?id=${encodeURIComponent(strId)}`;
    }
    return `/product/${encodeURIComponent(strId)}`;
}
}),
"[project]/Downloads/nhom5rent4u/src/lib/db-url.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DB_URL",
    ()=>DB_URL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$lib$2f$base$2d$path$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/src/lib/base-path.ts [app-ssr] (ecmascript)");
;
const DB_URL = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$lib$2f$base$2d$path$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBasePath"])()}/mock-db/db.json`;
}),
"[project]/Downloads/nhom5rent4u/src/lib/client-db.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getAll",
    ()=>getAll,
    "getById",
    ()=>getById,
    "remove",
    ()=>remove,
    "removeItem",
    ()=>removeItem,
    "save",
    ()=>save
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$lib$2f$db$2d$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/src/lib/db-url.ts [app-ssr] (ecmascript)");
;
function localKey(collection) {
    return `mock__${collection}`;
}
async function fetchDb() {
    const res = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$lib$2f$db$2d$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DB_URL"], {
        cache: 'no-store'
    });
    const data = await res.json();
    return data ?? {};
}
function readLocal(collection) {
    const raw = localStorage.getItem(localKey(collection));
    return raw ? JSON.parse(raw) : null;
}
async function readWritableCollection(collection) {
    const local = readLocal(collection);
    if (local !== null) return local;
    const data = await fetchDb();
    const base = data[collection];
    if (Array.isArray(base)) return [
        ...base
    ];
    if (base && typeof base === 'object') return {
        ...base
    };
    return [];
}
async function getAll(collection) {
    try {
        const data = await fetchDb();
        const base = Array.isArray(data[collection]) ? data[collection] : [];
        // For products collection, also include static products from data/products.ts
        let staticItems = [];
        if (collection === 'products') {
            try {
                const { products } = await __turbopack_context__.A("[project]/Downloads/nhom5rent4u/src/data/products.ts [app-ssr] (ecmascript, async loader)");
                staticItems = products ?? [];
            } catch  {}
        }
        // Merge: static items first, then db.json items (db.json overrides static)
        const merged = [
            ...staticItems
        ];
        for (const item of base){
            const exists = merged.findIndex((m)=>String(m.id) === String(item.id));
            if (exists === -1) merged.push(item);
            else merged[exists] = item;
        }
        const local = readLocal(collection);
        if (!local || !Array.isArray(local)) return merged;
        // Merge localStorage on top
        for (const item of local){
            const exists = merged.findIndex((m)=>String(m.id) === String(item.id));
            if (exists === -1) merged.push(item);
            else merged[exists] = item;
        }
        return merged;
    } catch  {
        return [];
    }
}
async function getById(collection, id) {
    const value = await getAll(collection);
    if (!Array.isArray(value)) return null;
    return value.find((item)=>String(item?.id) === String(id)) ?? null;
}
async function save(collection, item) {
    try {
        const current = await readWritableCollection(collection);
        if (!Array.isArray(current)) {
            const next = {
                ...current,
                ...item
            };
            localStorage.setItem(localKey(collection), JSON.stringify(next));
            return next;
        }
        const id = item?.id ?? Date.now().toString();
        const nextItem = {
            ...item,
            id
        };
        const index = current.findIndex((entry)=>String(entry?.id) === String(id));
        if (index === -1) current.push(nextItem);
        else current[index] = {
            ...current[index],
            ...nextItem
        };
        localStorage.setItem(localKey(collection), JSON.stringify(current));
        return nextItem;
    } catch  {
        return null;
    }
}
async function remove(collection, id) {
    try {
        const current = await readWritableCollection(collection);
        if (!Array.isArray(current)) return false;
        const filtered = current.filter((entry)=>String(entry?.id) !== String(id));
        localStorage.setItem(localKey(collection), JSON.stringify(filtered));
        return true;
    } catch  {
        return false;
    }
}
const removeItem = remove;
const __TURBOPACK__default__export__ = {
    getAll,
    getById,
    save,
    remove,
    removeItem
};
}),
"[project]/Downloads/nhom5rent4u/src/components/AuthProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/src/lib/auth-client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$lib$2f$client$2d$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/src/lib/client-db.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider({ children }) {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSession"])();
            if (session?.user) setUser(session.user);
        } catch  {
        // ignore
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            if (user) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setSession"])({
                user,
                role: user.role
            });
            else (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setSession"])(null);
            // notify other parts of the app (header, storage helpers)
            try {
                window.dispatchEvent(new CustomEvent('r4:auth-changed', {
                    detail: {
                        user
                    }
                }));
            } catch  {}
        } catch  {}
    }, [
        user
    ]);
    // when a user is present and has an id, refresh from the client-side data store
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!user || !user.id) return;
        let canceled = false;
        ;
        (async ()=>{
            try {
                const current = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$lib$2f$client$2d$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getById"])('users', String(user.id));
                if (!current) return;
                const { password, passwordHash, salt, passwordAlgo, ...safe } = current;
                // avoid unnecessary setUser to prevent loops
                let changed = false;
                for (const k of Object.keys(safe)){
                    if (user[k] !== safe[k]) {
                        changed = true;
                        break;
                    }
                }
                if (changed && !canceled) {
                    setUser((prev)=>prev ? {
                            ...prev,
                            ...safe
                        } : prev);
                }
            } catch  {
            // ignore
            }
        })();
        return ()=>{
            canceled = true;
        };
    }, [
        user?.id
    ]);
    const login = (u)=>setUser(u);
    const logout = ()=>setUser(null);
    const update = (patch)=>setUser((prev)=>{
            if (!prev) return prev;
            const next = {
                ...prev,
                ...patch
            };
            (async ()=>{
                try {
                    if (next.id) {
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$lib$2f$client$2d$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["save"])('users', next);
                    }
                } catch  {
                // ignore
                }
            })();
            return next;
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            login,
            logout,
            update
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/nhom5rent4u/src/components/AuthProvider.tsx",
        lineNumber: 93,
        columnNumber: 10
    }, this);
}
function useAuth() {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
    return ctx;
}
}),
"[project]/Downloads/nhom5rent4u/src/components/ThemeToggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/src/components/ThemeProvider.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function ThemeToggle() {
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const toggle = ()=>setTheme(theme === 'dark' ? 'light' : 'dark');
    // Render neutral placeholder until mounted to avoid hydration mismatch
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            "aria-label": "Toggle theme",
            className: "w-10 h-10 flex items-center justify-center rounded-full border border-border bg-card text-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "select-none opacity-0",
                children: "☀️"
            }, void 0, false, {
                fileName: "[project]/Downloads/nhom5rent4u/src/components/ThemeToggle.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/nhom5rent4u/src/components/ThemeToggle.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggle,
        "aria-label": "Toggle theme",
        className: "w-10 h-10 flex items-center justify-center rounded-full border border-border bg-card text-sm hover:opacity-95",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "select-none",
            children: theme === 'dark' ? '🌙' : '☀️'
        }, void 0, false, {
            fileName: "[project]/Downloads/nhom5rent4u/src/components/ThemeToggle.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/nhom5rent4u/src/components/ThemeToggle.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/nhom5rent4u/src/components/FloatingThemeToggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloatingThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/src/components/ThemeToggle.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function FloatingThemeToggle() {
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed bottom-6 right-6 z-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shadow-lg rounded-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    "aria-label": "Toggle theme",
                    className: "w-10 h-10 flex items-center justify-center rounded-full border border-border bg-card text-sm",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "select-none opacity-0",
                        children: "☀️"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nhom5rent4u/src/components/FloatingThemeToggle.tsx",
                        lineNumber: 15,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/nhom5rent4u/src/components/FloatingThemeToggle.tsx",
                    lineNumber: 14,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/nhom5rent4u/src/components/FloatingThemeToggle.tsx",
                lineNumber: 13,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/nhom5rent4u/src/components/FloatingThemeToggle.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-6 right-6 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "shadow-lg rounded-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Downloads/nhom5rent4u/src/components/FloatingThemeToggle.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/nhom5rent4u/src/components/FloatingThemeToggle.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/nhom5rent4u/src/components/FloatingThemeToggle.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/nhom5rent4u/src/lib/user-storage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Utility helpers to keep per-user localStorage keys for cart and favorites
__turbopack_context__.s([
    "addToCartFor",
    ()=>addToCartFor,
    "cartKeyFor",
    ()=>cartKeyFor,
    "clearCartFor",
    ()=>clearCartFor,
    "favoritesKeyFor",
    ()=>favoritesKeyFor,
    "getCurrentUserFromStorage",
    ()=>getCurrentUserFromStorage,
    "readCart",
    ()=>readCart,
    "readFavorites",
    ()=>readFavorites,
    "toggleFavoriteFor",
    ()=>toggleFavoriteFor,
    "writeCart",
    ()=>writeCart,
    "writeFavorites",
    ()=>writeFavorites
]);
function getCurrentUserFromStorage() {
    try {
        const auth = localStorage.getItem('auth');
        if (auth) {
            const session = JSON.parse(auth);
            if (session?.user) return session.user;
        }
        const raw = localStorage.getItem('r4_auth_user');
        return raw ? JSON.parse(raw) : null;
    } catch  {
        return null;
    }
}
function userIdFor(user) {
    if (!user) return null;
    return (user.email || user.username || user.name || '').replace(/\s+/g, '_') || null;
}
function favoritesKeyFor(user) {
    const id = userIdFor(user);
    return id ? `r4_favorites_${id}` : 'r4_favorites';
}
function cartKeyFor(user) {
    const id = userIdFor(user);
    return id ? `r4_cart_${id}` : 'r4_cart';
}
function readFavorites(user) {
    try {
        if (!user) return [];
        const raw = localStorage.getItem(favoritesKeyFor(user));
        return raw ? JSON.parse(raw) : [];
    } catch  {
        return [];
    }
}
function writeFavorites(user, arr) {
    try {
        if (!user) return;
        localStorage.setItem(favoritesKeyFor(user), JSON.stringify(arr));
        // notify same-window listeners
        try {
            window.dispatchEvent(new CustomEvent('r4:counts-changed'));
        } catch (e) {}
    } catch  {}
}
function toggleFavoriteFor(user, id) {
    if (!user) return null;
    const cur = readFavorites(user);
    const next = cur.includes(id) ? cur.filter((x)=>x !== id) : [
        ...cur,
        id
    ];
    writeFavorites(user, next);
    return next;
}
function readCart(user) {
    try {
        if (!user) return [];
        const raw = localStorage.getItem(cartKeyFor(user));
        return raw ? JSON.parse(raw) : [];
    } catch  {
        return [];
    }
}
function writeCart(user, arr) {
    try {
        if (!user) return;
        localStorage.setItem(cartKeyFor(user), JSON.stringify(arr));
        try {
            window.dispatchEvent(new CustomEvent('r4:counts-changed'));
        } catch (e) {}
    } catch  {}
}
function addToCartFor(user, productId, qty = 1, extras) {
    if (!user) return null;
    const cur = readCart(user);
    // merge if same product (and extras not provided)
    const canMerge = !extras;
    const found = canMerge ? cur.find((it)=>it.productId === productId) : null;
    let next;
    if (found) {
        next = cur.map((it)=>it.productId === productId ? {
                ...it,
                qty: (it.qty || 1) + qty
            } : it);
    } else {
        const item = {
            productId,
            qty,
            addedAt: new Date().toISOString()
        };
        if (extras && typeof extras === 'object') Object.assign(item, extras);
        next = [
            ...cur,
            item
        ];
    }
    writeCart(user, next);
    return next;
}
function clearCartFor(user) {
    if (!user) return;
    writeCart(user, []);
}
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Downloads/nhom5rent4u/src/components/ProfileMenu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfileMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/src/components/ThemeProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$components$2f$AuthProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/src/components/AuthProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$lib$2f$base$2d$path$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/src/lib/base-path.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function ProfileMenu() {
    const { user, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$components$2f$AuthProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const isDark = theme === 'dark';
    const basePath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$lib$2f$base$2d$path$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBasePath"])();
    const smallIconSrc = isDark ? `${basePath}/logo-icon-dark.png` : `${basePath}/logo-icon-light.png`;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function onDoc(e) {
            if (!ref.current) return;
            if (!ref.current.contains(e.target)) setOpen(false);
        }
        document.addEventListener('click', onDoc);
        return ()=>document.removeEventListener('click', onDoc);
    }, []);
    const handleLogout = ()=>{
        logout();
        router.push('/login');
    };
    if (!user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "/login",
                className: "text-sm text-primary",
                children: "Đăng nhập"
            }, void 0, false, {
                fileName: "[project]/Downloads/nhom5rent4u/src/components/ProfileMenu.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/nhom5rent4u/src/components/ProfileMenu.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        ref: ref,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setOpen((v)=>!v),
                className: "w-10 h-10 rounded-full overflow-hidden border border-border flex items-center justify-center",
                "aria-label": "Profile",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: user.avatar || smallIconSrc,
                    alt: user.name,
                    width: 40,
                    height: 40,
                    className: "object-cover"
                }, void 0, false, {
                    fileName: "[project]/Downloads/nhom5rent4u/src/components/ProfileMenu.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/nhom5rent4u/src/components/ProfileMenu.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 mt-2 w-48 bg-card border border-border rounded-md shadow-lg py-1 z-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 py-2 text-sm font-medium",
                        children: user.name
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nhom5rent4u/src/components/ProfileMenu.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/profile",
                        className: "block px-3 py-2 text-sm hover:bg-muted",
                        children: "Trang cá nhân"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nhom5rent4u/src/components/ProfileMenu.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this),
                    user.role === 'admin' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/admin",
                        className: "block px-3 py-2 text-sm hover:bg-muted",
                        children: "Admin Dashboard"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nhom5rent4u/src/components/ProfileMenu.tsx",
                        lineNumber: 57,
                        columnNumber: 37
                    }, this),
                    (user.role === 'shopowner' || user.role === 'admin') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/shop-owner",
                        className: "block px-3 py-2 text-sm hover:bg-muted",
                        children: "Quản lý cửa hàng"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nhom5rent4u/src/components/ProfileMenu.tsx",
                        lineNumber: 59,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleLogout,
                        className: "w-full text-left px-3 py-2 text-sm hover:bg-muted",
                        children: "Đăng xuất"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nhom5rent4u/src/components/ProfileMenu.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/nhom5rent4u/src/components/ProfileMenu.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/nhom5rent4u/src/components/ProfileMenu.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$components$2f$AuthProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/src/components/AuthProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$lib$2f$user$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/src/lib/user-storage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/src/components/ThemeProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$lib$2f$base$2d$path$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/src/lib/base-path.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$components$2f$ProfileMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/src/components/ProfileMenu.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
const NAV_LINKS = [
    {
        label: 'Trang chủ',
        to: '/'
    },
    {
        label: 'Sản phẩm',
        to: '/products'
    },
    {
        label: 'Xu hướng',
        to: '/trending'
    },
    {
        label: 'Liên hệ',
        to: '/contact'
    }
];
function Header() {
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return theme === 'dark';
        //TURBOPACK unreachable
        ;
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (theme === 'dark') {
            setIsDark(true);
            return;
        }
        if (theme === 'light') {
            setIsDark(false);
            return;
        }
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDark(mq.matches);
        const listener = (e)=>setIsDark(e.matches);
        if (mq.addEventListener) mq.addEventListener('change', listener);
        else mq.addListener(listener);
        return ()=>{
            if (mq.removeEventListener) mq.removeEventListener('change', listener);
            else mq.removeListener(listener);
        };
    }, [
        theme
    ]);
    const basePath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$lib$2f$base$2d$path$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBasePath"])();
    const smallIconSrc = isDark ? `${basePath}/logo-icon-dark.png` : `${basePath}/logo-icon-light.png`;
    const brandSrc = isDark ? `${basePath}/logo-brand-dark.png` : `${basePath}/logo-brand-light.png`;
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    const [cartCount, setCartCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [favCount, setFavCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$components$2f$AuthProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function readCounts() {
            try {
                const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$lib$2f$user$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readCart"])(user);
                setCartCount(Array.isArray(c) ? c.reduce((s, i)=>s + (i.qty || i.quantity || 1), 0) : 0);
            } catch (e) {
                setCartCount(0);
            }
            try {
                const f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$lib$2f$user$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readFavorites"])(user);
                setFavCount(Array.isArray(f) ? f.length : 0);
            } catch (e) {
                setFavCount(0);
            }
        }
        readCounts();
        const onStorage = (e)=>{
            if (e?.key === 'r4_cart' || e?.key === 'r4_favorites') readCounts();
        };
        const onCounts = ()=>readCounts();
        const onAuth = ()=>readCounts();
        window.addEventListener('storage', onStorage);
        window.addEventListener('r4:counts-changed', onCounts);
        window.addEventListener('r4:auth-changed', onAuth);
        return ()=>{
            window.removeEventListener('storage', onStorage);
            window.removeEventListener('r4:counts-changed', onCounts);
            window.removeEventListener('r4:auth-changed', onAuth);
        };
    }, [
        user
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "w-full border-b",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 py-4 flex items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    "aria-label": "Home",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            !mounted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 32,
                                    height: 32
                                }
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
                                lineNumber: 105,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: smallIconSrc,
                                alt: "logo icon",
                                width: 32,
                                height: 32,
                                priority: true,
                                className: "rounded-lg object-contain"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
                                lineNumber: 107,
                                columnNumber: 15
                            }, this),
                            !mounted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 120,
                                    height: 40
                                }
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
                                lineNumber: 110,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: brandSrc,
                                alt: "brand logo",
                                width: 120,
                                height: 40,
                                className: "object-contain"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
                                lineNumber: 112,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "hidden lg:flex items-center gap-8 ml-8",
                    children: NAV_LINKS.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: link.to,
                            className: `text-sm transition-colors ${pathname === link.to ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`,
                            children: link.label
                        }, link.to, false, {
                            fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
                            lineNumber: 119,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ml-auto flex items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        if (!user) router.push('/login');
                                        else router.push('/favorites');
                                    },
                                    className: "p-2 rounded hover:bg-muted inline-flex items-center",
                                    "aria-label": "Yêu thích",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-5 w-5",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12 21s-7.6-4.35-10-7.04C-0.1 10.37 3.6 4 8.57 6.01 10.46 6.87 12 8.4 12 8.4s1.54-1.53 3.43-2.39C20.4 4 24.1 10.37 22 13.96 19.6 16.65 12 21 12 21z"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
                                            lineNumber: 132,
                                            columnNumber: 115
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this),
                                favCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center",
                                    children: favCount
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
                                    lineNumber: 134,
                                    columnNumber: 30
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        if (!user) router.push('/login');
                                        else router.push('/cart');
                                    },
                                    className: "p-2 rounded hover:bg-muted inline-flex items-center",
                                    "aria-label": "Giỏ hàng",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-5 w-5",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M7 4h-2l-1 2h2l3.6 7.59-1.35 2.45C8.52 16.37 9.48 18 11 18h8v-2h-7.42c-.14 0-.25-.11-.29-.24L13.1 14h4.36c.75 0 1.41-.41 1.75-1.03L22 6H6.21l-.94-2H2v2h2l3.6 7.59L7 4z"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
                                            lineNumber: 139,
                                            columnNumber: 115
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this),
                                cartCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center",
                                    children: cartCount
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
                                    lineNumber: 141,
                                    columnNumber: 31
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$components$2f$ProfileMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
            lineNumber: 101,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/nhom5rent4u/src/components/layout/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/src/components/ThemeProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$lib$2f$base$2d$path$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/src/lib/base-path.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Footer() {
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const basePath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$lib$2f$base$2d$path$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBasePath"])();
    const brandSrc = isDark ? `${basePath}/logo-brand-dark.png` : `${basePath}/logo-brand-light.png`;
    const smallIconSrc = isDark ? `${basePath}/logo-icon-dark.png` : `${basePath}/logo-icon-light.png`;
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
        const checkDark = ()=>{
            if (theme === 'dark') {
                setIsDark(true);
                return;
            }
            if (theme === 'light') {
                setIsDark(false);
                return;
            }
            setIsDark(("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches);
        };
        checkDark();
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        const listener = (e)=>{
            if (theme === 'system') setIsDark(e.matches);
        };
        mq.addEventListener('change', listener);
        return ()=>mq.removeEventListener('change', listener);
    }, [
        theme
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "border-t py-8 bg-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        !mounted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: 32,
                                height: 32
                            }
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Footer.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: smallIconSrc,
                            alt: "logo icon",
                            width: 32,
                            height: 32,
                            className: "rounded-lg object-contain"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Footer.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this),
                        !mounted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: 120,
                                height: 40
                            }
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Footer.tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: brandSrc,
                            alt: "brand logo",
                            width: 120,
                            height: 40,
                            className: "object-contain"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Footer.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Footer.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex justify-center space-x-6 text-sm text-muted-foreground",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/privacy",
                            className: "hover:text-primary",
                            children: "Chính sách"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Footer.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/terms",
                            className: "hover:text-primary",
                            children: "Điều khoản"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Footer.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/contact",
                            className: "hover:text-primary",
                            children: "Liên hệ"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Footer.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Footer.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm text-muted-foreground",
                    children: "© 2026"
                }, void 0, false, {
                    fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Footer.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Footer.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Footer.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0-ir29z._.js.map