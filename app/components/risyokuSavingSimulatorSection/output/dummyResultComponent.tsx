"use client"

import { RisyokuSavingSimulationOutput } from "@/src/type/RisyokuSavingSimulator/output"
import SavingResultSection from "./savingResultSection"
import TableResult from "./tableResult"
import ChartResult from "./chartResult"



const dummyResultComponent = () => {

  // ダミーデータ
  const duration:number = 1;
  const result: RisyokuSavingSimulationOutput = {
    resultSavingArray: Array.from({ length: duration }, () => 0),
    finalSavingAmount: 0,
    savingState: "yes",
  };

  return (
    <>
      <div className="SimulatorCoastResult co-kakomiOrange">
        <div className="co-midashiOrange">
          <span></span>
          <h1>シミュレーション結果</h1>
        </div>

        <div className="SimulatorCoastResultSection">

          {/* 最終貯金額 */}
          <SavingResultSection result={result} duration={duration}/>

          <div className="shisansuiiContainer">
            <div className="co-komidashiOrange">
              <span></span>
              <h3>貯金額の推移</h3>
            </div>

            <div className="w-full border border-[#ebc091] rounded-none overflow-hidden">

              {/* グラフ */}
              <div>
                <ChartResult result={result}/>
              </div>

              {/* 表 */}
              <TableResult result={result}/>
            </div>

          </div>


        </div>

      </div>
    </>
  )
}
export default dummyResultComponent
