import '../styles/About.css'

import { ContainerSkills, LinkRef, MainContainer, Title, TitleParagraph, TitleSection } from './ContainerStyles'


export const About = () => {
  return (
    <section id="about" className="about">

      <MainContainer>

        <TitleSection $normal>

          <Title>
            acerca de mí
          </Title>
          
          <TitleParagraph>
            Aquí encontrarás más información sobre mí, lo que hago y mis habilidades actuales, principalmente en términos de programación y tecnología.
          </TitleParagraph>

        </TitleSection>

        <div className="about__content">

          <div className="about__content-main">

            <h3 className="about__content-title">Conóceme</h3>

            <div className="about__content-details">

            <p className="about__content-details-paragraph">
              Soy un <strong>Frontend Web Developer</strong> que construye el front-end de sitios y aplicaciones web mejorando la calidad del producto o servicio. Dale un vistazo a algunos de mis trabahos en la sección de 
              <strong> Proyectos </strong>.
            </p>
            <p className="about__content-details-paragraph">
              También me gusta compartir contenido relacionado con lo que he aprendido en <strong>Desarrollo Web</strong>, de esta manera ayudar a otras persona de la comunidad de desarrolladores.
              No dude en contactarme o seguirme en 
              <a rel="noreferrer" href="https://www.linkedin.com/in/angel-quispe-pomajulca-562327116/" target="_blank"> <strong>Linkedin </strong></a>
              donde estaré publicando contenido útil relacionado con el desarrollo y la programación web.
            </p>
            <p className="about__content-details-paragraph">
              Estoy abierto a oportunidades de <strong>Trabajo</strong> donde pueda contribuir, aprender y crecer. Si tiene una buena oportunidad que coincida con mis habilidades y experiencia, no dude en ponerse en 
              <strong> Contacto </strong> conmigo.
            </p>
            </div>

            <LinkRef $normal href='#contact'>Contacto</LinkRef>

          </div>

          <div className="about__content-skills">
            <h3 className="about__content-title">Mis Habilidades</h3>
            <div className="skills">
              <ContainerSkills>HTML</ContainerSkills>
              <ContainerSkills>CSS</ContainerSkills>
              <ContainerSkills>Javascript</ContainerSkills>
              <ContainerSkills>React</ContainerSkills>
              <ContainerSkills>Tailwind</ContainerSkills>
              <ContainerSkills>Styled Components</ContainerSkills>
              <ContainerSkills>Bootstrap</ContainerSkills>
              <ContainerSkills>GIT</ContainerSkills>
              <ContainerSkills>Github</ContainerSkills>
              <ContainerSkills>Mobile First</ContainerSkills>
              <ContainerSkills>Responsive Design</ContainerSkills>
              <ContainerSkills>Terminal</ContainerSkills>
              <ContainerSkills>Express Basics</ContainerSkills>
              <ContainerSkills>SQL Basics</ContainerSkills>
            </div>
          </div>

        </div>

      </MainContainer>

    </section>
  )
}
