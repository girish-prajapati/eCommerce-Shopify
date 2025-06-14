import React from 'react'
import '../AllCss/footer.css'
import logo from '../assets/logo.webp'
import instaImg from '../assets/instagram.png'
import faceImg from '../assets/facebook.png'
import whatImg from '../assets/whatsapp.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footerLogo">
                <img src={logo} alt="" height="70px" />
                <p>Shopify</p>
            </div>
            <ul className="footerLinks">
                <li>About</li>
                <li>Products</li>
                <li>Offices</li>
                <li>Company</li>
                <li>Contact</li>
            </ul>
            <div className="footerContainer">
                <div className="footerSocial">
                    <img src={instaImg} alt="" height="30px" />
                </div>
                <div className="footerSocial">
                    <img src={faceImg} alt="" height="30px" />
                </div>
                <div className="footerSocial">
                    <img src={whatImg} alt="" height="30px" />
                </div>
            </div>
            <div className="footerCopyRight">
                <hr />
                <p>Copyright @ 2025 - All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer