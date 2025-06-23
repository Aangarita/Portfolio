import './About.css'

export function About () {

  return (
    <section id='about' className='about-section'>
      <div className='about-me-left'>
        <div className='about-me-text'>
          <h2 className='about-me-title'>Acerca de mí</h2>
          <p className='about-me-description'>
            Soy un desarrollador web full stack apasionado por crear soluciones 
            tecnológicas innovadoras. Con más de 3 años de experiencia en el desarrollo 
            de aplicaciones web modernas, me especializo en JavaScript, React, Node.js 
            y tecnologías relacionadas.
          </p>
          <p className='about-me-description'>
            Mi enfoque se centra en escribir código limpio, mantener las mejores 
            prácticas de desarrollo y crear experiencias de usuario excepcionales. 
            Disfruto trabajando en equipos colaborativos y siempre estoy buscando 
            nuevas tecnologías para mejorar mis habilidades.
          </p>
        </div>
        <div className='about-me-stats'>
          <div className='stat'>
            <span className='stat-number'>2+</span>
            <span className='stat-label'>Proyectos completados</span>
          </div>
          <div className='stat'>
            <span className='stat-number'>1+</span>
            <span className='stat-label'>Años de Experiencia</span>
          </div>
        </div>
      </div>
      <div className='about-me-features'>
        <div className="feature">
          <div className="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="16,18 22,12 16,6"/>
              <polyline points="8,6 2,12 8,18"/>
            </svg>
          </div>
          <h3>Desarrollo Frontend</h3>
          <p>
            Interfaces modernas y responsivas usando React, JavaScript ES6+ 
            y CSS avanzado con enfoque en UX/UI.
          </p>
        </div>
        
        <div className="feature">
          <div className="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
          </div>
          <h3>Desarrollo Backend</h3>
          <p>
            APIs RESTful robustas con Node.js, Express y bases de datos 
            relacionales y no relacionales.
          </p>
        </div>
       
        <div className="feature">
          <div className="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
          </div>
          <h3>DevOps & Deployment</h3>
          <p>
            Despliegue en la nube, CI/CD, Docker y optimización de 
            rendimiento para aplicaciones escalables.
          </p>
        </div>
      </div>
      

    </section>
  )
}