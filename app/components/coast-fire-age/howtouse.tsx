import { FadeIn } from "../animation/fadeIn";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

export default function HowToUseAgeSection() {
  return (
    <section className="bg-[#FAFAFA] py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-xl md:text-2xl font-bold mb-8 text-gray-800 flex items-center justify-center">
            <DoneOutlineIcon className="mr-2 text-[#c36782]" />
            達成年齢をリアルタイム診断
          </h2>
        </FadeIn>

        {/* 3ステップ（横並び） */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <FadeIn delay={0.1}>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-pink-50 flex flex-col items-center text-center">
              <span className="text-3xl mb-3">💰</span>
              <h3 className="font-bold text-[#c36782] mb-2">1. 現状を入力</h3>
              <p className="text-sm text-gray-600">年齢・資産・積立額・利回りを入力します。</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-pink-50 flex flex-col items-center text-center">
              <span className="text-3xl mb-3">🏁</span>
              <h3 className="font-bold text-[#c36782] mb-2">2. ゴールを設定</h3>
              <p className="text-sm text-gray-600">目標の老後資金額と、受取開始年齢を決めます。</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-pink-50 flex flex-col items-center text-center">
              <span className="text-3xl mb-3">✨</span>
              <h3 className="font-bold text-[#c36782] mb-2">3. 自動で算出</h3>
              <p className="text-sm text-gray-600">コーストFIRE達成のタイミングを即座に表示します。</p>
            </div>
          </FadeIn>
        </div>

        {/* ポイントと自動計算の案内を統合してコンパクトに */}
        <FadeIn>
          <div className="bg-[#FFF0F5] p-5 rounded-2xl border border-pink-100">
            <div className="flex flex-col md:flex-row items-center justify-around space-y-4 md:space-y-0 text-center">
              <div className="flex items-center text-[#a44160] font-bold text-sm">
                <span className="mr-2 text-lg">⚡</span>
                入力と同時にリアルタイム再計算
              </div>
              <div className="hidden md:block w-px h-6 bg-pink-200"></div>
              <div className="flex items-center text-[#a44160] font-bold text-sm">
                <span className="mr-2 text-lg">📈</span>
                積立停止後と継続後の比較が可能
              </div>
              <div className="hidden md:block w-px h-6 bg-pink-200"></div>
              <div className="flex items-center text-[#a44160] font-bold text-sm">
                <span className="mr-2 text-lg">💡</span>
                利回りは3〜5%が現実的
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
