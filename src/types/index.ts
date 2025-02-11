export enum ExpenseCategory {
  FOOD = 'Food',
  FURNITURE = 'Furniture',
  ACCESSORY = 'Accessory',
}

export interface Expense {
  id: string;
  name: string;
  category: ExpenseCategory;
  amount: number;
}
