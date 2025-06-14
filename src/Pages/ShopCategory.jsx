import React, { useContext } from 'react'
import '../AllCss/shopCategory.css'
import { shopContextProvider } from '../Context/ShopContext'
import dropdown from '../assets/dropdown_icon.png'
import Item from '../Components/Item'

const ShopCategory = (props) => {
  const { all_product } = useContext(shopContextProvider)
  return (
    <div className='shopCategory'>
      <img className='banner' src={props.banner} alt="" />
      <div className="indexSort">
        <p>
          <span>Showing 1 - 12 </span>Out Off 36 Products
        </p>
        <div className="sort">
          Sort By <img src={dropdown} alt="" />
        </div>
      </div>
      <div className="products">
        {all_product.map((item, index) => {
          if (props.category === item.category) {
            return <Item key={index} id={item.id} name={item.name} image={item.image} newPrice={item.newPrice} oldPrice={item.oldPrice} />
          }else{
            return null
          }
        })}
      </div>
      <div className="loadMore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory