import { Grid, TextField, Table, TableHead, TableBody, TableRow, TableCell, Checkbox } from "@mui/material";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from 'yup';
import Crate from "../objects/crate";

function DimsForm({ setCrate }) {

    const DimsSchema = Yup.object().shape({
        length: Yup.string()
            .min(1, "Need an input")
            .required("required"),
        width: Yup.string()
            .min(1, "Need an input")
            .required("required"),
        height: Yup.string()
            .min(1, "Need an input")
            .required("required"),
    })

    const formik = useFormik({
        initialValues: {
            length: "",
            width: "",
            height: "",
            addFeet: false,
        },
        validationSchema: DimsSchema,
        onSubmit: values => {
            setCrate(new Crate(values.length, values.width, values.height, values.addFeet));
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
                                    <TableCell align="center"><TextField id="length" name="length" value={formik.values.length} onChange={formik.handleChange} /></TableCell>
                                    <TableCell align="center"><TextField id="width" name="width" value={formik.values.width} onChange={formik.handleChange} /></TableCell>
                                    <TableCell align="center"><TextField id="height" name="height" value={formik.values.height} onChange={formik.handleChange} /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={3} align="center"><Checkbox name="addFeet" value={formik.values.addFeet} onChange={formik.handleChange} />Add additional 2x4s for support?</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center" colSpan={3}><Button type="submit">Submit</Button></TableCell>
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