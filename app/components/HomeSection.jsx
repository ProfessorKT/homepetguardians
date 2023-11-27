import React from "react";
import Image from "next/image";
import piesek from "../assets/piesek.png";

const HomeSection = () => {
  return (
<section id="home" className="grid gap-8 md:grid-cols-2">
        
        <div className="mt-[100px] ml-[10px] mr-[10px] text-[62px] font-medium mb-[20px] text-lef md:pl-[100px] md:pt-[200px]">Does your pet need care while you are away?</div>
        <div className="ml-[10px] mr-[10px] text-[40px] mb-[20px] text-left md:col-span-2 md:pl-[100px] md:w-1/2">We offer various care options for your pupil.</div>
        <button className="w-[400px]  px-[10px] py-[20px] text-[32px] bg-[#04A777] text-white rounded-full mx-auto md:h-[100px] md:w-[300px] md:ml-[100px]">Check our offer</button>
       <div className="mb-[10px] flex justify-center md:mt-[-400px]">
       <Image src={piesek} alt="" className=""/>
       </div>
       
     </section>
  );
};

export default HomeSection;
