export default function PrivacyPolicy() {
  return (
    <section className="bg-white py-12 px-4 md:px-8 pt-36">
      <div className="max-w-3xl mx-auto text-gray-800 leading-relaxed">

        {/* タイトル */}
        <h1 className="text-2xl md:text-3xl font-bold mb-8">
          プライバシーポリシー
        </h1>

        {/* 本文 */}
        <p className="mb-6">
          本プライバシーポリシーは、本ウェブサイト（以下「当サイト」）における、
          ユーザーの個人情報の取り扱いについて説明するものです。
        </p>

        {/* セクション1 */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2">
            1. 個人情報の利用について
          </h2>
          <p>
            当サイトでは、ユーザーの個人情報（氏名、メールアドレス等）を取得・利用することはありません。
          </p>
        </div>

        {/* セクション2 */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2">
            2. アクセス解析ツールについて
          </h2>
          <p className="mb-2">
            当サイトでは、サービス向上のために以下のアクセス解析ツールを利用しています。
          </p>
          <ul className="list-disc pl-5 mb-2">
            <li>Google Analytics</li>
          </ul>
          <p>
            Google Analyticsは、トラフィックデータの収集のためにCookieを使用しています。
            このデータは匿名で収集されており、個人を特定するものではありません。
            なお、これらの情報はGoogleのプライバシーポリシーに基づいて管理されます。
          </p>
        </div>

        {/* セクション3 */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2">
            3. Cookieの使用について
          </h2>
          <p>
            当サイトでは、ユーザーの利便性向上およびアクセス解析のためにCookieを使用する場合があります。
            ユーザーはブラウザの設定により、Cookieの使用を拒否することが可能です。
          </p>
        </div>

        {/* セクション4 */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2">
            4. 外部サービスとの連携について
          </h2>
          <p className="mb-2">
            当サイトでは、以下の外部サービスを利用しています。
          </p>
          <ul className="list-disc pl-5 mb-2">
            <li>Google Search Console</li>
            <li>Google Analytics</li>
          </ul>
          <p>
            これらのサービス利用に伴い、必要な範囲で情報が送信される場合がありますが、
            当サイトにおいて入力された資産額などの個別データを送信することはありません。
            また、当サイトが個人情報を取得・保存することもありません。
          </p>
        </div>

        {/* セクション5 */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2">
            5. 免責事項
          </h2>
          <p>
            当サイトのコンテンツや情報については、できる限り正確な情報を掲載するよう努めておりますが、
            その正確性や安全性を保証するものではありません。
            当サイトの情報を利用したことによって生じた損害等について、
            一切の責任を負いかねますのでご了承ください。
          </p>
          <a href="/mensekiPage" className="toMenseki">免責事項</a>
        </div>

        {/* セクション6 */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2">
            6. プライバシーポリシーの変更
          </h2>
          <p>
            本ポリシーは、必要に応じて予告なく変更される場合があります。
          </p>
        </div>

        {/* セクション7 */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold mb-2">
            7. お問い合わせ
          </h2>
          <p>
            本ポリシーに関するお問い合わせは、当サイト内のお問い合わせフォームよりお願いいたします。
          </p>
        </div>

      </div>
    </section>
  );
}
