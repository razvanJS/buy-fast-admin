import { useState } from "react"
import Button from "../button/button.component"
import { RemoveXdivRename } from "../category-rename/category-rename.styles"
import { Input } from "../input-form/input-form.styles"
import { NewBodyItem } from "./change-category-directory-order.styles"
import { categoriesDirectoryDataSelect } from "../../store/categoriesDirectory/categories-directory-selectors" 
import { useDispatch, useSelector } from "react-redux"
import { setChangeElementOrderStart } from "../../store/categoriesDirectory/categories-directory-actions"
import { currentUserSelect } from "../../store/admin-user/admin.selctors"
const ChangeDirectoryCategoryOrder=({setIsItemBodyClick,category})=>{
       const[changeOrderInput,setChangeOrderInput]=useState('')
       const categories=useSelector(categoriesDirectoryDataSelect)
       const dispatch=useDispatch()

       const inputOnChangeEvent=(e)=>setChangeOrderInput(e.target.value)
       const currentUser=useSelector(currentUserSelect)
       
     const removeXevent=()=>{
       setIsItemBodyClick(false)
     }
     const submitEvent=()=>{
      if(!currentUser)alert('Only the administrator can change the item`s order ,for testing, you can use email: admin@gmail.com password: admin1234.');
     else dispatch(setChangeElementOrderStart(categories,category,changeOrderInput))
     }

     
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