import Button from "../button/button.component";
import InputForm from "../input-form/input-form.component";
import { RemoveElement} from "../order-item/order-item.styled";
import { deleteProduct } from "../../utils/firebase.utils";
import { useParams } from "react-router";
import { setRemoveProductStart } from "../../store/products/products-actions";
import { useDispatch } from "react-redux";

const RemoveProduct=({itemId, xCLickSet})=>{

    const {product}=useParams()
    const dispatch=useDispatch()

return (
    
    <RemoveElement>
<p>Are you certain that you wish to delete this product?</p>

<Button onClick={()=>{

  dispatch(setRemoveProductStart('categories',product,itemId))
}}>Yes</Button>
<Button onClick={()=>xCLickSet(false)}>No</Button>
   
</RemoveElement>
)

}

export default RemoveProduct