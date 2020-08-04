// create a funciton displayCar and in that show details regNumber 
// and brand by setting context to car using call or apply or both

var car = {
    regNumber:"XXXXXXX",
    brand:"Toyota"
}

var displayCar = function () {
    console.log("Registration number : " + this.regNumber);
    console.log("Brand : " + this.brand);
}

displayCar.call(car);

