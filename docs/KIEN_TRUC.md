# Kiến trúc Smart Canteen

## Hiện trạng

`public/index.html` giữ nguyên bản prototype giao diện đã được cung cấp. Máy chủ Node.js trong `src/server.js` phục vụ giao diện và các endpoint đọc dữ liệu mẫu.

## Hướng phát triển

1. Tách CSS và JavaScript từ `index.html` sang các tệp trong `public/`.
2. Di chuyển tài khoản, đơn hàng, tồn kho và khuyến mãi vào cơ sở dữ liệu.
3. Thay đăng nhập/OTP mô phỏng bằng API server-side; chỉ lưu mật khẩu đã băm.
4. Kiểm tra quyền, thanh toán, sức chứa slot và tồn kho ở server.
5. Thêm kiểm thử API và các tình huống đồng thời trước khi triển khai.
