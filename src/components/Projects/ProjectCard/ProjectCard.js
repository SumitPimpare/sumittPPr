import React from "react";
import { ProjectList } from "../../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  TechCardContainer,
  TechCard,
} from "./ProjectCardElements";
function ProjectCard() {
  return (
    <>
      {ProjectList.map((list, index) => (
        <Card>
          <CardLeft>
            <img src={list.img} alt={list.name} />
          </CardLeft>
          <CardRight>
            <h4>{list.title}</h4>
            <p>{list.description}</p>
            <TechCardContainer>
              {list.tech_stack.map((tech, index) => (
                <TechCard key={index}>{tech}</TechCard>
              ))}
            </TechCardContainer>
          </CardRight>
        </Card>
      ))}
    </>
  );
}

export default ProjectCard;
