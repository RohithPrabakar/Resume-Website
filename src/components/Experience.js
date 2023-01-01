import React from "react";

const Experience = ({exps}) => (
    <div className="experiences">
      {exps.map(exp => {
        return(
          <div className="exp">
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