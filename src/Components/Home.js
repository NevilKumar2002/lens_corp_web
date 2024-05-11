import React from "react";
import HeroSection from "./HeroSection";
import About from "./About";
import Services from "./Services";
import AIComponent from "./AIComponent";
import AISolutions from "./AISolutions";
import Blogs from "./Blogs";
import Clients from "./Clients";
import Achievements from "./Achievements";
import Faq from "./Faq";
import GetInTouch from "./GetInTouch";
import Footer from "./Footer";
import { useTheme } from './Theme';
const Home=()=>{
    const { theme } = useTheme();

    return(
        <div className={`home-page ${theme === 'dark' ? 'dark-theme' : ''}`}>
           <HeroSection currentTheme ={theme}/> 
           <About currentTheme ={theme}/>
           <Services currentTheme ={theme}/>
           <AIComponent currentTheme ={theme}/>
           <AISolutions  currentTheme ={theme}/>
           <Blogs currentTheme ={theme}/>
           <Clients  currentTheme ={theme}/>
           <Achievements />
           <Faq />
           <GetInTouch/>
           
        </div>
    )
}
export default Home;