import Fraction from 'fraction.js';

export default class Crate {
    // Crate object for use with app
    length = "";
    width = "";
    height = "";
    addFeet = false;
    addTwoBys = [];
    feet = {};
    base = {};
    fb = {};
    sides = {};
    top = {};

    constructor(length, width, height, addFeet = false, addTwoBys = []) {
        this.length = this.dimsToFraction(length);
        this.width = this.dimsToFraction(width);
        this.height = this.dimsToFraction(height);
        this.addFeet = addFeet
        this.addTwoBys = addTwoBys;
        this.calcCrate();
    }

    get getInfo() {
        // returns all info on Crate
        return {
            length: this.length,
            width: this.width,
            height: this.height,
            addFeet: this.addFeet,
            addTwoBys: this.addTwoBys,
            feet: this.feet,
            base: this.base,
            fb: this.fb,
            sides: this.sides,
            top: this.top
        }
    }

    sanitizeDim(dim) {
        // Used to sanitize dim
        // check if dim is whole number or mixed. Return trimmed String
        if (dim.includes(".")) {
            let whole = dim.split(".")[0].trim();
            let frac = dim.split(".")[1].trim();
            return whole.concat(" ").concat(frac);
        } else {
            return dim.trim();
        }

    }

    dimsToFraction(dim) {
        // Creates a Fraction object from passed dim. Returns Fraction
        let frac = this.sanitizeDim(dim);
        return new Fraction(frac);
    }

    calcCrate() {
        // handles calculating crate details. Modifies Self. Returns nothing
        this.feet.length = this.width.add("1 1/4");
        // add check to length and 2x feet features later
        if (this.addFeet) {
            this.feet.qty = 6
        } else this.feet.qty = 3;

        this.base.length = this.length;
        this.base.width = this.width;
        this.base.qty = 1;

        this.fb.length = this.length;
        this.fb.width = this.height.add("5/8");
        this.fb.qty = 2;

        this.sides.length = this.feet.length;
        this.sides.width = this.height.add("3 5/8");
        this.sides.qty = 2

        this.top.length = this.length.add("1 1/4");
        this.top.width = this.feet.length;
        this.top.qty = 1
    }

}