import { collection } from "firebase/firestore";
import { createAction } from "../../assets/createAction";
import { PRODUCTS_TYPES } from "./products-types";

export const fetchProductsDataStart=()=>createAction(PRODUCTS_TYPES.FETCH_PRODUCTS_DATA_START)
export const fetchProductsDataFaild=(err)=>createAction(PRODUCTS_TYPES.FETCH_PRODUCTS_DATA_FAILD,err)
export const fetchProductsDataSucces=(data)=>createAction(PRODUCTS_TYPES.FETCH_PRODUCTS_DATA_SUCCES,data)

export const setChangeProductDetailsStart=(collectionName,docName,docId,newObj)=>createAction(PRODUCTS_TYPES.SET_CHANGE_PRODUCT_DETAILS_START,{collectionName,docName,docId,newObj})
export const setChangeProductDetailsFaild=(err)=>createAction(PRODUCTS_TYPES.SET_CHANGE_PRODUCT_DETAILS_FAILD,err)
export const setChangeProductDetailsSucces=()=>createAction(PRODUCTS_TYPES.SET_CHANGE_PRODUCT_DETAILS_SUCCES)


export const setRemoveProductStart=(collectionName,docName,itemId)=>createAction(PRODUCTS_TYPES.SET_REMOVE_PRODUCT_START,{collectionName,docName,itemId})
export const setRemoveProductFaild=(err)=>createAction(PRODUCTS_TYPES.SET_REMOVE_PRODUCT_FAILD,err)
export const setRemoveProductSucces=()=>createAction(PRODUCTS_TYPES.SET_REMOVE_PRODUCT_SUCCES)

export const setAddProductStart=(collectionName,docName,newObj)=>createAction(PRODUCTS_TYPES.SET_ADD_PRODUCT_START,{collectionName,docName,newObj})
export const setAddProductFaild=(err)=>createAction(PRODUCTS_TYPES.SET_ADD_PRODUCT_FAILD,err)
export const setAddProductSucces=()=>createAction(PRODUCTS_TYPES.SET_ADD_PRODUCT_SUCCES)