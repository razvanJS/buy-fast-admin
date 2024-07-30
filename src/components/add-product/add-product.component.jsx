
import { ProductCarTConatiner } from "../product-index-item/product-item.styles"
import Button from "../button/button.component"
import AddNewProductForm from "../add-new-product-form/add-new-product-form.componet"
import { useState } from "react"
import { currentUserSelect } from "../../store/admin-user/admin.selctors"
import { useSelector } from "react-redux"

const ItemAddProduct=({item})=>{
    const [newProductBtnClicked,setNewProductBtnClicket]=useState(false)
    const currentUser=useSelector(currentUserSelect)
    const newBtnEvent=()=>{
        if(!currentUser)return alert(`Only the administrator can add a new item,For testing, you can use email: admin@gmail.com password: admin1234`);
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