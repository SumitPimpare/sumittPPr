import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import LanguageProficiency from "../Languages/LanguageProficiency";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image src="/sumittPPr//man-svgrepo-com.svg" alt="man-svgrepo" />
          <div className="AboutBio">
            Hello! My name is <strong>Sumit Pimpare</strong>. I'm from
            Maharashtra, India and have been living in Pune for the past Seven
            years. And Working as a Software Engineering (React Developer) for 2
            years. During my time here, I gained valuable experience through
            various entry-level positions, which greatly enhanced my work ethic,
            communication skills, and adaptability.
            <br />
            <br />
            My journey into the world of technology began with a strong passion
            for problem-solving, which led me to pursue the Computer Systems
            Technology program. Despite its challenges, I remained determined
            and forged lasting friendships that supported me throughout this
            demanding program. Throughout my studies at SPPU, I had the
            opportunity to engage in fascinating projects.
            <br />
            <br />
            Working collaboratively within a team towards a shared objective has
            been an incredibly rewarding and unique experience for me. I am
            eager to continue exploring exciting projects in the future, with a
            particular interest in web development and cross-platform mobile
            development.
            <div className="tagline2">
              I have become confident using the following technologies:
            </div>
            <Technologies>
              {stackList.map((stack, index) => (
                <div animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </div>
              ))}
            </Technologies>
          </div>
          <LanguageProficiency />
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
