"use client";
import BorderedButton from "@/components/Buttons/BorderedButton";
import React from "react";

const StartProject = () => {
  const letsStart = () => {
    const fiverrUrl = "https://www.upwork.com/freelancers/~01b8aaa0427c2706ec";
    window.open(fiverrUrl, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="flex justify-center py-32">
      <div className="flex justify-between items-center bg-[#162635] py-16 px-16 w-[67%] rounded-[20px] gap-4 max-[800px]:flex-col max-[800px]:px-4 max-[800px]:text-center max-[800px]:gap-6 max-[600px]:w-[100%]">
        <div className="text-4xl">start a project</div>
        <div>
          Interested in working together? We should queue up a time to chat.
          l'll buy the tea.
        </div>
        <div className="flex justify-center">
          <BorderedButton buttonText={"Let's do this"} onClick={letsStart} />
        </div>
      </div>
    </div>
  );
};

export default StartProject;
