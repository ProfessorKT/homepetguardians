import React from "react";
import Image from "next/image";
import dogshadow from "../assets/dog-shadow.png";
import Link from "next/link";
import dognormal from "../assets/dog.png";

const HomeSection = () => {
  return (
    <div name="home" id="home" className="w-full h-screen">
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
                className="relative hidden md:inline-flex items-center justify-center w-[250px] h-[60px] p-4 px-6 py-3 overflow-hidden font-medium text-jade transition duration-300 ease-out border-2 border-jade rounded-full group"
              >
                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-jade group-hover:translate-x-0 ease">
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="absolute flex items-center justify-center w-full h-full text-jade transition-all duration-300 transform group-hover:translate-x-full ease">
                  Check our offer
                </span>
                {/* <span class="relative invisible"></span> */}
              </Link>
              <Link
                href="/dashboard"
                className="block md:hidden w-[246px] h-[56px] p-4 px-6 py-3.5 text-[16px] border-2 border-jade text-jade rounded-[32px] justify-center items-center align-middle text-center font-medium"
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
