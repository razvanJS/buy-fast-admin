import { CATEGORIES_DIRECTORY_TYPES } from "./categories-directory-types"

const CATEGOIRES_DIRECTORY_INITIAL_STATE={
    categories_directory_data:[],
    categoriesLenght:'',
    loadCategories:false,
    error:null,
    setName:{},
    setImage:{},
    setRemove:{},
    setNewCategory:{},
    setChangeElementOrder:{},
    

}

export const categoiresDirectoryReducer=(state=CATEGOIRES_DIRECTORY_INITIAL_STATE,action={})=>{
const{type,payload}=action
switch(type){
    case CATEGORIES_DIRECTORY_TYPES.FETCH_CATEGORIES_DIRECTORY_START:return {...state , loadCategories:true}
    case CATEGORIES_DIRECTORY_TYPES.FETCH_CATEGORIES_DIRECTORY_FAILD:return {...state, loadCategories:false,error:payload}
    case CATEGORIES_DIRECTORY_TYPES.FETCH_CATEGORIES_DIRECTORY_SUCCESS:return {...state, loadCategories:false,categories_directory_data:payload}
    case CATEGORIES_DIRECTORY_TYPES.FETCH_CATEGORIES_DIRECTORY_LENGTH:return{...state,categoriesLenght:payload}
    
    case CATEGORIES_DIRECTORY_TYPES.SET_CATEGORIES_NAME_START:return{...state,setName:payload}
    case CATEGORIES_DIRECTORY_TYPES.SET_CATEGORIES_NAME_FAILD:return{...state,setName:payload}
    case CATEGORIES_DIRECTORY_TYPES.SET_CATEGORIES_NAME_SUCCESS:return{...state,setName:"succes"}

    case CATEGORIES_DIRECTORY_TYPES.SET_CATEGORIES_IMAGE_START:return{...state,setImage:payload}
    case CATEGORIES_DIRECTORY_TYPES.SET_CATEGORIES_IMAGE_FAILD:return{...state,setImage:payload}
    case CATEGORIES_DIRECTORY_TYPES.SET_CATEGORIES_IMAGE_SUCCES:return{...state,setImage:"succes"}

    case CATEGORIES_DIRECTORY_TYPES.SET_CATEGORIES_REMOVE_START:return {...state,setRemove:payload}
    case CATEGORIES_DIRECTORY_TYPES.SET_CATEGORIES_REMOVE_FAILD:return{...state,setRemove:payload}
    case CATEGORIES_DIRECTORY_TYPES.SET_CATEGORIES_IMAGE_SUCCES:return{...state,setRemove:"succes"}

    case CATEGORIES_DIRECTORY_TYPES.SET_ADD_NEW_CATEGORY_START:return{...state,setNewCategory:payload}
    case CATEGORIES_DIRECTORY_TYPES.SET_ADD_NEW_CATEGORY_FAILD:return{...state,setNewCategory:payload}
    case CATEGORIES_DIRECTORY_TYPES.SET_ADD_NEW_CATEGORY_SUCCES:return{...state,setNewCategory:'succes'}

    case CATEGORIES_DIRECTORY_TYPES.SET_CHANGE_ELEMENT_ORDER_START:return{...state, setChangeElementOrder:payload}
    case CATEGORIES_DIRECTORY_TYPES.SET_CHANGE_ELEMENT_ORDER_FAILD:return{...state,setChangeElementOrder:payload}
    case CATEGORIES_DIRECTORY_TYPES.SET_CHANGE_ELEMENT_ORDER_SUCCES:return{...state,setChangeElementOrder:'succes'}

    default :return state

}

}