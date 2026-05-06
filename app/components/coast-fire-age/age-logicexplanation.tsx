
const AgeLogicExplanation = () => {
  return (
    <div className="max-w-4xl mx-auto my-12 p-6 md:p-10 bg-white border border-gray-200 rounded-2xl shadow-sm text-gray-800 leading-relaxed">
      <h2 className="text-2xl font-bold mb-8 pb-2 border-b-2 border-pink-500 inline-block">
        計算ロジックの解説
      </h2>

      <div className="space-y-10">
        {/* Step 1 */}
        <section>
          <div className="flex items-center mb-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-100 text-pink-600 font-bold text-sm mr-3">
              1
            </span>
            <h3 className="text-xl font-semibold text-gray-900">
              資産推移のシミュレーション（月利計算）
            </h3>
          </div>
          <p className="ml-11 text-gray-600 mb-4">
            入力された現在の資産額と毎月の積立額をもとに、指定された「老後資金を受け取りたい年齢」までの資産推移を計算します。
          </p>
          <div className="ml-11 bg-gray-50 p-4 rounded-lg border border-gray-100">
            <p className="text-sm font-medium text-gray-500 mb-2">複利の計算式:</p>
            <p className="text-lg text-center font-serif py-2 italic text-gray-700">
              月利 = (1 + 年利)<sup className="text-xs ml-0.5">1/12</sup> — 1
            </p>
            <p className="text-sm text-gray-500 mt-2">
              ※ 年利を12等分した月利を用いて、毎月の積み立てと運用をシミュレートしています。
            </p>
          </div>
        </section>

        {/* Step 2 */}
        <section>
          <div className="flex items-center mb-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-100 text-pink-600 font-bold text-sm mr-3">
              2
            </span>
            <h3 className="text-xl font-semibold text-gray-900">
              コーストFIRE達成年齢の特定
            </h3>
          </div>
          <p className="ml-11 text-gray-600">
            「これ以上積み立てをしなくても、運用だけで目標額に届く状態」を**コーストFIRE**と定義し、そのタイミングを1年単位で判定します。
          </p>
          <ul className="ml-11 mt-3 list-disc list-inside text-gray-600 space-y-2">
            <li>毎年の資産額をベースに、積立を即時停止したと仮定した場合の将来予測額を算出。</li>
            <li>予測額が「目標老後資金」を上回った最初の年齢を達成年齢として表示します。</li>
          </ul>
        </section>

        {/* Step 3 */}
        <section>
          <div className="flex items-center mb-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-100 text-pink-600 font-bold text-sm mr-3">
              3
            </span>
            <h3 className="text-xl font-semibold text-gray-900">
              目標未達時のリカバリー計算
            </h3>
          </div>
          <p className="ml-11 text-gray-600">
            現状のプランで目標額に届かない場合、不足分を補うために必要な「追加の積立額」を逆算します。
          </p>
          <p className="ml-11 mt-2 text-gray-600">
            目標額から現在の資産の成長分を差し引き、残りの不足額を目標期間内で埋めるための毎月の必要額を算出しています。
          </p>
        </section>

        {/* Caveats */}
        <section className="pt-6 border-t border-gray-100">
          <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
            留意事項
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-500">
            <div className="flex items-start">
              <span className="mr-2">•</span>
              <p>運用益に対する課税は考慮していません（非課税口座の利用を想定）。</p>
            </div>
            <div className="flex items-start">
              <span className="mr-2">•</span>
              <p>物価変動（インフレ）による貨幣価値の変化は考慮しておりません。</p>
            </div>
            <div className="flex items-start">
              <span className="mr-2">•</span>
              <p>実際の運用利回りは変動しますが、本ツールでは一定と仮定しています。</p>
            </div>
            <div className="flex items-start">
              <span className="mr-2">•</span>
              <p>この結果は将来の成果を保証するものではありません。資産運用の目安としてご活用ください。</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AgeLogicExplanation;
