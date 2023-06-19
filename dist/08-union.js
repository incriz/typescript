"use strict";
const staticX = "ok";
const arr = [];
function printId(id) {
    if (typeof id === "string")
        console.log(id.toUpperCase());
    else
        console.log(id);
}
function welcome(person) {
    if (Array.isArray(person)) {
        console.log("Hi", person.join(""));
        return 1;
    }
    else {
        console.log("hi", person);
        return person;
    }
}
