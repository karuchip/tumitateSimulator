import { Slider} from "@mui/material";
import {useFormContext, Controller} from "react-hook-form"

export default function InputItems() {
  const {control, register, watch, formState: {errors}} = useFormContext();

  const rate = watch("rate");
  const age = watch("age");

  return(
    <>
      <div className="InputContainer">
        <div>
          <h3>Step1. あなたの今の状況</h3>

          <div className="InputYourSituation">

            <label>
              <p className="inputItems">現在の年齢</p>
              <input
                type="number"
                placeholder="30"
                {...register("age", {
                  required: "入力してください。",
                  min: {
                    value: 0,
                    message: "0以上の数を入力してください。"
                  },
                  max: {
                    value: 120,
                    message: "120以下の年齢を入力してください。"
                  },
                  validate: {
                    maxLength: (value) =>
                      value.toString().length <= 3 || "3桁以内で入力してください。"
                  },
                  valueAsNumber: true
                })
              }/>
              <span className="sai co-inputUnit">歳</span>
              {errors.age && typeof errors.age === "object" && "message" in errors.age && (
                <p className="co-inputErrorMsg">{errors.age.message as string}</p>
              )}
            </label>

            <label>
              <p className="inputItems">運用中の資産額</p>
              <input
                type="number"
                placeholder="50"
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

            <label>
              <p className="inputItems">月の積立額</p>
              <input
                type="number"
                placeholder="3"
                {...register("monthlyPMT", {
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
              {errors.monthlyPMT && typeof errors.monthlyPMT === "object" && "message" in errors.monthlyPMT && (
                <p className="co-inputErrorMsg">{errors.monthlyPMT.message as string}</p>
              )}
            </label>

            {/* 運用利回り */}
            <label>
              <p className="inputItems">運用利回り(年率)</p>

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
              <p className="inputItems">老後に必要な資金</p>
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
              <p className="inputItems">老後資金を受け取りたい年齢</p>
              <input
                type="number"
                placeholder="65"
                {...register("retiredAge", {
                  required: "入力してください。",
                  min: {
                    value: age + 1,
                    message: "年齢より大きい数を入力してください。"
                  },
                  max: {
                    value: 120,
                    message: "120以下の年齢を入力してください。"
                  },
                  validate: {
                    maxLength: (value) =>
                      value.toString().length <= 3 || "3桁以内で入力してください。"
                  },
                  valueAsNumber: true
                })}
              />
              <span className="co-inputUnit">歳</span>
              {errors.retiredAge && typeof errors.retiredAge === "object" && "message" in errors.retiredAge && (
                <p className="co-inputErrorMsg">{errors.retiredAge.message as string}</p>
              )}
            </label>

          </div>
        </div>

      </div>
    </>
  )
}
