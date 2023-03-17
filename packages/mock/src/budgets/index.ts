import { Budget, fakeNoun, fakeUuid, sample } from "utils";

export function budgetFactory():Budget {
  return {
    id: fakeUuid(),
    label: fakeNoun(),
    tags: [fakeNoun()]
  }
}

export function budgetsFactory(count:number=5):Budget[] {
  return sample(budgetFactory,count)
}
