import React from "react";
import { ProjectList } from "../../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  TechCardContainer,
  TechCard,
  BulletList,
  ListItem,
} from "./ProjectCardElements";
function ProjectCard() {
  return (
    <>
      {ProjectList.map((list, index) => (
        <Card key={index}>
          <CardLeft>
            <img src={list.img} alt={list.title} />
          </CardLeft>
          <CardRight>
            <h4>{list.title}</h4>
            <BulletList>
              {list.description.map((point, i) => (
                <ListItem key={i}>{point}</ListItem>
              ))}
            </BulletList>
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
