import React from "react";
import Logo from "./Logo";
import Typewriter from "typewriter-effect";
function Hero() {
  return (
    <>
      <div className="mt-12 mb-10">
        <Logo />
        <div>
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
              Student x Web Developer
            </p>
            <p className="text-md">📍Bengaluru</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
