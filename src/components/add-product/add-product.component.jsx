
import { ProductCarTConatiner } from "../product-index-item/product-item.styles"
import Button from "../button/button.component"
import AddNewProductForm from "../add-new-product-form/add-new-product-form.componet"
import { useState } from "react"
const ItemAddProduct=({item})=>{
    const [newProductBtnClicked,setNewProductBtnClicket]=useState(false)

    const newBtnEvent=()=>{
        return setNewProductBtnClicket(true)
    }
     return (
         <ProductCarTConatiner>
            
         <img src='https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?cs=srgb&dl=pexels-bohlemedia-1884581.jpg&fm=jpg'></img>
         {!newProductBtnClicked? <Button onClick={newBtnEvent} typebutton='inverted'> New Product</Button> :<AddNewProductForm item={item} newProductBtnClicked={newProductBtnClicked} setNewProductBtnClicket={setNewProductBtnClicket}></AddNewProductForm>}
        
      
 
     </ProductCarTConatiner>
     )
 }
 
 export default ItemAddProduct