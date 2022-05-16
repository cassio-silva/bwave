import styled from "styled-components";
import { Heading } from "../../styles/ComponentGlobalStyles";
import { CTAButton } from "../CTAButton";

export function SectionCollection() {
  return (
    <Wrapper>

      <TextContainer>
        <Heading>new <br /> collection</Heading>
        <span>
          bigwave
        </span>

        <CTAButton margin="4.5rem 0 1rem">
          see all
        </CTAButton>
      </TextContainer>

      <ImageWrapper>
        <img src="/assets/section-collection.png" alt="" draggable="false" />
      </ImageWrapper>

    </Wrapper>
  )
}

const ImageWrapper = styled.div`
  width: 100%;
  margin-left: -27rem;

  overflow: hidden;
  
  img {
    width: 100%;
    height: 413px;
    z-index: 0;
    transition: 0.3s ease-in-out;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 45%;

  z-index: 1;

  span {
    font-weight: 800;
    font-size: 1rem;
    line-height: 1.125rem;
    letter-spacing: 0.67em;
    margin-top: 10px;

    text-transform: uppercase;
    transition: 0.2s;
  }
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin: 2.5rem auto 1.5rem;
  
  &:hover {
    ${ImageWrapper} {
      img {
        transform: scale(112%);
        filter: brightness(0.75);
      }
    }
  }
`;
