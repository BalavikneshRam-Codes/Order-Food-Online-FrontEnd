import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopUp/LoginPopup'
const App = () => {
  const[showLogin,setshowLogin] = useState(false);
  return (
    <>
    {showLogin ? <LoginPopup setshowLogin = {setshowLogin}/> : <></>}
     <div className='app'>
          <Navbar setshowLogin={setshowLogin}/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/order' element={<PlaceOrder/>}></Route>
          </Routes>
    </div>
    <Footer/>
    </>

  )
}

export default App
