import React, { createContext, useState } from 'react'
import all_product from '../assets/all_product'

export const shopContextProvider = createContext(null)
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0
    }
    return cart
}

const ShopContext = (props) => {
    const [cartItem, setCartItem] = useState(getDefaultCart())
    const addToCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        console.log(cartItem)
    }
    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item))
                totalAmount += itemInfo.newPrice * cartItem[item]
            }
        }
        return totalAmount
    }

    const getTotalItems = () => {
        let totalItems = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                totalItems+=cartItem[item]
            }
        }
        return totalItems
    }

    const contextValue = { all_product, cartItem, addToCart, removeFromCart, getTotalAmount, getTotalItems }

    return (
        <shopContextProvider.Provider value={contextValue}>
            {props.children}
        </shopContextProvider.Provider>

    )
}

export default ShopContext