import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
          <div className="footer-content-left">
              <img src={assets.logo} alt="" />
              <p>At Tomoto, we are passionate about bringing you the finest and most delectable culinary experiences. Our platform connects you with a variety of recipes, dining tips, and food inspiration to elevate your everyday meals. Discover the joy of cooking and the art of gastronomy with us</p>
              <div className="footer-social-icons">
                <a href="https://github.com/BalavikneshRam-Codes" target='_blank'><img src={assets.github_icon} alt="" /></a>
                <a href="https://leetcode.com/u/balavikneshram/" target='_blank'><img src={assets.leetcode_icon2} alt="" /></a>
                {/* <a href=""><img src={assets.gmail_icon} alt="" /></a> */}
                <a href="https://www.linkedin.com/in/balaviknesh-ram/" target='_blank'><img src={assets.linkedin_icon} alt="" /></a>
              </div>
          </div>
          <div className="footer-content-center">
              <h2>COMPANY</h2>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
              </ul>
          </div>
          <div className="footer-content-right">
              <h2>GET IN TOUCH</h2>
              <ul>
                <li>+91 7010965733</li>
                <li>balaram0711@gmail.com</li>
              </ul>
          </div>
        </div>
        
        <hr />
        <p className="footer-copyright">Copyright 2024 &#169; Tomoto.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer