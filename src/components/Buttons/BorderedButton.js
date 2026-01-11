import React from "react";

const BorderedButton = ({ buttonText, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border border-[#01bf69] text-[#01bf69] rounded-[10px] px-4 py-2 w-[fit-content] white-space-nowrap hover:bg-[#01bf69] hover:text-black transition-all duration-300"
    >
      {buttonText}
    </button>
  );
};

export default BorderedButton;
