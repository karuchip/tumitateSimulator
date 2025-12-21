import CalcTrajectory from "@/src/function/coastFireAgeOfAchievement/calcTrajectory";
import CalcCoastAge from "@/src/function/coastFireAgeOfAchievement/calcCoastAge";
import { InputProps } from "@/src/type/CoastFireAgeOfAchievement/input";
import {CalcTumitateAmountNotFire} from "@/src/function/coastFireAgeOfAchievement/calcTumitateAmoutNotFire"

// 3つ目関数の戻り値
type tumitateAmountProps = {
  monthlyPMT: number;
  manyen: number | null;
  senyen: number | null;
}

const UseCalculateCoastFire = (inputs: InputProps) => {
  try {
    // 1つ目の関数を呼び出し(現状の積立額で老後資金が貯まるかどうか？)
    const { result, lastPV, r_monthly } = CalcTrajectory(inputs);

    // 2つ目の関数を呼び出し(何歳でコーストFIREを達成できるか？)
    const calcCoast = CalcCoastAge({ result, lastPV, r_monthly, ...inputs }) ?? { coastFireAge: null, achievedResult: null };
    const { coastFireAge, achievedResult } = calcCoast;

    // 3つ目の関数を呼び出し(FIRE達成できない場合、いくら積み立てれば老後資金が貯まるか？)
    const tumitateAmount:tumitateAmountProps | null =
      coastFireAge === null
        ? CalcTumitateAmountNotFire({
          currentAgeYear: inputs.age,
          coastAge: inputs.retiredAge,
          finalAge: inputs.retiredAge,
          currentAsset: inputs.currentAsset,
          annualReturn: inputs.rate,
          FV: inputs.requiredRetirementMoney
        })
      : null;

    return {
      trajectory: result,
      coastFireAge,
      achievedResult,
      tumitateAmount,
    };

  } catch (error) {
    alert(error);
    return {
      trajectory: [],
      coastFireAge: null,
      achievedResult: [],
      tumitateAmount: null,
    };
  }

};

export default UseCalculateCoastFire;


