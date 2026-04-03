import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Day Focus Lab | 당신의 하루에 집중하다",
  description: "AI PT(퍼스널 트레이닝)로 업무에 AI를 도입하세요. 대면 1:1·그룹 트레이닝, AX 특강, 포커스 스페이스를 제공합니다.",
  keywords: ["AI PT", "AI 트레이닝", "업무 자동화", "AX 특강", "포커스 스페이스", "AI Transformation"],
  openGraph: {
    title: "Day Focus Lab | 당신의 하루에 집중하다",
    description: "AI PT로 업무를 혁신하세요. 대면 1:1·그룹 AI 트레이닝, AX 특강, 포커스 스페이스를 제공합니다.",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Day Focus Lab | 당신의 하루에 집중하다",
    description: "AI PT로 업무를 혁신하세요. 대면 1:1·그룹 AI 트레이닝, AX 특강, 포커스 스페이스를 제공합니다.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <Header />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
