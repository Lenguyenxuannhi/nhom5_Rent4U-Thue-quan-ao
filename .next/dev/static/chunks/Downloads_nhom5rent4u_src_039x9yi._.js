(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/nhom5rent4u/src/components/ThemeProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    theme: 'system',
    setTheme: ()=>{}
});
function useTheme() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "01231c3fd3a585114ae32ede5839a7d578c297f1e8a997e183241399988e7555") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "01231c3fd3a585114ae32ede5839a7d578c297f1e8a997e183241399988e7555";
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
}
_s(useTheme, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
function ThemeProvider({ children }) {
    _s1();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ThemeProvider.useState": ()=>{
            try {
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                const stored = localStorage.getItem('theme');
                return stored ?? 'system';
            } catch  {
                return 'system';
            }
        }
    }["ThemeProvider.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            const apply = {
                "ThemeProvider.useEffect.apply": (t)=>{
                    const prefersDark = ("TURBOPACK compile-time value", "object") !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                    const resolved = t === 'system' ? prefersDark ? 'dark' : 'light' : t;
                    if (resolved === 'dark') document.documentElement.classList.add('dark');
                    else document.documentElement.classList.remove('dark');
                }
            }["ThemeProvider.useEffect.apply"];
            apply(theme);
        }
    }["ThemeProvider.useEffect"], [
        theme
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            try {
                if (theme === 'system') localStorage.removeItem('theme');
                else localStorage.setItem('theme', theme);
            } catch  {}
        }
    }["ThemeProvider.useEffect"], [
        theme
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            theme,
            setTheme
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/nhom5rent4u/src/components/ThemeProvider.tsx",
        lineNumber: 51,
        columnNumber: 10
    }, this);
}
_s1(ThemeProvider, "TsDyXour3iAPPRtXV/B0m1buQoc=");
_c = ThemeProvider;
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/nhom5rent4u/src/lib/auth-client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    const { getAll } = await __turbopack_context__.A("[project]/Downloads/nhom5rent4u/src/lib/client-db.ts [app-client] (ecmascript, async loader)");
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
    const { getAll, save } = await __turbopack_context__.A("[project]/Downloads/nhom5rent4u/src/lib/client-db.ts [app-client] (ecmascript, async loader)");
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/nhom5rent4u/src/lib/base-path.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBasePath",
    ()=>getBasePath,
    "productHref",
    ()=>productHref
]);
function getBasePath() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return window.location.pathname.startsWith('/nhom5_Rent4U-Thue-quan-ao') ? '/nhom5_Rent4U-Thue-quan-ao' : '';
}
function productHref(id) {
    const strId = String(id);
    const numericId = Number(strId);
    if (!isNaN(numericId) && numericId > 1776000000000) {
        return `/product/not-built?id=${encodeURIComponent(strId)}`;
    }
    return `/product/${encodeURIComponent(strId)}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/nhom5rent4u/src/lib/db-url.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DB_URL",
    ()=>DB_URL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$lib$2f$base$2d$path$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/src/lib/base-path.ts [app-client] (ecmascript)");
;
const DB_URL = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$lib$2f$base$2d$path$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBasePath"])()}/mock-db/db.json`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/nhom5rent4u/src/lib/client-db.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$lib$2f$db$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/src/lib/db-url.ts [app-client] (ecmascript)");
;
function localKey(collection) {
    return `mock__${collection}`;
}
async function fetchDb() {
    const res = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$lib$2f$db$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DB_URL"], {
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
                const { products } = await __turbopack_context__.A("[project]/Downloads/nhom5rent4u/src/data/products.ts [app-client] (ecmascript, async loader)");
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/nhom5rent4u/src/components/AuthProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/src/lib/auth-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$lib$2f$client$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/src/lib/client-db.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider({ children }) {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            try {
                const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSession"])();
                if (session?.user) setUser(session.user);
            } catch  {
            // ignore
            }
        }
    }["AuthProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            try {
                if (user) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSession"])({
                    user,
                    role: user.role
                });
                else (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSession"])(null);
                // notify other parts of the app (header, storage helpers)
                try {
                    window.dispatchEvent(new CustomEvent('r4:auth-changed', {
                        detail: {
                            user
                        }
                    }));
                } catch  {}
            } catch  {}
        }
    }["AuthProvider.useEffect"], [
        user
    ]);
    // when a user is present and has an id, refresh from the client-side data store
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            if (!user || !user.id) return;
            let canceled = false;
            ;
            ({
                "AuthProvider.useEffect": async ()=>{
                    try {
                        const current = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$lib$2f$client$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getById"])('users', String(user.id));
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
                            setUser({
                                "AuthProvider.useEffect": (prev)=>prev ? {
                                        ...prev,
                                        ...safe
                                    } : prev
                            }["AuthProvider.useEffect"]);
                        }
                    } catch  {
                    // ignore
                    }
                }
            })["AuthProvider.useEffect"]();
            return ({
                "AuthProvider.useEffect": ()=>{
                    canceled = true;
                }
            })["AuthProvider.useEffect"];
        }
    }["AuthProvider.useEffect"], [
        user?.id
    ]);
    const login = (u)=>setUser(u);
    const logout = ()=>setUser(null);
    const update = (patch)=>setUser((prev_0)=>{
            if (!prev_0) return prev_0;
            const next = {
                ...prev_0,
                ...patch
            };
            (async ()=>{
                try {
                    if (next.id) {
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$lib$2f$client$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["save"])('users', next);
                    }
                } catch  {
                // ignore
                }
            })();
            return next;
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            login,
            logout,
            update
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/nhom5rent4u/src/components/AuthProvider.tsx",
        lineNumber: 115,
        columnNumber: 10
    }, this);
}
_s(AuthProvider, "bLHhvMTNhzU2Z1/JEi6mKX5unv0=");
_c = AuthProvider;
function useAuth() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "88a8d116ddaa92b65ab91fc5df21138c23fd6341a0630bd6750fc1a5fb72fa97") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "88a8d116ddaa92b65ab91fc5df21138c23fd6341a0630bd6750fc1a5fb72fa97";
    }
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!ctx) {
        throw new Error("useAuth must be used inside AuthProvider");
    }
    return ctx;
}
_s1(useAuth, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/nhom5rent4u/src/components/ThemeToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/src/components/ThemeProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ThemeToggle() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "bd299e6c1501c84007be89d3f1d881976648060c3357235e09bad181475d8d75") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bd299e6c1501c84007be89d3f1d881976648060c3357235e09bad181475d8d75";
    }
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "ThemeToggle[useEffect()]": ()=>{
                setMounted(true);
            }
        })["ThemeToggle[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    let t2;
    if ($[3] !== setTheme || $[4] !== theme) {
        t2 = ({
            "ThemeToggle[toggle]": ()=>setTheme(theme === "dark" ? "light" : "dark")
        })["ThemeToggle[toggle]"];
        $[3] = setTheme;
        $[4] = theme;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const toggle = t2;
    if (!mounted) {
        let t3;
        if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                "aria-label": "Toggle theme",
                className: "w-10 h-10 flex items-center justify-center rounded-full border border-border bg-card text-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "select-none opacity-0",
                    children: "☀️"
                }, void 0, false, {
                    fileName: "[project]/Downloads/nhom5rent4u/src/components/ThemeToggle.tsx",
                    lineNumber: 50,
                    columnNumber: 151
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/nhom5rent4u/src/components/ThemeToggle.tsx",
                lineNumber: 50,
                columnNumber: 12
            }, this);
            $[6] = t3;
        } else {
            t3 = $[6];
        }
        return t3;
    }
    const t3 = theme === "dark" ? "\uD83C\uDF19" : "\u2600\uFE0F";
    let t4;
    if ($[7] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "select-none",
            children: t3
        }, void 0, false, {
            fileName: "[project]/Downloads/nhom5rent4u/src/components/ThemeToggle.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== t4 || $[10] !== toggle) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: toggle,
            "aria-label": "Toggle theme",
            className: "w-10 h-10 flex items-center justify-center rounded-full border border-border bg-card text-sm hover:opacity-95",
            children: t4
        }, void 0, false, {
            fileName: "[project]/Downloads/nhom5rent4u/src/components/ThemeToggle.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[9] = t4;
        $[10] = toggle;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    return t5;
}
_s(ThemeToggle, "k4Un4K7+5DX/j3JknOcWioV0jZY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/nhom5rent4u/src/components/FloatingThemeToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloatingThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/src/components/ThemeToggle.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function FloatingThemeToggle() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "581fd8882f75101ea594a3a4403c20ace0412141d475d244b8bc39d90d4f9b64") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "581fd8882f75101ea594a3a4403c20ace0412141d475d244b8bc39d90d4f9b64";
    }
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "FloatingThemeToggle[useEffect()]": ()=>{
                setMounted(true);
            }
        })["FloatingThemeToggle[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    if (!mounted) {
        let t2;
        if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-6 right-6 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "shadow-lg rounded-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "aria-label": "Toggle theme",
                        className: "w-10 h-10 flex items-center justify-center rounded-full border border-border bg-card text-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "select-none opacity-0",
                            children: "☀️"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nhom5rent4u/src/components/FloatingThemeToggle.tsx",
                            lineNumber: 34,
                            columnNumber: 236
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nhom5rent4u/src/components/FloatingThemeToggle.tsx",
                        lineNumber: 34,
                        columnNumber: 97
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/nhom5rent4u/src/components/FloatingThemeToggle.tsx",
                    lineNumber: 34,
                    columnNumber: 57
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/nhom5rent4u/src/components/FloatingThemeToggle.tsx",
                lineNumber: 34,
                columnNumber: 12
            }, this);
            $[3] = t2;
        } else {
            t2 = $[3];
        }
        return t2;
    }
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed bottom-6 right-6 z-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shadow-lg rounded-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Downloads/nhom5rent4u/src/components/FloatingThemeToggle.tsx",
                    lineNumber: 43,
                    columnNumber: 95
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/nhom5rent4u/src/components/FloatingThemeToggle.tsx",
                lineNumber: 43,
                columnNumber: 55
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/nhom5rent4u/src/components/FloatingThemeToggle.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    return t2;
}
_s(FloatingThemeToggle, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c = FloatingThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "FloatingThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/nhom5rent4u/src/lib/user-storage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/nhom5rent4u/src/components/ProfileMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfileMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/src/components/ThemeProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$components$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/src/components/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$lib$2f$base$2d$path$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/src/lib/base-path.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "b961382ad7dea46716447d667bc4a16a407ed171e1bbc6a3c65b8a2f96a55524") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b961382ad7dea46716447d667bc4a16a407ed171e1bbc6a3c65b8a2f96a55524";
    }
    const { user, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$components$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const isDark = theme === "dark";
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$lib$2f$base$2d$path$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBasePath"])();
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const basePath = t0;
    const smallIconSrc = isDark ? `${basePath}/logo-icon-dark.png` : `${basePath}/logo-icon-light.png`;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "ProfileMenu[useEffect()]": ()=>{
                const onDoc = function onDoc(e) {
                    if (!ref.current) {
                        return;
                    }
                    if (!ref.current.contains(e.target)) {
                        setOpen(false);
                    }
                };
                document.addEventListener("click", onDoc);
                return ()=>document.removeEventListener("click", onDoc);
            }
        })["ProfileMenu[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] !== logout || $[5] !== router) {
        t3 = ({
            "ProfileMenu[handleLogout]": ()=>{
                logout();
                router.push("/login");
            }
        })["ProfileMenu[handleLogout]"];
        $[4] = logout;
        $[5] = router;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const handleLogout = t3;
    if (!user) {
        let t4;
        if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/login",
                    className: "text-sm text-primary",
                    children: "Đăng nhập"
                }, void 0, false, {
                    fileName: "[project]/Downloads/nhom5rent4u/src/components/ProfileMenu.tsx",
                    lineNumber: 82,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/nhom5rent4u/src/components/ProfileMenu.tsx",
                lineNumber: 82,
                columnNumber: 12
            }, this);
            $[7] = t4;
        } else {
            t4 = $[7];
        }
        return t4;
    }
    let t4;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "ProfileMenu[<button>.onClick]": ()=>setOpen(_ProfileMenuButtonOnClickSetOpen)
        })["ProfileMenu[<button>.onClick]"];
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const t5 = user.avatar || smallIconSrc;
    let t6;
    if ($[9] !== t5 || $[10] !== user.name) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t4,
            className: "w-10 h-10 rounded-full overflow-hidden border border-border flex items-center justify-center",
            "aria-label": "Profile",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: t5,
                alt: user.name,
                width: 40,
                height: 40,
                className: "object-cover"
            }, void 0, false, {
                fileName: "[project]/Downloads/nhom5rent4u/src/components/ProfileMenu.tsx",
                lineNumber: 101,
                columnNumber: 157
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/nhom5rent4u/src/components/ProfileMenu.tsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[9] = t5;
        $[10] = user.name;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== handleLogout || $[13] !== open || $[14] !== user.name || $[15] !== user.role) {
        t7 = open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute right-0 mt-2 w-48 bg-card border border-border rounded-md shadow-lg py-1 z-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-3 py-2 text-sm font-medium",
                    children: user.name
                }, void 0, false, {
                    fileName: "[project]/Downloads/nhom5rent4u/src/components/ProfileMenu.tsx",
                    lineNumber: 110,
                    columnNumber: 122
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/profile",
                    className: "block px-3 py-2 text-sm hover:bg-muted",
                    children: "Trang cá nhân"
                }, void 0, false, {
                    fileName: "[project]/Downloads/nhom5rent4u/src/components/ProfileMenu.tsx",
                    lineNumber: 110,
                    columnNumber: 186
                }, this),
                user.role === "admin" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/admin",
                    className: "block px-3 py-2 text-sm hover:bg-muted",
                    children: "Admin Dashboard"
                }, void 0, false, {
                    fileName: "[project]/Downloads/nhom5rent4u/src/components/ProfileMenu.tsx",
                    lineNumber: 110,
                    columnNumber: 305
                }, this),
                (user.role === "shopowner" || user.role === "admin") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/shop-owner",
                    className: "block px-3 py-2 text-sm hover:bg-muted",
                    children: "Quản lý cửa hàng"
                }, void 0, false, {
                    fileName: "[project]/Downloads/nhom5rent4u/src/components/ProfileMenu.tsx",
                    lineNumber: 110,
                    columnNumber: 456
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleLogout,
                    className: "w-full text-left px-3 py-2 text-sm hover:bg-muted",
                    children: "Đăng xuất"
                }, void 0, false, {
                    fileName: "[project]/Downloads/nhom5rent4u/src/components/ProfileMenu.tsx",
                    lineNumber: 110,
                    columnNumber: 556
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/nhom5rent4u/src/components/ProfileMenu.tsx",
            lineNumber: 110,
            columnNumber: 18
        }, this);
        $[12] = handleLogout;
        $[13] = open;
        $[14] = user.name;
        $[15] = user.role;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== t6 || $[18] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            ref: ref,
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/nhom5rent4u/src/components/ProfileMenu.tsx",
            lineNumber: 121,
            columnNumber: 10
        }, this);
        $[17] = t6;
        $[18] = t7;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    return t8;
}
_s(ProfileMenu, "fxpvQJ+Q/vIqTdMyyORs5ugCKUU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$components$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ProfileMenu;
function _ProfileMenuButtonOnClickSetOpen(v) {
    return !v;
}
var _c;
__turbopack_context__.k.register(_c, "ProfileMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$components$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/src/components/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$lib$2f$user$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/src/lib/user-storage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/src/components/ThemeProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$lib$2f$base$2d$path$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/src/lib/base-path.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$components$2f$ProfileMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/src/components/ProfileMenu.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Header.useState": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            try {
                if (document.documentElement.classList.contains('dark')) return true;
                if (theme === 'dark') return true;
                if (theme === 'light') return false;
                return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            } catch  {
                return theme === 'dark';
            }
        }
    }["Header.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
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
            const listener = {
                "Header.useEffect.listener": (e)=>setIsDark(e.matches)
            }["Header.useEffect.listener"];
            if (mq.addEventListener) mq.addEventListener('change', listener);
            else mq.addListener(listener);
            return ({
                "Header.useEffect": ()=>{
                    if (mq.removeEventListener) mq.removeEventListener('change', listener);
                    else mq.removeListener(listener);
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        theme
    ]);
    const basePath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$lib$2f$base$2d$path$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBasePath"])();
    const smallIconSrc = isDark ? `${basePath}/logo-icon-dark.png` : `${basePath}/logo-icon-light.png`;
    const brandSrc = isDark ? `${basePath}/logo-brand-dark.png` : `${basePath}/logo-brand-light.png`;
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            setMounted(true);
        }
    }["Header.useEffect"], []);
    const [cartCount, setCartCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [favCount, setFavCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$components$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            function readCounts() {
                try {
                    const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$lib$2f$user$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readCart"])(user);
                    setCartCount(Array.isArray(c) ? c.reduce({
                        "Header.useEffect.readCounts": (s, i)=>s + (i.qty || i.quantity || 1)
                    }["Header.useEffect.readCounts"], 0) : 0);
                } catch (e_0) {
                    setCartCount(0);
                }
                try {
                    const f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$lib$2f$user$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readFavorites"])(user);
                    setFavCount(Array.isArray(f) ? f.length : 0);
                } catch (e_1) {
                    setFavCount(0);
                }
            }
            readCounts();
            const onStorage = {
                "Header.useEffect.onStorage": (e_2)=>{
                    if (e_2?.key === 'r4_cart' || e_2?.key === 'r4_favorites') readCounts();
                }
            }["Header.useEffect.onStorage"];
            const onCounts = {
                "Header.useEffect.onCounts": ()=>readCounts()
            }["Header.useEffect.onCounts"];
            const onAuth = {
                "Header.useEffect.onAuth": ()=>readCounts()
            }["Header.useEffect.onAuth"];
            window.addEventListener('storage', onStorage);
            window.addEventListener('r4:counts-changed', onCounts);
            window.addEventListener('r4:auth-changed', onAuth);
            return ({
                "Header.useEffect": ()=>{
                    window.removeEventListener('storage', onStorage);
                    window.removeEventListener('r4:counts-changed', onCounts);
                    window.removeEventListener('r4:auth-changed', onAuth);
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        user
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "w-full border-b",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 py-4 flex items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    "aria-label": "Home",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            !mounted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 32,
                                    height: 32
                                }
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
                                lineNumber: 106,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: smallIconSrc,
                                alt: "logo icon",
                                width: 32,
                                height: 32,
                                priority: true,
                                className: "rounded-lg object-contain"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
                                lineNumber: 109,
                                columnNumber: 19
                            }, this),
                            !mounted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 120,
                                    height: 40
                                }
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
                                lineNumber: 110,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: brandSrc,
                                alt: "brand logo",
                                width: 120,
                                height: 40,
                                className: "object-contain"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
                                lineNumber: 113,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "hidden lg:flex items-center gap-8 ml-8",
                    children: NAV_LINKS.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: link.to,
                            className: `text-sm transition-colors ${pathname === link.to ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`,
                            children: link.label
                        }, link.to, false, {
                            fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
                            lineNumber: 118,
                            columnNumber: 34
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ml-auto flex items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        if (!user) router.push('/login');
                                        else router.push('/favorites');
                                    },
                                    className: "p-2 rounded hover:bg-muted inline-flex items-center",
                                    "aria-label": "Yêu thích",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-5 w-5",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12 21s-7.6-4.35-10-7.04C-0.1 10.37 3.6 4 8.57 6.01 10.46 6.87 12 8.4 12 8.4s1.54-1.53 3.43-2.39C20.4 4 24.1 10.37 22 13.96 19.6 16.65 12 21 12 21z"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
                                            lineNumber: 128,
                                            columnNumber: 115
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this),
                                favCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center",
                                    children: favCount
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
                                    lineNumber: 130,
                                    columnNumber: 30
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        if (!user) router.push('/login');
                                        else router.push('/cart');
                                    },
                                    className: "p-2 rounded hover:bg-muted inline-flex items-center",
                                    "aria-label": "Giỏ hàng",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-5 w-5",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M7 4h-2l-1 2h2l3.6 7.59-1.35 2.45C8.52 16.37 9.48 18 11 18h8v-2h-7.42c-.14 0-.25-.11-.29-.24L13.1 14h4.36c.75 0 1.41-.41 1.75-1.03L22 6H6.21l-.94-2H2v2h2l3.6 7.59L7 4z"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
                                            lineNumber: 137,
                                            columnNumber: 115
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this),
                                cartCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center",
                                    children: cartCount
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
                                    lineNumber: 139,
                                    columnNumber: 31
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$components$2f$ProfileMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
            lineNumber: 103,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Header.tsx",
        lineNumber: 102,
        columnNumber: 10
    }, this);
}
_s(Header, "yCAEyDo50HsemGm8wHix/TBgEQQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$components$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/nhom5rent4u/src/components/layout/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/src/components/ThemeProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$lib$2f$base$2d$path$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nhom5rent4u/src/lib/base-path.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Footer() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "0cb123f85aa3b2fa806dd1680c075780d71d9d4327c21a448ad26d38ba2bc767") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0cb123f85aa3b2fa806dd1680c075780d71d9d4327c21a448ad26d38ba2bc767";
    }
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$lib$2f$base$2d$path$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBasePath"])();
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const basePath = t0;
    const brandSrc = isDark ? `${basePath}/logo-brand-dark.png` : `${basePath}/logo-brand-light.png`;
    const smallIconSrc = isDark ? `${basePath}/logo-icon-dark.png` : `${basePath}/logo-icon-light.png`;
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    let t2;
    if ($[2] !== theme) {
        t1 = ({
            "Footer[useEffect()]": ()=>{
                setMounted(true);
                const checkDark = {
                    "Footer[useEffect() > checkDark]": ()=>{
                        if (theme === "dark") {
                            setIsDark(true);
                            return;
                        }
                        if (theme === "light") {
                            setIsDark(false);
                            return;
                        }
                        setIsDark(("TURBOPACK compile-time value", "object") !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches);
                    }
                }["Footer[useEffect() > checkDark]"];
                checkDark();
                const mq = window.matchMedia("(prefers-color-scheme: dark)");
                const listener = {
                    "Footer[useEffect() > listener]": (e)=>{
                        if (theme === "system") {
                            setIsDark(e.matches);
                        }
                    }
                }["Footer[useEffect() > listener]"];
                mq.addEventListener("change", listener);
                return ()=>mq.removeEventListener("change", listener);
            }
        })["Footer[useEffect()]"];
        t2 = [
            theme
        ];
        $[2] = theme;
        $[3] = t1;
        $[4] = t2;
    } else {
        t1 = $[3];
        t2 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[5] !== mounted || $[6] !== smallIconSrc) {
        t3 = !mounted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: 32,
                height: 32
            }
        }, void 0, false, {
            fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Footer.tsx",
            lineNumber: 75,
            columnNumber: 21
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: smallIconSrc,
            alt: "logo icon",
            width: 32,
            height: 32,
            className: "rounded-lg object-contain"
        }, void 0, false, {
            fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Footer.tsx",
            lineNumber: 78,
            columnNumber: 13
        }, this);
        $[5] = mounted;
        $[6] = smallIconSrc;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== brandSrc || $[9] !== mounted) {
        t4 = !mounted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: 120,
                height: 40
            }
        }, void 0, false, {
            fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Footer.tsx",
            lineNumber: 87,
            columnNumber: 21
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: brandSrc,
            alt: "brand logo",
            width: 120,
            height: 40,
            className: "object-contain"
        }, void 0, false, {
            fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Footer.tsx",
            lineNumber: 90,
            columnNumber: 13
        }, this);
        $[8] = brandSrc;
        $[9] = mounted;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== t3 || $[12] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Footer.tsx",
            lineNumber: 99,
            columnNumber: 10
        }, this);
        $[11] = t3;
        $[12] = t4;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    let t6;
    let t7;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex justify-center space-x-6 text-sm text-muted-foreground",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/privacy",
                    className: "hover:text-primary",
                    children: "Chính sách"
                }, void 0, false, {
                    fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Footer.tsx",
                    lineNumber: 109,
                    columnNumber: 94
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/terms",
                    className: "hover:text-primary",
                    children: "Điều khoản"
                }, void 0, false, {
                    fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Footer.tsx",
                    lineNumber: 109,
                    columnNumber: 164
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/contact",
                    className: "hover:text-primary",
                    children: "Liên hệ"
                }, void 0, false, {
                    fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Footer.tsx",
                    lineNumber: 109,
                    columnNumber: 232
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Footer.tsx",
            lineNumber: 109,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm text-muted-foreground",
            children: "© 2026"
        }, void 0, false, {
            fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Footer.tsx",
            lineNumber: 110,
            columnNumber: 10
        }, this);
        $[14] = t6;
        $[15] = t7;
    } else {
        t6 = $[14];
        t7 = $[15];
    }
    let t8;
    if ($[16] !== t5) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "border-t py-8 bg-background",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-4",
                children: [
                    t5,
                    t6,
                    t7
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Footer.tsx",
                lineNumber: 119,
                columnNumber: 58
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/nhom5rent4u/src/components/layout/Footer.tsx",
            lineNumber: 119,
            columnNumber: 10
        }, this);
        $[16] = t5;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    return t8;
}
_s(Footer, "baznUE+kT9cEl50BhRgPyLaNxlk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nhom5rent4u$2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_nhom5rent4u_src_039x9yi._.js.map