import { useState } from "react"
import Button from "../button/button.component"
import { RemoveXdivRename } from "../category-rename/category-rename.styles"
import { ItemBody } from "../home-item-container/home-item-container-style"
import { Input } from "../input-form/input-form.styles"
import { NewBodyItem } from "./change-category-directory-order.styles"
import { categoriesDirectoryDataSelect } from "../../store/categoriesDirectory/categories-directory-selectors" 
import { useDispatch, useSelector } from "react-redux"
import { updateFieldOnDb } from "../../utils/firebase.utils"
import { setChangeElementOrderStart } from "../../store/categoriesDirectory/categories-directory-actions"

const ChangeDirectoryCategoryOrder=({setIsItemBodyClick,category})=>{
       const[changeOrderInput,setChangeOrderInput]=useState('')
       const categories=useSelector(categoriesDirectoryDataSelect)
       const dispatch=useDispatch()

       const inputOnChangeEvent=(e)=>setChangeOrderInput(e.target.value)
       
     const removeXevent=()=>{
       setIsItemBodyClick(false)
     }
     const submitEvent=()=>dispatch(setChangeElementOrderStart(categories,category,changeOrderInput))

     
    return(
        <>
         <NewBodyItem>
            <RemoveXdivRename onClick={removeXevent}>&#10006;</RemoveXdivRename>
            <Input type='text' value={changeOrderInput} onChange={inputOnChangeEvent}  maxLength={'1'}></Input>
            <Button onClick={submitEvent}>Order Change</Button>

       </NewBodyItem>
       </>
     
    )
}

export default ChangeDirectoryCategoryOrder