import React from "react";
import Image from "next/image";
import piesek from "../assets/piesek.png";

const AboutUs = () => {
  return (
<section name="about-us" className="grid gap-8 md:grid-cols-2 w-full h-screen">
  <div className="md:col-span-1 mb-[200px] flex justify-center md:mt-[250px] order-last ">
    <Image src={piesek} alt="" className=""/>
  </div>
  <div className="md:col-span-1 order-first md:order-last">
    <div className="w-[170px] border-b-[4px] border-[#04A777] ml-[10px] md:ml-[-770px]">
      <h1 className="text-[40px] font-medium">About us</h1>
    </div>
    <p className="font-bold text-[26px] mx-[10px] md:mt-40 mt-20">
      Welcome to <span className="text-[#04A777]">HomePetGuardians</span>
    </p>
    <p className="text-[22px] mx-[10px]">
      your trusted partner in professional pet care!
    </p>
    <p className="text-[22px] mx-[10px]">
      At <span className="text-[#04A777]">HomePetGuardians</span>, we take pride
      in our team of dedicated caregivers who understand the special bond you
      share with your pets.
    </p>
    <p className="text-[22px] mx-[10px]">
      Our experienced professionals are committed to providing exceptional care
      for your furry family members in the comfort of their own homes.
    </p>
    <p className="text-[22px] mx-[10px]">
      With a passion for animals and a focus on their well-being, our caregivers
      ensure that your pets receive the attention, love, and specialized care
      they deserve.
    </p>
    <p className="text-[22px] mx-[10px]">
      Choose <span className="text-[#04A777]">HomePetGuardians</span> for peace
      of mind, knowing that your pets are in the hands of skilled and
      compassionate professionals who treat them like family.
    </p>
  </div>
</section>

  );
};

export default AboutUs;
