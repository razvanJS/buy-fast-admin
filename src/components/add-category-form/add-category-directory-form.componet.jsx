import Button from "../button/button.component";
import InputForm from "../input-form/input-form.component";
import { FormDiv } from "./add-category-directory-form.styles";
import { RemoveXdivRename } from "../category-rename/category-rename.styles";
import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddNewCategoryStart } from "../../store/categoriesDirectory/categories-directory-actions";
import { categoriesDirectoryDataSelect } from "../../store/categoriesDirectory/categories-directory-selectors";

const AddCategoryForm=({isAddCategoryBtnClicked,setIsAddCategoryBtnClicked})=>{

    const categoriesDataSlect=useSelector(categoriesDirectoryDataSelect)
   
  
    const categoriesId= categoriesDataSlect.map(category=>Number(category.id))
    const maxIdCategories=categoriesId.reduce((acc,value)=>{
        return acc>value?acc:value
    },0)
   
   const addCategoryForm={id:maxIdCategories+1,title:'',imageUrl:''}
   const [addCategory,setAddCategory]=useState(addCategoryForm)
   const {id,title,imageUrl}=addCategory
    const dispatch=useDispatch()
   const categoriesData=useSelector(categoriesDirectoryDataSelect)
   
const changeEvent=(e)=>{
    const nameChange=e.target.name
    const valueChane=e.target.value

    setAddCategory({...addCategory,[nameChange]:valueChane})
    
}

const submitEvent=(event)=>{
    event.preventDefault()
          
    dispatch(setAddNewCategoryStart(addCategory,categoriesData))
} 
const RemoveEnvet=()=>isAddCategoryBtnClicked==true?setIsAddCategoryBtnClicked(false):''

     
    return (<>
     <FormDiv>
     <form onSubmit={submitEvent}>
        <RemoveXdivRename onClick={RemoveEnvet}>&#10006;</RemoveXdivRename>
        <InputForm required label='ID'  type='text' name='id' onChange={changeEvent}  value={id}></InputForm>
        <InputForm required label='Name'  type='text' name='title' onChange={changeEvent}  value={title}></InputForm>
        <InputForm  required label='Image Url'  type='link' name='imageUrl'onChange={changeEvent}  value={imageUrl}></InputForm>
        <Button >Add Category </Button>
     </form>
     </FormDiv>
    
    
    </>)
}


export default AddCategoryForm