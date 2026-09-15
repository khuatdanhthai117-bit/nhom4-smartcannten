# 🍱 Smart Canteen

![Node.js](https://img.shields.io/badge/Node.js-20%2B-339933?logo=node.js&logoColor=white)
![CI](https://github.com/khuatdanhthai117-bit/nhom4-smartcannten/actions/workflows/ci.yml/badge.svg)
![License](https://img.shields.io/badge/license-academic%20project-blue)

**Smart Canteen** là hệ thống web mô phỏng đặt món trước và quản lý vận hành căn tin. Dự án lấy giao diện Smart Canteen làm nền tảng, đồng thời tổ chức thêm máy chủ Node.js, API demo, kiểm thử và tài liệu để thuận tiện trình bày như một đồ án hoàn chỉnh.

> **Trạng thái:** Academic/Demo — chưa phải hệ thống production.

## ✨ Chức năng chính

### 👨‍🎓 Khách hàng
- Đăng nhập/đăng ký theo vai trò sinh viên, giảng viên hoặc khách.
- Xem thực đơn, tìm kiếm và lọc theo danh mục.
- Xem chi tiết món, thêm/sửa/xóa món trong giỏ hàng.
- Áp dụng khuyến mãi và chọn khung giờ nhận món.
- Thanh toán mô phỏng bằng các phương thức được giao diện hỗ trợ.
- Nhận mã lấy món và theo dõi tiến trình đơn hàng.
- Hủy đơn theo điều kiện của bản demo và đánh giá sau khi nhận món.

### 👨‍🍳 Nhân viên
- Xem các đơn cần xử lý.
- Tiếp nhận và cập nhật trạng thái chế biến.
- Đánh dấu đơn sẵn sàng/đã nhận và xử lý từ chối đơn.
- Theo dõi nguyên liệu và cập nhật tồn kho mô phỏng.

### 👨‍💼 Quản trị viên
- Quản lý món ăn.
- Quản lý nguyên liệu/tồn kho.
- Quản lý khuyến mãi.
- Quản lý đánh giá.
- Xem báo cáo doanh thu và món bán chạy.

## 🧱 Kiến trúc

```text
Browser
   │
   ▼
public/index.html       ← giao diện + nghiệp vụ demo phía trình duyệt
   │
   ▼
src/server.js           ← HTTP server Node.js
   ├── /api/health       ← health check
   └── /api/menu         ← menu mẫu
        │
        ├── src/auth.js  ← kiểm tra quyền / loại bỏ password khỏi dữ liệu trả về
        └── src/store.js ← dữ liệu mẫu và danh sách vai trò

api/                    ← điểm mở rộng cho API/serverless trong tương lai
tests/                  ← kiểm thử Node.js
docs/                   ← đặc tả, kiến trúc, hướng dẫn
```

## 🚀 Chạy dự án

### Yêu cầu

- Node.js **20+**
- Chrome, Edge hoặc Firefox phiên bản hiện đại

### Cài đặt

```bash
npm install
```

### Khởi động

```bash
npm start
```

Sau đó mở:

```text
http://127.0.0.1:3000
```

### Kiểm tra chất lượng

```bash
npm run check
npm test
npm run verify
```

GitHub Actions tự động chạy kiểm tra trên Node.js 20 và 22 cho các thay đổi vào `main` hoặc pull request.

## 🔌 API demo

| Method | Endpoint | Mục đích |
|---|---|---|
| GET | `/api/health` | Kiểm tra server đang hoạt động |
| GET | `/api/menu` | Lấy menu mẫu từ server |

## 📚 Tài liệu

- [`docs/KIEN_TRUC.md`](docs/KIEN_TRUC.md) — kiến trúc hiện tại và hướng phát triển.
- [`docs/CHUC_NANG.md`](docs/CHUC_NANG.md) — đặc tả chức năng và luồng nghiệp vụ.
- [`docs/HUONG_DAN_SU_DUNG.md`](docs/HUONG_DAN_SU_DUNG.md) — hướng dẫn chạy và sử dụng.
- [`CONTRIBUTING.md`](CONTRIBUTING.md) — quy trình đóng góp và quy ước commit.
- [`SECURITY.md`](SECURITY.md) — lưu ý bảo mật.

## 🔐 Lưu ý bảo mật

Đây là bản demo. **Không sử dụng dữ liệu thật** cho tài khoản, OTP hoặc thanh toán. Không commit mật khẩu, API key, token, thông tin thẻ hoặc `.env` lên GitHub.

## 🛠️ Lộ trình hoàn thiện

- [x] Giao diện Smart Canteen và các luồng demo chính.
- [x] Node.js HTTP server.
- [x] API health/menu demo.
- [x] Kiểm thử tự động cơ bản.
- [x] GitHub Actions CI.
- [x] Tài liệu chức năng, kiến trúc và hướng dẫn.
- [ ] Tách CSS/JavaScript khỏi file HTML lớn.
- [ ] Kết nối cơ sở dữ liệu thật.
- [ ] Xây dựng API xác thực server-side và session/JWT an toàn.
- [ ] Kiểm soát tồn kho và slot ở server.
- [ ] Tích hợp cổng thanh toán thật sau khi đáp ứng yêu cầu bảo mật.
- [ ] Bổ sung test API, test nghiệp vụ và kiểm thử đồng thời.

## 👥 Phạm vi đồ án

Repository được tổ chức để dễ trình bày source code, chức năng, kiến trúc và quy trình kiểm thử. Các chức năng đang mô phỏng được ghi rõ trong tài liệu, tránh nhầm lẫn giữa prototype và hệ thống triển khai thực tế.

---

**Smart Canteen — Nhóm 4**  
Academic project / Demo application
