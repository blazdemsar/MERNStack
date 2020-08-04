import {connect} from  "react-redux";
import DisplayProductsComponent from "../../Component/Product/DisplayProducts";

import {fetchProducts} from "../../../State/Actions";

let mapStateToProps = (state)=>{
    return {
        products:state.product.products
    }
}


let mapDispatchToProps = (dispatch)=>{
    return {
        fetchProducts:() =>{
            dispatch(fetchProducts())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayProductsComponent);