import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GithubIcon from '@mui/icons-material/GitHub'
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className="socialMedia">
        <a href="https://github.com/Abfahim21"><GithubIcon/></a>
            <a href="https://facebook.com/fahmiusss"><FacebookIcon/></a>
            <a href="https://www.linkedin.com/in/md-abrar-fahim/"><LinkedInIcon/></a>
            <a href="https://github.com/Abfahim21"><TwitterIcon/></a>
            <a href="https://github.com/Abfahim21"><InstagramIcon/></a>
            
        </div>
        <p>&copy;2022 abrarfahim21@gmail.com</p>
    </div>
  )
}

export default Footer