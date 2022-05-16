import styled from "styled-components";

export function SectionProductCards() {
  return (
    <Container>
      <Card href="/">
        <img src="/assets/banners/shirt.png" alt="" />
        <strong>t-shirts</strong>
        <span>collection</span>
      </Card>
      <Card href="/">
        <img src="/assets/banners/dress.png" alt="" />
        <strong>dresses</strong>
        <span>collection</span>
      </Card>
      <Card href="/">
        <img src="/assets/banners/bikini.png" alt="" />
        <strong>bikinis</strong>
        <span>collection</span>
      </Card>
      <Card href="/">
        <img src="/assets/banners/swimsuit.png" alt="" />
        <strong>swimsuits</strong>
        <span>collection</span>
      </Card>
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;

  margin-bottom: 1.75rem;
`;

const Card = styled.a`
  display: flex;

  max-width: 294px;
  width: 100%;
  max-height: 498px;
  overflow: hidden;

  position: relative;
  text-decoration: none;

  img {
   width: 100%; 
   height: 100%;
   transition: 0.2s;
  }
  
  strong {
    position: absolute;
    bottom: 5rem;
    left: 48%;
    transform: translateX(-50%);

    color: ${props => props.theme.color.white};
    font-size: 3rem;
    line-height: 3.5rem;
    text-transform: uppercase;
    font-weight: 700;
    font-style: italic;
    white-space: nowrap;
    
    text-align: center;
  }
  span {
    position: absolute;
    
    bottom: 4rem;
    left: 50%;
    transform: translateX(-50%);
    color: ${props => props.theme.color.white};
    text-transform: uppercase;
    letter-spacing: 0.65em;
    text-align: center;

    font-size: 1rem;
    line-height: 1.125rem;
  }

  &:hover, &:focus{
    img {
      transform: scale(110%);
      filter: brightness(0.75);
    }
  }
`;