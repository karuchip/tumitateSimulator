"use client"

import Link from "next/link";
import MensekiPage from "../mensekiPage/page";

export default function CoastFireArticleClient() {
  return (
    <>
      <main className="max-w-3xl mx-auto px-4 pt-30 pb-10">
        <article className="space-y-8">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight text-indigo-700">
            コーストFIREとは？いくら必要？シミュレーションで達成条件を解説
          </h1>

          <p className="text-gray-700 leading-relaxed">
            コーストFIREという言葉を聞いたことはあるけれど、「実際いくらあれば達成できるのか分からない」と感じている方も多いのではないでしょうか。
            将来の資産形成に不安を感じる中で、なるべく早く安心できる状態に到達したいと考える人にとって、コーストFIREは非常に現実的な選択肢のひとつです。
          </p>

          <p className="text-gray-700 leading-relaxed">
            自分の場合に必要な金額や年齢をすぐに知りたい方は、
            <Link
              href="/"
              className="text-indigo-600 underline font-semibold ml-1"
            >
              コーストFIREシミュレーション
            </Link>
            から簡単に計算することもできます。
          </p>

          <h2 className="text-2xl font-semibold flex gap-4 items-center mt-14">
            <div className="h-3 w-3 bg-indigo-400">
              <span></span>
            </div>
            コーストFIREとは？
          </h2>

          <p className="text-gray-700 leading-relaxed">
            コーストFIREとは、ある程度の資産を築いたあと、追加で投資をしなくても運用だけで将来的にFIREできる状態のことを指します。
            現在の生活費は労働収入でまかないつつ、将来の資産形成はすでに完了している、という考え方です。
          </p>

          <p className="text-gray-700 leading-relaxed">
            そのため、「今すぐリタイアするわけではないけれど、将来の不安はほぼ解消されている」という心理的な安心感が大きな特徴です。
          </p>

          <h2 className="text-2xl font-semibold flex gap-4 items-center mt-14">
            <div className="h-3 w-3 bg-indigo-400">
              <span></span>
            </div>
            コーストFIREに必要な資産はいくら？
          </h2>

          <p className="text-gray-700 leading-relaxed">
            必要な資産は人それぞれ異なりますが、基本的には「将来FIREに必要な資産」をもとに考えます。
            その際に重要になるのが「4%ルール」です。
          </p>

          <h2 className="text-2xl font-semibold flex gap-4 items-center mt-14">
            <div className="h-3 w-3 bg-indigo-400">
              <span></span>
            </div>
            4%ルールとは？
          </h2>

          <p className="text-gray-700 leading-relaxed">
            4%ルールとは、運用資産額の4%以内で毎年取り崩していけば、長期間にわたって資産が尽きにくいとされる考え方です。
            例えば年間生活費が240万円の場合、必要な資産は約6000万円と計算できます。
          </p>

          <p className="text-gray-700 leading-relaxed">
            コーストFIREでは、この将来必要な資産を目標としつつ、現在の資産が複利でどれくらい増えるかを考えます。
            若いうちに一定の資産を確保できれば、その後は時間の力によって資産が増えていきます。
          </p>

          <h2 className="text-2xl font-semibold flex gap-4 items-center mt-14">
            <div className="h-3 w-3 bg-indigo-400">
              <span></span>
            </div>
            シミュレーションで確認するのがおすすめ
          </h2>

          <p className="text-gray-700 leading-relaxed">
            年齢や利回り、目標資産などによって結果は大きく変わるため、実際にはシミュレーションで確認するのが最も確実です。
            以下のツールを使えば、自分の条件に合わせて簡単に計算できます。
          </p>

          <div className="bg-gray-50 border rounded-xl p-6 space-y-4">
            <h3 className="text-xl font-semibold">
              コーストFIREシミュレーター
            </h3>

            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>積立金額シミュレーター（毎月いくら必要か）</li>
              <li>達成年齢シミュレーター（何歳で達成できるか）</li>
            </ul>

            <Link
              href="/"
              className="inline-block mt-4 bg-indigo-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              無料でシミュレーションしてみる
            </Link>
          </div>

          <h2 className="text-2xl font-semibold flex gap-4 items-center mt-14">
            <div className="h-3 w-3 bg-indigo-400">
              <span></span>
            </div>
            コーストFIREのメリット
          </h2>

          <h3 className="font-bold mb-2">-「老後不安」からの早期解放</h3>
          <p className="text-gray-700 leading-relaxed">
            若いうちに複利の力を味方につけて老後資金を確保するため、将来のお金に関する不安がゼロになります。
            「一生働き続けなければならない」というプレッシャーから解放されるのは最大のメリットです。
          </p>
          <h3 className="font-bold mb-2">-「今」の生活水準を落とさなくていい</h3>
          <p className="text-gray-700 leading-relaxed">
            通常のFIRE（早期リタイア）のように、生活費の25倍を貯める必要はありません。
            老後資金さえ準備できれば、現在の稼ぎはすべて「今の生活」や「趣味」に回せるため、
            豊かな生活を送りながらサイドFIRE的な暮らしが可能です。
          </p>
          <h3 className="font-bold mb-2">- 好きな仕事を選べる（サイドハッスルの加速）</h3>
          <p className="text-gray-700 leading-relaxed">
            「生活のために嫌な仕事に耐える」必要がなくなります。
            週3日勤務や、収入は低くてもやりがいのある仕事へシフトするなど、
            キャリアの選択肢が劇的に広がります。
          </p>

          <h2 className="text-2xl font-semibold flex gap-4 items-center mt-14">
            <div className="h-3 w-3 bg-indigo-400">
              <span></span>
            </div>
            コーストFIREのデメリット
          </h2>

          <h3 className="font-bold mb-2">-「今」の貯蓄ペースが過酷になりがち</h3>
          <p className="text-gray-700 leading-relaxed">
            コーストFIREを早く達成するには、20代〜30代の早い段階でまとまった資産（種銭）を作る必要があります。
            その期間は、他の人よりも強い節約や投資への入金力が求められます。
          </p>
          <h3 className="font-bold mb-2">- インフレや増税に弱い</h3>
          <p className="text-gray-700 leading-relaxed">
            数十年後の老後資金を「現在の計算」で固定してしまうため、
            想定以上のインフレ（物価上昇）や税率アップが起こった場合、老後の資金が不足するリスクがあります。
          </p>
          <h3 className="font-bold mb-2">-「働かなくていい」わけではない</h3>
          <p className="text-gray-700 leading-relaxed">
            完全リタイアではないため、日々の生活費を稼ぎ続ける必要はあります。
            健康を害したり、職を失ったりした際の「予備費（生活防衛資金）」は、
            投資信託とは別にしっかり持っておく必要があります。
          </p>

          <h2 className="text-2xl font-semibold flex gap-4 items-center mt-14">
            <div className="h-3 w-3 bg-indigo-400">
              <span></span>
            </div>
            まとめ
          </h2>

          <p className="text-gray-700 leading-relaxed">
            コーストFIREは、早い段階で将来の資産形成の目処を立てることで、現在の自由度を高めることができる戦略です。
            ただし、感覚ではなく具体的な数字で判断することが重要です。
          </p>

          <p className="text-gray-700 leading-relaxed">
            まずは自分の条件でどれくらいで達成できるのか、
            <Link
              href="/"
              className="text-blue-600 underline font-semibold ml-1"
            >
              シミュレーションしてみる
            </Link>
            ことをおすすめします。
          </p>

          <p className="text-gray-700 leading-relaxed">
            また、コーストFIREは魅力的な概念である一方で、運用リスクや前提条件によって結果が大きく変わる側面もあります。
            そのため、楽観的に捉えるのではなく、リスクを十分に考慮したうえで検討することが大切です。
          </p>
        </article>
      </main>
      <div>
        <MensekiPage/>
      </div>
    </>
  );
}
