import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header.js'
import Home from './components/Home.js'
import Checkout from './components/Checkout.js'
import Login from './components/Login.js'
import Orders from './components/Orders.js'
import Payment from './components/Payment.js'
import { auth } from "./firebase";
import  { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51IMyxVJdmac4EInlKAsmiYMckboHYcbdETQMjsgpTXiu6U2gpa70FGK11hjDoNgyZl3Nh1cFjP2gJi3Lz2V2WhrK00u4kdHUBQ');




function App() {
  const [ {},  dispatch] = useStateValue();
  useEffect(() => {
    //Will only run once the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>>', authUser);
      if (authUser) {
        //he user logged in / the user logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
       // The user is logged
       dispatch({
         type: 'SET_USER',
         user: null

       })
      }
    });
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/orders">
            <Orders/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/payment">
            <Header/>
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
   </Router>
  );
}

export default App;
