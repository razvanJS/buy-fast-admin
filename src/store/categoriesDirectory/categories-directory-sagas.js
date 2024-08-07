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
    setAddNewCategoryFaild,
    setChangeElementOrderSucces,
    setChangeElementOrderFaild
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
   

    for(let i=0;i<categoriesData.length;i++){
        if(categoriesData[i].id===data.id)return alert('The ID of the Element already exist');
    }
    //ID INPUT MUST BE A NUMBER
    const nrIdIput=Number(data.id)

    //idIput="sdsa"->Nan false value
    if(!nrIdIput)return alert('ID INPUT MUST BE A NUMBER');
    
    const categoriesObj={title:data.title,id:`0${data.id}`}
     data.id=Number(data.id)
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

function* setChangeElementOrder(action){

    const{payload:{categories,category,changeOrderInput}}=action
     

          try{
           //Element [{id:2}] to be change the id value
           //find the element we want to change the order in the Categories 
    
           const orderInput=Number(changeOrderInput)
           const elementToChangeOrder=categories.filter(value=>value.id===orderInput)
           

           if(elementToChangeOrder.length===0)return alert('The Id of the Element dosen`t exist');
           //if the id o the element we want to change dosen`t exsit the array filterd is emty return the alert
           if(category.id===orderInput)return alert("Plase choose a new id")
            //if the id its the same 
   
           //changing the order between the selected element and the previous element
           yield updateFieldOnDb('directory',category.title,'id',orderInput)//1(2) 1->2
           yield updateFieldOnDb('directory',elementToChangeOrder[0].title,'id',category.id)//2(1) 2->1
           yield updateFieldOnDb('categories',category.title,'id',`0${orderInput}`)
           yield updateFieldOnDb('categories',elementToChangeOrder[0].title,'id',`0${category.id}`)
           yield put(setChangeElementOrderSucces()) 
           yield window.location.reload()
           

          }
          catch(err){
            yield put(setChangeElementOrderFaild(err.message))

          }
           
           
    
}

function *onSetChangeElmentOrder(){
    yield takeLatest(CATEGORIES_DIRECTORY_TYPES.SET_CHANGE_ELEMENT_ORDER_START,setChangeElementOrder)
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
        ,call(onSetChangeElmentOrder)

    ])
}