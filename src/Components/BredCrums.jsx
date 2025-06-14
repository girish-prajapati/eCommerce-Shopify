import React from 'react'
import '../AllCss/bredCrums.css'
import arrowIcon from '../assets/arrow_icon.png'

const BredCrums = (props) => {
    const { product } = props;
    return (
        <div className='bredCrums'>
            HOME <img src={arrowIcon} alt="" height="20px" /> 
            SHOP <img src={arrowIcon} alt="" height="20px" /> 
            {product.category} <img src={arrowIcon} alt="" height="20px" /> 
            {product.name}
        </div>
    )
}

export default BredCrums