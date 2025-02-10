import Button from "@/components/Button";
import CatFact from "@/components/CatFact";

interface Props {
  isOpen: boolean
}

export default function AddExpenceModal({ isOpen }: Props) {
  return (
    <dialog open={isOpen}>
      <form method="dialog">
        <label>
          Item:
          <input type="text" placeholder="Item name" />
        </label>

        <label>
          Category:
          <select defaultValue="">
            <option value="" disabled>Category</option>
          </select>
        </label>

        <label>
          Amount:
          <input type="number" placeholder="Item amount" />
        </label>

        <Button title="Submit" />
      </form>

      <CatFact />
    </dialog>
  );
}
