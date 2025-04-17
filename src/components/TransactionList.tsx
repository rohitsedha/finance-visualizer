"use client";
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

export default function TransactionList({ data }: { data: any[] }) {
  return (
    <Table>
      <TableBody>
        {data.map((transaction) => (
          <TableRow key={transaction._id}>
            <TableCell>{transaction.description}</TableCell>
            <TableCell>₹{transaction.amount}</TableCell>
            <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
