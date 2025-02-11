import { useState } from "react";
import Button from "@/components/Button";
import ExpensesTable from "@/components/ExpenseTable";
import AddExpenceModal from "@/components/AddExpenceModal";
import { ExpenseCategory, Expense } from "@/types";

export default function CatExpense() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: '1', name: 'Whiskers Cat food', category: ExpenseCategory.FOOD, amount: 10 },
    { id: '2', name: 'Self cleaning cat Litter box', category: ExpenseCategory.FURNITURE, amount: 500 },
    { id: '3', name: 'Diamond Cat collar', category: ExpenseCategory.ACCESSORY, amount: 1000 },
  ]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  return (
    <>
      <div className="controls">
        <Button title="Add Expense" />
        <Button title="Delete Expense" />
      </div>

      <ExpensesTable
        data={expenses}
        selectedIds={selectedIds}
        onSelectIds={(ids: string[]) => setSelectedIds(ids)}
      />

      <AddExpenceModal isOpen={isModalOpen} />
    </>
  );
}
