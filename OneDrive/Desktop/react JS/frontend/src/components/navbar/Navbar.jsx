import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
function Navbar({setshowLogin}) {


  const [menu,setMenu] = useState("Home");
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <div className='Navbar'>
        <Link to='/'><img src={assets.logo} alt="" className='logo'/></Link>
          <ul className="navbar-menu">
            <Link to='/' className={menu === "Home"?"active":""} onClick={()=>setMenu("Home")}>Home</Link>
            <a href='#explore-menu' className={menu === "Menu"?"active":""} onClick={()=>setMenu("Menu")}>Menu</a>
            {/* <li className={menu === "Mobile-app"?"active":""} onClick={()=>setMenu("Mobile-app")}>Mobile-App</li> */}
            <a href='#footer' className={menu === "Contact-us"?"active":""} onClick={()=>setMenu("Contact-us")}>Contact us</a>
          </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="" />
              <div className="navbar-search-icon">
                <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount() === 0 ?"":"dot"}></div> 
              </div>
          <button onClick={()=>setshowLogin(true)}>sign in</button>
        </div>
    </div>
  )
}

export default Navbar