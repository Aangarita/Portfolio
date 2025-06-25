import './Projects.css'


export function Projects () {

const projects = [
    {
      id: 1,
      title: "Carrito de compras",
      description: "Aplicación web desarrollada con React que simula una tienda virtual. Permite agregar productos al carrito, visualizar la cantidad seleccionada y calcular el total en tiempo real. Cada producto se muestra con imagen, nombre y precio, y cuenta con botón para añadir al carrito. Ideal para practicar componentes reutilizables, manejo de eventos y lógica de negocio en aplicaciones de e-commerce.",
      image: "https://addonmall.com/assets/uploads/2020/08/widget-carrito.png",
      technologies: ["React", "JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/Aangarita/Carrito-de-compras",
      liveUrl: "#",
      featured: true
      
    },
    {
      id: 2,
      title: "Pokedex",
      description: "Aplicación web que consume la PokéAPI para mostrar una Pokédex dinámica con información detallada de los Pokémon. Permite explorar y buscar criaturas por nombre y cuenta con un sistema de filtrado por tipo, lo que mejora la experiencia del usuario al facilitar la navegación y clasificación. Desarrollada con JavaScript, enfocada en el consumo de APIs REST y la manipulación del DOM.",
      image: "https://user-images.githubusercontent.com/22878736/133997220-41182022-03cf-4697-ac0c-2e7a38a35c93.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/Aangarita/Pokedex",
      liveUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Rick and Morty App",
      description: "Aplicación web que consume la API pública de Rick and Morty para mostrar una galería interactiva de personajes. Cada tarjeta incluye el nombre y la imagen del personaje, permitiendo una visualización limpia y ordenada. Este proyecto demuestra el manejo de peticiones HTTP, renderizado dinámico de contenido y diseño responsivo. Ideal para practicar consumo de APIs REST y manipulación del DOM con JavaScript.",
      image: "https://codesandbox.io/api/v1/sandboxes/tmn67/screenshot.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/Aangarita/Rick-and-Morty-App",
      liveUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "To Do List App",
      description: "Aplicación de tareas desarrollada con JavaScript, que permite agregar, eliminar y marcar tareas como completadas. Incluye un sistema de filtros que permite al usuario visualizar todas las tareas, solo las completadas o solo las pendientes. Cada tarea puede ser tachada con un clic y eliminada de forma individual. Es una práctica sólida de manipulación del DOM, control de estado y lógica condicional en interfaces interactivas.",
      image: "https://lh7-us.googleusercontent.com/zMSspy5Iv3RTp8JZUDgzgGGzOLPWb-5hmaZfKcFZnS774kRz_jjH9FxTkTDN7nrGAS6Wi1vr3YrHTRGX_MC23C7aHSI6-Ag67UzC8FWTmKi9PlYYZMPwkB9YDb34rFXOHeO73wa19ODIa8pJSWhco8I",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/Aangarita/Lista-Tareas",
      liveUrl: "#",
      featured: true
    },
    {
      id: 5,
      title: "Reto FAQ",
      description: "Proyecto inspirado en un reto de Frontend Mentor. Se trata de un componente de preguntas frecuentes (FAQ) con diseño responsive y funcionalidad interactiva: al hacer clic en cada pregunta, se despliega su respuesta de forma elegante. El proyecto demuestra el uso de HTML, CSS moderno y JavaScript para manipulación del DOM y animaciones básicas. Es ideal para mostrar comprensión en diseño de UI, estructuras semánticas y lógica de interacción.",
      image: "https://foolishdeveloper.com/wp-content/uploads/2022/02/Simple-FAQ-Section-using-javascript.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/Aangarita/FAQs",
      liveUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "Formulario de Contacto",
      description: "Formulario de contacto con validación de campos desarrollado con HTML, CSS y JavaScript. Incluye campos requeridos como nombre, correo electrónico, tipo de consulta, mensaje y consentimiento, con diseño responsivo y accesible. La validación se realiza tanto visual como funcionalmente, evitando el envío de datos incompletos. Es un ejercicio práctico de formularios modernos, enfoque en experiencia de usuario (UX) y validaciones personalizadas en el frontend.",
      image: "https://i.ytimg.com/vi/rxrXzJqkdW0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDWbb1304efiz5VLxqpiHxUXC3k0w",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
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