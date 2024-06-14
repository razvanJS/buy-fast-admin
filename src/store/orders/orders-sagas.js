import { takeLatest,call,all,put } from "redux-saga/effects";
import { getOrdersFromDb,deleteDocFromDb } from "../../utils/firebase.utils";
import { fetchOrdersFaild, fetchOrdersSucces,fetchorderDetailsActionSucces,removeOrderItemFaild,removeOrderItemSuccess } from "./orders-actions";
import { ORDERS_TYPES } from "./orders-types";



export function *fetchOrdersFromDb(){
  
    try{
      
         
        const ordersData=yield call(getOrdersFromDb,'orders')
        
        yield put(fetchOrdersSucces(ordersData))
       
            
    }
    catch(error){
        yield put(fetchOrdersFaild(error))

    }

}



export function*removeOrderItemSaga(action){
 
  
   const{payload}=action
   

    try{
      
      yield  call(deleteDocFromDb,'orders',payload)
    
     yield  call(fetchOrdersFromDb)
      yield  put(removeOrderItemSuccess())
    
    }
    catch(err){
        yield put(removeOrderItemFaild(err))
    }

}


export function* fechorderDetails(action){
    const{payload:{orders:{uid,ordersData}}}=action
  
    try {
         const detailis= ordersData.filter(data=>data.uid===uid)
        yield detailis
        yield put(fetchorderDetailsActionSucces(detailis[0]))
        
    } catch (error) {
        yield put(fetchOrdersFaild(error.message))
        
    }
}
export function *onOrderDetails(){
    yield takeLatest(ORDERS_TYPES.FETCH_ORDERS_DETAILS_START,fechorderDetails)
}
export function *onOrdersSaga(){
    yield takeLatest(ORDERS_TYPES.FETCH_ORDERS_START,fetchOrdersFromDb)
   
}
export function *onRemoveItemSaga(){
    yield takeLatest(ORDERS_TYPES.REMOVE_ORDER_DATA_START,removeOrderItemSaga)
}


export function *ordersSaga(){
    yield all([call(onOrdersSaga),call(onRemoveItemSaga),call(onOrderDetails)])
}