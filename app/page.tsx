import HomeClient from "./pageClient";

export const metadata = {
  title: "コーストFIREシミュレーター｜毎月いくらで達成できる？無料で簡単計算",
  description:
    "コーストFIREを目指す方向けの無料シミュレーター。毎月の積立額・達成年齢・資産推移を簡単に計算できます。積立金額シミュレーターや達成年齢予測、資産推移シミュレーションをまとめてチェック可能。",
  keywords: [
    "コーストFIRE",
    "コーストfireシミュレーション",
    "コーストファイア シュミレーション",
    "コーストファイア シミュレーション",
    "FIRE シミュレーター",
    "積立 シミュレーション",
    "資産運用 シミュレーター",
    "FIRE 達成年齢",
    "資産形成 計算",
    "コーストfire いくら",
    "コーストfire 年齢別",
    "コーストfire 目安"
  ],
  alternates: {
    canonical: "https://fire.hika-design.com",
  },
  openGraph: {
    title: "コーストFIREシミュレーター｜毎月いくらで達成できる？",
    description:
      "積立額・達成年齢・資産推移をまとめてシミュレーション。コーストFIREを目指すための無料ツール。",
    url: "https://fire.hika-design.com",
    siteName: "Hika Dev Design",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "コーストFIREシミュレーター",
    description:
      "毎月いくらでFIRE達成できる？無料で簡単シミュレーション",
  },
};

export default function Home() {
  return (
    <>
      <HomeClient/>
    </>
  );
}
