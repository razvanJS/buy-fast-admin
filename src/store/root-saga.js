import {all,call} from "redux-saga/effects";
import { ordersSaga } from "./orders/orders-sagas";
export function *rootSaga(){

    yield all([call(ordersSaga)])
}