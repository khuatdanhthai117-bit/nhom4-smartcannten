# Kiến trúc Smart Canteen

Tài liệu này bám sát phiên bản giao diện `public/index.html` hiện tại của dự án. Không bổ sung nghiệp vụ ngoài những gì giao diện demo đang thể hiện.

## 1. Mô hình tổng thể

```text
Người dùng
   │
   ├── Sinh viên
   ├── Giảng viên
   ├── Khách
   ├── Nhân viên
   └── Admin
          │
          ▼
┌──────────────────────────────┐
│ public/index.html            │
│ Giao diện + JavaScript demo  │
└──────────────┬───────────────┘
               │
       ┌───────┴────────┐
       ▼                ▼
 localStorage      Node.js demo API
 phiên đăng nhập   /api/health
                   /api/menu
```

## 2. Frontend hiện tại

`public/index.html` là giao diện single-page chạy phía trình duyệt. CSS và JavaScript đang được giữ cùng file để bảo toàn nguyên trạng bản HTML gốc.

Các khu vực chính:

- Màn hình đăng nhập / đăng ký.
- Trang thực đơn.
- Giỏ hàng.
- Trang đơn hàng của người dùng.
- Khu vực nhân viên.
- Khu vực Admin.
- Modal chi tiết món ăn.
- Modal xác nhận đặt món và thanh toán.
- Modal OTP demo.
- Modal cập nhật nguyên liệu.
- Modal từ chối đơn hàng.
- Modal xác nhận nhận món.
- Modal đánh giá.

## 3. Dữ liệu demo trong frontend

Các mảng dữ liệu chính trong HTML:

- `users`: tài khoản và vai trò.
- `menuData`: món ăn, danh mục, giá, đánh giá, tồn kho.
- `ingredients`: nguyên liệu và mức tồn tối thiểu.
- `promotions`: mã khuyến mãi.
- `reviews`: đánh giá món ăn.
- `orders`: đơn hàng trong phiên chạy.
- `cart`: giỏ hàng hiện tại.

## 4. Luồng đặt món

```text
Đăng nhập
   ↓
Xem thực đơn
   ↓
Tìm kiếm / lọc / sắp xếp
   ↓
Thêm món vào giỏ
   ↓
Chọn khung giờ nhận
   ↓
Chọn phương thức thanh toán
   ↓
Xác nhận đặt món
   ↓
Chờ xác nhận
   ↓
Đã xác nhận
   ↓
Đang chuẩn bị
   ↓
Sẵn sàng
   ↓
Nhập mã nhận món
   ↓
Đã nhận
   ↓
Đánh giá
```

## 5. Vai trò

| Vai trò | Chức năng thể hiện trong HTML |
|---|---|
| Sinh viên | Đăng nhập, xem món, giỏ hàng, đặt món, theo dõi đơn, hủy đơn trong thời gian cho phép, đánh giá |
| Giảng viên | Luồng đặt món tương tự người dùng |
| Khách | Đăng nhập bằng SĐT + OTP demo |
| Nhân viên | Xem đơn, xác nhận, từ chối, cập nhật trạng thái, xác nhận nhận món, cập nhật nguyên liệu |
| Admin | Truy cập khu vực quản trị, xem thống kê, món ăn, nguyên liệu, báo cáo, khuyến mãi và đánh giá |

## 6. Backend demo

Node.js trong `src/server.js` cung cấp các endpoint tối thiểu:

- `GET /api/health`
- `GET /api/menu`

Backend hiện phục vụ giao diện tĩnh và dữ liệu menu demo. Phần đăng nhập, đơn hàng, nguyên liệu, khuyến mãi và đánh giá trong HTML vẫn là logic demo phía trình duyệt.

## 7. Hướng phát triển an toàn

Các phần có thể tách thành module ở bước tiếp theo nhưng phải giữ nguyên nghiệp vụ và giao diện hiện tại:

1. Tách CSS khỏi `index.html`.
2. Tách JavaScript thành các module `auth`, `menu`, `cart`, `order`, `staff`, `admin`.
3. Bổ sung API cho users/orders/ingredients/promotions/reviews/reports.
4. Đưa dữ liệu vào cơ sở dữ liệu.
5. Chuyển xác thực và phân quyền sang server-side.
6. Kiểm tra tồn kho, slot và thanh toán ở server.
7. Mở rộng kiểm thử.

**Nguyên tắc:** không thay đổi tên chức năng, trạng thái đơn hàng, vai trò và luồng đặt món đang có trong HTML gốc khi thực hiện các bước mở rộng.