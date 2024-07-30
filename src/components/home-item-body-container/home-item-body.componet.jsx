
import { RemoveXdivRename } from "../category-rename/category-rename.styles"
import ChangeImageCategory from "../category-change-image/category-change-image.componet"
import RenameComponet from "../category-rename/caregory-rename.componet"
import HomeItemBodyDefault from "../home-body-default/home-body-default.componet"
import RemoveCategoryElement from "../remove-category/remove-category.componet"
import ChangeDirectoryCategoryOrder from "../change-category-directory-order/change-category-directory-order.componet"
import { NewItemBody } from "../remove-category/remove-category.styled"
import { ItemBody } from "../home-item-container/home-item-container-style"


const HomeItemBodyContainer=(
    {
  category,
  isRemoveXclick,
  setIsRemoveXclick,
  isImageDlbCliked,
  setIsImageDblCkicked,
  isRenameBtnClick,
  setIsRenameBtnClick,
  isItemBodyClick,
  setIsItemBodyClick,
 
})=>{



 if(isRemoveXclick){

    
    return  ( 

   <NewItemBody>

 <RemoveCategoryElement setIsRemoveXclick={setIsRemoveXclick} isRemoveXclick={isRemoveXclick} categoryName={category.title}></RemoveCategoryElement>
<RemoveXdivRename onClick={()=>isRemoveXclick?setIsRemoveXclick(false):setIsRemoveXclick(true)}>&#10006;</RemoveXdivRename>
</NewItemBody>
   
       )
  }
 

  else if(isImageDlbCliked){
   
    return(
    <ItemBody>

   <ChangeImageCategory 
   setIsRenameBtnClick={setIsRenameBtnClick}
    setIsImageDblCkicked={setIsImageDblCkicked}
     categoryName={category.title}/>

    </ItemBody>
    )
  }

 else if(isRenameBtnClick){
    return (
    <ItemBody>

  
 
  <RenameComponet 
  setIsImageDblCkicked={setIsImageDblCkicked} 
  setIsRenameBtnClick={setIsRenameBtnClick} 
 categoryName={category.title}>

    </RenameComponet>


     </ItemBody>
    )
  }

  else if(isItemBodyClick){
    return <ChangeDirectoryCategoryOrder setIsItemBodyClick={setIsItemBodyClick} category={category}></ChangeDirectoryCategoryOrder>
  }

 return (

    <ItemBody onClick={()=>{
      
      setIsItemBodyClick(true)} }
       
      >
      
<HomeItemBodyDefault 

 category={category}
  isRemoveXclick={isRemoveXclick} 
  setIsRemoveXclick={setIsRemoveXclick}
   setIsRenameBtnClick={setIsRenameBtnClick}>

   </HomeItemBodyDefault>
</ItemBody>
  
 )

  
}
export default HomeItemBodyContainer