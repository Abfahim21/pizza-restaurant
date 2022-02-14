import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className="socialMedia">
            <InstagramIcon/>
            <FacebookIcon/>
            <LinkedInIcon/>
            <TwitterIcon/>
            
        </div>
        <p>&copy;2022 abrarfahim21@gmail.com</p>
    </div>
  )
}

export default Footer