import { useState } from 'react'
import './Header.css'
import menuIcon from '../assets/menu.png'
import closeIcon from '../assets/x.png'

export function Header () {

const [isMenuOpen, setIsMenuOpen] = useState(false)



const menuItems = [
    {id: 'home', label: 'Inicio'},
    {id: 'about', label: 'Sobre mí'},
    {id: 'skills', label: 'Habilidades'},
    {id: 'projects', label: 'Proyectos'},
    {id: 'contact', label: 'Contacto'}
]


return (
  <header className="header">
    <nav className='nav container'>
      <div className="nav-logo">
        <h2 className="nav-title">AAC</h2>
      </div>
    <ul className={`nav-list ${isMenuOpen ? 'nav-menu-show' : ''}`}>
      {menuItems.map(item => (
        <li key={item.id} className='nav-item'>
          <a href={`#${item.id}`} className="nav-link">{item.label}</a>
        </li>
      ))}
      <div className="nav-close" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <img src={closeIcon} alt='Menú' className='nav-img'></img>
    </div>
    </ul>

    <div className="nav-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <img src={menuIcon} alt='Menú' className='nav-img'></img>
    </div>
    
    </nav>

    


  </header>



)

}