import React from 'react'
import '../AllCss/loginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginSignup'>
      <div className="container">
        <h1>Sign Up</h1>
        <div className="fields">
          <input type="text" placeholder="Enter Your Name" />
          <input type="email" placeholder="Enter Your Email" />
          <input type="password" placeholder="Enter Your Password" />
          <button className='continue'>Continue</button>
        </div>
        <p className="login">
          Already Have An Account ? <span>Login Here</span>
        </p>
        <div className="agreeBtn">
          <input type="checkbox" name='' id='' />
          <p>By Continuing, I Agree to the Terms of use & Privecy Policy. </p>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default LoginSignup