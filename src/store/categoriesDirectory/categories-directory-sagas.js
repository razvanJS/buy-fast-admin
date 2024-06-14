import { takeLatest,call,all,put } from "redux-saga/effects";
import { CATEGORIES_DIRECTORY_TYPES } from "./categories-directory-types";
import { getOrdersFromDb } from "../../utils/firebase.utils";
import {fetchCategoriesDirectorySuccess,fetchCategoriesDirectoryFaild, fetchCategoriesDirectoryLength } from "./categories-directory-actions";

function * getCategoriesFromDb(){
    
try{
  const categoriesData=yield call(getOrdersFromDb,'directory')

   yield put(fetchCategoriesDirectoryLength(categoriesData.length))
   yield put(fetchCategoriesDirectorySuccess(categoriesData))
}
catch(err){
    yield put(fetchCategoriesDirectoryFaild(err))

}

}

function *onGetCategoriesFromDb(){
   yield takeLatest(CATEGORIES_DIRECTORY_TYPES.FETCH_CATEGORIES_DIRECTORY_START,getCategoriesFromDb)
}

export function *categiresDirectorySaga(){
    yield all([call(onGetCategoriesFromDb)])
}