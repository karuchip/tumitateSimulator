import CalcTrajectory from "@/src/function/coastFireAgeOfAchievement/calcTrajectory";
import CalcCoastAge from "@/src/function/coastFireAgeOfAchievement/calcCoastAge";
import { InputProps } from "@/src/type/CoastFireAgeOfAchievement/input";


const UseCalculateCoastFire = (inputs: InputProps) => {
  // 1つ目の関数を呼び出し
  const { result, lastPV, r_monthly } = CalcTrajectory(inputs);
  console.log("first 関数ゲット完了！")

  // 2つ目の関数を呼び出し
  const { coastFireAge, achievedResult } = CalcCoastAge({ result, lastPV, r_monthly, ...inputs });
  if(coastFireAge)console.log("second 関数ゲット完了")
  return {
    trajectory: result,
    coastFireAge,
    achievedResult
  };
};

export default UseCalculateCoastFire;


