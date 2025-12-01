// どの年齢でコーストFIRE可能か判定、fire達成後は積立をやめた場合の資産推移算出

import { OutputProps } from "@/src/type/CoastFireAgeOfAchievement/output";
import { growMonthlyPV, growMonthlyPVnoPMT } from "./calcPV";

type PropsType = {
  result: OutputProps[];
  lastPV: number;
  requiredRetirementMoney: number;
  retiredAge: number;
  monthlyPMT: number,
  r_monthly: number,
  currentAsset: number;
  currentAge: number;
}

const CalcCoastAge = ({
  result,
  lastPV,
  requiredRetirementMoney,
  retiredAge,
  monthlyPMT,
  r_monthly,
  currentAsset,
  currentAge
}:PropsType) => {

  // coastFire達成しない場合 (老後までに目標資金が貯まらない場合)
	if (lastPV < requiredRetirementMoney) {
    return { coastFireAge:null, achievedResult:null };
  }

  // coastFire達成する場合
  for (let i = 0; i<=result.length - 1; i++) {

    // 現年齢での総資産額
    const thisYearPV = result[i].pv;
    // 現年齢からの運用期間
    const monthlyLeft = retiredAge - result[i].age * 12
    // 現資産を運用した場合の未来の総資産額
    const futurePV = thisYearPV * Math.pow(1 + r_monthly, monthlyLeft);

    // ①コーストFire時の年齢
    if (futurePV > requiredRetirementMoney) {
      const coastFireAge = result[i].age;

      // ②資産推移を求める
      // 達成年齢で積立を辞めた場合の配列作成
      const achievedResult = [];
      // 資産額合計を入れる変数
      let totalPrincipalStop = currentAsset; //毎年更新される元本
      let totalPVStop = currentAsset; //毎年更新される総資産額

      // coastFireまで積立あり
      for (let age = currentAge; age <= coastFireAge; age++) {
        if (age > currentAge) {
          for (let month = 1; month <= 12; month++) {
            totalPVStop = growMonthlyPV(totalPVStop, monthlyPMT, r_monthly)
          }
          totalPrincipalStop += monthlyPMT * 12;
        }

        achievedResult.push({ age, principal: totalPrincipalStop, pv: totalPVStop })
      }

      // coastFire以降は積立なし
      for (let age = coastFireAge + 1; age <= retiredAge; age++) {
        for (let month = 1; month <= 12; month++) {
          totalPVStop = growMonthlyPVnoPMT(totalPVStop, r_monthly)
        }

        achievedResult.push({ age, principal: totalPrincipalStop, pv: totalPVStop })
      }

      return {coastFireAge, achievedResult};

    }
  }
  return {coastFireAge: null, achievedResult:null}
}

export default CalcCoastAge;
