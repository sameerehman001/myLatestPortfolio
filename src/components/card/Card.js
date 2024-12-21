import Image from "next/image";
import React from "react";
import github from "../../assets/images/Black-Github-Logo-PNG-Image-Background copy.png";
import attach from "../../assets/images/attachment-vector-icon-png_267486.png";

const Card = ({ title, paragraph, languages, githubLink, liveUrl, image }) => {
  return (
    <div className="flex flex-wrap gap-6 max-w-[630px]">
      <div className="flex flex-col max-w-[350px] max-h-[503px] border-gray-700 border-2 rounded-2xl max-[470px]:max-h-[550px]">
        {/* <div className="w-[100%] h-[240px]"> */}
        <Image
          src={image}
          className="w-[100%] h-[100%] rounded-t-[15px]"
          alt="pics"
        />
        {/* </div> */}
        <div className="flex flex-col p-5 max-[500px]:px-2">
          <div className="flex flex-col gap-3">
            <p className="text-[20px] text-[#fcfcfc]">{title}</p>
            <p className="text-[#b1b1b1] text-[16px] h-[125px] max-[470px]:h-[165px]">
              {paragraph}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {languages.map((item, index) => (
              <div
                key={index}
                className="bg-[#333333] px-2 py-1 w-[fit-content] text-[12px] rounded-md"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <div className="flex items-center gap-1">
                <div className="flex h-[20px] w-[20px]">
                  <Image src={attach} alt="pic" />
                </div>
                <div className="underline text-[13px]">Live Preview</div>
              </div>
            </a>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <div className="flex items-center gap-1">
                <div className="flex h-[20px] w-[20px]">
                  <Image src={github} alt="pic" />
                </div>
                <div className="underline text-[13px]">View Code</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
