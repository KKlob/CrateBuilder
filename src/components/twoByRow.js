import { TableRow, TableCell, TextField } from '@mui/material';

function TwoByFourRow({ rowID, qty, length, updateRow }) {

    function handleChange(event) {
        updateRow(rowID, event.target.name, event.target.value);
    }

    return (
        <TableRow>
            <TableCell><TextField name="qty" value={qty} onChange={handleChange}></TextField></TableCell>
            <TableCell><TextField name="length" value={length} onChange={handleChange}></TextField></TableCell>
            <TableCell>placeholder</TableCell>
        </TableRow>
    )
}

export default TwoByFourRow;