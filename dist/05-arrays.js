"use strict";
const numbers = [1, 2, 3, 4];
const any = [1, "2"];
const strs1 = [];
const strs2 = [];
strs1.push("as");
const cars = [];
cars.push({ wheels: 4, brand: "Audi", type: "" });
const arrOfarr = [];
arrOfarr.push(["", ""]);
function printArr(arr) {
    arr.forEach((el, index) => {
        console.log(el, index);
    });
}
