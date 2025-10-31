export type RisyokuSavingSimulationInput = {
  duration : number;
  currentSaving: number;
  fixedExpense: number;
  variableExpense: number;
  income: {value:number}[],
}
