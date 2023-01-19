import React from "react";
const Education = ({educ}) => (
    <div className="section">
      <h2>Education</h2>
      {educ.map((edu, index) => {
        return(
          <div key={index}className="education">
            <h3>{edu.degree}</h3>
            <p>{edu.college}</p>
            <p><span className="highlight">Expected Graduation Date: </span>{edu.graduationDate}</p>
            <p><span className="highlight">Relevant Coursework:</span> <br/>{edu.coursework.join(', ')}</p>
            <p><span className="highlight">Honors:</span> <br/>{edu.honors.join(' | ')}</p>
          </div>
        )
      })}
    </div>
);

export default Education;