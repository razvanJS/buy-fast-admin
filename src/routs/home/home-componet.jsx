import { useSelector } from "react-redux"
import { categoriesDirectoryDataSelect ,categoriesDirectoryLength,categoriesLoading} from "../../store/categoriesDirectory/categories-directory-selectors"
import { DirectoryContainer} from "./home.styles"
import HomeItemCotainer from "../../components/home-item-container/home-item-container.componet"
import HomeItemAddCategory from "../../components/home-item-add-category/home-item-add-category"
import Spinner from "../../components/spinner/spinner.componet"

const Home=()=>{
 const directoryData=useSelector(categoriesDirectoryDataSelect)
 const dataLength=useSelector(categoriesDirectoryLength)
 const categoriesLoad=useSelector(categoriesLoading)

console.log(categoriesLoad)
// if(categoriesLoad===true){
//     <Spinner/>
// }
// else{
// return (
//     <DirectoryContainer>
//         {directoryData.map(category=><HomeItemCotainer key={category.id} category={category}/>)}
//         {dataLength===5?<HomeItemAddCategory ></HomeItemAddCategory>:''}
          
//     </DirectoryContainer>
// )

// }
if(categoriesLoad===true){
   return  <Spinner/>
}
else{
     return (
            <DirectoryContainer>
                {directoryData.map(category=><HomeItemCotainer key={category.id} category={category}/>)}
                {dataLength===5?<HomeItemAddCategory ></HomeItemAddCategory>:''}
                  
            </DirectoryContainer>
        )
        
       
}


}

export default Home