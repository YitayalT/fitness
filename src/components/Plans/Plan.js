import React from "react";
import "./Plan.css";
import plansData  from "../../data/plansData";
import WhiteTick from '../../assets/whiteTick.png'
export const Plan = () => {
  return (
    <div className="plans-container">
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text"> READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITH US</span>
      </div>
      {/* plans card */}
      <div className="plans">
        {plansData.map((plan, index) => (
          <div className="plan" key={index}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, index) => (
                <div className="feature">
                  <img src={WhiteTick} alt="" srcset="" />
                  <span key={index}>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>See More benefits -&gt; </span>
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};
