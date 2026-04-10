import { Slider} from "@mui/material";
import {useFormContext, Controller} from "react-hook-form"

export default function InputItems() {
  const {control, register, watch, formState: {errors}} = useFormContext();

  const rate = watch("rate")

  return(
    <>
      <div className="InputContainer">
        <div>
          <h3>現在の状況</h3>

          <div className="InputYourSituation">

            <label>
              <p className="inputItems">- 年齢</p>
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
              <p className="inputItems">- 運用中の資産額</p>
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
          </div>

          <div className="mt-10">
            <h3>運用条件</h3>

            {/* 運用利回り */}
            <label>
              <p className="inputItems">- 運用利回り(年率)</p>

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
          <h3>目標</h3>

          <div className="pb-4">
            <label>
              <p className="inputItems">- 老後に必要な資金</p>
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
              <p className="inputItems">- 老後資金を受け取りたい年齢</p>
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
                <p>- コーストFIREを達成したい年齢</p>
                <p style={{fontSize:"13px", marginLeft:"4px"}}>（積立を卒業したい年齢）</p>
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
