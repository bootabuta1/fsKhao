import React from 'react'
import '../css/Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div style={{ 
        flex:1, 
        lexDirection:"row",
        textAlign:"center",
        textDecoration: "none",
        padding: 10,
        backgroundColor: "#131921",
        color:"white"}}>
          
          All Right Reserved @2022 Freshkhao
          <br/>
        <ul >
            <Link to="/about-freshkhao"><li>About US</li></Link>
            <Link to="/freshkhao-contact"><li>Contact Us</li></Link>
            <Link to="/terms-conditions-freshkhao"><li>Terms and Conditions</li></Link>
            <Link to="/freshkhao-privacy-policy"><li>Privacy Policy</li></Link>
        </ul>
        
      </div>
  )
}
