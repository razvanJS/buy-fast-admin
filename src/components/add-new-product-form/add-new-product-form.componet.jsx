import Button from "../button/button.component"
import InputForm from "../input-form/input-form.component"
import { FormContainerProduct } from "./add-new-product-form.styles"
import { RemoveXdivRename } from "../category-rename/category-rename.styles"
import { useEffect, useState } from "react"
import { addProductToDb } from "../../utils/firebase.utils"
import { setAddProductStart } from "../../store/products/products-actions"
import { useDispatch, useSelector } from "react-redux"
import { capitalize } from "../../assets/capitalizeString"
import { productsDataSelect } from "../../store/products/products-selectors"


const AddNewProductForm=({item, newProductBtnClicked,setNewProductBtnClicket})=>{
   
    const dispatch=useDispatch()
   const xEvent=()=>setNewProductBtnClicket(false)
   const productsData=useSelector(productsDataSelect)

   const formDefault={id:'',name:'',price:'',imageUrl:''}
  

   const [formProduct,setFormProduct]=useState(formDefault)
   const [maxID,setMaxId]=useState(0);

   const{name,price,imageUrl}=formProduct

   useEffect(()=>{
    const setMaxIdFunction=()=>{
        const arrId=[]
        productsData.forEach(category => {
            if(!category.items)return;
            category.items.forEach(item=>{
                arrId.push(item.id)
            })
            
            
        });
         const maxIdNumber=arrId.reduce((value,acc)=>value>acc?value:acc,arrId[0])
         return maxIdNumber
    }

      const max=setMaxIdFunction()
     setMaxId(max)
   
   },[])
   const onChangeInputEvent=(e)=>{
    const name=e.target.name;
    let value=e.target.value;
    if(name==='price'){
       
        if(isNaN(value))return alert('The Price must be a Number')
        else  if(value<0) return alert('Price must be a pozitive Number')
        value=Number(e.target.value)
    }
    else if(name==='name'){
        value=capitalize(e.target.value)
    }
    
   console.log(productsData)
  

      console.log(formProduct)
       setFormProduct({...formProduct ,[name]:value,id:maxID+1})


   }
   const onSubmitProductForm=(e)=>{
    e.preventDefault()
     let  newProductsArray=[formProduct];
       
    if(item.items){
         newProductsArray=[...item.items,formProduct]
    }

    console.log(newProductsArray)
 
    // addProductToDb('categories',item.title,newProductsArray)
     dispatch(setAddProductStart('categories',item.title,newProductsArray))
    
  
    

   }
 return(
        <FormContainerProduct>
        <form onSubmit={onSubmitProductForm}>
            <RemoveXdivRename onClick={xEvent}>&#10006;</RemoveXdivRename>
            <InputForm required label='Name' type='text' name='name' value={name} onChange={onChangeInputEvent}></InputForm>
            <InputForm  required label="Price" type='text' name='price' value={price} onChange={onChangeInputEvent}></InputForm>
            <InputForm required label="Image Url" type='link' name='imageUrl' value={imageUrl} onChange={onChangeInputEvent}></InputForm>
            <Button type='submit'>New Product</Button>

        </form>
        </FormContainerProduct>
    )
}

export default AddNewProductForm