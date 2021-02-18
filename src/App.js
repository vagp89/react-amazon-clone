import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header.js'
import Home from './components/Home.js'
import Checkout from './components/Checkout.js'
import Login from './components/Login.js'
import { auth } from "./firebase";
import  { useStateValue } from "./StateProvider";


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
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
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
