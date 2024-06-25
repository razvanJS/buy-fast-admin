import { ItemContainer,BackgroundImage } from "./home-item-container-style"
import { useState } from "react"

import HomeItemBodyContainer from "../home-item-body-container/home-item-body.componet"


const HomeItemCotainer=({category})=>

    {
 const [isRenameBtnClick,setIsRenameBtnClick]=useState(false)
 const [isImageDlbCliked,setIsImageDblCkicked]=useState(false)
 const [isRemoveXclick,setIsRemoveXclick]=useState(false)
 const [isItemBodyClick,setIsItemBodyClick]=useState(false)

const backgroundImageDblClickEvent=()=>{
    return setIsImageDblCkicked(true)
}

return (

    <ItemContainer>
    
        <BackgroundImage 
         onDoubleClick={backgroundImageDblClickEvent} 
         style={{backgroundImage:`url(${category.imageUrl})`}}>

         </BackgroundImage>
           
         <HomeItemBodyContainer 
         category={category} 
         isRemoveXclick={isRemoveXclick}
         setIsRemoveXclick={setIsRemoveXclick}
         isImageDlbCliked={isImageDlbCliked}
         setIsImageDblCkicked={setIsImageDblCkicked}
         isRenameBtnClick={isRenameBtnClick}
         setIsRenameBtnClick={setIsRenameBtnClick}
         isItemBodyClick={isItemBodyClick}
         setIsItemBodyClick={setIsItemBodyClick}
        
         
         ></HomeItemBodyContainer>
        
    </ItemContainer>
)

}
    


export default HomeItemCotainer