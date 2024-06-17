import { useSelector } from "react-redux"
import { categoriesDirectoryDataSelect ,categoriesDirectoryLength} from "../../store/categoriesDirectory/categories-directory-selectors"
import { DirectoryContainer} from "./home.styles"
import HomeItemCotainer from "../../components/home-item-container/home-item-container.componet"
import HomeItemAddCategory from "../../components/home-item-add-category/home-item-add-category"
const Home=()=>{
 const directoryData=useSelector(categoriesDirectoryDataSelect)
 const dataLength=useSelector(categoriesDirectoryLength)
 console.log(directoryData,dataLength)

return (
    <DirectoryContainer>
        {directoryData.map(category=><HomeItemCotainer key={category.id} category={category}/>)}
        {dataLength===5?<HomeItemAddCategory ></HomeItemAddCategory>:''}
          
    </DirectoryContainer>
)


}

export default Home