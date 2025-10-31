import { RisyokuSavingSimulationInput } from "@/src/type/RisyokuSavingSimulator/Input";
import { useEffect } from "react";
import { useFieldArray, useFormContext } from "react-hook-form"

const InputItems = () => {
  const {register, control, watch, formState:{errors}, setValue} = useFormContext<RisyokuSavingSimulationInput>();

  const {fields, replace} = useFieldArray({
    control,
    name: "income",
  })

  const duration = watch("duration");

  // 離職期間変更時に、incomeの入力項目数を自動で更新
  useEffect(() => {
    if(!duration || duration < 1) return;
    replace(Array.from({length: duration}, () => ({value: 0})));
  }, [duration, replace]);


  // 全月を1ヶ月目の金額で自動補完
  const handleAutoFill = () => {
    const firstValue = watch("income.0.value");
    if(firstValue === undefined) return;
    const currentIncome = watch("income");
    const newIncome = currentIncome.map(() => ({value: firstValue}))
    setValue("income", newIncome);
  };


  return(
    <>
      <div>
        <label>離職予定期間（最大12ヶ月）</label>
        <input
          type="number"
          {...register("duration",{
            valueAsNumber: true,
            required: "入力してください",
            max: 12,
            min: 0,
          })}
        />
        <span>ヶ月</span>
        {errors.duration && (
          <p>{errors.duration.message}</p>
        )}
      </div>

      <div>
        <label>現在の貯金額</label>
        <input
          type="number"
          {...register("currentSaving",{
            valueAsNumber: true,
            required: "入力してください",
            maxLength: {
              value: 10,
              message: "10桁以内で入力してください"
            },
            min: 0,
          })}
        />
        <span>万円</span>
        {errors.currentSaving && (
          <p>{errors.currentSaving.message}</p>
        )}
      </div>

      <div>
        <label>毎月の固定費(家賃・通信費など)</label>
        <input
          type="number"
          {...register("fixedExpense",{
            valueAsNumber: true,
            required: "入力してください",
            maxLength: {
              value: 10,
              message: "10桁以内で入力してください"
            },
            min: 0,
          })}
        />
        <span>万円</span>
        {errors.fixedExpense && (
          <p>{errors.fixedExpense.message}</p>
        )}
      </div>

      <div>
        <label>毎月の変動費(食費・交際費など)</label>
        <input
          type="number"
          {...register("variableExpense",{
            valueAsNumber: true,
            required: "入力してください",
            maxLength: {
              value: 10,
              message: "10桁以内で入力してください"
            },
            min: 0,
          })}
        />
        <span>万円</span>
        {errors.variableExpense && (
          <p>{errors.variableExpense.message}</p>
        )}
      </div>


      {fields.length > 0 && (
        <>
          <h3>月ごとの臨時収入（アルバイト・手当など）</h3>
          <button type="button" onClick={handleAutoFill}>
            全て1ヶ月目の金額で自動入力
          </button>

          {fields.map((field, index) => (
            <div key={field.id}>
              <label>{index + 1}ヶ月目</label>
              <input
                type="number"
                {...register(`income.${index}.value`,{
                  valueAsNumber: true,
                  required: "入力してください",
                  maxLength: {
                    value: 10,
                    message: "10桁以内で入力してください"
                  },
                  min: 0,
                })}
              />
              <span>万円</span>
              {errors.income && (
                <p>{errors.income.message}</p>
              )}
            </div>
          ))}
        </>
      )}





    </>
  )

}

export default InputItems
