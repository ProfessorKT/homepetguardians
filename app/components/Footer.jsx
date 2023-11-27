import React from "react";
import Image from "next/image";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="flex mx-auto">
        <Image src={Logo} alt="" style={{ width: "55px" }} />
      </div>
    </div>
  );
};

export default Footer;
