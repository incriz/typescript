"use strict";
function sum(a, b) {
    return a + b;
}
const sum2 = (a, b) => a + b;
const sum3 = function (a, b) {
    return a + b;
};
sum(2, 1);
function log(name, userId) {
    console.log("hello", name, "with id", userId || "anonymous");
}
log("Tolik", '231');
function crash() {
    throw new Error("crash");
}
function average(...nums) {
    const sum = nums.reduce((current, total) => current + total, 0);
    return sum / nums.length;
}
