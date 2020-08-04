// default parameters

//  val1 = 1, val2 = 1 means a default parameter, and it is used only if a value is not provided when function is called
function multiply (val1 = 1, val2 = 1) { 
    return val1 * val2;
}

console.log(multiply(2, 3));
console.log(multiply(2)); // we are not passing the 2nd parameter

function sum (val1 = 1, val2 = 1, val3 = 1) {
    return val1 + val2 + val3;
}

let arrNum = [6,7,8];

console.log(sum(...arrNum));
console.log(sum.apply(null, arrNum)); //use of apply

// Rest Parameters: used to receive the parameters as array in function (...array)

function sumRest (...restParams) {
    return restParams.reduce((last, current) => {
        return last + current;
    })
}

let arrSpread = [6,7,8];
console.log(sumRest(...arrSpread));

let arrSpr = [12,25,56634,1234,563,2342,234];
console.log(sumRest(...arrSpr));