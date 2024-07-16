import { useState } from "react"
import { Input } from "../input-form/input-form.styles"
import { FormNameFooter,FormPriceFooter } from "./product-change-details.styles"
import { capitalize } from "../../assets/capitalizeString"
import { useParams } from "react-router"

import { setChangeProductDetailsStart } from "../../store/products/products-actions"
import { useDispatch } from "react-redux"

const ProductChangeDetails=({ 
     item,
     spanNameClick,
    setSpanNameClick,
    spanPriceClick,
    setSpanPriceClick,
  
}) =>{
   
       
    const [newName,setNewName]=useState(item.name)
    const [newPrice,setNewPrice]=useState(item.price)
    const {product}=useParams();
    const newItem={...item};
    const dispatch=useDispatch()

    const onChangeEvent=(e)=>{
        if(spanNameClick){
            const nameValue=e.target.value
        
         
            setNewName(capitalize(nameValue))
          
        }
        else if(spanPriceClick){
            const priceValue=e.target.value
            setNewPrice(String(priceValue))

        }
       
    }
   const onSubmitPrice=(e)=>{
    e.preventDefault()

  

         const price=Number(newPrice)
         if(price<0) return alert('Price must be a pozitive Number')
        else if(item.price===price)return alert('Add a new Price')
        else if(isNaN(price))return alert('The Price must be a Number')
          newItem.price=price
     
        dispatch(setChangeProductDetailsStart('categories',product,item.id,newItem))
       
         
        
         }
  
   const onSubmitName=(e)=>{
       e.preventDefault()
    if(item.name===newName)return alert('Add a new Name')
    const name=Number(newName)
    console.log(name)
    if(!isNaN(name))return alert('The Name must be a String')
        newItem.name=newName
    dispatch(setChangeProductDetailsStart('categories',product,item.id,newItem))


   }
   if(spanNameClick){
    
  
  
    return (
    <FormNameFooter  onSubmit={onSubmitName}  onDoubleClick={()=>setSpanNameClick(false)}>
    <Input value={newName} name='change-name' onChange={onChangeEvent} ></Input>
    </FormNameFooter>
    
    )
   }
   else if(spanPriceClick){
    return (
        <FormPriceFooter onSubmit={onSubmitPrice} onDoubleClick={()=>setSpanPriceClick(false)}>
            <Input value={newPrice} name="change-price" onChange={onChangeEvent}></Input>
        </FormPriceFooter>
    )
   }
  
}

export default ProductChangeDetails