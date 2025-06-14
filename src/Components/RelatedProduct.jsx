import React from 'react'
import '../AllCss/relatedProduct.css'
import Item from './Item'
import data_product from '../assets/data'

const RelatedProduct = () => {
  return (
    <div className='relatedProduct'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedItem">
            {data_product.map((item,index)=>{
                return <Item key={index} id={item.id} name={item.name} image={item.image} newPrice={item.newPrice} oldPrice={item.oldPrice} />
            })}
        </div>
    </div>
  )
}

export default RelatedProduct