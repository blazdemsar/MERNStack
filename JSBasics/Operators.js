// Operators
// or (||), and (&&), equalto (==), less than (<), greater than (>) ....

// Double or triple : equal to (===), less than equalto (<==) ....

var myVal = true;

if (myVal && myVal == 1) { // == only compares value
    console.log("Print MyVal True Case"); // should print this
}
else {
    console.log("Print MyVal False Case");
}

if (myVal && myVal === 1) { // === compares value as well as type
    console.log("Print MyVal True Case");
}
else {
    console.log("Print MyVal False Case"); // should print this
}