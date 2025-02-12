import { useState } from "react";
import Button from "@/components/Button";
import ExpensesTable from "@/components/ExpenseTable";
import AddExpenceModal from "@/components/AddExpenceModal";
import { expenses as initialExpenses } from "@/resources";
import { type Expense } from "@/types";

export default function CatExpense() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expenses, setExpenses] = useState<Expense[]>(initialExpenses);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handleDeleteExpenses = () => {
    setExpenses(expenses.filter(({ id }) => !selectedIds.includes(id)));
    setSelectedIds([]);
  };

  return (
    <>
      <div className="controls">
        <Button title="Add Expense" onClick={() => setIsModalOpen(true)} />

        <Button
          title="Delete Expense"
          disabledText={selectedIds.length === 0 ? 'Check expenses to remove' : ''}
          onClick={handleDeleteExpenses}
        />
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
