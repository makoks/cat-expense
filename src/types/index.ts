export enum ExpenseCategory {
  FOOD = 'Food',
  FURNITURE = 'Furniture',
  ACCESSORY = 'Accessory',
}

export interface Expense {
  name: string;
  category: ExpenseCategory;
  amount: number;
}
