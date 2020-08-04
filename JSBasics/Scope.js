// Functions:

var b = 5;

function name (params) {
    var a = 4;
    console.log(b); // b can be accessed

    function name1 (params) { // nested function
        var c = 6; // function name cannot access c
        console.log(a); // a can be accessed
        conaole.log(c);
    }

    name1();
}

console.log(a); // a can not be accessed


//===============================================================

function name (params) {
    console.log(this); // this : context is global
    var a = 5;
}

name();

let obj = {
    val : 51,
    printVal : function (params) {
        console.log(this.val); // this : is now obj context
    }
}

obj.printVal(); // executing printVal over obj