import React from 'react'
import '../AllCss/item.css'
import { NavLink } from 'react-router-dom'


const Item = (props) => {
  return (
    <div className="item">
        <NavLink to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></NavLink>
        <p>{props.name}</p>
        <div className="itemPrices">
            <div className="newPrice">
                ${props.newPrice}
            </div>
            <div className="oldPrice">
                ${props.oldPrice}
            </div>
        </div>
    </div>
  )
}

export default Item