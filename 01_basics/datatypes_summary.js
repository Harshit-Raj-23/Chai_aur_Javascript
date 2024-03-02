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

// console.log(typeof score);
// console.log(typeof name);
// console.log(typeof isLoggedIn);
// console.log(typeof temp);
// console.log(typeof state);
// console.log(typeof num);
// console.log(typeof id);
// console.log(id === anotherId);

// Reference (non-primitive)

// Array, Object, Function

let heroes = ["shaktiman", "naagraj", "doga"]
let myObject = {
    name: "Harshit",
    age: 19
}
let myFunction = function(){
    console.log("Hello Harshit");
}

// console.log(typeof heroes);
// console.log(typeof myFunction);
// console.log(typeof myObject);

// ****************************************************************************************

// Stack (Primitive)   and    Heap (Non primitive)

// Stack:

let username = "Harshit"
console.log(username);
let anotherUsername = username
console.log(anotherUsername);
anotherUsername = "HarshitRaj"
console.log(anotherUsername);

// Heap:

let user1 = {
    email: "user@gmail.com",
    password: 123456
}
console.log(user1);

let user2 = user1
console.log(user2);

user1.email = "harshit@gmail.com"
console.log(user1.email);
console.log(user2.email);