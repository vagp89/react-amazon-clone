import { useState } from 'react';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";


const Login = () => {
  const history = useHistory();
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = (e) => {
    e.preventDefault();
    //farebase fancy code here
    auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
          history.push('/')
        })
        .catch(error => alert(error.message))

  }
  const register = e => {
    e.preventDefault();
    //farebase fancy code here
    auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          //if succefully created a new user with email and password
          console.log(auth);
        })
        .catch(error => alert(error.message))
        if (auth) {
           history.push('/')
        }
  }

  return (
    <div className="login">
      <Link to='/'>
       <img className="login_logo" src="https://seguimiento.online/wp-content/uploads/2020/06/rastrear-pedido-amazon-seguimiento-de-paquetes-de-amazon-tutorial.png" alt=""/>
      </Link>
      <div className="login_container">

        <h1>Sign-in</h1>

        <form action="">

          <h5>Email or mobile phone number</h5>

          <input type="text" value={email} onChange={e => setemail(e.target.value)}/>

          <h5>Password</h5>

          <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

          <button  type='submit' onClick={signIn}
          className="login_signInButtom" > Sign In
          </button>

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

       <button onClick={register}
       className="login_registerButton"> Create your Amazon Account
       </button>

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
