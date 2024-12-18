import React from "react";
import image from "../../assets/images/Screenshot 2024-12-04 122858-1.png";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div id="about" className="flex max-[800px]:flex-col max-[800px]:pt-24">
      <div className="flex justify-center min-[800px]:hidden">
        <div className="bg-[#2a2a2a] w-[fit-content] inline-block py-2 px-4 rounded-[7px]">
          About me
        </div>
      </div>
      <div className="flex w-[25%] justify-center max-[800px]:w-[100%] max-[800px]:mt-5">
        <div>
          <Image src={image} alt="pic" />
        </div>
      </div>
      <div className="flex flex-col w-[75%] gap-6 max-[800px]:w-[100%]">
        <div>
          <div className="bg-[#2a2a2a] w-fit inline-block py-2 px-4 rounded-[7px] max-[800px]:hidden">
            About me
          </div>
        </div>
        <div className="text-[#00d070] text-4xl w-[530px] leading-none max-[800px]:max-w-[100%] max-[550px]:text-3xl max-[400px]:text-2xl">
          Transforming visions into exceptional portfolios
        </div>
        <div className="text-3xl text-[#c4c4c4] leading-normal mt-6 max-[550px]:text-2xl max-[400px]:text-xl max-[800px]:mt-0">
          Software Engineering graduate skilled in modern frontend technologies
          like JavaScript, TypeScript, ReactJS, Next.js, and MaterialUI.
          Experienced in building seamless UIs, integrating GraphQL and REST
          APIs, and collaborating effectively using tools like Git, Jira, and
          ClickUp. Passionate about transforming ideas into impactful digital
          experiences.
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
