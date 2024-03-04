import React from "react";
import Heading from "../components/Heading";
import Card from "./Card";
import { FaArrowRight } from "react-icons/fa";

function Projects() {
  return (
    <div className="mt-7">
      <Heading>Projects</Heading>
      <Card
        projectName="FitFork"
        techStack="Vite+React+Tailwind+Redux+Appwrite"
        description={
          <>
            <ul>
              <li className="flex items-center ">
                <FaArrowRight className="mr-2 text-green-500" /> A full-stack
                recipe sharing website to share veg healthy recipes.
              </li>
              <li className="flex items-center">
                <FaArrowRight className="mr-2 text-green-500" />
                Users can view post by others, add, update, delete and view
                their own posts.
              </li>
            </ul>
          </>
        }
        codeLink="https://github.com/suryansh-17/FitFork"
        liveSiteLink="https://fit-fork.vercel.app/"
      />
      <Card
        projectName="Rupay Track"
        techStack="Vite+React+Tailwind+Redux+Appwrite"
        description={
          <>
            <ul>
              <li className="flex items-center ">
                <FaArrowRight className="mr-2 text-green-500" /> A full stack
                personal expenses tracker website.
              </li>
              <li className="flex items-center">
                <FaArrowRight className="mr-2 text-green-500" />
                Users can add income and expenses and track their monthly
                expenses.
              </li>
              <li className="flex items-center">
                <FaArrowRight className="mr-2 text-green-500" />
                Users can visualize analytics of their transactions category
                wise and month wise.
              </li>
            </ul>
          </>
        }
        codeLink="https://github.com/suryansh-17/reactMiniProjects/tree/main/passwordGen"
      />
    </div>
  );
}

export default Projects;
