import React from "react";
import Image from "next/image";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="w-full h-[400px] flex justify-center flex-col mx-auto bg-[#dfdcdb]">
      <div className="lg:hidden py-4 mt-4 w-[80%] mx-auto">
        <h1 className="font-bold pb-2 text-[22px]">Newsletter</h1>
        <p className="pb-2">Enter your email address</p>
        <input type="text" className="w-[99%] mx-auto active:outline-none" />
      </div>
      <div className="flex justify-between align-middle w-[80%] mx-auto mt-6 md:mt-0">
        <Image
          src={Logo}
          alt=""
          style={{ width: "200px", height: "200px" }}
          className="hidden lg:block md:mr-5"
        />
        <div className="flex flex-col px-2 md:px-0 md:mr-5">
          <h1 className="font-bold md:text-[22px] text-[16px] pb-5">Sitemap</h1>
          <p className="md:text-[18px] text-[14px] md:pb-3">Home</p>
          <p className="md:text-[18px] text-[14px] md:pb-3">Services</p>
          <p className="md:text-[18px] text-[14px] md:pb-3">About us</p>
          <p className="md:text-[18px] text-[14px] md:pb-3">Contact</p>
        </div>
        <div className="flex flex-col px-2 md:px-0 md:mx-5">
          <h1 className="font-bold md:text-[22px] text-[16px] pb-5">Socials</h1>
          <p className="md:text-[18px] text-[14px] md:pb-3">Facebook</p>
          <p className="md:text-[18px] text-[14px] md:pb-3">Linkedin</p>
          <p className="md:text-[18px] text-[14px] md:pb-3">Instagram</p>
          <p className="md:text-[18px] text-[14px] md:pb-3">Twiter</p>
        </div>

        <div className="flex flex-col px-2 md:px-0 md:ml-5">
          <h1 className="font-bold md:text-[22px] text-[16px] pb-5">
            Head Office
          </h1>
          <p className="md:text-[18px] text-[14px] pb-1 hidden md:block">
            Home Pet Guardians © 2023 Kartuska 2137, Gdańsk
          </p>
          <p className="md:hidden text-[14px]">Home Pet Guardians © 20123</p>
          <p className="md:hidden text-[14px]">Kartuska 2137, Gdańsk</p>
          <p className="md:text-[18px] text-[14px] lg:pb-3 pb-1">ZIP 80-210</p>
          <h1 className="font-bold text-[22px] hidden lg:block">Newsletter</h1>
          <input
            type="text"
            placeholder="Enter your email address"
            className="bg-inherit py-3 text-[18px] focus:outline-none hidden lg:block"
          />
          <h1 className="lg:hidden block md:text-[18px] text-[10px]   pr-2 md:pr-0 whitespace-nowrap">
            (123) 456-7890
          </h1>
        </div>
      </div>

      <div className="flex justify-evenly align-middle pt-5 lg:pt-16 md:w-[90%] w-[100%] mx-auto whitespace-nowrap">
        <h1 className="md:text-[18px] md:mr-2 text-[10px] md:border-b-4 border-b-2 border-[#04A777] pr-2 md:pr-0">
          contact@hpg.agency
        </h1>
        <h1 className="lg:block hidden md:text-[18px] md:mx-2 text-[10px] md:border-b-4 border-b-2 border-[#04A777] pr-2 md:pr-0 whitespace-nowrap">
          (123) 456-7890
        </h1>
        <h1 className="md:text-[18px] md:ml-2 text-[8px] px-2 md:pr-0 whitespace-nowrap">
          © 2023 HomePetGuardians Media All rights reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
