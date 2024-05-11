import React from "react";
import "./styles2.css";
import Map from "../assets/map_2_white.webp"
function GetInTouch(){
    return(
        <div className="get-in-touch-div">
            <div className="left-container">
            <h2 className="left-heading" style={{fontSize:'1.5rem', fontWeight:'800'}}>Get in touch with us</h2>
            <p>Send your enquiry now!</p>
            <div className="email-div">
                <form >

                
                <input type="email" id="email" placeholder="Enter email address" required />
                <button type="submit">Request Demo</button>
                </form>

            </div>

            </div>
            <div className="right-container">
                <img src={Map} alt=""/>

            </div>

        </div>
    )
}
export default GetInTouch;