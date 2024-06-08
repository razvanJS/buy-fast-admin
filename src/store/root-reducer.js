import { combineReducers } from "redux"
import { ordersReducer } from "./orders/orders-reducers"
export const rootReducer=combineReducers({
       orders:ordersReducer

})
