export const growMonthlyPV = (pv:number, monthlyPMT:number, r_monthly:number) => {
  return (pv + monthlyPMT) * (1 + r_monthly)
}

export const growMonthlyPVnoPMT = (pv:number, r_monthly:number) => {
  return pv * (1 + r_monthly)
}
