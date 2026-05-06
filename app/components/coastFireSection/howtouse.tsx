import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { FadeIn } from '../animation/fadeIn';

export default function HowToUseFireSection() {
  return (
    <section className="bg-[#FAFAFA] py-12 px-6 !mt-20">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-xl md:text-2xl font-bold mb-8 text-gray-800 flex items-center justify-center">
            <DoneOutlineIcon className="mr-2 text-green-600" />
            3ステップで必要額を診断
          </h2>
        </FadeIn>

        {/* ステップ部分を横並び（スマホは縦）に */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <FadeIn delay={0.1}>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <span className="text-3xl mb-3">📝</span>
              <h3 className="font-bold text-green-700 mb-2">1. 現状を入力</h3>
              <p className="text-sm text-gray-600">年齢・現在の資産・運用利回りを入力します。</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <span className="text-3xl mb-3">🎯</span>
              <h3 className="font-bold text-green-700 mb-2">2. 目標を設定</h3>
              <p className="text-sm text-gray-600">目標金額と、積立を卒業したい年齢を決めます。</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <span className="text-3xl mb-3">📊</span>
              <h3 className="font-bold text-green-700 mb-2">3. 結果を確認</h3>
              <p className="text-sm text-gray-600">毎月の必要積立額と、将来の資産推移を表示します。</p>
            </div>
          </FadeIn>
        </div>

        {/* ポイントだけをシンプルに残す */}
        <FadeIn>
          <div className="bg-green-50 p-4 rounded-xl border border-green-100 flex items-center justify-center space-x-4">
            <span className="text-green-700 font-bold text-sm flex items-center">
              <span className="mr-1">💡</span> 利回りは3〜5%が現実的です
            </span>
            <span className="hidden md:inline text-gray-300">|</span>
            <span className="text-green-700 font-bold text-sm flex items-center">
              <span className="mr-1">🔄</span> 条件を変えて何度でもお試しください
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
