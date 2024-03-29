import { Table, TableBody, TableRow, TableCell } from "@mui/material";
import Fraction from 'fraction.js';

function CrateOutput({ dims, twoBys }) {

    let length;
    let width;
    let height;

    function CalcCrateDims(length, width, height) {
        const feet = width.add("1 1/4");
        const base = length.toFraction(true).concat(" x ").concat(width.toFraction(true));
        const fb = length.toFraction(true).concat(" x ").concat(height.add("5/8").toFraction(true));
        const sides = feet.toFraction(true).concat(" x ").concat(height.add("3 5/8").toFraction(true));
        const top = length.add("1 1/4").toFraction(true).concat(" x ").concat(feet.toFraction(true));
        return { feet: feet.toFraction(true), base, fb, sides, top }
    }

    let CrateDims = { feet: "", base: "", fb: "", sides: "", top: "" }
    if (dims.length !== "" && dims.width !== "" && dims.height !== "") {
        length = new Fraction(dims.length);
        width = new Fraction(dims.width);
        height = new Fraction(dims.height);

        CrateDims = CalcCrateDims(length, width, height);
    }

    return (
        <div id="CrateOutput">
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>2x4s</TableCell>
                        <TableCell>{CrateDims.feet}</TableCell>
                        <TableCell>{dims.addFeet ? 6 : 3}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Base</TableCell>
                        <TableCell>{CrateDims.base}</TableCell>
                        <TableCell>1</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Front/Back</TableCell>
                        <TableCell>{CrateDims.fb}</TableCell>
                        <TableCell>2</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Sides</TableCell>
                        <TableCell>{CrateDims.sides}</TableCell>
                        <TableCell>2</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Top</TableCell>
                        <TableCell>{CrateDims.top}</TableCell>
                        <TableCell>1</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={3} align="center">Board Feet: { }</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default CrateOutput;