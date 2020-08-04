let mongooseObj = require("mongoose"),

schemaObj = mongooseObj.Schema;

mongooseObj.connect("mongodb://127.0.0.1/nodeapi");

let UserSchema = new schemaObj({
        userName: {type:String, required:true},
        password: {type:String, required:true},
        street: String,
        mobile:Number
    },
    {
        versionKey: false //false - set to false then it wont create in mongodb
    });

let UserModel = mongooseObj.model("user",UserSchema);
module.exports = UserModel;