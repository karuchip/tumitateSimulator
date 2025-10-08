
// 万単位や円だけ欲しい場合
export default function formatCurrency(value: number): string {
  return value.toLocaleString("ja-JP", {
    maximumFractionDigits: 0, // 小数点なし
  });
}
