import { CalcMonthsBetween } from "../common/calcMonthsBetween";

// 実用版（FV を引数にする、毎月先頭に積立するバージョン）
type CalcTumitateAmountParams = {
  currentAgeYear: number;
  coastAge: number;
  finalAge: number;
  currentAsset: number;
  annualReturn: number;
  FV: number;
};

export function CalcTumitateAmount({
  currentAgeYear,
  coastAge,
  finalAge,
  currentAsset,
  annualReturn,
  FV,
}: CalcTumitateAmountParams) {

  if (coastAge <= currentAgeYear) throw new Error("「積立をやめる予定の年齢」 は 「現在の年齢」 より大きくしてください");
  if (finalAge <= coastAge) throw new Error("「老後資金を受け取りたい年齢」 は 「積立をやめる予定の年齢」 より大きくしてください");

  // 年利
  const r = annualReturn;

  // coastAgeからfinalAgeまでの年数
  const t_future = finalAge - coastAge;

  // 達成年齢時点で必要な資産（年利で逆算）
  const pvNeeded = FV / Math.pow(1 + r, t_future);

  // 現在資産が達成年齢までに成長する将来価値（**月利で計算**）
  const monthsToCoast = CalcMonthsBetween(
    { curY: currentAgeYear, coastY: coastAge }
  ) - 1; //FIRE目標年齢頭で元本達成できるように-1する

  const r_monthly = Math.pow(1 + r, 1 / 12) - 1; // 月利
  const factor = Math.pow(1 + r_monthly, monthsToCoast);
  // 現在資産が、coastAgeまで育つ額
  const pvFuture = currentAsset * factor;

  // 追加で作るべき将来価値(coastAge時点で)
  const S = pvNeeded - pvFuture

  // 必要な月額積立 (毎月先頭積立 = annuity due)
  let monthlyPMT = 0;
  // もしS>0なら積立で埋める。　s<=0ならすでに達成済み(monthlyPMT = 0)
  if(S > 0) {
    const denom = factor - 1;
    if (Math.abs(denom) < 1e-12) {
      monthlyPMT = S / monthsToCoast; // 金利ほぼ0%のときのフォールバック
    } else {
      // 末払いのPMT
      monthlyPMT = S * (r_monthly) / denom;
    }
  }else {
    monthlyPMT = 0;
  }


  return {
    pvNeeded,      // 達成年齢時点で必要な資産
    pvFuture,      // 現在資産が達成年齢時点で育った額
    monthlyPMT,    // 達成のために必要な毎月の積立額（円）
    monthsToSave: monthsToCoast,  //coastFire達成までの月数
  };
}

