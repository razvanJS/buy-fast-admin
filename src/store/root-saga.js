import {all,call} from "redux-saga/effects";
import { ordersSaga } from "./orders/orders-sagas";
import { categiresDirectorySaga } from "./categoriesDirectory/categories-directory-sagas";
export function *rootSaga(){

    yield all([call(ordersSaga),call(categiresDirectorySaga)])
}