import React from "react";
import Image from "next/image";
import dognormal from "../assets/dog.png";
import dogshadow1 from "../assets/dog-shadow1.png";

const AboutUs = () => {
  return (
    <div name="about-us" className="w-full h-screen">
      <div className="grid h-screen place-items-center mx-auto w-full">
        <div className="  lg:mt-[100px] lg:grid xl:grid-cols-4 lg:grid-cols-2 block gap-0 mx-[15%] lg:mx-[50px] w-[95%] sm:w-[90%] xl:w-[90%] 2xl:w-[85%]">
          <div className="grid content-center lg:col-span-1 xl:col-span-2 lg:max-w-[840px] w-full lg:mr-8">
            <div className="grid w-full items-center  text-3xl lg:text-6xl xl:text-7xl font-medium grow ">
              <div className="md:mt-[-50px] md:flex-col md:w-[80%] md:mx-auto">
                <h1 className="text-[40px] font-medium border-b-[4px] border-[#04A777] text-left w-[180px] lg:mt-[-150px] lg:ml-[-30px] md:ml-[-30px] md:mt-10px mt-20">
                  About Us
                </h1>
              </div>
              <Image
                src={dogshadow1}
                alt=""
                style={{
                  width: "480px",
                  minWidth: "480px",
                  maxHeight: "480px",
                }}
                className="lg:block hidden"
              />
            </div>
          </div>
          <div class="lg:flex lg:place-content-end mt-10 lg:mt-0 lg:text-[24px] lg:text-right xl:col-span-2 sm:text-left">
            <div>
              <span className="sm:text-[24px] md:text-[32px]  font-bold text-black">
                Welcome to
              </span>
              <span className=" sm:text-[24px] md:text-[32px]  font-bold text-[#04A777]">
                HomePetGuardians
              </span>
              ,<br className="sm:mt-0"></br>
              <span className=" sm:text-[14px] md:text-[20px] lg:text-[24px]">
                your trusted partner in professional pet care!
              </span>
              <br className="lg:hidden"></br>
              <br></br>
              <span className=" sm:text-[14px] md:text-[20px] lg:text-[24px]">
                At{" "}
                <span className="font-bold text-[#04A777]">
                  HomePetGuardians
                </span>
                , we take pride in our team of dedicated caregivers who
                understand the special bond you share with your pets.
              </span>
              <br className="lg:hidden"></br>
              <br></br>
              <span className=" sm:text-[14px] md:text-[20px] lg:text-[24px]">
                Our experienced professionals are committed to providing
                exceptional care for your furry family members in the comfort of
                their own homes.
              </span>
              <br className="lg:hidden"></br>
              <br></br>
              <span className=" sm:text-[14px] md:text-[20px] lg:text-[24px]">
                With a passion for animals and a focus on their well-being, our
                caregivers ensure that your pets receive the attention, love,
                and specialized care they deserve.
              </span>
              <br className="lg:hidden"></br>
              <br></br>
              <span className=" sm:text-[14px] md:text-[20px] lg:text-[24px]">
                Choose{" "}
                <span className="font-bold text-[#04A777]">
                  HomePetGuardians
                </span>{" "}
                for peace of mind, knowing that your pets are in the hands of
                skilled and compassionate professionals who treat them like
                family.
              </span>
            </div>
          </div>
          <Image
            src={dognormal}
            alt=""
            style={{
              width: "220px",
              minWidth: "220px",
              maxHeight: "220px",
            }}
            className="lg:hidden block mx-auto mt-[10px] sm"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
