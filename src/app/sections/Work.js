"use client";
import BorderedButton from "@/components/Buttons/BorderedButton";
import Card from "@/components/card/Card";
import Image from "next/image";
import React, { useState } from "react";
import projectData from "../data/Work";

const Work = () => {
  const [visibleProjects, setVisibleProjects] = useState(3); // Default to 3 projects
  const [showAll, setShowAll] = useState(false); // Toggle for button text

  const handleViewMore = () => {
    if (showAll) {
      setVisibleProjects(3); // Show only the default 3 projects
    } else {
      setVisibleProjects(projectData.length); // Show all projects
    }
    setShowAll(!showAll); // Toggle the button state
  };

  return (
    <div id="work" className="flex justify-center">
      <div className="flex justify-center w-[70%]">
        <div className="flex flex-col py-20 gap-5">
          <div className="flex justify-center">
            <div className="bg-[#2a2a2a] w-fit inline-block py-2 px-4 rounded-[7px]">
              Work
            </div>
          </div>
          <div className="flex justify-center">
            <div className="text-[#00d070] text-center text-4xl w-[530px] leading-none max-[800px]:w-[100%] max-[550px]:text-3xl max-[400px]:text-2xl">
              Things I've built so far
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-14 mt-8 ">
            {projectData.slice(0, visibleProjects).map((item, index) => (
              <Card
                key={index}
                title={item.title}
                paragraph={item.paragraph}
                languages={item.languages}
                githubLink={item.githubLink}
                liveUrl={item.liveUrl}
                image={item.image}
              />
            ))}
          </div>
          {visibleProjects < projectData.length ? (
            <div className="flex justify-center mt-8 cursor-pointer">
              <BorderedButton
                buttonText={"View More"}
                onClick={handleViewMore}
              />
            </div>
          ) : (
            <div className="flex justify-center mt-8 cursor-pointer">
              <BorderedButton
                buttonText={"Hide Data"}
                onClick={handleViewMore}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
