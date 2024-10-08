import React from "react";
import Heading from "./Heading";

function AboutMe() {
  return (
    <>
      <div className="mt-5">
        <Heading textsize="text-l">About Me</Heading>
        <p className="mt-2 lg:mr-20 md:mr-0 mr-0 text-gray-800 dark:text-gray-200">
          At <span className="font-bold text-green-500">MSRIT</span>, I am a{" "}
          <span className="font-bold text-green-500">
            Final-year engineering student
          </span>
          . My passion for{" "}
          <span className="font-bold text-green-500">programming</span> has led
          me to be quite active on a number of{" "}
          <span className="font-bold text-green-500">
            problem-solving websites
          </span>
          . I'm also learning new things like{" "}
          <span className="font-bold text-green-500">machine learning</span> and{" "}
          <span className="font-bold text-green-500">
            mobile app development
          </span>
          , while exploring the{" "}
          <span className="font-bold text-green-500">web domain</span> of the
          programming world. I have experience with{" "}
          <span className="font-bold text-green-500">
            competitive programming
          </span>
          , and{" "}
          <span className="font-bold text-green-500">data structures</span> and{" "}
          <span className="font-bold text-green-500">algorithms</span>. I've
          been actively honing my{" "}
          <span className="font-bold text-green-500">
            problem-solving skills
          </span>{" "}
          on <span className="font-bold text-green-500">LeetCode</span>,{" "}
          <span className="font-bold text-green-500">Codeforces</span>, and{" "}
          <span className="font-bold text-green-500">GFG</span>.
        </p>
      </div>
    </>
  );
}

export default AboutMe;
