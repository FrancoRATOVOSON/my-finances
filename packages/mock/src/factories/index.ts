import { faker } from "@faker-js/faker";
import { Budget, BudgetTags } from "api";

export function budgetFactory():Budget {
  return {
    id: faker.datatype.uuid(),
    label: faker.random.word(),
    tags: []
  }
}

export function budgetTagsFactory(count?:number):BudgetTags {
  return faker.random.words(count).split(' ')
}
