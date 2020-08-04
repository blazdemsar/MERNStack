// Call and Apply : setting context of given functions explicitly

//var person1 = {name: 'Marvin', age: 42, size: '2xM'};
//var person2 = {name: 'Zaphod', age: 42000000000, size: '1xS'};

var person = {name: 'Marvin', age: 42, size: '2xM'};
var person2 = {name: 'Zaphod', age: 42000000000, size: '1xS'};

var sayHello = function(address, bio){
    console.log('Hello, ' + this.name); // this : context object in which function executes
    console.log("Age : " + this.age);
    console.log("Size : " + this.size);
    
    console.log({
        address,
        bio
    })
};

var sayGoodbye = function(address1, address2, bio, address3, bio2, bio3){
    console.log('Goodbye, ' + this.name);
    console.log("Age : " + this.age);
    console.log("Size : " + this.size);
    console.log({
        address1,
        address2,
        address3,
        bio,
        bio2,
        bio3
    })
};

sayHello.call(person, "address line 1", "music composer")
sayGoodbye.apply(person2, ["address line 1", "address line 1","music composer", "address line 1","music composer", "music composer"])