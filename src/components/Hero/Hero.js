import React from "react";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import "./Hero.css";
function Hero() {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <div></div>
          <span>The Best Fitness Club In Addis Ababa</span>
        </div>
        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In Here We Will Help You To Shape And Build Your Ideal Body And
              Live Up Your Life To Full set.
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>+ 140</span>
            <span>Expert couches</span>
          </div>
          <div>
            <span>+ 180</span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>+ 50</span>
            <span>Fitness Programs</span>
          </div>
        </div>
        {/* hero butttons */}
        <div className="hero-button">
          <button className="btn">Learn More</button>
          <button className="btn">Get Started</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <div className="heart-rate">
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>
        {/* hero images */}
        <img src={hero_image} alt="" className="hero_image" />
        <img src={hero_image_back} alt="" className="hero_image_back" />

        {/* calories */}
        <div className="calories">
          <img src={calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
