import { takeLatest,call,all,put } from "redux-saga/effects";
import { ADMIN_TYIPE } from "./admin.types";
import { getCurrentUser } from "../../utils/firebase.utils";
import { setCurrentUserFaild, setCurrentUserSucces } from "./admin.actions";
import { signInEmail } from "../../utils/firebase.utils";

function *setCurrentUser(action){
    const{type,payload:{email,password}}=action
    try{
        
        const user= yield call(signInEmail,email,password)
                  
       
        yield put(setCurrentUserSucces(user))


    }
    catch(err){
        yield put(setCurrentUserFaild(err))

    }
}

function*onSetCurrentUser(){
    yield takeLatest(ADMIN_TYIPE.SET_CURRENT_USER_START,setCurrentUser)
}




export function *adminSaga(){
    yield all([
        call(onSetCurrentUser)

    ])
}