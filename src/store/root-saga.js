import {all,call} from "redux-saga/effects";
import { ordersSaga } from "./orders/orders-sagas";
import { categiresDirectorySaga } from "./categoriesDirectory/categories-directory-sagas";
import { productsSaga } from "./products/products-saga";
import { adminSaga } from "./admin-user/admin.sagas";

export function *rootSaga(){

    yield all([call(adminSaga),call(ordersSaga),call(categiresDirectorySaga),call(productsSaga)])
}