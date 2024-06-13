import { orderDetails } from "./orders-actions"
import { ORDERS_TYPES } from "./orders-types"
const STATE_INITIAL_STATE={
    ordersData:[],
    isLoading:false,
    error:null,
    orderItemRemove:{value:false,error:null,uid:''},
    orderDetails:{},
    onFetchDetails:{},

  

}


export const ordersReducer=(state=STATE_INITIAL_STATE,action={})=>{

    const {type,payload}=action
    switch(type){
        case ORDERS_TYPES.FETCH_ORDERS_START:return {...state,isLoading:true}
        case ORDERS_TYPES.FETCH_ORDERS_SUCCESS:return {...state,isLoading:false,ordersData:payload}
        case ORDERS_TYPES.FETCH_ORDERS_FAILD:return {...state,error:payload}
        case ORDERS_TYPES.REMOVE_ORDER_DATA_START:return{...state,orderItemRemove:{value:false,error:null,uid:payload}}
        case ORDERS_TYPES.REMOVE_ORDER_DATA_FAILD:return{...state,orderItemRemove:{value:false,error:payload}}
        case ORDERS_TYPES.REMOVE_ORDER_DATA_SUCCESS:return{...state, orderItemRemove:{value:true,error:null}}
        case ORDERS_TYPES.FETCH_ORDERS_DETAILS_START:return{...state,isLoading:true,onFetchDetails:payload}
        case ORDERS_TYPES.FETCH_ORDERS_DETAILS_SUCCESS:return{...state,orderDetails:payload,isLoading:false}
        case ORDERS_TYPES.FETCH_ORDERS_DETAILS_FAILD:return{...state,error:payload,isLoading:true}
        default:return state
    }
}
