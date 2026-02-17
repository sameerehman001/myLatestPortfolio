"use client";
import React from "react";
import Image from "next/image";
import heroImage from "../../assets/images/Screenshot 2024-11-27 182311.png";
import GreenButton from "@/components/Buttons/GreenButton";
// import resume from "../../assets/cv/Samee Resume MERN.pdf";

const HeroSection = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Samee-Ur-Rehman Resume.pdf"; // Path to the file in the public folder
    link.download = "Samee-Ur-Rehman_ResumeCV.pdf"; // Set the desired file name
    link.click();
  };
  return (
    <div className="flex min-[800px]:h-[100vh] max-[800px]:flex-col">
      {/* image for mobile screen  */}
      <div className="flex w-[100%] justify-center items-center mt-12 min-[800px]:hidden">
        <Image
          src={heroImage}
          width={500}
          height={700}
          alt="Picture of the author"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-[300px] h-[450px] sm:w-[350px] sm:h-[375px] min-[550px]:w-[350px] min-[550px]:h-[400px]"
        />
      </div>
      {/* image for mobile image  */}
      <div className="flex flex-col justify-center w-[60%] gap-8 max-[800px]:w-[100%]">
        <div className="flex flex-col gap-2 max-[800px]:gap-0">
          <h1 className="text-5xl max-[1050px]:text-4xl max-[550px]:text-3xl max-[400px]:text-2xl">
            Hi, I'm
          </h1>
          <h2 className="text-6xl max-[1050px]:text-5xl font-bold text-[#fafafa] max-[550px]:text-4xl max-[400px]:text-3xl">
            Samee Ur Rehman
          </h2>
        </div>
        <div>
          <p className="text-3xl text-[#c4c4c4] max-[550px]:text-2xl max-[400px]:text-xl">
            A Passionate{" "}
            <span className="text-[#00d070]">
              {`<Frontend Web Developer /> `}
            </span>
            with 3 years of experience creating user friendly websites.
          </p>
        </div>
        <div>
          <GreenButton
            btnText={"Download My Resume"}
            onClickhandle={handleDownloadResume}
          />
        </div>
      </div>
      {/* <div className="w-[10%] max-[900px]:w-[5%]"></div> */}
      <div className="flex w-[40%] justify-end items-center max-[800px]:hidden">
        <Image
          src={heroImage}
          width={700}
          height={900}
          alt="Picture of the author"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};

export default HeroSection;
