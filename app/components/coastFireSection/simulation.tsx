"use client"

import { FireSimulationInput } from "@/src/type/FireSimulationInput";
import {FormProvider, useForm} from "react-hook-form";
import InputItems from "./input/inputItems";
import { CalcTumitateAmount } from "@/src/function/coastFire/calcTumitateAmount";
import { useRef, useState } from "react";
import Menseki from "@/app/components/common/Menseki"
import calcTumitateAmountGraphData from "@/src/function/coastFire/calcTumitateAmountGraphData";
import TumitateResult from "./output/tumiateResult";



export default function CoastFireSimulation() {

  // シュミレーション後のページ遷移用
  const resultRef = useRef<HTMLElement>(null)


  const methods = useForm<FireSimulationInput>({
    defaultValues: {
      currentAgeYear: undefined,
      currentAsset: undefined,
      rate: 5,
      requiredRetirementMoney: undefined,
      finalAge: undefined,
      coastAge: undefined,
    },
  })
  const {handleSubmit} = methods;


  // 積立金額シュミレーション結果
  const [simulationResult, setSimulationResult] = useState<{
    pvNeeded: number;
    pvFuture: number;
    monthlyPMT: number;
    monthsToSave: number;
  } | null>(null);

  // グラフデータ結果
  const [stopResult, setStopResult] = useState<Array<{ age: number; principal: number; pv: number; }> | null>(null);
  const [continueResult, setContinueResult] = useState<Array<{ age: number; principal: number; pv: number; }> | null>(null);
  // 入力値の保存
  const [lastInput, setLastInput] = useState<FireSimulationInput | null>(null);


  const onSubmit = (data: FireSimulationInput) => {

    setLastInput(null);

    if(data.rate) {

      try {
        const {
          pvNeeded,      // 達成年齢時点で必要な資産
          pvFuture,      // 現在資産が達成年齢時点で育った額
          monthlyPMT,    // 達成のために必要な毎月の積立額（円）
          monthsToSave
        } = CalcTumitateAmount({
          currentAgeYear: data.currentAgeYear,
          coastAge: data.coastAge,
          finalAge: data.finalAge,
          currentAsset: data.currentAsset * 10000,
          annualReturn: data.rate / 100,
          FV: data.requiredRetirementMoney * 10000,
        })
        setSimulationResult({
          pvNeeded: Math.trunc(pvNeeded), //達成年齢時点で必要な資産
          pvFuture, //現在資産が達成年齢時点で育った額
          monthlyPMT: Math.trunc(monthlyPMT), //達成のために必要な毎月の積立額（円）
          monthsToSave //積立期間
        });
        setLastInput(data);


        // 積立金額から、(グラフ用)毎月の資産推移データを計算する
        const {resultStopTumitate, resultContinueTumitate} = calcTumitateAmountGraphData({
          currentAgeYear: data.currentAgeYear,
          coastAge: data.coastAge,
          finalAge: data.finalAge,
          currentAsset: data.currentAsset * 10000,
          annualReturn: data.rate / 100,
          monthlyPMT: monthlyPMT,
        })

        setStopResult(resultStopTumitate);
        setContinueResult(resultContinueTumitate);

        // スクロール
        setTimeout(() => {
          resultRef.current?.scrollIntoView({ behavior: "smooth" });
        })

      }catch(error) {
        if (error instanceof Error) {
          alert(error.message);
        } else {
          alert("不明なエラーが発生しました");
        }
      }
    }
  }


  return (
    <div>
      <section className="SimulatorCoastContainer">
        <div className="co-mobilePosition">
          <div>
            <div className="co-midashi2sentBlackContainer">
              <span></span>
              <div className="co-midashi2sentBlack">
                <p>毎月いくら積み立てればコーストFIREできる？？</p>
                <p>積立金額シュミレーター</p>
              </div>
            </div>

            <p className="SimulatorCoastDescription">
              本シュミレーターでは、コーストFIRE達成に向けた、
              <span className="co-Bold">一定額(必要元本)を貯めるまでの「毎月の積立額」</span>
              を簡単にシミュレートできます。
            </p>
            <a href="#menseki" className="toMenseki">免責事項はこちら</a>
          </div>

          {/* 入力 */}
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="co-kakomiBlack">
                <InputItems/>
              </div>

              <div className="co-simulationButton">
                <button type="submit">
                  この内容で<br/>シュミレーションする
                </button>
              </div>

            </form>
          </FormProvider>
        </div>
      </section>


      {/* 結果 */}
      {stopResult && continueResult && lastInput &&(
        <section id="result" ref={resultRef} style={{paddingTop:"50px"}}>
          <TumitateResult
            simulationResult={simulationResult}
            lastInput={lastInput}
            resultStopTumitate = {stopResult}
            resultContinueTumitate = {continueResult}
          />
        </section>
      )}

      <section className="mensekiContainer" id="menseki">
        <div className="co-mobilePosition">
          {/* 免責事項 */}
          <Menseki/>
        </div>
      </section>

    </div>
  );
}
