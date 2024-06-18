import {ImageContainerChange} from "./category-change-image.styled"
import { RemoveXdivRename} from "../category-rename/category-rename.styles"
import { Input } from "../input-form/input-form.styles"
import Button from "../button/button.component"
import { useState } from "react"
import { updateFieldOnDb } from "../../utils/firebase.utils"
import { useDispatch } from "react-redux"
import { setCategoriesImageStart } from "../../store/categoriesDirectory/categories-directory-actions"

const ChangeImageCategory=({setIsRenameBtnClick,setIsImageDblCkicked,categoryName})=>{
      const [inputImageUrlVal,setInputImageUrlVal]=useState('')
      const dipatch=useDispatch()
     const onChangeEvent=(event)=>setInputImageUrlVal(event.target.value)
     const xEvent=()=>{
        setIsImageDblCkicked(false)
        setIsRenameBtnClick(false)
     }
     const onSubmitEvent=(event)=>{
        event.preventDefault()
        
        dipatch(setCategoriesImageStart(categoryName,inputImageUrlVal))

     }

    return (
       
        <ImageContainerChange>
       <form onSubmit={onSubmitEvent}>
            <RemoveXdivRename onClick={xEvent}>&#10006;</RemoveXdivRename>
          <Input type='text' name="change-image-input" onChange={onChangeEvent} value={inputImageUrlVal.toLocaleUpperCase()}></Input><br/>
        <Button type='submit'>New Image Url</Button>
             </form>
        </ImageContainerChange>
    )
}


export default ChangeImageCategory