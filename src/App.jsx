import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer'
import menBanner from './assets/banner.jpg'
import womenBanner from './assets/women_banner.avif'
import kidsBanner from './assets/kids_banner.jpg'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={menBanner} category="men's" />} />
          <Route path='/womens' element={<ShopCategory banner={womenBanner} category="women's" />} />
          <Route path='/kids' element={<ShopCategory banner={kidsBanner} category="kids" />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App