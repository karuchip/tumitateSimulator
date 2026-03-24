import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { FadeIn } from '../animation/fadeIn';

export default function HowToUse() {
  return (
    <section className="bg-white !py-16 !px-8 !md:px-8 !bg-[#FAFAFA]">
      <div className="max-w-4xl mx-auto">

        <FadeIn>
          {/* タイトル */}
          <h2 className="text-2xl md:text-3xl font-bold !mb-8 text-gray-800">
            <DoneOutlineIcon /> このシミュレーターの使い方
          </h2>
        </FadeIn>

        <FadeIn>
          {/* Step1 */}
          <div className="mb-8">
            <h3 className="text-lg md:text-xl font-semibold text-green-700 mb-2">
              Step1. 現在の状況を入力
            </h3>
            <p className="text-gray-600 !mb-3">
              まずは、今のあなたの状況を入力します。
            </p>
            <ul className="list-decimal !pl-6 text-gray-700 space-y-1 w-fit">
              <li>現在の年齢：今の年齢を入力します</li>
              <li>運用中の資産額：すでに投資している金額を入力します</li>
              <li>運用利回り（年率）：想定する年間の利回り（例：5%）</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn>
          {/* Step2 */}
          <div className="!mb-8">
            <h3 className="text-lg md:text-xl font-semibold text-green-700 mb-2">
              Step2. 目標を設定
            </h3>
            <p className="text-gray-600 !mb-3">
              次に、目指したい将来のゴールを設定します。「いつまでに・いくら必要か」を入力しましょう。
            </p>
            <ul className="list-decimal !pl-6 text-gray-700 space-y-1">
              <li>老後に必要な資金：将来必要な金額を入力</li>
              <li>老後資金を受け取りたい年齢：運用した資金を何歳から使うかを入力</li>
              <li>コーストFIRE達成年齢：積立をやめる目標の年齢を入力</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn>
          {/* Step3 */}
          <div className="mb-10">
            <h3 className="text-lg md:text-xl font-semibold text-green-700 mb-2">
              Step3. シミュレーションを実行
            </h3>
            <p className="text-gray-600">
              「シミュレーションする」ボタンを押すと、結果が表示されます。
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          {/* 結果 */}
          <h2 className="text-2xl md:text-3xl font-bold !mb-6 text-gray-800">
            <DoneOutlineIcon /> シミュレーション結果の見方
          </h2>
        </FadeIn>

        <div className="space-y-6">

          <FadeIn>
            {/* 積立額 */}
            <div className="p-5 border border-[#A3C5BE] rounded-xl shadow-sm bg-[#ffffff]">
              <h4 className="font-semibold text-green-700 mb-2">
                ■ 必要積立額
              </h4>
              <p className="text-gray-700">
                毎月いくら積み立てれば目標を達成できるかが表示されます。
              </p>
              <p className="text-sm text-gray-500 mt-1">
                👉 無理のない金額かチェックしましょう
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            {/* グラフ */}
            <div className="p-5 border border-[#A3C5BE] rounded-xl shadow-sm bg-[#ffffff]">
              <h4 className="font-semibold text-green-700 mb-2">
                ■ 資産推移見込みグラフ
              </h4>
              <p className="text-gray-700">
                将来に向けて資産がどのように増えるかの想定を確認できます。
              </p>
              <p className="text-sm text-gray-500 mt-1">
                👉 積立をやめた場合・続けた場合を比較できます
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            {/* 取り崩し */}
            <div className="p-5 border border-[#A3C5BE] rounded-xl shadow-sm bg-[#ffffff]">
              <h4 className="font-semibold text-green-700 mb-2">
                ■ 老後の取り崩し可能額
              </h4>
              <p className="text-gray-700">
                老後に毎年（または毎月）使える金額の目安が表示されます。
              </p>
              <p className="text-sm text-gray-500 mt-1">
                👉 4%ルールをもとに安全な金額を算出しています
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
            <ul className="list-disc !pl-6 text-green-900 space-y-1">
              <li>利回りは3〜5%くらいで設定すると現実的です</li>
              <li>無理のない積立額になるように調整しましょう</li>
              <li>条件を変えて何度も試すのがおすすめです</li>
            </ul>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
