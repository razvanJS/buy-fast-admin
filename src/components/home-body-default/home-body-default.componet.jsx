import { RemoveXdivRename } from "../category-rename/category-rename.styles"
import Button from "../button/button.component"

import { useNavigate } from "react-router"
import { currentUserSelect } from "../../store/admin-user/admin.selctors"
import { useSelector } from "react-redux"

const HomeItemBodyDefault=({category,isRemoveXclick,setIsRemoveXclick,setIsRenameBtnClick})=>{
  
     const nav=useNavigate()
     const currentUser=useSelector(currentUserSelect)

    const removeXdivEvent=(e)=>{
        e.stopPropagation()
        isRemoveXclick?setIsRemoveXclick(false):setIsRemoveXclick(true)
    }
    const btnEvent=(e)=>{
        e.stopPropagation()
        if(!currentUser)return alert('Only the administrator can rename an item on this site,For testing, you can use email: admin@gmail.com password: admin1234');

      return  setIsRenameBtnClick(true)
    }
    const tilteClickEvent=(e)=>{
        e.stopPropagation()
        nav(`/${category.title}`)
    }

    return(
        <>
        {currentUser?<RemoveXdivRename onClick={removeXdivEvent}>&#10006;</RemoveXdivRename>:''}
    
    <h2 onClick={tilteClickEvent}>{category.title.toUpperCase()}</h2>
    
    <Button onClick={btnEvent}>Rename</Button>
    </>
    )
}

export default HomeItemBodyDefault