import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Heading from "./Heading";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.png";
import github from "../assets/github.png";
import discord from "../assets/discord.png";
import telegram from "../assets/telegram.svg";
import linkedin from "../assets/linkedin.svg";
import leetcode from "../assets/leetcode.png";
import codef from "/project/workspace/src/assets/codef.svg";
import gfg from "/project/workspace/src/assets/gfg.png";
import codeforces from "/project/workspace/src/assets/codeforces.svg";
import git1 from "/project/workspace/src/assets/git1.png";

function Socials() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  const socialsList = [
    {
      name: "leetcode",
      img: leetcode,
      url: "https://leetcode.com/kishan_17/",
    },
    {
      name: "codeforces",
      img: codeforces,
      url: "https://codeforces.com/profile/TopGun_k17",
    },
    {
      name: "gfg",
      img: gfg,
      url: "https://www.geeksforgeeks.org/user/kishan_17/",
    },
    {
      name: "git1",
      img: git1,
      url: "https://github.com/kishan9535",
    },
  ];

  return (
    <div className="mt-7">
      <Heading>Coding Profiles</Heading>
      <div className="m-4 ml-0">
        <ul
          ref={ref}
          className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4"
        >
          {socialsList.map((item) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: 20 }} // Initial state for animation
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }} // Animation when in view
              transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 1.1 }}
              className="flex items-center justify-center p-1 md:p-2"
            >
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-xl"
                />
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Socials;
