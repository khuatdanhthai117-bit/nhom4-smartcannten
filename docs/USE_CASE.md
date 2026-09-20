# Use Case – Smart Canteen

## 1. Actor

| Actor | Mô tả |
|---|---|
| Sinh viên | Người dùng chính đặt món và nhận món tại căn tin |
| Giảng viên | Người dùng đặt món theo luồng khách hàng |
| Khách | Người dùng trải nghiệm chức năng demo |
| Nhân viên | Xử lý và cập nhật trạng thái đơn hàng |
| Quản trị viên | Quản lý dữ liệu và theo dõi hoạt động hệ thống |

## 2. Danh sách Use Case

### Nhóm khách hàng

- UC01 – Đăng nhập / đăng ký.
- UC02 – Xem thực đơn.
- UC03 – Tìm kiếm và lọc món.
- UC04 – Xem chi tiết món.
- UC05 – Thêm / sửa / xóa món trong giỏ hàng.
- UC06 – Chọn khung giờ nhận món.
- UC07 – Áp dụng mã khuyến mãi.
- UC08 – Thanh toán demo.
- UC09 – Xác nhận đặt món.
- UC10 – Theo dõi trạng thái đơn.
- UC11 – Hủy đơn theo điều kiện của hệ thống.
- UC12 – Xác nhận nhận món bằng mã.
- UC13 – Đánh giá đơn / món ăn.

### Nhóm nhân viên

- UC14 – Xem danh sách đơn cần xử lý.
- UC15 – Xác nhận đơn.
- UC16 – Từ chối đơn và ghi lý do.
- UC17 – Chuyển đơn sang trạng thái đang chuẩn bị.
- UC18 – Chuyển đơn sang trạng thái sẵn sàng.
- UC19 – Xác nhận khách đã nhận món.
- UC20 – Cập nhật tồn kho nguyên liệu.
- UC27 – Tìm kiếm, lọc và ưu tiên đơn hàng.
- UC28 – Xem chi tiết và nhật ký trạng thái đơn.

### Nhóm quản trị

- UC21 – Xem dashboard thống kê.
- UC22 – Quản lý món ăn.
- UC23 – Quản lý nguyên liệu.
- UC24 – Quản lý khuyến mãi.
- UC25 – Quản lý đánh giá.
- UC26 – Xem báo cáo doanh thu / món bán chạy / trạng thái đơn.
- UC29 – Quản lý tài khoản người dùng.
- UC30 – Quản lý trạng thái bán của món.
- UC31 – Quản lý và bật/tắt khuyến mãi.
- UC32 – Xem và phân tích đánh giá.

## 3. Đặc tả Use Case tiêu biểu

### UC09 – Xác nhận đặt món

**Actor:** Sinh viên / Giảng viên / Khách demo.

**Tiền điều kiện:** Người dùng đã có ít nhất một món trong giỏ.

**Luồng chính:**
1. Người dùng mở giỏ hàng.
2. Kiểm tra món và số lượng.
3. Chọn khung giờ nhận.
4. Chọn phương thức thanh toán demo.
5. Nhập mã khuyến mãi nếu có.
6. Hệ thống tính tổng tiền.
7. Người dùng xác nhận.
8. Hệ thống tạo mã đơn và mã lấy món.
9. Đơn xuất hiện trong danh sách theo dõi.

**Ngoại lệ:**
- Giỏ hàng trống → không cho xác nhận.
- Món hết hàng → không cho thêm hoặc yêu cầu điều chỉnh.
- Mã khuyến mãi không hợp lệ → thông báo và giữ nguyên tổng tiền.

### UC15 – Xác nhận đơn

**Actor:** Nhân viên.

**Tiền điều kiện:** Đơn đang ở trạng thái chờ xác nhận.

**Luồng chính:**
1. Nhân viên mở danh sách đơn.
2. Xem chi tiết món, số lượng và giờ nhận.
3. Chọn xác nhận.
4. Đơn chuyển sang trạng thái đã xác nhận.

### UC22 – Quản lý món ăn

**Actor:** Quản trị viên.

**Chức năng:** xem danh sách, thêm, sửa, xóa/ẩn món, cập nhật giá, danh mục, trạng thái bán và thông tin hiển thị.

## 4. Quan hệ nghiệp vụ

```text
Khách hàng ──> Xem menu ──> Chi tiết món ──> Giỏ hàng
                                           │
                                           ▼
                                      Đặt món
                                           │
                         ┌─────────────────┴─────────────────┐
                         ▼                                   ▼
                    Thanh toán                        Mã khuyến mãi
                         │
                         ▼
                    Theo dõi đơn
                         │
                         ▼
                      Nhận món
                         │
                         ▼
                       Đánh giá

Nhân viên ──> Tiếp nhận ──> Chuẩn bị ──> Sẵn sàng ──> Đã nhận

Admin ──> Menu / Nguyên liệu / Khuyến mãi / Đánh giá / Báo cáo
```

## 5. Quy tắc trạng thái đơn

```text
Chờ xác nhận
      ↓
Đã xác nhận
      ↓
Đang chuẩn bị
      ↓
Sẵn sàng
      ↓
Đã nhận
```

Các trạng thái kết thúc khác có thể gồm `Đã từ chối` hoặc `Đã hủy` theo logic demo hiện tại.


## 6. Đặc tả nghiệp vụ nâng cao

### UC27 – Tìm kiếm, lọc và ưu tiên đơn hàng

**Actor:** Nhân viên.

**Mục đích:** Giúp nhân viên tập trung vào đơn cần xử lý và giảm thao tác khi số lượng đơn tăng.

**Chức năng:**
1. Lọc theo trạng thái.
2. Tìm theo mã đơn.
3. Tìm theo tên khách hàng.
4. Tìm theo mã nhận món.
5. Nhận biết đơn chờ xử lý lâu và gắn mức **Cần xử lý gấp**.
6. Xem thời điểm cập nhật trạng thái cuối.

### UC28 – Xem chi tiết và nhật ký trạng thái

Nhân viên có thể mở một đơn để xem toàn bộ món, tiền, phương thức thanh toán, khung giờ nhận, ghi chú và lịch sử trạng thái. Mỗi thay đổi trạng thái mới được ghi với thời gian, người thực hiện và mô tả thao tác trong dữ liệu demo.

### UC29 – Quản lý tài khoản người dùng

**Actor:** Admin.

Admin có thể tìm kiếm tài khoản theo tên, email hoặc MSSV; theo dõi vai trò; xem trạng thái hoạt động; khóa/mở khóa tài khoản trong phạm vi demo.

### UC30 – Quản lý trạng thái bán của món

**Actor:** Admin.

Admin có thể bật/tắt một món trên thực đơn mà không cần xóa dữ liệu món. Trạng thái được phản ánh lại ở menu khách hàng.

### UC31 – Quản lý khuyến mãi

Admin có thể tạo mã mới, bật/tắt mã và xóa chương trình trong dữ liệu demo. Mã được chuẩn hóa thành chữ hoa trước khi lưu.

### UC32 – Phân tích đánh giá

Admin theo dõi số lượng phản hồi và điểm trung bình. Khi người dùng gửi đánh giá, điểm tổng hợp của món có thể được cập nhật trong dữ liệu demo.
