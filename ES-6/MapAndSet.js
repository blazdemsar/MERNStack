// 2 new collections : Map and Set

let myMap = new Map();

let keyString = "a string", keyObj = {}, keyFunc = function() {};

let userObjDetails = {
    name : "Blaz",
    age : 23
}

let userObj = {
    name : "Natalija",
    age : 22,
    
    address : {
        line1 : "Serbia"
    }
}

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value asssociated with keyfunc");

console.log(myMap.get(keyString));
// OR
console.log(myMap.get('a string'));
console.log(myMap.get(keyObj));
console.log(myMap.get(keyFunc));

console.log(myMap.size);

console.log(myMap.delete(keyFunc));

console.log(myMap.size);

myMap.set("session", "MERNStack session");
myMap.set(userObjDetails, "value associated with 'userObjDetails'");
myMap.set(userObj, "I love you");

console.log(myMap.get(userObjDetails));
console.log(myMap.get(userObj));

console.log(myMap.values());


//=============================================================
// Sets
//=============================================================

const set1  = new Set([1, 2, 3, 4, 5]);

console.log(set1.has(1));
// expected output: true

console.log(set1.has(5));
// expected output: true

console.log(set1.has(6));
// expected output: false


const set2  = new Set(["Test", "Test2", 3, 4, 5]);

console.log(set2.values());
// expected output: true