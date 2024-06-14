import { ItemContainer,BackgroundImage,ItemBody } from "./home-item-container-style"
import Button from "../button/button.component"
import { RemoveBtn,RemoveBtnDiv } from "../order-item/order-item.styled"
import { useState } from "react"
import { Input } from "../input-form/input-form.styles"
const HomeItemCotainer=({category})=>

    {
 const [isRenameBtnClick,setIsRenameBtnClick]=useState(false)
 const[inputRenameValue,setInputRenameValue]=useState('')

return(
<ItemContainer>

           
<BackgroundImage style={{backgroundImage:`url(${category.imageUrl})`}}></BackgroundImage>
<ItemBody onDoubleClick={()=>{setIsRenameBtnClick(false)}}>
{!isRenameBtnClick?<>

 
<h2 >{category.title.toUpperCase()}</h2>
<Button onClick={()=>setIsRenameBtnClick(true)}>Rename</Button>


</>:
<>
    <form onSubmit={(event)=>{
        event.preventDefault()
        console.log(inputRenameValue)

    }}>
         <Input type='text' name="rename-input" value={inputRenameValue.toLocaleUpperCase()} onChange={(e)=>{
        
          setInputRenameValue(e.target.value)
         }}></Input><br/>
        <Button type='submit'>New Name</Button>
    </form>
</>

}
</ItemBody>


</ItemContainer>
)
    }

export default HomeItemCotainer