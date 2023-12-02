import React from "react";
import Image from "next/image";
import dogshadow from "../assets/dog-shadow.png";
import Link from "next/link";
import dognormal from "../assets/dog.png";

const HomeSection = () => {
  return (
    <div id="home" className="w-full h-screen">
      <div className="grid h-screen place-items-center mx-auto w-full">
        <div className=" mt-[50px] lg:mt-[100px] lg:grid xl:grid-cols-3 lg:grid-cols-2 block gap-0 mx-[15%] lg:mx-[50px] w-[95%] xl:w-[90%] 2xl:w-[85%]">
          <div className="grid content-center lg:col-span-1 xl:col-span-2 lg:max-w-[840px] w-full lg:mr-8">
            <div className="grid w-full items-center  text-3xl lg:text-6xl xl:text-7xl font-medium grow ">
              Does your pet need care while you are away?
            </div>
            <div className="w-full">
              <p className="text-xl lg:text-2xl mt-10">
                We offer various care options for your pupil.
              </p>
            </div>
            <div className="mt-12 mb-12 lg:mb-0 lg:flex lg:w-[350px] w-full grid place-content-center lg:place-content-start">
              <Link
                href="/dashboard"
                className="w-[300px] py-[20px] text-2xl bg-[#04A777] text-white rounded-[32px] justify-center items-center align-middle text-center"
              >
                Check our offer
              </Link>
            </div>
          </div>
          <div className="lg:flex lg:place-content-end mt-10 lg:mt-0">
            <Image
              src={dogshadow}
              alt=""
              style={{
                width: "480px",
                minWidth: "480px",
                maxHeight: "480px",
              }}
              className="lg:block hidden"
            />
            {/* zamiast tego zrobić karuzele */}
            <Image
              src={dognormal}
              alt=""
              style={{
                width: "265px",
                minWidth: "265px",
                maxHeight: "265px",
              }}
              className="lg:hidden block mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
