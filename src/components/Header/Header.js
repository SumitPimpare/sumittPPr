import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className="Container" style={{ padding: 0 }}>
      <Nav>
        <Logo to="/">
          <img src="/sumittPPr/logo.png" alt="logo" />
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
            href="https://drive.google.com/file/d/1uf-lPAZVKJeQwZa_X0r70ZEZWNFkv_Ui/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="18"
              height="18"
              src="/sumittPPr//download.svg"
              alt="Group Icon Logo"
            />
            <span>Download Resume</span>
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
