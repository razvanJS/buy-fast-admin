import { ItemContainer,BackgroundImage } from "./home-item-container-style"
import { useState } from "react"
import { ItemBody } from "./home-item-container-style"
import HomeItemBodyContainer from "../home-item-body-container/home-item-body.componet"

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

// // if(isRemoveXclick){

// //     return( 
// //     <ItemContainer>

// // <BackgroundImage  style={{backgroundImage:`url(${category.imageUrl})`}}></BackgroundImage>

// // <ItemBody>

// //  <form>
// //     <Input></Input>
// //  </form>
// //  <RemoveXdivRename onClick={()=>isRemoveXclick?setIsRemoveXclick(false):setIsRemoveXclick(true)}>&#10006;</RemoveXdivRename>
// // </ItemBody>

// //     </ItemContainer>)
// // }


// //  if(isImageDlbCliked){
// //     return(

// // <ItemContainer>

// // <BackgroundImage onDoubleClick={ ()=>isImageDlbCliked?setIsImageDblCkicked(false):setIsImageDblCkicked(true) 
// // } style={{backgroundImage:`url(${category.imageUrl})`}}></BackgroundImage>

// // <ItemBody>

// // <ChangeImageCategory setIsRenameBtnClick={setIsRenameBtnClick} setIsImageDblCkicked={setIsImageDblCkicked} categoryName={category.title}/>

// // </ItemBody>

// // </ItemContainer>
// //     )
// //  }



// // return(
// // <ItemContainer>

           
// // <BackgroundImage onDoubleClick={ ()=>isImageDlbCliked?setIsImageDblCkicked(false):setIsImageDblCkicked(true) 
// // } style={{backgroundImage:`url(${category.imageUrl})`}}></BackgroundImage>


// // <ItemBody>
    
// // {!isRenameBtnClick?<>

// //  <RemoveXdivRename onClick={()=>isRemoveXclick?setIsRemoveXclick(false):setIsRemoveXclick(true)}>&#10006;</RemoveXdivRename>
// // <h2 >{category.title.toUpperCase()}</h2>
// // <Button onClick={()=>setIsRenameBtnClick(true)}>Rename</Button>



// // </>:
 
// // <RenameComponet setIsImageDblCkicked={setIsImageDblCkicked} 
// // setIsRenameBtnClick={setIsRenameBtnClick} 
// // categoryName={category.title}></RenameComponet>

// // }
// // </ItemBody>


// // </ItemContainer>
//     )
    }

export default HomeItemCotainer