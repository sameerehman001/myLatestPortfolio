import Image from "next/image";
import React from "react";
import skills from "../data/Skills";
// import javascript from "../../assets/images/99371_javascript_512x512.png";
// import typescript from "../../assets/images/Typescript_logo_2020.svg.png";
// import react from "../../assets/images/React-icon.svg.png";
// import next from "../../assets/images/next-js-logo-freelogovectors.net-white_.png";
// import redux from "../../assets/images/logo (1).png";
// import tailwind from "../../assets/images/Tailwind_CSS_Logo.svg.png";
// import figma from "../../assets/images/Figma-1-logo.png";
// import mongo from "../../assets/images/2945120.webp";
// import bootstrap from "../../assets/images/Bootstrap_logo.svg.png";
// import github from "../../assets/images/git-icon-2048x2048-juzdf1l5.png";
// import npm from "../../assets/images/npm-logo-F0E1FE956F-seeklogo.com.png";
// import yarn from "../../assets/images/yarn-logo-F5E7A65FA2-seeklogo.com.png";

const Skills = () => {
  return (
    <div
      id="skills"
      className="flex flex-col items-center justify-center py-20 gap-5"
    >
      <div className="bg-[#2a2a2a] w-fit inline-block py-2 px-4 rounded-[7px]">
        Skills
      </div>
      <div className="text-[#00d070] justify-center text-center text-4xl w-[530px] leading-none max-[800px]:w-[100%] max-[550px]:text-3xl max-[400px]:text-2xl">
        The skills, tools and technologies I am really good at:
      </div>
      <div className="flex flex-wrap gap-10 max-w-[620px]">
        {skills.map((item, index) => (
          <div
            key={index}
            className="flex flex-col w-fit justify-center items-center"
          >
            <div className="flex w-[55px] h-[50px] max-[600px]:w-[35px] max-[600px]:h-[30px]">
              <Image src={item.Image} alt="pic" />
            </div>
            <p className="py-1">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
