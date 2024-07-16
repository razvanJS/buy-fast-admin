
import { useState } from "react"
import { Input } from "../input-form/input-form.styles"
import { ImageProductChange } from "./change-image-product.styles"
import { updateProductDetails } from "../../utils/firebase.utils"
import { useParams } from "react-router"
import { setChangeProductDetailsStart } from "../../store/products/products-actions"
import { useDispatch } from "react-redux"

const ChangeImageProduct=({item})=>{


   const [imageUrl,setImageUrl]=useState('')
   const {product}=useParams()
   const dispatch=useDispatch()

   const onChangeEvent=(e)=>{
      const imageUrlValue=e.target.value;
      setImageUrl(imageUrlValue)
      
   }
   
   const onSubmitEvent=(e)=>{
      e.preventDefault()
    const newItem={...item}
    newItem.imageUrl=imageUrl
   
     dispatch(setChangeProductDetailsStart('categories',product,item.id,newItem))

    
 


   }
    return(
        <ImageProductChange>
             
        <form onSubmit={onSubmitEvent}>
      
        <Input type='link' name="change-image-input" value={imageUrl} onChange={onChangeEvent}></Input><br/>
         </form>
              
              </ImageProductChange>
    )
}

export default ChangeImageProduct