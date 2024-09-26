import React from "react";
import "./Home.css";
import Carousel from "react-elastic-carousel";
import testimonials from "./data";

import about from "../../../Assets/hero-1.jpeg";

function Home() {
  return (
    <section id="home">
      <div className="home-container">
        <div className="row">
          <div className="home-text">
            <h2>Empowering Innovators, Shaping the Future</h2>
            <p>
              At MUTC, we foster excellence in technology and innovation,
              equipping learners with the skills to lead and succeed in a
              dynamic world.
            </p>
          </div>
        </div>
      </div>

      <div className="container-about" id="about">
        <h2>About Us</h2>
        <div className="row">
          <div className="about-img">
            <img src={about} alt="About Us" />
          </div>
          <div className="about-text">
            <h4>MUTC MISSION</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              ea eaque non sed quos! Deleniti voluptate beatae facere quas
              voluptates? Necessitatibus perferendis tempora, deleniti
              architecto illum nam saepe. Distinctio minus ex est dignissimos
              laboriosam eum exercitationem, quaerat ab. Alias eius cum, et
              
            </p>
            <h4>MUTC VALUES</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
              exercitationem nihil quasi corporis temporibus modi amet aperiam
              vel nemo tenetur facilis eum minus soluta odit rem dicta sapiente
              nam, mollitia debitis at. Consectetur aperiam, assumenda
              distinctio mollitia aut delectus illum voluptate culpa quas
              
            </p>
            <h4>MUTC OBJECTIVES</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reprehenderit et facere sint cum fugiat praesentium. Labore maxime
              quaerat nulla impedit. Nisi labore sunt enim inventore eveniet
              ducimus assumenda fugiat maiores, odit ullam, possimus, quae ipsa
              magni in sapiente sed dolore officia eius reprehenderit. 
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-container" id="testimonials">
        <h2>Testimonials</h2>
        <Carousel
          className="carousel"
          enableAutoPlay={true}
          itemsToShow={1}
          autoPlaySpeed={5000}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <div className="individual-info">
                <img src={testimonial.image} alt={testimonial.name} />
                <h5>{testimonial.name}</h5>
              </div>
              <div className="testimonial-caption">
                <h4>{testimonial.title}</h4>
                <p>{testimonial.text}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Home;
