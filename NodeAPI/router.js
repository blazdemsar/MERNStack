const express = require("express")
const routes = express.Router({caseSensitive:true}),
studentModel = require("./DataModel/StudentModel"),
UserModel = require("./DataModel/UserModel"),
ProductModel = require("./DataModel/ProductModel"),
CartModel = require("./DataModel/CartModel");

//cart api's
routes.post("/api/saveUserCart",(req, res)=>{
    CartModel.findOne({userid: req.body.userid},(err, cartDbObj) => {
        console.log("We Found One - ",cartDbObj);
        if (err){
            console.log("got an error!");            
            res.send(err);
        }
        if (!cartDbObj) { //checks for null cart of given user
          console.log("No cartitems Present, Adding / Inserting!"); 
          let cartObj = new CartModel(req.body);
          cartObj.save((err, data, next)=>{        
            if (err) {
                res.send("Error Occurred"+ err);
            }      
            res.json(data);
          });
        }else{
          console.log("CartItems Present, Replacing / Updating!");
          cartDbObj.cart = req.body.cart
          cartDbObj.save((err, data, next)=>{        
            if (err) {
                res.send("Error Occurred"+ err);
            }      
            res.json(data);
          });
        }
  });
});

routes.post("/api/getUserCart",(req, res)=>{
    CartModel.findOne({userid: req.body.userid},(err, cart) => {         
        if (err) {
            res.send("Error Occurred"+ err);
        }      
        res.json(cart);
      });
});


//product - api's
routes.post("/api/saveProduct",(req, res)=>{
    
    let productObj = new ProductModel(req.body);

    productObj.save((err, data, next)=>{        
        if (err) {
            res.send("Error Occurred"+ err);
        }      
        res.json(data);
    });
});

routes.get("/api/getProducts",(req, res)=>{
    ProductModel.find((err, data, next) =>{
        console.log("Data :", err);

        err ? 
        res.send({"erro": err}) 
        :
        res.send(
            data
        )
    })
});


//user creation with sign in and sign up functionality
routes.post("/api/signInUpUser",(req, res)=>{ //first post call to save the user
    console.log(req.body); // is passed in ajax call of signInUpUser from react LoginUser click action

    UserModel.findOne({userName: req.body.userName}, (err, userObject) => { //error first callback
        if (err != null) { //if error occurs at the time of user object search
            console.log("Error :", err);
            res.send({"Err":err});
        } else if (userObject) {
            res.json(userObject);
        } else{            
            let signObjForMongo = new UserModel(req.body); //auto assigns value to
            
            // let signObjForMongo = new signInModel({
            //     userName: req.body.userName,
            //     password: req.body.password,
            //     street: req.body.street,
            //     mobile : req.body.mobile
            //   });

            signObjForMongo.save((err, data, next)=>{//data : the same user object that saved and contains mongodb id
                if (err) {
                    res.send("Error Occurred While Siging User "+ err);
                } else{     
                    res.json(data);
                }
            });
        }
    })

})

routes.get('/SaveStudent', function (req, res) {
    console.log(req.query);    

    //use the model to save data to mongodb
    let studentModelToSave = new studentModel(req.query)

    console.log("studentModelToSave", studentModelToSave);

    studentModelToSave.save((err, data)=>{
        console.log("err - ", err);
        console.log("data - ", data);

        if (err != null) {
            res.send("Unable to save data! "+ err);
        } else {
            studentModel.find((err, dataAll)=>{
                res.send(dataAll);
            })   
        }
    })

})



routes.get('/HelloWorld', function (req, res) {
    //res.send('Hello World')
    res.json(
      {
        Greet:'Hello World',
        Learn : "Express",
        "Express Object" : "Instantiate by parenthesis",
        name: req.query.name,
        age: req.query.age
      })
})
  
routes.get('/SecondAPI', function (req, res) {
    res.send('This is the second URI running in my node machine')
})

routes.get('/', function (req, res) {
    //res.send("<h1>Learning Express of MERNSTack<h1>")
    res.sendFile(__dirname+"/package.json")
})

routes.get('*', function (req, res) {
    res.send("<h1>Learning Express of MERNSTack<h1>")
})


module.exports = routes;