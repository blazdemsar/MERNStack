// Basics

// variable names are case sensitive
var name = "Blaz";
console.log(name) // semicolons are optional

var Name = "Domen";
console.log(Name); // CTRL+K+C -> commenting, CTRL+K+U -> uncommenting

// Dynamic typing

var dynamic = "vaccines"; // string
console.log(dynamic);
console.log(typeof dynamic);

dynamic = new Date(); // object
console.log(dynamic);
console.log(typeof dynamic);

var dynamic = 1234; // number
console.log(dynamic);
console.log(typeof dynamic);

dynamic = false; // boolean
console.log(dynamic);
console.log(typeof dynamic);

var dynamic = {name: "Blaz"}; //object
console.log(dynamic);
console.log(typeof dynamic);

var dynamic = undefined; // undefined
console.log(dynamic);
console.log(typeof dynamic);

var dynamic = null; // object! If we assign the variable type null, its type is object!
console.log(dynamic);
console.log(typeof dynamic);