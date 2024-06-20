import { ItemContainer,BackgroundImage } from "./home-item-container-style"
import { useState } from "react"

import HomeItemBodyContainer from "../home-item-body-container/home-item-body.componet"
import { useSelector } from "react-redux"
import { categoriesLoading } from "../../store/categoriesDirectory/categories-directory-selectors"
import Spinner from "../spinner/spinner.componet"

const HomeItemCotainer=({category})=>

    {
 const [isRenameBtnClick,setIsRenameBtnClick]=useState(false)
 const [isImageDlbCliked,setIsImageDblCkicked]=useState(false)
 const [isRemoveXclick,setIsRemoveXclick]=useState(false)



 
return (

    <ItemContainer>
        <BackgroundImage onDoubleClick={ ()=>isImageDlbCliked?setIsImageDblCkicked(false):setIsImageDblCkicked(true) } 
         style={{backgroundImage:`url(${category.imageUrl})`}}></BackgroundImage>
         <HomeItemBodyContainer 
         category={category} 
         isRemoveXclick={isRemoveXclick}
         setIsRemoveXclick={setIsRemoveXclick}
         isImageDlbCliked={isImageDlbCliked}
         setIsImageDblCkicked={setIsImageDblCkicked}
         isRenameBtnClick={isRenameBtnClick}
         setIsRenameBtnClick={setIsRenameBtnClick}
         
         ></HomeItemBodyContainer>
    </ItemContainer>
)

}
    


export default HomeItemCotainer