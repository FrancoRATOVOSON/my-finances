import { fakeAmount, fakeDateBetween, fakeNoun, fakeUuid, getManyIn, Incomes, IncomesTags, sample } from "utils";

interface IncomeFactoryParams {
  from:Date,
  to:Date,
  tags:string[]
}

export function incomeFactory({from, to, tags}: IncomeFactoryParams):Incomes {
  return {
    id: fakeUuid(),
    label: fakeNoun(),
    amount: fakeAmount(),
    date: fakeDateBetween(from,to),
    shared: true,
    tags
  }
}

export function incomesFactory(
  {from, to, tags}: IncomeFactoryParams,
  count:number= 5
):Incomes[] {
  return sample(
    () => incomeFactory({from, to, tags: getManyIn(tags)}),
    count
  )
}

export function incomesTagsFactory():IncomesTags {
  return sample(fakeNoun, 3)
}
