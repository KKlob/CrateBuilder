import { Grid, Table, TableBody, TableRow, TableCell, TextField, Button, TableHead } from "@mui/material";
import { useFormik, yupToFormErrors } from "formik";
import * as Yup from 'yup';

function TwoByFoursForm({ crate, setCrate }) {

    let qty = "";
    let length = "";

    const twoBySchema = Yup.object({
        twoBy1: Yup.object({ qty: Yup.number(), length: Yup.string() }),
        twoBy2: Yup.object({ qty: Yup.number(), length: Yup.string() }),
        twoBy3: Yup.object({ qty: Yup.number(), length: Yup.string() }),
        twoBy4: Yup.object({ qty: Yup.number(), length: Yup.string() }),
        twoBy5: Yup.object({ qty: Yup.number(), length: Yup.string() }),
    })

    const formik = useFormik({
        initialValues: {
            twoBy1: { qty, length },
            twoBy2: { qty, length },
            twoBy3: { qty, length },
            twoBy4: { qty, length },
            twoBy5: { qty, length }
        },
        validationSchema: twoBySchema,
        onSubmit: values => {
            const addTwoBys = [];
            Object.values(values).forEach(row => {
                if (row.qty) {
                    addTwoBys.push(row);
                }
            });
            let newBF = crate.addBoardFeet(addTwoBys);
            setCrate({ ...crate, bf: newBF });
        },
    });

    return (
        <div id="two-by-fours-form">
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell colSpan={2} align="center">Enter All Additional 2x4s below</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell align="center">Qty</TableCell>
                                    <TableCell align="center">Length</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center"><TextField name="twoBy1.qty" value={formik.values.twoBy1.qty} onChange={formik.handleChange} /></TableCell>
                                    <TableCell align="center"><TextField name="twoBy1.length" value={formik.values.twoBy1.length} onChange={formik.handleChange} /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center"><TextField name="twoBy2.qty" value={formik.values.twoBy2.qty} onChange={formik.handleChange} /></TableCell>
                                    <TableCell align="center"><TextField name="twoBy2.length" value={formik.values.twoBy2.length} onChange={formik.handleChange} /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center"><TextField name="twoBy3.qty" value={formik.values.twoBy3.qty} onChange={formik.handleChange} /></TableCell>
                                    <TableCell align="center"><TextField name="twoBy3.length" value={formik.values.twoBy3.length} onChange={formik.handleChange} /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center"><TextField name="twoBy4.qty" value={formik.values.twoBy4.qty} onChange={formik.handleChange} /></TableCell>
                                    <TableCell align="center"><TextField name="twoBy4.length" value={formik.values.twoBy4.length} onChange={formik.handleChange} /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center"><TextField name="twoBy5.qty" value={formik.values.twoBy5.qty} onChange={formik.handleChange} /></TableCell>
                                    <TableCell align="center"><TextField name="twoBy5.length" value={formik.values.twoBy5.length} onChange={formik.handleChange} /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center"><Button type="submit">Submit</Button></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Grid>
                </Grid>
            </form>
        </div>
    )

}

export default TwoByFoursForm;