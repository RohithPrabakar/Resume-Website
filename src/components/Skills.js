import React from "react";

const Skills = ({skills}) => (
    <div className="section">
        <h2>Skills</h2>
        {skills.map((skill, index) => {
            return(
                <div key={index} className="skill">
                    <h3>{skill.name}</h3>
                    <p>{skill.skills.join(', ')}</p>
                </div>
            )
        })}    
    </div>
)

export default Skills;