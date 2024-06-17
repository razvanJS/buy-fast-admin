import Button from "../button/button.component"
import { Input } from "../input-form/input-form.styles"
import { RenameContainer ,RemoveXdiv} from "./category-rename.styles"
import { useEffect, useState } from "react"
import { setCategoriesNameStart } from "../../store/categoriesDirectory/categories-directory-actions"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { categoriesDirectoryDataSelect } from "../../store/categoriesDirectory/categories-directory-selectors"


const RenameComponet=({setIsImageDblCkicked,setIsRenameBtnClick,categoryName})=>{
        const dispatch=useDispatch()
        const allCategories=useSelector(categoriesDirectoryDataSelect)
        console.log(allCategories)
    const[inputRenameValue,setInputRenameValue]=useState('')
    const setCategoriesNameEvent=(e)=>{
        
        e.preventDefault()
        dispatch(setCategoriesNameStart(categoryName,inputRenameValue,allCategories))
        
    }

   const inputChangeValueEvent=(e)=>{
    setInputRenameValue(e.target.value)
   }
   const xEvent=()=>{
    setIsImageDblCkicked(false)
    setIsRenameBtnClick(false)}
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