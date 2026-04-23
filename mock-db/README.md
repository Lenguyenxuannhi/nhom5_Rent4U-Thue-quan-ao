# Mock DB (tạm)

Tệp JSON đơn giản dùng tạm để lưu dữ liệu development và để nhập dữ liệu từ dự án Vite cũ.

- File chính: `mock-db/db.json`
- Thư mục sao lưu: `mock-db/backups/`
- API: `GET /api/mock-db` (hoặc `?collection=users`), `POST/PUT/DELETE` tới `/api/mock-db`
- Scripts (tại thư mục dự án `rent4u-nextjs`):
  - `npm run db:import` — nhập dữ liệu từ `../Hehe/mock-data/db.json` vào `mock-db/db.json`
  - `npm run db:backup` — tạo bản sao lưu của `mock-db/db.json`

Lưu ý: Đây là giải pháp tạm trong môi trường development. Khi chuyển sang database thật (Postgres/Mongo...), thay thế phần API để gọi DB thật.
