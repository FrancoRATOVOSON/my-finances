import { RouteLabels } from "../../../utils"
import { SVGIcon } from "../../../../utils"
import {
  BudgetsActive,
  BudgetsInactive,
  ExpensesActive,
  ExpensesInactive,
  GoalsActive,
  GoalsInactive,
  HomeActive,
  HomeInactive,
  IncomesActive,
  IncomesInactive
} from "../../../../assets/navIcons"

export interface NavIconType {
  Active: SVGIcon,
  Inactive: SVGIcon
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
