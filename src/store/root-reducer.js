import { combineReducers } from "redux"
import { ordersReducer } from "./orders/orders-reducers"
import { categoiresDirectoryReducer } from "./categoriesDirectory/categoires-directory-reducers"
export const rootReducer=combineReducers({
       orders:ordersReducer,
       categories_directory:categoiresDirectoryReducer,

})
