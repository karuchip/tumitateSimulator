import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/common/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "コーストFIREシミュレーター｜毎月いくらで達成できる？",
  description:
    "コーストFIREの達成時期や必要な積立額を簡単にシミュレーションできる無料ツール。毎月の積立額や運用利回りをもとに、あなたの資産の成長をグラフで確認できます。",
  keywords:
    "コーストFIRE, FIRE, 積立シミュレーター, 資産運用, 投資, 早期リタイア, ライフプラン, FIREシミュレーション",
  openGraph: {
    title: "コーストFIREシミュレーター",
    description:
      "コーストFIRE達成までの積立金額を簡単に計算できる無料アプリです。",
    url: "https://tumitate-simulator.vercel.app/coastFirePage",
    siteName: "コーストFIREシミュレーター",
    locale: "ja_JP",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}

        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "コーストFIREシミュレーター",
          "url": "https://tumitate-simulator.vercel.app/coastFirePage",
          "applicationCategory": "FinanceApplication",
          "operatingSystem": "All",
          "description": "コーストFIRE達成に必要な積立額を計算できる無料シミュレーター。"
        })}
        </script>
      </body>
    </html>
  );
}
