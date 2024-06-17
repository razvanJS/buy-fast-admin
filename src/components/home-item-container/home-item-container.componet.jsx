import { ItemContainer,BackgroundImage,ItemBody } from "./home-item-container-style"
import Button from "../button/button.component"

import { useState } from "react"

import RenameComponet from "../category-rename/caregory-rename.componet"
import { RemoveXdiv } from "../category-rename/category-rename.styles"
const HomeItemCotainer=({category})=>

    {
 const [isRenameBtnClick,setIsRenameBtnClick]=useState(false)
 

return(
<ItemContainer>

           
<BackgroundImage style={{backgroundImage:`url(${category.imageUrl})`}}></BackgroundImage>
<ItemBody>
{!isRenameBtnClick?<>

 <RemoveXdiv>&#10006;</RemoveXdiv>
<h2 >{category.title.toUpperCase()}</h2>
<Button onClick={()=>setIsRenameBtnClick(true)}>Rename</Button>



</>:
<RenameComponet setIsRenameBtnClick={setIsRenameBtnClick} categoryName={category.title}></RenameComponet>

}
</ItemBody>


</ItemContainer>
)
    }

export default HomeItemCotainer