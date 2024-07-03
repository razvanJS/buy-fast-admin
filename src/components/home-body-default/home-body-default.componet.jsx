import { RemoveXdivRename } from "../category-rename/category-rename.styles"
import Button from "../button/button.component"

import { useNavigate } from "react-router"

const HomeItemBodyDefault=({category,isRemoveXclick,setIsRemoveXclick,setIsRenameBtnClick})=>{
  
     const nav=useNavigate()

    const removeXdivEvent=(e)=>{
        e.stopPropagation()
        isRemoveXclick?setIsRemoveXclick(false):setIsRemoveXclick(true)
    }
    const btnEvent=(e)=>{
        e.stopPropagation()
      return  setIsRenameBtnClick(true)
    }
    const tilteClickEvent=(e)=>{
        e.stopPropagation()
        nav(`/${category.title}`)
    }

    return(
        <>
    <RemoveXdivRename onClick={removeXdivEvent}>&#10006;</RemoveXdivRename>
    <h2 onClick={tilteClickEvent}>{category.title.toUpperCase()}</h2>
    <Button onClick={btnEvent}>Rename</Button>
    </>
    )
}

export default HomeItemBodyDefault