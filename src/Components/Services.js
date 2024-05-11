import React, { useState } from "react";
import "./style.css";

import { useTheme } from './Theme';
const data = [
  {
    id: "01",
    heading: "Biometrics",
    desc: "Academia-backed & In-house researched State-of-the-Art Face, Fingerprint, and Iris Recognition SDKs. Enable real-time automated Biometric applications on edge devices even without an active internet connection.",
    idColor: 'rgb(1, 201, 155)',
    backgroundColor: 'transparent'
},
  {
    id: "02",
    heading: "Image Analysis",
    desc: "Outsource the overly complex image analysis work to our intelligent machines that adaptively learn, so you can focus on making the best decisions for your business.",
    idColor: '#00b2fc',
    backgroundColor: 'transparent',
  },
  {
    id: "03",
    heading: "Cross-Media Translation",
    desc: "Will something like Siri or Alexa enhance your business? We can deliver text-to-speech, text-to-image, speech-to-text, speech-to-image, speech-to-image, image-to-text and image-to-speech solutions for maximum convenience.",
    idColor: 'rgb(255, 96, 95)',
    backgroundColor: 'transparent',
  },
  {
    id: "04",
    heading: "3D Modelling and Design.",
    desc: "We offer services for automated generation of 3D assets with realistic shapes and textures. We animate the 3D models with voice and videos with an aim to retarget voice and/or expressions with pose from a single Image/video.",
    idColor: 'rgb(255, 159, 49)',
    backgroundColor: 'transparent'
  }
];

const Services = ({currentTheme}) => {
  const {theme}= useTheme();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="service-bg-container">
      <div className="about-heading-container">
        <h2 className="service-heading">Services</h2>
        <div className="about-heading-underline"></div>
      </div>
      <div className="services-heading-div">

        <p style={{ color: currentTheme === 'dark' ? 'dark-services-heading' : 'services-heading' }} >We provide Artificial Intelligence Services</p>
      </div>
      <div className="services-container">
        {data.map((item, index) => (
          <div
            key={item.id}
            className="service-card"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              '--id-color': hoveredIndex === index ? item.idColor : 'transparent',
              borderColor: hoveredIndex === index ? item.idColor : 'transparent'
            }}
          >
            <div className="service-id-heading">
                <div>
                <span style={{ color: 'rgba(128, 128, 128, 0.5)' }} className="services-id">{item.id.slice(0, -1)}</span>
              <span style={{ color: hoveredIndex === index ? item.idColor : 'rgba(128, 128, 128, 0.5)' }} className="services-id">{item.id.slice(-1)}</span>
              
                </div>
              <div>
              <h3 className="service-heading" style={{ color: hoveredIndex === index ? 'rgba(128, 128, 128, 0.5)' : item.idColor }}>{item.heading}</h3>
           
                </div>
              </div>
            <p className="service-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
