import { faker } from "@faker-js/faker";

export function fakeAmount():number {
  return faker.datatype.number({
      min: 1000,
      max: 10000000,
      precision: 100
    })
}

export function fakeUuid() {
  return faker.datatype.uuid()
}

export function fakeNoun() {
  return faker.word.noun()
}

export function fakeDateBetween(from: Date, to: Date) {
  return faker.date.between(from,to)
}
