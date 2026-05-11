"use client"

import { useEffect } from "react";
import { FadeIn } from "../components/animation/fadeIn"
import Menseki from "../components/common/Menseki"

const MensekiPageClient = () => {

  // バックコンポーネントにてmetaデータが設定できなかったことによる一時的な代用
  useEffect(() => {
    document.title = "コーストFIREシミュレーター | 免責事項";
  }, []);

  return (
    <section className="mensekiContainer mensekiPage">
      <div className="co-screenPosition">
        {/* 免責事項 */}
        <FadeIn>
          <Menseki/>
        </FadeIn>
      </div>
    </section>
  )
}

export default MensekiPageClient
