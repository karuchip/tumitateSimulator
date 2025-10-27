"use client"
import { FireSimulationInput } from "@/src/type/FireSimulationInput";
import ResultTumitateAmount from "../graph/resultTumitateAmount";
import formatCurrency from "@/src/format/currency"
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Props = {
  simulationResult : {
    pvNeeded: number;
    pvFuture: number;
    monthlyPMT: number;
    monthsToSave: number;
  }| null,
  lastInput: FireSimulationInput | null,
  resultStopTumitate: {
    age: number;
    principal: number;
    pv: number;
  }[],
  resultContinueTumitate: {
    age: number;
    principal: number;
    pv: number;
  }[],
   setStopTotalAssetParent: Dispatch<SetStateAction<number>>;
   setContinueTotalAssetParent: Dispatch<SetStateAction<number>>;
}

const TumitateResult = ({simulationResult, lastInput, resultStopTumitate, resultContinueTumitate, setStopTotalAssetParent, setContinueTotalAssetParent}:Props) => {

  // resultStopTumitateについて、老後資金受け取り年齢での総資産額
  const stopTotalAsset = resultStopTumitate[resultStopTumitate.length-1].pv;
  // resultContinueTumitateについて、老後資金受け取り年齢での総資産額
  const continueTotalAsset = resultContinueTumitate[resultContinueTumitate.length-1].pv;

  // レンダー完了後に親コンポーネントへセット
  useEffect(() => {
    setStopTotalAssetParent(stopTotalAsset);
    setContinueTotalAssetParent(continueTotalAsset);
  }, [stopTotalAsset, continueTotalAsset, setStopTotalAssetParent, setContinueTotalAssetParent])

  // カスタムタブ用
    const [tab, setTab] = useState<"stop" | "continue">("stop");

  return(
    <div className="co-screenPositionResult">
        {/* 元本到達までの積立額 */}
        <div className="SimulatorCoastResult co-kakomiGreen">

          <div className="co-midashiGreen">
            <span></span>
            <h1>シュミレーション結果</h1>
          </div>

          <div className="SimulatorCoastResultSection">

            {simulationResult && lastInput ? (

              // まだコーストFIRE達成していない場合
              simulationResult?.monthlyPMT > 0 ? (

                <>

                  <div className="maitukinotumitategakuContainer">
                    <div className="co-komidashiGreen">
                      <span></span>
                      <h3>毎月の積立額</h3>
                    </div>

                    <div className="coastTumitateResultAmount">
                      <p className="one">
                        月 {formatCurrency(simulationResult.monthlyPMT)}円
                      </p>
                      <p className="two">
                        月{formatCurrency(simulationResult.monthlyPMT)}円の積立で、{lastInput.coastAge}歳には必要元本の{formatCurrency(Math.floor(simulationResult.pvNeeded/10000))}万円に到達し、コーストFIRE達成予定です！
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
                      <div>
                        {tab === "stop" ? (

                          // コーストFIRE達成後積立をやめた場合
                          <div className='coastTumitateResultAmount'>
                            <div className="graph">
                              <ResultTumitateAmount
                                key={tab}
                                resultTumitate={resultStopTumitate}
                                currentAgeYear={lastInput.currentAgeYear}
                                coastAge={lastInput.coastAge}
                                finalAge={lastInput.finalAge}
                                tab={tab}
                              />
                            </div>
                            <p className="four">
                              {lastInput.coastAge}歳以降は積立をやめても運用だけで資産が増えていき、<span style={{fontWeight:"bold"}}>{lastInput.finalAge}歳には{formatCurrency(Math.floor(stopTotalAsset/10000))}万円</span> に到達する想定です。
                              <span className="five">（運用利回り: {lastInput.rate}％）</span>
                            </p>
                          </div>

                        ) : (

                          // コーストFIRE達成後積立を続けた場合
                          <div className="coastTumitateResultAmount">
                            {/* グラフ */}
                            <div className="graph">
                              <ResultTumitateAmount
                                key={tab}
                                resultTumitate={resultContinueTumitate}
                                currentAgeYear={lastInput.currentAgeYear}
                                coastAge={lastInput.coastAge}
                                finalAge={lastInput.finalAge}
                                tab={tab}
                              />
                            </div>
                            <p className="four">
                              {lastInput.coastAge}歳以降も積立続けた場合、
                              <span style={{fontWeight:"bold"}}>
                                {lastInput.finalAge}歳には{formatCurrency(Math.floor(continueTotalAsset/10000))}万円
                              </span>
                              に到達する想定です。
                              <span className="five">（運用利回り: {lastInput.rate}％）</span>
                            </p>
                          </div>

                        )}
                      </div>
                    </div>
                  </div>
                </>

                // コーストFIRE達成済みの場合
                ) : (
                  <div className="coastTumitateResultAmount">
                    <p className="one">おめでとうございます！あなたはすでにコーストFIREを達成しています。</p>
                    <div className="three">
                      <ResultTumitateAmount
                        key={tab}
                        resultTumitate={resultStopTumitate}
                        currentAgeYear={lastInput.currentAgeYear}
                        coastAge={lastInput.currentAgeYear}
                        finalAge={lastInput.finalAge}
                        tab={tab}
                      />
                    </div>
                    <p className="four">
                      このまま資産運用を続けると、
                      <span style={{fontWeight:"bold"}}>{lastInput.finalAge}歳時点で{formatCurrency(Math.floor(stopTotalAsset/10000))}万円</span> に到達する想定です。
                      <span className="five">（運用利回り: {lastInput.rate}％）</span>
                    </p>
                  </div>
                )

              ) : (
                <>
                  <p>毎月 xx円 の積立で、xx歳にコーストFIRE達成! (必要元本 xx円) </p>
                  <p>その後は積立をやめても、運用だけで資産が増えていき、xx歳にはxx万円 を達成する想定です。</p>
                  <p>（運用利回り: xx％）</p>
                </>
              )}
        </div>
      </div>
    </div>
  )
}


export default TumitateResult;
