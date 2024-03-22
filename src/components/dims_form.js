import { Box, Grid, TextField, Table, TableHead, TableBody, TableRow, TableCell, Stack, Checkbox } from "@mui/material";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import { Container } from "react-bootstrap";

function DimsForm() {
    const formik = useFormik({
        initialValues: {
            lm: '',
            lt: '',
            lb: '',
            wm: '',
            wt: '',
            wb: '',
            hm: '',
            ht: '',
            hb: '',
            weight: false
        },
        onSubmit: values => {
            console.log(values);
        },
    });

    return (
        <div id="DimsForm">
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <Container>
                            <Table sx={{ border: "1px solid black" }}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center" colSpan={2}>
                                            Length
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="right">
                                            <TextField id="lm" name="lm" label="Length_Main" value={formik.values.lm} onChange={formik.handleChange} />
                                        </TableCell>
                                        <TableCell align="left">
                                            <Stack spacing={0}>
                                                <TextField id="lt" name="lt" label="Length_Top" sx={{ borderBottom: "1px solid black" }} value={formik.values.lt} onChange={formik.handleChange} />
                                                <TextField id="lb" name="lb" label="Length_Bot" sx={{ borderTop: "1px solid black" }} value={formik.values.lb} onChange={formik.handleChange} />
                                            </Stack>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Container>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Container>
                            <Table sx={{ border: "1px solid black" }}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center" colSpan={2}>
                                            Width
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="right">
                                            <TextField id="wm" name="wm" label="Width_Main" value={formik.values.wm} onChange={formik.handleChange} />
                                        </TableCell>
                                        <TableCell align="left">
                                            <Stack spacing={0}>
                                                <TextField id="wt" name="wt" label="Width_Top" sx={{ borderBottom: "1px solid black" }} value={formik.values.wt} onChange={formik.handleChange} />
                                                <TextField id="wb" name="wb" label="Width_Bot" sx={{ borderTop: "1px solid black" }} value={formik.values.wb} onChange={formik.handleChange} />
                                            </Stack>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Container>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Container>
                            <Table sx={{ border: "1px solid black" }}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center" colSpan={2}>
                                            Height
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="right">
                                            <TextField id="hm" name="hm" label="Height_Main" value={formik.values.hm} onChange={formik.handleChange} />
                                        </TableCell>
                                        <TableCell align="left">
                                            <Stack spacing={0}>
                                                <TextField id="ht" name="ht" label="Height_Top" sx={{ borderBottom: "1px solid black" }} value={formik.values.ht} onChange={formik.handleChange} />
                                                <TextField id="hb" name="hb" label="Height_Bot" sx={{ borderTop: "1px solid black" }} value={formik.values.hb} onChange={formik.handleChange} />
                                            </Stack>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Container>
                    </Grid>
                </Grid>
                <Box>
                    <Checkbox id="weight" name="weight" label="Weight over 300 lbs?" value={formik.values.weight} onChange={formik.handleChange} />
                </Box>
                <Box>
                    <Button type="submit">Submit</Button>
                </Box>
            </form >
        </div >
    )
}

export default DimsForm;