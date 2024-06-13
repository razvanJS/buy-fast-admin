import { createAction } from "../../assets/createAction";
import { ORDERS_TYPES } from "./orders-types";

export const fetchOrdersStart=()=>createAction(ORDERS_TYPES.FETCH_ORDERS_START)
export const fetchOrdersFaild=(error)=>createAction(ORDERS_TYPES.FETCH_ORDERS_FAILD,error)
export const fetchOrdersSucces=(ordersData)=>createAction(ORDERS_TYPES.FETCH_ORDERS_SUCCESS,ordersData)

export const removeOrderItemStart=(uid)=>createAction(ORDERS_TYPES.REMOVE_ORDER_DATA_START,uid)
export const removeOrderItemFaild=(err)=>createAction(ORDERS_TYPES.REMOVE_ORDER_DATA_FAILD,err)
export const removeOrderItemSuccess=()=>createAction(ORDERS_TYPES.REMOVE_ORDER_DATA_SUCCESS)


export const generateUidAction=(uid)=>createAction(ORDERS_TYPES.GENERATE_UID,uid)
export const fetchorderDetailsActionStart=(orders,uid)=>{
   
  return  createAction(ORDERS_TYPES.FETCH_ORDERS_DETAILS_START,{orders,uid})
}
export const fetchorderDetailsActionSucces=(order)=>{
   
  return  createAction(ORDERS_TYPES.FETCH_ORDERS_DETAILS_SUCCESS,order)
}

export const fetchorderDetailsActionFaild=(err)=>{
  return  createAction(ORDERS_TYPES.FETCH_ORDERS_DETAILS_FAILD,err)
}
