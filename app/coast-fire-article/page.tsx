import CoastFireArticleClient from "./coastFireArticleClient";

export const metadata = {
  title:
    "コーストFIREとは？いくら必要？｜シミュレーションで年齢・資産を計算",
  description:
    "コーストFIREの意味や必要資産、4%ルールをわかりやすく解説。いくらあれば達成できるのか、無料シミュレーションで年齢・積立額をすぐに計算できます。",
};

export default function CoastFireArticlePage() {
  return (
    <CoastFireArticleClient/>
  );
}
