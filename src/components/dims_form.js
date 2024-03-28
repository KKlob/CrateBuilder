import { Box, Grid, TextField, Table, TableHead, TableBody, TableRow, TableCell, Stack, Checkbox } from "@mui/material";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import { Container } from "react-bootstrap";
import * as Yup from 'yup';
import Fraction from 'fraction.js';

function DimsForm() {

    const formik = useFormik({
        initialValues: {
            length: "",
            width: "",
            height: "",
            twoBys: []
        },
        onSubmit: values => {
            console.log(values);
        },
    });

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
                                    <TableCell align="center"><TextField>length</TextField></TableCell>
                                    <TableCell align="center"><TextField>Width</TextField></TableCell>
                                    <TableCell align="center"><TextField>Height</TextField></TableCell>
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