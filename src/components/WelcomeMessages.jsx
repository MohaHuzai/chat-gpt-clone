import React from "react";
import Card from "./Card";
import bulb from "../assets/svgs/bulb.svg";
import pen from "../assets/svgs/pen.svg";
import globe from "../assets/svgs/globe.svg";
import degree from "../assets/svgs/degree.svg";
import ChatGPT from "../assets/svgs/chatgpt.svg";

const messages = [
  { alt: "pen", src: pen, text: "Thanking after an interview" },
  {
    alt: "bulb",
    src: bulb,
    text: "Write a short story",
  },
  { alt: "globe", src: globe, text: "Plan a relaxing day" },
  { alt: "degree", src: degree, text: "Quiz me on world capitals" },
];


const WelcomeMessages = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center absolute left-1/2 top-[40%] transform translate-x-[-50%] translate-y-[-50%]">
      <img src={ChatGPT} alt="ChatGPT logo" width={50} />
      <div className="flex gap-4 ">
        {messages.map((message, index) => (
          <Card
            key={index}
            alt={message.alt}
            src={message.src}
            text={message.text}
          />
        ))}
      </div>
    </div>
  );
};

export default WelcomeMessages;
