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
                            return detail.includes('GitHub repository') ? (
                                <li key={index}>
                                    <a href={project.github_link}>{detail}</a>
                                </li>
                            ) : (
                                <li key={index}>{detail}</li>
                            );
                        })}
                    </ul>
                </div>
            );
        })}
    </div>
);

export default Projects;