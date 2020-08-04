//forIn and forOf loops

//forIn loop
let person = {
    fname: "John",
    lname: "Doe",
    age: 25,
    address: {line1: "Canada Goose", line2: "Virginia"}
};

for (const key in person) {
    if (person.hasOwnProperty(key)) {
        const element = person[key];
        console.log("Current item: ", element);
    }
}

var arr = [3, 5, 7, "myVal"];
arr.myVal = "Hello";

for (let i of arr) {
    console.log(i);
    // logs "3", "5", "7"
    
}

//for of loop

let cars = ['BMW', 'Porsche', 'Audi', 'Tesla'];

for (const iterator of cars) {
    console.log("Current car: ", iterator);
}