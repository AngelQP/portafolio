import '../styles/Hero.css';
import Linkend from '/img/linkedin-dark.svg'
import Github from '/img/github-dark.svg'
import Medium from '/img/book-dark.svg'
import Whats from '/img/whatsapp-dark.svg'

import { LinkRef } from './ContainerStyles';

export const Hero = () => {
  return (
    <section id='hero' className='home-hero'>

      <div className="home-hero__content">
        <h1 className='home-hero__title'>Hola, Yo soy Angel Quispe</h1>
        <div className="home-hero__info">
          <p className='text-primary'>
            Un desarrollador web enfocado en frontend que construye el frontend de sitios y aplicaciones web mejorando la calidad del producto o servicio.
          </p>
        </div>
        <div className="home-hero__cta">
          <LinkRef href='#projects'>Proyectos</LinkRef>
        </div>
      </div>

      <div className="home-hero__socials">
        <div className="home-hero__social">
          <a href="https://www.linkedin.com/in/angel-quispe-pomajulca-562327116/" className="home-hero__social-link" target='_blank' rel='noreferrer'>
            <img src={Linkend} alt="Red Social Linkedin" />
          </a>
        </div>
        <div className="home-hero__social">
          <a href="https://github.com/AngelQP" className="home-hero__social-link" target='_blank' rel='noreferrer'>
            <img src={Github} alt="Red Social Github" />
          </a>
        </div>
        <div className="home-hero__social">
          <a href="https://dev.to/devangel_2997" className="home-hero__social-link" target='_blank' rel='noreferrer'>
            <img src={Medium} alt="Red Social Medium" />
          </a>
        </div>
        <div className="home-hero__social">
          <a href="https://wa.me/+51979379654?text=Hola😀%20estoy%20interesado(a)%20tu%20perfil%20de%20programador%20frontend 👨‍💻" className="home-hero__social-link" target='_blank' rel='noreferrer'>
            <img src={Whats} alt="Whatsapp" />
          </a>
        </div>
      </div>

      <div className="home-hero__mouse-scroll-cont">
        <div className="mouse">
        </div>
      </div>

    </section>
  )
}
