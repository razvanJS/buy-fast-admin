import { createAction } from "../../assets/createAction";
import { ADMIN_TYIPE } from "./admin.types";
  




export const setCurrentUserStart=(email,password)=>createAction(ADMIN_TYIPE.SET_CURRENT_USER_START,{email,password})
export const setCurrentUserFaild=(err)=>createAction(ADMIN_TYIPE.SET_CURRENT_USER_FAILD,err)
export const setCurrentUserSucces=(payload)=>createAction(ADMIN_TYIPE.SET_CURRENT_USER_SUCCES,payload)
export const signOutUser=()=>createAction(ADMIN_TYIPE.SIGN_OUT_USER)