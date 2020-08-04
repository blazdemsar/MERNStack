console.log("BEfore Timeout")

setTimeout(function(){
    console.log("first timeout");
    setTimeout(function(){
        console.log("inner timeout");
    },0);    
},1000);

setTimeout(function(){
    console.log("second timeout");
},1000);

setTimeout(function(){
    console.log("third timeout");
},1000);

setTimeout(function(){
    console.log("fourth timeout");
},1000);

console.log("After Timeout")