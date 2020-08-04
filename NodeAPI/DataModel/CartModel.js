let mongooseObj = require("mongoose"); // need a connection creator and which also provides helper method

mongooseObj.connect("mongodb://127.0.0.1/nodeapi9");

let Schema = mongooseObj.Schema; //

let CartSchema = new Schema(
    { 
        userid: {type:String, required:true},
        cart : Object
    },
    {
        versionKey: false
    }
    );

let CartSchemaModel = mongooseObj.model('cart', CartSchema);

module.exports = CartSchemaModel;