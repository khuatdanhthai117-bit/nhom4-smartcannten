# Đóng góp cho Smart Canteen

## Quy trình

1. Tạo branch từ `main` cho từng chức năng hoặc lỗi.
2. Thay đổi nhỏ, rõ mục đích và không đưa thông tin bí mật vào code.
3. Chạy `npm run verify` trước khi commit.
4. Mô tả rõ thay đổi trong pull request.
5. Chỉ merge khi kiểm thử CI đạt.

## Quy ước commit

Khuyến nghị dùng dạng:

- `feat:` — thêm chức năng.
- `fix:` — sửa lỗi.
- `refactor:` — tổ chức lại code.
- `docs:` — tài liệu.
- `test:` — kiểm thử.
- `chore:` — cấu hình/công cụ.

## Nguyên tắc code

- Ưu tiên code dễ đọc và tên biến/hàm có ý nghĩa.
- Không hard-code secret.
- Không phá vỡ luồng đặt món hiện có khi sửa frontend.
- Với thay đổi nghiệp vụ quan trọng, bổ sung hoặc cập nhật test tương ứng.
