import { takeLatest,all,call,put} from "redux-saga/effects";
import { PRODUCTS_TYPES } from "./products-types";
import { getOrdersFromDb } from "../../utils/firebase.utils";
import { fetchProductsDataFaild, fetchProductsDataSucces, setProductClickedFaild, setProductClickedSucces } from "./products-actions";


function* getProductsData(){

    try{
      const productsData=yield call(getOrdersFromDb,'categories')
      yield put(fetchProductsDataSucces(productsData))
    }

    catch(err){
        yield put(fetchProductsDataFaild(err))

    }
 
}



function *onGetProductsData(){
  yield  takeLatest(PRODUCTS_TYPES.FETCH_PRODUCTS_DATA_START,getProductsData)

}


export function * productsSaga(){
   yield all([call(onGetProductsData)])
}