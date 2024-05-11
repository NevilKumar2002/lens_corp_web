import React from "react";
import { useTheme } from "@emotion/react";
import "./styles2.css";
import client1 from "../assets/Co_1.webp";
import client2 from "../assets/Co_2.webp";
import client3 from "../assets/Co_3.webp";
import client4 from "../assets/grov.webp";
import client1white from "../assets/Core_white.webp";
import client2white from "../assets/Zkt_white.webp";
import client3white from "../assets/Global_white.webp";
import client4white from "../assets/Grove.webp";

function Clients({ currentTheme }) {
    const theme = useTheme();
    return (
        <div className={currentTheme === 'dark' ? 'dark-client-container' : 'client-container'}>
            <h2 className="clients-heading">We Work With Amazing Clients</h2>
            <div className="total-clients">
                {currentTheme === 'light' ? (
                    <div>
                        <div>

                        <img src={client1} alt="client1" className="client1"/>
                        <img src={client2} alt="client2" className="client2"/>
                        <img src={client3} alt="client3" className="client3"/>
                        <img src={client4} alt="client4" className="client4"/>
                        </div>
                    </div>
                ) : (
                    <div>
                        <img src={client1white} alt="client1" className="client1"/>
                        <img src={client2white} alt="client2" className="client2"/>
                        <img src={client3white} alt="client3" className="client3"/>
                        <img src={client4white} alt="client4" className="client4"/>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Clients;
