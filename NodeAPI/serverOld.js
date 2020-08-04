console.log("Starting server using Node Monitoring Tool : nodemon");
console.log("This is a command in server.js");
console.log("Using dependencies : express");
console.log("Using dev dependecies : nodemon, body parser, cookie-parser, multer");
console.log("If you downloaded this code get all dependencies by running : npm i");

const express = require('express'); // when we use the installed packages we do NOT need to specify the path "./"
const app = express(); // when we use the parenthesis, this sets the base for our application. In fact it creates an express app.
const admin = express();

app.use('/static', express.static('Public')); // serve static files like images, css using static middleware

app.get('/mywebapp', function (req, res) {
    res.json(
        {
            Greet : "My first web app",
            Learn : "Express",
            "Express Object" : "Instantiated using parenthesis",
            name : req.query.name
        });
})

app.get('/test', function (req, res) {
    res.send("This is the second URI running on my node machine");
})

app.get('/', function (req, res) {
    //res.send("<h1 align='center'>Learning Express on MERNStack</h1>");
    console.log(__dirname);
    
    res.sendFile(__dirname + "/package.json")
})

app.use("/admin", admin); // mounts a new application module

admin.get('/', function (req, res) {
    //console.log("response : ", res);
    res.send("<h1>I am admin!</h1>");
})

app.listen(3000);