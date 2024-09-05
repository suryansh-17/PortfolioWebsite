import React from "react";
import Logo from "./Logo";
import Typewriter from "typewriter-effect";
import { MdOutlineFileDownload } from "react-icons/md";
function Hero() {
  return (
    <>
      <div className="mt-12 mb-6">
        <Logo />

        <div className="">
          <div className="mt-3 mb-3 text-4xl font-mono font-bold text-black dark:text-white  ">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Suryansh Pandey")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(2500)
                  .start();
              }}
            />
          </div>
          <div className="font-mono  text-neutral-800 dark:text-slate-50">
            <p className="text-xl text-green-500 font-bold dark:text-green-500">
              Full Stack Developer
            </p>
            <p className="text-md">📍Bengaluru</p>
            <a
              href="https://drive.google.com/drive/folders/1wWyH_jlrYR9FS80zHLLC2B6EywaYiYVf?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
              className="btn btn-primary"
            >
              <button class="flex font-mono text-lg bg-transparent hover:bg-green-500 text-green-500 font-bold hover:text-white py-2 px-4 mt-4 border border-green-500 hover:border-transparent">
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
