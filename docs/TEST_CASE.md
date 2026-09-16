# Test Case – Smart Canteen

## 1. Mục tiêu

Tài liệu dùng để kiểm tra các luồng chính của Smart Canteen trước khi trình diễn hoặc nộp bài.

## 2. Test case chức năng

| ID | Chức năng | Bước kiểm tra | Kết quả mong đợi |
|---|---|---|---|
| TC01 | Đăng nhập sinh viên | Nhập MSSV + mật khẩu demo | Đăng nhập thành công, hiển thị giao diện người dùng |
| TC02 | Đăng nhập sai | Nhập thông tin không hợp lệ | Hiển thị thông báo lỗi |
| TC03 | Xem menu | Mở trang menu | Danh sách món được hiển thị |
| TC04 | Tìm kiếm | Nhập tên món | Chỉ hiển thị món phù hợp |
| TC05 | Lọc danh mục | Chọn một danh mục | Menu được lọc theo danh mục |
| TC06 | Xem chi tiết | Chọn một món | Hiển thị giá, mô tả, đánh giá và thông tin món |
| TC07 | Thêm giỏ hàng | Bấm nút thêm món | Món xuất hiện trong giỏ và số lượng tăng |
| TC08 | Đổi số lượng | Bấm + / - trong giỏ | Tổng tiền cập nhật đúng |
| TC09 | Chọn giờ nhận | Chọn một slot | Slot được đánh dấu đã chọn |
| TC10 | Khuyến mãi | Nhập mã hợp lệ | Tổng tiền được cập nhật theo mã demo |
| TC11 | Thanh toán | Chọn phương thức và xác nhận | Hệ thống tạo đơn demo |
| TC12 | Theo dõi đơn | Mở danh sách đơn | Trạng thái đơn được hiển thị |
| TC13 | Nhân viên xác nhận | Đăng nhập nhân viên, chọn đơn chờ | Đơn chuyển sang đã xác nhận |
| TC14 | Cập nhật chuẩn bị | Nhân viên cập nhật trạng thái | Đơn chuyển đúng trạng thái |
| TC15 | Xác nhận nhận món | Nhập mã lấy món | Đơn chuyển sang đã nhận nếu mã hợp lệ |
| TC16 | Đánh giá | Mở đơn đã hoàn thành | Có thể gửi đánh giá theo logic demo |
| TC17 | Admin dashboard | Đăng nhập admin | Hiển thị các thống kê quản trị |
| TC18 | Quản lý menu | Admin mở quản lý món | Danh sách và thao tác quản lý hiển thị |
| TC19 | Nguyên liệu | Admin/nhân viên mở kho | Tồn kho và trạng thái nguyên liệu hiển thị |
| TC20 | Responsive | Thu nhỏ trình duyệt / điện thoại | Bố cục không bị vỡ, có thể thao tác |

## 3. Kiểm thử kỹ thuật

Chạy tại thư mục gốc:

```bash
npm install
npm run check
npm test
npm run verify
```

`npm run check` kiểm tra cú pháp các file JavaScript chính. `npm test` chạy bộ test Node.js. `npm run verify` kết hợp cả hai bước.

## 4. Kiểm thử API

| Request | Mong đợi |
|---|---|
| `GET /api/health` | HTTP 200 và JSON `{ ok: true, service: "smart-canteen" }` |
| `GET /api/menu` | HTTP 200 và mảng món ăn |
| `HEAD /api/menu` | HTTP 200, không trả body |
| `GET /api/not-found` | HTTP 404 |
| `POST /api/health` | HTTP 405 và `Allow: GET, HEAD` |

## 5. Tiêu chí nghiệm thu

- Không có lỗi cú pháp JavaScript.
- Test tự động chạy thành công.
- Các luồng đặt món chính hoạt động đúng.
- Trạng thái đơn chuyển theo đúng thứ tự nghiệp vụ.
- Giao diện sử dụng được trên màn hình desktop và mobile.
- Các tài liệu trong `docs/` mô tả đúng phiên bản demo hiện tại.
