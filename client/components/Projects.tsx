import projects from '../data/projects'

function Projects() {
  return (
    <div className="section-container">
      <h1>Recent Projects</h1>
      {projects[0].name}
      {projects[0].description}
      {projects[0].github}
    </div>
  )
}

export default Projects
