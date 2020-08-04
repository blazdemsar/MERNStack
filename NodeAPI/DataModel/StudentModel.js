let mongooseObj = require("mongoose"); // importing the mongoose module

let schemaObj = mongooseObj.Schema; // using the schema class from mongoose

mongooseObj.connect("mongodb://127.0.0.1:27017/nodeapi");

let StudentModel = new schemaObj(
    {
        name: {type:String, required:true},
        age: {type:Number, required:true},
        bio: String,
        mobile: Number 
    },
    {
        versionKey: false //false - set to false then it wont create in mongodb, set to True by default
    }
);

let StudentCollection = mongooseObj.model("student", StudentModel); // creating student collection using StudentModel

module.exports = StudentCollection;