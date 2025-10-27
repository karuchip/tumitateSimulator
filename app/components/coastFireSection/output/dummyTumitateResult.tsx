"use client"

import { useState } from "react";
import ResultTumitateAmount from "../graph/resultTumitateAmount";

const DummyTumitateResult = () => {

  // カスタムタブ用
  const [tab, setTab] = useState<"stop" | "continue">("stop");

  return(
    <>
      <div className="co-screenPositionResult">
        {/* 元本到達までの積立額 */}
        <div className="SimulatorCoastResult co-kakomiGreen">

            <div className="co-midashiGreen">
              <span></span>
              <h1>シュミレーション結果</h1>
            </div>

          <div className="SimulatorCoastResultSection">

            <div className="maitukinotumitategakuContainer">
              <div className="co-komidashiGreen">
                <span></span>
                <h3>毎月の積立額</h3>
              </div>


              <div className="coastTumitateResultAmount">
                <p className="one">
                  月 xxx,xxx円
                </p>
                <p className="two">
                  月xx,xxx円の積立で、xx歳には必要元本のx,xxx万円に到達し、コーストFIRE達成予定です！
                </p>
              </div>
            </div>


            <div className="shisansuiiContainer">
              <div className="co-komidashiGreen">
                <span></span>
                <h3>資産推移</h3>
              </div>
              <div className="w-full border border-[#59CAB2] rounded-none overflow-hidden mt-2">
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
                    <span className="co-12px">コーストFIRE達成後</span><br/>積立をやめた場合
                  </button>
                  <button
                    onClick={() => setTab("continue")}
                    className={`w-1/2 py-2 border-b-[0.5px] border-[#60A092] text-[14px] font-bold ${
                      tab === "continue"
                        ? "bg-[#59CAB2] text-white"
                        : "bg-white text-gray-700"
                    }`}
                  >
                    <span className="co-12px">コーストFIRE達成後</span><br/>積立を続けた場合
                  </button>
                </div>


                {/* コンテンツ部分 */}
                <div>
                  {tab === "stop" ? (

                    // コーストFIRE達成後積立をやめた場合
                    <div className='coastTumitateResultAmount'>
                      <div className="graph">
                        <ResultTumitateAmount
                          key={tab}
                          resultTumitate={[]}
                          currentAgeYear={20}
                          coastAge={40}
                          finalAge={60}
                          tab={tab}
                        />
                      </div>
                      <p className="four">
                        xx歳以降は積立をやめても運用だけで資産が増えていき、<span style={{fontWeight:"bold"}}>xx歳にはx,xxx万円</span> に到達する想定です。
                        <span className="five">（運用利回り: xx％）</span>
                      </p>
                    </div>

                  ) : (

                    // コーストFIRE達成後積立を続けた場合
                    <div className='coastTumitateResultAmount'>
                      <div className="graph">
                        <ResultTumitateAmount
                          key={tab}
                          resultTumitate={[]}
                          currentAgeYear={20}
                          coastAge={40}
                          finalAge={60}
                          tab={tab}
                        />
                      </div>
                      <p className="four">
                        xx歳以降は積立をやめても運用だけで資産が増えていき、<span style={{fontWeight:"bold"}}>xx歳にはx,xxx万円</span> に到達する想定です。
                        <span className="five">（運用利回り: xx％）</span>
                      </p>
                    </div>
                  )}

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default DummyTumitateResult
