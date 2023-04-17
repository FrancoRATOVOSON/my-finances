import { Budget } from "./budgets";

export interface Expenses {
  id: string;
  label: string;
  date: Date;
  amount: number;
  tags: ExpensesTags;
  budget: string;
}

export type ExpensesTags= string[];
