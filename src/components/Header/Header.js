import React, { useState, useEffect } from "react";
import {
  Nav,
  Logo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  ScrollPercentage,
} from "./HeaderElements";

const Header = ({ toggle }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (position / maxScroll) * 100;
      setScrollPosition(position);
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="Container">
      <Nav>
        <Logo to="/">
          <img src="/sumittPPr/myLogo.png" alt="logo" />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects">
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about">
            About
          </NavLink>
          <NavLink className="menu-item" to="contact">
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="downloadBtn"
            href="https://drive.google.com/file/d/1lYnCq2iaHX-YyrJI6hbny2REfI807qIq/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="18"
              height="18"
              src="/sumittPPr/download.svg"
              alt="Group Icon Logo"
            />
            <span>Download Resume</span>
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
      <ScrollPercentage
        style={{
          width: `${scrollPercentage}%`,
        }}
      ></ScrollPercentage>
    </div>
  );
};

export default Header;
