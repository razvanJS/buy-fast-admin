import Button from "../button/button.component"
import { Input } from "../input-form/input-form.styles"
import { RenameContainer ,RemoveXdiv} from "./category-rename.styles"
import { useEffect, useState } from "react"
import { setCategoriesNameStart } from "../../store/categoriesDirectory/categories-directory-actions"
import { useDispatch } from "react-redux"
const RenameComponet=({setIsRenameBtnClick,categoryName})=>{
        const dispatch=useDispatch()
    
    const[inputRenameValue,setInputRenameValue]=useState('')
    const setCategoriesNameEvent=(e)=>{
        
        e.preventDefault()
        dispatch(setCategoriesNameStart(categoryName,inputRenameValue))
        
    }

   const inputChangeValueEvent=(e)=>{
    setInputRenameValue(e.target.value)
   }
   const xEvent=()=>setIsRenameBtnClick(false)
return(
    <RenameContainer>
    <form onSubmit={setCategoriesNameEvent}>  <RemoveXdiv onClick={xEvent}>&#10006;</RemoveXdiv>
         <Input type='text' name="rename-input" value={inputRenameValue.toLocaleUpperCase()} onChange={inputChangeValueEvent}></Input><br/>
        <Button type='submit'>New Name</Button>
    </form>
    </RenameContainer>
)

}


export default RenameComponet