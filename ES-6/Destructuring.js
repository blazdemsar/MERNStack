// Destructuring
// Array Destructuring and Object Destructuring

let foo = ['one', 'two', 'three'];
let [one, two, three, four = "four default"] = foo; // we used a default parameter for four

console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"
console.log(four); // undefined

//we can easily swap the values like this:
let a = 1, b = 3;
[a, b] = [b, a];
console.log(a);
console.log(b);

// assign separate of declaration
let c, d;
[c, d] = [21, 23];
console.log(c);
console.log(d);

// assignment of rest array (spread)
let e, f;
[e, ...f] = [21, 22, 23, 24, 25, 26]; // assigns 21 to "e", and assigns rest to f
console.log(e);
console.log(f);

//Object Destructing

const student = {
    fname: "Blaz",
    lname: "Dem",
    country: "Slovenia"
};

const { fname, lname, country} = student;
console.log(fname, lname, country); 

// Nested Object Destructing

const student1 = {
    name: "John",
    age: 16,
    scores: {
        math: 74,
        english: 80
    }
};

const {name, age, scores: {math}, scores: {english}} = student1;
console.log(name, math, english);