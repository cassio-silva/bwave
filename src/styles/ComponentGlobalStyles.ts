import styled from "styled-components";

export const GlobalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  width: 100%;
`;

export const GlobalMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 90%;
  max-width: 25rem;

  @media (min-width: ${props => props.theme.queries.tablet}) {
    max-width: 80rem;
  }
`;

type HeadingProps = {
  color?: string;
  margin?: string;
  textAlign?: string;
  width?: string;
}

export const Heading = styled.h1<HeadingProps>`
  width: ${props => props.width};

  color: ${props => props.color ? props.color : props.theme.color.black};
  font-size: 4rem;
  line-height: 4.25rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin: ${props => props.margin};
  text-align: ${props => props.textAlign};
`;

type ButtonProps = {
  margin?: string;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 200px;
  height: 62px;

  margin: ${props => props.margin};

  background-color: ${props => props.theme.color.black};
  position: relative;

  color: ${props => props.theme.color.white};
  font-size: 1.5rem;
  line-height: 1.75rem;
  font-weight: 500;
  text-transform: uppercase;
  border: 3px solid ${props => props.theme.color.black};

  cursor: pointer;
  transition: 0.2s;

  &::before {
    content: "";
    width: 17px;
    height: 4px;
    background-color: ${props => props.theme.color.green};
    margin-right: -1rem;
    margin-top: 1.875rem;
  }

  &:hover {
    background-color: ${props => props.theme.color.white};
    color: ${props => props.theme.color.black};
  }
`;