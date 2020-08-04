import {createStore, combineReducers, applyMiddleware} from "redux";
import promise from "redux-promise-middleware"; //make aync call to api
import thunk from 'redux-thunk';//make aync call to api

import user from "./App/State/UserReducer";
import product from "./App/State/ProductReducer";
import cart from "./App/State/CartReducer";

//a custom middleware to log store interaction
let myLogger = () => (next) => (action) => {
    console.log("Logged Action : Store File ", action); //currying in javasript where we pass function as input and recieve function as output
    
    next(action);
};

export default createStore(
    combineReducers( //club all the reducers that we have in our application like user, product ...
    { 
        user,//property shorthand in javascript : same name key and variable that is holding the value then we may not have it like user:user
        product,
        cart
    }),
    {},
    applyMiddleware(myLogger, thunk, promise)// adding middlewares that we are going to use in our applicatino
)

// A(destination) "B" "C"-> Destination