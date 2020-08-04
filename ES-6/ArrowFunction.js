// Arrow function: Fat Arrow Function
// 1. Short hand to write functions

// () => {}  -> arrow function

let name = (param) => console.log(param);

name("Node.js");

let sum = (a, b) => console.log(a + b);

sum(5, 6);

let big = (a, b, c) => {
    return (a + b) * c;
}

console.log(big(5,5,5));
 
let division = (a, b, c) => {
    if (c == 0) {
        return "Division with 0 is not defined!";
    }
    else {
        return (a + b) / c;
    }
}

console.log(division(5,5,0));
console.log(division(5,5,2));

//==================================================
// Resolving the Context
//==================================================

// We cannot use call/apply, because it would execute the
// setTimeout function immediately instead of waiting for X seconds
// We use bind instead, that holds the context for the callback
// function and allows it to wait for X seconds.

let userDetails = {
    userID : 2021,

    printUserID : function () {
        console.log("UserID: ", this.userID);

        setTimeout(function () {
            console.log("UserID: ", this.userID);
        }.bind(this), 3000);
    }
}

userDetails.printUserID();

// We can also resolve the context issue without bind like this:

let userDetails1 = {
    userID : 2022,

    printUserID : function () {
        console.log("UserID: ", this.userID);

        let _this = this; // This copies context of the parent
                          // and stores it into a local variable
                          // for the callback function to use when it
                          // needs it

        setTimeout(function () {
            console.log("UserID: ", _this.userID);
        }, 3000); // we did not have to use bind here
    }
}

userDetails1.printUserID();

// We can also resolve the context issue using an arrow function

let userDetails2 = {
    userID : 2023,

    printUserID : function () {
        console.log("UserID: ", this.userID);

        setTimeout(() => { // It copies the immediate parent function's
                           // context to resolve "this"

            console.log("UserID: ", this.userID);
        }, 3000);
    }
}

userDetails2.printUserID();