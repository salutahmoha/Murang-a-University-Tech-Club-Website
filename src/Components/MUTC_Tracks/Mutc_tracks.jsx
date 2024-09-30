import React from "react";
import "./Mutc_tracks.css";

import tracksData from "../TracksData/Tracks_details";

function Mutc_tracks() {

  return (
    <section className="tracks" id="tracks">
      <div className="tracks-container">
        {tracksData.map((tracksData, index) =>(
             <div key={index} className="track">
             <img src={tracksData.image} alt="" />
             <p>{tracksData.text}</p>
             <div className="track-name-registration">
               <h4>{tracksData.title}</h4>
               <button onClick={()=>(window.location.href="#form")}>
                 <a href="#form">Register</a>
               </button>
             </div>
           </div>
        ))}

      </div>
    </section>
  );
}

export default Mutc_tracks;
