import React from "react";

const BorderedButton = ({ buttonText, onClick }) => {
  return (
    // <div className="border border-[#01bf69] text-[#01bf69] rounded-[10px] px-4 py-2 w-[fit-content]">
    //   {buttonText}
    // </div>
    <button
      onClick={onClick}
      className="border border-[#01bf69] text-[#01bf69] rounded-[10px] px-4 py-2 w-[fit-content]"
    >
      {buttonText}
    </button>
  );
};

export default BorderedButton;
