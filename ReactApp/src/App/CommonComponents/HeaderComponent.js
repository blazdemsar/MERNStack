"use strict";
import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

let Header = (props) => {
    let userName = props.user.userName;//reading it from user reducer/ store directly
    //read user from props his name and then create two set of links
    return(
        <div className="col-md-12">
            <div>
                Hi <b>{userName +","}</b> Welcome to SynergisticIT Shopping Cart
            </div>
            { userName !== "" ?
                <React.Fragment>
                    <NavLink to="/home" className="button" activeClassName="success" >Home </NavLink> 
                    <NavLink to="/user" className="button" activeClassName="success" >User </NavLink> 
                    <NavLink to="/cart" className="button" activeClassName="success">Cart  </NavLink>
                    <NavLink to="/checkout" className="button" activeClassName="success">Checkout  </NavLink>                    
                    <NavLink to="/product" className="button" activeClassName="success">Product  </NavLink>
                    <NavLink to="/about" className="button" activeClassName="success">About  </NavLink>
                </React.Fragment>
                :
                <React.Fragment>
                    <NavLink to="/home" className="button" activeClassName="success" >Home </NavLink> 
                    <NavLink to="/user" className="button" activeClassName="success" >Login </NavLink> 
                    <NavLink to="/about" className="button" activeClassName="success">About  </NavLink>
                </React.Fragment>
            }
         </div>
    )
}

let mapStateToProps = (state)=>{
    return {
        user : state.user.user
    }
}

// let mapDispatchToProps = (dispatch)=>{
//     return {
//         user : state.user.user
//     }
// }

//this components connects us to the store as a subscriber only, here we implemented without container
export default connect(mapStateToProps, null)(Header);