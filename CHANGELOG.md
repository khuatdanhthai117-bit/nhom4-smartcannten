# Changelog

## 1.1.0

- Chuẩn hóa `package.json` với các lệnh `check`, `test` và `verify`.
- Bổ sung kiểm thử cho store và HTTP API.
- Refactor `src/server.js` để có `createServer()` và dễ kiểm thử.
- Bổ sung security headers cơ bản cho server demo.
- Thêm GitHub Actions CI chạy với Node.js 20 và 22.
- Bổ sung tài liệu chức năng, hướng dẫn sử dụng, kiến trúc và API.
- Bổ sung kiểm thử bảo vệ các chức năng cốt lõi của giao diện Smart Canteen.
- Giữ nguyên prototype `public/index.html` làm nguồn giao diện và nghiệp vụ demo chính.

## 1.0.0

- Phiên bản prototype Smart Canteen ban đầu.
- Đăng nhập/đăng ký demo theo vai trò.
- Thực đơn, tìm kiếm, lọc, sắp xếp và giỏ hàng.
- Đặt món, chọn khung giờ và phương thức thanh toán demo.
- Theo dõi trạng thái đơn, mã nhận món, hủy đơn và đánh giá.
- Khu vực nhân viên quản lý đơn và nguyên liệu.
- Khu vực Admin với thống kê, món ăn, nguyên liệu, báo cáo, khuyến mãi và đánh giá.