import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import '../css/Nav.css';
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='nav'>
        <img src='logo.png' className='logo'/>
         <div className='search-box'>
           <input type="text" className='search-input' />
           <SearchIcon className='search-icon' />
        </div>
        <div className='nav-links'>
          <Link to='/' className='nav-link'>
              <div className='nav-options'>
                 <span className='nav-options-line-one'>hello</span>
                 <span className='nav-options-line-two'>Data</span>
              </div>
          </Link>

          <Link to='/'  className='nav-link'>
              <div className='nav-options'>
                 <span className='nav-options-line-one'>hello</span>
                 <span className='nav-options-line-two'>Data</span>
              </div>
          </Link>

          <Link to='/' className='nav-link'>
              <div className='nav-options'>
                 <span className='nav-options-line-one'>hello</span>
                 <span className='nav-options-line-two'>Data</span>
              </div>
          </Link>
        </div>
    </div>
  )
}   
