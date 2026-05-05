import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deutschfuns Recruitment Test",
  description:
    "Bài thi đầu vào tuyển dụng vị trí Lập trình viên Fullstack tại Deutschfuns LMS.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body className="antialiased">{children}</body>
    </html>
  );
}
