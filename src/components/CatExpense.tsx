import { useState } from "react";
import ExpenseDetailDialog from "@/components/ExpenseDetailDialog";
import Button from "@/components/Button";
import ExpensesTable from "@/components/ExpenseTable";
import { expenses as initialExpenses } from "@/resources";
import { type Expense } from "@/types";

export default function CatExpense() {
  const [expenses, setExpenses] = useState<Expense[]>(initialExpenses);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handleAddExpense = (expense: Expense) => {
    setExpenses([...expenses, expense]);
  };

  const handleDeleteExpenses = () => {
    setExpenses(expenses.filter(({ id }) => !selectedIds.includes(id)));
    setSelectedIds([]);
  };

  return (
    <>
      <div className="controls">
        <ExpenseDetailDialog onAddExpense={handleAddExpense} />

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
    </>
  );
}
