import { FadeIn } from "../animation/fadeIn";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

export default function HowToUseAchieveSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-8 !bg-[#FAFAFA]">
      <div className="max-w-4xl mx-auto">



        <FadeIn>
          {/* タイトル */}
          <h2 className="text-2xl md:text-3xl font-bold !mb-8 text-gray-800">
            <DoneOutlineIcon/> このシミュレーターの使い方
          </h2>
        </FadeIn>

        <FadeIn>
          {/* Step1 */}
          <div className="!mb-8">
            <h3 className="text-lg md:text-xl font-semibold text-green-700 !mb-2">
              Step1. 現在の状況を入力
            </h3>
            <p className="text-gray-600 !mb-3">
              まずは、今の資産状況を入力します。
            </p>
            <ul className="list-decimal !pl-6 text-gray-700 space-y-1">
              <li>現在の年齢：今の年齢を入力します</li>
              <li>運用中の資産額：現在の投資額を入力します</li>
              <li>月の積立額：毎月積み立てる金額を入力します</li>
              <li>運用利回り（年率）：想定する利回り（例：3〜5%）</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn>
          {/* Step2 */}
          <div className="!mb-10">
            <h3 className="text-lg md:text-xl font-semibold text-green-700 !mb-2">
              Step2. 目標を設定
            </h3>
            <p className="text-gray-600 !mb-3">
              次に、目標となる老後資金を設定します。
            </p>
            <ul className="list-decimal !pl-6 text-gray-700 space-y-1">
              <li>老後に必要な資金：目標とする資産額を入力します</li>
              <li>老後資金を受け取りたい年齢：取り崩し開始年齢を設定します</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn>
          {/* 自動計算 */}
          <div className="mb-20 p-5 bg-green-50 rounded-xl">
            <h3 className="text-lg md:text-xl font-semibold text-green-800 mb-2">
              入力すると自動で計算されます
            </h3>
            <p className="text-green-900">
              このシミュレーターでは、入力内容を変更すると自動的に再計算され、
              コーストFIREを達成できる年齢の想定結果がリアルタイムで表示されます。
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          {/* 結果 */}
          <h2 className="text-2xl md:text-3xl font-bold !mb-6 text-gray-800">
            <DoneOutlineIcon/> シミュレーション結果の見方
          </h2>
        </FadeIn>

        <div className="space-y-6">

          <FadeIn>
            {/* 達成年齢 */}
            <div className="p-5 border rounded-xl shadow-sm">
              <h4 className="font-semibold text-green-700 mb-2">
                ■ コーストFIRE達成年齢予測
              </h4>
              <p className="text-gray-700">
                入力した条件から、何歳でコーストFIREを達成できるかの目安が表示されます。
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            {/* 表 */}
            <div className="p-5 border rounded-xl shadow-sm">
              <h4 className="font-semibold text-green-700 mb-2">
                ■ 老後の資産額推定表
              </h4>
              <p className="text-gray-700">
                コーストFIRE達成後、「積み立てをやめた場合」と「続けた場合」で、老後の資産額がどのくらい変わるのかをシミュレーションできます。
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            {/* グラフ */}
            <div className="p-5 border rounded-xl shadow-sm">
              <h4 className="font-semibold text-green-700 mb-2">
                ■ 資産推移見込みグラフ
              </h4>
              <p className="text-gray-700">
                資産がどのように増えていくかの想定を視覚的に確認できます。
              </p>
            </div>
          </FadeIn>

        </div>

        <FadeIn>
          {/* ポイント */}
          <div className="mt-10 p-6 bg-green-50 rounded-2xl">
            <h4 className="font-semibold text-green-800 mb-3">
              ✨ 使い方のポイント
            </h4>
            <ul className="list-disc pl-5 text-green-900 space-y-1">
              <li>利回りは控えめ（3〜5%）に設定すると現実的です</li>
              <li>積立額を変えて、達成年齢の変化を試してみましょう</li>
            </ul>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
