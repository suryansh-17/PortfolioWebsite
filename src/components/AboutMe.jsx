import React from "react";
import Heading from "./Heading";
function AboutMe() {
  return (
    <>
      <div className="mt-5">
        <Heading textsize="text-l">About Me</Heading>
        <p className="mt-2 lg:mr-20 md:mr-0 mr-0  text-gray-800 dark:text-gray-200">
          I'm a 3rd-year{" "}
          <span className="font-bold text-green-500">Engineering student</span>{" "}
          with a passion for both pixels and powerups. By day, I'm a{" "}
          <span className="font-bold text-green-500">Web developer</span>,
          crafting responsive and interactive experiences. By night (or whenever
          I get a break!), I'm a dedicated{" "}
          <span className="font-bold text-green-500">gamer</span>, always ready
          for the next adventure.
        </p>
      </div>
    </>
  );
}

export default AboutMe;
