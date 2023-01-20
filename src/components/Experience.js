import React from "react";

const Experience = ({exps}) => (
    <div className="section">
      <h2>Experience</h2>
      {exps.map((exp,index) => {
        return(
          <div key={index} className="exp">
            <h3>{exp.position}</h3>
            <h3>{exp.location}</h3>
            <p>{exp.date}</p>
            <ul>
              {exp.details.map((detail,index) => {
                return(
                  <li key={index}>{detail}</li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  );

  export default Experience;