//all react-redux code comes here 
//this container is connector which connects basically maps store (state)
//can be used as props in our component

import {connect} from "react-redux"; //connects our react component with the store (state)
import UserComponent from "../../Component/User/UserComponent";//getting the react component so that we can publish and subcribe

import {signInUpUser} from "../../../State/Actions"; // use to dispatch the user data

//To make your component a subscriber of store (mapStoreToProps)
let mapStateToProps = (store)=> { //store can be named state as well
    return {
        user: store.user.user
    }
}

//To make your component a publisher (you need to dispatch the action)
let mapDispatchToProps = (dispatch)=>{
    return {
        loginUser:(userObject) => {
            dispatch(signInUpUser(userObject));
        }
    }    
}

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);