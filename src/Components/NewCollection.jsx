import React from 'react'
import '../AllCss/newCollection.css'

import new_collections from '../assets/newcollections'
import Item from './Item'

const NewCollection = () => {
  return (
    <div className='newCollection'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collection">
            {new_collections.map((item,index)=>{
                return <Item key={index} id={item.id} name={item.name} image={item.image} newPrice={item.newPrice} oldPrice={item.oldPrice} />
            })}
        </div>
    </div>
  )
}

export default NewCollection