const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toFixed(2));

const otherNumber = 123.896546
// console.log(otherNumber.toPrecision(4));

const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'));

// ******************************* MATHS ***************************************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(5.6));
// console.log(Math.round(5.3));
// console.log(Math.ceil(5.1));
// console.log(Math.floor(5.9));

console.log(Math.random());
console.log(Math.floor(Math.random() *10) +1);

// Point to be noted

const min= 10
const max= 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);