import { Button, Table, TableCell, TableHead, TableRow, TableBody } from "@mui/material";
import { useState } from "react";
import TwoByFourRow from "./twoByRow";
import Fraction from 'fraction.js';

function AddTwoByFoursForm({ updateTwoBysTotal }) {

    const [twoBys, updateTwoBys] = useState({});

    const baseRow = { qty: 0, length: 0 }

    function handleAddRow() {
        const nextKey = Object.keys(twoBys).length + 1
        twoBys[nextKey] = baseRow
        updateTwoBys({ ...twoBys });
    }

    function clearRows() {
        updateTwoBys({});
    }

    function updateBF() {
        let total = 0;

        Object.values(twoBys).map(row => {
            const lenFrac = new Fraction(row.length);
            const rowTotal = lenFrac.mul(row.qty);
            total = total + rowTotal;
        });

        console.log(total);
    }

    return (
        <div id="add_two_by_fours_form">
            <Table id="twobys">
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
                    {Object.entries(twoBys).map(row => <TwoByFourRow key={crypto.randomUUID()} twoBys={twoBys} updateTwoBys={updateTwoBys} rowID={row[0]} />)}
                    <TableRow>
                        <TableCell><Button onClick={handleAddRow}>Add 2x4</Button></TableCell>
                        <TableCell><Button onClick={updateBF}>Update</Button></TableCell>
                        <TableCell><Button onClick={clearRows}>Clear 2x4s</Button></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}


export default AddTwoByFoursForm;