let mongooseObj = require("mongoose"); // need a connection creator and which also provides helper method

mongooseObj.connect('mongodb://127.0.0.1/nodeapi'); // create update and connect with smarttrainees

let Schema = mongooseObj.Schema; //

let ProductSchema = new Schema(
    { 
        name:{type: String, required: true},
        price:String,
        camera:String,
        ram:String,
        display:String,
        color:String
    },
    {
        versionKey: false //false - set to false then it wont create in mongodb
    });

let ProductModel = mongooseObj.model('product', ProductSchema);

module.exports = ProductModel;