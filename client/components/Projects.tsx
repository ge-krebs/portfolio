import projects from '../data/projects'

function Projects() {
  return (
    <div className="section-container">
      <h1>Projects</h1>
      <div className="project-container">
        {projects.map((project) => {
          return (
            <div key={project.id} className="single-project">
              <p>{project.name}</p>
              <p>{project.description}</p>
              <p>{project.github}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
