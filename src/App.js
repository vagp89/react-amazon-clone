
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header.js'
import Home from './components/Home.js'
import Checkout from './components/Checkout.js'

function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
        <Switch>
          <Route path="/checkout">
            <Checkout/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>

        </Switch>

      </div>
   </Router>
  );
}

export default App;
