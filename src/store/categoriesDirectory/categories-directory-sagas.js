import { takeLatest,call,all,put } from "redux-saga/effects";
import { CATEGORIES_DIRECTORY_TYPES } from "./categories-directory-types";
import { getOrdersFromDb } from "../../utils/firebase.utils";
import {fetchCategoriesDirectorySuccess,
    fetchCategoriesDirectoryFaild, 
    fetchCategoriesDirectoryLength ,
    setCategoriesNameSuccess,
    setCategoriesNameFaild,
    setCategoriesImageSuccess,
    setCategoriesImageFaild
    } from "./categories-directory-actions";
import { updateDocumentDb ,updateFieldOnDb} from "../../utils/firebase.utils";
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




function *setTheCategoyTitle(action){
    const {payload:{nameDoc,titleName,allCategories}}=action
   
    const title=titleName.toLowerCase()
    try{
        if(nameDoc.toLowerCase()===title)return alert('Change The Name');
       
        else if(title==='')return alert('Choose a new name');
        for(let i=0;i<allCategories.length;i++){
            if(allCategories[i].title===title)return  alert('Change The Name');
        }
      
        yield call(updateDocumentDb,'directory',nameDoc,title)
        yield call(updateDocumentDb,'categories',nameDoc,title)
        yield put(setCategoriesNameSuccess())
        yield window.location.reload()
    }

    catch(err){
        yield put(setCategoriesNameFaild(err.message))

    }

}

function *setTheCategoryImage(action){
    const {payload:{categoryName,imageInput}}=action
 
    console.log(categoryName,imageInput)

    try{
       yield call(updateFieldOnDb,'directory',categoryName,'imageUrl',imageInput)
       yield put(setCategoriesImageSuccess())
       yield window.location.reload()

    }

    catch(err){
        yield put(setCategoriesImageFaild(err.message))

    }


}


function *onGetCategoriesFromDb(){
    yield takeLatest(CATEGORIES_DIRECTORY_TYPES.FETCH_CATEGORIES_DIRECTORY_START,getCategoriesFromDb)
 }

function *onSetCategoryTitle(){
    yield takeLatest(CATEGORIES_DIRECTORY_TYPES.SET_CATEGORIES_NAME_START,setTheCategoyTitle)
}

function *onSetCategoryImage(){
    yield takeLatest(CATEGORIES_DIRECTORY_TYPES.SET_CATEGORIES_IMAGE_START,setTheCategoryImage)
}


export function *categiresDirectorySaga(){
    yield all([call(onGetCategoriesFromDb),call(onSetCategoryTitle),call(onSetCategoryImage)])
}