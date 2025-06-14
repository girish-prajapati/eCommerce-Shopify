import React from 'react'
import '../AllCss/offer.css'

import exclusiveImg from '../assets/exclu.webp'

const Offer = () => {
  return (
    <div className='offer'>
        <div className="offerLeft">
            <h1>Exclusive</h1>
            <h1>Offer's For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCT'S</p>
            <button>Check Now</button>
        </div>
        <div className="offerRight">
            <img src={exclusiveImg} alt="" />
        </div>
    </div>
  )
}

export default Offer