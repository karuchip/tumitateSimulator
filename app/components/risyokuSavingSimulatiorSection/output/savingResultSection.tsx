"use client"
import { RisyokuSavingSimulationOutput } from "@/src/type/RisyokuSavingSimulator/output";

type Props = {
  result: RisyokuSavingSimulationOutput;
  duration: number;
}

const SavingResultSection = ({result, duration}: Props) => {

  return(
    <>
      <div className="maitukinotumitategakuContainer">

        <div className="co-komidashiGreen">
          <span></span>
          <h3>最終貯金額</h3>
        </div>

        {/* stateごとに区別 */}
        {/* ずっとプラス */}
        {result.savingState === "yes" && (
          <div className="risyokuResultAmount">
            <p className="one oneGreen">
              {result.finalSavingAmount}万円
            </p>
            <p className="two twoGreen">
              離職期間に貯金が底を尽きることはなく、{duration}ヶ月後には{result.finalSavingAmount}万円残る結果です。安心して離職期間を過ごせそうです。
            </p>
          </div>
        )}

        {/* 途中で一度貯金が尽きるが、最終月はプラス */}
        {result.savingState === "break" && (
          <div className="risyokuResultAmount">
            <p className="one oneGreenRed">
              {result.finalSavingAmount}万円
            </p>
            <p className="two twoGreen">
              途中で貯金がマイナスに転じる時期はありますが、最終的には{duration}ヶ月後に、{result.finalSavingAmount}万円の残高となる試算結果です。支出調整によって改善が見込めます。
            </p>
          </div>
        )}


        {/* 最終月マイナス */}
        {result.savingState === "no" && (
          (() => {
            const runningOutMonth:number = result.resultSavingArray.findIndex((value) => value < 0) + 1;
            const shortfall = Math.abs(result.finalSavingAmount);
            return (
              <div className="risyokuResultAmount">
                <p className="one oneRed">
                  {result.finalSavingAmount}万円
                </p>
                <p className="two twoRed">
                  {runningOutMonth}ヶ月目で貯金が底をつき、最終的には{duration}ヶ月後に、{shortfall}万円の不足が生じる見込みです。早めに支出を調整して備えておきましょう。
                </p>
              </div>
            );
          })() //即時実行関数を終了
        )}
      </div>
    </>
  )
}

export default SavingResultSection;
