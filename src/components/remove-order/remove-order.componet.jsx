
import { RemoveElement } from "../order-item/order-item.styled"
import { Paragraf } from "../order-item/order-item.styled"
import Button from "../button/button.component"


const RemoveOrderComponent=({removeItemEvent,isRemoveBtnClicked,setIsRemoveBtnClicked})=>{


    const removeEvent=()=>{
        
      if(isRemoveBtnClicked){
        setIsRemoveBtnClicked(false)
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

