var userObj = require("./ModuleTest")

console.log(userObj)
console.log(userObj.GetName())

// Example of Object.assign

const object1 = {
    a: 1,
    b: 2,
    c: 3
};

const object2 = Object.assign({c: 4, d: 5}, object1);

console.log(object2);

var user3 = Object.create(null); // to break the prototype chain or stop inheritance we use null