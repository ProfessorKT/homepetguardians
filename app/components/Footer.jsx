import React from "react";
import Image from "next/image";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="w-full h-[400px] flex justify-center flex-col mx-auto bg-[#dfdcdb]">
      <div className="flex justify-between align-middle w-[60%] mx-auto">
        <Image
          src={Logo}
          alt=""
          style={{ width: "200px", height: "200px" }}
          className=" hidden md:block"
        />
        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-[22px] pb-5">Sitemap</h1>
          <p className="text-[18px] pb-3">Home</p>
          <p className="text-[18px] pb-3">Services</p>
          <p className="text-[18px] pb-3">About us</p>
          <p className="text-[18px] pb-3">Contact</p>
        </div>
        <div className="flex flex-col justify-center ">
          <h1 className="font-bold text-[22px] pb-5">Socials</h1>
          <p className="text-[18px] pb-3">Facebook</p>
          <p className="text-[18px] pb-3">Linkedin</p>
          <p className="text-[18px] pb-3">Instagram</p>
          <p className="text-[18px] pb-3">Twitter</p>
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-[22px] pb-5">Head Office</h1>
          <p className="text-[18px] pb-1">
            Home Pet Guardians © 20123 Kartuska 2137
          </p>
          <p className="text-[18px] pb-3">ZIP 80-210</p>
          <h1 className="font-bold text-[22px]">Newsletter</h1>
          <input
            type="text"
            placeholder="Enter your email address"
            className="bg-inherit py-3 text-[18px] focus:outline-none hidden md:block"
          />
        </div>
      </div>
      <div className="flex justify-evenly align-middle pt-16 w-[65%] mx-auto">
        <h1 className="text-[18px] border-b-4 border-[#04A777]">
          contact@hpg.agency
        </h1>
        <h1 className="text-[18px] border-b-4 border-[#04A777]">
          (123)456-7890
        </h1>
        <h1 className="md:text-[18px]">
          © 2020 HomePetGuardians Media All rights reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
