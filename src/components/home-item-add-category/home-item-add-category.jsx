import { ItemContainer,BackgroundImage,ItemBody } from "../home-item-container/home-item-container-style"
import { useState } from "react"

import AddCategoryForm from "../add-category-form/add-category-directory-form.componet"
import { currentUserSelect } from "../../store/admin-user/admin.selctors"
import { useSelector } from "react-redux"
import { AddCategoryBtn } from "./home-item-add-category.styled"

const HomeItemAddCategory=()=>{
    
    const [isAddCategoryBtnClicked,setIsAddCategoryBtnClicked]=useState(false)
    const currentUser=useSelector(currentUserSelect)
    const btnAddCategoryEvent=()=>{
        if(!currentUser)return alert('Only the administrator can add a new category For testing, you can use email: admin@gmail.com password: admin1234."')
          return  setIsAddCategoryBtnClicked(true)
        }

    return(<ItemContainer>
            
           
        <BackgroundImage style={{backgroundImage:`url(https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?cs=srgb&dl=pexels-bohlemedia-1884581.jpg&fm=jpg)`}}></BackgroundImage>
        
         
        <ItemBody>
           <br/>
            {isAddCategoryBtnClicked?<>
               <AddCategoryForm 
                isAddCategoryBtnClicked={isAddCategoryBtnClicked}
                setIsAddCategoryBtnClicked={setIsAddCategoryBtnClicked}
                 
                 
                 ></AddCategoryForm>
            </>:<AddCategoryBtn onClick={btnAddCategoryEvent}>ADD CATEGORY</AddCategoryBtn>}
          
            
        </ItemBody>
        
        </ItemContainer>)
}


export default HomeItemAddCategory