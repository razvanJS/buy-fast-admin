import { createAction } from "../../assets/createAction";
import { PRODUCTS_TYPES } from "./products-types";

export const fetchProductsDataStart=()=>createAction(PRODUCTS_TYPES.FETCH_PRODUCTS_DATA_START)
export const fetchProductsDataFaild=(err)=>createAction(PRODUCTS_TYPES.FETCH_PRODUCTS_DATA_FAILD,err)
export const fetchProductsDataSucces=(data)=>createAction(PRODUCTS_TYPES.FETCH_PRODUCTS_DATA_SUCCES,data)

