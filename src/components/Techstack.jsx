import React from "react";
import Heading from "./Heading";
import react from "../assets/react.svg";
import redux from "../assets/redux.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import javascript from "../assets/js.svg";
import tailwind from "../assets/tailwind.png";
import java from "../assets/java.svg";
import appwrite from "../assets/appwrite.svg";
import node from "../assets/nodejs.png";
import mongoDb from "../assets/mongoDb.png";
import express from "../assets/express.png";

function Techstack() {
  const skills = [
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
      name: "react",
      img: react,
    },
    {
      name: "redux",
      img: redux,
    },
    {
      name: "node",
      img: node,
    },
    {
      name: "express",
      img: express,
    },
    {
      name: "mongoDb",
      img: mongoDb,
    },
    {
      name: "tailwind",
      img: tailwind,
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
              <li key={item.name} className="mt-3 m-auto justify-center">
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
