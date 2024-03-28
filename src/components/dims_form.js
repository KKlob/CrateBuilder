import { Grid, TextField, Table, TableHead, TableBody, TableRow, TableCell, Checkbox } from "@mui/material";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import Fraction from 'fraction.js';
import { useState } from "react";
import TwoByFourRow from "./twoByRow";

function DimsForm() {

    const formik = useFormik({
        initialValues: {
            length: "",
            width: "",
            height: "",
            addFeet: false,
            twoBysQty: [],
            twoBysLen: [],
        },
        onSubmit: values => {
            console.log(values);
        },
    });

    const [twoBys, setTwoBys] = useState([]);

    function handleAddRow() {
        formik.values.twoBysQty = [...formik.values.twoBysQty, "0"]
        formik.values.twoBysLen = [...formik.values.twoBysLen, "0"]
        setTwoBys([...twoBys, "row"])
    }

    function handleClearRows() {
        formik.values.twoBysQty = [];
        formik.values.twoBysLen = [];
        setTwoBys([]);
    }

    return (
        <div id="DimsForm">
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Length</TableCell>
                                    <TableCell align="center">Width</TableCell>
                                    <TableCell align="center">Height</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell align="center"><TextField id="length" name="length" value={formik.values.length} onChange={formik.handleChange} /></TableCell>
                                    <TableCell align="center"><TextField id="width" name="width" value={formik.values.width} onChange={formik.handleChange} /></TableCell>
                                    <TableCell align="center"><TextField id="height" name="height" value={formik.values.height} onChange={formik.handleChange} /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={3} align="center"><Checkbox name="addFeet" value={formik.values.addFeet} onChange={formik.handleChange} />Add additional 2x4s for support?</TableCell>
                                </TableRow>
                                {twoBys.map((value, ind) => {
                                    return (
                                        <TableRow key={crypto.randomUUID()}>
                                            <TableCell><TextField name={"twoBysQty[".concat(ind).concat("]")} value={formik.values.twoBysQty[ind]} onChange={formik.handleChange}></TextField></TableCell>
                                            <TableCell><TextField name={"twoBysLen[".concat(ind).concat("]")} value={formik.values.twoBysLen[ind]} onChange={formik.handleChange}></TextField></TableCell>
                                            <TableCell>placeholder</TableCell>
                                        </TableRow>
                                    )
                                })}
                                <TableRow>
                                    <TableCell align="center"><Button onClick={handleAddRow}>Add 2x4</Button></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell align="center"><Button onClick={handleClearRows}>Clear 2x4s</Button></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={3} align="center"><Button type="submit">Submit</Button></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Grid>
                </Grid>
            </form >
        </div >
    )
}

export default DimsForm;