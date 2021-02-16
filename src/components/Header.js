import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Header = () => {
  return (
    <div className='header'>
      <Link to="/">
        <img className='header_logo' src="./amazon.png"/>
      </Link>
        <div className='header_search'>
        <input className = 'header_searchInput' type="text" />
        <SearchIcon className='header_searchIcon'/>
      </div>
      <div className='header_nav'>
        <div className='header_option'>
          <span className='header_optionLineOne'>Hello guest</span>
          <span className='header_optionLineTwo'>Sign In</span>
        </div>
        <div className='header_option'>
          <span className='header_optionLineOne'>Returns</span>
          <span className='header_optionLineTwo'>& Orders</span>
        </div>
        <div className='header_option'>
          <span className='header_optionLineOne'>Your</span>
          <span className='header_optionLineTwo'>Prime</span>
        </div>
        <Link to="/checkout">
          <div className='header_option'>
            <AddShoppingCartIcon/>
          </div>
        </Link>
        <Link to="/checkout">
          <div className='header_optionBasket'>
            <spam className='optionBasket'>0</spam>
          </div>
         </Link>
      </div>
    </div>
  )
}

export default Header;
