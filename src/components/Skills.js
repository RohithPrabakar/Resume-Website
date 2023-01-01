import React from "react";

const Skills = ({skills}) => (
    <div className="skills">
        <h2>Skills</h2>
        {skills.map(skill => {
            return(
                <div className="skill">
                    <h3>{skill.name}</h3>
                    <p>{skill.skills.join(', ')}</p>
                </div>
            )
        })}    
    </div>
)

export default Skills;