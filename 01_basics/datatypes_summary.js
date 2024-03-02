// Main 2 types:

// Primitive datatype:

// 7 types : Number, String, Boolean, Null, Undefined, Symbol, BigInt

let score = 33
let name = "Harshit"
let isLoggedIn = false
let temp = null
let state;
let num = 6523487243984896892349864986984132689n
let id = Symbol("123")
let anotherId = Symbol("123")

console.log(typeof score);
console.log(typeof name);
console.log(typeof isLoggedIn);
console.log(typeof temp);
console.log(typeof state);
console.log(typeof num);
console.log(typeof id);
console.log(id === anotherId);

// Reference (non-primitive)

// Array, Object, Function

let heroes = ["shaktiman", "naagraj", "doga"]
let myObject = {
    name: "Harshit"
}
let myFunction = function(){
    console.log("Hello Harshit");
}

console.log(typeof heroes);
console.log(typeof myFunction);
console.log(typeof myObject);