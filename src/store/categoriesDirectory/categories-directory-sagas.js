import { takeLatest,call,all,put } from "redux-saga/effects";
import { CATEGORIES_DIRECTORY_TYPES } from "./categories-directory-types";
import { getOrdersFromDb } from "../../utils/firebase.utils";
import {fetchCategoriesDirectorySuccess,fetchCategoriesDirectoryFaild, fetchCategoriesDirectoryLength ,setCategoriesNameSuccess,setCategoriesNameFaild} from "./categories-directory-actions";
import { updateDocumentDb } from "../../utils/firebase.utils";
function * getCategoriesFromDb(){
    
try{
  const categoriesData=yield call(getOrdersFromDb,'directory')

   yield put(fetchCategoriesDirectoryLength(categoriesData.length))
   const sortDataCategories=categoriesData.sort((a,b)=>a.id-b.id)
   yield put(fetchCategoriesDirectorySuccess(sortDataCategories))
}
catch(err){
    yield put(fetchCategoriesDirectoryFaild(err))

}

}


function *onGetCategoriesFromDb(){
   yield takeLatest(CATEGORIES_DIRECTORY_TYPES.FETCH_CATEGORIES_DIRECTORY_START,getCategoriesFromDb)
}

function *setTheCategoyTitle(action){
    const {payload:{nameDoc,titleName}}=action
    console.log(nameDoc,titleName)

    try{
        if(nameDoc.toLowerCase()===titleName.toLowerCase())return alert('Change The Name');
        if(titleName==='')return alert('Choose a new name');
        yield call(updateDocumentDb,'directory',nameDoc,titleName)
         yield call(updateDocumentDb,'categories',nameDoc,titleName)
        yield put(setCategoriesNameSuccess())
        yield window.location.reload()
    }

    catch(err){
        yield put(setCategoriesNameFaild(err.message))

    }

}

function *onSetCategoryTitle(){
    yield takeLatest(CATEGORIES_DIRECTORY_TYPES.SET_CATEGORIES_NAME_START,setTheCategoyTitle)
}


export function *categiresDirectorySaga(){
    yield all([call(onGetCategoriesFromDb),call(onSetCategoryTitle)])
}