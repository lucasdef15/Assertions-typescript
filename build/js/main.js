"use strict";
// Type Assertions
//convert to more or less specific
let a = "hello";
let b = a;
let c = a;
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
// Be careful! TS sees no problem - but a string is returned.
// Mistakes can be made with assertions when you don't set up things correctly.
let nextVal = addOrConcat(2, 2, "concat");
// 10 as string;
// This is a two arsentions.
10;
// The DOM
const img = document.querySelector("img");
// putting an exclamation point is called a non-null assertion;
const myImg = document.getElementById("img");
img.src;
myImg.src;
