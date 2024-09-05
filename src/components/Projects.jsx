import React from "react";
import Heading from "../components/Heading";
import Card from "./Card";

function Projects() {
  return (
    <div className="mt-7">
      <Heading>Projects</Heading>
      <Card
        projectName="VidSync API"
        techStack="Node.js+Express+MongoDB"
        description={
          <>
            <ul>
              <li className="flex items-center ">
                A feature-rich YouTube backend clone API having functionalities
                such as video management, user authentication, commenting
                system, subscription management, and more.
              </li>
            </ul>
          </>
        }
        codeLink="https://github.com/suryansh-17/Youtube-Clone"
      />
      <Card
        projectName="FitFork"
        techStack="Vite+React+Tailwind+Redux+Appwrite"
        description={
          <>
            <ul>
              <li className="flex items-center ">
                A full-stack recipe sharing website to share veg healthy recipes
                where users can view post by others, add, update, delete and
                view their own posts.
              </li>
            </ul>
          </>
        }
        codeLink="https://github.com/suryansh-17/FitFork"
        liveSiteLink="https://fit-fork.vercel.app/"
      />
    </div>
  );
}

export default Projects;
