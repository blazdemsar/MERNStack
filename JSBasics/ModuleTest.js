// {} : JS Object as well as JSON object

// This is the literals way of creating an object
var User = {
    Name : "Blaz",
    Age : 23,
    Address : {
        Line1 : "13522 Canada Goose Ct",
        Line2 : "Clifton, VA"
    },
    GetName : function () {
        return this.Name;
    }
}

module.exports = User;

// Creating an Object with Object Constructor
// Example of Inheritance
// Using User class and creating student object with new implementations

var Student1 = new Object(User); // Drawback is it copies parent object so will change the parent as well

console.log("Student1 : ", Student1);

var Student = Object.create(User); // Accepts object that needs to be inherited without copying so new and better way to implement inheritance

Student.Name = "Dennis";
Student.Bio = "jsgfsgjf/";
Student.GetName = function () { //Overriding the GetName from User with additional return
    return {
        Bio: this.Bio,
        Name: this.name
    }
}

Student.GetAddress = function () { //Overriding the GetName from User with additional return
    return this.Address
}

console.log( Student);
console.log( Student.GetName());
console.log( Student.GetAddress());

module.exports = Student;

// Creating Object with constructor function // Legacy way of creating an Object, important for interviews
var ConstrFunctObj = function (name, age) {
    this.Name = name,
    this.Age = age,
    this.GetName = function () {
        return this.Name;
    }
}

var Employee = new ConstrFunctObj("Blaz", 23); // Initial Employee Object from constructor function
Employee.Bio = "Auto Bio";
Employee.GetAddress = function (params) {
    return "New Line Address";
}

console.log(Employee);
console.log(Employee.GetName());
console.log(Employee.GetAddress());