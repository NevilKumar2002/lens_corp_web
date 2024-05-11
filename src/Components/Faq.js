import React from "react";
import './styles2.css'
import AccordionUsage from "./Accordian";
function Faq(){
    return(
        <div>
            <div className="about-heading-container">
        <h1 className="about-heading get-to-know-heading">GET TO KNOW US</h1>
        <div className="about-heading-underline"></div>
      </div>
      <div className="faq-heading">Frequently Asked Questions</div>
      <AccordionUsage/>
        </div>

    )
}
export default Faq;