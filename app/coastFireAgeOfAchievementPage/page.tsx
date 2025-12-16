"use client"

import UseCoastFireCalculator from "@/src/function/coastFireAgeOfAchievement/hooks/useCoastFireCalculator";
import { FormProvider } from "react-hook-form";
import { InputProps } from "@/src/type/CoastFireAgeOfAchievement/input";
import { OutputProps } from "@/src/type/CoastFireAgeOfAchievement/output"
import {useForm} from "react-hook-form"
import InputItems from "@/app/components/coastFireAgeOfAchievementSection/input/inputItems"
import { useRef, useState } from "react";


type achievedResultProps = {
  age: number;
  principal: number;
  pv: number;
}

const CoastFireAgeOfAchievement = () => {

  const inputs = {
    age: 40,
    currentAsset: 100,
    monthlyPMT: 1, //積立額
    rate: 0.05,
    requiredRetirementMoney: 600,
    retiredAge: 60,
  }

  // シュミレーション結果
  const [simulationResult, setSimulationResult] = useState<{
    trajectory: OutputProps[],
    coastFireAge: number | null,
    achievedResult: achievedResultProps[] | null,
  } | null>(null);

  const methods = useForm<InputProps>({ defaultValues: inputs });
  const { handleSubmit } = methods;

  const onSubmit = (data: InputProps) => {
      try {
        const {
          trajectory,
          coastFireAge,
          achievedResult
        } = UseCoastFireCalculator(data);

        setSimulationResult({
          trajectory,
          coastFireAge,
          achievedResult
        })
      }catch(error) {
        if(error instanceof Error) {
          alert(error.message);
        }else {alert("不明なエラーが発生しました")}
      }
    }


  return(
    <>

      {/* <FormProvider {...methods}>
        <form >
          <InputItems/>
        </form>
      </FormProvider> */}
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
      <p>あああ</p>
      <div>
        {simulationResult?.trajectory?.map((item, index) => (
          <pre key={index}>{JSON.stringify(item)}</pre>
        ))}
      </div>
      <p>{simulationResult?.coastFireAge ?? ""}</p>
      <div>
        {simulationResult?.achievedResult?.map((item, index) => (
          <pre key={index}>{JSON.stringify(item)}</pre>
        ))}
      </div>
    </>
  )
}

export default CoastFireAgeOfAchievement;
