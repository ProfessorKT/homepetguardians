import React from "react";
import Image from "next/image";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="w-full h-[500px] flex justify-center flex-col mx-auto bg-[#dfdcdb]">
      <div className="flex justify-center align w-[75%] mx-auto">
        <Image
          src={Logo}
          alt=""
          style={{ width: "200px", height: "200px" }}
          className="mt-8 hidden md:block"
        />
        <div className="flex flex-col justify-center md:px-[100px] md:pl-[150px]">
          <h1 className="font-bold text-[22px] pb-5">Sitemap</h1>
          <p className="text-[18px] pb-3">Home</p>
          <p className="text-[18px] pb-3">Services</p>
          <p className="text-[18px] pb-3">About us</p>
          <p className="text-[18px] pb-3">Contact</p>
        </div>
        <div className="flex flex-col justify-center md:px-[100px]">
          <h1 className="font-bold text-[22px] pb-5">Socials</h1>
          <p className="text-[18px] pb-3">Facebook</p>
          <p className="text-[18px] pb-3">Linkedin</p>
          <p className="text-[18px] pb-3">Instagram</p>
          <p className="text-[18px] pb-3">Twitter</p>
        </div>
        <div className="flex flex-col justify-center md:px-[100px]">
          <div>
            <h1 className="font-bold text-[22px] pb-5 md:mt-[55px]">
              Head Office
            </h1>
            <p className="text-[18px] pb-3">
              Home pet Guardians © 20123. Kartuska 2137, Gdańsk{" "}
            </p>
            <p className="text-[18px] pb-3 md:pb-12">ZIP 80-210</p>
          </div>
          <div className="hidden md:block">
            <h1 className="font-bold text-[22px] pb-4">Newsletter</h1>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your email address"
              className="text-[20px] py-4 px-2 md:w-[300px] w-[120px] bg-inherit"
            />
          </div>
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
