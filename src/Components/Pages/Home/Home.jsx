import React from "react";
import "./Home.css";

import about from "../../../Assets/hero-1.jpeg";
import lucy from "../../../Assets/test3.jpeg";
import test1 from "../../../Assets/test3.jpeg";
import test2 from "../../../Assets/test2.jpeg";

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
            <img src={about} alt="" />
          </div>

          <div className="about-text">
            <h4>MUTC MISSION</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
              iure sequi quam neque minus provident consequatur eveniet hic
              numquam dolorem quia veniam, unde saepe in. Rerum aperiam earum,
              impedit repellendus beatae voluptates harum ad consequatur! Ea
              facilis vel deleniti assumenda accusamus quo fugiat veritatis
              provident. Voluptatem itaque similique quis minus.
            </p>
            <h4>MUTC VALUES</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              eveniet, deleniti facilis dignissimos quos saepe quas laudantium
              porro fugiat hic aliquid veritatis necessitatibus animi tenetur
              officia exercitationem aperiam, distinctio iste cum blanditiis
              velit, quis maiores eaque sit? Distinctio sint sed sequi, ratione
              consequuntur aliquam quod autem ex quis similique eaque.
            </p>
            <h4>MUTC OBJECTIVES</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed illo
              asperiores minus sit fugiat sint quasi natus distinctio, aliquam
              obcaecati voluptatem labore itaque quidem consequuntur modi saepe
              eum atque error dicta ducimus? Possimus reiciendis dolorum aperiam
              fugit nostrum. Nobis corrupti totam ducimus officiis similique
              illo dolorem hic voluptatem itaque ipsum?
            </p>
          </div>
        </div>
      </div>

      <div className="testimonials-container" id="testimonials">
        <div class="carousel-item active">
          <div className="individual-info">
          <img src={lucy} class="d-block w-100" alt="..." />
          <h5>Lucy Wambui</h5>
          </div>
          <div class="carousel-caption d-none d-md-block">
            <h5>Computer Science Student, Alumni</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nam quae, 
              accusamus voluptatum autem atque iste adipisci debitis sunt quidem?</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
