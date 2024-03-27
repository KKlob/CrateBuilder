import { TableRow, TableCell, TextField } from '@mui/material';

function TwoByFourRow({ twoBys, updateTwoBys, rowID }) {

    function handleChange(event) {
        if (event.target.name == "qty") {
            twoBys[rowID].qty = event.target.value;
            updateTwoBys({ ...twoBys });
        } else {
            twoBys[rowID].length = event.target.value;
            updateTwoBys({ ...twoBys });
        }
    }

    return (
        <TableRow>
            <TableCell><TextField name="qty" value={twoBys[rowID].qty} onChange={handleChange}></TextField></TableCell>
            <TableCell><TextField name="length" value={twoBys[rowID].length} onChange={handleChange}></TextField></TableCell>
            <TableCell>placeholder</TableCell>
        </TableRow>
    )
}

export default TwoByFourRow;