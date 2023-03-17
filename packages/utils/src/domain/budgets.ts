export interface Budget {
  id: string;
  label: string;
  tags: BudgetTags;
}

export type BudgetTags = string[]
