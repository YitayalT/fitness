import React from "react";
import "./Programs.css";
import Programsdata from "../../data/programsData";
import rhightArrow from '../../assets/rightArrow.png'
function Programs() {
  return (
    <div className="programs" id="programs">
      {/* headers for the program section */}
      <div className="programs-header">
        <span className="stroke-text">Explore our </span>
        <span>Pograms</span>
        <span className="stroke-text">to shape you</span>
      </div>

      <div className="program-categories">
        {Programsdata.map((program) => (
          <div className="category" key={program.heading}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={rhightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programs;



