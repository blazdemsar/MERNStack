function *arithmetic (num1, num2) {
    yield console.log("Addition : " + (num1 + num2));

    yield console.log("Subtraction : " + (num1 - num2));

    yield console.log("Multiplication : " + (num1 * num2));

    yield console.log((num1, num2) => {
            if (num2 == 0) {
                "Cannot divide by 0!"
            }
            else {
                "Division : " + (num1 / num2);
            }        
        });
    
    return "Finished!";
}

let calculator = arithmetic(3, 4);
let calculator1 = arithmetic(3, 0);

console.log(calculator.next());
console.log(calculator.next());
console.log(calculator.next());
console.log(calculator.next());
console.log(calculator.next());

console.log(calculator1.next());
console.log(calculator1.next());
console.log(calculator1.next());
console.log(calculator1.next());
console.log(calculator1.next());