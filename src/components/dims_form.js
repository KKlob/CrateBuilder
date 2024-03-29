import { Grid, TextField, Table, TableHead, TableBody, TableRow, TableCell, Checkbox } from "@mui/material";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from 'yup';

function DimsForm({ dims, setDims, handleReset }) {

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
        initialValues: dims,
        validationSchema: DimsSchema,
        onSubmit: values => {
            setDims(values);
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
                                    <TableCell align="center"><Button type="submit">Submit</Button></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell align="center"><Button onClick={handleReset}>Reset Form</Button></TableCell>
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