import "../App.css";
import React, {Component, PureComponent} from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Footer from "./CommonComponents/FooterComponent.js";
import Header from "./CommonComponents/HeaderComponent.js";
import Home from "./CommonComponents/HomeComponent.js";
import {About} from "./CommonComponents/AboutComponent.js";
import User from "./ApplicationComponents/Container/User/UserContainer";
import Product from "./ApplicationComponents/Container/Product/ProductContainer";
import NotFound from "./CommonComponents/NotFoundComponent";
import Cart from "./ApplicationComponents/Container/Cart/CartContainer";
import ProductDetails from "./ApplicationComponents/Container/Product/DisplayProductContainer";
import Checkout from "./ApplicationComponents/Container/Checkout/CheckoutContainer";

//export default class App extends Component{
export default class App extends React.Component{    

    render() {//virtual dom
        
        // let isAdmin = false; used to check some condition and make a decision where to redirect
        
        return(
            <Router>
                <Header/>
                <Switch>
                    <Route path="/home" exact component={Home} />
                    <Route path="/user" exact component={User} />
                    <Route path="/product" exact component={Product} />
                    <Route path="/productdetail" exact component={ProductDetails} />
                    <Route path="/about" exact component={About} />
                    <Route path="/about/:id" component={About} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/" exact component={Home} />
                    <Route path="*" exact component={NotFound} />
                </Switch>
                <Footer/>
            </Router>
        )
    }
}




//========================================================================
//                  For past reference
//========================================================================
// export default class App extends Component {

//     constructor(props, context) {
        
//         super(props, context);
//         this.state = { //initialized thes state; comes from props or created here and is mutable
//             // homeMsg : "1. This is application's Home Page",
//             // footerMsg : "Thank you for shopping with us",
//             // year : 2020,
//             // childMsg : "No message",
//             timer : 1,
//             name : "Blaz",
//             age : 23,
//             msgForHomePage : "This message must be displayed on the home page",
//             sessionName : "MERNStack",
//             countryName : "Slovenia"
//         }
//         //this.title = "Shopping Cart Header"; //Global variable/expression
//         this.globalVariable = "This is a global variable";
//         //this.changeState();
//     };

//     getDataFromChild = (childSessionName) => {
//         //alert(childSessionName);

//         this.setState({
//             sessionName:childSessionName
//         })
//     }

//     getCountry = (childCountry) => {

//         this.setState({
//             countryName : childCountry
//         })
//     }

//     componentWillMount(){
//         console.log("Component Will Mount");
//     }

//     changeState() {
//         setInterval(() => {
//             this.setState({
//                 timer : this.state.timer+1
//             })
//         }, 1000);
//     }

//     render(){

//         let displayMessage = "This is the first page of the application";
//         let val1 = 25, val2 =32
//         let cpMessage = "Copyright Blazing Technologies Inc."
//         let title = "This is the header"
//         // JSX : javascript as xml, it is not an html but javascript to generate html and javascript
//         return(
//             <div padx="20" pady="30" align="center">
//                 <Header ttl={title} name={this.state.name} age={this.state.age}>
//                     <b>Write something nice here</b>
//                     <b>Write something even nicer here</b>
//                 </Header>
//                 <Header2/>
//                 <b>{this.state.sessionName}</b>
//                 <hr/>
//                 <Home timer={this.state.timer} sessionName={this.state.sessionName} msg={this.state.msgForHomePage} returnMsg={this.getDataFromChild} country={this.state.countryName} returnCountry={this.getCountry}/>
//                 <h1>Welcome to React.js</h1>
//                 <h1>{displayMessage}</h1>
//                 <b>Added: {val1 + val2}</b>
//                 <br/>{this.globalVariable}
//                 <br/><b>Name : {this.state.name}</b>
//                 <br/><b>Country: {this.state.countryName}</b>
//                 <h1>State changes : {this.state.timer}</h1>
//                 <Footer cpMsg={cpMessage} name="Blaz" tmr={this.state.timer}>
//                     <b>10000 North Pkwy</b>
//                     <b>Centreville, VA</b>
//                 </Footer>
//             </div>
//         )
//     };

// };