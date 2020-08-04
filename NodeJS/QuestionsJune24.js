// questions 
//Filter , Map, Reduce, Some
var persons = [
    {id : 1, name : "John", savedby : "CaptainAmerica"},
    {id : 2, name : "Alice", savedby : "IronMan"},
    {id : 3, name : "Roger", savedby : "CaptainAmerica"},
    {id : 4, name : "Adam", savedby : "IronMan"},
    {id : 5, name : "Alex", savedby : "SpiderMan"}
];
//1. List the person objects who are saved by IronMan
//2. List the person objects who are not saved by IronMan
//3. List the person names who are saved by CaptainAmerica
//4. List the person id who are not saved by SpiderMan
//5. Check if ther are any who are saved by AntMan
//6. Check if ther are any who are saved by SpiderMan

//promise related questions
//1. create a promise to read user details after 2 seconds when resolved : should have status, name, age, city
//2. create a promise to read error after 1 second when rejected : should have status, error

// 1.
let persSavedByIronMan = persons.filter(person => person.savedby === "IronMan");
console.log(persSavedByIronMan);

//2.
let persNotSavedByIronMan = persons.filter(person => person.savedby !== "IronMan");
console.log(persNotSavedByIronMan);

//3.
let persSavedByCaptainAmerica = persons.map(person => person.savedby === "CaptainAmerica" ? person.name : "").filter(obj => obj != "");
console.log("Saved by Captain America : " + persSavedByCaptainAmerica);

//4.
let persNotSavedBySpiderMan = persons.map(person => person.savedby !== "SpiderMan" ? person.id : 0).filter(obj => obj != 0);
console.log("Not saved by Spider Man : " + persNotSavedBySpiderMan);

//5.
let savedByAntMan = persons.some(person => person.savedby === "AntMan");
console.log("Saved by Ant Man : " + savedByAntMan);

//6.
let savedBySpiderMan = persons.some(person => person.savedby === "SpiderMan");
console.log("Saved by Spider Man : " + savedBySpiderMan);

//============================================
// Promises
//============================================

//1.
let promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({
            "status" : 200,
            "name" : "Blaz",
            "age" : 23,
            "city" : "Washington DC"
        });
    }, 2000);
});

//2.
let promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject({
            "status" : 400,
            "error" : "unable to fetch data"
        });
    }, 1000);
});

promise1.then(function(value) {
    console.log(value);
}).catch(function(value) {
    console.log(value);
})

promise2.then(function(value) {
    console.log(value);
}).catch(function(value) {
    console.log(value);
})

