# Đặc tả chức năng chi tiết – Smart Canteen

## 1. Mục đích tài liệu

Tài liệu mô tả chi tiết các chức năng nghiệp vụ của Smart Canteen theo từng vai trò người dùng. Nội dung được dùng làm cơ sở cho phát triển giao diện, mô phỏng nghiệp vụ, kiểm thử, viết báo cáo và thuyết trình đồ án.

Smart Canteen trong phiên bản hiện tại là **Academic/Demo**. Dữ liệu, OTP, thanh toán và một số cơ chế kiểm soát được mô phỏng trên trình duyệt; không sử dụng dữ liệu thật.

## 2. Bối cảnh và mục tiêu nghiệp vụ

Căn tin trường học thường có lượng người dùng tập trung vào các khung giờ như trước giờ học, giờ nghỉ và giờ ăn trưa. Nếu toàn bộ quy trình chọn món, thanh toán và nhận món đều thực hiện trực tiếp tại quầy, người dùng có thể phải chờ lâu và nhân viên khó theo dõi số lượng đơn trong giờ cao điểm.

Smart Canteen mô phỏng quy trình số hóa:

```
Khám phá món → Chọn món → Giỏ hàng → Đặt trước
       ↓
Chọn giờ nhận → Thanh toán demo → Mã nhận món
       ↓
Nhân viên xử lý → Món sẵn sàng → Giao món
       ↓
Hoàn tất → Đánh giá → Dữ liệu báo cáo
```

Mục tiêu của hệ thống là minh họa cách một ứng dụng căn tin có thể kết nối trải nghiệm khách hàng với quy trình vận hành nội bộ.

## 3. Vai trò và phạm vi quyền

| Vai trò | Mục đích | Chức năng chính |
|---|---|---|
| Sinh viên | Người dùng chính | Menu, tìm kiếm, giỏ hàng, đặt món, khuyến mãi, thanh toán demo, theo dõi, đánh giá |
| Giảng viên | Người dùng đặt món | Menu, tìm kiếm, giỏ hàng, đặt món, theo dõi, đánh giá |
| Khách | Trải nghiệm demo | Đăng nhập demo bằng số điện thoại + OTP mô phỏng và sử dụng luồng khách hàng được cho phép |
| Nhân viên | Vận hành căn tin | Tiếp nhận đơn, từ chối đơn, chuẩn bị, đánh dấu sẵn sàng, xác nhận giao món, cập nhật nguyên liệu |
| Admin | Quản trị hệ thống | Dashboard, món ăn, nguyên liệu, khuyến mãi, đánh giá và báo cáo |

## 4. Chức năng xác thực và tài khoản

### 4.1. Đăng nhập

Người dùng chọn đúng nhóm tài khoản trước khi nhập thông tin:

- Sinh viên: MSSV hoặc email + mật khẩu.
- Giảng viên: email + mật khẩu.
- Nhân viên/Admin: email + mật khẩu.
- Khách: số điện thoại + OTP mô phỏng.

Hệ thống kiểm tra:

1. Trường thông tin bắt buộc không được bỏ trống.
2. Định dạng số điện thoại phải hợp lệ đối với chế độ khách.
3. Mật khẩu phải khớp tài khoản demo.
4. OTP của khách phải đúng mã demo.
5. Vai trò tài khoản phải phù hợp với chế độ đăng nhập đã chọn.

Sau khi thành công, phiên demo được lưu vào `localStorage` để người dùng có thể chuyển sang trang ứng dụng.

### 4.2. Đăng ký

Form đăng ký gồm:

- Họ và tên.
- Email.
- Số điện thoại.
- MSSV nếu là sinh viên.
- Mật khẩu.

Quy tắc:

- Không bỏ trống các trường bắt buộc.
- Email phải đúng định dạng.
- Mật khẩu tối thiểu 6 ký tự.
- Email/MSSV không được trùng dữ liệu đã có.
- Có MSSV thì tài khoản được mô phỏng là sinh viên; không có MSSV thì đi theo nhóm khách demo.

### 4.3. Đăng xuất

Khi người dùng đăng xuất, hệ thống xóa các khóa phiên demo liên quan và chuyển về trang đăng nhập.

## 5. Trang chủ

Trang chủ là điểm bắt đầu của người dùng sau khi đăng nhập.

Nội dung gồm:

- Thông điệp giới thiệu Smart Canteen.
- Mô tả quy trình đặt món.
- Các vai trò đang được hỗ trợ.
- Khu vực giới thiệu ưu điểm của hệ thống.
- Nút truy cập thực đơn.
- Nút xem đơn hàng.
- Thực đơn hôm nay.
- Giỏ hàng.
- Khu vực thông tin bổ sung.

Các thẻ thông tin trên trang chủ nhấn mạnh 4 giá trị:

1. Thực đơn đa dạng.
2. Chọn khung giờ nhận món.
3. Theo dõi trạng thái đơn hàng.
4. Thanh toán demo không phát sinh giao dịch thật.

## 6. Thực đơn

### 6.1. Danh mục

Thực đơn được phân thành:

- Tất cả.
- Cơm.
- Mì/Bún.
- Đồ ăn nhanh.
- Đồ uống.
- Ăn vặt.

### 6.2. Thông tin hiển thị của món

Mỗi món có thể mô phỏng các trường:

| Trường | Ý nghĩa |
|---|---|
| Mã món | Định danh món |
| Tên món | Tên hiển thị |
| Giá | Giá bán mô phỏng |
| Danh mục | Nhóm món |
| Mô tả | Thành phần và đặc điểm chính |
| Emoji/Hình minh họa | Minh họa trực quan trong prototype |
| Đánh giá | Điểm trung bình mô phỏng |
| Số đánh giá | Số lượt đánh giá mô phỏng |
| Số lượng đã bán | Chỉ số tham khảo cho món bán chạy |
| Thời gian chuẩn bị | Ước lượng phục vụ |
| Mức cay | Không, vừa, cay hoặc tùy chọn |
| Năng lượng | Giá trị kcal mô phỏng |
| Trạng thái | Còn hàng / tạm hết |
| Tồn kho demo | Số phần mô phỏng còn lại |

### 6.3. Tìm kiếm và lọc

Người dùng có thể:

- Nhập từ khóa.
- Lọc theo danh mục.
- Đặt lại bộ lọc.

Kết quả tìm kiếm được cập nhật trực tiếp trên giao diện. Khi không có kết quả, hệ thống hiển thị trạng thái rỗng thay vì để vùng nội dung trống.

## 7. Chi tiết món ăn

Khi chọn **Xem chi tiết món**, hệ thống mở modal với:

- Tên món và biểu tượng.
- Điểm đánh giá.
- Số lượng đánh giá.
- Số lượng đã bán.
- Mô tả món.
- Thành phần.
- Năng lượng.
- Thời gian chuẩn bị.
- Mức cay.
- Nhóm khách hàng/bữa ăn phù hợp.
- Giá.
- Gợi ý khi đặt món.
- Nút thêm vào giỏ.

Mục tiêu của màn hình là giúp người dùng có đủ thông tin trước khi quyết định thêm món.

## 8. Giỏ hàng

### 8.1. Chức năng

- Thêm món.
- Tăng số lượng.
- Giảm số lượng.
- Xóa món.
- Xem số món trong giỏ.
- Tính tạm tính.
- Tính giảm giá.
- Tính tổng thanh toán.

### 8.2. Công thức

```
Thành tiền món = Đơn giá × Số lượng

Tạm tính = Tổng thành tiền của tất cả món

Giảm giá = Giá trị khuyến mãi hợp lệ

Tổng thanh toán = max(0, Tạm tính - Giảm giá)
```

### 8.3. Quy tắc

- Không được đặt khi giỏ hàng trống.
- Số lượng không được nhỏ hơn 1.
- Món hết hàng không được thêm mới.
- Số lượng trong giỏ không được vượt quá tồn kho demo khi hệ thống có giới hạn tồn.

## 9. Quy trình đặt món

### 9.1. Bước 1 – Mở xác nhận đơn

Người dùng nhấn **Đặt món** từ giỏ hàng.

### 9.2. Bước 2 – Chọn khung giờ nhận

Các khung giờ demo gồm:

- 10:30 – 10:45
- 11:00 – 11:15
- 11:30 – 11:45
- 12:00 – 12:15
- 12:30 – 12:45
- 13:00 – 13:15

### 9.3. Bước 3 – Chọn phương thức thanh toán

- Ví MoMo – mô phỏng.
- QR ngân hàng – mô phỏng.

Không có giao dịch tiền thật trong phiên bản đồ án.

### 9.4. Bước 4 – Áp dụng khuyến mãi

Các mã demo tiêu biểu:

- `STUDENT10`: ưu đãi sinh viên trong điều kiện dữ liệu demo.
- `CAN20`: giảm theo cấu hình chương trình demo.

Hệ thống kiểm tra mã, trạng thái chương trình và giá trị đơn trước khi cập nhật tổng tiền.

### 9.5. Bước 5 – Ghi chú đơn

Người dùng có thể nhập yêu cầu như:

- Ít cay.
- Không hành.
- Thêm dụng cụ.
- Ghi chú khác cho quầy căn tin.

### 9.6. Bước 6 – Xác nhận

Sau khi xác nhận:

- Sinh mã đơn.
- Sinh mã nhận món.
- Lưu thông tin người đặt.
- Lưu danh sách món và số lượng.
- Lưu khung giờ.
- Lưu phương thức thanh toán.
- Lưu trạng thái thanh toán demo.
- Lưu ghi chú.
- Lưu thời gian tạo đơn.
- Đặt trạng thái ban đầu là **Chờ xác nhận**.

## 10. Theo dõi đơn hàng

Mỗi đơn hiển thị:

- Mã đơn.
- Thời gian tạo.
- Trạng thái.
- Timeline xử lý.
- Danh sách món.
- Số lượng.
- Thành tiền.
- Điểm nhận.
- Khung giờ.
- Phương thức thanh toán.
- Trạng thái thanh toán.
- Ghi chú.
- Tổng tiền.
- Mã nhận món.

### 10.1. Trạng thái chuẩn

```
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

### 10.2. Trạng thái kết thúc khác

- **Đã từ chối:** nhân viên từ chối đơn và phải ghi lý do.
- **Đã hủy:** người dùng hủy đơn theo điều kiện của demo.

## 11. Hủy đơn

Người dùng chỉ được hủy đơn khi:

- Đơn thuộc tài khoản hiện tại.
- Đơn vẫn ở trạng thái **Chờ xác nhận**.
- Vẫn nằm trong khoảng thời gian cho phép của demo.

Sau khi hủy, trạng thái chuyển sang **Đã hủy** và đơn không tiếp tục trong quy trình chuẩn bị.

## 12. Đánh giá

Chỉ hiển thị thao tác đánh giá cho đơn đã ở trạng thái **Đã nhận** và chưa có đánh giá tương ứng.

Thông tin đánh giá gồm:

- Số sao từ 1 đến 5.
- Nhận xét.
- Người đánh giá.
- Mã đơn liên quan.
- Thời gian gửi.

Dữ liệu được sử dụng cho giao diện quản trị và thống kê đánh giá trong demo.

## 13. Chức năng nhân viên

### 13.1. Dashboard nhân viên

Hiển thị các chỉ số:

- Số đơn chờ xác nhận.
- Số đơn đang chuẩn bị.
- Số đơn sẵn sàng.
- Số nguyên liệu đang ở mức thấp.

### 13.2. Tiếp nhận đơn

Nhân viên mở danh sách đơn và xem:

- Mã đơn.
- Khách hàng.
- Khung giờ nhận.
- Tổng tiền.
- Danh sách món.
- Phương thức thanh toán.
- Ghi chú khách hàng.
- Trạng thái hiện tại.

Đơn **Chờ xác nhận** có thể được:

- Nhận đơn → **Đã xác nhận**.
- Từ chối → **Đã từ chối** và yêu cầu nhập lý do.

### 13.3. Chuẩn bị món

Đơn **Đã xác nhận** được chuyển sang **Đang chuẩn bị**.

Sau khi hoàn tất việc chuẩn bị, nhân viên chuyển sang **Sẵn sàng**.

### 13.4. Giao món

Khi đơn ở trạng thái **Sẵn sàng**, nhân viên yêu cầu khách cung cấp mã nhận món.

- Mã đúng → chuyển **Đã nhận**.
- Mã sai → không thay đổi trạng thái và hiển thị cảnh báo.

## 14. Quản lý nguyên liệu

Danh sách nguyên liệu demo gồm:

- Tên nguyên liệu.
- Số lượng tồn.
- Đơn vị tính.
- Mức tồn tối thiểu.
- Trạng thái.

Quy tắc hiển thị:

```
Số lượng = 0        → Hết
0 < số lượng ≤ mức tối thiểu → Sắp hết
Số lượng > mức tối thiểu     → Đủ
```

Nhân viên/Admin có thể mở form cập nhật số lượng và lưu dữ liệu demo.

## 15. Chức năng Admin

### 15.1. Dashboard và báo cáo

Admin có thể xem các chỉ số tổng quan:

- Doanh thu mô phỏng.
- Tổng số đơn.
- Số đơn đã nhận.
- Số đơn đang chờ xử lý.
- Nhóm dữ liệu cần theo dõi.

Doanh thu demo chỉ tính các đơn không có trạng thái **Đã hủy** hoặc **Đã từ chối**.

### 15.2. Quản lý món ăn

Admin có thể:

- Xem danh sách.
- Thêm món.
- Sửa món.
- Xóa món.
- Cập nhật tên.
- Cập nhật giá.
- Chọn danh mục.
- Chỉnh mô tả.
- Chỉnh biểu tượng minh họa.

Danh sách quản trị hiển thị thêm:

- Điểm đánh giá.
- Số lượt đánh giá.
- Tồn kho demo.
- Trạng thái món.
- Nhóm/bữa ăn phù hợp.

### 15.3. Quản lý nguyên liệu

Admin có thể:

- Xem tồn kho.
- Xem mức tối thiểu.
- Nhận biết nguyên liệu sắp hết.
- Mở form cập nhật số lượng.

### 15.4. Quản lý khuyến mãi

Mỗi chương trình demo có:

- Tên chương trình.
- Mã khuyến mãi.
- Mức giảm.
- Mô tả.
- Trạng thái áp dụng.

### 15.5. Quản lý đánh giá

Admin xem:

- Người đánh giá.
- Số sao.
- Nội dung nhận xét.
- Đơn liên quan.
- Thời gian gửi.

## 16. Dữ liệu và lưu trạng thái

Prototype hiện sử dụng `localStorage` để mô phỏng dữ liệu phiên trình duyệt.

Các nhóm dữ liệu chính:

```
users
categories
menu
ingredients
promos
orders
reviews
currentUser
```

Cơ chế này giúp thao tác demo vẫn còn dữ liệu sau khi chuyển trang hoặc tải lại trình duyệt trong cùng môi trường.

Đây chưa phải cơ sở dữ liệu tập trung; nhiều người dùng thực tế chưa thể đồng bộ dữ liệu giữa các trình duyệt.

## 17. Quy tắc nghiệp vụ tổng hợp

| Quy tắc | Mô tả |
|---|---|
| R01 | Không đặt món khi giỏ hàng trống |
| R02 | Số lượng món phải là số dương |
| R03 | Món hết hàng không được thêm vào giỏ |
| R04 | Tổng tiền tính từ đơn giá và số lượng |
| R05 | Khuyến mãi chỉ áp dụng khi mã hợp lệ |
| R06 | Đơn mới bắt đầu ở trạng thái Chờ xác nhận |
| R07 | Nhân viên chỉ thao tác phù hợp với trạng thái |
| R08 | Đơn bị từ chối phải có lý do |
| R09 | Xác nhận giao món yêu cầu mã nhận chính xác |
| R10 | Người dùng chỉ đánh giá đơn đã nhận |
| R11 | Người dùng chỉ xem/hủy đơn thuộc tài khoản của mình |
| R12 | Thanh toán hiện tại chỉ là mô phỏng |

## 18. Xử lý trạng thái giao diện

Để trải nghiệm người dùng rõ ràng hơn, giao diện cần có:

- Loading state khi thực hiện thao tác cần chờ.
- Empty state khi chưa có đơn hoặc không có món phù hợp.
- Error state khi thao tác không hợp lệ.
- Toast thông báo thành công/thất bại.
- Modal xác nhận cho thao tác quan trọng.
- Đóng modal bằng phím `Esc`.
- Responsive trên desktop và mobile.

## 19. Luồng nghiệp vụ tổng thể

```
                    ┌───────────────────┐
                    │     Đăng nhập     │
                    └─────────┬─────────┘
                              ↓
                    ┌───────────────────┐
                    │    Trang chủ      │
                    └─────────┬─────────┘
                              ↓
                    ┌───────────────────┐
                    │      Menu         │
                    │ Tìm kiếm / Lọc    │
                    └─────────┬─────────┘
                              ↓
                    ┌───────────────────┐
                    │   Chi tiết món    │
                    └─────────┬─────────┘
                              ↓
                    ┌───────────────────┐
                    │    Giỏ hàng       │
                    └─────────┬─────────┘
                              ↓
                    ┌───────────────────┐
                    │    Đặt món        │
                    │ Slot + khuyến mãi │
                    │ Thanh toán demo   │
                    └─────────┬─────────┘
                              ↓
                    ┌───────────────────┐
                    │  Chờ xác nhận     │
                    └─────────┬─────────┘
                              ↓
                    ┌───────────────────┐
                    │   Đã xác nhận     │
                    └─────────┬─────────┘
                              ↓
                    ┌───────────────────┐
                    │ Đang chuẩn bị     │
                    └─────────┬─────────┘
                              ↓
                    ┌───────────────────┐
                    │    Sẵn sàng       │
                    └─────────┬─────────┘
                              ↓
                    ┌───────────────────┐
                    │     Đã nhận       │
                    └─────────┬─────────┘
                              ↓
                    ┌───────────────────┐
                    │     Đánh giá      │
                    └───────────────────┘
```

## 20. Tiêu chí hoàn thiện

Một phiên bản được xem là hoàn thiện hơn khi:

1. Mỗi chức năng trên giao diện đều có nội dung giải thích và dữ liệu phù hợp.
2. Các vai trò có luồng sử dụng riêng.
3. Dữ liệu món có đủ thông tin để minh họa nghiệp vụ.
4. Đặt món đi qua đầy đủ các bước từ menu đến nhận món.
5. Nhân viên có thể xử lý đơn theo trạng thái.
6. Admin có thể xem và quản lý dữ liệu mô phỏng.
7. Có thông báo cho thao tác thành công và lỗi.
8. Test case phản ánh đúng các chức năng hiện có.
9. README, tài liệu chức năng và giao diện không mâu thuẫn với nhau.
10. Các giới hạn của bản demo được ghi rõ, không nhầm lẫn với hệ thống production.

## 21. Định hướng phát triển

### Giai đoạn 1 – Prototype nâng cao
- Hoàn thiện toàn bộ giao diện.
- Bổ sung dữ liệu món và nội dung mô tả.
- Hoàn thiện trạng thái đơn.
- Bổ sung dashboard và báo cáo trực quan.

### Giai đoạn 2 – Backend
- Tạo REST API cho người dùng, món, giỏ hàng và đơn hàng.
- Tách nghiệp vụ khỏi file JavaScript giao diện.
- Kết nối database.

### Giai đoạn 3 – Production
- Xác thực server-side.
- Phân quyền server-side.
- Quản lý tồn kho tập trung.
- Kiểm soát slot nhận món.
- Tích hợp thanh toán sau khi đáp ứng yêu cầu bảo mật.
- Đồng bộ trạng thái đơn giữa khách hàng và nhân viên.
