"use client"

import UseCoastFireCalculator from "@/src/function/coastFireAgeOfAchievement/hooks/useCoastFireCalculator";
import { FormProvider } from "react-hook-form";
import { InputProps } from "@/src/type/CoastFireAgeOfAchievement/input";
import { OutputProps } from "@/src/type/CoastFireAgeOfAchievement/output"
import {useForm} from "react-hook-form"
import InputItems from "@/app/components/coast-fire-age/input/inputItems"
import { useState, useEffect, useMemo } from "react";
import CoastFireChart from "@/app/components/coast-fire-age/output/graph"
import Menseki from "@/app/components/common/Menseki"
import TagFacesIcon from '@mui/icons-material/TagFaces';
import HowToUseAchieveSection from "../components/coast-fire-age/howtouse";


// 計算結果の型
type achievedResultProps = {
  age: number;
  principal: number;
  pv: number;
}
type TumitateAmountLocal = {
  monthlyPMT: number;
  manyen: number | null;
  senyen: number | null;
}

const CoastFireAgeClient = () => {

  // 入力値の初期値
  const inputs = {
    age: 30,
    currentAsset: 100,
    monthlyPMT: 3, //積立額
    rate: 3,
    requiredRetirementMoney: 2000,
    retiredAge: 65,
  }

  // シミュレーション結果を入れるuseState
  const [simulationResult, setSimulationResult] = useState<{
    trajectory: OutputProps[],
    coastFireAge: number | null,
    achievedResult: achievedResultProps[] | null,
    tumitateAmount: TumitateAmountLocal | null,
  } | null>(null);

  // react-hook-form
  const methods = useForm<InputProps>({ defaultValues: inputs });
  const { handleSubmit, watch } = methods;
  const values = watch();

  // inputに変更があった場合の入力値加工処理
  const formattedData = useMemo(() => ({
    ...values,
    rate: (Number(values.rate) || 0) * 0.01,
  }), [
    values.age,
    values.currentAsset,
    values.monthlyPMT,
    values.rate,
    values.requiredRetirementMoney,
    values.retiredAge,
  ])

  // 入力値加工処理後、計算処理を呼び出す
  useEffect(()=> {
    handleSubmit(onSubmit)();
  }, [formattedData]);

  // 計算処理
  const onSubmit = (data: InputProps) => {
    try {
      const {
        trajectory,
        coastFireAge,
        achievedResult,
        tumitateAmount
      } = UseCoastFireCalculator(formattedData);

      setSimulationResult({
        trajectory,
        coastFireAge,
        achievedResult,
        tumitateAmount,
      })

    }catch(error) {
      if(error instanceof Error) {
        alert(error.message);
      }else {alert("不明なエラーが発生しました")}
    }
  }

  return(
    <div className="co-headerBunSageru">

      <div className="SimulatorCoastContainer">
        <div className="co-screenPosition">
          <div>
            <div className="co-midashi2sentRedContainer">
              <span></span>
              <div className="co-midashi2sentBlack">
                <p>何歳で達成できる？</p>
                <h1>コーストFIREシミュレーター（達成年齢計算）</h1>
              </div>
            </div>

            <p className="SimulatorCoastDescription">
              今の積立額だと<span className="font-bold">何歳でコーストFIRE達成できる？</span>を簡単にシミュレートできます。
              「いつまで積立すればいいのか」を知りたい方におすすめです。
              <a href="#menseki" className="toMenseki">（免責事項をご確認ください）</a>
            </p>

          </div>
        </div>
      </div>


      {/* 入力欄 */}
      <div className="co-pcFlex" style={{marginBottom:"60px"}}>
        <div className="co-screenPositionInputAge">
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}  className="SimulatorCoastContainerLeft">
              <div className="SimulatorCoastInputContainer">
                <InputItems/>
              </div>
            </form>
          </FormProvider>
        </div>


        {/* 結果 */}
        <div className="SimulatorCoastResult co-kakomiGreen ageResultContainer">
          <div className="co-midashiPink">
            <span></span>
            <h1>シミュレーション結果</h1>
          </div>

          <div className="SimulatorCoastResultSection">
            <div className="co-komidashiPink">
              <span></span>
              <h3>達成年齢予測</h3>
            </div>
            {simulationResult?.coastFireAge !== null ? (
              <div className="risyokuResultAmount">
                <div className="one oneRed">
                  <p><span className="!text-[32px] font-bold">{simulationResult?.coastFireAge}歳</span> にコーストFIRE達成見込み！</p>
                  <p>おめでとうございます</p>
                </div>
                {simulationResult?.trajectory[simulationResult?.trajectory.length - 1].pv && (
                  <div className="my-10">
                    <div className="co-komidashiPink">
                      <span></span>
                      <h3>老後の資産額推定</h3>
                    </div>
                    <div className="max-w-2xl mx-auto border border-gray-400">
                      {/* ヘッダー */}
                      <div className="grid grid-cols-[20%_30%_50%]">
                        <div className="col-span-2 border-r border-b border-gray-400"></div>
                        <div className="text-[13px] md:text-[18px] border-b border-gray-400 bg-gray-200 text-center py-4 font-bold text-lg">
                          {values.retiredAge}歳時点での資産額推定
                        </div>
                      </div>

                      {/* 本体（ここを1つのgridにする） */}
                      <div className="grid grid-cols-[20%_30%_50%]">

                        {/* ← ここが縦結合される */}
                        <div className="text-[13px] md:text-[16px] row-span-2 flex items-center justify-center bg-gray-200 border-r border-gray-400 text-center font-bold px-2">
                          {simulationResult?.coastFireAge}歳以降<br />積み立てを
                        </div>

                        {/* 1行目 */}
                        <div className="text-[13px] md:text-[18px] border-r border-b bg-gray-200 border-gray-400 text-center py-3 font-bold">
                          やめた場合
                        </div>
                        <div className="text-[16px] md:text-[24px] border-b border-gray-400 bg-red-50 text-center py-3 font-bold text-xl">

                          {(() => {
                            const tumitateStopLastPv = Math.floor(
                              (simulationResult?.achievedResult && simulationResult.achievedResult.length > 0)
                                ? simulationResult.achievedResult[simulationResult.achievedResult.length - 1].pv
                                : 0
                            );
                            return tumitateStopLastPv;
                          })()} 万円

                        </div>

                        {/* 2行目 */}
                        <div className="text-[13px] md:text-[18px] border-r bg-gray-200 border-gray-400 text-center py-3 font-bold">
                          続けた場合
                        </div>
                        <div className="text-[16px] md:text-[24px] bg-red-50 text-center py-3 font-bold text-xl">
                          {(() => {
                            const tumitateContinueLastPv = Math.floor(
                              simulationResult?.trajectory[simulationResult?.trajectory.length - 1].pv
                            );
                            return tumitateContinueLastPv;
                          })()} 万円
                        </div>

                      </div>
                    </div>
                  </div>
                )}
              </div>
            ):(
              <div className="ageResultAmount">
                <p className="one oneBlue">
                  今の積立額だとコーストFIRE達成できません、、、<br/>入力値を変えてみましょう
                </p>
                <p className="two twoBlue">
                  {simulationResult?.tumitateAmount && (
                    <>{values.retiredAge}歳時点で資産を{values.requiredRetirementMoney}万円を目指す場合、毎月およそ{simulationResult.tumitateAmount.manyen}万{simulationResult.tumitateAmount.senyen}円の積立が目安となります。</>
                  )}
                </p>
              </div>
            )}

            <div className="co-komidashiPink">
              <span></span>
              <h3>資産推移見込み</h3>
            </div>
            <div className="ageGraphContainer">
              {simulationResult?.trajectory && (
                <div>
                  <CoastFireChart continueData={simulationResult.trajectory} coastStopData={simulationResult.achievedResult} coastFireAge={simulationResult?.coastFireAge}/>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <HowToUseAchieveSection/>

      {/* 免責事項 */}
      <section className="mensekiContainer" id="menseki">
        <div className="co-screenPosition">
          {/* 免責事項 */}
          <Menseki/>
        </div>
      </section>

    </div>
  )
}

export default CoastFireAgeClient;
