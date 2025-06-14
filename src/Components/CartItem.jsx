import React, { useContext } from 'react'
import '../AllCss/cartItem.css'
import { shopContextProvider } from '../Context/ShopContext'
import removeIcon from '../assets/remove.webp'

const CartItem = () => {

    const { all_product, cartItem, removeFromCart, getTotalAmount } = useContext(shopContextProvider)

    return (
        <div className='cartItem'>
            <div className="formatMain">
                <p>Products</p>
                <p>Title</p>
                <p>Prices</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItem[e.id] > 0) {
                    return <div>
                        <div className="formatMain format">
                            <img src={e.image} alt="" className="productIcon" height="150px" width="100%" />
                            <p>{e.name}</p>
                            <p>${e.newPrice}</p>
                            <button className="quantity">{cartItem[e.id]}</button>
                            <p>{e.newPrice * cartItem[e.id]}</p>
                            <img className='removeIcon' src={removeIcon} alt="" onClick={() => removeFromCart(e.id)} />
                        </div>
                        <hr />
                    </div>
                }
                return null;
            })}
            <div className="itemDown">
                <div className="itemTotal">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartItemTotal">
                            <p>SubTotal</p>
                            <p>$ {getTotalAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartItemTotal">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartItemTotal">
                            <p>Total Amount</p>
                            <p>$ {getTotalAmount()}</p>
                        </div>
                    </div>
                    <button>PROCCED TO CHECKOUT</button>
                </div>
                <div className="promoCode">
                    <p>If You Have a Promo Code , Enter It Here</p>
                    <div className="promoBox">
                        <input type="text" placeholder="Enter Your Promo Code" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem