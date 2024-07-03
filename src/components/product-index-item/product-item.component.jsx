import { ProductCarTConatiner,ProductFooter,SpanName,SpanPrice } from "./product-item.styles"
import Button from "../button/button.component"
import { RemoveXdivRename } from "../category-rename/category-rename.styles"
import RemoveProduct from "../remove-product-form/remove-product.component"
import { useState } from "react"
const ItemProductIndex=({item})=>{
    const[xCLick,xCLickSet]=useState(false)

   const{imageUrl,name,price}=item
   const xEvent=()=>!xCLick?xCLickSet(true):xCLickSet(false)
   

    return (
      
        <ProductCarTConatiner>
            <RemoveXdivRename onClick={xEvent}>&#x2715;</RemoveXdivRename>
        <img src={imageUrl} alt={name}></img>
        <ProductFooter>
         <SpanName>{name}</SpanName>    
        <SpanPrice>{price}</SpanPrice>
        </ProductFooter>
          {!xCLick?<Button  typebutton='inverted'>Change Image</Button>:<RemoveProduct xCLickSet={xCLickSet}/>}


    </ProductCarTConatiner>
    )
}

export default ItemProductIndex