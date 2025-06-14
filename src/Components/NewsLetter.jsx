import React from 'react'
import '../AllCss/newLetter.css'


const NewsLetter = () => {
  return (
    <div className='newsLetter'>
        <h1>Get Exclusive Offer's On Your Email</h1>
        <p>Subscribe To Our NewsLetter And Stay Updated</p>
        <div>
            <input type="email" placeholder="Enter Your Email" />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter