import { PRODUCTS_TYPES } from "./products-types"

const PODUCTS_INITIAL_STATE={
  
    productsData:[],
    isLoading:false,
   


  

}

export const productReducer=(state=PODUCTS_INITIAL_STATE,action={})=>{
    const {type,payload}=action
    switch(type){

        case PRODUCTS_TYPES.FETCH_PRODUCTS_DATA_START:return {...state,isLoading:true}
        case PRODUCTS_TYPES.FETCH_PRODUCTS_DATA_FAILD:return {...state,productsData:payload ,isLoading:false}
        case PRODUCTS_TYPES.FETCH_PRODUCTS_DATA_SUCCES:return {...state,productsData:payload,isLoading:false}
         

        
         
        
        default:return {...state}
    }
}

