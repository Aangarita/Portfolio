import './Hero.css'
import profile from '../assets/profile.jpg'

export function Hero () {

  return (
    <section id='home' className='hero'>
        <div className='left-side'>
            <div className='hero-text'>
              <h3 className='hero-greeting'>¡Hola! Soy</h3>
              <h1 className='hero-name'>Alejandro Angarita</h1>
              <h2 className='hero-job'>Desarrollador Web Full-Stack</h2>
              <p className='hero-description'>Especializado en crear experiencias web modernas y funcionales usando 
                las últimas tecnologías. Transformo ideas en aplicaciones web innovadoras 
                que impactan positivamente a los usuarios.
              </p>
            </div>
            <div className='hero-buttons'>  
              <a className="link btn btn-primary" href='#contact'>Contactar ↗</a>
              <a className="link btn btn-secondary" href='#projects'>Ver proyectos</a>   
            </div>
        </div>
        <div className='hero-img'>
            <img className='img-profile' src={profile} alt='profile-image'></img>
        </div>
    </section>

  )

}