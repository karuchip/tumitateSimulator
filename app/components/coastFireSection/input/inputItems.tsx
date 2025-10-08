import { Slider} from "@mui/material";
import {useFormContext, Controller} from "react-hook-form"

export default function InputItems() {
  const {control, register, watch, formState: {errors}} = useFormContext();

  const rate = watch("rate")

  return(
    <>
      <div className="InputContainer">
        <div>
          <h3>Step1. あなたの今の状況</h3>

          <div className="InputYourSituation">

            <label>
              <p className="inputItems">1. 現在の年齢</p>
              <input
                type="number"
                placeholder="30"
                {...register("currentAgeYear", {
                  required: "入力してください。",
                  min: {
                    value: 0,
                    message: "0以上の数を入力してください。"
                  },
                  validate: {
                    maxLength: (value) =>
                      value.toString().length <= 3 || "3桁以内で入力してください。"
                  },
                  valueAsNumber: true
                })
              }/>
              <span className="sai co-inputUnit">歳</span>
              {errors.currentAgeYear && typeof errors.currentAgeYear === "object" && "message" in errors.currentAgeYear && (
                <p className="co-inputErrorMsg">{errors.currentAgeYear.message as string}</p>
              )}
            </label>

            <label>
              <p className="inputItems">2. 運用中の資産額</p>
              <input
                type="number"
                placeholder="35"
                {...register("currentAsset", {
                  required: "入力してください。",
                  min: {
                    value: 0,
                    message: "0以上の数を入力してください。"
                  },
                  validate: {
                    maxLength: (value) =>
                      value.toString().length <= 5 || "5桁以内で入力してください。"
                  },
                  valueAsNumber: true
                })}
              />
              <span className="co-inputUnit">万円</span>
              {errors.currentAsset && typeof errors.currentAsset === "object" && "message" in errors.currentAsset && (
                <p className="co-inputErrorMsg">{errors.currentAsset.message as string}</p>
              )}
            </label>

            {/* 運用利回り */}
            <label>
              <p className="inputItems">3. 運用利回り(年率)</p>

              <Controller
                name="rate"
                control={control}
                render={({ field }) => (
                  <div style={{ width: 250, display: "flex", alignItems: "center", gap: "12px", marginTop:"35px"}}>
                    <Slider
                      {...field}
                      aria-label="rate"
                      value={field.value || 0}
                      onChange={(_, newValue) => field.onChange(newValue)}
                      valueLabelDisplay="on"
                      step={1}
                      marks
                      min={0}
                      max={20}
                      sx={{ color: "#60A092" }}
                    />
                    <span style={{fontWeight:"bold"}}>{rate}%</span>
                  </div>
                )}
              />
            </label>
          </div>
        </div>

        <div className="yourGoal">
          <h3>Step2. 目標設定</h3>

          <div>
            <label>
              <p className="inputItems">1. 老後に必要な資金</p>
              <input
                type="number"
                placeholder="2,000"
                {...register("requiredRetirementMoney", {
                  required: "入力してください。",
                  min: {
                    value: 0,
                    message: "0以上の数を入力してください。"
                  },
                  validate: {
                    maxLength: (value) =>
                      value.toString().length <= 5 || "5桁以内で入力してください。"
                  },
                  valueAsNumber: true
                })}
              />
              <span className="co-inputUnit">万円</span>
              {errors.requiredRetirementMoney && typeof errors.requiredRetirementMoney === "object" && "message" in errors.requiredRetirementMoney && (
                <p className="co-inputErrorMsg">{errors.requiredRetirementMoney.message as string}</p>
              )}
            </label>

            <label>
              <p className="inputItems">2. 老後資金を受け取りたい年齢</p>
              <input
                type="number"
                placeholder="65"
                {...register("finalAge", {
                  required: "入力してください。",
                  min: {
                    value: 0,
                    message: "0以上の数を入力してください。"
                  },
                  validate: {
                    maxLength: (value) =>
                      value.toString().length <= 3 || "3桁以内で入力してください。"
                  },
                  valueAsNumber: true
                })}
              />
              <span className="co-inputUnit">歳</span>
              {errors.finalAge && typeof errors.finalAge === "object" && "message" in errors.finalAge && (
                <p className="co-inputErrorMsg">{errors.finalAge.message as string}</p>
              )}
            </label>


            <label>
              <div className="inputItems">
                <p>3. 積立をやめる予定の年齢</p>
                <p style={{fontSize:"13px", marginLeft:"8px"}}>（コーストFIREを達成したい年齢）</p>
              </div>
              <input
                type="number"
                placeholder="45"
                {...register("coastAge", {
                  required: "入力してください。",
                  min: {
                    value: 0,
                    message: "0以上の数を入力してください。"
                  },
                  validate: {
                    maxLength: (value) =>
                      value.toString().length <= 3 || "3桁以内で入力してください。"
                  },
                  valueAsNumber: true
                })}
              />
              <span className="co-inputUnit">歳</span>
              {errors.coastAge && typeof errors.coastAge === "object" && "message" in errors.coastAge && (
                <p className="co-inputErrorMsg">{errors.coastAge.message as string}</p>
              )}
            </label>

          </div>
        </div>

      </div>
    </>
  )
}
