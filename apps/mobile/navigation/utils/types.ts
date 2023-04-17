import { createBottomTabNavigator, BottomTabScreenProps } from "@react-navigation/bottom-tabs"

export enum RouteLabels {
  HOME="Home",
  EXPENSES="Expenses",
  INCOMES="Incomes",
  BUDGETS="Budgets",
  GOALS="Goals"
}

export type RoutePath = "home" | "expenses" | "incomes" | "gudgets" | "goals"

export type BottomTabNavigatorType = Record<RouteLabels, object | undefined>

export interface HomeSreenProps extends BottomTabScreenProps<BottomTabNavigatorType, RouteLabels.HOME> {}
