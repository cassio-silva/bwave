import styled from "styled-components";
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi"
import { AnchorLinks } from "./AnchorLinks";

export function Footer() {
  return (
    <Wrapper>
      <img src="/assets/logo-branco.png" draggable="false" />

      <SocialLinks>
        <AnchorLinks href="https://facebook.com" isExternal>
          <FiFacebook size={26} />
        </AnchorLinks>
        <AnchorLinks href="#" isExternal>
          <FiInstagram size={26} />
        </AnchorLinks>
        <AnchorLinks href="#" isExternal>
          <FiYoutube size={26} />
        </AnchorLinks>
        <AnchorLinks href="#" isExternal>
          <FiTwitter size={26} />
        </AnchorLinks>
      </SocialLinks>

      <NewsletterBlock>
        <strong>newsletter</strong>
        <form
          onSubmit={() => alert("Subscribed to the newsletter!")}
        >
          <EmailInput type={"email"} placeholder="Your e-mail" />
          <ButtonSubscribe type="submit"> subscribe now</ButtonSubscribe>
        </form>
      </NewsletterBlock>
    </Wrapper >
  )
}

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 10rem;

  padding: 2rem;
  
  background-color: ${props => props.theme.color.black};
  color: ${props => props.theme.color.white};

  img {
    width: 190px;
    height: 88px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  a {
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: ${props => props.theme.color.white};

    &:hover, &:focus {
      color: ${props => props.theme.color.green};
    }
  }
`;

const ButtonSubscribe = styled.button`
  display: block;
  border: 2px solid ${props => props.theme.color.white};
  text-transform: capitalize;
  background-color: ${props => props.theme.color.black};

  color: ${props => props.theme.color.white};
  font-size: 1rem;
  line-height: 110%;

  width: 125px;
  height: 51px;

  box-sizing: border-box;

  transition: 0.2s;

  &:hover, &:focus {
    border-color: ${props => props.theme.color.green};
    color: ${props => props.theme.color.green};
  }
`;

const NewsletterBlock = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  form {
    display: flex;
    flex-direction: row;
  }

  strong {
    font-size: 1.5rem;
    line-height: 125%;
    color: ${props => props.theme.color.white};
    text-transform: uppercase;
    position: absolute;
    top: -2.5rem;
  }
`;

const EmailInput = styled.input`
  width: 320px;
  margin-right: 1rem;

  padding-left: 1rem;

  border: 3px solid ${props => props.theme.color.white};
  background-color: ${props => props.theme.color.black};

  color: ${props => props.theme.color.white};
  font-size: 1rem;
  line-height: 1rem;
  font-weight: bold;
`;