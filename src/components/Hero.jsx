import React from "react";
import Logo from "./Logo";

import Typewriter from "typewriter-effect";
import { MdOutlineFileDownload } from "react-icons/md";

const skills = [
  "Competative Programmer",
  "Full Stack Developer",
  "React Developer",
  "Node.js Developer",
  "JavaScript Enthusiast",
  "UI/UX Designer",
];

function Hero() {
  return (
    <>
      <div className="mt-12 mb-6">
        <Logo />

        <div>
          <div className="mt-3 mb-3 text-4xl font-mono font-bold text-black dark:text-white">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Kishan Kumar N")
                  .callFunction(() => {
                    console.log("Name typed out!");
                  })
                  .pauseFor(2500)
                  .start();
              }}
            />
          </div>

          <div className="font-mono text-neutral-800 dark:text-slate-50">
            <div className="text-xl">
              <Typewriter
                options={{
                  strings: skills,
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  pauseFor: 2500,
                }}
              />
            </div>
            <p className="text-md">📍Bengaluru,India</p>
            <a
              href="https://drive.google.com/file/d/1n9G0Nv_72Cpd6r5ZOnaeLij_gxPchpR3/view?usp=drivesdk"
              rel="noopener noreferrer"
              target="_blank"
              className="btn btn-primary"
            >
              <button className="flex font-mono text-lg bg-transparent hover:bg-green-500 text-green-500 font-bold hover:text-white py-2 px-4 mt-4 border border-green-500 hover:border-transparent">
                <MdOutlineFileDownload className="flex m-auto mr-1" />
                Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
