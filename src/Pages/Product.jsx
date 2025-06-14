import React, { useContext } from 'react'
import { shopContextProvider } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import BredCrums from '../Components/BredCrums'
import ProductDisplay from '../Components/ProductDisplay'
import Description from '../Components/Description'
import RelatedProduct from '../Components/RelatedProduct'

const Product = () => {
  const { all_product } = useContext(shopContextProvider)
  const { productId } = useParams()
  const product = all_product.find((e) => e.id === parseInt(productId))
  return (
    <div>
      <BredCrums product={product} />
      <ProductDisplay product={product} />
      <Description/>
      <RelatedProduct/>
    </div>
  )
}

export default Product