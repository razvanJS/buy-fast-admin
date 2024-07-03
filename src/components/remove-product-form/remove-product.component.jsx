import Button from "../button/button.component";
import InputForm from "../input-form/input-form.component";
import { RemoveElement} from "../order-item/order-item.styled";
import { deleteDocFromDb } from "../../utils/firebase.utils";

const RemoveProduct=({xCLickSet})=>{

return (
    
    <RemoveElement>
<p>Are you certain that you wish to delete this product?</p>

<Button onClick={()=>{
    
}}>Yes</Button>
<Button onClick={()=>xCLickSet(false)}>No</Button>
   
</RemoveElement>
)

}

export default RemoveProduct