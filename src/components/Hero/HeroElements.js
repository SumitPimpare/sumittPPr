import styled, { keyframes } from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const HeroContainer = styled.div`
  padding-bottom: 0rem;
  padding-top: 3rem;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 150px;
  @media screen and (max-width: 992px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  flex: 1;

  h1 {
    font-size: 2.8rem;
    color: #f6f6f6;
    opacity: 0.98;
    font-weight: 400;
  }

  h5 {
    font-size: 1.6rem;
    color: rgb(119, 119, 121);
    margin-bottom: 1rem;
    font-weight: 400;
  }

  p {
    font-size: 17px;
    color: #f6f6f6;
    opacity: 0.85;
  }

  @media screen and (max-width: 992px) {
    text-align: center;
    align-items: center;
    margin-bottom: 1rem;

    h1 {
    font-size: 2.2rem;
  }

    h5 {
      font-size: 1.2rem;
      min-height: 5rem;
      margin-bottom: 0rem;
  }
`;

export const HeroRight = styled.div`
  flex: 1;
  @media screen and (max-width: 992px) {
    margin-top: -3.5rem;
    justify-content: center;
    display: flex;
  }
`;

export const Image = styled.img`
  height: 450px;
  width: auto;
  @media screen and (max-width: 992px) {
    height: 340px;
    width: auto;
  }
  transition: transform 0.3s ease, filter 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(8px 7px 1px rgb(53, 53, 53));
  }
`;

const ScrollAnimation = keyframes`
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

export const ScrollDown = styled(LinkScroll)`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  // position: absolute;

  animation: ${ScrollAnimation} 2s linear 0s infinite;
  @media screen and (max-width: 992px) {
    position: relative;
    justify-content: center;
    margin-top: 0.5rem;
  }
`;

export const ScrollLink = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  color: #f6f6f6;

  img {
    height: 35px;
    width: 35px;
    margin-left: 6px;
  }
`;

export const LoaderContainer = styled.div`
  width: 200px; 
  height: 500px; 
  display: flex;
  align-items: center;
  margin-left: 200px;
   @media screen and (max-width: 992px) {
    height: 340px;
    width: auto;
    margin-left: 0px;
  }
`;

export const Loader = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  border: 6px solid #f3f3f3; 
  border-top: 6px solid rgb(206, 38, 38); /* Blue */
  border-radius: 50%;
  align-items: center;
  animation: spin 1s linear infinite;

  @media screen and (max-width: 992px) {
    margin-left: 0px;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
