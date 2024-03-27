import { Button, Table, TableCell, TableHead, TableRow, TableBody, TextField } from "@mui/material";
import { Tab } from "react-bootstrap";
import { useState } from "react";
import TwoByFourRow from "./twoByRow";

function AddTwoByFoursForm() {

    const [twoBys, updateTwoBys] = useState([]);

    console.log(twoBys);

    function handleAddRow() {
        console.log("adding row");
        updateTwoBys([...twoBys, { qty: 0, length: 0 }]);
    }

    function updateBF() {

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
                    {twoBys.map(row => <TwoByFourRow key={crypto.randomUUID()} qty={row.qty} length={row.length} />)}
                    <TableRow>
                        <TableCell><Button onClick={handleAddRow}>Add 2x4</Button></TableCell>
                        <TableCell><Button onClick={updateBF}>Update</Button></TableCell>
                        <TableCell><Button>Clear 2x4s</Button></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}


export default AddTwoByFoursForm;