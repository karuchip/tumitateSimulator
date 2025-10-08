
type CalcTumitateAmountParams = {
  currentAgeYear: number;
  coastAge: number;
  finalAge: number;
  currentAsset: number;
  annualReturn: number;
  monthlyPMT: number // 達成のために必要な毎月の積立額（円）
};

type SimulationResult = {
  age: number;
  principal: number;
  pv: number;
}


const calcTumitateAmountGraphData = ({
  currentAgeYear,
  coastAge,
  finalAge,
  currentAsset,
  annualReturn,
  monthlyPMT,
}: CalcTumitateAmountParams): {
  resultStopTumitate: SimulationResult[],
  resultContinueTumitate: SimulationResult[]
} => {



  // 共通
  const r = annualReturn; // 年利
  const r_monthly = Math.pow(1 + r, 1 / 12) - 1; // 月利



  // fire後に積立をやめた場合
  // --- コーストFire達成までの資産推移 (積立継続期間) ---
  const resultStopTumitate: SimulationResult[]= []; // 結果を入れる
  let totalPrincipalStop = currentAsset; // 毎年更新される元本
  let totalPVStop = currentAsset;        // 毎年更新される資産総額
  let firedPrincipalStop = 0; // FIRE達成時の元本
  let firedPvStop = 0;       // FIRE達成時の資産総額

  for (let i = currentAgeYear; i <= coastAge; i++) {

    if (i > currentAgeYear) {
      // 1年間の月単位の計算
      for (let month = 1; month <= 12; month++) {
        totalPVStop += monthlyPMT; // 月の積立額を追加
        totalPVStop *= (1 + r_monthly); // 月利を適用
      }
      totalPrincipalStop += monthlyPMT * 12; // 元本も更新
    }

    // 毎年1回、結果を配列に格納
    resultStopTumitate.push({
      age: i,
      principal: totalPrincipalStop,
      pv: totalPVStop,
    });

    // FIRE達成時点の元本と資産を保存
    if (i === coastAge) {
      firedPrincipalStop = totalPrincipalStop;
      firedPvStop = totalPVStop;
    }
    // console.log(`[積立期間] 年齢:${i}, 元本:${totalPrincipalStop}, 資産合計:${totalPVStop}`);
  }


  // --- コーストFire達成後から老後資金受け取り年齢まで (積立停止期間) ---
  // 積立を停止し、運用のみを継続
  let currentPV_fire = firedPvStop;
  for (let i = coastAge + 1; i <= finalAge; i++) {

    // 1年間の月単位の運用計算
    for (let month = 1; month <= 12; month++) {
      currentPV_fire *= (1 + r_monthly); // 月利を適用
    }

    resultStopTumitate.push({
      age: i,
      principal: firedPrincipalStop, // 元本はFIRE達成時の値で固定
      pv: currentPV_fire,
    });


    // console.log(`[FIRE後運用期間] 年齢:${i}, 元本:${firedPrincipalStop}, 資産合計:${currentPV_fire}`);
  }





  // fire後も積立を続けた場合
  const resultContinueTumitate: SimulationResult[]= []; // 結果を入れる
  let totalPrincipalContinue = currentAsset; // 毎年更新される元本
  let totalPVContinue = currentAsset;        // 毎年更新される資産総額

  for (let i=currentAgeYear; i<=finalAge; i++) {

    if (i > currentAgeYear) {
      // 1年間の月単位の計算
      for (let month = 1; month <= 12; month++) {
        totalPVContinue += monthlyPMT; // 月の積立額を追加
        totalPVContinue *= (1 + r_monthly); // 月利を適用
      }
      totalPrincipalContinue += monthlyPMT * 12; // 元本も更新
    }

    // 毎年1回、結果を配列に格納
    resultContinueTumitate.push({
      age: i,
      principal: totalPrincipalContinue,
      pv: totalPVContinue,
    });

    // console.log(`[継続積立シミュレーション] 年齢:${i}, 元本:${totalPrincipalContinue}, 資産合計:${totalPVContinue}`);
  }
  return {resultStopTumitate, resultContinueTumitate}
}

export default calcTumitateAmountGraphData;






// デバック用コード(後で消す！！)
// // --- 引数の受け取りと関数の実行 ---
// const [, ,
//   currentAgeYear,
//   coastAge,
//   finalAge,
//   currentAsset,
//   annualReturn,
//   monthlyPMT
// ] = process.argv;

// // 型を数値に変換して関数に渡す
// calcTumitateAmountGraphData({
//   currentAgeYear: parseInt(currentAgeYear, 10),
//   coastAge: parseInt(coastAge, 10),
//   finalAge: parseInt(finalAge, 10),
//   currentAsset: parseInt(currentAsset, 10),
//   annualReturn: parseFloat(annualReturn),
//   monthlyPMT: parseInt(monthlyPMT, 10),
// });
