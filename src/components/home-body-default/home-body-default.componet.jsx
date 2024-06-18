import { RemoveXdivRename } from "../category-rename/category-rename.styles"
import Button from "../button/button.component"
const HomeItemBodyDefault=({category,isRemoveXclick,setIsRemoveXclick,setIsRenameBtnClick})=>{



    return(
        <>
    <RemoveXdivRename onClick={()=>isRemoveXclick?setIsRemoveXclick(false):setIsRemoveXclick(true)}>&#10006;</RemoveXdivRename>
    <h2 >{category.title.toUpperCase()}</h2>
    <Button onClick={()=>setIsRenameBtnClick(true)}>Rename</Button>
    </>
    )
}

export default HomeItemBodyDefault