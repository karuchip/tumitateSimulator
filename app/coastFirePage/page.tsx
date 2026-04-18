import CoastFirePageClient from "./coastFirtePageClient";

// seo
export const metadata = {
  title: "コーストFIREに必要な積立額はいくら？｜無料シミュレーター",
  description:
    "コーストFIREを達成するために毎月いくら積み立てればよいかを簡単に計算できる無料シミュレーターです。必要元本や利回りをもとに、最適な積立額をシミュレートできます。",
    openGraph: {
      title: "コーストFIREに必要な積立額はいくら？",
      description: "あなたは毎月いくら積み立てれば達成できる？",
      url: "https://fire.hika-design.com/coastFirePage",
      siteName: "コーストFIREシミュレーター",
      images: [
      {
        url: "https://fire.hika-design.com/ogp.png",
        width: 1200,
        height: 630,
      },
    ],
    local: "ja_JP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "コーストFIRE診断",
    description: "あなたは何歳で達成できる？",
    images: ["https://fire.hika-design.com/ogp.png"],
  },
};

export default function CoastFirePage() {

  return (
    <CoastFirePageClient/>
  );
}
