import React from "react";
import Cat from "../assets/bentoCat.png";
import Image from "next/image";

const Services = () => {
  return (
    <div name="services" className="w-full h-screen">
      <h1 className="text-[36px] font-medium border-b-[4px] border-[#04A777] w-[163px] ml-[8px] pt-[76px]">
        Services
      </h1>
      <div className="flex justify-center mt-[20px]">
        <div
          name="bento"
          className="grid md:grid-cols-4 md:grid-rows-3 w-11/12 md:w-4/5 md:h-[752px] gap-x-[8px] gap-y-[8px] md:gap-x-[16px] md:gap-y-[16px]"
        >
          <div className="w-full h-[197px] md:h-full bg-gradient-to-r from-[#F1DABF] to-[#E4CDB1] rounded-[32px] flex flex-col items-center justify-evenly col-span-2 row-span-2">
            <p className="text-[16px] md:text-[20px] lg:text-[26px] xl:text-[32px] 2xl:text-[32px] font-semibold">
              Take care of your pet's happiness and provide it with professional
              care
            </p>
            <Image
              src={Cat}
              alt=""
              style={{ width: "200px", minWidth: "200px" }}
              priority={true}
            />
          </div>
          <div className="min-w-[174px] sm:min-w-0 w-full h-[130px] md:h-full bg-gradient-to-r from-[#F1DABF] to-[#E4CDB1] rounded-[32px] flex flex-col items-center justify-center">
            <p className="text-[16px] md:text-[20px] lg:text-[26px] xl:text-[32px] 2xl:text-[32px] font-semibold">
              Up to
            </p>
            <p className="text-[56px] md:text-[60px] lg:text-[68px] xl:text-[72px] 2xl:text-[94px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#04A777] to-[#0FEBAA]">
              3
            </p>
            <p className="text-[16px] md:text-[20px] lg:text-[26px] xl:text-[32px] 2xl:text-[32px] font-semibold">
              visits per day
            </p>
          </div>
          <div className="min-w-[174px] sm:min-w-0 w-full h-[130px] md:h-full bg-gradient-to-r from-[#F1DABF] to-[#E4CDB1] rounded-[32px] flex flex-col items-center justify-center">
            <p className="text-[16px] md:text-[20px] lg:text-[26px] xl:text-[32px] 2xl:text-[32px] font-semibold">
              Up to
            </p>
            <p className="text-[56px] md:text-[60px] lg:text-[68px] xl:text-[72px] 2xl:text-[94px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#04A777] to-[#0FEBAA]">
              10
            </p>
            <p className="text-[16px] md:text-[20px] lg:text-[26px] xl:text-[32px] 2xl:text-[32px] font-semibold">
              hours per visit
            </p>
          </div>
          <div className="w-full h-[197px] md:h-full bg-gradient-to-r from-[#F1DABF] to-[#E4CDB1] rounded-[32px] flex flex-row items-center justify-evenly col-span-2 row-span-2">
            <div className="flex flex-col items-center justify-center">
              <p className="text-[16px] md:text-[20px] lg:text-[26px] xl:text-[32px] 2xl:text-[32px] font-semibold">
                We are recommended by
              </p>
              <p className="text-[56px] md:text-[60px] lg:text-[68px] xl:text-[72px] 2xl:text-[94px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#04A777] to-[#0FEBAA]">
                99/100
              </p>
              <p className="text-[16px] md:text-[20px] lg:text-[26px] xl:text-[32px] 2xl:text-[32px] font-semibold">
                of ours clients
              </p>
            </div>
            <Image
              src={Cat}
              alt=""
              style={{ width: "200px", minWidth: "200px" }}
              priority={true}
            />
          </div>
          <div className="min-w-[174px] sm:min-w-0 w-full h-[130px] md:h-full bg-gradient-to-r from-[#F1DABF] to-[#E4CDB1] rounded-[32px] flex flex-col items-center justify-center">
            <p className="text-[16px] md:text-[20px] lg:text-[26px] xl:text-[32px] 2xl:text-[32px] font-semibold">
              Available
            </p>
            <p className="text-[56px] md:text-[60px] lg:text-[68px] xl:text-[72px] 2xl:text-[94px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#04A777] to-[#0FEBAA]">
              7
            </p>
            <p className="text-[16px] md:text-[20px] lg:text-[26px] xl:text-[32px] 2xl:text-[32px] font-semibold">
              days a week
            </p>
          </div>
          <div className="min-w-[174px] sm:min-w-0 w-full h-[130px] md:h-full bg-gradient-to-r from-[#F1DABF] to-[#E4CDB1] rounded-[32px] flex flex-col items-center justify-center">
            <p className="text-[16px] md:text-[20px] lg:text-[26px] xl:text-[32px] 2xl:text-[32px] font-semibold">
              Up to
            </p>
            <p className="text-[56px] md:text-[60px] lg:text-[68px] xl:text-[72px] 2xl:text-[94px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#04A777] to-[#0FEBAA]">
              2
            </p>
            <p className="text-[16px] md:text-[20px] lg:text-[26px] xl:text-[32px] 2xl:text-[32px] font-semibold">
              pets at once
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
