import MuiAccordion from "@/components/Accordion/Accordion";
import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="flex justify-center">
      <div className="flex justify-center w-[67%] max-[800px]:w-[100%]">
        <div className="flex flex-col py-20 gap-5 w-[100%]">
          <div className="flex justify-center">
            <div className="bg-[#2a2a2a] w-fit inline-block py-2 px-4 rounded-[7px]">
              Experience
            </div>
          </div>
          <div className="flex justify-center">
            <div className="text-[#00d070] text-center text-4xl w-[530px] leading-none max-[800px]:w-[100%] max-[550px]:text-3xl max-[400px]:text-2xl">
              Here is a quick summary of my most recent experiences
            </div>
          </div>
          <MuiAccordion />
        </div>
      </div>
    </div>
  );
};

export default Experience;
