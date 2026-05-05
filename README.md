# Deutschfuns Recruitment Test

Đây là **dự án bài thi đầu vào tuyển dụng** vị trí Lập trình viên Fullstack tại Deutschfuns LMS.

> Đề bài chi tiết: xem [`BAI-THI.md`](./BAI-THI.md)


## Tóm tắt nhanh

- Stack: Next.js 14+ App Router, TypeScript, Tailwind CSS
- Mục tiêu: build trang giới thiệu Deutschfuns + form đăng ký + admin list, deploy lên Vercel
- Thời gian: 4 đến 8 giờ
- Triển khai: Vercel free Hobby tier


## Khởi động repo (cho ứng viên)

```bash
npm install
npm run dev
# http://localhost:3000
```

Repo này là **starter scaffold**. Phần `src/app/page.tsx` và `src/app/api/register/route.ts` đã có ví dụ tối thiểu để bạn tham khảo cấu trúc, nhưng:

- Bạn được phép xóa hết và viết lại từ đầu nếu muốn
- Bạn được phép giữ nguyên skeleton và mở rộng dần
- Quan trọng là code cuối cùng sạch, đúng yêu cầu và bạn hiểu rõ


## Deploy lên Vercel

```bash
# 1-click deploy qua CLI
npx vercel
# Lần đầu sẽ mở trình duyệt cho bạn login + chọn scope + tên project

# Hoặc: push lên GitHub rồi import từ https://vercel.com/new
```


## Cấu trúc thư mục starter

```
src/
  app/
    layout.tsx              # Root layout (đã setup metadata cơ bản)
    page.tsx                # Trang chính (placeholder, hãy thay đổi)
    api/
      register/
        route.ts            # Handler POST /api/register (skeleton)
public/                     # Assets tĩnh
BAI-THI.md                  # Đề bài chi tiết
```


## Đọc kỹ trước khi code

1. [`BAI-THI.md`](./BAI-THI.md) toàn bộ yêu cầu, tiêu chí chấm, cách nộp
2. README này
3. Tự nghiên cứu Next.js App Router docs nếu chưa quen


## Liên hệ

Email: tech@deutschfuns.com
