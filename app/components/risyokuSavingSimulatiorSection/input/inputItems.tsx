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

  const handleDelete = () => {
    const currentIncome = watch("income");
    const deletedIncome = currentIncome.map(() => ({value: 0}))
    setValue("income", deletedIncome);
  }


  return(
    <>

      <div className="InputContainer">
        <h3>Step1. あなたの状況</h3>

        <div className="risyokuSavingInputYourSituation">


          <label className="risyokuYourSituationLabel">
            <div className="risyokuSavingInputFlex">
              <div className="co-iconGreen">
                <span></span>
              </div>
              <p>現在の貯金額</p>
            </div>
            <div className="risyokuSavingInputRelative">
              <input
                type="number"
                {...register("currentSaving",{
                  valueAsNumber: true,
                  required: "入力してください",
                  validate: {
                    maxDigits: (value) =>
                      String(value).length <= 10 || "10桁以内で入力してください"
                  },
                  min: {
                    value: 0,
                    message: "0以上の数字を入力してください"
                  }
                })}
                placeholder="100"
              />
              <span>万円</span>
            </div>
            {errors.currentSaving && (
              <p className="co-inputErrorMsg">{errors.currentSaving.message}</p>
            )}
          </label>


          <label className="risyokuYourSituationLabel">
            <div className="risyokuSavingInputFlex">
              <div className="co-iconRed">
                <span></span>
              </div>
              <p>毎月の固定費（家賃・通信費など）</p>
            </div>
            <div className="risyokuSavingInputRelative">
              <input
                type="number"
                {...register("fixedExpense",{
                  valueAsNumber: true,
                  required: "入力してください",
                  validate: {maxDigits: (value) =>
                    String(value).length <= 10 || "10桁以内で入力してください"
                  },
                  min: {
                    value: 0,
                    message: "0以上の数字を入力してください"
                  }
                })}
                placeholder="10"
              />
              <span>万円</span>
            </div>
            {errors.fixedExpense && (
              <p className="co-inputErrorMsg">{errors.fixedExpense.message}</p>
            )}
          </label>


          <label className="risyokuYourSituationLabel">
            <div className="risyokuSavingInputFlex">
              <div className="co-iconRed">
                <span></span>
              </div>
              <p>毎月の変動費（食費・交際費など）</p>
            </div>
            <div className="risyokuSavingInputRelative">
              <input
                type="number"
                {...register("variableExpense",{
                  valueAsNumber: true,
                  required: "入力してください",
                  validate :{
                    maxDigits: (value) =>
                      String(value).length <= 10 || "10桁以内で入力してください"
                  },
                  min: {
                    value: 0,
                    message: "0以上の数字を入力してください"
                  }
                })}
                placeholder="5"
              />
              <span>万円</span>
            </div>
            {errors.variableExpense && (
              <p className="co-inputErrorMsg">{errors.variableExpense.message}</p>
            )}
          </label>

        </div>



        <h3>Step2. 離職プラン</h3>
        <div className="risyokuSavingInputYourSituation">


          <label className="risyokuYourSituationLabel">
            <div className="risyokuSavingInputFlex">
              <div className="co-iconBlue">
                <span></span>
                <span></span>
              </div>
              <p>離職予定の期間（最大24ヶ月）</p>
            </div>
            <div className="risyokuSavingInputRelative">
              <input
                type="number"
                {...register("duration",{
                  valueAsNumber: true,
                  required: "入力してください",
                  max: {
                    value: 24,
                    message: "24以下の数字を入力してください"
                  },
                  min: {
                    value: 1,
                    message: "1以上の数字を入力してください"
                  }
                })}
                placeholder="12"
              />
              <span>ヶ月</span>
            </div>
            {errors.duration && (
              <p className="co-inputErrorMsg">{errors.duration.message}</p>
            )}
          </label>


          <div className="risyokuYourSituationLabel">
            <div className="risyokuSavingInputFlex" style={{marginBottom:"20px"}}>
              <div className="co-iconBlue">
                <span></span>
                <span></span>
              </div>
              <p style={{width:"233px", position:"relative"}}>月ごとの臨時収入<br/>
                <span style={{position:"absolute", left: "-10px"}}>（アルバイト・失業手当など）</span>
              </p>
            </div>

            {fields.length > 0 ? (
              <>
                <div style={{display:"flex", gap:"12px"}}>
                  <div className="co-simulationButton2">
                    <button type="button" onClick={handleAutoFill}>
                      全て1ヶ月目の金額で補完する
                    </button>
                  </div>

                  <div className="co-simulationButton3">
                    <button type="button" onClick={handleDelete}>
                      クリア
                    </button>
                  </div>
                </div>


                {fields.map((field, index) => (
                  <label key={field.id} className="risyokuYourSituationLabel ">

                    <div className="risyokuSavingInputExtraIncome">

                      <p>{index + 1}ヶ月目</p>
                      <div className="risyokuSavingInputRelative">
                        <input
                          type="number"
                          {...register(`income.${index}.value`,{
                            valueAsNumber: true,
                            required: "入力してください",
                            validate: {
                              maxDigits: (value) =>
                                String(value).length <= 10 || "10桁以内で入力してください",
                            },
                            min: {
                              value: 0,
                              message: "0以上の数字を入力してください"
                            }
                          })}
                          placeholder="20"
                        />
                        <span>万円</span>
                      </div>

                    </div>
                    {errors.income?.[index]?.value && (
                      <p className="co-inputErrorMsg">{errors.income[index].value.message}</p>
                    )}


                  </label>
                ))}
              </>
            ):(
              <p className="co-inputErrorMsg" style={{paddingTop:"10px"}}>「離職予定の期間（最大24ヶ月）」を入力後、追加の項目が表示されます。</p>
            )}
          </div>

        </div>
      </div>


    </>
  )

}

export default InputItems
