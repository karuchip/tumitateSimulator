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
      <div className="SimulatorCoastResult co-kakomiGreen">
        <div className="co-midashiGreen">
          <span></span>
          <h1>シュミレーション結果</h1>
        </div>

        <div className="SimulatorCoastResultSection">

          {/* 最終貯金額 */}
          <SavingResultSection result={result} duration={duration}/>

          <div className="shisansuiiContainer">
            <div className="co-komidashiGreen">
              <span></span>
              <h3>貯金額の推移</h3>
            </div>

            <div className="w-full border border-[#A3C5BE] rounded-none overflow-hidden mt-2">

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
