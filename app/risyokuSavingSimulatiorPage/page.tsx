"use client"

import SimulateSavings from "@/src/function/risyokuSaving/simulateSavings";
import { RisyokuSavingSimulationInput } from "@/src/type/RisyokuSavingSimulator/Input";
import { RisyokuSavingSimulationOutput } from "@/src/type/RisyokuSavingSimulator/output";
import { useState, useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";
import InputItems from "../components/risyokuSavingSimulatiorSection/input/inputItems";
import ResultComponent from "../components/risyokuSavingSimulatiorSection/output/resultComponent";
import DummyResultComponent from "../components/risyokuSavingSimulatiorSection/output/dummyResultComponent";
import Menseki from "../components/common/Menseki";

const RisyokuSavingSimulator = () => {

  // input
  const methods = useForm<RisyokuSavingSimulationInput>({
    defaultValues: {
      duration : undefined,
      currentSaving: undefined,
      fixedExpense: undefined,
      variableExpense: undefined,
      income: [],
    },
    mode:"onChange"
  })

  // 計算結果
  const [result, setResult] = useState<RisyokuSavingSimulationOutput>()

  // シュミレーションボタン押下時、計算呼び出し
  const onSubmit = (data: RisyokuSavingSimulationInput) => {

    console.log(`dataは、${data}`);
    try {
      const simulationResult = SimulateSavings(data);
      setResult(simulationResult)
      console.log(`計算結果は、${simulationResult}`);

      // スクロール
      setTimeout(() => {
        resultRef.current?.scrollIntoView({behavior: "smooth"});
      })

    } catch (error) {
      if(error instanceof Error) {
        alert(error.message);
      } else {
        alert("予期せぬエラーが発生しました")
      }
    }
  }
  // シュミレーション後のページ遷移用
  const resultRef = useRef<HTMLElement | null>(null);

  return(
    <>
      <div className="co-headerBunSageru">

        <div className="SimulatorCoastContainer">
          <div className="co-screenPosition">
            <div>
              <div className="co-midashi2sentBlackContainer">
                <span></span>
                <div className="co-midashi2sentBlack">
                  <p>もし今、1年休んだら貯金はいくら残る？</p>
                  <p>離職期間の貯金推移シュミレーター</p>
                </div>
              </div>

              <p className="SimulatorCoastDescription">
                今の資産・支出・収入から「あと何ヶ月貯金が持つ？」をシュミレートします。
                FIRE前後やキャリアブレイク時の資産計算に最適のシュミレーターです。
              <a href="#menseki" className="toMenseki">（免責事項をご確認ください）</a>
              </p>

            </div>
          </div>
        </div>

        {/* 入力部分 */}
        <div className="co-pcFlex mb-40" style={{marginBottom:"80px"}}>

          <div>
            <div className="co-screenPositionInput">
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} className="SimulatorCoastContainerLeft">

                  <div className="SimulatorCoastInputContainer">
                    <InputItems/>
                  </div>

                  <div className="co-simulationButton">
                    <button type="submit">この内容で<br/>シュミレーションする</button>
                  </div>
                </form>
              </FormProvider>
            </div>
          </div>


          {/* 結果 */}
          <div>
            {result ? (
              <section ref={resultRef} className="co-screenPositionResult">
                <ResultComponent result={result}/>
              </section>
            ):(
              <section className="co-screenPositionResult">
                <DummyResultComponent/>
              </section>
            )}
          </div>

        </div>

        <section className="mensekiContainer" id="menseki">
          <div className="co-screenPosition">
            {/* 免責事項 */}
            <Menseki/>
          </div>
        </section>

      </div>
    </>
  )
}

export default RisyokuSavingSimulator;
