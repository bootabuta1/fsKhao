import React from 'react'
import '../css/Footer.css'

export default function Footer() {
  return (
    <div style={{ 
        flex:1, 
        lexDirection:"row",
        textAlign:"center",
        color:"black"}}>
          <hr/>  
          All Right Reserved @2022 Freshkhao
          <br/>
        <ul style={{ }}>
            <li>About US</li>
            <li>Contact Us</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
        </ul>
        
      </div>
  )
}
