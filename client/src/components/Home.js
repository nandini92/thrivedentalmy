import styled from "styled-components";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Text } from "../contexts/LanguageContext";

const Home = () => {
  const [height, setHeight] = useState([100,0]);

  return (
    <Wrapper id="home">
      <TextWrapper>
        <TitleText>
          <Title><Text tid="landingHeader1" /></Title>
          <Title2><Text tid="landingHeader2"/></Title2>
        </TitleText>  
        {window.screen.width > 1000 && (
          <Description>
            <Text tid="landingDescription" />
        </Description>
        )}
          <Button smooth to='/#contact'><Text tid="option4" /></Button>
      </TextWrapper>
        {
          window.screen.width > 1000 && (
            <Images>
              <Image1>
                <Hue1 height={height[0]}></Hue1>
              </Image1>
              <Image2 onMouseEnter={() => setHeight([0,100])} onMouseLeave={() => setHeight([100,0])}>
                <Hue2 height={height[1]}></Hue2>
              </Image2>
            </Images>

          )
        }
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  padding-top:25vh;
  height: 100vh;
  /* margin: 0 15%; */

  @media (width < 1000px) {
    display: block;
    padding-top: 75vh;
    background-image: url("assets/vecteezy_senior-couple-embracing-outside_1223384.jpg");
    background-size: cover;
    background-position-x: center;
    background-position-y: top;
    margin: 0;
  }
`;
const TextWrapper = styled.div`
  display: flex;  
  flex-direction: column;
  /* margin-right: 10%; */
  width: 45vw;

  @media (width < 1000px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const TitleText = styled.div`
  /* padding-top: 50px; */
  position: relative;
  z-index: 1;
  font-size: 5rem;
  margin-bottom: 5vh;

  @media (width < 1000px) {
    text-align: center;
    padding: 0px;
    position: relative;
    font-size: 2.5em;
  }
`;
const Title = styled.h1`
  font-weight: 300;
  animation: slideRight 1s;
  
  @keyframes slideRight {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
  }
`;
const Title2 = styled.h1`
  font-weight: 500;
  padding-left: 150px;
  animation: slideLeft 1s;
  color: var(--zomp);

  @media (width < 1000px) {
  padding-left: 0px;
  }
  
  @keyframes slideLeft {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
// const Desc = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: top;

//   @media (width < 1000px) {
//   width: 100%;
//   margin-top: 150px;
//   align-self: start;
//   align-items: center;
//   }
// `;
const Description = styled.p`
  font-weight: 300;
  line-height: 1.5rem;
  margin-bottom: 5vh;
`;
const Button = styled(HashLink)`
  cursor: pointer;
  font-weight: 600;
  color: var(--zomp);
  background-color: var(--eerie-black);
  border-radius: 0.5rem;
  overflow :hidden; 
  padding: 1rem 2rem;
  text-align: center;
  width: 200px;
  text-decoration: none;
  transition: 0.2s transform ease-in-out;
  will-change: transform;

  &:hover{
    color: var(--eerie-black);
  }

  &::after{
    background-color: var(--zomp);
    border-radius: 0.5rem;
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(-110%, 0) rotate(10deg);
    transform-origin: bottom left;
    transition: 0.2s transform ease-out;
    z-index: -1;
  }

  &:hover::after{
    transform: translate(0, 0);
  }
`;
const Images = styled.div`
 margin-left: 5%;
  display: flex;
  height: 80vh;
  width: 50vh;
`;
const Image1 = styled.div`
  position: relative;
  top: 6%;
  right: 10%;
  background-image: url("assets/Crop1.JPG");
  background-size: cover;
  height: 62%;
  width: 30%;

  animation: slideUp 1s;
  
  @keyframes slideUp {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
  }
`;
const Hue1 = styled.div`
  background-color: var(--zomp);;
  z-index: 1;
  opacity: 0.5;
  height: ${props => `${props.height}%`};
  transition: ease-in-out 0.5s;
`;
const Image2 = styled.div`
  background-image: url("assets/Crop2.JPG");
  background-size: cover;
  height: 70%;
  width: 90%;

  animation: slideDown 1s;
  
  @keyframes slideDown {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
  }
`;
const Hue2 = styled.div`
  background-color: var(--eerie-black);
  z-index: 1;
  opacity: 0.5;
  height: ${props => `${props.height}%`};
  transition: ease-in-out 0.5s;
`;
export default Home;
