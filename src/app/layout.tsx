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
  description: "Day Focus Lab은 AI Transformation 컨설팅, 집중 환경 설계, 개인 코칭을 통해 당신의 하루를 가장 가치 있게 만듭니다.",
  keywords: ["AI 컨설팅", "스터디카페", "코칭", "생산성", "집중", "성장"],
  openGraph: {
    title: "Day Focus Lab | 당신의 하루에 집중하다",
    description: "집중이 성장이 됩니다. AI 컨설팅, 스터디카페, 코칭 서비스를 제공합니다.",
    type: "website",
    locale: "ko_KR",
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
