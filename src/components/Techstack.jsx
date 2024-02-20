import React from "react";
import Heading from "./Heading";
import react from "../assets/react.svg";
import redux from "../assets/redux.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import javascript from "../assets/js.svg";
import tailwind from "../assets/tailwind.svg";
import java from "../assets/java.svg";
import appwrite from "../assets/appwrite.svg";

function Techstack() {
  const skills = [
    {
      name: "react",
      img: react,
    },
    {
      name: "html",
      img: html,
    },
    {
      name: "css",
      img: css,
    },
    {
      name: "javascript",
      img: javascript,
    },
    {
      name: "tailwind",
      img: tailwind,
    },
    {
      name: "redux",
      img: redux,
    },
    {
      name: "appwrite",
      img: appwrite,
    },
    {
      name: "java",
      img: java,
    },
  ];
  return (
    <>
      <div className="mt-7">
        <Heading>Tech Stack</Heading>
        <div className="m-4 ml-0">
          <ul className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10">
            {skills.map((item) => (
              <li key={item.name} className="mt-3 m-auto ">
                <img src={item.img} alt={item.name} className="w-12" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Techstack;
