import {all,call} from "redux-saga/effects";
import { ordersSaga } from "./orders/orders-sagas";
import { categiresDirectorySaga } from "./categoriesDirectory/categories-directory-sagas";
import { productsSaga } from "./products/products-saga";

export function *rootSaga(){

    yield all([call(ordersSaga),call(categiresDirectorySaga),call(productsSaga)])
}