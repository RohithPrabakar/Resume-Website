import React from "react";
const Education = ({educ}) => (
    <div className="educations">
      <h2>Education</h2>
      {educ.map(edu => {
        return(
          <div className="education">
            <h3>{edu.degree}</h3>
            <p>{edu.college}</p>
            <p>{edu.graduationDate}</p>
            <p>Relevant Coursework: <br/>{edu.coursework.join(', ')}</p>
            <p>Honors: <br/>{edu.honors.join(' | ')}</p>
          </div>
        )
      })}
    </div>
);

export default Education;