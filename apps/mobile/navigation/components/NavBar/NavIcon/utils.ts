import { SvgProps } from "react-native-svg"
import { RouteLabels } from "../../../utils"
import { HomeActive, HomeInactive } from "./icons/home"
import { ExpensesActive, ExpensesInactive } from "./icons/expenses"
import { IncomesActive, IncomesInactive } from "./icons/incomes"
import { BudgetsActive, BudgetsInactive } from "./icons/budgets"
import { GoalsActive, GoalsInactive } from "./icons/goals"

export interface NavIconType {
  Active: React.FC<SvgProps>,
  Inactive: React.FC<SvgProps>
}

type NavElement = Record<RouteLabels,NavIconType>

export const PathIcons:NavElement = {
  Home: {
    Active: HomeActive,
    Inactive: HomeInactive
  },
  Expenses: {
    Active: ExpensesActive,
    Inactive: ExpensesInactive
  },
  Incomes: {
    Active: IncomesActive,
    Inactive: IncomesInactive
  },
  Budgets: {
    Active: BudgetsActive,
    Inactive: BudgetsInactive
  },
  Goals: {
    Active: GoalsActive,
    Inactive: GoalsInactive
  }
}
