import styled from "styled-components";

export function Navbar() {
  return (
    <Container>
      <img src="/assets/logo.png" alt="" draggable="false" />

      <NavbarItems>
        <a href="/">
          Home
          <HoverBar />
        </a>
        <a href="/about-us">
          About Us
          <HoverBar />
        </a>
        <a href="/">
          Products
          <HoverBar />
        </a>
        <a href="/">
          Contact Us
          <HoverBar />
        </a>
      </NavbarItems>
    </Container>
  )
}

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 100px 100px 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(5,5,5,0) 100%);

  img {
    width: 200px;
    height: 80px;
  }
`;

const HoverBar = styled.div`
  display: flex;
  width: 0;
  max-width: 100%;
  height: 4px;
  background-color: ${props => props.theme.color.green};
  transition: 0.2s;

  margin-top: 2px;

  position: absolute;
  bottom: -4px;
`;

const NavbarItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-style: italic;
  color: ${props => props.theme.color.white};
  font-weight: 700;

  a {
    text-decoration: none;
    text-transform: uppercase;
    line-height: 1.75rem;
    padding: 0 0.5rem;
    color: ${props => props.theme.color.white};
    transition: 0.2s;
    position: relative;
    letter-spacing: 0.15em;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    
    &:hover {
      color: black;
      ${HoverBar} {
        width: 1rem;
      }
    }
  }
`;
