import { createAction } from "../../assets/createAction";
import { CATEGORIES_DIRECTORY_TYPES } from "./categories-directory-types";

export const fetchCategoiresDirectoryStart=()=>createAction(CATEGORIES_DIRECTORY_TYPES.FETCH_CATEGORIES_DIRECTORY_START)
export const fetchCategoriesDirectoryFaild=(error)=>createAction(CATEGORIES_DIRECTORY_TYPES.FETCH_CATEGORIES_DIRECTORY_FAILD,error)
export const fetchCategoriesDirectorySuccess=(categoriesData)=>createAction(CATEGORIES_DIRECTORY_TYPES.FETCH_CATEGORIES_DIRECTORY_SUCCESS,categoriesData)
export const fetchCategoriesDirectoryLength=(length)=>createAction(CATEGORIES_DIRECTORY_TYPES.FETCH_CATEGORIES_DIRECTORY_LENGTH,length)

export const setCategoriesNameStart=(nameDoc,titleName,allCategories)=>createAction(CATEGORIES_DIRECTORY_TYPES.SET_CATEGORIES_NAME_START,{nameDoc,titleName,allCategories})
export const setCategoriesNameFaild=(err)=>createAction(CATEGORIES_DIRECTORY_TYPES.SET_CATEGORIES_NAME_FAILD,err)
export const setCategoriesNameSuccess=()=>createAction(CATEGORIES_DIRECTORY_TYPES.SET_CATEGORIES_NAME_SUCCESS)

export const setCategoriesImageStart=(categoryName,imageInput)=>createAction(CATEGORIES_DIRECTORY_TYPES.SET_CATEGORIES_IMAGE_START,{categoryName,imageInput})
export const setCategoriesImageFaild=(err)=>createAction(CATEGORIES_DIRECTORY_TYPES.SET_CATEGORIES_IMAGE_FAILD,err)
export const setCategoriesImageSuccess=()=>createAction(CATEGORIES_DIRECTORY_TYPES.SET_CATEGORIES_IMAGE_SUCCES)

export const setCategoriesRemoveStart=(categoryName)=>createAction(CATEGORIES_DIRECTORY_TYPES.SET_CATEGORIES_REMOVE_START,{categoryName})
export const setCategoriesRemoveFaild=(err)=>createAction(CATEGORIES_DIRECTORY_TYPES.SET_CATEGORIES_NAME_FAILD,err)
export const setCategoriesRemoveSucces=()=>createAction(CATEGORIES_DIRECTORY_TYPES.SET_CATEGORIES_REMOVE_SUCCES)
