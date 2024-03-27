import { Button, Table, TableCell, TableHead, TableRow, TableBody } from "@mui/material";
import TwoByFourRow from "./twoByRow";
import Fraction from 'fraction.js';
import { useFormik } from "formik";
import { useState } from "react";

function AddTwoByFoursForm() {

    const [rows, setRows] = useState({});

    const formik = useFormik({
        initialValues: {},
        onSubmit: values => {
            console.log(values);
        }
    });

    function addRow() {
        const baseRow = { qty: 0, length: 0 }
        const rowID = Object.keys(rows).length + 1;
        rows[rowID] = baseRow;
        setRows({ ...rows });
    }

    function updateRow(rowID, key, value) {
        if (key == "qty") {
            const length = rows[rowID].length;
            setRows({ ...rows, [rowID]: { qty: value, length: length } })
        } else {
            const qty = rows[rowID].qty;
            setRows({ ...rows, [rowID]: { qty: qty, length: value } })
        }
    }

    function handleSubmit() {
        formik.setValues({ ...rows });
        formik.handleSubmit();
    }

    function clearRows() {
        formik.setValues({});
        setRows({});
    }

    return (
        <div id="add_two_by_fours_form">
            <form onSubmit={formik.handleSubmit}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell colSpan={3} align="center">
                                Add Additional 2x4s below
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Qty</TableCell>
                            <TableCell>Length</TableCell>
                            <TableCell>Total Length</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.keys(rows).map(rowID => <TwoByFourRow key={crypto.randomUUID()} rowID={rowID} qty={rows[rowID].qty} length={rows[rowID].length} updateRow={updateRow} />)}
                        <TableRow>
                            <TableCell><Button onClick={addRow}>Add 2x4</Button></TableCell>
                            <TableCell><Button onClick={handleSubmit}>Update</Button></TableCell>
                            <TableCell><Button onClick={clearRows}>Clear 2x4s</Button></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </form>
        </div>
    )
}


export default AddTwoByFoursForm;