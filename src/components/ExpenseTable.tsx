import type { Expense } from "@/types";

interface Props {
  data: Expense[]
}

export default function Table({ data }: Props) {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Item</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{JSON.stringify(data)}</td>
        </tr>
      </tbody>
    </table>
  );
}
