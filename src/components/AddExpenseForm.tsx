import { useState, ChangeEvent, FormEvent } from "react";
import Button from "@/components/Button";
import { type Expense, ExpenseCategory } from "@/types";
import styles from "@/styles/AddExpenseForm.module.css";

type FieldName = keyof Omit<Expense, 'id'>;
interface Props {
  onSubmit: (data: Expense) => void;
}

const validation: Record<FieldName, { check: (value?: string | number) => boolean; message: string }> = {
  name: {
    check: Boolean,
    message: 'Name is required',
  },
  category: {
    check: Boolean,
    message: 'Please select a category',
  },
  amount: {
    check: value => typeof value === 'number' && value > 0,
    message: 'Enter an amount greater than 0',
  },
};

export default function AddExpenseForm({ onSubmit }: Props) {
  const [expense, setExpense] = useState<Partial<Expense>>({ id: crypto.randomUUID() });
  const [errors, setErrors] = useState({
    name: validation.name.message,
    category: validation.category.message,
    amount: validation.amount.message,
  });
  const [touched, setTouched] = useState({ name: false, category: false, amount: false });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const fieldName = event.target.name as FieldName;
    const value = event.target.type === 'number' ? Number(event.target.value) : event.target.value;
    const isValid = validation[fieldName].check(value);
    setTouched({
      ...touched,
      [fieldName]: true,
    });
    setExpense({
      ...expense,
      [fieldName]: value,
    });
    setErrors({
      ...errors,
      [fieldName]: isValid ? '' : validation[fieldName].message,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(expense as Expense);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="name">Item:</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Item name"
          className={touched.name && errors.name ? styles.invalid : undefined}
          required
          autoComplete="off"
          onChange={handleChange}
          onBlur={handleChange}
        />
        {touched.name && errors.name && (
          <span>{errors.name}</span>
        )}
      </div>
      

      <div className={styles.field}>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          className={touched.category && errors.category ? styles.invalid : undefined}
          defaultValue=""
          required
          onChange={handleChange}
          onBlur={handleChange}
        >
          <option value="" disabled>Category</option>
          {Object.values(ExpenseCategory).map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        {touched.category && errors.category && (
          <span>{errors.category}</span>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          name="amount"
          type="number"
          placeholder="Item amount"
          className={touched.amount && errors.amount ? styles.invalid : undefined}
          required
          min={1}
          onChange={handleChange}
          onBlur={handleChange}
        />
        {touched.amount && errors.amount && (
          <span>{errors.amount}</span>
        )}
      </div>

      <Button
        title="Submit"
        disabledText={Object.values(errors).some(Boolean) ? 'Check your data before submitting' : ''}
      />
    </form>
  );
}
