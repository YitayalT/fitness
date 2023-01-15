import React from "react";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import "./Hero.css";
import  NumberCounter  from 'number-counter';
import { motion } from 'framer-motion';
const Hero = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const transition = { type: 'spring', duration: 3 };

  return (
    <div className="hero" id="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The Best Fitness Club In Addis Ababa</span>
        </div>
        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>
            <span> Your</span>
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
            <span>
              <NumberCounter end={140} start={100} delay="4" prefix="+" />
            </span>
            <span>Expert couches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={905} start={880} delay="4" prefix="+" />
            </span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={10} delay="4" prefix="+" />
            </span>
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

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/* hero images */}
        <img src={hero_image} alt="" className="hero_image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero_image_back"
        />

        {/* calories */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
