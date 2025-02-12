
import { useRef, useState } from "react";
import Button from "@/components/Button";
import AddExpenseForm from "@/components/AddExpenseForm";
import CatFact from "@/components/CatFact";
import type { Expense } from "@/types";
import styles from "@/styles/ExpenseDetailDialog.module.css";

interface Props {
  onAddExpense: (expense: Expense) => void;
}

export default function ExpenceDetailDialog({ onAddExpense }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);

  const handleOpen = () => {
    dialog.current?.showModal();
    setIsOpen(true);
  };

  const handleClose = () => {
    dialog.current?.close();
    setIsOpen(false);
  }
  
  return (
    <>
      <Button title="Add Expense" onClick={handleOpen} />

      <dialog ref={dialog} className={styles.dialog}>
        <button className={styles.close} onClick={handleClose}>✕</button>

        {isOpen && (
          <div className={styles.content}>
            <AddExpenseForm onSubmit={onAddExpense} />

            <CatFact />
          </div>
        )}
      </dialog>
    </>
  );
}
