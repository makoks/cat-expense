import { useState } from "react";
import Button from "@/components/Button";
import ExpensesTable from "@/components/ExpenseTable";
import AddExpenceModal from "@/components/AddExpenceModal";
import { ExpenseCategory, Expense } from "@/types";

export default function CatExpense() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expenses, setExpenses] = useState<Expense[]>([
    { name: 'Whiskers Cat food', category: ExpenseCategory.FOOD, amount: 10 },
    { name: 'Self cleaning cat Litter box', category: ExpenseCategory.FURNITURE, amount: 500 },
    { name: 'Diamond Cat collar', category: ExpenseCategory.ACCESSORY, amount: 1000 },
  ]);

  return (
    <>
      <div className="controls">
        <Button title="Add Expense" />
        <Button title="Delete Expense" />
      </div>

      <ExpensesTable data={expenses} />

      <AddExpenceModal isOpen={isModalOpen} />
    </>
  );
}
