import { Table, TableBody, TableRow, TableCell } from "@mui/material";
import { Fraction } from "fractional";

function CrateOutput({ dims }) {

    const length = new Fraction((dims.lm * dims.lb) + dims.lt, dims.lb);
    const width = new Fraction((dims.wm * dims.wb) + dims.wt, dims.wb);
    const height = new Fraction((dims.hm * dims.hb) + dims.ht, dims.hb);

    const TwoByFours = (width).add(new Fraction(5, 4));

    const crateHeight = (height).add(new Fraction(5, 8));

    const crateSidesHeight = (crateHeight).add(3);

    const topLength = (length).add(new Fraction(5, 4));

    function getBoardFeet() {
        const bf = TwoByFours.multiply(dims.weight ? 6 : 3).multiply(2).multiply(4).divide(144)
        return (Number(bf.numerator / bf.denominator).toFixed(2));
    }

    return (
        <div id="CrateOutput">
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell align="center">Legnth: {length.toString()}</TableCell>
                        <TableCell align="center">Width: {width.toString()}</TableCell>
                        <TableCell align="center">Height: {height.toString()}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>2x4s</TableCell>
                        <TableCell>{TwoByFours.toString()}</TableCell>
                        <TableCell>{dims.weight ? "6" : "3"}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Base</TableCell>
                        <TableCell>{length.toString()} x {width.toString()}</TableCell>
                        <TableCell>1</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Front/Back</TableCell>
                        <TableCell>{length.toString()} x {crateHeight.toString()}</TableCell>
                        <TableCell>2</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Sides</TableCell>
                        <TableCell>{TwoByFours.toString()} x {crateSidesHeight.toString()}</TableCell>
                        <TableCell>2</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Top</TableCell>
                        <TableCell>{topLength.toString()} x {TwoByFours.toString()}</TableCell>
                        <TableCell>1</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={3} align="center">Board Feet: {getBoardFeet()}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default CrateOutput;