import { RemoveXdivRename } from "../category-rename/category-rename.styles"
import Button from "../button/button.component"

const HomeItemBodyDefault=({category,isRemoveXclick,setIsRemoveXclick,setIsRenameBtnClick})=>{

    const removeXdivEvent=(e)=>{
        e.stopPropagation()
        isRemoveXclick?setIsRemoveXclick(false):setIsRemoveXclick(true)
    }
    const btnEvent=(e)=>{
        e.stopPropagation()
      return  setIsRenameBtnClick(true)
    }

    return(
        <>
    <RemoveXdivRename onClick={removeXdivEvent}>&#10006;</RemoveXdivRename>
    <h2 onClick={(e)=>e.stopPropagation()}>{category.title.toUpperCase()}</h2>
    <Button onClick={btnEvent}>Rename</Button>
    </>
    )
}

export default HomeItemBodyDefault