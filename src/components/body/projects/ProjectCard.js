import React from "react";
import "./ProjectCard.css";
function ProjectCard({ project }) {
  return (
    <div className="project-container">
      
        <img src={project.image} className="image-project" alt="" />
        <div className="project-desciption">
            <label className="project-title">{project.title}</label>
            <div className="project-links">
              {project.demo && (
                <a className="project-link" href="project.demo">
                  <div className="link-button">
                    <i class="fi-rr-globe"></i>Demo
                  </div>
                </a>
              )}
              <br />
              {project.github && (
                <a className="project-link" href="project.github">
                  <div className="link-button">
                    {" "}
                    <i class="devicon-github-original colored"></i>Github
                  </div>{" "}
                </a>
              )}
            </div>
        
          <p className='project-text'>{project.about}</p>
          <div className="project-tags">
            {project.tags.map((tag) => {
              return <label className="tag">{tag}</label>;
            })}
          </div>
        </div>
   
    </div>
  );
}

export default ProjectCard;

