import React, { useContext, useState } from 'react'
import '../AllCss/navbar.css'

import logo from '../assets/logo.webp'
import cartIcon from '../assets/cart_icon.png'
import { NavLink } from 'react-router-dom'
import { shopContextProvider } from '../Context/ShopContext'

const Navbar = () => {

    const [menu, setMenu]=useState("home")
    const {getTotalItems}=useContext(shopContextProvider)

  return (
    <div className="navbar">
        <div className="navLogo">
            <img src={logo} alt=""/>
            <p>Shopify</p>
        </div>
        <ul className="navMenu">
            <li onClick={()=>{setMenu("home")}}><NavLink style={{textDecoration:"none", color:"#626262"}} to="/">HOME</NavLink>{menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><NavLink style={{textDecoration:"none", color:"#626262"}} to="/mens">MEN'S</NavLink>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><NavLink style={{textDecoration:"none", color:"#626262"}} to="/womens">WOMEN'S</NavLink>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><NavLink style={{textDecoration:"none", color:"#626262"}} to="/kids">KIDS</NavLink>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="loginCart">
            <NavLink to="/login"><button>Login</button></NavLink>
            <NavLink to="/cart"><img src={cartIcon} alt="" /></NavLink>
            <div className="cartCount">{getTotalItems()}</div>
        </div>
    </div>
  )
}

export default Navbar

