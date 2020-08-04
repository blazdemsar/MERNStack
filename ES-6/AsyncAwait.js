// async and await - multithreading in javascript

function resolveAfter5Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Resolved!");
        }, 5000);
    });
}

console.log("Async started...");

async function asyncCall() {
    console.log("Calling...");
    let result = await resolveAfter5Seconds();
    console.log("Call completed, waiting for response...");
    console.log(result);

    // expected output : "Resolved"
}

asyncCall();

console.log("After async invocation...");

