// Readable streams

let fs = require("fs");

// Create a readable stream
let readerStream = fs.createReadStream("./Text.txt");
let data = "";

// Set the encoding to be utf8
readerStream.setEncoding("utf8");

// Handle stream events --> data, end and error
readerStream.on('data', function(chunk) {
    //console.log(chunk)

    data += chunk;
});

readerStream.on('end', function() {
    //console.log(chunk)

    console.log("End of reading - ", data);
    
});

readerStream.on('error', function(err) {
    //console.log(chunk)

    console.log(err.stack);
    
});

console.log("Program ended reading");

//======================================================
// Stream : Write
//======================================================

data = data + "This is the write stream that we are using to write to the file";

let writerStream = fs.createWriteStream("./Output.txt");
// Write the data to stream with encoding to be utf8 
writerStream.write(data, "utf8");
// Mark the end of file
writerStream.end();
// Handle stream events --> finish, and error 
writerStream.on("finish", function () {
    console.log("Write completed!");
});

writerStream.on("error", function(err) {
    console.log(err.stack); 
});

console.log("Program ended writing");
