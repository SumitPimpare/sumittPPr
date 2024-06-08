import styled from "@emotion/styled";

export const ContactWrapper = styled.div`
  margin-top: 5rem;
`;

export const Image = styled.img`
  max-width: 120px;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

export const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: -2rem;
  @media screen and (max-width: 528px) {
    max-width: -20px;
    gap: 5%;
  }
`;

export const Tech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100px;
  min-width: 100px;
  margin-bottom: 2rem;
  @media screen and (max-width: 528px) {
    max-width: 20px;
    min-width: 60px;
    align-items: center;
  }
`;

export const TechImg = styled.img`
  height: 40px;
  width: 40px;
  padding-bottom: 5px;
  filter: drop-shadow(8px 7px 1px #d3d3d3);
`;

export const TechName = styled.div`
  font-size: 14px;
`;
