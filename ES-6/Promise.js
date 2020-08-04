// Promises :

let promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() { // asynchronous callback
        resolve({
            "status" : 200,
            "success" : "Resolved",
            "job" : "laptop has been delivered"
        });
    }, 3000);
});

let promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() { // asynchronous callback
        reject({
            "status" : 400,
            "failed" : "Rejected",
            "job" : "laptop not in stock"
        });
    }, 3000);
});

promise1.then(function(value) {
    console.log(value); // expected output : success object / resolved
}).catch(function(value) {
    console.log(value); // expected output : rejected object
})

promise2.then(function(value) {
    console.log(value); // expected output : success object / resolved
}).catch(function(value) {
    console.log(value); // expected output : rejected object
})
