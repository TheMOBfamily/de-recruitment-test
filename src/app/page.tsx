/**
 * Trang chính — STARTER SCAFFOLD cho bài thi tuyển dụng Deutschfuns.
 *
 * Yêu cầu hoàn thiện:
 *   1. Hero section + CTA dẫn đến form đăng ký
 *   2. Section giới thiệu 3 tính năng (lộ trình, giáo viên, AI)
 *   3. Form đăng ký gọi POST /api/register
 *   4. Toast thông báo thành công/lỗi
 *
 * Đề bài chi tiết: xem BAI-THI.md ở thư mục gốc.
 */

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <section className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <div className="text-center">
          <p className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-900 mb-6">
            Bài thi tuyển dụng — Starter Scaffold
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
            Deutschfuns Recruitment Test
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Chào ứng viên. Đây là starter scaffold cho bài thi đầu vào.
            Hãy đọc <code className="bg-slate-100 px-2 py-0.5 rounded">BAI-THI.md</code> ở
            thư mục gốc để xem yêu cầu chi tiết và bắt đầu thay thế nội dung
            file <code className="bg-slate-100 px-2 py-0.5 rounded">src/app/page.tsx</code>.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/api/register"
              className="rounded-lg border border-slate-300 px-6 py-3 hover:bg-slate-50 transition"
            >
              Test API endpoint
            </Link>
            <a
              href="https://nextjs.org/docs/app"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-slate-900 px-6 py-3 text-white hover:bg-slate-800 transition"
            >
              Next.js App Router docs
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mt-24">
          {[
            {
              t: "Bước 1 — Đọc đề",
              d: "Mở BAI-THI.md, hiểu rõ yêu cầu bắt buộc và tùy chọn",
            },
            {
              t: "Bước 2 — Code",
              d: "Thay nội dung này bằng landing page Deutschfuns + form đăng ký",
            },
            {
              t: "Bước 3 — Deploy",
              d: "Chạy `npx vercel` để deploy, ghi lại URL và nộp cùng repo",
            },
          ].map((f) => (
            <div key={f.t} className="rounded-xl border border-slate-200 p-6">
              <h3 className="font-semibold mb-2">{f.t}</h3>
              <p className="text-sm text-slate-600">{f.d}</p>
            </div>
          ))}
        </div>

        <footer className="mt-24 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
          © 2026 Deutschfuns LMS — Recruitment Test
        </footer>
      </section>
    </main>
  );
}
