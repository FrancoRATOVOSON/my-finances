export interface Incomes {
  id: string;
  label: string;
  date: Date;
  amount: number;
  tags: IncomesTags;
  shared: boolean;
}

export type IncomesTags = string[]
