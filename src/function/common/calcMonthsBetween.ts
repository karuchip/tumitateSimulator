//月数計算

type Props = {
  curY: number;
  coastY: number;
}

export function CalcMonthsBetween(
  {curY, coastY}: Props
) {
  return coastY * 12  - curY * 12;
}
