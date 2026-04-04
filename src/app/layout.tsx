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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Day Focus Lab',
  alternateName: '데이포커스랩',
  url: 'https://dayfocuslab.com',
  description: 'AI PT(퍼스널 트레이닝)로 업무에 AI를 도입하세요. 대면 1:1·그룹 트레이닝, AX 특강, 포커스 스페이스를 제공합니다.',
  founder: {
    '@type': 'Person',
    name: '이지인',
    alternateName: 'Jinny Lee',
    jobTitle: 'CEO',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: '서울특별시',
    addressRegion: '광진구',
    streetAddress: '능동로 330, 5층',
    addressCountry: 'KR',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'dayfocuslab@gmail.com',
    telephone: '+82-10-4067-5392',
    contactType: 'customer service',
  },
  sameAs: [
    'https://www.linkedin.com/in/jiin-jinny-lee-15b4072b8/',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <a href="#main-content" className="skip-to-content">Skip to content</a>
          <Header />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
