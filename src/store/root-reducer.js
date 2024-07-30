import { combineReducers } from "redux"
import { ordersReducer } from "./orders/orders-reducers"
import { categoiresDirectoryReducer } from "./categoriesDirectory/categoires-directory-reducers"
import { productReducer } from "./products/products-reducers"
import { adminReducer } from "./admin-user/admin.reducers"

export const rootReducer=combineReducers({
       orders:ordersReducer,
       categories_directory:categoiresDirectoryReducer,
       products:productReducer,
       admin_data:adminReducer,

})
