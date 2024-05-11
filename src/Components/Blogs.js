import React from 'react';
import "./style.css";
import "./styles2.css";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import EastIcon from '@mui/icons-material/East';
import { useTheme } from './Theme';
function Blogs({currentTheme}){
    const {theme}= useTheme();
    return(
        <div className='blogs-bg-container'>
            <div className="about-heading-container">
        <h2 className="service-heading">OUR BLOGS</h2>
        <div className="about-heading-underline"></div>
      </div>
      <div className="services-heading-div1">
      {/* className="services-heading" */}
        <p className={{color: currentTheme === 'dark'? 'services-dark-heading':'services-heading' }}>Inhouse Mindscape</p>
      </div>
<div className='blogs-cards-container'>
<div className='blog-container'>
        <div className='blog-date' style={{color: 'rgb(248, 99, 96)'}}>New !</div>
        <h2 className='blog-heading'>Generative AI</h2>
        <div className='yellow-div'></div>
        <div></div>
        <div className='blog-sub2'>
            <p className='blog-desc'>In today's data-driven marketing world, keeping up with content creation demands can be a challenge. Read our latest blog to explore the power of Generative AI and its potential to reshape the marketing landscape....</p>
        </div>
        <a  href="https://lenscorp.ai/blogs/Generative%20AI" target="_blank" className='read-more-div'>
            <p>Read More</p>

            <ChevronRightIcon />
                
        </a>
</div>
<div className='blog-container2'>
    <div className='blog3-color'></div>
        <div className='blog-date' >April 25, 2024</div>
        <h2 className='blog-heading'>The Evolution of AI in Games</h2>
        <div className='orange-div'></div>
        <div></div>
        <div className='blog-sub3'>
            <p className='blog-desc'>The integration of artificial intelligence (AI) within the gaming industry has been a remarkable journey, marked by continual innovation. Read our latest blog to dive deep into the fascinating history of AI in games and discover the evolution that continues to shape the future of play!...</p>
        </div>
        <a  href="https://lenscorp.ai/blogs/The%20Evolution%20of%20AI%20in%20Games" target="_blank" className='read-more-div'>
            <p>Read More</p>

            <ChevronRightIcon />
                
        </a>
</div>
<div className='blog-container3'>
        <div className='blog-date' >April 18, 2024</div>
        <h2 className='blog-heading'>Unmasking the Misconceptions of Artificial Intelligence in the Workplace</h2>
        <div className='yellow-div'></div>
        <div></div>
        <div className='blog-sub4'>
            <p className='blog-desc'>The rise of Artificial Intelligence (AI) has sparked both excitement and apprehension. Many professionals are unsure how AI impacts their work....</p>
        </div>
        <a  href="https://lenscorp.ai/blogs/Unmasking%20the%20Misconceptions%20of%20Artificial%20Intelligence%20in%20the%20Workplace" target="_blank" className='read-more-div'>
            <p>Read More</p>

            <ChevronRightIcon />
                
        </a>
</div>

</div>
    
        <a href="https://lenscorp.ai/blogs">
            <button className={`learn-more-btn-about learn-more-blog ${currentTheme === 'dark' ? 'dark-theme-btn' : 'light-theme-btn'}`}>
                <div>Explore More</div>
                <EastIcon className="east-icon" />
            </button>
        </a>

        </div>
    )
}
export default Blogs;