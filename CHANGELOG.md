# Changelog

Các thay đổi đáng chú ý của Smart Canteen.

## 1.2.0 - 2026-09-15

### Cải thiện
- Giữ nguyên `public/index.html` làm giao diện và nghiệp vụ demo trung tâm.
- Mở rộng kiểm thử HTTP cho API health/menu.
- Bổ sung kiểm thử `HEAD` và route không tồn tại.
- Bổ sung `.editorconfig` để thống nhất định dạng mã nguồn.
- Bổ sung template GitHub Issue cho báo lỗi và đề xuất chức năng.
- Cập nhật tài liệu theo phạm vi hiện tại của đồ án.

### Nguyên tắc
- Không thay đổi trái phép luồng đặt món, giỏ hàng, thanh toán mô phỏng, trạng thái đơn, nguyên liệu, khuyến mãi, đánh giá hoặc các vai trò đã có trong HTML gốc.
- Các chức năng server-side mới chỉ được bổ sung khi có nhu cầu và phải ghi rõ trong tài liệu.

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
