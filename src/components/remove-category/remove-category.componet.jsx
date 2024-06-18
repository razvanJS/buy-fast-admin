import {CategoryElementDivRemove } from "./remove-category.styled"
import { Paragraf } from "../order-item/order-item.styled"
import Button from "../button/button.component"
const RemoveCategoryElement=()=>{



    return (
        <CategoryElementDivRemove>
<p>Are you certain that you wish to delete this category?</p>

 <Button >NO</Button>
<Button >YES</Button> 
   

        </CategoryElementDivRemove>
    )
}

export default RemoveCategoryElement