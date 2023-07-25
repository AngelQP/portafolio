// import {LinkRef} from './ContainerStyles'
import Logo from '/img/fondo1.webp';
import Hamburguer from '/img/ham-menu.svg';
import Close from '/img/ham-menu-close.svg';

import '../styles/header.css';
import { useState } from 'react';

export const Header = () => {

  const [toggleMenuActive, setToggleMenuActive] = useState(false);

  const ToogleMenu = () => {
    setToggleMenuActive(!toggleMenuActive);
  }

  return (
    <header>
      <div className="header__container">

        <div className="header__logo-container">
          <img className='header__logo-img' src={Logo} alt="Angel Quispe Pomajulca" />
          <span className='header__logo_text'>Angel Quispe</span>
        </div>

        <nav className="header__main">

          <ul className="header__links">
            <li className="header__links-wrapper">
              <a href="#hero" className='header__link'>Inicio</a>
            </li>
            <li className="header__links-wrapper">
              <a href="#about" className='header__link'>Acerca de mí</a>
            </li>
            <li className="header__links-wrapper">
              <a href="#projects" className='header__link'>Proyectos</a>
            </li>
            <li className="header__links-wrapper">
              <a href="#contact" className='header__link'>Contacto</a>
            </li>
          </ul>

          <div onClick={ToogleMenu} className="header__main-menu-toggle">
            <img className={ `header__main-ham-menu ${toggleMenuActive ? 'd-none': ''} `} src={Hamburguer} alt="Menu Hamburguer" />
            <img className={ `header__main-close-menu ${toggleMenuActive ? '': 'd-none'} `} src={Close} alt="Close Menu" />
          </div>

        </nav>

        <div className={ `header__menu ${toggleMenuActive ? 'header__menu--active': ''} `}>
          <ul className="header__menu-links">
            <li className="header__menu-link">
              <a href="#hero">Home</a>
            </li>
            <li className="header__menu-link">
              <a href="#about">About</a>
            </li>
            <li className="header__menu-link">
              <a href="#projects">Projects</a>
            </li>
            <li className="header__menu-link">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

      </div>

    </header>
  )
}
