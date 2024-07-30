import {ImageContainerChange} from "./category-change-image.styled"
import { RemoveXdivRename} from "../category-rename/category-rename.styles"
import { Input } from "../input-form/input-form.styles"
import Button from "../button/button.component"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setCategoriesImageStart } from "../../store/categoriesDirectory/categories-directory-actions"
import { currentUserSelect } from "../../store/admin-user/admin.selctors"
const ChangeImageCategory=({setIsRenameBtnClick,setIsImageDblCkicked,categoryName})=>{
      const [inputImageUrlVal,setInputImageUrlVal]=useState('')
      const dipatch=useDispatch()
     const onChangeEvent=(event)=>setInputImageUrlVal(event.target.value)
     const currentUser=useSelector(currentUserSelect)
     const xEvent=()=>{
        setIsImageDblCkicked(false)
        setIsRenameBtnClick(false)
     }
     const onSubmitEvent=(event)=>{
        event.preventDefault()
        if(!currentUser)return alert('Only the administrator can change the item`s image,For testing, you can use email: admin@gmail.com password: admin1234. ')
      
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