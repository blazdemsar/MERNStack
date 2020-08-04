import {connect} from "react-redux";
import CheckoutComponent from "../../Component/Checkout/CheckoutComponent";

let mapStateToProps = (state) => {
    return {
        user : state.user.user
    }
}

export default connect(mapStateToProps, null)(CheckoutComponent);