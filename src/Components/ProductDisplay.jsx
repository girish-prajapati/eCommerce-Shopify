import React, { useContext } from 'react'
import '../AllCss/productDisplay.css'
import starIcon from '../assets/star_icon.png'
import halfStarIcon from '../assets/half_star_icon.png'
import { shopContextProvider } from '../Context/ShopContext'

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(shopContextProvider)

    return (
        <div className='productDisplay'>
            <div className="productDisplayLeft">
                <div className="imgList">
                    <img src={product.image} alt="" height="150px" />
                    <img src={product.image} alt="" height="150px" />
                    <img src={product.image} alt="" height="150px" />
                    <img src={product.image} alt="" height="150px" />
                </div>
                <div className="img">
                    <img src={product.image} alt="" className="mainImg" />
                </div>
            </div>
            <div className="productDisplayRight">
                <h1>{product.name}</h1>
                <div className="rightStar">
                    <img src={starIcon} alt="" height="20px" />
                    <img src={starIcon} alt="" height="20px" />
                    <img src={starIcon} alt="" height="20px" />
                    <img src={starIcon} alt="" height="20px" />
                    <img src={halfStarIcon} alt="" height="20px" />
                    <p>(130)</p>
                </div>
                <div className="rightPrice">
                    <div className="priceNew">
                        ${product.newPrice}
                    </div>
                    <div className="priceOld">
                        ${product.oldPrice}
                    </div>
                </div>
                <div className="rightDisc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam possimus unde debitis, vel voluptatum laboriosam error assumenda, illo dolore aspernatur dicta a? Maiores doloremque voluptate facere recusandae porro ea?
                </div>
                <div className="rightSize">
                    <h1>Select Size</h1>
                    <div className="rightSizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}} >ADD TO CART</button>
                <div className="rightCategory">
                    <span>Category : <span>Women , T-Shirt , Crop-Top</span></span>
                </div>
                <div className="rightCategory">
                    <span>Tags : <span>Modern , Latest , Trend-Shorts</span></span>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay