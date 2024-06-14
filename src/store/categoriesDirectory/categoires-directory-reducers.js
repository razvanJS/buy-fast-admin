import { CATEGORIES_DIRECTORY_TYPES } from "./categories-directory-types"

const CATEGOIRES_DIRECTORY_INITIAL_STATE={
    categories_directory_data:[],
    categoriesLenght:'',
    isLoading:false,
    error:null,

}

export const categoiresDirectoryReducer=(state=CATEGOIRES_DIRECTORY_INITIAL_STATE,action={})=>{
const{type,payload}=action
switch(type){
    case CATEGORIES_DIRECTORY_TYPES.FETCH_CATEGORIES_DIRECTORY_START:return {...state ,isLoading:true}
    case CATEGORIES_DIRECTORY_TYPES.FETCH_CATEGORIES_DIRECTORY_FAILD:return {...state,isLoading:false,error:payload}
    case CATEGORIES_DIRECTORY_TYPES.FETCH_CATEGORIES_DIRECTORY_SUCCESS:return {...state,isLoading:false,categories_directory_data:payload}
    case CATEGORIES_DIRECTORY_TYPES.FETCH_CATEGORIES_DIRECTORY_LENGTH:return{...state,categoriesLenght:payload}
    default :return state

}

}