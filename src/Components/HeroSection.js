import React from "react";
import './style.css';
import { useTheme } from './Theme';

const HeroSection = ({ currentTheme }) => {
    const { theme } = useTheme();

    // Define the background image URLs for light and dark themes
    const lightBackgroundImage = "url('../assets/Desktop_-_23_u3ypg0.webp')";
    const darkBackgroundVideo = "https://res.cloudinary.com/detwrhe0k/video/upload/v1691730947/lenscorp-website/pexels-pressmaster-3129671-3840x2160-30fps_1_ak5nsz_d7alrn.mp4";

    // Dynamically set the background content based on the selected theme
    const backgroundContent = theme === 'dark' ? (
        <video className="hero-video" autoPlay muted loop>
            <source src={darkBackgroundVideo} type="video/mp4" />
        </video>
    ) : (
        <div className="hero-bg-container2" ></div>
    );

    return (
        <div className="hero-bg-container">
            {backgroundContent}
            <div className={theme === 'dark' ? 'hero-container-dark' : 'hero-container'}>
                <h1 className={theme === 'dark' ? 'hero-heading-dark' : 'hero-heading'}>We are at the forefront of AI</h1>
                <p className={theme === 'dark' ? 'hero-description-dark' : 'hero-description'}>From Conserving Wildlife to Automatically Generating Caricatures– <span style={{fontWeight:'bold'}}>We Do It All</span></p>
                <a href="/about">
                    <button className="learn-more-btn">Learn More</button>
                </a>
            </div>
        </div>
    );
}

export default HeroSection;
