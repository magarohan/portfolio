import React from "react";
import mern from "../assets/MERN TODO app.png";

const projectData = [
    {
        title: "MERN TODO",
        imgSrc: mern,
        details: "A todo app where the user can enter and delete their tasks. The todo app was created using MERN stack.",
        link: "https://github.com/magarohan/MERN-TODO"
    },
    {
        title: "MERN TODO 2",
        imgSrc: mern,
        details: "Description for MERN TODO 2 project.",
        link: "#"
    },
    {
        title: "MERN TODO 3",
        imgSrc: mern,
        details: "Description for MERN TODO 3 project.",
        link: "#"
    }
];

function Projects() {
    return (
        <div className="projects-container">
            {projectData.map((project, index) => (
                <a href={project.link} className="project-link" key={index}>
                    <div className="project">
                        <h2>{project.title}</h2>
                        <div className="contains">
                            <img className="project-image" src={project.imgSrc} alt={project.title} />
                            <p className="project-details">{project.details}</p>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
}

export default Projects;
