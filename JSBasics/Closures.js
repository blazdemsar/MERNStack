// Closures : Encapsulation in place

function showUser(name, age) { // Parent function
    
    let accountBalance = "$2500"; // private
    let emailPassword = "adidas"; // private
    let address = "line address 1"; // public
    
    return function details(bio) { // Child function
        return {                   // This is Currying : it is implemented in javascript
            name,                  // shorthand : of setting key value pair when variable name and key name is same name:name
            age,
            address,
            bio
        }
    }
}

let showUserObj = showUser("Blaz", 23);
console.log("Closure : ", showUserObj("Music Composer"));
