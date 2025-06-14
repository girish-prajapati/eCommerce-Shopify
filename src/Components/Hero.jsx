import React from 'react'
import '../AllCss/hero.css'

import handIcon from '../assets/hand_icon.png'
import arrowIcon from '../assets/arrow_icon.png'
import menImg from '../assets/men.webp'

const Hero = () => {
    return (
        <>
            <div className="hero">
                <div className="heroLeft">
                    <h2>Best Deal's ! Best Prices !</h2>
                    <div className="handIcon">
                        <p>New</p>
                        <img src={handIcon} alt="" />
                    </div>
                    <p>Collections</p>
                    <p>For Everyone</p>
                    <div className="latestBtn">
                        <div>Latest Collections</div>
                        <img src={arrowIcon} alt="" />
                    </div>
                </div>
                <div className="heroRight">
                    <img src={menImg} alt="" height="600px" />
                </div>
            </div>
        </>
    )
}

export default Hero