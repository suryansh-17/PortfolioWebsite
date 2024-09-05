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

function Socials() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  const socialsList = [
    {
      name: "twitter",
      img: twitter,
      url: "https://twitter.com/suryansh17p",
    },
    {
      name: "linkedin",
      img: linkedin,
      url: "https://www.linkedin.com/in/suryansh-pandey-0b2966252/",
    },
    {
      name: "github",
      img: github,
      url: "https://github.com/suryansh-17",
    },
    {
      name: "discord",
      img: discord,
      url: "https://discord.com/users/374865982910627840",
    },
    {
      name: "telegram",
      img: telegram,
      url: "https://t.me/suryansh_17",
    },
    {
      name: "leetcode",
      img: leetcode,
      url: "https://leetcode.com/suryansh_17/",
    },
    {
      name: "instagram",
      img: instagram,
      url: "https://www.instagram.com/suryansh.017?igsh=YzcycTFheDg5dWk4",
    },
  ];

  return (
    <div className="mt-7">
      <Heading>Get in Touch</Heading>
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
