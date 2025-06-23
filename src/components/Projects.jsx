import './Projects.css'

export function Projects () {

const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Plataforma de comercio electrónico completa con carrito de compras, sistema de pagos y panel de administración.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real y notificaciones.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Firebase", "CSS3"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Dashboard del clima con pronósticos detallados, mapas interactivos y alertas meteorológicas personalizadas.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "API Integration", "Chart.js"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "Herramienta de análisis de redes sociales con métricas en tiempo real y reportes automatizados.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "D3.js", "Express", "PostgreSQL"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Sitio web personal con diseño moderno, optimizado para SEO y con sistema de blog integrado.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "Tailwind CSS", "Contentful"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "Learning Management System",
      description: "Sistema de gestión de aprendizaje con cursos interactivos, evaluaciones y seguimiento de progreso.",
      image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "Socket.io", "MySQL"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    }
  ]

const featuredProjects = projects.filter(project => project.featured)
const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id='projects' className='projects-section'>
      <div className='projects-container'>
        <div className='projects-header'>
          <h2>Proyectos Destacados</h2>
          <p>Una selección de mis trabajos más recientes y representativos</p>
        </div>
        <div className='featured-projects'>
          {featuredProjects.map(project => (
            <div className='project-card featured'>
              <div className='project-image'>
                <img src={project.image} alt={project.title}></img>
              </div>
              <div className='project-overlay'>
                  <div className="project-links">
                    <a href={project.githubUrl} className="project-link" aria-label="Ver código">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                      </svg>
                    </a>
                    <a href={project.liveUrl} className="project-link" aria-label="Ver demo">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15,3 21,3 21,9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    </a>
                  </div>
              </div>
              <div className='project-content'>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className='project-technologies'>
                  {project.technologies.map(tech => (
                    <span className='tech-badge'>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='other-projects'>
          <h3>Otros Proyectos</h3>
          <div className='projects-grid'>
            {otherProjects.map(project => (
                <div className='project-card'>
                  <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.githubUrl} className="project-link" aria-label="Ver código">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                        </svg>
                      </a>
                      <a href={project.liveUrl} className="project-link" aria-label="Ver demo">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15,3 21,3 21,9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className='project-content'>
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <div className='project-technologies'>
                    {project.technologies.map(tech => (
                    <span className='tech-badge small'>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>

      </div>



    </section>
  )
}