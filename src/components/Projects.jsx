import '../styles/Projects.css'
import { ContainerSkills, LinkRef, MainContainer, ProjectContentText, ProjectContentTextParagraph, ProjectContentTextTitle, ProjectImage, ProjectRow, Title, TitleParagraph, TitleSection } from './ContainerStyles';

import Proyecto1 from '/img/proyecto-1.png';
import Proyecto2 from '/img/proyecto-2.png';
import Proyecto3 from '/img/proyecto-3.png';
import Proyecto4 from '/img/proyecto-4.png';
import Proyecto5 from '/img/proyecto-5.png';

export const Projects = () => {
  return (
    <section id="projects" className="projects">
      <MainContainer> 

        <TitleSection>
          <Title>
            Proyectos
          </Title>
          <TitleParagraph>
            Aquí encontrarás algunos de los proyectos personales que he desarrollado y el aprendizaje que obtuve con cada uno de ellos.
          </TitleParagraph>
        </TitleSection>

        <div className="projects__content">

          <ProjectRow>
            <ProjectImage src={Proyecto2}></ProjectImage>
            <ProjectContentText>
              <ProjectContentTextTitle>
                Advice Generator
              </ProjectContentTextTitle>
              <ProjectContentTextParagraph>
                Es un generador de consejos, parte de los diferentes retos que se propone en <b><a href="https://www.frontendmentor.io/home" target='_blank' rel='noreferrer'>frontendmentor</a></b>  que cuenta con consumo de una API. Además se adapta para cualquier tipo de dispositivo.
              </ProjectContentTextParagraph>

              <div className="skills">
                <ContainerSkills>HTML</ContainerSkills>
                <ContainerSkills>CSS</ContainerSkills>
                <ContainerSkills>Tailwind</ContainerSkills>
                <ContainerSkills>Javascript</ContainerSkills>
                <ContainerSkills>Vite</ContainerSkills>
              </div>

              <div className='container-links'>
                <LinkRef target='_blank' href='https://github.com/AngelQP/AngelQP.github.io-Reto-Frontend-2' $normal>Código</LinkRef>
                <LinkRef target='_blank' href='https://advice-generator-uk88.onrender.com/' $normal>Website</LinkRef>
              </div>
            </ProjectContentText>
          </ProjectRow>

          <ProjectRow>
            <ProjectImage src={Proyecto3}></ProjectImage>
            <ProjectContentText>
              <ProjectContentTextTitle>
                Calculator App
              </ProjectContentTextTitle>
              <ProjectContentTextParagraph>
                Esta es una calculadora web, reto departe de <b><a href="https://www.frontendmentor.io/home" target='_blank' rel='noreferrer'>frontendmentor</a></b>, permite realizar diversos cálculos y elegir el tema que deseas, el tema es guardado dentro localstorage de modo que recuerda el último tema elegido en la app.
              </ProjectContentTextParagraph>

              <div className="skills">
                <ContainerSkills>HTML</ContainerSkills>
                <ContainerSkills>CSS</ContainerSkills>
                <ContainerSkills>Javascript</ContainerSkills>
                <ContainerSkills>Tailwind</ContainerSkills>
                <ContainerSkills>Vite</ContainerSkills>

              </div>

              <div className='container-links'>
                <LinkRef href='https://github.com/AngelQP/calculadora' target='_blank' $normal>Código</LinkRef>
                <LinkRef href='https://calculadora-hwee.onrender.com/' target='_blank' $normal>Website</LinkRef>
              </div>
            </ProjectContentText>
          </ProjectRow>

          <ProjectRow>
            <ProjectImage src={Proyecto4}></ProjectImage>
            <ProjectContentText>
              <ProjectContentTextTitle>
                Pokémon App
              </ProjectContentTextTitle>
              <ProjectContentTextParagraph>
                Es una aplicación que consume el API de Pokemón, donde se muestra los diferentes pokemones en cada generación, cuenta con lazy loading la página. Además, es responsiva se adapta a cualquier dispositivo.
              </ProjectContentTextParagraph>

              <div className="skills">
                <ContainerSkills>HTML</ContainerSkills>
                <ContainerSkills>CSS</ContainerSkills>
                <ContainerSkills>Javascript</ContainerSkills>
                <ContainerSkills>React</ContainerSkills>
                <ContainerSkills>React-Router</ContainerSkills>
                <ContainerSkills>Styled Components</ContainerSkills>

              </div>

              <div className='container-links'>
                <LinkRef href='https://github.com/AngelQP/pokemon-app' target='_blank' $normal>Código</LinkRef>
                <LinkRef href='https://pokemon-app-uurc.onrender.com/' target='_blank' $normal>Website</LinkRef>
              </div>
            </ProjectContentText>
          </ProjectRow>

          <ProjectRow>
            <ProjectImage src={Proyecto1}></ProjectImage>
            <ProjectContentText>
              <ProjectContentTextTitle>
                Landing Page
              </ProjectContentTextTitle>
              <ProjectContentTextParagraph>
                Una landing page responsiva que permite mostrarse en diversos dispositivos, es parte del reto de <b><a href="https://www.frontendmentor.io/home" target='_blank' rel='noreferrer'>frontendmentor</a></b>.
              </ProjectContentTextParagraph>

              <div className="skills">
                <ContainerSkills>HTML</ContainerSkills>
                <ContainerSkills>CSS</ContainerSkills>
                <ContainerSkills>Javascript</ContainerSkills>
                <ContainerSkills>Tailwind</ContainerSkills>

              </div>

              <div className='container-links'>
                <LinkRef href='https://github.com/AngelQP/AngelQP.github.io-Reto-Frontend-1' target='_blank' $normal>Código</LinkRef>
                <LinkRef href='https://reto-frontend-1.onrender.com/' target='_blank' $normal>Website</LinkRef>
              </div>
            </ProjectContentText>
          </ProjectRow>

          <ProjectRow>
            <ProjectImage src={Proyecto5}></ProjectImage>
            <ProjectContentText>
              <ProjectContentTextTitle>
                Nintendo Landing Page
              </ProjectContentTextTitle>
              <ProjectContentTextParagraph>
                Una página responsiva que se adapta a cualquier dispositivo, está maquetada con Bootstrap tomando como muestra la página original, se aplica diversos conceptos de animaciones y transformaciones en CSS.
              </ProjectContentTextParagraph>

              <div className="skills">
                <ContainerSkills>HTML</ContainerSkills>
                <ContainerSkills>CSS</ContainerSkills>
                <ContainerSkills>Javascript</ContainerSkills>
                <ContainerSkills>Bootstrap</ContainerSkills>

              </div>

              <div className='container-links'>
                <LinkRef href='https://github.com/AngelQP/bootstrap-nintendo/tree/main' target='_blank' $normal>Código</LinkRef>
                <LinkRef href='https://bootstrap-nintendo.onrender.com/' target='_blank' $normal>Website</LinkRef>
              </div>
            </ProjectContentText>
          </ProjectRow>
          
        </div>

      </MainContainer>
    </section>
  )
}
