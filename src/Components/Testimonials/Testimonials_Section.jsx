import React from "react";
import "./Testimonials_Section.css";
import Carousel from "react-elastic-carousel";
import testimonials from "../Data/data";

function Testimonials_Section() {
  return (
    <div>
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
    </div>
  );
}

export default Testimonials_Section;
