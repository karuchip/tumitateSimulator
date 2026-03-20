import CoastFirePageClient from "./coastFirtePageClient";

// seo
export const metadata = {
  title: "コーストFIREに必要な積立額はいくら？｜無料シミュレーター",
  description:
    "コーストFIREを達成するために毎月いくら積み立てればよいかを簡単に計算できる無料シミュレーターです。必要元本や利回りをもとに、最適な積立額をシミュレーションできます。",
};

export default function CoastFirePage() {

  return (
    <CoastFirePageClient/>
  );
}
