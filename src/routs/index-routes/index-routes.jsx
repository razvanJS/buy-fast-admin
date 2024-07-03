import { Route, Routes } from "react-router"
import ProductsComponent from "../../components/products/products.componet"

const IndexRoutes=()=>{


    return (
        <Routes>
            <Route path=":product" element={<ProductsComponent/>}></Route>
        </Routes>
    )
}

export default IndexRoutes