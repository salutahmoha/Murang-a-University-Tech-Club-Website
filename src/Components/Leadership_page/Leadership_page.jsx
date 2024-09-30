import React from "react";
import { FaFacebook, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./Leadership_page.css";
import leadershipData from "../LeadershipDetails/Leadership_Data";

function Leadership_page() {
  return (
    <section className="leadership" id="leadership">
      <div className="leaadership-container">
        {leadershipData.map((leadershipData, index) =>(
            <div key={index} className="leader-info">
            <img src={leadershipData.image} alt="" />
            <div className="leader-details">
              <h4>{leadershipData.name}</h4>
              <h5>{leadershipData.title}</h5>
              <p>P{leadershipData.text}</p>
            </div>
            <div className="leader-socialmedia-handles">
              <h6>
                Facebook <FaFacebook />
              </h6>
              <h6>
                Linkedln <FaLinkedinIn />
              </h6>
            </div>
          </div>
        ) )};
      </div>
    </section>
  );
}

export default Leadership_page;
