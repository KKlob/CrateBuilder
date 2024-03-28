import { TableRow, TableCell, TextField } from '@mui/material';

function TwoByFourRow({ row, ind, formik }) {

    const name = "twoBys[".concat(ind).concat("]");
    const q_name = name.concat(".qty");
    const l_name = name.concat(".length");

    return (
        <TableRow>
            <TableCell><TextField name={q_name} value={formik.values.twoBys[ind].qty} onChange={formik.handleChange}></TextField></TableCell>
            <TableCell><TextField name={l_name} value={formik.values.twoBys[ind].length} onChange={formik.handleChange}></TextField></TableCell>
            <TableCell>placeholder</TableCell>
        </TableRow>
    )
}

export default TwoByFourRow;