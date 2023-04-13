import { Cycle, CycleInterval as CI, ExpensesTags, getCurrentMonthYear, getMonthCycleInterval, getSimpleCycleLabel, IncomesTags, subMonth } from "utils";
import { expensesFactory } from "../expenses";
import { incomesFactory } from "../incomes";

interface CyclesFactoryParams {
  budgets: string[],
  incomesTags:IncomesTags,
  expensesTags: ExpensesTags
}

interface CycleFactoryParams extends CyclesFactoryParams {
  startedAt: Date,
  endedAt: Date | null,
  budgets: string[]
}

export function cycleFactory({
  startedAt, endedAt, incomesTags, expensesTags, budgets
}: CycleFactoryParams):Cycle {
  return {
    startedAt,
    endedAt,
    label: getSimpleCycleLabel(startedAt),
    incomes: incomesFactory({
      from: startedAt,
      to: endedAt || new Date,
      tags: incomesTags
    }),
    expenses: expensesFactory({
      from: startedAt,
      to: endedAt || new Date,
      budgets,
      tags: expensesTags
    })
  }
}

interface CycleInterval extends CI {
  label: string
}

export function cycleIntervalFactory(startedAt:Date):CycleInterval {
  return {
    label: getSimpleCycleLabel(startedAt),
    ...getMonthCycleInterval({date: startedAt})
  }
}

export function cycleIntervalsFactory(count:number=12):CycleInterval[] {
  let currentDate = new Date()
  const cycles:CycleInterval[] = [cycleIntervalFactory(currentDate)]

  for (let i = 0; i < count; i++)
    cycles.push(cycleIntervalFactory(subMonth(currentDate, i)))

  return cycles
}

export function cyclesFactory(
  {budgets, incomesTags, expensesTags}: CyclesFactoryParams,
  count:number=12
):Cycle[] {
  return cycleIntervalsFactory(count).map(cycle => ({
    ...cycle,
    incomes: incomesFactory({
      from: cycle.startedAt,
      to: cycle.endedAt || new Date(),
      tags: incomesTags
    }),
    expenses: expensesFactory({
      from: cycle.startedAt,
      to: cycle.endedAt || new Date(),
      tags: expensesTags,
      budgets
    })
  }))
}
