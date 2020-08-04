"use-strict";
 
import {connect} from "react-redux";
import Product from "../../Component/Product/ProductComponent";

import {saveProduct} from "../../../State/Actions";


//read intial product values from product reducer and pass it as props in product component

let mapStateToProps = (state) =>{
    return {
        defaultProd:state.product.defaultProduct
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        saveProduct:(product)=>{
            //saveProduct(product)
            dispatch(saveProduct(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
