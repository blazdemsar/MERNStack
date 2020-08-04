// Hoisting (Compiled and Interpreted)

// JS contains 6 types: String, number, null, undefined, boolean, object
console.log(hoistedVar); // functional/variable hoisting - with undefined value as default

console.log(name()); // function gets hoisted with its definition so that it can be executed

var hoistedVar = "2020";

function name(params) {
    console.log("Blaz");
    return "Demsar";
}

// function expression

var name = function (param1, param2) { // this is still a function and has to be called with name(), not name only
    console.log("Domen");
    return "Demsar";
}

console.log(name());

// overwriting : function overwrites all previous functions with the same name except for function expression!
function name(params, params2) {  // overloading does not exist in JS
    console.log("Bernarda");
    return "Vrenk";
}

console.log(name());

