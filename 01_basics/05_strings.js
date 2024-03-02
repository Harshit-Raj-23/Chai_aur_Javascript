const name = "Harshit"
const repoCount = 5

// console.log( name + repoCount + "value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`);

const gameName = new String("harshit-hr-com")
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.includes("harshit"));
console.log(gameName.toUpperCase());
console.log(gameName.length);
console.log(gameName.charAt(4));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,7)
console.log(newString);

const anotherString =gameName.slice(-10,-5)
console.log(anotherString);

const newStringOne = "     harshit    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://harshit.com/harshit%20raj"
console.log(url.replace('%20', '-'));
console.log(url.includes("harshit"));

console.log(gameName.split('-'));