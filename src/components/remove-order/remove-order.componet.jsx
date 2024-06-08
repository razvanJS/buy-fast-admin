
import { useSelector ,useDispatch} from "react-redux"
import { isRemoveBtnCliked } from "../../store/orders/orders-selectors"
import { removeBtnCliked } from "../../store/orders/orders-actions"
import { RemoveElement } from "../order-item/order-item.styled"
import { Paragraf } from "../order-item/order-item.styled"
import Button from "../button/button.component"
import { useNavigate } from "react-router"
const RemoveOrderComponent=({removeItemEvent})=>{
    const dispatch=useDispatch()
    const isRemoveBtnClicked=useSelector(isRemoveBtnCliked)
    const nav=useNavigate()
    const removeEvent=()=>{
        
      if(isRemoveBtnClicked){
        dispatch(removeBtnCliked(false))
      }  
     else return '';
    }
    return(
<RemoveElement>
<Paragraf>Are you certain that you wish to delete this order?</Paragraf>

<Button onClick={removeEvent}>NO</Button>
<Button onClick={()=>removeItemEvent()}>YES</Button>
   
</RemoveElement>
    )
}

export default RemoveOrderComponent

