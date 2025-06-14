import React from 'react'
import '../AllCss/popular.css'

import data_product from '../assets/data'
import Item from './Item'

const Popular = () => {
    return (
        <div className='popular'>
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popularItem">
                {data_product.map((item,index)=>{
                    return <Item key={index} id={item.id} image={item.image} name={item.name} newPrice={item.newPrice} oldPrice={item.oldPrice} />
                })}
            </div>
        </div>
    )
}

export default Popular