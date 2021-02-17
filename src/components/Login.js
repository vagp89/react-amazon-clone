import { useState } from 'react'
import './Login.css'
import { Link } from "react-router-dom"

const Login = () => {
  const [email, setemail] = useState('');
  return (
    <div className="login">
      <Link to='/'>
       <img className="login_logo" src="https://seguimiento.online/wp-content/uploads/2020/06/rastrear-pedido-amazon-seguimiento-de-paquetes-de-amazon-tutorial.png" alt=""/>
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form action="">
          <h5>Email or mobile phone number</h5>
          <input type="text"/>
          <h5>Password</h5>
          <input type="text"/>
          <button className="login_signInButtom"> Sign In</button>
        </form>
        <p>
          By creating an account, you agree to Amazon's clone
         <a className="logo_link" href="url"> Conditions of Use</a> and <a className="logo_link" href="url">Privacy Notice.</a>
        </p>

        <p>
          <a className="logo_link" href="url">‣Need help?</a>
        </p>
      </div>
      <div className="login_newRegister">
        <p className="login_newRegisterQuestion">⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼  New to Amazon?  ⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼</p>
       <button className="login_registerButton"> Create your Amazon Account</button>
      </div>

      <div className="login-inner">
      </div>
      <div className="login-inner-text">
        <p>
          <a className="logo_linkLast" href="url">Conditions of Use</a>
        </p>
        <p>
          <a className="logo_linkLast" href="url">Privacy Notice</a>
        </p>
        <p>
          <a className="logo_linkLast" href="url">Help</a>
        </p>
       </div>

        <p className="logo_lastWords">
          © 1996-2021, Amazon.com, Inc. or its affiliates
        </p>

    </div>
  )
}

export default Login
