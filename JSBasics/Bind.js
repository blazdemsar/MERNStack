// Call and Apply : setting context of given functions explicitly
// Both return functions execute instantly

// bind : will attach the context at run time and returns function unlike call and apply which returns funciton execution

let userDetails = {
    name : "Blaz",
    age : 23,

    showDetails : function () {
        //this : context of userDetails object

        setTimeout(function() { // callback function of setTimeout
            console.log({
                name : this.name, // this : is global context because settimeout executes without any context being set// this : is global context because settimeout executes without any context being set
                age : this.age
            })
        }.bind(this), 3000) // we are copying this which is userDetails as a context to settimeout callback
    }
}

let userDetails1 = {
    name : "Blaz",
    age : 23,

    showDetails : function () {
        //this : context of userDetails object

        setTimeout(()=> { // callback function of setTimeout that already applies bind
            console.log({
                name : this.name, // this : is global context because settimeout executes without any context being set// this : is global context because settimeout executes without any context being set
                age : this.age
            })
        }, 3000) // we are copying this which is userDetails as a context to settimeout callback
    }
}

userDetails.showDetails();
userDetails1.showDetails();