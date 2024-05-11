import React from "react";
function Achievements() {
  return (
    <div className="achievements-total-container">
      <div className="heading">By the numbers</div>
      <div className="achievements-description">
        <div className="achievement-container">
          <div className="achievemnent-div">
            <div>
              <span className="number">15</span>
              <span className="plus-symbol">+</span>
            </div>
            <div className="achievemnents-desc">
              Solutions for Global crises
            </div>
          </div>
          <div className="line"></div>
        </div>
        <div className="achievement-container">
          <div className="achievemnent-div">
            <div>
              <span className="number">10</span>
              <span className="plus-symbol">+</span>
            </div>
            <div className="achievemnents-desc">
            University Collaborations
            </div>
          </div>
          <div className="line"></div>
        </div>
        <div className="achievement-container">
          <div className="achievemnent-div">
            <div>
              <span className="number">25</span>
              <span className="plus-symbol">+</span>
            </div>
            <div className="achievemnents-desc">
            Employees Worldwide
            </div>
          </div>
          
        </div>
       
      </div>
    </div>
  );
}
export default Achievements;
