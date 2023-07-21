import styled from "styled-components";

const Media = ({opacity}) => {
    return (
    <Wrapper opacity={opacity}>
    <Title>Read about us in detail</Title>
    <Slider>
        <a href="/assets/media/Brochure-2023.pdf" target="_blank"><Image src="/assets/media/MediaCoverage_1.JPG" alt="MediaCoverage"/></a>
        <a href="/assets/media/Brochure-2023.pdf" target="_blank"><Image src="/assets/media/MediaCoverage_2.JPG" alt="MediaCoverage"/></a>
        <a href="/assets/media/Brochure-2023.pdf" target="_blank"><Image src="/assets/media/MediaCoverage_3.JPG" alt="MediaCoverage"/></a>
        <a href="/assets/media/Brochure-2023.pdf" target="_blank"><Image src="/assets/media/MediaCoverage_4.JPG" alt="MediaCoverage"/></a>
        <a href="/assets/media/Utusan.pdf" target="_blank"><Image src="/assets/media/MediaCoverage_5.JPG" alt="Utusan"/></a>
    </Slider>
    </Wrapper> );
}

const Wrapper = styled.section`
  opacity: ${(props) => props.opacity};
  padding: 5% 1%;
  background-color: var(--eerie-black);
  transition: opacity 0.2s ease-in-out;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;

  @media (width < 1000px) {
    display: flex;
    flex-direction: column;
    margin-top: 10%;
    padding: 10%;
  }

  animation: ${(props) => props.opacity && "slideUp"} 1s;

  @keyframes slideUp {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
  }
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 2rem;
  padding: 50px;
  text-align: center;
  color: var(--keppel);
`;
const Slider = styled.div`
@media (width < 1000px) {
  display: flex;
  overflow-x: auto;
  max-width: 100vw;
}
`
const Image = styled.img`
    padding-left: 5px;
    max-height: 30vh;
`
export default Media;