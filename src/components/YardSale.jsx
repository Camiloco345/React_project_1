import React, {useState, useContext} from "react";
import '../styles/global.css';
import '../styles/YardSale.scss';
import MiniMenu from "../components/MiniMenu.jsx";
import Orders from '../containers/Orders.jsx'
import logo from '@logos/logo_yard_sale.svg'
import menuIcon from '@icons/icon_menu.svg'
import cart from '@icons/icon_shopping_cart.svg'
import AppContext from '../context/AppContext.js'

 


const YardSale = () => {

  const [toggle, setToggle] = useState(false);
  const [toggleOrder, setToggleOrder] = useState(false);
  const {state} = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle)
    
  } 

  return (
    <nav>
      <img src={menuIcon} alt="menu" className="menu" />

      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />

        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furniture</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            platzi@example.com
          </li>
          <li className="navbar-shopping-cart" onClick={()=>{setToggleOrder(!toggleOrder)}}>
            <img src={cart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null }
          </li>
        </ul>
      </div>
    
      {toggle && <MiniMenu />}
      {toggleOrder && <Orders />}
    </nav>
  );
};

export default YardSale;
