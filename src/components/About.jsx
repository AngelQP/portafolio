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
            Aquí encontrarás más información sobre mi perfil como desarrollador backend, las tecnologías con las que trabajo y las habilidades que utilizo sistemas de gestión y aplicaciones web.
          </TitleParagraph>

        </TitleSection>

        <div className="about__content">

          <div className="about__content-main">

            <h3 className="about__content-title">Conóceme</h3>

            <div className="about__content-details">

            <p className="about__content-details-paragraph">
              Soy un <strong>Backend Developer</strong> enfocado en el desarrollo de APIs y sistemas de gestión utilizando tecnologías como NestJS, PostgreSQL y TypeORM, construir soluciones escalables, bien estructuradas y orientadas a la lógica de negocio, integrando React para crear interfaces funcionales que complementen el backend. Te invito a revisar algunos de mis trabajos en la sección de Proyectos
            </p>
            <p className="about__content-details-paragraph">
              Actualmente he desarrollado un sistema ERP para la gestión de producción, inventario y ventas de una empresa de postres. Estoy abierto a oportunidades de trabajo freelance o posiciones junior backend, donde pueda aportar mis conocimientos, seguir aprendiendo y crecer profesionalmente. Si tienes una oportunidad que se alinee con mi perfil, no dudes en <a href="https://wa.me/979379654?text=Hola%20quiero%20conocer%20más%20sobre%20tus%20servicios" target="_blank" rel="noreferrer"> <strong>contactarme</strong></a>.
              También me gusta compartir lo que aprendo sobre desarrollo y programación a través de <a rel="noreferrer" href="https://www.linkedin.com/in/angel-quispe-pomajulca-562327116/" target="_blank"> <strong>LinkedIn </strong></a>.
            </p>
            {/* <p className="about__content-details-paragraph">
              Estoy abierto a oportunidades de trabajo freelance o posiciones junior backend, donde pueda aportar mis conocimientos, seguir aprendiendo y crecer profesionalmente. Si tienes una oportunidad que se alinee con mi perfil, no dudes en <a href="https://wa.me/979379654?text=Hola%20quiero%20conocer%20más%20sobre%20tus%20servicios" target="_blank" rel="noreferrer"> <strong>contactarme</strong></a>.
            </p> */}
            </div>

            <LinkRef $normal href='#contact'>Contacto</LinkRef>

          </div>

          <div className="about__content-skills">
            <h3 className="about__content-title">Mis Habilidades</h3>
            <div className="skills">
              <ContainerSkills>NestJS</ContainerSkills>
              <ContainerSkills>Express</ContainerSkills>
              <ContainerSkills>TypeORM</ContainerSkills>
              <ContainerSkills>PostgreSQL</ContainerSkills>
              <ContainerSkills>REST APIs</ContainerSkills>
              <ContainerSkills>JWT</ContainerSkills>
              <ContainerSkills>React</ContainerSkills>
              <ContainerSkills>TypeScript</ContainerSkills>
              <ContainerSkills>JavaScript</ContainerSkills>
              <ContainerSkills>Tailwind</ContainerSkills>
              <ContainerSkills>Shadcn</ContainerSkills>
              <ContainerSkills>Git</ContainerSkills>
              <ContainerSkills>GitHub</ContainerSkills>
              <ContainerSkills>Responsive Design</ContainerSkills>
              <ContainerSkills>Terminal</ContainerSkills>
            </div>
          </div>

        </div>

      </MainContainer>

    </section>
  )
}
