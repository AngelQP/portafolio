import '../styles/Footer.css'
import { MainContainer } from "./ContainerStyles"

import Linkend from '/img/linkedin-white.svg'
import Github from '/img/github-white.svg'
import Medium from '/img/book-white.svg'
import Whatsapp from '/img/whatsapp-white.svg'

export const Footer = () => {
  return (
    <footer className='main-footer'>
        <MainContainer>

          <div className="main-footer__upper">

            <div className="main-footer__row-1">
              <h2 className='heading-sm'>Social</h2>
              <div className="main-footer__social-content">
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/angel-quispe-pomajulca-562327116/'>
                  <img className='main-footer__icon' src={Linkend} alt="Linkedin" />
                </a>
                <a target='_blank' rel='noreferrer' href='https://github.com/AngelQP'>
                  <img className='main-footer__icon' src={Github} alt="Github" />
                </a>
                <a target='_blank' rel='noreferrer' href='https://dev.to/devangel_2997'>
                  <img className='main-footer__icon' src={Medium} alt="Medium" />
                </a>
                <a target='_blank' rel='noreferrer' href='https://wa.me/+51979379654?text=Hola😀%20estoy%20interesado(a)%20tu%20perfil%20de%20programador%20frontend 👨‍💻'>
                  <img className='main-footer__icon' src={Whatsapp} alt="Whatsapp" />
                </a>
              </div>
            </div>

            <div className="main-footer__row-2">
              <h2 className="heading-sm">Angel Quispe</h2>
              <p className="main-footer__short-desc">
                Un desarrollador web enfocado en frontend que construye el frontend de sitios y aplicaciones web mejorando la calidad del producto o servicio.
              </p>
            </div>

          </div>

          <div className="main-footer__lower">
            2023. Hecho por
            <a rel="noreferrer" target="_blank" href="#"> Angel Quispe</a>
          </div>

        </MainContainer>
    </footer>
  )
}
