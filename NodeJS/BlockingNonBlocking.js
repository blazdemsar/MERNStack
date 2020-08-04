console.log("Blaz");

let fs = require("fs");

console.log("Before File Read");

// Synchronous operation
//let data = fs.readFileSync("./QuestionsJune24.js", "utf-8"); // blocking the execution

//console.log("File data", data);

//console.log("After File Read");

//==============================================
//
//==============================================



// Asynchronous operation
fs.readFile("./QuestionsJune24.js", "utf-8", (err, data) => { // This kind of callback are node 
    console.log("File data", data);                           // special call backs and termed as
    console.log("Error", err);                                // error first callback
});

console.log("After File Read");

for (let index = 0; index < 1000000; index++) {
    console.log(index);  
}
//REPL
//Read
//Evaluate
//Print
//Loop
//ctrl+c - break the loop