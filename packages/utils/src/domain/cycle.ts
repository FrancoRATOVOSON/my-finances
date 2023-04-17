import * as DateFns from 'date-fns'
import { Expenses } from './expenses';
import { Incomes } from './incomes';

export interface Cycle {
  label: string;
  startedAt: Date;
  endedAt: Date | null;
  expenses: Expenses[];
  incomes: Incomes[];
}

export interface CycleInterval {
  startedAt: Date;
  endedAt: Date | null;
}

export function getSimpleCycleLabel(startedDate:Date):string {
  return DateFns.format(startedDate, 'MMMM yyyy')
}
