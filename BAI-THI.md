# Bài thi đầu vào tuyển dụng — Deutschfuns LMS

**Vị trí**: Lập trình viên Fullstack (Node.js, TypeScript, React Native/Astro)
**Thời gian làm bài**: 4 đến 8 giờ (ứng viên tự chọn ngày, miễn nộp đúng deadline)
**Stack bắt buộc**: Next.js 14+ App Router, TypeScript, Tailwind CSS
**Stack khuyến khích**: NestJS (cho API tách riêng), Prisma/Drizzle, Postgres
**Triển khai**: Vercel (free Hobby tier)


## Bối cảnh

Deutschfuns là nền tảng học tiếng Đức trực tuyến. Bạn được giao nhiệm vụ xây dựng trang giới thiệu kèm form đăng ký nhận thông tin khóa học. Đây là bài thi đầu vào, mục đích là đánh giá tư duy fullstack, code quality, khả năng deploy thực tế và sự chỉn chu trong sản phẩm cuối.


## Yêu cầu bắt buộc (Phải hoàn thành — 6 điểm)

### 1. Trang giới thiệu (1 điểm)
- Thiết kế responsive (mobile-first)
- Hero section với CTA dẫn đến form đăng ký
- Section giới thiệu 3 tính năng chính (lộ trình cá nhân, giáo viên, AI)
- SEO metadata cơ bản (title, description, OG)

### 2. Form đăng ký (1.5 điểm)
- Trường: họ tên (bắt buộc), email (bắt buộc), số điện thoại (tùy chọn), trình độ tiếng Đức hiện tại (A1-C1, dropdown)
- Validation client-side: email regex, không để trống
- Hiển thị toast/thông báo khi thành công và khi lỗi
- Không bị duplicate submit khi double-click

### 3. API endpoint (1.5 điểm)
- POST `/api/register` chấp nhận JSON
- Validation server-side (đừng tin client)
- Lưu vào database (chọn 1: Vercel Postgres, Supabase, Neon, hoặc SQLite + Prisma cho dev)
- Trả về 200/201 khi thành công, 400 khi validation fail, 500 khi lỗi server
- Idempotent với cùng email (không tạo trùng, trả về existing)

### 4. Trang admin xem danh sách (1 điểm)
- Path `/admin/registrations` (không cần phân trang nếu dưới 100 dòng)
- Bảo vệ bằng basic auth hoặc 1 password chung trong env (không cần full auth)
- Hiển thị: thời gian, họ tên, email, phone, trình độ
- Sort theo thời gian giảm dần

### 5. Deploy lên Vercel (1 điểm)
- Public URL truy cập được
- Domain dạng `*.vercel.app` ổn, không cần custom domain
- Database production hoạt động (đừng quên migrate)
- Submit URL cùng với code

## Yêu cầu tùy chọn (Điểm cộng — 4 điểm)

### 6. NestJS API tách riêng (1 điểm)
- Tạo thư mục `apps/api` chứa NestJS service
- POST `/api/register` được forward từ Next.js sang NestJS (proxy hoặc Nest deploy serverless)
- Áp dụng class-validator + DTO

### 7. Đa ngôn ngữ Việt-Anh (1 điểm)
- Toggle VI/EN (cookie nhớ lựa chọn)
- Tối thiểu 80% nội dung được dịch

### 8. Test tự động (1 điểm)
- Unit test cho validation logic (Vitest hoặc Jest)
- Tối thiểu 1 e2e test với Playwright cho luồng register

### 9. CI/CD và quy chuẩn code (0.5 điểm)
- GitHub Actions chạy lint + typecheck + test trên mỗi PR
- ESLint + Prettier configured
- Conventional commits

### 10. AI bonus (0.5 điểm)
- Thêm chatbot nhỏ ở góc phải, tích hợp OpenAI hoặc Claude API
- Trả lời câu hỏi cơ bản về khóa học (prompt engineering tự thiết kế)


## Tiêu chí chấm

| Tiêu chí | Trọng số |
|----------|----------|
| Hoàn thành chức năng bắt buộc | 60% |
| Code quality (cấu trúc, đặt tên, separation of concerns) | 15% |
| TypeScript đúng (không any, generic hợp lý) | 10% |
| UX và polish (loading, error, empty state) | 10% |
| Bonus và sáng tạo | 5% |


## Cách làm và nộp bài

1. Fork repo này hoặc tạo repo mới trên GitHub (ưu tiên private, share quyền cho `tech@deutschfuns.com`)
2. Commit thường xuyên với conventional commit message (`feat:`, `fix:`, `chore:`, ...)
3. Viết README.md mô tả: stack, cách chạy local, decision tradeoff, demo URL
4. Nộp bài bằng cách trả lời email tuyển dụng kèm: link repo + URL demo Vercel
5. Sẵn sàng demo trực tiếp khi phỏng vấn vòng 2


## Quy tắc

- Được dùng AI (Copilot, Cursor, Claude) nhưng phải hiểu rõ code mình submit. Sẵn sàng giải thích từng dòng khi phỏng vấn
- Được copy snippet từ Stack Overflow nhưng phải hiểu lý do
- Không được copy nguyên code của ứng viên khác
- Plagiarism phát hiện được sẽ loại ngay


## Câu hỏi thường gặp

**Hỏi**: Em có cần làm hết toàn bộ yêu cầu tùy chọn không?
**Đáp**: Không. Hoàn thành chỉn chu phần bắt buộc trước. Yêu cầu tùy chọn chỉ thêm điểm.

**Hỏi**: Em có thể dùng template có sẵn không?
**Đáp**: Có thể dùng `create-next-app` để khởi tạo. Không được dùng template landing page có sẵn (kiểu HTML5 UP, Tailwind UI).

**Hỏi**: Database miễn phí có giới hạn, em phải làm sao?
**Đáp**: Vercel Postgres free tier 256MB là đủ. Hoặc Supabase 500MB. Hoặc Neon 0.5GB. Đều đủ cho bài này.

**Hỏi**: Em có cần test trên mobile thật không?
**Đáp**: Test bằng Chrome DevTools responsive mode là đủ.

**Hỏi**: Form submit xong em redirect đi đâu?
**Đáp**: Tự thiết kế UX. Có thể stay tại trang và hiện thông báo thành công, hoặc redirect đến trang cảm ơn riêng.


## Liên hệ

Mọi thắc mắc gửi về email tuyển dụng. Phản hồi trong 24 giờ làm việc.

Chúc bạn làm bài tốt và đặt chân được vào đội Deutschfuns.

---

*Tác giả đề: Lim Paul (Fong) — Tech Lead Deutschfuns*
*Phiên bản đề: 1.0 (2026-05-05)*
