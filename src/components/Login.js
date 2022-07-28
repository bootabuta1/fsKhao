import React from 'react'
import '../css/Login.css'
import JobPost from './JobPost'

export default function Login() {

  return (
    <div className='login-container'>
      
      <div className='login-card' style={{ backgroundColor: 'white', color:'black' }} >
        <h1>Carreer Notice</h1>
        <JobPost />
        <JobPost data="ram"/>
      </div>
      <div className='login-card'>
        <h1>Login</h1>
        <input type='text' className='input-box' placeholder='Enter Registered Mobile Number'/>
        <input type='password' className='input-box' placeholder='Enter Password Here'/>
        <input type='submit' value='Login' className='input-box input-button'/>
      </div>
  
    </div>
  )
}
