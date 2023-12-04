import React from "react";

const Services = () => {
  return (
    <div name="services" className="w-full h-screen">
      <h1 className="text-[36px] font-medium border-b-[4px] border-[#04A777] w-[163px] ml-[8px] pt-[76px]">
        Services
      </h1>
      <div className="flex justify-center mt-[24px]">
        <div
          name="bento"
          className="grid md:grid-cols-4 md:grid-rows-3 w-11/12 md:w-4/5 md:h-[752px] gap-x-[8px] gap-y-[8px] md:gap-x-[16px] md:gap-y-[16px]"
        >
          <div className="w-full h-[197px] md:h-full bg-gradient-to-r from-[#F1DABF] to-[#E4CDB1] rounded-[32px] flex items-center justify-center col-span-2 row-span-2">
            1
          </div>
          <div className="w-full h-[130px] md:h-full bg-gradient-to-r from-[#F1DABF] to-[#E4CDB1] rounded-[32px] flex items-center justify-center">
            2
          </div>
          <div className="w-full h-[130px] md:h-full bg-gradient-to-r from-[#F1DABF] to-[#E4CDB1] rounded-[32px] flex items-center justify-center">
            3
          </div>
          <div className="w-full h-[197px] md:h-full bg-gradient-to-r from-[#F1DABF] to-[#E4CDB1] rounded-[32px] flex items-center justify-center col-span-2 row-span-2">
            4
          </div>
          <div className="w-full h-[130px] md:h-full bg-gradient-to-r from-[#F1DABF] to-[#E4CDB1] rounded-[32px] flex items-center justify-center">
            5
          </div>
          <div className="w-full h-[130px] md:h-full bg-gradient-to-r from-[#F1DABF] to-[#E4CDB1] rounded-[32px] flex items-center justify-center">
            6
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
