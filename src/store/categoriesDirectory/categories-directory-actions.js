import { createAction } from "../../assets/createAction";
import { CATEGORIES_DIRECTORY_TYPES } from "./categories-directory-types";

export const fetchCategoiresDirectoryStart=()=>createAction(CATEGORIES_DIRECTORY_TYPES.FETCH_CATEGORIES_DIRECTORY_START)
export const fetchCategoriesDirectoryFaild=(error)=>createAction(CATEGORIES_DIRECTORY_TYPES.FETCH_CATEGORIES_DIRECTORY_FAILD,error)
export const fetchCategoriesDirectorySuccess=(categoriesData)=>createAction(CATEGORIES_DIRECTORY_TYPES.FETCH_CATEGORIES_DIRECTORY_SUCCESS,categoriesData)
export const fetchCategoriesDirectoryLength=(length)=>createAction(CATEGORIES_DIRECTORY_TYPES.FETCH_CATEGORIES_DIRECTORY_LENGTH,length)