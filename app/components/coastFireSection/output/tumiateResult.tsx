"use client"
import { FireSimulationInput } from "@/src/type/FireSimulationInput";
import ResultTumitateAmount from "../graph/resultTumitateAmount";
import formatCurrency from "@/src/format/currency"
import TorikuzushiResult from "./torikuzushiResult";

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
}

const TumitateResult = ({simulationResult, lastInput, resultStopTumitate, resultContinueTumitate}:Props) => {

  // resultStopTumitateについて、コーストFIRE時点での累計投資額
  // const stopTotalInvestment = resultStopTumitate[resultContinueTumitate.length-1].principal;

  // resultStopTumitateについて、老後資金受け取り年齢での総資産額
  const stopTotalAsset = resultStopTumitate[resultStopTumitate.length-1].pv;
  // resultContinueTumitateについて、老後資金受け取り年齢での総資産額
  const continueTotalAsset = resultContinueTumitate[resultContinueTumitate.length-1].pv;


  return(
    <div className="co-mobilePosition">
        {/* 元本到達までの積立額 */}
        <div className="SimulatorCoastResult">

          <div className="co-midashiGreen">
            <span></span>
            <h1>シュミレーション結果</h1>
          </div>

          <div className="co-kakomiGreen SimulatorCoastResultSection">
            <div className="co-komidashiGreen">
              <span></span>
              <h3>元本到達までの積立額</h3>
            </div>
            {simulationResult && lastInput ? (

              // まだコーストFIRE達成していない場合
              simulationResult?.monthlyPMT > 0 ? (

                <div className="coastTumitateResultAmount">
                  <p className="one">
                    月 {formatCurrency(simulationResult.monthlyPMT)}円
                  </p>
                  <p className="two">
                    {lastInput.coastAge}歳で必要元本の{formatCurrency(simulationResult.pvNeeded)}円に到達し、コーストFIRE達成予定です。
                  </p>

                  {/* グラフ */}
                  <div className="three">
                    <ResultTumitateAmount
                      resultTumitate={resultStopTumitate}
                      currentAgeYear={lastInput.currentAgeYear}
                      coastAge={lastInput.coastAge}
                      finalAge={lastInput.finalAge}
                    />
                  </div>

                  <p className="four">
                    {lastInput.coastAge}歳以降は積み立てをやめても運用だけで資産が増えていき、<span style={{fontWeight:"bold"}}>{lastInput.finalAge}歳には{formatCurrency(lastInput.requiredRetirementMoney)}万円</span> に到達する想定です。
                  </p>
                  <p className="five">（運用利回り: {lastInput.rate}％）</p>
                </div>

              // コーストFIRE達成済みの場合
              ) : (
                <div className="coastTumitateResultAmount">
                  <p className="one">おめでとうございます！あなたはすでにコーストFIREを達成しています。</p>
                  <div className="three">
                    <ResultTumitateAmount
                      resultTumitate={resultStopTumitate}
                      currentAgeYear={lastInput.currentAgeYear}
                      coastAge={lastInput.currentAgeYear}
                      finalAge={lastInput.finalAge}
                    />
                  </div>
                  <p className="four">
                    このまま資産運用を続けると、
                    <span style={{fontWeight:"bold"}}>{lastInput.finalAge}歳時点で{formatCurrency(stopTotalAsset)}円</span> に到達する想定です。
                  </p>
                  <p className="five">（運用利回り: {lastInput.rate}％）</p>
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


          {simulationResult && simulationResult?.monthlyPMT > 0 && (
            <div className="co-kakomiGreen SimulatorCoastResultSection">
              <div className="co-komidashiGreen">
                <span></span>
                <h3>元本達成後も積み立てを続けた場合の総資産額</h3>
              </div>
              {simulationResult && lastInput ? (
                <div className="coastTumitateResultAmount">
                  {/* グラフ */}
                  <div className="three">
                    <ResultTumitateAmount
                      resultTumitate={resultContinueTumitate}
                      currentAgeYear={lastInput.currentAgeYear}
                      coastAge={lastInput.coastAge}
                      finalAge={lastInput.finalAge}
                    />
                  </div>

                  <p className="four">
                    {lastInput.coastAge}歳以降も同額（月 {formatCurrency(simulationResult.monthlyPMT)}円）を積み立て続けた場合、
                    <span style={{fontWeight:"bold"}}>
                      {lastInput.finalAge}歳には資産が{formatCurrency(continueTotalAsset)}円
                    </span>
                    に到達する想定です。
                  </p>
                  <p className="five">（運用利回り: {lastInput.rate}％）</p>
                </div>
              ) : (
                <>
                  <p>積み立て続けた場合、xx歳には、xxxx円まで到達する想定です。 </p>
                  <p>（運用利回り: xx％）</p>
                </>
              )}
            </div>
          )}

          {/* 老後の取り壊し可能額 */}
          {lastInput?.finalAge && (
            <TorikuzushiResult
              finalAge={lastInput.finalAge}
              stopTotalAsset={stopTotalAsset}
              continueTotalAsset={continueTotalAsset}
            />
          )}

        </div>
      </div>
  )
}


export default TumitateResult;
