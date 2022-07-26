import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import '../css/Nav.css';
import { Link } from 'react-router-dom'
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Nav() {

  var secreenWidth = window.innerWidth;
   

  return (
    <div className="header">
    <div className='nav'>
        <img src='logo.png' className='logo img-fluid'/>

        { secreenWidth < 576 ? "" :

         <div className='search-box'>
           <input type="text" className='search-input' />
           <SearchIcon className='search-icon' />
        </div>

        }

        <div className='nav-links'>
          <Link to='/freshkhao-store' className='nav-link'>
              <div className='nav-options'>
                 <span className='nav-options-line-one'>NearBy</span>
                 <span className='nav-options-line-two'>Stores</span>
              </div>
          </Link>

          <Link to='/top-up-your-app-wallet'  className='nav-link'>
              <div className='nav-options'>
                 <span className='nav-options-line-one'>TopUp</span>
                 <span className='nav-options-line-two'>Wallet</span>
              </div>
          </Link>

          <Link to='/track-freshkhao-order' className='nav-link'>
              <div className='nav-options'>
                 <span className='nav-options-line-one'>Track </span>
                 <span className='nav-options-line-two'>Orders</span>
              </div>
          </Link>
        </div>
{/*
        <div className='download-app'>
        <Link to='/' className='nav-link'>
              <div className='nav-options'>
                <AndroidIcon/>
                <span className='nav-options-line-one'>Download</span>
              </div>
          </Link>
        </div>

      */}  

    </div>

    {secreenWidth < 576 ? 
    
    <div className='search-box-mobile'>
          <input type="text" className='search-input' />
          <SearchIcon className='search-icon' />
        </div>

       : "" 
    
    }

        

    
    </div>


  )
}   
