import styled from "styled-components";
import { useContext } from "react";
import { BsFacebook } from "react-icons/bs";
import { IoMdMail  } from "react-icons/io";
import { IoCall, IoLocation } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";

import { Text, LanguageContext } from "../contexts/LanguageContext";

const Contact = ({ opacity }) => {
  const { dictionary } = useContext(LanguageContext);

  return (
    <Wrapper id="contact" opacity={opacity}>
      <Title>
        <Text tid="ContactTitle" />
      </Title>
        <Card>
          <Info href="mailto:thrivedentalmy@gmail.com">
            <Mail />
            <div>
              <p style={{fontWeight: 600}}>thrivedentalmy@gmail.com</p>
              <p>Send us an email</p>
            </div>
          </Info>
          <Info href="tel:+60 10-234 1229">
            <Call />
            <div>
              <p style={{fontWeight: 600}}>+60 10-234 1229</p>
              <p>Book an appointment</p>
            </div>
          </Info>
          <Info >
            <Pin />
            <div>
              <p style={{fontWeight: 600}}>Block C-GF-13, Damansara Intan,</p>
              <p>47400, Petaling Jaya</p>
            </div>
          </Info>
          <Info
            href="https://www.facebook.com/thrivedentalmy/about"
            target="_blank"
          >
            <div>
              <Facebook />
              <Instagram />
            </div>
            <p>Follow us on social media</p>
          </Info>
        </Card>
        <Card>
          <h3 style={{fontWeight: 600, textAlign: "center", marginBottom: "20px"}}>Opening Hours</h3>
          <OpeningHours><Days>Monday-Friday</Days><p>9am - 6pm</p></OpeningHours>
          <OpeningHours><Days>Saturday</Days><p>9am - 4pm</p></OpeningHours>
          <OpeningHours><Days>Sunday</Days><p>Closed</p></OpeningHours>
          <OpeningHours><Days>Public Holidays</Days><p> Closed on selected public holidays</p></OpeningHours>
        </Card>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  opacity: ${(props) => props.opacity};
  padding: 5% 0;
  background-color: var(--keppel);
  transition: opacity 0.2s ease-in-out;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (width < 1000px) {
    display: flex;
    flex-direction: column;
    margin-top: 10%;
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

// const Container = styled.div`
//   display: flex;
//   justify-content: space-evenly;

//   @media (width < 1000px) {
//     display: flex;
//     flex-direction: column;
//     margin: 0px;
//   }
// `;

const Title = styled.h2`
  font-weight: 600;
  font-size: 2rem;
  padding: 50px;
  text-align: center;
`;

const Card = styled.div`
  min-width: 20%;
  padding: 2% 3%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #a2dbce;
  border-radius: 5%;
  box-shadow: 0px -1px 20px 5px var(--zomp);

  @media (width < 1000px) {
    min-width: 100%;
    margin-bottom: 5%;
  }
`;
const Info = styled.a`
  display: flex;
  line-height: 1.5rem;
  text-decoration: none;
  padding: 5% 0;

  @media (width < 1000px) {
    font-size: 0.9rem;
  }
`;
const Mail = styled(IoMdMail)`
  font-size: 2rem;
  margin-right: 15px;
`;
const Call = styled(IoCall)`
  font-size: 2rem;
  margin-right: 15px;
`;
const Pin = styled(IoLocation)`
  font-size: 2rem;
  margin-right: 15px;
`;
const Facebook = styled(BsFacebook)`
  font-size: 2rem;
  margin-right: 15px;
`;
const Instagram = styled(RiInstagramFill)`
  font-size: 2rem;
  margin-right: 15px;
`

const OpeningHours = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 5px;
`

const Days = styled.p`
  font-weight: 600;
  margin-right: 50px;
`
export default Contact;
