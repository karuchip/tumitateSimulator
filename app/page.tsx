"use client"

import Link from "next/link"

export default function Home() {
  return (

    <>
      <div className="menuContainer">

        <div>
          <h1>シュミレーター一覧</h1>
        </div>

        <div className="menuItemContainer">

          <div className="menuItemsContent">
            <div className="menuItems">
              <Link href="/coastFirePage">
                <h2>コーストFIRE積立金額シュミレーター</h2>
                <p>コーストFIRE達成までの積立金額をシュミレートできます。</p>
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
