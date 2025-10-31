"use client"

import SimulateSavings from "@/src/function/risyokuSaving/simulateSavings";
import { RisyokuSavingSimulationInput } from "@/src/type/RisyokuSavingSimulator/Input";
import { RisyokuSavingSimulationOutput } from "@/src/type/RisyokuSavingSimulator/output";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import InputItems from "../components/risyokuSavingSimulatiorSection/input/inputItems";



const RisyokuSavingSimulator = () => {

  // input
  const methods = useForm<RisyokuSavingSimulationInput>({
    defaultValues: {
      duration : undefined,
      currentSaving: undefined,
      fixedExpense: undefined,
      variableExpense: undefined,
      income: [],
    }
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

    } catch (error) {
      if(error instanceof Error) {
        alert(error.message);
      } else {
        alert("予期せぬエラーが発生しました")
      }
    }
  }

  return(
    <>
      <div style={{marginTop:"300px"}}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <InputItems/>
            <button>この内容でシュミレーションする</button>
          </form>
        </FormProvider>
      </div>

      <div>
        <h3>結果</h3>
        <p>{result?.finalSavingAmount}</p>
        <p>{result?.savingAri}</p>
        {result?.resultSavingArray.map((item, index) => (
          <div key={index}>
            <p>{index+1}ヶ月目: {item}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default RisyokuSavingSimulator;
