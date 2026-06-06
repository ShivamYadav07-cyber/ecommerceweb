import React from 'react'
import './Footer.css'
import footer_logo from '../Assests/images/logo_big.png'
import instagram_icons from '../Assests/images/instagram_icon.png'
import pintester_icon from '../Assests/images/pintester_icon.png'
import whatsapp_icons from '../Assests/images/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>

        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
              <img src={instagram_icons} alt="" />
            </div>
             <div className="footer-icons-container">
              <img src={pintester_icon} alt="" />
            </div>
             <div className="footer-icons-container">
              <img src={whatsapp_icons} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2026 - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer