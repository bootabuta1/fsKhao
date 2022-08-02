import React from 'react'
import '../css/Footer.css'
import { Link } from 'react-router-dom'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  return (

    <div className='footer'>
      <div className='footer-container'>

       <div className='footer-content-holder'>

        <div className='footer-parts'>
          <div className='footer-part'>
            <h3>Discover Freshkhao</h3>
            <ul>
              <li>
                <span><Link to='/'>Investor</Link></span>
                <span><Link to='/about-freshkhao'>About us</Link></span>
                <span><Link to='/'>Takeaway</Link></span>
                <span><Link to='/'>More</Link></span>
                <span><Link to='/'>Gift Card</Link></span>
                <span><Link to='/'>Careers</Link></span>
                <span><Link to='/'>Engineering Blog</Link></span>
                <span><Link to='/'>Design Blog</Link></span>
                <span><Link to='/login'>Connection</Link></span>
                <span><Link to='/'>Newsroom</Link></span>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer-parts'>
        <div className='footer-part'>
            <h3>Legal</h3>
            <ul>
              <li>
                <span><Link to='/terms-conditions-freshkhao'>Terms and conditions</Link></span>
                <span><Link to='/freshkhao-privacy-policy'>Privacy</Link></span>
                <span><Link to='/'>Cookies</Link></span>
                <span><Link to='/'>Modern Slavery Statement</Link></span>
                <span><Link to='/'>Tax Strategy</Link></span>
                <span><Link to='/'>Section 172 Statement</Link></span>
                
              </li>
            </ul>
          </div>
        </div>
        <div className='footer-parts'>
        <div className='footer-part'>
            <h3>Help</h3>
            <ul>
              <li>
                <span><Link to='/freshkhao-contact'>Contact</Link></span>
                <span><Link to='/'>FAQs</Link></span>
                <span><Link to='/'>Brands</Link></span>
                <span><Link to='/'>Locations</Link></span>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer-parts'>
        <div className='footer-part'>
            <h3>Take Freshkhao with you</h3>
            <ul>
              <li>
                <Link to='/top-up-your-app-wallet'>
                  <img src='apple.png' className='footer-download-apple' />  
                </Link>
              </li>
              <li>
                <Link to='/top-up-your-app-wallet'>
                  <img src='googlep.png' className='footer-download-google'/>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        </div>
        <div className='footer-bottom'>
          <div className='social-icon'>
            <Link to='/'><FacebookRoundedIcon/></Link>
            <Link to='/'><TwitterIcon/></Link>
            <Link to='/'><InstagramIcon/></Link>
            <Link to='/'><YouTubeIcon/></Link>
          </div>
          <div className='copyright'>
            <span>© 2022 Freshkhao</span>
          </div>
        </div>
                      
      </div>
    </div>




    /*
    <div >
          
         
        <ul >
          <Link to="/login"><li>Carreer</li></Link>
          <Link to="/about-freshkhao"><li>About Us</li></Link>
          <Link to="/freshkhao-contact"><li>Contact Us</li></Link>
          <Link to="/terms-conditions-freshkhao"><li>Terms and Conditions</li></Link>
          <Link to="/freshkhao-privacy-policy"><li>Privacy Policy</li></Link>
        </ul>
        
      </div> */
  )
}
