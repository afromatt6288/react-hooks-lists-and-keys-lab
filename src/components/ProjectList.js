import React from "react";
import ProjectItem from "./ProjectItem";


function ProjectList({ projects }) {
  const list = projects.map((project) => {
    return (
    <ProjectItem key={project.id} name={project.name} about={project.about} technologies={project.technologies}/>
  )
})
  // const list = projects.map(ProjectItem, <ProjectItem key={projects.id}/>)
  // const list = projects.map((project) => ({ProjectItem}, <ProjectItem key={project.id}))
 
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {list}
      </div>
    </div>
  );
}

export default ProjectList;
