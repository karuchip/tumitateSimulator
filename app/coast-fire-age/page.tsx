import CoastFireAgeClient from "./coastFIreAgeClient";

// seo
export const metadata = {
  title: "コーストFIREは何歳で達成できる？｜無料シミュレーター",
  description:
    "コーストFIREを何歳で達成できるかをシミュレーションできます。年齢・資産・利回りを入力するだけで将来の資産形成を可視化。",
  alternates: {
    canonical: "https://fire.hika-design.com/coast-fire-age"
  },
};


const CoastFireAgeOfAchievement = () => {
  return(
    <CoastFireAgeClient/>
  )
}

export default CoastFireAgeOfAchievement;
