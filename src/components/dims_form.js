import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useFormik } from "formik";

function DimsForm() {
    const formik = useFormik({
        initialValues: {
            length: '',
            width: '',
            height: ''
        },
        onSubmit: values => {
            console.log(values);
        },
    });

    return (
        <div id="DimsForm">
            <form onSubmit={formik.handleSubmit}>
                <TextField id="length" name="length" label="Length" value={formik.values.length} onChange={formik.handleChange} />
                <TextField id="width" name="width" label="Width" value={formik.values.width} onChange={formik.handleChange} />
                <TextField id="height" name="height" label="Height" value={formik.values.height} onChange={formik.handleChange} />
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default DimsForm;