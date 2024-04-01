import { Table, TableBody, TableRow, TableCell } from "@mui/material";

function CrateOutput({ crate }) {

    return (
        <div id="CrateOutput">
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>2x4s</TableCell>
                        <TableCell>{crate.feet.length.toFraction(true)}</TableCell>
                        <TableCell>{crate.feet.qty}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Base</TableCell>
                        <TableCell>{crate.base.length.toFraction(true)} x {crate.base.width.toFraction(true)}</TableCell>
                        <TableCell>{crate.base.qty}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Front/Back</TableCell>
                        <TableCell>{crate.fb.length.toFraction(true)} x {crate.fb.width.toFraction(true)}</TableCell>
                        <TableCell>{crate.fb.qty}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Sides</TableCell>
                        <TableCell>{crate.sides.length.toFraction(true)} x {crate.sides.width.toFraction(true)}</TableCell>
                        <TableCell>{crate.sides.qty}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Top</TableCell>
                        <TableCell>{crate.top.length.toFraction(true)} x {crate.top.width.toFraction(true)}</TableCell>
                        <TableCell>{crate.top.qty}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={3} align="center">Board Feet: {Number(crate.bf.valueOf()).toFixed(2)} </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default CrateOutput;