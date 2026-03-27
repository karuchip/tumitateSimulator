"use client"

import Link from "next/link"

export default function Home() {
  return (

    <>
      <div className="menuContainer">

        <div>
          <h1>コーストFIREシミュレーター｜毎月いくらで達成できる？</h1>
        </div>

        <div className="menuItemContainer">

          <h2>コーストFIREシュミレーター</h2>

          <div className="menuItemsContent">
            <div className="menuItems">
              <Link href="/coastFirePage">
                <h2>積立金額シュミレーター</h2>
                <p>何歳で「積立卒業」したい？そのために<span className="font-bold">毎月いくら必要か</span>を、かんたんに逆算できます。</p>
              </Link>
            </div>
          </div>

          <div className="menuItemsContent">
            <div className="menuItems">
              <Link href="/coast-fire-age">
                <h2>達成年齢シュミレーター</h2>
                <p>今の積立額だと<span className="font-bold">何歳でコーストFIRE達成できる？</span>を簡単にシミュレートできます。</p>
              </Link>
            </div>
          </div>

          <div className="menuItemsContent">
            <div className="menuItems">
              <Link href="/risyokuSavingSimulatiorPage">
                <h2>離職期間の貯金推移シュミレーター</h2>
                <p>今の資産・支出・収入から「あと何ヶ月貯金が持つ？」をシュミレートします。</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
