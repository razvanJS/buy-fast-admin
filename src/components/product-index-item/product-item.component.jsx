import { ProductCarTConatiner,ProductFooter,SpanName,SpanPrice } from "./product-item.styles"
import Button from "../button/button.component"
import { RemoveXdivRename } from "../category-rename/category-rename.styles"
import RemoveProduct from "../remove-product/remove-product.component"
import { useState } from "react"

import ProductChangeDetails from "../product-change-details/product-change-details.componet"
import ChangeImageProduct from "../change-image-product/change-image-product.componet"
import { currentUserSelect } from "../../store/admin-user/admin.selctors"
import { useSelector } from "react-redux"

const ItemProductIndex=({item})=>{
    const[xCLick,xCLickSet]=useState(false)
    const [spanNameClick,setSpanNameClick]=useState(false)
    const [spanPriceClick,setSpanPriceClick]=useState(false)
    const [imageBtnClick,setImageBtnClick]=useState(false)
   
   const{imageUrl,name,price}=item
   const currentUser=useSelector(currentUserSelect)
   const xEvent=()=>{

    if(!imageBtnClick){
        return !xCLick?xCLickSet(true): xCLickSet(false) }

    else{
        setImageBtnClick(false)

    }     

     

}

const nameClickEvent=()=>setSpanNameClick(true)
const priceClickEvent=()=>setSpanPriceClick(true)
  
    return (
      
        <ProductCarTConatiner>
           {currentUser?<RemoveXdivRename onClick={xEvent}>&#x2715;</RemoveXdivRename>:''}
       
        <img src={imageUrl} alt={name}></img>
        <ProductFooter>
            {!spanNameClick?<SpanName onClick={nameClickEvent}>{name}</SpanName> :<>
            <ProductChangeDetails item={item} spanNameClick={spanNameClick} setSpanNameClick={setSpanNameClick}></ProductChangeDetails>
            </>}
            {!spanPriceClick?<SpanPrice onClick={priceClickEvent}>{price}</SpanPrice> :<>
            <ProductChangeDetails 
              item={item} 
              spanPriceClick={spanPriceClick} 
              setSpanPriceClick={setSpanPriceClick}
              nameValue={name}
              priceValue={price}
              
              ></ProductChangeDetails>
            </>}
        
        </ProductFooter>
          {!xCLick?
          !imageBtnClick?
          
           <Button onClick={()=>currentUser?setImageBtnClick(true):''} typebutton='inverted'>Change Image</Button>
           :<ChangeImageProduct item={item} imageBtnClick={imageBtnClick} setImageBtnClick={setImageBtnClick}/>:<RemoveProduct itemId={item.id} xCLickSet={xCLickSet}/>}
        
         
    </ProductCarTConatiner>
    )
}

export default ItemProductIndex