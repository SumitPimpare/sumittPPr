import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
  LoaderContainer,
  Loader
} from "./HeroElements";
import { TypeAnimation } from "react-type-animation";
import ScrollAnimation from "react-animate-on-scroll";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroRight>
            <ScrollAnimation animateIn="fadeIn" style ={{display:"flex",justifyContent:"center"}} >
              {loading && (
                <LoaderContainer>
                  <Loader />
                </LoaderContainer>
              )}
              <Image
                src="/sumittPPr/devPic.png" 
                alt="developer"
                width="200px"
                height="500px"
                onLoad={handleImageLoad}
                style={{ display: loading ? 'none' : 'block' }}
              />
            </ScrollAnimation>
          </HeroRight>
          <HeroLeft>
            <ScrollAnimation animateIn="fadeIn">
              <TypeAnimation
                cursor={false}
                sequence={["Hi, I'm Sumit.", () => setShowSubtitle(true)]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle && (
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    500,
                    "A Front-End Developer.",
                    1000,
                    "A SPPU graduate.",
                    1000,
                    "A problem solver.",
                    1000,
                    "An innovative thinker.",
                    1000,
                    "A....",
                    1000,
                    "I design and code beautifully simple things, and I love what I do.",
                    1000,
                    "Ok...",
                    1000,
                    "Ok...  I'm running out of ideas...",
                    1000,
                    "Uhh...",
                    1000,
                    "Uhh... you can scroll down to see my projects now...",
                    300,
                    () => setShowScrollDown(true),
                    1000,
                    "check out my Experience!",
                    1000,
                    "You're uh... still here?",
                    1000,
                    "Ok, this has been fun, but I'm gonna restart the loop now...",
                    1000,
                    "See ya! :)",
                    500,
                  ]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={Infinity}
                />
              )}
            </ScrollAnimation>
          </HeroLeft>
        </HeroWrapper>
        {showScrollDown && (
          <ScrollAnimation animateIn="flipInX" offset={0}>
            <ScrollDown to="projects" id="scrollDown">
              <ScrollLink>
                Scroll down
                <img src="/sumittPPr/scroll-down.svg" alt="scroll-down" />
              </ScrollLink>
            </ScrollDown>
          </ScrollAnimation>
        )}
      </HeroContainer>
    </main>
  );
}

export default Hero;
