export enum RoutePaths {
  HOME="home",
  EXPENSES="expenses",
  INCOMES="incomes",
  BUDGETS="budgets"
}

export type PathLabel = "Home" | "Expenses" | "Incomes" | "Budgets"

export function getPathLabel(path:RoutePaths):PathLabel {
  switch (path) {
    case RoutePaths.HOME: return "Home"
    case RoutePaths.EXPENSES: return "Expenses"
    case RoutePaths.INCOMES: return "Incomes"
    case RoutePaths.BUDGETS: return "Budgets"
  }
}
