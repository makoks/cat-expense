
import { useMemo, type ChangeEvent } from "react";
import { Expense, ExpenseCategory } from "@/types";
import styles from "@/styles/ExpenseTable.module.css";

interface Props {
  data: Expense[];
  selectedIds: string[];
  onSelectIds: (ids: string[]) => void;
}

const amountFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  roundingPriority: 'lessPrecision',
});

export default function Table({ data, selectedIds, onSelectIds }: Props) {
  const topCategories = useMemo(() => {
    const totalExpenses = data.reduce(
      (result, { category, amount }) => ({ ...result, [category]: result[category] + amount }),
      { [ExpenseCategory.FOOD]: 0, [ExpenseCategory.FURNITURE]: 0, [ExpenseCategory.ACCESSORY]: 0 }
    );
    const maxSpend = Math.max(...Object.values(totalExpenses));
    return (Object.keys(totalExpenses) as ExpenseCategory[]).filter(category => totalExpenses[category] === maxSpend);
  }, [data]);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>, id: string) => {
    const newIds = event.target.checked
      ? [...selectedIds, id]
      : selectedIds.filter(selectedId => selectedId !== id);
    onSelectIds(newIds);
  }

  return (
    <div className={styles.container}>
      {data.length > 0 ? (
        <table className={styles.table}>
          <thead>
            <tr>
              <th></th>
              <th>Item</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
    
          <tbody>
            {data.map(row => (
              <tr key={row.id} className={topCategories.includes(row.category) ? styles.highlight : ''}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(row.id)}
                    onChange={event => handleCheckboxChange(event, row.id)}
                  />
                </td>
                <td>{row.name}</td>
                <td>{row.category}</td>
                <td>{amountFormat.format(row.amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>Meowconomy needs funding ^^</div>
      )}
    </div>
  );
}
