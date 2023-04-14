export enum RouteLabels {
  HOME="Home",
  EXPENSES="Expenses",
  INCOMES="Incomes",
  BUDGETS="Budgets",
  GOALS="Goals"
}

export type RoutePath = "home" | "expenses" | "incomes" | "gudgets" | "goals"

export function getRoutePath(path:RouteLabels):RoutePath {
  return path.toLowerCase() as RoutePath
}
