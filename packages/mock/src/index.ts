import { Budget, Cycle, ExpensesTags, IncomesTags } from "utils";
import { budgetsFactory } from "./budgets";
import { cyclesFactory } from "./cycles";
import { expenseTagsFactory } from "./expenses";
import { incomesTagsFactory } from "./incomes";

export interface UserDatas {
  cycles: Cycle[],
  budgets: Budget[],
  incomesTags: IncomesTags,
  expensesTags: ExpensesTags,
}

export function getUserDatas():UserDatas{
  const incomesTags = incomesTagsFactory()
  const expensesTags = expenseTagsFactory()
  const budgets = budgetsFactory()

  return {
    cycles: cyclesFactory({
      budgets: budgets.map(budget => budget.id),
      incomesTags,
      expensesTags
    }),
    budgets,
    incomesTags,
    expensesTags
  }
}
