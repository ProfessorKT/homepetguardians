import React from "react";
import Image from "next/image";
import dog from "../assets/dog.png";
import Link from "next/link";



const HomeSection = () => {
  return (


    <section id="home" className="w-full h-screen  justify-center">
      <div className="grid h-screen place-items-center mx-auto w-full">
        <div className="mt-[100px] lg:grid xl:grid-cols-3 lg:grid-cols-2 block gap-5 mx-[50px] w-[85%]">
          <div className="grid content-center lg:col-span-1 xl:col-span-2  max-w-[800px]">
            <div className="grid  w-full items-center text-6xl font-medium grow">
              Does your pet need care while you are away?
            </div>
            <div className="w-full">
              <p className="text-2xl mt-10">
                We offer various care options for your pupil.
              </p>
            </div>
            <div className="mt-12 lg:flex lg:w-[350px] w-full grid place-content-center lg:place-content-start">
              <Link
                href="/sign-up"
                className="w-[300px] py-[20px] text-2xl bg-[#04A777] text-white rounded-[32px] justify-center items-center align-middle text-center"
              >
                Check our offer
              </Link>
            </div>
          </div>
          <div className="lg:flex grid place-content-center mt-10 lg:mt-0 ">
            <Image src={dog} 
            alt="" 
            className="lg:max-w-[480px] max-w-[250px]" />
          </div>
        </div>
      </div>
     
    </section>
  );
};

export default HomeSection;
