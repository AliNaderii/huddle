// COMPONENTS
import SocialIcons from "./SocialIcons";

// STYLES
import { StyledFooter } from "../styles/Footer.styled";
import { Container } from "../styles/Container.styled";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <div>
          <img src='./images/logo_white.svg' alt='' />

          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />
        </div>
        <p>&copy; 2021 Huddle. All rights reserved</p>
      </Container>
    </StyledFooter>
  );
}
