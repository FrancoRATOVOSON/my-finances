export enum RoutePaths {
  HOME="home",
  EXPENSES="expenses",
  INCOMES="incomes",
  BUDGETS="budgets",
  GOALS="goals"
}

export type PathLabel = "Home" | "Expenses" | "Incomes" | "Budgets" | "Goals"

export function getPathLabel(path:RoutePaths):PathLabel {
  switch (path) {
    case RoutePaths.HOME: return "Home"
    case RoutePaths.EXPENSES: return "Expenses"
    case RoutePaths.INCOMES: return "Incomes"
    case RoutePaths.BUDGETS: return "Budgets"
    case RoutePaths.GOALS: return "Goals"
  }
}
