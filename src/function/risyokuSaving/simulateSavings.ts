import { RisyokuSavingSimulationInput } from "@/src/type/RisyokuSavingSimulator/Input";


const SimulateSavings = (Input:RisyokuSavingSimulationInput) => {

  console.log(`Input.income.length: ${Input.income.length}`)
  console.log(`Input.duration: ${Input.duration}`)
  if (Input.income.length !== Input.duration) throw new Error("月ごとの臨時収入を全て入力してください。");
	if (Input.duration <= 0 || Input.duration > 12) throw new Error("離職期間は1〜12ヶ月で入力してください。");
	if (Input.currentSaving < 0) throw new Error("現在の貯金額が不正です。");


	let saving = Input.currentSaving;
	const resultSavingArray = [];
	let finalSavingAmount = 0;
	let savingAri = true;

	for (let i = 0; i<Input.duration; i++) {
			saving = saving - (Input.fixedExpense + Input.variableExpense) + (Input.income[i]?.value ?? 0);
			resultSavingArray.push(saving);

			if(i === Input.duration - 1) {
				finalSavingAmount = saving
			}
	}

	if(resultSavingArray[resultSavingArray.length - 1] < 0) {
		savingAri = false
	}

	return {
		resultSavingArray,
		finalSavingAmount,
		savingAri,
	}
}

export default SimulateSavings;
