// Ques : 19th

//1- Create a function which takes array of numbers as input and returns sum of all the numbers, 
  //use rest parameter and spread operator for the same. + reduce
  
console.log("Q1");

function sum (...numArray) {
    return numArray.reduce((lastNum, currentNum) => {
        return lastNum + currentNum;
    })
}

let array = [1, 2, 3, 4];
console.log(sum(...array));
console.log("\n");


//2- Create a function to populate user details. 
  //func - populateDetail prints Adress and accepts a callBackFunction which prints Name, Age and Topic

console.log("Q2");

function populateDetails () {

}

console.log("\n");

//3- Please solve below outputs to print values (we can use lexical scope variables if needed)

console.log("Q3");
const arr = [10, 12, 15, 21]; // use let instead of const??
for (let i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 1000);
}


//4- Print the last name through destructuring 

console.log("Q4");

const person = {
    userDetails :{
        first: "FirstName",
        last: "LastName"
    }
}

const {userDetails : {last}} = person;
console.log(last);

//5- Print the age and maths score and also add physics score through destructuring 

console.log("Q5");

const student1 = {
  name: 'John Doe',
  age: 16,
  scores: {
      maths: 74,
      english: 63,
      //physics: 90
  }
};

const {age, scores : {maths, physics = 90}} = student1;
console.log("Age: " + age +", Math: " + maths + ", Physics: " + physics);

//6- Using for in loop print the details as below

console.log("Q6");

const student = {
  firstname: 'Glad',
  lastname: 'Dennis',
  country: 'Nigeria'
};

for (const item in student) {
  if (student.hasOwnProperty(item)) {
    const temp = student[item];
    console.log("Current item: " + temp);
  }
}


//7- Write and example when i don't pass a parameter, still it prints the values, using default parameter in function

console.log("Q7");

function print (fname = "Blaz", age = 23, field = "CS") {
  console.log("Name:" + fname + ", age: " + age + ", Field: " + field);
}

print();
