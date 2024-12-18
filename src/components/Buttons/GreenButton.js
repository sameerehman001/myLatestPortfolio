import React from "react";

const GreenButton = ({ btnText, onClickhandle }) => {
  return (
    <button
      onClick={onClickhandle}
      className="bg-[#01bf69] rounded-[7px] px-8 py-2 text-white text-[22px] max-[1200px]:text-[18px] max-[1000px]:text-[17px] max-[450px]:text-[15px]"
    >
      {btnText}
    </button>
  );
};

export default GreenButton;
