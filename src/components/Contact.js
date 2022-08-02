import React from 'react'
import '../css/Contact.css'

export default function Contact() {
  return (
    <div className='contact-container'>
        <div className='contact-card'>
        <h1>Contact Us</h1>
        <input type='email' className='input-box' placeholder='Enter Your Email address'/>
        <textarea>data placed here</textarea>
        <input type='submit' value='POST' className='input-box input-button'/>
        </div>
    </div>
  )
}
