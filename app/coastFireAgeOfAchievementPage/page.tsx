"use client"

import UseCoastFireCalculator from "@/src/function/coastFireAgeOfAchievement/hooks/useCoastFireCalculator";
import { FormProvider } from "react-hook-form";
import { InputProps } from "@/src/type/CoastFireAgeOfAchievement/input";
import { OutputProps } from "@/src/type/CoastFireAgeOfAchievement/output"
import {useForm} from "react-hook-form"
import InputItems from "@/app/components/coastFireAgeOfAchievementSection/input/inputItems"
import { useState, useEffect, useMemo } from "react";
import CoastFireChart from "@/app/components/coastFireAgeOfAchievementSection/output/graph"
import Menseki from "@/app/components/common/Menseki"
import TagFacesIcon from '@mui/icons-material/TagFaces';

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

const CoastFireAgeOfAchievement = () => {

  // 入力値の初期値
  const inputs = {
    age: 30,
    currentAsset: 100,
    monthlyPMT: 3, //積立額
    rate: 3,
    requiredRetirementMoney: 2000,
    retiredAge: 65,
  }

  // シュミレーション結果を入れるuseState
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
    <div className=" co-headerBunSageru">

      <div className="SimulatorCoastContainer">
        <div className="co-screenPosition">
          <div>
            <div className="co-midashi2sentBlackContainer">
              <span></span>
              <div className="co-midashi2sentBlack">
                <p>今の積立額だと何歳でコーストFIREできる??</p>
                <p>コーストFIRE達成年齢シュミレーター</p>
              </div>
            </div>

            <p className="SimulatorCoastDescription">
              本シュミレーターでは、今の積立額だと「何歳でコーストFIRE達成できる??」を簡単にシミュレートできます。
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
          <div className="co-midashiGreen">
            <span></span>
            <h1>シュミレーション結果</h1>
          </div>

          <div className="SimulatorCoastResultSection">
            {simulationResult?.coastFireAge !== null ? (
              <div className="risyokuResultAmount">
                <p className="one oneGreen">
                  <TagFacesIcon/>おめでとうございます<TagFacesIcon/><br/>{simulationResult?.coastFireAge}歳にコーストFIREを達成できる想定です！！
                </p>
                {simulationResult?.trajectory[simulationResult?.trajectory.length - 1].pv && (
                  <p className="two twoGreen">
                    {simulationResult?.coastFireAge}歳以降は積立をやめても、{values.retiredAge}歳時点で目標の{values.requiredRetirementMoney}万円に到達する見込みです。<br/>
                    一方、FIRE達成後も積立を続けた場合、老後資金は約
                    {(()=>{ const tumitateContinueLastPv = Math.floor(simulationResult?.trajectory[simulationResult?.trajectory.length - 1].pv);
                      return tumitateContinueLastPv;
                    })()}
                    万円まで増える想定です。
                  </p>
                )}
              </div>
            ):(
              <div className="risyokuResultAmount">
                <p className="one oneRed">
                  今の積立額だとコーストFIRE達成できません、、、<br/>入力値を変えてみましょう
                </p>
                <p className="two twoRed">
                  {simulationResult?.tumitateAmount && (
                    <>{values.retiredAge}歳時点で資産を{values.requiredRetirementMoney}万円を目指す場合、毎月およそ{simulationResult.tumitateAmount.manyen}万{simulationResult.tumitateAmount.senyen}円の積立が目安となります。</>
                  )}
                </p>
              </div>
            )}

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

export default CoastFireAgeOfAchievement;
