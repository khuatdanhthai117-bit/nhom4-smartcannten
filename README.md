# Smart Canteen

Ứng dụng web đặt món trước và quản lý vận hành căn tin. Dự án được tổ chức theo hướng tương tự CanteenGo, đồng thời giữ bản giao diện Smart Canteen làm nền tảng nghiệp vụ và trải nghiệm.

## Chức năng demo

- Đăng nhập/đăng ký theo vai trò sinh viên, giảng viên, khách, nhân viên và quản trị viên.
- Xem thực đơn, tìm kiếm, giỏ hàng, chọn slot nhận món và thanh toán mô phỏng.
- Theo dõi đơn; nhân viên nhận/chế biến/giao món.
- Quản trị món, nguyên liệu, khuyến mãi, đánh giá và báo cáo.

## Chạy nhanh

Yêu cầu Node.js 20 hoặc mới hơn.

```powershell
npm start
```

Mở `http://127.0.0.1:3000`. Chạy kiểm tra với `npm run check` và `npm test`.

## Cấu trúc

```text
smart-canteen/
  public/       Giao diện Smart Canteen
  src/          Máy chủ HTTP, mô hình dữ liệu và hàm xác thực
  api/          Điểm mở rộng API serverless
  tests/        Kiểm thử tự động
  docs/         Tài liệu kiến trúc và hướng phát triển
```

## Lưu ý

Giao diện hiện vẫn là bản demo phía trình duyệt: OTP, tài khoản và thanh toán không dùng cho môi trường thật. Xem `docs/KIEN_TRUC.md` để biết lộ trình hoàn thiện backend.
