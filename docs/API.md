# API hiện có

Tài liệu này chỉ mô tả API đã có trong `src/server.js`, không coi các chức năng frontend demo là API thật.

## `GET /api/health`

Kiểm tra máy chủ.

Ví dụ phản hồi:

```json
{"ok":true,"service":"smart-canteen"}
```

## `GET /api/menu`

Trả về danh sách món ăn mẫu được lấy từ store của server.

Các trường menu được dùng trong giao diện gồm mã món, tên món, danh mục, giá và các thông tin liên quan theo dữ liệu mẫu của dự án.

## `HEAD`

Server hỗ trợ `HEAD` cho tài nguyên tĩnh và các endpoint GET.

## Phương thức chưa hỗ trợ

Các phương thức API khác trả về `405 Method Not Allowed` và thông báo `Allow: GET, HEAD`.

## Lưu ý

Đăng nhập, OTP demo, giỏ hàng, đơn hàng, trạng thái nhận món, nguyên liệu, khuyến mãi, đánh giá và báo cáo hiện đang được xử lý trong frontend prototype. Không nên coi đây là API production.