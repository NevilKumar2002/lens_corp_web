import React from "react";
import DoneIcon from '@mui/icons-material/Done';
import './style.css';
import blue from '../assets/blue.webp';
import green from '../assets/green.webp';
import red from '../assets/red.webp';
import yellow from '../assets/yellow.webp';
import { useTheme } from './Theme';
const items = [
    "State-of-the-art solutions",
    "Fast & Efficient",
    "No extra computation fee",
    "No licensing fee",
    "Lifetime support & upgrades",
    "Plug-and-Play",
    "24x7 Progress Monitoring",
    "Incremental Updates"
];
const CardsData=[
    {
        id:'1',
        heading:'Exclusive Rights',
        image:{green},
        desc:'Our mission is to make an impact in empowering human society with AI. Hence, all Intellectual Property Rights belongs to you.'
    },
    {
        id:'2',
        heading:'Research Driven',
        image:{blue},
        desc:'We regularly benchmark our solutions via comparing industry-vide evaluations so our partners only get the best that AI can offer.'
    
    },
    {
        id:'3',
        heading:'Plug-and-Play',
        image:{red},
        desc:'We provide AI-driven solutions into businesses where they can bring tangible value. Each solution is customized as per your needs and deployed on any computing device of your choice.'
    
    },
    {
        id:'4',
        heading:'Lifetime Support',
        image:{yellow},
        desc:'Should you face any issues, we are always at your service. We provide lifetime technical support & upgrade options.'
    
    },
    
]

function AISolutions({currentTheme}) {
    const { theme } = useTheme();
    return (
        
        <div style={{color: currentTheme === 'dark'? 'dark-AI-solution-bg-container' :'AI-solution-bg-container'}}>
             <div className="about-heading-container">
        <h1 style={{ color: currentTheme === 'dark' ? 'dark-about-heading' : 'about-heading' }}>WHY CHOOSE LENS</h1>
        <div className="about-heading-underline"></div>
      </div>
           <div style={{display:'flex', flexDirection:'column', alignItems:'center'}} className="solution-desc-div">
           <p style={{color: currentTheme === 'dark'?'dark-solution-desc':'solution-desc"'  }} >AI-driven solutions backed by science</p>
            <p className="solution-desc2">Every piece of AI technology shipped from LENS is thoroughly benchmarked via rigorous evaluations. With a global network of experts and academicians, we guarantee the most accurate and robust solutions in the market.</p>

           </div>
            {/* Render the list items in two columns */}
            <div className="two-columns-list">
                <div className="column">
                    {items.slice(0, Math.ceil(items.length / 2)).map((item, index) => (
                        <div key={index} className="item">
                            <DoneIcon className="tick-icon" /> {/* Tick icon */}
                            <span>{item}</span> {/* List item */}
                        </div>
                    ))}
                </div>
                <div className="column">
                    {items.slice(Math.ceil(items.length / 2)).map((item, index) => (
                        <div key={index} className="item">
                            <DoneIcon className="tick-icon" /> 
                            <span>{item}</span> 
                        </div>
                    ))}
                </div>
            </div>

            {/* Render the cards */}
            <div className="solutions-cards-container">
                <div className="color-container"></div>
            <div className="cards-container">
            <div className="first-container first"> 
            <div className="card-heading">Exclusive Rights</div>
            <img src={green} alt="image1" className="card-image"/>
            <p className="card-desc">Our mission is to make an impact in empowering human society with AI. Hence, all Intellectual Property Rights belongs to you.</p>
            </div>
            <div className="first-container second "> 
            <div className="card-heading">Research Driven </div>
            <img src={blue} alt="image1" className="card-image"/>
            <p className="card-desc">We regularly benchmark our solutions via comparing industry-vide evaluations so our partners only get the best that AI can offer.</p>
            </div>
            <div className="first-container third"> 
            <div className="card-heading">Plug-and-Play</div>
            <img src={red} alt="image1" className="card-image"/>
            <p className="card-desc">We provide AI-driven solutions into businesses where they can bring tangible value. Each solution is customized as per your needs and deployed on any computing device of your choice. Hence, all Intellectual Property Rights belongs to you.</p>
            </div>
            <div className="first-container fourth"> 
            <div className="card-heading">Lifetime Support</div>
            <img src={yellow} alt="image1" className="card-image"/>
            <p className="card-desc">Should you face any issues, we are always at your service. We provide lifetime technical support & upgrade options.</p>
            </div>
            </div>
            </div>
        </div>
    );
}
export default AISolutions;