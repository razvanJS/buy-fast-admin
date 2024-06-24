import { takeLatest,call,all,put } from "redux-saga/effects";
import { CATEGORIES_DIRECTORY_TYPES } from "./categories-directory-types";
import { deleteDocUsingDocName, getOrdersFromDb ,updateDocumentDb,updateFieldOnDb,addDocToDB} from "../../utils/firebase.utils";
import {fetchCategoriesDirectorySuccess,
    fetchCategoriesDirectoryFaild, 
    fetchCategoriesDirectoryLength ,
    setCategoriesNameSuccess,
    setCategoriesNameFaild,
    setCategoriesImageSuccess,
    setCategoriesImageFaild,
    setCategoriesRemoveSucces,
    setCategoriesRemoveFaild,
    setAddNewCategorySucces,
    setAddNewCategoryFaild
    } from "./categories-directory-actions";
import { ca } from "date-fns/locale";

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

function *setRemoveCategory(action){
    const {payload:{categoryName}}=action
   
   try{
   yield call(deleteDocUsingDocName,'directory',categoryName)
   yield call(deleteDocUsingDocName,'categories',categoryName)
   yield put(setCategoriesRemoveSucces())
   yield window.location.reload()
   }
   catch(error){
    yield put(setCategoriesRemoveFaild(error.message))
   }
}
function *setAddNewCategory(action){

    const{payload:{data,categoriesData}}=action
    console.log(data,categoriesData)

    for(let i=0;i<categoriesData.length;i++){
        if(categoriesData[i].id===data.id)return alert('The ID of the Element already exist');
    }
    
    const categoriesObj={title:data.title}
  
    try{
        yield call(addDocToDB,'directory',data)
        yield call(addDocToDB,'categories',categoriesObj)
        yield put(setAddNewCategorySucces())
        yield window.location.reload()
    }
    catch(err){
        yield put(setAddNewCategoryFaild(err.message))
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
function *onSetRemoveCategory(){
    yield takeLatest(CATEGORIES_DIRECTORY_TYPES.SET_CATEGORIES_REMOVE_START,setRemoveCategory)
}

function *onSetAddNewCategory(){
    yield takeLatest(CATEGORIES_DIRECTORY_TYPES.SET_ADD_NEW_CATEGORY_START,setAddNewCategory)
}

export function *categiresDirectorySaga(){
    yield all([
        call(onGetCategoriesFromDb)
        ,call(onSetCategoryTitle)
        ,call(onSetCategoryImage)
        ,call(onSetRemoveCategory)
        ,call(onSetAddNewCategory)
    ])
}