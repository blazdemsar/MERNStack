import React, { useState } from "react";
import CartListContainer from "../../Container/Cart/CartListContainer";
import CartSummary from "../../Container/Cart/CartSummaryContainer";

//change to class component and handle "some" of the life cycle methods
//constructor - initialize the state {}
//implement the state change api - this.setState
//React.Component and React.PureComponent

//extracting - these implementations and putting them up in react core library is termed as React.Hooks - useState, useReducer ... 
// useState a react hook to implement state changes in functional component

let CheckoutComponent = (props) => {
    
    //this.state = {
    // checkout = true
    //}
    //makePayment will have the implentation this.setState({}) 

    //useState returns a stateful value and a function to update
    const [checkout, makePayment] = useState(true); //initialization of state through react hook useState passing in parameter
   
    const makePaymentClick = () => {
        makePayment(!checkout); //it will work as this.setState and propagate change to the react rendering engine eventually reflect the same
        changeUserEvent();
    }

    //second example to show object state changes 
    const [user, changeUser] = useState({name: "Blaz", age : "19"});    
    const changeUserEvent = ()=>{
        user.name = "Brian";
        user.age = 21;
        changeUser(user);
    }


    return(
        <div className="cartComponent">
            {checkout ? 
            <React.Fragment>
                <h1>Checkout Page</h1>
                <div>
                    Hi, <b>{props.user.userName}</b> 
                    <p>Coming from useState {user.name +" "+user.age}</p>
                    <br/><p>
                    Your Items are checked out and will be delivered at below address.
                    <br/>
                    If it looks good then please proceed for payment.</p>
                    <hr/>
                    Mobile: <b>{props.user.mobile}</b>
                    <br/>
                    Adress: <b>{props.user.street}</b>
                    <hr />
                </div>
                <CartListContainer donotMakeEditable={true} />
                <CartSummary/>
                <div>
                    <button onClick={() => props.history.push("/cart")} >
                        Go Back To Cart
                    </button>
                    <button onClick={makePaymentClick} >
                        Make Payment
                    </button>
                </div>
            </React.Fragment> 
            :
            <React.Fragment>
                <h1>Payment Page</h1>
                <div>
                    Thankyou for the payment, your items under process!
                    <hr />
                    <p>Coming from useState {user.name +" "+user.age}</p>
                </div>
                <div>
                    <button onClick={() => props.history.push("/cart")} >
                        Go Back To Cart
                    </button>
                    <button onClick={makePaymentClick} >
                        Go To Checkout
                    </button>
                </div>
            </React.Fragment>
            }
        </div>
    )
} 

export default CheckoutComponent;