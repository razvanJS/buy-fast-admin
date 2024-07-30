import { type } from "@testing-library/user-event/dist/type"
import { ADMIN_TYIPE } from "./admin.types";

const ADMIN_INITIAL_STATE={
  current_user:null,
  error:null,

    

}
export const adminReducer=(state=ADMIN_INITIAL_STATE,action={})=>{
const{payload,type}=action;
switch(type){
    case ADMIN_TYIPE.SET_CURRENT_USER_SUCCES:return {...state ,current_user:payload}
    case ADMIN_TYIPE.SET_CURRENT_USER_FAILD:return {...state,error:payload}
    case ADMIN_TYIPE.SIGN_OUT_USER:return {...state,current_user:null}
    default:return state 
}


}