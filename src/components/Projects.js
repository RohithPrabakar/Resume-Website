import React from "react";

const Projects = ({projects}) => (
    <div className="section">
        <h2>Projects</h2>
        {projects.map((project, index) => {
            return (
                <div key={index} className="project-list link">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <ul>
                        {project.details.map((detail, index) => {
                            if(detail.includes('GitHub repository')){
                                return (<li key={index}>
                                    <a href={project.github_link}>{detail}</a>
                                </li>)
                            }
                            else if (detail.includes('Design Narrative')){
                                return(
                                    <li key={index}>
                                    <a href={project.devto_link}>{detail}</a>
                                </li>
                                )
                            }
                            else {
                                return(<li key={index}>{detail}</li>)
                            }
                        })}
                    </ul>
                </div>
            );
        })}
    </div>
);

export default Projects;