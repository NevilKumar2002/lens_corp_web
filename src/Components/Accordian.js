import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import "./styles2.css"

export default function AccordionUsage() {
  return (
    <div className='accordian-div'>
      <Accordion className='accordian'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Do I need to sign a Contract?
        </AccordionSummary>
        <AccordionDetails>
        We will first work with you to comprehend your requirements in detail. Thereafter, we would draft an agreement with proposed solutions.After assessing possible challenges and pitfalls and identifying ways to overcome them, we will jointly sign an agreement, not a binding contract.
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordian'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         What services do we offer ?
        </AccordionSummary>
        <AccordionDetails>
        We build accurate and efficient AI systems for your business. Our ethically-trained solutions are paving a new path forward to create explainable, transparent, and easily customizable. In addition, we grant ownership of all copyrights to the system, software, and model to you.
        </AccordionDetails>
      </Accordion>
      
      <Accordion className='accordian'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          How do we ensure quality of deliveriables ?
        </AccordionSummary>
        <AccordionDetails>
        We are researchers, first. We thoroughly benchmark our proposed solutions against internal and public datasets and baselines after each development sprint. After final delivery, we will continuously enhance our delivery based on your feedbacks.
        </AccordionDetails>
        
      </Accordion>
      <Accordion className='accordian'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          How do we begin Collaborations ?
        </AccordionSummary>
        <AccordionDetails>
        Please contact us at <span style={{color:'red'}}><a href="/" target="_blank">solutions@lenscorp.ai</a></span>. We usually respond within 24 Hrs.


        </AccordionDetails>
       
      </Accordion>
      <Accordion className='accordian'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          How do we ensure user policy ?
        </AccordionSummary>
        <AccordionDetails>
        We do not share, sell, or rent your competitive information (including any and all data) to any third party.Since we grant exclusive Intellectual Property Rights back to you, we have no intention of violating any user privacy.
        </AccordionDetails>
       
      </Accordion>
      <Accordion className='accordian'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          How can I pay for the services ?
        </AccordionSummary>
        <AccordionDetails>
        We split the entire project into multiple milestones.We work on an advanced milestone payment basis with an option to drop off remaining milestones anytime.
        </AccordionDetails>
       
      </Accordion>
    </div>
  );
}
