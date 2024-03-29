import React from "react";
import Heading from "./Heading";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.png";
import github from "../assets/github.png";
import discord from "../assets/discord.png";
import telegram from "../assets/telegram.svg";
import linkedin from "../assets/linkedin.svg";
import leetcode from "../assets/leetcode.png";
function Socials() {
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
  console.log(socialsList[0].img);
  console.log(instagram);
  return (
    <>
      <div className="mt-7">
        <Heading>Get in Touch</Heading>
        <div className="m-4 ml-0">
          <ul className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10">
            {socialsList.map((item) => (
              <li key={item.name} className="mt-3 m-auto">
                <a href={item.url} target="_blank">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-12 rounded-xl"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Socials;
