import { takeLatest,all,call,put} from "redux-saga/effects";
import { PRODUCTS_TYPES } from "./products-types";
import { getOrdersFromDb,updateProductDetails,deleteProduct ,addProductToDb} from "../../utils/firebase.utils";
import { fetchProductsDataFaild,
         fetchProductsDataSucces,
         setChangeProductDetailsFaild,
         setChangeProductDetailsSucces,
         setRemoveProductFaild,
         setRemoveProductSucces,
         setAddProductFaild,
         setAddProductSucces,
        
        } from "./products-actions";



function* getProductsData(){

    try{
      const productsData=yield call(getOrdersFromDb,'categories')
      const prductsFilterd=productsData.map(item=>{
        const obj={...item,id:Number(item.id)}
        return obj
      }).sort((a,b)=>a.id-b.id)

 

      yield put(fetchProductsDataSucces(prductsFilterd))
      
     
 
    }

    catch(err){
        yield put(fetchProductsDataFaild(err))

    }
 
}

function *setProductDetails(action){

const{payload:{collectionName,docId,docName,newObj}}=action

try{

       yield call(updateProductDetails,collectionName,docName,docId,newObj)
       yield window.location.reload()
       yield put(setChangeProductDetailsSucces())

}

catch(err){
  yield put(setChangeProductDetailsFaild(err.message))
}


}

function *setRemoveProduct(action){
   
  const {payload:{collectionName,docName,itemId}} =action

  
  try{
    yield call(deleteProduct,collectionName,docName,itemId)
    yield  window.location.reload()
    yield put(setRemoveProductSucces())

  }
  catch(err){
   yield put(setRemoveProductFaild(err.message))
  }

}

function *setAddProduct(action){
  const {payload:{collectionName,docName,newObj}}=action

  try{
    yield call(addProductToDb,collectionName,docName,newObj)
    yield window.location.reload()
    yield put(setAddProductSucces())

  }

  catch(err){
    yield put(setAddProductFaild(err.message))

  }

}



function *onSetAddProduct(){
  yield takeLatest(PRODUCTS_TYPES.SET_ADD_PRODUCT_START,setAddProduct)
}

function *onSetRemoveProduct(){
  yield takeLatest(PRODUCTS_TYPES.SET_REMOVE_PRODUCT_START,setRemoveProduct)
}

function *onSetProductDatails(){
  yield takeLatest(PRODUCTS_TYPES.SET_CHANGE_PRODUCT_DETAILS_START,setProductDetails)
}


function *onGetProductsData(){
  yield  takeLatest(PRODUCTS_TYPES.FETCH_PRODUCTS_DATA_START,getProductsData)

}


export function *productsSaga(){
   yield all([
    call(onGetProductsData)
    ,call(onSetProductDatails)
    ,call(onSetRemoveProduct)
    ,call(onSetAddProduct)
    
  ])
}