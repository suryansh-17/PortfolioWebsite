import React from "react";
import Heading from "../components/Heading";
import Card from "./Card";

function Projects() {
  return (
    <div className="mt-7">
      <Heading>Projects</Heading>
      <Card
        projectName="FitFork"
        techStack="React+Tailwind+Redux"
        description="A healthy recipies sharing website for all fitness enthusiast."
        codeLink="https://github.com/suryansh-17/FitFork"
      />
      <Card
        projectName="Password Genrator"
        techStack="React+Tailwind"
        description="A password genator that can take inputs from user about passoword needs and can generate password accordingly"
        codeLink="https://github.com/suryansh-17/reactMiniProjects/tree/main/passwordGen"
      />
    </div>
  );
}

export default Projects;
