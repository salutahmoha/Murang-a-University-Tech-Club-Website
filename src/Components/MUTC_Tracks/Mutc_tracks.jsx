import React from "react";
import "./Mutc_tracks.css";

import cyber from "../../Assets/cyber.png";
import uxui from "../../Assets/uxui.png";
import web from "../../Assets/web.png";
import mobile from "../../Assets/mobile.jpeg";
import cloud from "../../Assets/cloud.png";
import power from "../../Assets/power.jpeg";

function Mutc_tracks() {
  return (
    <section className="tracks" id="tracks">
      <div className="tracks-container">
        <div className="track">
          <img src={cyber} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            animi sint, illo nam porro eligendi tempore! Rem molestias quos quis
            cumque porro fuga eaque minus, odio dolor. Sit, deleniti mollitia.
          </p>
          <div className="track-name-registration">
            <h4>Cyber Security</h4>
            <button>
              <a href="#">Register</a>
            </button>
          </div>
        </div>

        <div className="track">
          <img src={uxui} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            animi sint, illo nam porro eligendi tempore! Rem molestias quos quis
            cumque porro fuga eaque minus, odio dolor. Sit, deleniti mollitia.
          </p>
          <div className="track-name-registration">
            <h4>UX/UI</h4>
            <button>
              <a href="#">Register</a>
            </button>
          </div>
        </div>

        <div className="track">
          <img src={web} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            animi sint, illo nam porro eligendi tempore! Rem molestias quos quis
            cumque porro fuga eaque minus, odio dolor. Sit, deleniti mollitia.
          </p>
          <div className="track-name-registration">
            <h4>Web development</h4>
            <button>
              <a href="#">Register</a>
            </button>
          </div>
        </div>

        <div className="track">
          <img src={mobile} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            animi sint, illo nam porro eligendi tempore! Rem molestias quos quis
            cumque porro fuga eaque minus, odio dolor. Sit, deleniti mollitia.
          </p>
          <div className="track-name-registration">
            <h4>Mobile Apps development</h4>
            <button>
              <a href="#">Register</a>
            </button>
          </div>
        </div>

        <div className="track">
          <img src={cloud} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            animi sint, illo nam porro eligendi tempore! Rem molestias quos quis
            cumque porro fuga eaque minus, odio dolor. Sit, deleniti mollitia.
          </p>
          <div className="track-name-registration">
            <h4>Cloud engineering</h4>
            <button>
              <a href="#">Register</a>
            </button>
          </div>
        </div>

        <div className="track">
          <img src={power} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            animi sint, illo nam porro eligendi tempore! Rem molestias quos quis
            cumque porro fuga eaque minus, odio dolor. Sit, deleniti mollitia.
          </p>
          <div className="track-name-registration">
            <h4>power platform</h4>
            <button>
              <a href="#">Register</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mutc_tracks;
