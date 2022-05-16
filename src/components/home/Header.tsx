import styled from "styled-components";
import { Navbar } from "./Navbar";

export function Header() {
  return (
    <Wrapper>
      <Navbar />
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  height: 720px;

  position: relative;
  top: 0;

  background: url('/assets/header-bg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;