import {CategoryElementDivRemove } from "./remove-category.styled"
import Button from "../button/button.component"
import { useDispatch } from "react-redux"
import { setCategoriesRemoveStart } from "../../store/categoriesDirectory/categories-directory-actions"

const RemoveCategoryElement=({setIsRemoveXclick,categoryName})=>{
const dispatch=useDispatch()
const btnNoEvent=()=>setIsRemoveXclick(false)
const btnYesEvent=()=>{
  dispatch(setCategoriesRemoveStart(categoryName))
   
     
}
    return (
        <CategoryElementDivRemove>
<p>Are you certain that you wish to delete this category?</p>

 <Button  onClick={btnNoEvent}>NO</Button>
<Button  onClick={btnYesEvent} >YES</Button> 
   

        </CategoryElementDivRemove>
    )
}

export default RemoveCategoryElement