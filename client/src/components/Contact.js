import styled from "styled-components";
import { Link } from "react-router-dom";
import { useRef, useContext } from "react";
import { BsFacebook } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";

import { Text, LanguageContext } from "../contexts/LanguageContext";

const Contact = ({ opacity }) => {
  const { dictionary } = useContext(LanguageContext);

  return (
    <Wrapper id="contact" opacity={opacity}>
      <Title><Text tid="option4" /></Title>
      <Container>
          <Info href="mailto:thrivedentalmy@gmail.com"><Mail />thrivedentalmy@gmail.com</Info>
          <Info href="tel:+60 10-234 1229"><Call />(010) 234-1229</Info>
          <Info href="https://www.facebook.com/thrivedentalmy/about" target="_blank">
            <Facebook />
          </Info>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  opacity: ${(props) => props.opacity};
  margin: 5% 10% 0px 10%;
  border-top: 1px solid var(--eerie-black);
  transition: opacity 0.2s ease-in-out;
  background-color: var(--silver);
  padding: 50px 100px;

  @media (width < 1000px) {
    display: flex;
    flex-direction: column;
    margin: 10% 0px;
    padding: 10%;
  }

  animation: ${(props) => props.opacity && "slideUp"} 1s;

  @keyframes slideUp {
    from {
      transform: translateY(800px);
      opacity: 0;
    }
  }
`;


const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
    
  @media (width < 1000px) {
    display: flex;
    flex-direction: column;
    margin: 0px;
  }
`;
const Info = styled.a`
  font-weight: 300;
  line-height: 1.5rem;
  margin: 15px;

  @media (width < 1000px) {
    font-size: 0.9rem;
  }
`
const Mail = styled(IoMdMail)`
  font-size: 1.5rem;
`
const Call = styled(IoCall)`
  font-size: 1.5rem;
`
const Facebook = styled(BsFacebook)`
  font-size: 1.5rem;
`
export default Contact;
