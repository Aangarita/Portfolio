import './Footer.css'

export function Footer () {

  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-content'>
          <div className='footer-head'>
            <div className='footer-logo'>
              <span className='logo-text'>AAC</span>
            </div>
            <p className='footer-description'>
              Desarrollador web full stack especializado en crear experiencias 
              digitales modernas y funcionales.
            </p>
            <div className="footer-social">
                  <a href="https://www.linkedin.com/in/alejandro-angarita-cardona-9b8570368/" className="footer-social-link" aria-label="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </a>
                  <a href="https://github.com/Aangarita" className="footer-social-link" aria-label="GitHub">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                  </a>
            </div>
          </div>
          <div className="footer-links">
              <div className="footer-section">
                <h4>Navegación</h4>
                <ul>
                  <li><a href="#home">Inicio</a></li>
                  <li><a href="#about">Acerca de</a></li>
                  <li><a href="#skills">Habilidades</a></li>
                  <li><a href="#projects">Proyectos</a></li>
                  <li><a href="#contact">Contacto</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Contacto</h4>
                <ul>
                  <li><a href="mailto:aangaritacardona@gmail.com">aangaritacardona@gmail.com</a></li>
                  <li><a href="tel:+573167583490">+57 316 758 3490</a></li>
                  <li><span>Colombia</span></li>
                </ul>
              </div>
            </div>
            
        </div>
        <div className="footer-bottom">
            <div className="footer-copyright">
              <p>&copy; 2025 Alejandro Angarita. Todos los derechos reservados, Hecho con React.</p>
            </div>
            <a className="scroll-to-top" href='#home'>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="19" x2="12" y2="5"/>
                <polyline points="5,12 12,5 19,12"/>
              </svg>
            </a>
        </div>
      </div>
    </footer>

  )
}