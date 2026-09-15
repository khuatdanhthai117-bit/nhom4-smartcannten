# Hướng dẫn sử dụng Smart Canteen

## 1. Yêu cầu

- Node.js 20 trở lên.
- Trình duyệt hiện đại: Chrome, Edge hoặc Firefox.

## 2. Khởi động

```bash
npm install
npm start
```

Mở `http://127.0.0.1:3000`.

## 3. Kiểm tra dự án

```bash
npm run check
npm test
npm run verify
```

`check` kiểm tra cú pháp các module Node.js, `test` chạy bộ kiểm thử tự động và `verify` thực hiện cả hai bước.

## 4. API demo

- `GET /api/health` — kiểm tra máy chủ.
- `GET /api/menu` — trả về dữ liệu menu mẫu.

## 5. Tài khoản demo

Thông tin tài khoản demo được hiển thị ngay trên màn hình đăng nhập của giao diện. Không sử dụng các tài khoản demo hoặc dữ liệu mô phỏng cho môi trường thật.

## 6. Lưu ý triển khai

Không đưa mật khẩu, API key, token hoặc thông tin thanh toán thật vào repository. Biến môi trường cục bộ phải đặt trong `.env`, còn `.env.example` chỉ chứa tên biến mẫu.
