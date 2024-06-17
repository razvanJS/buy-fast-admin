import { ItemContainer,BackgroundImage,ItemBody } from "./home-item-container-style"
import Button from "../button/button.component"
import { useState } from "react"
import RenameComponet from "../category-rename/caregory-rename.componet"
import { RemoveXdiv } from "../category-rename/category-rename.styles"
import ChangeImageCategory from "../category-change-image/category-change-image.componet"



const HomeItemCotainer=({category})=>

    {
 const [isRenameBtnClick,setIsRenameBtnClick]=useState(false)
 const [isImageDlbCliked,setIsImageDblCkicked]=useState(false)


 if(isImageDlbCliked){
    return(

<ItemContainer>

<BackgroundImage onDoubleClick={ ()=>isImageDlbCliked?setIsImageDblCkicked(false):setIsImageDblCkicked(true) 
} style={{backgroundImage:`url(${category.imageUrl})`}}></BackgroundImage>

<ItemBody>

<ChangeImageCategory setIsRenameBtnClick={setIsRenameBtnClick} setIsImageDblCkicked={setIsImageDblCkicked} categoryName={category.title}/>

</ItemBody>

</ItemContainer>
    )
 }



return(
<ItemContainer>

           
<BackgroundImage onDoubleClick={ ()=>isImageDlbCliked?setIsImageDblCkicked(false):setIsImageDblCkicked(true) 
} style={{backgroundImage:`url(${category.imageUrl})`}}></BackgroundImage>


<ItemBody>
    
{!isRenameBtnClick?<>

 <RemoveXdiv>&#10006;</RemoveXdiv>
<h2 >{category.title.toUpperCase()}</h2>
<Button onClick={()=>setIsRenameBtnClick(true)}>Rename</Button>



</>:
 
<RenameComponet setIsImageDblCkicked={setIsImageDblCkicked} 
setIsRenameBtnClick={setIsRenameBtnClick} 
categoryName={category.title}></RenameComponet>

}
</ItemBody>


</ItemContainer>
)
    }

export default HomeItemCotainer