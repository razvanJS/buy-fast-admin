import { useState } from "react"
import Button from "../button/button.component"
import InputForm from "../input-form/input-form.component"
import { BtnContainer, SignInContainer } from "./admin-sing-in.styles"

import { useDispatch } from "react-redux"
import { setCurrentUserStart } from "../../store/admin-user/admin.actions"

const AdminSignIn=()=>{


    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const dispatch=useDispatch()
   

   const onSubmitEvent=(e)=>{
    e.preventDefault()
    dispatch(setCurrentUserStart(email,password))
    
    
   
   }

    return (
        <SignInContainer>
            <h2>Sign In</h2>
            <span>Sign in with email and password
            </span>
            <form onSubmit={onSubmitEvent}>
                <InputForm label='Email' type="email" required 
                onChange={(e)=>setEmail(e.target.value)} value={email}></InputForm>
                <InputForm label='Password' type='password'  onChange={(e)=>setPassword(e.target.value)}  required value={password}></InputForm>
              
                <BtnContainer>
                    
                    <Button   typebutton='google' type='submit'>LOG IN</Button>
                    
                </BtnContainer>
            </form>
        </SignInContainer>
    )
}

export default AdminSignIn