import React from "react";
import "./about_us.css";

import about from "../../Assets/hero-1.jpeg";
import about1 from "../../Assets/hero-3.jpeg";
import about2 from "../../Assets/hero-4.jpeg";
function About_us() {
  return (
    <div className="container-about" id="about">
      <h2>About Us</h2>
      <div className="row">
        <div className="about-img">
          <img src={about} alt="About Us" />
          <img src={about1} alt="About Us" />
          <img src={about2} alt="About Us" />
        </div>
        <div className="about-text">
          <h4>MUTC MISSION</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ea
            eaque non sed quos! Deleniti voluptate beatae facere quas
            voluptates? Necessitatibus perferendis tempora, deleniti architecto
            illum nam saepe. Distinctio minus ex est dignissimos laboriosam eum
            exercitationem, quaerat ab. Alias eius cum, et nesciunt corporis
            deserunt excepturi similique provident fuga commodi.
          </p>
          <h4>MUTC VALUES</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
            exercitationem nihil quasi corporis temporibus modi amet aperiam vel
            nemo tenetur facilis eum minus soluta odit rem dicta sapiente nam,
            mollitia debitis at. Consectetur aperiam, assumenda distinctio
            mollitia aut delectus illum voluptate culpa quas eveniet id modi!
            Laboriosam adipisci sequi dolor.
          </p>
          <h4>MUTC OBJECTIVES</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit et facere sint cum fugiat praesentium. Labore maxime
            quaerat nulla impedit. Nisi labore sunt enim inventore eveniet
            ducimus assumenda fugiat maiores, odit ullam, possimus, quae ipsa
            magni in sapiente sed dolore officia eius reprehenderit. Pariatur
            atque est, inventore officia voluptatibus id.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About_us;
