import { setRemoveProductSucces } from "./products-actions"
import { PRODUCTS_TYPES } from "./products-types"

const PODUCTS_INITIAL_STATE={
  
    productsData:[],
    isLoadingProduct:false,
    setProductDetails:{},
    setRemoveProduct:{},
    setAddProduct:{},
 



  

}

export const productReducer=(state=PODUCTS_INITIAL_STATE,action={})=>{
    const {type,payload}=action
    switch(type){

        case PRODUCTS_TYPES.FETCH_PRODUCTS_DATA_START:return {...state,isLoadingProduct:true}
        case PRODUCTS_TYPES.FETCH_PRODUCTS_DATA_FAILD:return {...state,productsData:payload ,isLoadingProduct:false}
        case PRODUCTS_TYPES.FETCH_PRODUCTS_DATA_SUCCES:return {...state,productsData:payload,isLoadingProduct:false }
         



        case PRODUCTS_TYPES.SET_CHANGE_PRODUCT_DETAILS_START:return {...state,setProductDetails:payload}
        case PRODUCTS_TYPES.SET_CHANGE_PRODUCT_DETAILS_FAILD:return {...state,setProductDetails:payload}
        case PRODUCTS_TYPES.SET_CHANGE_PRODUCT_DETAILS_SUCCES:return {...state,setProductDetails:'succes'}

        case PRODUCTS_TYPES.SET_CHANGE_PRODUCT_DETAILS_START:return{...state,setRemoveProduct:payload}
        case PRODUCTS_TYPES.SET_CHANGE_PRODUCT_DETAILS_FAILD:return{...state,setRemoveProduct:payload}
        case PRODUCTS_TYPES.SET_CHANGE_PRODUCT_DETAILS_SUCCES:return{...state,setRemoveProductSucces:'succes'}

        case PRODUCTS_TYPES.SET_ADD_PRODUCT_START:return {...state, setAddProduct:payload}
        case PRODUCTS_TYPES.SET_ADD_PRODUCT_FAILD:return {...state,setAddProduct:payload}
        case PRODUCTS_TYPES.SET_ADD_PRODUCT_SUCCES:return {...state,setAddProduct:'succes'}


        
         
        
        default:return {...state}
    }
}

