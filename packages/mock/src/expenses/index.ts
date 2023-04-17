import { Expenses, ExpensesTags, fakeAmount, fakeDateBetween, fakeNoun, fakeUuid, getManyIn, getOneIn, sample } from "utils";

interface ExpenseFactoryParams {
  from:Date,
  to:Date,
  budget:string,
  tags: string[]
}

export function expenseFactory({from, to, budget, tags}: ExpenseFactoryParams):Expenses{
  return {
    id: fakeUuid(),
    label: fakeNoun(),
    date: fakeDateBetween(from, to),
    amount: fakeAmount(),
    budget,
    tags
  }
}

interface ExpensesFactoryParams extends Omit<ExpenseFactoryParams, 'budget'> {
  budgets:string[],
}
export function expensesFactory(
  {from, to, budgets, tags}: ExpensesFactoryParams,
  count:number=35
):Expenses[] {
  return sample(
    () => expenseFactory({from,to, budget: getOneIn(budgets), tags: getManyIn(tags)}),
    count
  )
}

export function expenseTagsFactory():ExpensesTags {
  return sample(fakeNoun,5)
}
