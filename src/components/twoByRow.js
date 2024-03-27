import { TableRow, TableCell, TextField } from '@mui/material';

function TwoByFourRow({ qty, length }) {
    return (
        <TableRow>
            <TableCell><TextField value={qty}></TextField></TableCell>
            <TableCell><TextField value={length}></TextField></TableCell>
            <TableCell>placeholder</TableCell>
        </TableRow>
    )
}

export default TwoByFourRow;