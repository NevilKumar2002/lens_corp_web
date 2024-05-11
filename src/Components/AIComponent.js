import React from "react";
import "./style.css";
import AIimage from "../assets/vectorAi.webp";
import EastIcon from "@mui/icons-material/East";
import underline from "../assets/underline.27e9f7f7.svg";
import video from "../assets/product-intro_1_dmajx1_qaemeu.mp4";
function AIComponent() {
  return (
    <div>
      <div className="AI-polygon-container">
        <div>
          <img src={AIimage} alt="vector-ai" className="vector-ai-image" />
        </div>
        <div className="AI-desc-container">
          <div className="AI-desc-container1">
            <div className="meet-heading">Meet</div>
            <div className="tru-ai-container">
              <div>
                <div className="tru-ai-heading">Tru-AI</div>
                <img
                  src={underline}
                  alt="underline"
                  className="underline-image"
                />
              </div>
            </div>
          </div>
          <div className="AI-desc-container2">Design. Create. Deploy.</div>
          <div className="AI-desc-container3">
            <div></div>
            <div className="future-ai-desc">
              the Future of AI | Power to EDIT
            </div>
          </div>
          <div className="AI-desc-container4">
            Based On Your Website & Traffic Trends, Tru-AI Optimises Your
            Website
          </div>
          <a target="_blank" href="https://makemyweb.ai/">
            <button className="learn-more-btn-AI">
              <div>Learn More</div>
              <EastIcon className="east-icon1" />
            </button>
          </a>
        </div>
        <div className="AI-video-container">
          <video className="hero-video ai-video" autoPlay muted>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
export default AIComponent;
