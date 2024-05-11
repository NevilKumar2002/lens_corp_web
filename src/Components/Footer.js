import React from "react";
import Logo from "../assets/nav_logo.webp";
import './styles2.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
function Footer(){
    return(
        <div className="Footer">
          <div className="footer-section">
            <div className="footer-first-container">
                <img src={Logo} alt="logo" className="logo" />
                <p>Tomorrow's Vision, Today!</p>
                <div className="social-media-container">
      <a href="https://www.instagram.com/your_instagram_account">
        <InstagramIcon className="social-media-icon" sx={{ fontSize: 32 }} />
      </a>
      <a href="https://www.facebook.com/your_facebook_page">
        <FacebookIcon className="social-media-icon" sx={{ fontSize: 32 }} />
      </a>
      <a href="https://www.linkedin.com/in/your_linkedin_profile">
        <LinkedInIcon className="social-media-icon" sx={{ fontSize: 32 }}/>
      </a>
      <a href="https://twitter.com/your_twitter_account">
        <TwitterIcon className="social-media-icon" sx={{ fontSize: 32 }}/>
      </a>
    </div>


            </div>
            <div className="footer-second-container">
                <span className="heading">SITEMAP</span>
                <a href="https://makemyweb.ai/en">MakeMyWeb.</a>
                <a href="/">Services</a>
                <a href="/">Products</a>
                <a href="/">Blogs</a>
                <a href="/">Life at LENS</a>

                

            </div>
            <div className="footer-third-container">
            <span className="heading">CONNECT</span>
                <a href="/">+1-517-9300-792</a>
                <a href="/">+91-9990-736-796</a>
                <a href="/">solutions@lenscorp.ai</a>
                
                

            </div>
        </div>
        <div className="footer-section2">
        <div>
        <span style={{color:'rgb(153, 153, 153)'}}>2023</span>
          <span style={{color:'white'}}>LENS, Inc.</span>
          <span style={{color:'rgb(153, 153, 153)'}}>All rights reserved.</span>
          </div>
          <div>
            <a href="https://lenscorp.ai/Files/LENS_Code_of_Conduct.pdf" target="_blank">
              Code of Conduct
            </a>
          </div>
          <div>
            <a href="https://lenscorp.ai/Files/LENS_Sustainability_Goals.pdf"target="_blank">
              Sustainability Goals
            </a>
          </div>

        </div>
        </div>
    )
}
export default Footer;