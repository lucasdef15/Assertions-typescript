// Type Assertions

type One = string;
type Two = string | number;
type Three = "hello";

//convert to more or less specific
let a: One = "hello";
let b = a as Two;
let c = a as Three;

let d = <One>"world";
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;

// Be careful! TS sees no problem - but a string is returned.
// Mistakes can be made with assertions when you don't set up things correctly.
let nextVal: number = addOrConcat(2, 2, "concat") as number;

// 10 as string;
// This is a two arsentions.
10 as unknown as string;

// The DOM
const img = document.querySelector("img")!;
// putting an exclamation point is called a non-null assertion;
const myImg = document.getElementById("img") as HTMLImageElement;

img.src;
myImg.src;
