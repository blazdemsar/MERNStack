// Functions :
// Function CallBacks :

var hisName = "hisname"

function name(params) {
    console.log(hisName);
    return params;
}

function print(callbackFunc, param) {
    console.log(callbackFunc(param));
}

print(name, "Blaz");
print(name, "Domen");