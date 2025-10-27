"use client"

import { FireSimulationInput } from "@/src/type/FireSimulationInput";
import {FormProvider, useForm} from "react-hook-form";
import InputItems from "./input/inputItems";
import { CalcTumitateAmount } from "@/src/function/coastFire/calcTumitateAmount";
import { useRef, useState } from "react";
import calcTumitateAmountGraphData from "@/src/function/coastFire/calcTumitateAmountGraphData";
import TumitateResult from "./output/tumiateResult";
import TorikuzushiResult from "./output/torikuzushiResult";
import DummyTumitateResult from "./output/dummyTumitateResult";
import DummyTorikuzushiResult from "./output/dummyTorikuzushiResult";



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

  // 積立額から取り崩し額へ渡す値の保存
  // resultStopTumitateについて、老後資金受け取り年齢での総資産額
  const [stopTotalAssetParent, setStopTotalAssetParent] = useState(0)
  // resultContinueTumitateについて、老後資金受け取り年齢での総資産額
  const [continueTotalAssetParent, setContinueTotalAssetParent] = useState(0)


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
    <>
      <div className="SimulatorCoastContainer">
        <div className="co-screenPosition">
          <div>
            <div className="co-midashi2sentBlackContainer">
              <span></span>
              <div className="co-midashi2sentBlack">
                <p>毎月いくら積み立てれば達成できる？？</p>
                <p>コーストFIRE 積立金額シュミレーター</p>
              </div>
            </div>

            <p className="SimulatorCoastDescription">
              本シュミレーターでは、コーストFIRE達成に向けた、
              一定額(必要元本)を貯めるまでの「毎月の積立額」
              を簡単にシミュレートできます。
              <a href="#menseki" className="toMenseki">（免責事項をご確認ください）</a>
            </p>

          </div>
        </div>
      </div>



      <div style={{width:"100%", display: "flex", justifyContent:"center"}}>
        {/* PC表示時、flex表示用div */}
        <div className="co-pcFlex">
          <div className="co-screenPositionInput">
            <div>
              {/* 入力 */}
              <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}  className="SimulatorCoastContainerLeft">
                  <div className="SimulatorCoastInputContainer">
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
          </div>


          {/* 結果 */}
          {stopResult && continueResult && lastInput ?(
            <section id="result" ref={resultRef}>
              <TumitateResult
                simulationResult={simulationResult}
                lastInput={lastInput}
                resultStopTumitate = {stopResult}
                resultContinueTumitate = {continueResult}
                setStopTotalAssetParent = {setStopTotalAssetParent}
                setContinueTotalAssetParent = {setContinueTotalAssetParent}
              />
            </section>
          ) : (
            <DummyTumitateResult/>
          )}

        </div>
      </div>

      {/* 老後の取り壊し可能額 */}
      {lastInput?.finalAge ? (
        <div className="co-screenPosition callTorikuzushiComponent">
          <TorikuzushiResult
            finalAge={lastInput.finalAge}
            stopTotalAsset={stopTotalAssetParent}
            continueTotalAsset={continueTotalAssetParent}
          />
        </div>
      ) : (
        <div className="co-screenPosition callTorikuzushiComponent">
          <DummyTorikuzushiResult/>
        </div>
      )}


    </>
  );
}
