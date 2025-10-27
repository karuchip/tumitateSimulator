"use client"
import { useState } from "react";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const DummyTorikuzushiResult = () => {

  // カスタムタブ用
    const [tab, setTab] = useState<"stop" | "continue">("stop");

  return(
    <>
      <div className="co-kakomiGreen SimulatorCoastResultSection">
        <div className="co-komidashiGreen">
          <span></span>
          <h3>老後の取り崩し可能額</h3>
        </div>

        <div className='torikuzushiFlexBox'>

          <div className='torikuzushiLeft'>
            <p className='torikuzushiAmountDescription'>xx歳以降、4%ルールで取り崩した場合に老後の生活費として使える金額は</p>

            <div className="w-full border border-[#59CAB2] rounded-none overflow-hidden mt-4">
              {/* タブ部分 */}
              <div className="flex text-center font-medium">
                <button
                  onClick={() => setTab("stop")}
                  className={`w-1/2 py-2 border-b-[0.5px] border-[#59CAB2] text-[14px] font-bold ${
                    tab === "stop"
                      ? "bg-[#59CAB2] text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  <span className="co-12px">元本到達後</span><br/>積立をやめた場合
                </button>
                <button
                  onClick={() => setTab("continue")}
                  className={`w-1/2 py-2 border-b-[0.5px] border-[#59CAB2] text-[14px] font-bold ${
                    tab === "continue"
                      ? "bg-[#59CAB2] text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  <span className="co-12px">元本到達後</span><br/>積立を続けた場合
                </button>
              </div>


              {/* コンテンツ部分 */}
              <div className="p-4 text-center text-lg bg-[#E6F2F0]">
                {tab === "stop" ? (
                  <div className='torikuzushiAmountContent'>
                    <p>年間 xxx,xxx 円</p>
                    <p>（月xx,xxx 円）</p>
                  </div>
                ) : (
                  <div className='torikuzushiAmountContent bg-[#E6F2F0]'>
                    <p>年間 xxx,xxx 円</p>
                    <p>（月xx,xxx 円）</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className='about4perRule torikuzushiRight'>
            <div className='about4perRuleTitle'><HelpOutlineIcon sx={{color:"#606060"}}/><p>4%ルールとは？</p></div>
            <div>
              <p>
                退職後に毎年の運用資産額の4%を取り崩して生活費に充てることで、30年以上資産が尽きない可能性が高いという考え方です。
                たとえば資産運用額が3,000万円なら、年間120万円（毎月10万円）を生活費に使えるイメージです。
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default DummyTorikuzushiResult
