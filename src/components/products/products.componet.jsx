
import { useParams } from "react-router"

import { useSelector } from "react-redux"
import { ProductsContainer,ProductsTitle } from "./products.styles"

import { productsDataSelect } from "../../store/products/products-selectors"
import { useEffect, useState } from "react"
import ItemProductIndex from "../product-index-item/product-item.component"
import ItemAddProduct from "../add-product/add-product.component"

const ProductsComponent=()=>{
const {product}=useParams()

const dataProducts=useSelector(productsDataSelect)
   const [productItem,setProductItem]=useState({})

  
   useEffect(()=>{
      const awaitForData=async ()=>{
        const products=await dataProducts
        setProductItem(products)

       
      }
      awaitForData()
    
   },[product,dataProducts])

 if(!productItem[0])return

const productItemFilter=productItem.filter(value=>value.title===product)[0]

    return (
        <>
        <ProductsTitle>{productItemFilter.title.toLocaleUpperCase()}</ProductsTitle>
        <br></br>
        <ProductsContainer>
            {productItemFilter.items.map(item=><ItemProductIndex key={item.id} item={item}/>)}
             <ItemAddProduct></ItemAddProduct>
          
        </ProductsContainer>
        </>
    )

}





export default ProductsComponent

