import styled from "styled-components";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

import { Text } from "../contexts/LanguageContext";

const About = ({ opacity }) => {
  return (
    <Wrapper id="about-us" opacity={opacity}>
      <Separator opacity={opacity} />
      <Title>Our Clinic</Title>
      <Content>
        <Founder>
          <Avatar src="/assets/MeeraAsokan.jpg" alt="Founder" />
          <Name>Meera Asokan</Name>
          <Qualification>BDS from Rajiv Gandhi University of Health Sciences, India (2011)</Qualification>
          <Qualification>Ketua Pergigian Penjagaan Khas, Hospital Rehabilitasi Cheras (2017-2019)</Qualification>
        </Founder>
        <Description opacity={opacity}>
          <p>
          <QuotesL /> <span><Text tid="aboutUsDescription" /></span> <QuotesR />
          </p>
        </Description>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 10% 5% 10%;
  opacity: ${(props) => props.opacity};

  @media (width < 1000px) {
    display: block;
    margin: 10%;
  }
`;

const Separator = styled.div`
  border-top: 1px solid var(--eerie-black);
  display: flex;
  justify-content: center;
  width: 100%;

  animation: ${(props) => props.opacity && "expand"} 1s;

  @keyframes expand {
    from {
      width: 0px;
    }
  }
`;
const Title = styled.h2`
  padding: 50px;
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
`;
const Founder = styled.div`
  width: 60%;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (width < 1000px) {
    width: 100%;
    padding: 10% 0;
  }
`
const Name = styled.p` 
  font-weight: 600;
  margin-bottom: 10px;
`;

const Qualification = styled.p`
  font-size: 0.8rem;
  margin-bottom: 5px;
`;

const Avatar = styled.img`
  z-index: 100;
  height: 150px;
  width: 150px;
  margin-bottom: 10px;
  border-radius: 75px;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 80px;

  @media (width < 1000px) {
    display: block;
    padding: 5%;
  }
`;

// const Icons = styled.div`
//   width: 50%;
//   padding: 100px 0 0 0;
//   align-self: center;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;

//   div {
//     height: 80px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: space-between;
//   }

//   @media (width < 1000px) {
//     width: 100%;
//     padding: 10% 0;
//   }
// `;

const Description = styled.div`
  width: 50%;
  font-weight: 300;
  line-height: 45px;
  font-size: 1.1rem;
  font-style: italic;
  align-self: center;
  position: relative;
  z-index: 100;

  @media (width < 1000px) {
    width: 100%;
    font-size: 0.8em;
  }

  animation: ${(props) => props.opacity && "slideLeft"} 1s;

  @keyframes slideLeft {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;

const QuotesL = styled(RiDoubleQuotesL)`
  opacity: 0.7;
  font-size: 35px;
`;
const QuotesR = styled(RiDoubleQuotesR)`
  opacity: 0.7;  
  font-size: 35px;
`;

export default About;
