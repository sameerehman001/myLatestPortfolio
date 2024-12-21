"use client";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const phoneNoClick = () => {
    const phoneNumber = "+923065145627"; // Replace with your phone number in international format without '+' or spaces.
    const message = "Hello, I would like to connect with you!"; // Optional: Replace with your default message.
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank"); // Opens WhatsApp Web in a new tab
  };
  return (
    <div className="flex justify-center flex-col">
      <hr className="border-gray-700 w-[100%]" />
      <div className="flex justify-between py-6 max-[500px]:flex-col max-[500px]: gap-6">
        <div className="flex max-[800px]:flex-col gap-6">
          <a href="#">
            <p className="text-3xl text-[#00d070] max-[550px]:text-2xl max-[400px]:text-xl">
              {`<S`}
              <span className="text-white">{`amee`}</span>
              {`/> `}
            </p>
          </a>
          <div
            onClick={phoneNoClick}
            className="min-[800px]:hidden text-[#c4c4c4] pl-2 cursor-pointer"
          >
            +92 306 514 5627
          </div>
        </div>
        <div className="flex gap-8 items-center text-[#c4c4c4] max-[800px]:flex-col max-[500px]:items-start">
          <div
            onClick={phoneNoClick}
            className="max-[800px]:hidden cursor-pointer"
          >
            +92 306 514 5627
          </div>
          <div
            className="cursor-pointer"
            onClick={() =>
              (window.location.href = "mailto:samee6812@gmail.com")
            }
          >
            samee6812@gmail.com
          </div>
          <div className="flex gap-4">
            <div className="bg-[#c4c4c4] p-2 rounded-[50%] cursor-pointer">
              <a
                href={"https://www.linkedin.com/in/samee6812/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn color="black" />
              </a>
            </div>
            <div className="bg-[#c4c4c4] p-2 rounded-[50%] cursor-pointer">
              <a
                href={"https://www.instagram.com/samee_rehman001/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram color="black" />
              </a>
            </div>
            <div className="bg-[#c4c4c4] p-2 rounded-[50%] cursor-pointer">
              <a href={""} target="_blank" rel="noopener noreferrer">
                <FaTwitter color="black" />
              </a>
            </div>
            <div className="bg-[#c4c4c4] p-2 rounded-[50%] cursor-pointer">
              <a
                href={"https://github.com/sameerehman001"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub color="black" />
              </a>
            </div>
            <div className="bg-[#c4c4c4] p-2 rounded-[50%] cursor-pointer">
              <a
                href={"https://www.facebook.com/samee.rehman.142"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook color="black" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
