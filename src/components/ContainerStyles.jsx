import { styled } from "styled-components";


export const LinkRef = styled.a`
  display: inline-block;
  background-color: #a0e943;
  color: #fff;
  padding: ${props => props.$normal ? '1.5rem 5rem' : '1.5rem 8rem'};
  font-size: ${props => props.$normal ? '1.6rem' : '2rem'};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  border-radius: 5px;
  box-shadow: 0 5px 15px 0 rgba(0,0,0,0.15);
  transition: transform .3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const LinkRefSubmit = styled(LinkRef)`
  appearance: none;
  border: none;
  padding: 2rem 4rem;
  font-size: 1.6rem;

  @media only screen and  (max-width: 425px)  {
    width: 100%;
  }
`;

export const MainContainer = styled.div`
  max-width: 120rem;
  margin: auto;
  width: 92%;
`;

export const TitleSection = styled.div`
  margin-bottom: ${props => props.$normal ? '9rem' : '11rem'};

  @media only screen and  (max-width: 768px)  { 
    margin-bottom: 8rem;
  }
`;

export const Title = styled.h2`
  font-size: 4rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-align: center;
  margin-bottom: 3.5rem;
  position: relative;
  color: var(--color-font-main);

  &::after {
    content: '';
    position: absolute;
    top: calc(100% + 1.5rem);
    height: 5px;
    width: 3rem;
    background-color: var(--color-main);
    left: 50%;
    transform: translateX(-50%);
    border-radius: 5px;
  }
`;

export const TitleParagraph = styled.span`
  display: block;
  text-align: center;
  color: #555;
  font-size: 2rem;
  font-weight: 500;
  max-width: 80rem;
  margin: auto;
  line-height: 1.6;

  @media only screen and  (max-width: 425px)  { 
    font-size: 1.8rem;
  }
`;

export const ContainerSkills = styled.div`
  padding: 1rem 2rem;
  margin-bottom: 1.5rem;
  margin-right: 1.5rem;
  font-size: 1.6rem;
  background-color: rgba(153,153,153,.2);
  border-radius: 5px;
  font-weight: 600;
  color: #666;
  transition: background .3s;

  &:hover {
    background-color: rgba(153,153,153,.6);
  }
`;

export const ProjectRow = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 5rem;
  margin-bottom: 11rem;
  place-items: center;

  @media only screen and  (max-width: 768px)  {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 8rem;
    text-align: center;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  display: block;
  object-fit: cover;
`;

export const ProjectContentText = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;

  @media only screen and  (max-width: 768px)  {
    align-items: center;
  }
`; 

export const ProjectContentTextTitle = styled.h3`
  font-weight: 700;
  font-size: 2.8rem;
  margin-bottom: 2rem;
`;

export const ProjectContentTextParagraph = styled.p`
  font-size: 1.8rem;
  color: #666;
  max-width: 60rem;
  line-height: 1.7;
  margin-bottom: 3rem;
`;
