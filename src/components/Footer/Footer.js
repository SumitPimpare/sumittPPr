import React from "react";
import styled from "@emotion/styled";
import "./Footer.css";

const FooterSection = styled.div`
  background-image: url(/sumittPPr/footer_wave.svg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
  position: relative;

  span {
    position: absolute;
    bottom: 4rem;
    color: #fff;

    a {
      text-decoration: underline;
    }
  }
`;
function Footer() {
  return (
    <FooterSection>
      <footer className="footerWrapper">
        <p>&copy; 2024, copyright Sumit Pimpare</p>
      </footer>
    </FooterSection>
  );
}

export default Footer;
