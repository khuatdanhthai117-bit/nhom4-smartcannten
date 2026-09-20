# 🍱 Smart Canteen — Hệ thống đặt món và quản lý căn tin thông minh

![Node.js](https://img.shields.io/badge/Node.js-20%2B-339933?logo=node.js&logoColor=white)
![CI](https://github.com/khuatdanhthai117-bit/nhom4-smartcannten/actions/workflows/ci.yml/badge.svg)
![License](https://img.shields.io/badge/license-academic%20project-blue)

> **Smart Canteen — Nhóm 4** là đồ án/demo xây dựng hệ thống web hỗ trợ đặt món trước và mô phỏng quy trình vận hành căn tin trong môi trường trường học.

## 📌 1. Giới thiệu dự án

Trong mô hình căn tin truyền thống, người dùng thường phải xếp hàng, chờ chọn món, thanh toán và chờ nhận đồ ăn. Khi lượng người sử dụng tăng cao vào giờ cao điểm, quá trình này dễ phát sinh tình trạng đông đúc, mất thời gian và khó kiểm soát số lượng đơn hàng.

**Smart Canteen** được xây dựng nhằm mô phỏng một quy trình số hóa từ lúc người dùng lựa chọn món đến khi đơn hàng được tiếp nhận, chế biến, hoàn tất và đánh giá. Bên cạnh giao diện dành cho khách hàng, dự án còn mô phỏng các vai trò nhân viên và quản trị viên để thể hiện đầy đủ hơn quy trình vận hành.

Dự án hiện được định hướng là **Academic/Demo**, chưa phải hệ thống production. Những chức năng như OTP, tài khoản thực, thanh toán thật, cơ sở dữ liệu production và kiểm soát tồn kho server-side vẫn nằm trong lộ trình phát triển.

## 🎯 2. Mục tiêu

### 2.1. Mục tiêu tổng quát

Xây dựng một hệ thống web có giao diện trực quan, dễ sử dụng và mô phỏng được quy trình đặt món – xử lý đơn – nhận món trong căn tin.

### 2.2. Mục tiêu cụ thể

- Cho phép người dùng xem và tìm kiếm thực đơn.
- Hỗ trợ phân loại món ăn và xem thông tin chi tiết.
- Cho phép thêm, sửa, xóa món trong giỏ hàng.
- Hỗ trợ chọn khung giờ nhận món và mã khuyến mãi trong phạm vi demo.
- Mô phỏng thanh toán và sinh mã lấy món.
- Theo dõi trạng thái đơn hàng theo từng giai đoạn.
- Mô phỏng nghiệp vụ xử lý đơn cho nhân viên.
- Mô phỏng quản lý món, nguyên liệu, khuyến mãi, đánh giá và báo cáo cho quản trị viên.
- Tạo nền tảng có thể mở rộng thành hệ thống sử dụng cơ sở dữ liệu và API xác thực thực tế.

## 👥 3. Đối tượng sử dụng

| Vai trò | Mục đích sử dụng | Chức năng tiêu biểu |
|---|---|---|
| Sinh viên | Đặt món tại căn tin | Xem menu, giỏ hàng, đặt món, theo dõi và đánh giá |
| Giảng viên | Đặt món theo luồng khách hàng | Xem menu, đặt món, theo dõi đơn |
| Khách | Trải nghiệm bản demo | Xem giao diện và các chức năng được cho phép |
| Nhân viên | Xử lý đơn hàng | Tiếp nhận, chế biến, cập nhật trạng thái, quản lý nguyên liệu |
| Quản trị viên | Quản lý và theo dõi hệ thống | Món ăn, tồn kho, khuyến mãi, đánh giá, báo cáo |

## ⭐ 4. Chức năng chính

> Phiên bản giao diện hiện tại đã được bổ sung dữ liệu món phong phú hơn (mô tả, thành phần, năng lượng, thời gian chuẩn bị, đánh giá, số lượng đã bán, mức cay và thông tin tồn kho demo) để việc trình diễn và thuyết minh nghiệp vụ trực quan hơn.

### 4.1. Chức năng dành cho khách hàng

**Tài khoản và vai trò**
- Đăng nhập/đăng ký theo vai trò được mô phỏng.
- Phân biệt luồng sinh viên, giảng viên và khách.
- Hiển thị giao diện phù hợp với vai trò.

**Thực đơn**
- Xem danh sách món ăn.
- Tìm kiếm theo tên.
- Lọc theo danh mục.
- Xem thông tin chi tiết món.
- Theo dõi trạng thái món trong phạm vi dữ liệu demo.

**Giỏ hàng**
- Thêm món vào giỏ.
- Tăng/giảm số lượng.
- Xóa món.
- Tính tổng giá trị đơn.
- Kiểm tra lại đơn trước khi xác nhận.

**Đặt món và thanh toán**
- Chọn khung giờ nhận món.
- Áp dụng khuyến mãi nếu có.
- Chọn phương thức thanh toán mô phỏng.
- Xác nhận đơn.
- Nhận mã lấy món.

**Theo dõi đơn hàng**
- Theo dõi quá trình xử lý.
- Hiển thị trạng thái đơn.
- Hỗ trợ hủy đơn theo điều kiện của bản demo.
- Đánh giá sau khi đơn hoàn tất.

### 4.2. Chức năng dành cho nhân viên

- Xem dashboard vận hành theo các trạng thái: chờ xác nhận, đã xác nhận, đang chuẩn bị và sẵn sàng.
- Tìm kiếm đơn theo mã đơn, tên khách hàng hoặc mã nhận món.
- Lọc đơn theo trạng thái để tập trung vào nhóm cần xử lý.
- Nhận biết các đơn chờ xử lý lâu và gắn mức ưu tiên “Cần xử lý gấp”.
- Xem chi tiết toàn bộ đơn: món, số lượng, tiền, khung giờ, thanh toán và ghi chú.
- Ghi nhật ký thay đổi trạng thái với thời gian và người thực hiện trong dữ liệu demo.
- Tiếp nhận đơn và chuyển sang đã xác nhận.
- Bắt đầu chế biến và chuyển sang đang chuẩn bị.
- Đánh dấu món đã hoàn thành và chuyển sang sẵn sàng.
- Xác nhận giao món bằng mã nhận của khách.
- Từ chối đơn với lý do bắt buộc để tạo dấu vết xử lý.
- Theo dõi nguyên liệu, mức tối thiểu và cảnh báo sắp hết/hết.
- Cập nhật số lượng và mức cảnh báo của nguyên liệu.

### 4.3. Chức năng dành cho quản trị viên

- Dashboard tổng quan về doanh thu, đơn hôm nay, người dùng hoạt động và kho cần chú ý.
- Xem phân bố đơn theo từng trạng thái và nhóm món được gọi nhiều.
- Quản lý toàn bộ đơn hàng và mở chi tiết nghiệp vụ.
- Quản lý món ăn: thêm, sửa, xóa, bật/tắt bán, giá, danh mục, tồn kho và thông tin hiển thị.
- Quản lý người dùng: tìm kiếm theo tên/email/MSSV, xem vai trò và khóa/mở khóa tài khoản demo.
- Quản lý nguyên liệu và mức cảnh báo tồn kho.
- Quản lý khuyến mãi: tạo, bật/tắt và xóa mã ưu đãi.
- Theo dõi đánh giá và điểm trung bình từ người dùng.
- Xem báo cáo doanh thu, giá trị đơn trung bình, tỷ lệ hoàn tất, top món và phân bố trạng thái.

## 🔄 5. Quy trình nghiệp vụ

### 5.1. Quy trình đặt món

```text
Người dùng
   ↓
Đăng nhập / chọn vai trò
   ↓
Xem thực đơn
   ↓
Tìm kiếm / lọc món
   ↓
Chọn món
   ↓
Thêm vào giỏ hàng
   ↓
Điều chỉnh số lượng
   ↓
Chọn khung giờ nhận
   ↓
Áp dụng khuyến mãi
   ↓
Chọn thanh toán demo
   ↓
Xác nhận đơn
   ↓
Nhận mã lấy món
   ↓
Theo dõi trạng thái
   ↓
Nhận món
   ↓
Đánh giá
```

### 5.2. Quy trình xử lý đơn của nhân viên

```text
Chờ xác nhận
      ↓
Đang chuẩn bị
      ↓
Sẵn sàng
      ↓
Đã nhận
```

Nhân viên có thể thực hiện các thao tác phù hợp với trạng thái đơn, đồng thời theo dõi nguyên liệu và tình hình vận hành trong phạm vi demo.

### 5.3. Quy trình quản trị

```text
Quản trị viên
      ↓
Dashboard
      ├── Quản lý món ăn
      ├── Quản lý nguyên liệu
      ├── Quản lý khuyến mãi
      ├── Quản lý đánh giá
      └── Báo cáo / thống kê
```

## 🧱 6. Kiến trúc hệ thống

```text
                         ┌─────────────────────┐
                         │      Người dùng     │
                         │ SV / GV / Khách     │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │      Frontend       │
                         │ public/index.html   │
                         │ HTML/CSS/JS         │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │    Node.js Server   │
                         │    src/server.js    │
                         └──────────┬──────────┘
                                    │
                    ┌───────────────┴───────────────┐
                    ▼                               ▼
           ┌─────────────────┐             ┌─────────────────┐
           │   API demo      │             │  Business data  │
           │ /api/health     │             │ auth / store    │
           │ /api/menu       │             │ dữ liệu mẫu     │
           └─────────────────┘             └─────────────────┘
```

### Các thành phần chính

- **Frontend:** giao diện Smart Canteen và các luồng nghiệp vụ mô phỏng phía trình duyệt.
- **Enhancement:** bổ sung responsive, UX state, keyboard accessibility và xử lý lỗi giao diện.
- **Node.js server:** cung cấp máy chủ HTTP đơn giản và phục vụ lớp enhancement.
- **API demo:** cung cấp health check và menu mẫu.
- **Auth/store:** chứa logic vai trò và dữ liệu mẫu phục vụ demo.
- **Docs:** tài liệu đặc tả chức năng, kiến trúc, API và hướng dẫn sử dụng.

## 📁 7. Cấu trúc thư mục

```text
nhom4-smartcannten/
├── .github/              # GitHub Actions và issue templates
├── api/                  # Điểm mở rộng cho API/serverless
├── docs/                 # Đặc tả, kiến trúc, API, hướng dẫn
├── public/               # Giao diện và tài nguyên public
├── src/                  # Node.js server, auth, store, enhancement
├── .env.example          # Mẫu biến môi trường
├── .gitignore            # Các file không đưa lên Git
├── CHANGELOG.md          # Lịch sử thay đổi
├── CONTRIBUTING.md       # Quy ước đóng góp
├── README.md             # Tài liệu chính của dự án
├── SECURITY.md           # Lưu ý bảo mật
├── index.html            # Điểm vào chuyển hướng tới giao diện public
└── package.json          # Cấu hình Node.js và scripts
```

## 🛠️ 8. Công nghệ sử dụng

| Công nghệ | Vai trò |
|---|---|
| HTML5 | Xây dựng cấu trúc giao diện |
| CSS3 | Thiết kế giao diện và responsive |
| JavaScript | Xử lý tương tác và nghiệp vụ phía trình duyệt |
| Node.js | Chạy HTTP server và API demo |
| Git/GitHub | Quản lý mã nguồn và lịch sử thay đổi |
| GitHub Actions | Tự động kiểm tra chất lượng mã nguồn |
| Markdown | Viết tài liệu dự án |

## 🚀 9. Cài đặt và chạy dự án

### Yêu cầu môi trường

- Node.js **20 trở lên**.
- Trình duyệt hiện đại như Chrome, Edge hoặc Firefox.

### Cài đặt

```bash
npm install
```

### Khởi động

```bash
npm start
```

Mở trình duyệt tại:

```text
http://127.0.0.1:3000
```

> Khuyến nghị chạy bằng `npm start` để sử dụng đầy đủ lớp UX enhancement. Mở trực tiếp `public/index.html` vẫn cho phép xem prototype giao diện gốc.

## 🧪 10. Kiểm thử và kiểm soát chất lượng

Các lệnh kiểm tra:

```bash
npm run check
npm test
npm run verify
```

GitHub Actions được sử dụng để tự động kiểm tra các thay đổi trên môi trường Node.js được cấu hình trong workflow.

Các nhóm kiểm thử cần quan tâm gồm:

- Kiểm tra server khởi động.
- Kiểm tra endpoint `/api/health`.
- Kiểm tra endpoint `/api/menu`.
- Kiểm tra các luồng giao diện chính.
- Kiểm tra responsive trên màn hình nhỏ.
- Kiểm tra trạng thái loading/empty/error.
- Kiểm tra thao tác bàn phím và đóng modal bằng `Esc`.

## 🎨 11. UX/UI

Lớp enhancement hiện có hướng tới việc làm giao diện ổn định và dễ sử dụng hơn, bao gồm:

- Responsive trên màn hình nhỏ.
- Focus keyboard rõ ràng.
- Loading state cho form.
- Empty state cho danh sách.
- Hỗ trợ phím `Esc` đóng modal.
- Toast khi xảy ra lỗi runtime ở mức giao diện khi có thể.
- Bảng dữ liệu có thể cuộn ngang trên điện thoại.
- Giữ nguyên nghiệp vụ và prototype hiện có khi bổ sung enhancement.

## 🔌 12. API demo

| Method | Endpoint | Mục đích |
|---|---|---|
| GET | `/api/health` | Kiểm tra server đang hoạt động |
| GET | `/api/menu` | Lấy menu mẫu từ server |

API hiện mang tính **demo**, chưa phải API production có xác thực, database và kiểm soát giao dịch đầy đủ.

## 📚 13. Tài liệu dự án

- [`docs/KIEN_TRUC.md`](docs/KIEN_TRUC.md) — kiến trúc hệ thống và hướng phát triển.
- [`docs/CHUC_NANG.md`](docs/CHUC_NANG.md) — đặc tả chức năng chi tiết, dữ liệu, quy tắc nghiệp vụ và luồng xử lý.
- [`docs/HUONG_DAN_SU_DUNG.md`](docs/HUONG_DAN_SU_DUNG.md) — hướng dẫn chạy và sử dụng.
- [`docs/API.md`](docs/API.md) — mô tả API demo.
- [`CONTRIBUTING.md`](CONTRIBUTING.md) — quy trình đóng góp và quy ước commit.
- [`SECURITY.md`](SECURITY.md) — lưu ý bảo mật.
- [`CHANGELOG.md`](CHANGELOG.md) — lịch sử thay đổi.

## 🔐 14. Bảo mật và giới hạn demo

Đây là dự án học tập/demo. Không sử dụng dữ liệu thật cho:

- mật khẩu;
- OTP;
- token;
- API key;
- thông tin thẻ;
- thông tin thanh toán;
- dữ liệu cá nhân nhạy cảm.

Không commit file `.env` hoặc thông tin bí mật lên repository.

## 📈 15. Hướng phát triển

### Giai đoạn 1 — Hoàn thiện prototype

- Hoàn thiện giao diện.
- Chuẩn hóa responsive.
- Hoàn thiện các luồng đặt món và quản lý đơn.
- Hoàn thiện tài liệu.

### Giai đoạn 2 — Backend thực tế

- Tách nghiệp vụ khỏi HTML lớn.
- Xây dựng REST API đầy đủ.
- Thiết kế cơ sở dữ liệu thật.
- Xây dựng xác thực server-side.
- Sử dụng session/JWT phù hợp.

### Giai đoạn 3 — Vận hành thông minh

- Kiểm soát tồn kho server-side.
- Quản lý slot nhận món theo thời gian thực.
- Đồng bộ trạng thái đơn giữa khách hàng và nhân viên.
- Thống kê doanh thu theo ngày/tháng.
- Phân tích món bán chạy.

### Giai đoạn 4 — Tích hợp thực tế

- Tích hợp cổng thanh toán sau khi đáp ứng yêu cầu bảo mật.
- Thông báo đơn hàng.
- QR/mã lấy món.
- Quản lý nhiều căn tin hoặc nhiều điểm nhận.
- Kiểm thử đồng thời và kiểm thử tải.

## 📊 16. Kết quả đạt được

Dự án đã xây dựng được một nền tảng Smart Canteen có cấu trúc source rõ ràng, giao diện prototype, Node.js server, API demo, các lớp UX enhancement, kiểm thử và tài liệu đi kèm.

Các chức năng được mô phỏng theo quy trình nghiệp vụ của căn tin, giúp nhóm có thể trình bày cả **giao diện, chức năng, kiến trúc, API, kiểm thử và hướng phát triển** thay vì chỉ trình diễn một trang web tĩnh.

## ⚠️ 17. Hạn chế hiện tại

- Dữ liệu nghiệp vụ vẫn mang tính mô phỏng.
- Chưa có cơ sở dữ liệu production.
- Xác thực và phân quyền server-side chưa hoàn thiện.
- Thanh toán chưa kết nối cổng thật.
- Tồn kho và slot chưa được kiểm soát tập trung trên server.
- Chưa phải hệ thống triển khai thực tế.

Việc ghi rõ các giới hạn giúp phân biệt chức năng **đã mô phỏng** với chức năng **đã triển khai production**.

## 👨‍💻 18. Phạm vi đồ án

Smart Canteen được tổ chức để phục vụ mục đích học tập, trình bày source code, mô phỏng nghiệp vụ, kiểm thử và bảo vệ đồ án. Repository ưu tiên khả năng đọc hiểu, chạy thử và mở rộng trong các giai đoạn tiếp theo.

---

**Smart Canteen — Nhóm 4**  
*Academic project / Demo application*