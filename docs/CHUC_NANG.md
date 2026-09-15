# Đặc tả chức năng Smart Canteen

## 1. Người dùng và phân quyền

| Vai trò | Chức năng chính |
|---|---|
| Sinh viên | Xem menu, tìm kiếm, giỏ hàng, đặt món, thanh toán demo, theo dõi và đánh giá đơn |
| Giảng viên | Đặt món và theo dõi đơn theo luồng khách hàng |
| Khách | Trải nghiệm giao diện và các chức năng demo được cho phép |
| Nhân viên | Tiếp nhận, chế biến, cập nhật trạng thái, xác nhận nhận món, quản lý nguyên liệu |
| Quản trị viên | Quản lý món, nguyên liệu, khuyến mãi, đánh giá và báo cáo |

## 2. Luồng đặt món

1. Đăng nhập bằng vai trò phù hợp.
2. Chọn món hoặc tìm kiếm theo tên/danh mục.
3. Thêm món vào giỏ và điều chỉnh số lượng.
4. Chọn khung giờ nhận món.
5. Áp dụng mã khuyến mãi nếu có.
6. Chọn phương thức thanh toán demo.
7. Xác nhận đơn và nhận mã lấy món.
8. Theo dõi trạng thái đơn.
9. Khi đơn hoàn tất, người dùng có thể đánh giá.

## 3. Luồng nhân viên

`Chờ xác nhận → Đang chuẩn bị → Sẵn sàng → Đã nhận`

Nhân viên có thể từ chối đơn, cập nhật nguyên liệu và theo dõi các chỉ số vận hành.

## 4. Luồng quản trị

Quản trị viên có các nhóm chức năng quản lý món ăn, tồn kho/nguyên liệu, khuyến mãi, đánh giá và báo cáo doanh thu/bán chạy.

## 5. Phạm vi hiện tại

Đây là đồ án/demo chạy trên trình duyệt và máy chủ Node.js đơn giản. Dữ liệu nghiệp vụ trong giao diện vẫn mang tính mô phỏng; OTP, tài khoản và thanh toán chưa phải triển khai production.
