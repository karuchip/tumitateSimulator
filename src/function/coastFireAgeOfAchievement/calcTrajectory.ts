//　積立を継続したときの推移だけを返す

import { InputProps } from "@/src/type/CoastFireAgeOfAchievement/input";
import { OutputProps } from "@/src/type/CoastFireAgeOfAchievement/output";
import { growMonthlyPV } from "./calcPV";

export default function CalcTrajectory(input: InputProps): { result: OutputProps[]; lastPV: number; r_monthly:number } {

  const {
    age,
    currentAsset,
    monthlyPMT, //積立額
    rate,
    requiredRetirementMoney,
    retiredAge,
  } = input;

  // 月利
	const r_monthly = Math.pow(1 + rate, 1 / 12) -1;

	//結果を入れる配列
	const result: OutputProps[] = [];

	//資産額合計を入れる変数
	let principal = currentAsset; //毎年更新される元本
	let pv = currentAsset; //毎年更新される総資産額


	// 老後資金に届くか YES/NO を判定（今やってるforループでOK）
	for (let y =age; y<=retiredAge; y++) {

		if(y > age) {
			for (let month = 1; month <= 12; month++) {
				pv = growMonthlyPV(pv, monthlyPMT, r_monthly)
			}
			principal += monthlyPMT * 12;
		}

		result.push({
			age: y,
			principal, //元本
			pv, //総資産
			coastFire: pv>requiredRetirementMoney ? true : false,
		})
	}

  return {result, lastPV: pv, r_monthly}
}
