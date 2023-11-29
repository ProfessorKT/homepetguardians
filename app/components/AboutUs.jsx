import React from "react";
import Image from "next/image";
import piesek from "../assets/dog.png";



const AboutUs = () => {
  return (

<section name="about-us" className="grid gap-8 md:grid-cols-2 w-full h-screen ">
  <div className="md:col-span-1 mb-[200px] flex justify-center md:mt-[150px] order-last ">
    <Image src={piesek} alt="" className="lg:max-w-[480px] max-w-[250px]"/>
  </div>
  <div className="mt-[70px] ml-[10px] md:col-span-2 md:ml-[200px] border-b-[4px] border-[#04A777] w-[170px] order-first md:mt-[10px]">
    <h1 className="text-[40px] font-medium ">About us</h1>
    
  </div>
  
  <div className="md:col-span-1 order-first md:order-last">
    <p className="font-bold text-[20px] mx-[10px] md:mt-60 mt-10 md:text-right md:mr-[200px] md:text-[26px]">
      Welcome to <span className="text-[#04A777]">HomePetGuardians</span>
    </p>
    <p className="text-[14px]  mx-[10px] md:text-right  md:mr-[200px] md:text-[22px]">
      your trusted partner in professional pet care!
    </p>
    <p className="text-[14px] my-[10px] mx-[10px] md:text-right  md:mr-[200px] md:text-[22px] md:my-[0px]">
      At <span className="text-[#04A777]">HomePetGuardians</span>, we take pride
      in our team of dedicated caregivers who understand the special bond you
      share with your pets.
    </p>
    <p className="text-[14px] my-[10px] mx-[10px] md:text-right  md:mr-[200px] md:text-[22px] md:my-[0px]">
      Our experienced professionals are committed to providing exceptional care
      for your furry family members in the comfort of their own homes.
    </p>
    <p className="text-[14px] my-[10px] mx-[10px] md:text-right  md:mr-[200px] md:text-[22px] md:my-[0px]">
      With a passion for animals and a focus on their well-being, our caregivers
      ensure that your pets receive the attention, love, and specialized care
      they deserve.
    </p>
    <p className="text-[14px] my-[10px] mx-[10px] md:text-right  md:mr-[200px] md:text-[22px] md:my-[0px]">
      Choose <span className="text-[#04A777]">HomePetGuardians</span> for peace
      of mind, knowing that your pets are in the hands of skilled and
      compassionate professionals who treat them like family.
    </p>
    
  </div>
  
</section>


  );
};

export default AboutUs;
