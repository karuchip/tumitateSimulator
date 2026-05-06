
const CoastFireDefinition = () => {
  return (
    <div className="max-w-4xl mx-6 md:mx-auto mt-20 mb-12 p-6 md:p-10 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl shadow-sm text-gray-800 leading-relaxed">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
        Coast FIRE（コーストFIRE）とは？
      </h2>

      <div className="space-y-6">
        <p className="text-lg text-gray-700">
          Coast FIREとは、**「これ以上追加の積立をしなくても、今の資産を運用し続けるだけで、老後までに目標額に到達する状態」**を指します。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-2 flex items-center">
              語源の由来
            </h3>
            <p className="text-sm text-gray-600">
              「Coast」は英語で**「（エンジンを切って）慣性で進む」**という意味。
              一度エンジン（積立）をかけて十分な高度（資産）まで達すれば、あとは滑走するだけで目的地（老後資金）に辿り着けることからそう呼ばれています。
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-2 flex items-center">
              最大のメリット
            </h3>
            <p className="text-sm text-gray-600">
              「もう老後のために必死に稼いで積み立てる必要がない」という安心感です。
              今の生活費さえ稼げれば良くなるため、**好きな仕事に転職したり、働く時間を減らしたりといった自由な選択**が可能になります。
            </p>
          </div>
        </div>

        <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
          <h3 className="font-bold text-gray-900 mb-3 text-center text-lg">普通のFIREとの違い</h3>
          <div className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0 text-center">
            <div className="px-4">
              <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">一般的なFIRE</p>
              <p className="text-sm font-semibold">「生活費すべて」を運用益でまかなう</p>
              <p className="text-xs text-gray-500 mt-1">※多額の資産が必要</p>
            </div>
            <div className="hidden md:block text-blue-300 text-2xl font-light">|</div>
            <div className="px-4 border-t md:border-t-0 pt-4 md:pt-0">
              <p className="text-xs text-pink-600 uppercase font-bold tracking-wider">Coast FIRE</p>
              <p className="text-sm font-bold text-pink-700">「老後の分」だけ運用益で確保する</p>
              <p className="text-xs text-gray-500 mt-1">※今の生活費は働いて稼ぐ</p>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6 italic">
          「今の生活を楽しみながら、将来の安心も手に入れる」<br />
          それが、最も現実的で自由度の高いFIREの形と言われています。
        </p>
      </div>
    </div>
  );
};

export default CoastFireDefinition;
