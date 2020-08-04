// Generator functions :

function *printNumber(params) {
    let myVal = 25;

    yield params + params;

    yield params * params;

    yield params * params + myVal;

    return 1000; // end of the function
}

let generatorInvoke = printNumber(5);

console.log(generatorInvoke.next());
console.log(generatorInvoke.next());
console.log(generatorInvoke.next());
console.log(generatorInvoke.next());
