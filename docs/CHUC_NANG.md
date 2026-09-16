# Đặc tả chức năng Smart Canteen

## 1. Mục đích tài liệu

Tài liệu mô tả các chức năng nghiệp vụ chính của Smart Canteen, phạm vi của từng vai trò và các luồng xử lý quan trọng. Nội dung được sử dụng làm cơ sở để phát triển giao diện, API demo, kiểm thử và thuyết trình đồ án.

## 2. Người dùng và phân quyền

| Vai trò | Mục tiêu | Chức năng chính |
|---|---|---|
| Sinh viên | Đặt món nhanh tại căn tin | Menu, tìm kiếm, giỏ hàng, đặt món, thanh toán demo, theo dõi, đánh giá |
| Giảng viên | Đặt món theo luồng khách hàng | Menu, giỏ hàng, đặt món, theo dõi và đánh giá |
| Khách | Trải nghiệm bản demo | Xem giao diện và chức năng được cho phép |
| Nhân viên | Vận hành đơn hàng | Tiếp nhận, chế biến, cập nhật trạng thái, xác nhận nhận món, nguyên liệu |
| Quản trị viên | Quản lý hệ thống | Món ăn, nguyên liệu, khuyến mãi, đánh giá, báo cáo |

> Phân quyền hiện tại phục vụ mục đích mô phỏng. Việc xác thực server-side và bảo vệ tài nguyên bằng cơ chế production vẫn là phần phát triển tiếp theo.

## 3. Chức năng khách hàng

### 3.1. Tài khoản

- Đăng nhập/đăng ký theo vai trò demo.
- Hiển thị giao diện phù hợp với vai trò.
- Đăng xuất.
- Quản lý thông tin tài khoản trong phạm vi giao diện mô phỏng.

### 3.2. Thực đơn

- Xem danh sách món ăn.
- Tìm kiếm món theo tên.
- Lọc theo danh mục.
- Xem chi tiết món.
- Theo dõi trạng thái món.

### 3.3. Giỏ hàng

- Thêm món.
- Tăng/giảm số lượng.
- Xóa món.
- Tính tổng tiền.
- Kiểm tra lại danh sách trước khi đặt.

### 3.4. Đặt món

- Chọn khung giờ nhận món.
- Nhập/kiểm tra thông tin cần thiết.
- Áp dụng mã khuyến mãi nếu có.
- Chọn phương thức thanh toán demo.
- Xác nhận đơn.
- Nhận mã lấy món.

### 3.5. Theo dõi và đánh giá

- Theo dõi trạng thái đơn.
- Hủy đơn theo điều kiện của bản demo.
- Xem kết quả xử lý.
- Đánh giá sau khi đơn hoàn tất.

## 4. Luồng đặt món chi tiết

```text
Bắt đầu
   ↓
Đăng nhập / chọn vai trò
   ↓
Xem thực đơn
   ↓
Tìm kiếm hoặc lọc món
   ↓
Xem chi tiết món
   ↓
Thêm vào giỏ hàng
   ↓
Kiểm tra giỏ hàng
   ↓
Điều chỉnh số lượng?
   ├── Có → Cập nhật giỏ hàng
   └── Không
          ↓
Chọn khung giờ nhận
          ↓
Áp dụng khuyến mãi nếu có
          ↓
Chọn thanh toán demo
          ↓
Xác nhận đơn
          ↓
Sinh mã lấy món
          ↓
Theo dõi trạng thái
          ↓
Nhận món
          ↓
Đánh giá
          ↓
Kết thúc
```

## 5. Luồng nhân viên

Trạng thái chính:

`Chờ xác nhận → Đang chuẩn bị → Sẵn sàng → Đã nhận`

Nhân viên có thể:

1. Xem danh sách đơn.
2. Tiếp nhận đơn.
3. Chuyển đơn sang đang chuẩn bị.
4. Đánh dấu món đã sẵn sàng.
5. Xác nhận khách đã nhận món.
6. Từ chối đơn trong trường hợp được mô phỏng cho phép.
7. Theo dõi nguyên liệu/tồn kho demo.

## 6. Luồng quản trị viên

Quản trị viên có các nhóm chức năng:

### 6.1. Quản lý món ăn

- Xem danh sách.
- Thêm món.
- Chỉnh sửa thông tin.
- Cập nhật giá/trạng thái.
- Xóa món theo quyền.

### 6.2. Quản lý nguyên liệu

- Theo dõi danh sách nguyên liệu.
- Cập nhật tồn kho mô phỏng.
- Theo dõi tình trạng thiếu nguyên liệu.

### 6.3. Quản lý khuyến mãi

- Theo dõi mã khuyến mãi.
- Kiểm tra điều kiện áp dụng.
- Quản lý trạng thái chương trình.

### 6.4. Quản lý đánh giá

- Xem đánh giá của người dùng.
- Theo dõi phản hồi về món ăn/dịch vụ.

### 6.5. Báo cáo

- Doanh thu mô phỏng.
- Số lượng đơn.
- Món bán chạy.
- Chỉ số vận hành cơ bản.

## 7. Quy tắc nghiệp vụ chính

- Không nên cho phép đặt món khi danh sách giỏ hàng trống.
- Số lượng món phải là số nguyên dương.
- Tổng tiền được tính từ giá món × số lượng, sau đó áp dụng khuyến mãi nếu đủ điều kiện.
- Trạng thái đơn phải tuân theo luồng xử lý được quy định.
- Chỉ cho phép đánh giá sau khi đơn đã hoàn tất/đã nhận.
- Dữ liệu thanh toán trong bản demo không đại diện cho giao dịch thật.

## 8. API liên quan

| Method | Endpoint | Mục đích |
|---|---|---|
| GET | `/api/health` | Kiểm tra trạng thái server |
| GET | `/api/menu` | Lấy danh sách menu mẫu |

API hiện là API demo; xác thực, database và kiểm soát giao dịch server-side là các hạng mục tương lai.

## 9. Phạm vi hiện tại

Smart Canteen là đồ án/demo chạy trên trình duyệt và máy chủ Node.js đơn giản. Giao diện và một số nghiệp vụ được mô phỏng để phục vụ trình bày. OTP, tài khoản thật, thanh toán thật, database production, kiểm soát tồn kho server-side và bảo mật production chưa thuộc phạm vi triển khai hiện tại.

## 10. Tiêu chí hoàn thiện trong tương lai

- Tách hoàn toàn giao diện và nghiệp vụ khỏi file HTML lớn.
- Xây dựng REST API đầy đủ.
- Thiết kế database thật.
- Xác thực và phân quyền server-side.
- Đồng bộ đơn hàng theo thời gian thực.
- Kiểm soát tồn kho và slot nhận món trên server.
- Bổ sung kiểm thử nghiệp vụ, bảo mật và tải.