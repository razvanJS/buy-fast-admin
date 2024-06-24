import Button from "../button/button.component";
import InputForm from "../input-form/input-form.component";
import { FormDiv } from "./add-category-form.styles";
import { RemoveXdivRename } from "../category-rename/category-rename.styles";
import { useEffect, useState } from "react";
import { categoriesDirectoryLength } from "../../store/categoriesDirectory/categories-directory-selectors";
import { useDispatch, useSelector } from "react-redux";
import { setAddNewCategoryStart } from "../../store/categoriesDirectory/categories-directory-actions";
import { categoriesDirectoryDataSelect } from "../../store/categoriesDirectory/categories-directory-selectors";
const AddCategoryForm=()=>{

   const addCategoryForm={id:'',title:'',imageUrl:''}
   const [addCategory,setAddCategory]=useState(addCategoryForm)
   const {id,title,imageUrl}=addCategory
    const dispatch=useDispatch()
   const categoriesData=useSelector(categoriesDirectoryDataSelect)


const changeEvent=(e)=>{
    const nameChange=e.target.name
    const valueChane=e.target.value

    setAddCategory({...addCategory,[nameChange]:valueChane})
    
}

    

     
    return (<>
     <FormDiv>
     <form onSubmit={(event)=>{
       event.preventDefault()
          
          dispatch(setAddNewCategoryStart(addCategory,categoriesData))

     }}>
        <RemoveXdivRename>&#10006;</RemoveXdivRename>
        <InputForm required label='ID'  type='text' name='id' onChange={changeEvent}  value={id}></InputForm>
        <InputForm required label='Name'  type='text' name='title' onChange={changeEvent}  value={title}></InputForm>
        <InputForm  required label='Image Url'  type='link' name='imageUrl'onChange={changeEvent}  value={imageUrl}></InputForm>
        <Button >Add Category </Button>
     </form>
     </FormDiv>
    
    
    </>)
}


export default AddCategoryForm