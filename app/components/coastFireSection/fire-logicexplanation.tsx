
const FireLogicExplanation = () => {
  return (
    <div className="max-w-4xl mx-6 md:mx-auto my-12 p-6 md:p-10 bg-white border border-gray-200 rounded-2xl shadow-sm text-gray-800 leading-relaxed">
      <h2 className="text-2xl font-bold mb-8 pb-2 border-b-2 border-emerald-500 inline-block">
        必要積立額の計算ロジック
      </h2>

      <div className="space-y-10">
        {/* Step 1 */}
        <section>
          <div className="flex items-center mb-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 font-bold text-sm mr-3">
              1
            </span>
            <h3 className="text-xl font-semibold text-gray-900">
              「コーストFIRE地点」での必要額を逆算
            </h3>
          </div>
          <p className="ml-11 text-gray-600 mb-4">
            まず、最終的な老後目標額（FV）から逆算して、積立をやめる年齢（コーストFIRE年齢）時点でいくら持っておく必要があるかを算出します。
          </p>
          <div className="ml-11 bg-gray-50 p-4 rounded-lg border border-gray-100 text-center">
            <p className="text-sm font-medium text-gray-500 mb-2 text-left">必要資産の計算式:</p>
            <p className="text-lg font-serif italic text-gray-700 py-2">
              コースト時点の必要額 = 老後目標額 / (1 + 年利)<sup className="text-xs ml-0.5">運用期間</sup>
            </p>
          </div>
        </section>

        {/* Step 2 */}
        <section>
          <div className="flex items-center mb-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 font-bold text-sm mr-3">
              2
            </span>
            <h3 className="text-xl font-semibold text-gray-900">
              現在の資産が「育つ分」を評価
            </h3>
          </div>
          <p className="ml-11 text-gray-600 mb-4">
            現在持っている資産が、積立をストップする年齢までに運用でいくらまで増えるかを計算します。ここでは複利効果をより正確に反映するため、月利ベースで計算を行っています。
          </p>
          <div className="ml-11 bg-gray-50 p-4 rounded-lg border border-gray-100 text-center">
            <p className="text-sm font-medium text-gray-500 mb-2 text-left">現資産の将来価値:</p>
            <p className="text-lg font-serif italic text-gray-700 py-2">
              現資産の成長後 = 現在の資産 × (1 + 月利)<sup className="text-xs ml-0.5">積立月数</sup>
            </p>
          </div>
        </section>

        {/* Step 3 */}
        <section>
          <div className="flex items-center mb-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 font-bold text-sm mr-3">
              3
            </span>
            <h3 className="text-xl font-semibold text-gray-900">
              不足分を埋める「毎月の積立額」を特定
            </h3>
          </div>
          <p className="ml-11 text-gray-600 mb-4">
            「1. コースト時点での必要額」から「2. 現資産の成長後」を引いた差額が、これから積立で準備すべき金額です。この金額を目標期間内に貯めるための毎月の積立額を、年金終価係数の逆数を用いて算出します。
          </p>
          <div className="ml-11 bg-emerald-50 p-4 rounded-lg border border-emerald-100">
            <p className="text-sm font-medium text-emerald-700 mb-2">積立額の決定:</p>
            <p className="text-gray-700 text-sm">
              シミュレーターでは、目標年齢の「期首（月の初め）」に目標額に到達するよう、期間を最適化して計算しています。
            </p>
          </div>
        </section>

        {/* Summary Notes */}
        <section className="pt-6 border-t border-gray-100">
          <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
            シミュレーションの前提
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm text-gray-500">
            <p>• 年利を月利に換算した複利計算を採用しています。</p>
            <p>• 積立金は毎月末に積み立てられるものとして計算しています。</p>
            <p>• 税金、手数料、インフレ率は計算に含まれていません。</p>
            <p>• 目標年齢に達した時点での資産残高が目標額に一致するように計算しています。</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FireLogicExplanation;
