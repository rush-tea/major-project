import React from "react";
import Header from "../../components/header/header";
import carouselImage from "../../assets/hero-carousel-1.svg";
import featureImage from "../../assets/feature-7.jpg";

import "../../App.css";

const Home = () => {
  return (
    <>
      <Header />
      <section>
        <div className="section-container">
          <div>
            <img
              src={carouselImage}
              alt="carousel"
              className="section-image"
            />
          </div>
          <div className="section-text-container">
            <div>
              <h2>Welcome to Placement Cell</h2>
            </div>
            <div>
              <p>We Will Support You In Your Entire Placement Journey.</p>
            </div>
            <div>
              <button className="section-button">Get Started</button>
            </div>
          </div>
        </div>
      </section>
      <section className="section-container">
        <div className="section-item">
          <div>
            <h3>Placement Cell</h3>
            <p>
              The Placement Cell plays a crucial role in locating job
              opportunities for under graduates and post graduates passing out
              from the college by keeping in touch with reputed firms and
              industrial establishments. The placement cell operates round the
              year to facilitate contacts between companies and graduates. The
              number of students placed through the campus interviews is
              continuously rising.
            </p>
            <button className="section-button">Get Started</button>
          </div>
          <div className="section-item-image-container">
            <img src={featureImage} alt="feature"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
