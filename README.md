This is a Next.js project bootstrapped with `create-next-app`.

**Project quickstart & environment**

**Yêu cầu (Prerequisites)**
- Node: >= 18 (recommended: Node 20.9)
- npm (project contains `package-lock.json` — `npm` is the recommended package manager)
- nvm (optional, để dễ chuyển phiên bản Node)

**Phiên bản chính trong dự án**
- `next`: 16.2.4

**Cài đặt**
1. Cài Node (khuyên dùng `nvm`):

	- macOS / Linux:

	```bash
	nvm install 20.9
	nvm use 20.9
	```

	- Windows (nvm-windows) hoặc tải từ Node.js installer: cài Node 20.x

2. Cài dependency:

```bash
npm install
# hoặc (nếu bạn dùng pnpm/yarn)
# pnpm install
# yarn
```

3. Chạy development server:

```bash
npm run dev
```

4. Build & start production:

```bash
npm run build
npm run start
```

**Biến môi trường**
- Có sẵn `.env.local` và `.env.production` trong repo. Tạo file `.env.local` và cập nhật biến tương ứng với môi trường phát triển:

```bash
cp .env.production .env.local
# hoặc (PowerShell trên Windows)
Copy-Item .env.production .env.local
```

Điền các biến cần thiết (ví dụ: kết nối MongoDB, SMTP... tuỳ ứng dụng).

**Công cụ phát triển**
- Kiểm tra type: `npm run typecheck`
- Kiểm tra lint: `npm run lint`

**Ghi chú**
- Dự án dùng `npm` (vì có `package-lock.json`). Nếu bạn muốn dùng `pnpm`/`yarn`, chuyển file lock tương ứng.
- Đã thêm file `.nvmrc` trong repo (nội dung: `20.9`) để dễ cố định phiên bản Node.

Nếu bạn muốn, tôi có thể thêm `engines` vào `package.json` (giúp CI/hosting kiểm tra phiên bản Node) — tôi đã thực hiện thay đổi đó trong repo.

---

Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

Learn more about Next.js:

- https://nextjs.org/docs
- https://nextjs.org/learn
