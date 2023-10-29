import {Table, TableTitle, Tr, Td } from "./TransactionHistory.styled";
export const TransactionHistory = ({items}) => {

return (
    <Table>
  <TableTitle>
    <tr>
      <Td >Type</Td >
      <Td >Amount</Td >
      <Td >Currency</Td >
    </tr>
  </TableTitle>

  <tbody>
    {items.map((item, i) =>
    (<Tr key={item.id} id={item.id} index={item.i}>
      <Td >{item.type}</Td>
      <Td>{item.amount}</Td>
      <Td>{item.currency}</Td>
    </Tr>))}
  </tbody>
</Table>
);
};